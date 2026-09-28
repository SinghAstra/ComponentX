import path from 'node:path'

/**
 * Single source of truth for the registry generator (build-registry.ts) and the
 * registry consistency check (check-registry.ts). Nothing in this file may read
 * or write files or run on import, so both scripts can share it safely.
 */

export type RegistryFile = {
  name: string
  content: string
}

export type Registry = {
  name: string
  externalDependencies: string[]
  internalDependencies: string[]
  registryDependencies: string[]
  file: RegistryFile
}

export type DependencyLists = Pick<
  Registry,
  'externalDependencies' | 'internalDependencies' | 'registryDependencies'
>

export const COMPONENTS_PATH = path.resolve(
  process.cwd(),
  'apps/www/components/component-x',
)

export const REGISTRY_OUTPUT_PATH = path.resolve(
  process.cwd(),
  'apps/www/public/registry/components',
)

export const INDEX_FILE_NAME = 'index.json'

export const COMPONENT_PREFIX = '@/components/component-x/'

export const UI_PREFIX = '@/components/ui/'

const PROVIDER_PREFIX = '@/components/providers/'

const LIB_PREFIX = '@/lib/'

export const FRAMEWORK_PACKAGES = new Set(['react', 'react-dom', 'next'])

/**
 * Specifiers that are rewritten to Eta placeholders so the CLI can resolve them
 * at install time. Everything else stays literal in `file.content`.
 */
export const ALIAS_TEMPLATES: Record<string, string> = {
  '@/lib/utils': '<%= it.aliases.utils %>',
  '@/lib/variants': '<%= it.aliases.variants %>',
}

/**
 * Specifiers that are expected to survive verbatim in `file.content`.
 */
export function isLiteralSpecifier(specifier: string): boolean {
  return (
    specifier.startsWith(UI_PREFIX) || specifier.startsWith(PROVIDER_PREFIX)
  )
}

/**
 * `lucide-react/icons/foo` -> `lucide-react`, `@radix-ui/react-dialog` -> `@radix-ui/react-dialog`.
 */
export function toPackageName(specifier: string): string {
  const segments = specifier.split('/')
  return specifier.startsWith('@')
    ? `${segments[0]}/${segments[1]}`
    : segments[0]
}

export function classifyImports(specifiers: string[]): DependencyLists {
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

    if (specifier.startsWith(LIB_PREFIX)) {
      continue
    }

    if (specifier.startsWith(PROVIDER_PREFIX)) {
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
