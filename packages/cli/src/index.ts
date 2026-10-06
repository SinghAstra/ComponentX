import { Command } from 'commander'

import { createAddCommand } from './commands/add'
import { createInitCommand } from './commands/init'
import { CliError } from './lib/errors'
import { logger } from './lib/logger'
import { withSharedOptions } from './lib/options'

const VERSION = '0.1.0'

const program = new Command()

program
  .name('cx')
  .description('add ComponentX components to your project')
  .version(VERSION)
  .addCommand(withSharedOptions(createInitCommand()))
  .addCommand(withSharedOptions(createAddCommand()))

program.parseAsync(process.argv).catch((error: unknown) => {
  logger.error(error instanceof Error ? error.message : String(error))

  if (process.env.CX_DEBUG && error instanceof Error && error.stack) {
    logger.error(error.stack)
  }

  process.exit(1)
})