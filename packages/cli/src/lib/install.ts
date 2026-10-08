import { spawn } from 'node:child_process';

import { CliError } from './errors';

const INSTALL_COMMANDS: Record<string, string[]> = {
  pnpm: ['pnpm', 'add'],
  yarn: ['yarn', 'add'],
  bun: ['bun', 'add'],
  npm: ['npm', 'install'],
};

function commandFor(packageManager: string): string[] {
  return INSTALL_COMMANDS[packageManager] ?? INSTALL_COMMANDS.npm;
}

export function buildInstallCommand(packageManager: string, packages: string[]): string {
  return [...commandFor(packageManager), ...packages].join(' ');
}

export async function runInstall(packageManager: string, packages: string[]): Promise<void> {
  const command = buildInstallCommand(packageManager, packages);

  await new Promise<void>((resolve, reject) => {
    const child = spawn(command, { stdio: 'inherit', shell: true });

    child.on('error', (error) => {
      reject(new CliError(`Cannot run "${command}": ${error.message}`));
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new CliError(`Install failed: "${command}" exited with code ${code ?? 'unknown'}`));
      }
    });
  });
}
