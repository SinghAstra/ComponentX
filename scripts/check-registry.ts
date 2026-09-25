import { promises as fs } from 'node:fs'
import path from 'node:path'
import { glob } from 'glob'
type Registry = {
  name: string
  externalDependencies: string[]
  internalDependencies: string[]
  registryDependencies: string[]
  file: { name: string; content: string }
}
const COMPONENTS_PATH = path.resolve(process.cwd(), 'apps/www/components/component-x')
const REGISTRY_OUTPUT_PATH = path.resolve(process.cwd(), 'apps/www/public/registry/components')
const FRAMEWORK_PACKAGES = new Set(['react', 'react-dom', 'next'])
function arraysEqual(a: string[], b: string[]): boolean {
  return a.length === b.length && a.every((v, i) => v === b[i])
}
async function main() {
  const failures: string[] = []
  const fail = (m: string) => {
    failures.push(m)
    console.error(`FAIL: ${m}`)
  }
  const pass = (m: string) => console.log(`PASS: ${m}`)
  const src = (await glob(`${COMPONENTS_PATH}/*.tsx`)).map(p => path.parse(p).name).sort()
  if (src.length === 0) fail('No components found')
  let idx: string[] = []
  try {
    idx = (JSON.parse(await fs.readFile(path.join(REGISTRY_OUTPUT_PATH, 'index.json'), 'utf8')) as { components: string[] }).components
  } catch { fail('index.json missing or invalid') }
  if (!arraysEqual(idx, [...idx].sort())) fail('index.json not sorted')
  else if (idx.length > 0) pass(`index.json sorted (${idx.length})`)
  if (!arraysEqual(idx, src)) fail('index.json mismatch')
  else if (src.length > 0) pass('index.json matches source')
  const outs = (await glob(`${REGISTRY_OUTPUT_PATH}/*.json`)).map(p => path.parse(p).base).filter(b => b !== 'index.json').map(b => path.parse(b).name).sort()
  if (!arraysEqual(outs, src)) fail('registry files mismatch')
  else if (src.length > 0) pass('registry files match source')

  const uf: string[] = []
  const vf: string[] = []
  const bf: string[] = []
  const tf: string[] = []
  for (const n of src) {
    let e: Registry
    try {
      e = JSON.parse(await fs.readFile(path.join(REGISTRY_OUTPUT_PATH, `${n}.json`), 'utf8')) as Registry
    } catch { fail(`${n}.json missing or invalid`); continue }
    if (e.name !== n) fail(`${n}.json name mismatch`)
    if (e.file.name !== `${n}.tsx`) fail(`${n}.json file.name mismatch`)
    if (typeof e.file.content !== 'string' || e.file.content.length === 0) { fail(`${n}.json empty content`); continue }
    for (const l of [e.externalDependencies, e.internalDependencies, e.registryDependencies]) {
      if (!Array.isArray(l)) fail(`${n}.json non-array list`)
      else if (!arraysEqual(l, [...l].sort())) fail(`${n}.json unsorted list`)
      else if (new Set(l).size !== l.length) fail(`${n}.json duplicated dep`)
    }
    if (e.externalDependencies.some(d => d.startsWith('@/') || d.startsWith('.'))) fail(`${n}.json aliased external`)
    for (const d of e.externalDependencies) {
      const r = d.startsWith('@') ? d.split('/').slice(0, 2).join('/') : d.split('/')[0]
      if (FRAMEWORK_PACKAGES.has(r)) fail(`${n}.json framework external ${r}`)
    }
    if (e.file.content.includes('@/lib/')) fail(`${n}.json leaks @/lib/`)
    if (e.file.content.includes('<%= it.aliases.utils %>')) uf.push(n)
    if (e.file.content.includes('<%= it.aliases.variants %>')) vf.push(n)
    if (e.file.content.includes('@/components/ui/button')) bf.push(n)
    if (e.file.content.includes('@/components/providers/toast')) tf.push(n)
  }
  if (!arraysEqual(bf, ['file-upload', 'floating-navbar', 'video-upload'])) fail('button files mismatch')
  else pass('button literal in 3 files')
  if (!arraysEqual(tf, ['video-upload'])) fail('toast files mismatch')
  else pass('toast literal only in video-upload.json')
  if (!arraysEqual(vf, ['dialog'])) fail('variants files mismatch')
  else pass('variants placeholder only in dialog.json')
  const dg = JSON.parse(await fs.readFile(path.join(REGISTRY_OUTPUT_PATH, 'dialog.json'), 'utf8')) as Registry
  if (!arraysEqual(dg.externalDependencies, ['framer-motion']) || dg.internalDependencies.length > 0 || dg.registryDependencies.length > 0) fail('dialog.json deps mismatch')
  else pass('dialog.json spot check passed')
  const cp = JSON.parse(await fs.readFile(path.join(REGISTRY_OUTPUT_PATH, 'color-picker.json'), 'utf8')) as Registry
  if (!arraysEqual(cp.registryDependencies, ['input', 'label', 'popover']) || cp.externalDependencies.length > 0 || cp.internalDependencies.length > 0) fail('color-picker.json deps mismatch')
  else pass('color-picker.json spot check passed')
  if (failures.length > 0) { console.error(`Registry check failed: ${failures.length} failure(s).`); process.exit(1) }
  console.log(`Registry check passed: ${src.length} components, utils in ${uf.length} files.`)
}
main()
