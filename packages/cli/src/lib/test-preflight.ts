import path from 'node:path';
import { preflight } from './preflight';

const dir = process.argv[2];

const info = await preflight(dir);

console.log('projectRoot:', info.projectRoot);
console.log('style:', info.style);
console.log('componentsDir:', info.componentsDir);
console.log('uiDir:', info.uiDir);
console.log('libDir:', info.libDir);
console.log('utilsDir:', info.utilsDir);
console.log('packageManager:', info.packageManager);
console.log('installedDeps:', [...info.installedDeps].sort().join(', '));

console.log('--- assertions ---');

const expected = path.join(dir, 'src', 'components');
const checks: Array<[string, boolean]> = [
  ['componentsDir', info.componentsDir === expected],
  ['uiDir', info.uiDir === path.join(expected, 'ui')],
  ['libDir', info.libDir === path.join(dir, 'src', 'lib')],
  ['utilsDir', info.utilsDir === path.join(dir, 'src', 'lib', 'utils')],
  ['style', info.style === 'new-york'],
  ['packageManager', info.packageManager === 'pnpm'],
  ['installedDeps', info.installedDeps.has('framer-motion')],
];

for (const [name, ok] of checks) {
  console.log(ok ? 'PASS' : 'FAIL', name);
}

try {
  await preflight(process.argv[3] ?? path.join(dir, 'nonexistent'));
  console.log('FAIL empty dir did not throw');
} catch (error) {
  console.log('PASS empty dir ->', (error as Error).message);
}