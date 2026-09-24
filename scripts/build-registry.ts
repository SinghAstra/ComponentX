import path from 'node:path'

import { glob } from 'glob'
import { Project } from 'ts-morph'

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


async function main() {
  try {
    console.log('Initializing registry generation...')

    const project = new Project()
    const componentPaths = await glob(`${COMPONENTS_PATH}/*.tsx`)

    const importSpecifiersByComponent = new Map<string, string[]>()

    for (const componentPath of componentPaths.slice(0,2)) {
      const sourceFile = project.addSourceFileAtPath(componentPath)
      const importSpecifiers = sourceFile
        .getImportDeclarations()
        .map(declaration => declaration.getModuleSpecifierValue())
      importSpecifiersByComponent.set(sourceFile.getBaseName(), importSpecifiers)
    }


    void importSpecifiersByComponent
    void ({} as Registry)
  } catch (error) {
    console.log('Error during registry generation.')
    if(error instanceof Error){
      console.log("error.stack is ",error.stack)
      console.log("error.message is ",error.message)
    }
    process.exit(1)
  }
}

main()
