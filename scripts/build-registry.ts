import path from 'node:path'

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
    void COMPONENTS_PATH
    void REGISTRY_OUTPUT_PATH
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
