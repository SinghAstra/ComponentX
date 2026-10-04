import { promises as fs } from 'node:fs'
import path from 'node:path'

import { glob } from 'glob'
import { Project } from 'ts-morph'

import {
  ALIAS_TEMPLATES,
  COMPONENTS_PATH,
  INDEX_FILE_NAME,
  LIB_PREFIX,
  REGISTRY_OUTPUT_PATH,
  Registry,
  classifyImports,
  isLiteralSpecifier,
} from './registry-rules.js'

const DEPENDENCY_LISTS = [
  'externalDependencies',
  'internalDependencies',
  'registryDependencies',
] as const

function arraysEqual(a: string[], b: string[]): boolean {
  return a.length === b.length && a.every((value, index) => value === b[index])
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every(item => typeof item === 'string')
}

async function main() {
  const failures: string[] = []

  const fail = (message: string) => {
    failures.push(message)
    console.error(`FAIL: ${message}`)
  }

  const pass = (message: string) => {
    console.log(`PASS: ${message}`)
  }

  const componentNames = (await glob(`${COMPONENTS_PATH}/*.tsx`))
    .map(componentPath => path.parse(componentPath).name)
    .sort()

  if (componentNames.length === 0) {
    fail(`no components found in ${COMPONENTS_PATH}`)
  }

  let indexComponents: string[] = []

  try {
    const index = JSON.parse(
      await fs.readFile(
        path.join(REGISTRY_OUTPUT_PATH, INDEX_FILE_NAME),
        'utf8',
      ),
    ) as { components?: unknown }

    if (isStringArray(index.components)) {
      indexComponents = index.components
    } else {
      fail(`${INDEX_FILE_NAME} does not list components as an array of strings`)
    }
  } catch {
    fail(`${INDEX_FILE_NAME} is missing or not valid JSON`)
  }

  if (!arraysEqual(indexComponents, [...indexComponents].sort())) {
    fail(`${INDEX_FILE_NAME} is not sorted alphabetically`)
  } else {
    pass(
      `${INDEX_FILE_NAME} is sorted alphabetically (${indexComponents.length} entries)`,
    )
  }

  if (!arraysEqual(indexComponents, componentNames)) {
    fail(
      `${INDEX_FILE_NAME} lists [${indexComponents}] but the source directory has [${componentNames}]`,
    )
  } else if (componentNames.length > 0) {
    pass(
      `${INDEX_FILE_NAME} matches the ${componentNames.length} components in source`,
    )
  }

  const registryNames = (await glob(`${REGISTRY_OUTPUT_PATH}/*.json`))
    .map(registryPath => path.parse(registryPath).base)
    .filter(fileName => fileName !== INDEX_FILE_NAME)
    .map(fileName => path.parse(fileName).name)
    .sort()

  if (!arraysEqual(registryNames, componentNames)) {
    fail(
      `registry files [${registryNames}] do not match the source components [${componentNames}]`,
    )
  } else if (componentNames.length > 0) {
    pass(
      `registry files match the source components (${registryNames.length} files)`,
    )
  }

  const project = new Project()

  for (const name of componentNames) {
    const failuresBefore = failures.length

    let entry: Partial<Registry>

    try {
      entry = JSON.parse(
        await fs.readFile(
          path.join(REGISTRY_OUTPUT_PATH, `${name}.json`),
          'utf8',
        ),
      ) as Partial<Registry>
    } catch {
      fail(`${name}.json is missing or not valid JSON`)
      continue
    }

    if (entry.name !== name) {
      fail(`${name}.json has name "${String(entry.name)}"`)
    }

    if (entry.file?.name !== `${name}.tsx`) {
      fail(`${name}.json has file.name "${String(entry.file?.name)}"`)
    }

    if (
      typeof entry.file?.content !== 'string' ||
      entry.file.content.length === 0
    ) {
      fail(`${name}.json has an empty file.content`)
      continue
    }

    const content = entry.file.content
    const sourceFile = project.addSourceFileAtPath(
      path.join(COMPONENTS_PATH, `${name}.tsx`),
    )
    const specifiers = sourceFile
      .getImportDeclarations()
      .map(declaration => declaration.getModuleSpecifierValue())
    const expected = classifyImports(specifiers)

    for (const specifier of new Set(specifiers)) {
      if (specifier.startsWith(LIB_PREFIX) && !ALIAS_TEMPLATES[specifier]) {
        fail(
          `${name}.tsx imports ${specifier}, which the registry does not ship — inline it in the component so the file stays self-contained`,
        )
      }
    }

    for (const listName of DEPENDENCY_LISTS) {
      const list = entry[listName]

      if (!isStringArray(list)) {
        fail(`${name}.json ${listName} is not an array of strings`)
        continue
      }

      if (!arraysEqual(list, [...list].sort())) {
        fail(`${name}.json ${listName} is not sorted alphabetically`)
      }

      if (new Set(list).size !== list.length) {
        fail(`${name}.json ${listName} contains duplicates`)
      }

      if (!arraysEqual(list, expected[listName])) {
        fail(
          `${name}.json ${listName} is [${list}] but the source imports imply [${expected[listName]}]`,
        )
      }
    }

    if (content.includes('@/lib/')) {
      fail(`${name}.json file.content still contains a literal @/lib/ specifier`)
    }

    for (const specifier of new Set(specifiers)) {
      if (isLiteralSpecifier(specifier) && !content.includes(specifier)) {
        fail(`${name}.json file.content lost the literal specifier ${specifier}`)
      }
    }

    for (const [specifier, template] of Object.entries(ALIAS_TEMPLATES)) {
      const imported = specifiers.includes(specifier)
      const placeholder = content.includes(template)

      if (imported && !placeholder) {
        fail(`${name}.json file.content is missing the ${template} placeholder`)
      }

      if (!imported && placeholder) {
        fail(
          `${name}.json file.content has the ${template} placeholder without importing ${specifier}`,
        )
      }
    }

    if (failures.length === failuresBefore) {
      pass(`${name}.json matches its source component`)
    }
  }

  if (failures.length > 0) {
    console.error(`Registry check failed: ${failures.length} failure(s).`)
    process.exit(1)
  }

  console.log(
    `Registry check passed: ${componentNames.length} components verified against source.`,
  )
}

main()

