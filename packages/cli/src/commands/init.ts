import { Command } from 'commander'

import { CliError } from '../lib/errors'

export function createInitCommand(): Command {
  return new Command('init')
    .description('check that your project is ready for ComponentX components')
    .action(() => {
      throw new CliError('init is not implemented yet — lands in task 5g')
    })
}