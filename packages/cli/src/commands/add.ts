import { Command } from 'commander'

import { CliError } from '../lib/errors'

export function createAddCommand(): Command {
  return new Command('add')
    .description('install a ComponentX component into your project')
    .argument('<component...>', 'component name(s) to install')
    .action(() => {
      throw new CliError('add is not implemented yet — lands in task 5h')
    })
}