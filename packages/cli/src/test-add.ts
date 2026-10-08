#!/usr/bin/env tsx
import path from 'node:path';
import { promises as fs } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { randomUUID } from 'node:crypto';

const ROOT_DIR = path.resolve(import.meta.dirname, '../../..');
const TEMP_DIR = path.join(tmpdir(), `componentx-test-${randomUUID()}`);
const CLI_PATH = path.join(ROOT_DIR, 'packages/cli/dist/index.js');
const REGISTRY_URL = 'https://componentx.vercel.app/registry/';

const MINIMAL_COMPONENTS_JSON = {
  $schema: 'https://ui.shadcn.com/schema.json',
  style: 'new-york',
  rsc: false,
  tsx: true,
  tailwind: { config: 'tailwind.config.ts', css: 'app/globals.css', baseColor: 'slate' },
  aliases: {
    components: '@/components',
    ui: '@/components/ui',
    utils: '@/lib/utils',
    lib: '@/lib',
    hooks: '@/hooks',
  },
};

const MINIMAL_TSCONFIG_JSON = {
  compilerOptions: {
    target: 'ES2017',
    lib: ['dom', 'dom.iterable', 'esnext'],
    allowJs: true,
    skipLibCheck: true,
    strict: true,
    noEmit: true,
    esModuleInterop: true,
    module: 'esnext',
    moduleResolution: 'bundler',
    resolveJsonModule: true,
    isolatedModules: true,
    jsx: 'preserve',
    incremental: true,
    plugins: [{ name: 'next' }],
    paths: { '@/*': ['./src/*'] },
  },
  include: ['next-env.d.ts', '**/*.ts', '**/*.tsx', '.next/types/**/*.ts'],
  exclude: ['node_modules'],
};

const MINIMAL_PACKAGE_JSON = {
  name: 'test-scratch',
  version: '0.0.0',
  private: true,
  scripts: { dev: 'next dev', build: 'next build', start: 'next start', lint: 'next lint' },
  dependencies: { next: '15.0.0', react: '18.3.0', 'react-dom': '18.3.0', 'framer-motion': '11.0.0' },
  devDependencies: { typescript: '5.0.0', '@types/node': '20.0.0', '@types/react': '18.0.0', '@types/react-dom': '18.0.0' },
};

async function setupTempProject(): Promise<void> {
  await fs.rm(TEMP_DIR, { recursive: true, force: true });
  await fs.mkdir(TEMP_DIR, { recursive: true });
  await fs.mkdir(path.join(TEMP_DIR, 'src', 'components'), { recursive: true });
  await fs.mkdir(path.join(TEMP_DIR, 'src', 'lib'), { recursive: true });
  await fs.mkdir(path.join(TEMP_DIR, 'src', 'components', 'ui'), { recursive: true });
  await fs.writeFile(path.join(TEMP_DIR, 'components.json'), JSON.stringify(MINIMAL_COMPONENTS_JSON, null, 2));
  await fs.writeFile(path.join(TEMP_DIR, 'tsconfig.json'), JSON.stringify(MINIMAL_TSCONFIG_JSON, null, 2));
  await fs.writeFile(path.join(TEMP_DIR, 'package.json'), JSON.stringify(MINIMAL_PACKAGE_JSON, null, 2));
}

function runAddTest(): { stdout: string; stderr: string; status: number } {
  const args = [
    'add', 'dialog', 'color-picker',
    '--registry', REGISTRY_URL,
    '--no-install'
  ];
  const result = spawnSync('node', [CLI_PATH, ...args], {
    cwd: TEMP_DIR,
    encoding: 'utf8',
    timeout: 60_000,
  });
  return { stdout: result.stdout ?? '', stderr: result.stderr ?? '', status: result.status ?? 1 };
}

async function verifyResults(): Promise<void> {
  const componentXDir = path.join(TEMP_DIR, 'src', 'components', 'component-x');
  const uiDir = path.join(TEMP_DIR, 'src', 'components', 'ui');

  const files = await fs.readdir(componentXDir);
  console.log('ComponentX files created:', files);

  const expectedComponentXFiles = ['dialog.tsx', 'color-picker.tsx'];
  for (const file of expectedComponentXFiles) {
    if (!files.includes(file)) {
      throw new Error(`Missing expected file in component-x: ${file}`);
    }
  }

  for (const file of expectedComponentXFiles) {
    const content = await fs.readFile(path.join(componentXDir, file), 'utf8');
    const match = content.match(/<%[^%>]*%>/);
    if (match) {
      throw new Error(`Template placeholder found in ${file}: ${match[0]}`);
    }
  }

  const dialogContent = await fs.readFile(path.join(componentXDir, 'dialog.tsx'), 'utf8');
  if (!dialogContent.includes("from 'framer-motion'")) {
    throw new Error('dialog.tsx missing framer-motion import');
  }

  const colorPickerContent = await fs.readFile(path.join(componentXDir, 'color-picker.tsx'), 'utf8');
  if (!colorPickerContent.includes("@/components/ui/input") || !colorPickerContent.includes("@/components/ui/popover")) {
    throw new Error('color-picker.tsx missing expected shadcn/ui imports');
  }

  const uiFiles = await fs.readdir(uiDir);
  console.log('UI primitive files created:', uiFiles);
  const expectedUiFiles = ['input.tsx', 'label.tsx', 'popover.tsx'];
  for (const file of expectedUiFiles) {
    if (!uiFiles.includes(file)) {
      throw new Error(`Missing expected UI primitive: ${file}`);
    }
  }

  for (const file of expectedUiFiles) {
    const content = await fs.readFile(path.join(uiDir, file), 'utf8');
    const match = content.match(/<%[^%>]*%>/);
    if (match) {
      throw new Error(`Template placeholder found in UI primitive ${file}: ${match[0]}`);
    }
  }

  console.log('✅ All assertions passed');
}

async function main(): Promise<void> {
  console.log(`📦 Setting up temp project in ${TEMP_DIR}...`);
  await setupTempProject();

  try {
    console.log('🚀 Running cx add dialog color-picker...');
    const result = runAddTest();

    if (result.status !== 0) {
      console.error('stdout:', result.stdout);
      console.error('stderr:', result.stderr);
      throw new Error(`CLI exited with status ${result.status}`);
    }
    console.log(result.stdout.trim());

    console.log('🔍 Verifying results...');
    await verifyResults();

    console.log('\n🎉 Integration test passed!');
  } finally {
    await fs.rm(TEMP_DIR, { recursive: true, force: true });
    console.log('🧹 Cleaned up temp directory');
  }
}

main().catch((error) => {
  console.error('❌ Integration test failed:', error);
  process.exit(1);
});