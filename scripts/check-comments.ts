import { promises as fs } from 'node:fs'
import path from 'node:path'

const root = path.resolve('packages/cli/src')

async function walk(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const nested = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name)
      return entry.isDirectory() ? walk(full) : [full]
    }),
  )
  return nested.flat()
}

async function main(): Promise<void> {
  const files = (await walk(root)).filter((file) => file.endsWith('.ts'))
  const crlf: string[] = []
  const commented: string[] = []

  for (const file of files) {
    const raw = await fs.readFile(file, 'utf8')
    if (raw.includes('\r\n')) crlf.push(path.relative(root, file))
    const lines = raw.split('\n')
    const hits = lines
      .map((line, index) => ({ line: line.trim(), index }))
      .filter(({ line }) =>
        line.startsWith('//') ||
        line.startsWith('/*') ||
        line.startsWith('*'),
      )
    if (hits.length > 0) {
      commented.push(
        `${path.relative(root, file)} (${hits.map((h) => h.index + 1).join(', ')})`,
      )
    }
  }

  console.log('files checked:', files.length)
  console.log('CRLF files  :', crlf.length ? crlf.join(', ') : 'none')
  console.log('comment hits:', commented.length ? commented.join(' | ') : 'none')
  process.exitCode = crlf.length + commented.length > 0 ? 1 : 0
}

main()