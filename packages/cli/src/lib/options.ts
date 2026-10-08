import type { Command } from 'commander';

export function withSharedOptions(command: Command): Command {
  return command
    .option('--registry <url>', 'registry base URL to install components from')
    .option('--yes', 'accept every confirmation', false)
    .option('--dry-run', 'print what would happen without writing anything', false)
    .option('--no-install', 'print install commands instead of running them');
}
