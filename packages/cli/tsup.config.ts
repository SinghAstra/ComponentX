import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  // ESM only — the package is `"type": "module"` and every runtime dependency
  // (chalk 5, inquirer 12) is ESM, so there is nothing to gain from a CJS build.
  format: ['esm'],
  target: 'node20',
  platform: 'node',
  clean: true,
  sourcemap: true,
  splitting: false,
  // `cx` is executed directly by npx/pnpm, so the output needs a shebang.
  banner: { js: '#!/usr/bin/env node' },
})