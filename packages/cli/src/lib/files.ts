import { promises as fs } from 'node:fs';
import path from 'node:path';

import inquirer from 'inquirer';

import { logger } from './logger';

export type WriteOptions = {
  dryRun: boolean;
  yes: boolean;
};

export type WriteResult = 'created' | 'overwritten' | 'kept';

const ACTIONS = {
  create: 'create',
  overwrite: 'overwrite',
  keep: 'keep',
} as const;

function label(target: string): string {
  const relative = path.relative(process.cwd(), target);
  return relative.startsWith('..') ? target : relative;
}

function report(action: keyof typeof ACTIONS, target: string, success: boolean): void {
  const line = `${ACTIONS[action].padEnd(9)} ${label(target)}`;
  if (success) logger.success(line);
  else logger.info(line);
}

async function exists(target: string): Promise<boolean> {
  return fs
    .access(target)
    .then(() => true)
    .catch(() => false);
}

async function write(target: string, content: string): Promise<void> {
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, content.replace(/\r\n/g, '\n'), 'utf8');
}

export async function writeGeneratedFile(
  target: string,
  content: string,
  options: WriteOptions
): Promise<WriteResult> {
  const present = await exists(target);

  if (options.dryRun) {
    report(present ? 'overwrite' : 'create', target, false);
    return present ? 'overwritten' : 'created';
  }

  if (present && !options.yes) {
    const { overwrite } = await inquirer.prompt<{ overwrite: boolean }>([
      {
        type: 'confirm',
        name: 'overwrite',
        message: `${label(target)} already exists. Overwrite it?`,
        default: false,
      },
    ]);

    if (!overwrite) {
      report('keep', target, false);
      return 'kept';
    }
  }

  await write(target, content);
  report(present ? 'overwrite' : 'create', target, true);

  return present ? 'overwritten' : 'created';
}

export async function writePrimitiveFile(
  target: string,
  content: string,
  options: WriteOptions
): Promise<WriteResult> {
  const present = await exists(target);

  if (present) {
    report('keep', target, false);
    return 'kept';
  }

  if (options.dryRun) {
    report('create', target, false);
    return 'created';
  }

  await write(target, content);
  report('create', target, true);

  return 'created';
}
