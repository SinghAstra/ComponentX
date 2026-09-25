import { promises as fs } from 'node:fs'
import path from 'node:path'

import { glob } from 'glob'
import { Project, SourceFile } from 'ts-morph'

type RegistryFile = {
  name: string
  content: string
}

type Registry = {
  name: string
  externalDependencies: string[]
  internalDependencies: string[]
  registryDependencies: string[]
  file: RegistryFile
}

const COMPONENTS_PATH = path.resolve(
  process.cwd(),
  'apps/www/components/component-x',
)

const REGISTRY_OUTPUT_PATH = path.resolve(
  process.cwd(),
  'apps/www/public/registry/components',
)

type DependencyLists = Pick<
  Registry,
  'externalDependencies' | 'internalDependencies' | 'registryDependencies'
>

const COMPONENT_PREFIX = '@/components/component-x/'
const UI_PREFIX = '@/components/ui/'

const FRAMEWORK_PACKAGES = new Set(['react', 'react-dom', 'next'])

const ALIAS_TEMPLATES: Record<string, string> = {
  '@/lib/utils': '<%= it.aliases.utils %>',
  '@/lib/variants': '<%= it.aliases.variants %>',
}

function rewriteLibAliases(sourceFile: SourceFile) {
  for (const declaration of sourceFile.getImportDeclarations()) {
    const specifier = declaration.getModuleSpecifierValue()
    const template = ALIAS_TEMPLATES[specifier]
    if (template) {
      declaration.getModuleSpecifier().replaceWithText(`'${template}'`)
    }
  }
}

function toPackageName(specifier: string): string {
  const segments = specifier.split('/')
  return specifier.startsWith('@')
    ? `${segments[0]}/${segments[1]}`
    : segments[0]
}

function classifyImports(specifiers: string[]): DependencyLists {
  const externalDependencies = new Set<string>()
  const internalDependencies = new Set<string>()
  const registryDependencies = new Set<string>()

  for (const specifier of specifiers) {
    if (specifier.startsWith(COMPONENT_PREFIX)) {
      internalDependencies.add(specifier.slice(COMPONENT_PREFIX.length))
      continue
    }

    if (specifier.startsWith(UI_PREFIX)) {
      registryDependencies.add(specifier.slice(UI_PREFIX.length))
      continue
    }

    if (specifier.startsWith('@/lib/')) {
      continue
    }
    if (specifier.startsWith('@/components/providers/')) {
      continue
    }

    const packageName = toPackageName(specifier)

    if (FRAMEWORK_PACKAGES.has(packageName)) {
      continue
    }

    externalDependencies.add(packageName)
  }

  return {
    externalDependencies: [...externalDependencies].sort(),
    internalDependencies: [...internalDependencies].sort(),
    registryDependencies: [...registryDependencies].sort(),
  }
}


async function main() {
  try {
    console.log('Initializing registry generation...')

    await fs.rm(REGISTRY_OUTPUT_PATH, { recursive: true, force: true })
    await fs.mkdir(REGISTRY_OUTPUT_PATH, { recursive: true })

    const project = new Project()
    const componentPaths = await glob(`${COMPONENTS_PATH}/*.tsx`)

    const components: string[] = []

    for (const componentPath of componentPaths) {
      const sourceFile = project.addSourceFileAtPath(componentPath)
      const importSpecifiers = sourceFile
        .getImportDeclarations()
        .map(declaration => declaration.getModuleSpecifierValue())

      const dependencies = classifyImports(importSpecifiers)
      rewriteLibAliases(sourceFile)

      const { name, base } = path.parse(sourceFile.getBaseName())

      console.log(`Processing component: ${name}`)

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

      console.log(`Processed component: ${name}`)

      components.push(name)
    }

    components.sort()

    await fs.writeFile(
      path.join(REGISTRY_OUTPUT_PATH, 'index.json'),
      JSON.stringify({ components }, null, 2),
      'utf8',
    )

    console.log('Registry generation completed successfully.')
  } catch (error) {
    console.log('Error during registry generation.')
    if (error instanceof Error) {
      console.log('error.stack is ', error.stack)
      console.log('error.message is ', error.message)
    }
    process.exit(1)
  }
}

main()
