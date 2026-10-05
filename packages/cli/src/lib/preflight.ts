import path from 'node:path'
import { promises as fs } from 'node:fs'

import { CliError } from './errors'

export type Preflight = {
  projectRoot: string
  style: string
  aliases: Record<string, string>
  componentsDir: string
  uiDir: string
  libDir: string
  utilsDir: string
  packageManager: string
  installedDeps: Set<string>
}

type PathMapping = {
  prefix: string
  targets: string[]
}

const LOCKFILES: Array<[file: string, manager: string]> = [
  ['pnpm-lock.yaml', 'pnpm'],
  ['yarn.lock', 'yarn'],
  ['bun.lock', 'bun'],
  ['bun.lockb', 'bun'],
  ['package-lock.json', 'npm'],
]

async function exists(target: string): Promise<boolean> {
  try {
    await fs.access(target)
    return true
  } catch {
    return false
  }
}

async function findUp(from: string, file: string): Promise<string | null> {
  let dir = path.resolve(from)

  while (true) {
    const candidate = path.join(dir, file)
    if (await exists(candidate)) return candidate
    const parent = path.dirname(dir)
    if (parent === dir) return null
    dir = parent
  }
}

function readPathMappings(raw: unknown): PathMapping[] {
  if (!raw || typeof raw !== 'object') return []
  const paths = (raw as Record<string, unknown>).paths
  if (!paths || typeof paths !== 'object') return []

  return Object.entries(paths as Record<string, unknown>).flatMap(
    ([prefix, value]) => {
      const targets = Array.isArray(value)
        ? value.filter((item): item is string => typeof item === 'string')
        : []
      const clean = prefix.replace(/\*+$/, '')
      const usable = targets.filter(target => target.length > 0)
      return usable.length > 0 && clean.length > 0
        ? [{ prefix: clean, targets: usable }]
        : []
    },
  )
}

function fallbackDir(projectRoot: string, alias: string): string {
  const stripped = alias.replace(/^@\/*/, '').replace(/^~\/?/, '')
  return path.resolve(projectRoot, 'src', stripped)
}

function resolveAliasDir(
  mappings: PathMapping[],
  alias: string,
  projectRoot: string,
  baseUrl: string,
): string {
  const candidates = [alias, `${alias}/`]

  for (const candidate of candidates) {
    const matches = mappings.filter(mapping =>
      candidate.startsWith(mapping.prefix),
    )

    if (matches.length === 0) continue

    const best = matches.sort((a, b) => b.prefix.length - a.prefix.length)[0]
    const remainder = candidate.slice(best.prefix.length)

    for (const target of best.targets) {
      const substituted = target.includes('*')
        ? target.replace(/\*/g, remainder)
        : path.join(target, remainder)
      return path.resolve(projectRoot, baseUrl, substituted)
    }
  }

  return fallbackDir(projectRoot, alias)
}

async function detectPackageManager(projectRoot: string): Promise<string> {
  for (const [file, manager] of LOCKFILES) {
    if (await exists(path.join(projectRoot, file))) return manager
  }
  return 'npm'
}

function collectDeps(pkg: Record<string, unknown>): Set<string> {
  const deps = new Set<string>()

  for (const key of [
    'dependencies',
    'devDependencies',
    'peerDependencies',
    'optionalDependencies',
  ]) {
    const group = pkg[key]
    if (group && typeof group === 'object') {
      for (const name of Object.keys(group as Record<string, unknown>)) {
        deps.add(name)
      }
    }
  }

  return deps
}

export async function preflight(cwd = process.cwd()): Promise<Preflight> {
  const componentsPath = await findUp(cwd, 'components.json')

  if (!componentsPath) {
    throw new CliError(
      'No components.json found. Run "npx shadcn@latest init" first.',
    )
  }

  const projectRoot = path.dirname(componentsPath)
  const components = JSON.parse(await fs.readFile(componentsPath, 'utf8'))

  const style =
    typeof components.style === 'string' ? components.style : 'new-york'
  const aliases: Record<string, string> =
    components.aliases && typeof components.aliases === 'object'
      ? (components.aliases as Record<string, string>)
      : {}

  const tsconfigPath = await findUp(cwd, 'tsconfig.json')
  let mappings: PathMapping[] = []
  let baseUrl = '.'

  if (tsconfigPath) {
    const tsconfig = JSON.parse(await fs.readFile(tsconfigPath, 'utf8'))
    const options = tsconfig.compilerOptions ?? {}
    mappings = readPathMappings(options)
    if (typeof options.baseUrl === 'string') baseUrl = options.baseUrl
  }

  const componentsDir = resolveAliasDir(
    mappings,
    aliases.components ?? '@/components',
    projectRoot,
    baseUrl,
  )
  const uiDir = resolveAliasDir(
    mappings,
    aliases.ui ?? '@/components/ui',
    projectRoot,
    baseUrl,
  )
  const libDir = resolveAliasDir(mappings, aliases.lib ?? '@/lib', projectRoot, baseUrl)
  const utilsDir = resolveAliasDir(
    mappings,
    aliases.utils ?? '@/lib/utils',
    projectRoot,
    baseUrl,
  )

  const pkgPath = path.join(projectRoot, 'package.json')
  const pkg = (await exists(pkgPath))
    ? JSON.parse(await fs.readFile(pkgPath, 'utf8'))
    : {}

  return {
    projectRoot,
    style,
    aliases,
    componentsDir,
    uiDir,
    libDir,
    utilsDir,
    packageManager: await detectPackageManager(projectRoot),
    installedDeps: collectDeps(pkg),
  }
}