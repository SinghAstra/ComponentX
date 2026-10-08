#!/usr/bin/env tsx
import path from 'node:path';
import { promises as fs } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { randomUUID } from 'node:crypto';

const ROOT_DIR = path.resolve(import.meta.dirname, '../../..');
const TEMP_DIR = path.join(tmpdir(), `componentx-smoke-${randomUUID()}`);
const CLI_PATH = path.join(ROOT_DIR, 'packages/cli/dist/index.js');
const REGISTRY_URL = 'https://componentx.vercel.app/registry/';

const NEXTJS_PACKAGE_JSON = {
  name: 'smoke-test',
  version: '0.0.0',
  private: true,
  scripts: { dev: 'next dev', build: 'next build', start: 'next start', lint: 'next lint' },
  dependencies: {
    next: '15.0.0',
    react: '18.3.0',
    'react-dom': '18.3.0',
    'framer-motion': '11.0.0',
    '@radix-ui/react-dialog': '1.1.0',
    '@radix-ui/react-label': '2.1.0',
    '@radix-ui/react-popover': '1.1.0',
    '@radix-ui/react-slot': '1.1.0',
    '@radix-ui/react-tabs': '1.1.0',
    'lucide-react': '0.400.0',
    'class-variance-authority': '0.7.0',
    'clsx': '2.1.0',
    'tailwind-merge': '2.4.0',
  },
  devDependencies: {
    typescript: '5.0.0',
    '@types/node': '20.0.0',
    '@types/react': '18.0.0',
    '@types/react-dom': '18.0.0',
    'tailwindcss': '3.4.0',
    'postcss': '8.4.0',
    'autoprefixer': '10.4.0',
  },
};

const TSCONFIG_JSON = {
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
    baseUrl: '.',
  },
  include: ['next-env.d.ts', '**/*.ts', '**/*.tsx', '.next/types/**/*.ts'],
  exclude: ['node_modules'],
};

const COMPONENTS_JSON = {
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

const TAILWIND_CONFIG = `import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
      },
      borderRadius: { lg: 'var(--radius)', md: 'calc(var(--radius) - 2px)', sm: 'calc(var(--radius) - 4px)' },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
`;

const GLOBALS_CSS = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

@layer base {
  html { @apply border-border; } body { @apply bg-background text-foreground; }
}
`;

const UTILS_TS = `import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`;

async function setupNextProject(): Promise<void> {
  await fs.rm(TEMP_DIR, { recursive: true, force: true });
  await fs.mkdir(TEMP_DIR, { recursive: true });

  await fs.mkdir(path.join(TEMP_DIR, 'src', 'app'), { recursive: true });
  await fs.mkdir(path.join(TEMP_DIR, 'src', 'components', 'ui'), { recursive: true });
  await fs.mkdir(path.join(TEMP_DIR, 'src', 'lib'), { recursive: true });
  await fs.mkdir(path.join(TEMP_DIR, 'src', 'components'), { recursive: true });

  await fs.writeFile(path.join(TEMP_DIR, 'package.json'), JSON.stringify(NEXTJS_PACKAGE_JSON, null, 2));
  await fs.writeFile(path.join(TEMP_DIR, 'tsconfig.json'), JSON.stringify(TSCONFIG_JSON, null, 2));
  await fs.writeFile(path.join(TEMP_DIR, 'components.json'), JSON.stringify(COMPONENTS_JSON, null, 2));
  await fs.writeFile(path.join(TEMP_DIR, 'tailwind.config.ts'), TAILWIND_CONFIG);
  await fs.writeFile(path.join(TEMP_DIR, 'src', 'app', 'globals.css'), GLOBALS_CSS);
  await fs.writeFile(path.join(TEMP_DIR, 'src', 'lib', 'utils.ts'), UTILS_TS);
  await fs.writeFile(path.join(TEMP_DIR, 'next-env.d.ts'), '/// <reference types="next" />\n/// <reference types="next/image-types/global" />\n');
}

function runCmd(cmd: string, args: string[], cwd: string): { stdout: string; stderr: string; status: number } {
  const result = spawnSync(cmd, args, { cwd, encoding: 'utf8', timeout: 120_000, shell: true });
  return { stdout: result.stdout ?? '', stderr: result.stderr ?? '', status: result.status ?? 1 };
}

async function main(): Promise<void> {
  console.log(`📦 Setting up Next.js project in ${TEMP_DIR}...`);
  await setupNextProject();

  try {
    console.log('📥 Installing dependencies...');
    const installResult = runCmd('npm', ['install', '--legacy-peer-deps'], TEMP_DIR);
    if (installResult.status !== 0) {
      console.error('stdout:', installResult.stdout);
      console.error('stderr:', installResult.stderr);
      throw new Error('npm install failed');
    }
    console.log('✅ Dependencies installed');

    console.log('🔧 Running cx init...');
    const initResult = runCmd('node', [CLI_PATH, 'init', '--registry', REGISTRY_URL], TEMP_DIR);
    console.log(initResult.stdout.trim());
    if (initResult.status !== 0) {
      console.error('stderr:', initResult.stderr);
      throw new Error('cx init failed');
    }

    console.log('🚀 Running cx add dialog color-picker file-upload...');
    const addResult = runCmd('node', [CLI_PATH, 'add', 'dialog', 'color-picker', 'file-upload', '--registry', REGISTRY_URL], TEMP_DIR);
    console.log(addResult.stdout.trim());
    if (addResult.status !== 0) {
      console.error('stderr:', addResult.stderr);
      throw new Error('cx add failed');
    }

    console.log('🔍 Running tsc --noEmit...');
    const tscResult = runCmd('npx', ['tsc', '--noEmit'], TEMP_DIR);
    console.log(tscResult.stdout.trim());
    if (tscResult.stderr.trim()) console.error(tscResult.stderr.trim());
    if (tscResult.status !== 0) {
      throw new Error('tsc --noEmit failed');
    }

    console.log('\n🎉 Smoke test passed! Project compiles cleanly.');
  } finally {
    await fs.rm(TEMP_DIR, { recursive: true, force: true });
    console.log('🧹 Cleaned up temp directory');
  }
}

main().catch((error) => {
  console.error('❌ Smoke test failed:', error);
  process.exit(1);
});