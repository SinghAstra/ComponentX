import { promises as fs } from 'node:fs'
import path from 'node:path'

import { glob } from 'glob'
import { Project, SourceFile } from 'ts-morph'

import {
  ALIAS_TEMPLATES,
  COMPONENTS_PATH,
  INDEX_FILE_NAME,
  REGISTRY_OUTPUT_PATH,
  Registry,
  classifyImports,
} from './registry-rules.js'

function rewriteLibAliases(sourceFile: SourceFile) {
  for (const declaration of sourceFile.getImportDeclarations()) {
    const specifier = declaration.getModuleSpecifierValue()
    const template = ALIAS_TEMPLATES[specifier]
    if (template) {
      declaration.getModuleSpecifier().replaceWithText(`'${template}'`)
    }
  }
}


async function main() {
  const startedAt = Date.now()

  try {
    console.log('Initializing registry generation...')

    await fs.rm(REGISTRY_OUTPUT_PATH, { recursive: true, force: true })
    await fs.mkdir(REGISTRY_OUTPUT_PATH, { recursive: true })

    const project = new Project()
    const componentPaths = (await glob(`${COMPONENTS_PATH}/*.tsx`)).sort()

    if (componentPaths.length === 0) {
      throw new Error(`No components found in ${COMPONENTS_PATH}`)
    }

    const components: string[] = []

    for (const componentPath of componentPaths) {
      const componentStartedAt = Date.now()
      const sourceFile = project.addSourceFileAtPath(componentPath)
      const importSpecifiers = sourceFile
        .getImportDeclarations()
        .map(declaration => declaration.getModuleSpecifierValue())

      const dependencies = classifyImports(importSpecifiers)
      rewriteLibAliases(sourceFile)

      const { name, base } = path.parse(sourceFile.getBaseName())

      const entry: Registry = {
        name,
        ...dependencies,
        file: {
          name: base,
          content: sourceFile.getFullText(),
        },
      }

      await fs.writeFile(
        path.join(REGISTRY_OUTPUT_PATH, `${name}.json`),
        JSON.stringify(entry, null, 2),
        'utf8',
      )

      components.push(name)

      console.log(
        `Processed ${name} in ${Date.now() - componentStartedAt}ms (${components.length}/${componentPaths.length})`,
      )
    }

    components.sort()

    await fs.writeFile(
      path.join(REGISTRY_OUTPUT_PATH, INDEX_FILE_NAME),
      JSON.stringify({ components }, null, 2),
      'utf8',
    )

    console.log(
      `Registry generation completed successfully: ${components.length} components in ${Date.now() - startedAt}ms.`,
    )
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Registry generation failed: ${error.message}`)
      console.error(error.stack)
    } else {
      console.error('Registry generation failed with an unknown error.')
    }
    process.exit(1)
  }
}

main()
