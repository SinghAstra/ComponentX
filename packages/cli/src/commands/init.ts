import { Command } from 'commander'

import { logger } from '../lib/logger'
import { preflight } from '../lib/preflight'
import { createRegistryClient, fetchIndex, resolveRegistryUrl } from '../lib/registry'

export function createInitCommand(): Command {
  return new Command('init')
    .description('check that your project is ready for ComponentX components')
    .action(async (options: { registry?: string }) => {
      const info = await preflight()
      const baseUrl = resolveRegistryUrl(options.registry)

      logger.success('Project looks ready.')

      logger.info(`  project root      ${info.projectRoot}`)
      logger.info(`  shadcn style      ${info.style}`)
      logger.info(`  package manager   ${info.packageManager}`)
      logger.info(`  components        ${info.componentsDir}`)
      logger.info(`  ui                ${info.uiDir}`)
      logger.info(`  lib               ${info.libDir}`)
      logger.info(`  utils             ${info.utilsDir}`)
      logger.info(`  registry          ${baseUrl}`)

      const client = createRegistryClient(baseUrl)

      try {
        const index = await fetchIndex(client)
        logger.success(
          `  ${index.components.length} components available`,
        )
      } catch (error) {
        logger.warn(
          `  registry unreachable: ${(error as Error).message}`,
        )
      }

      console.log('')
      logger.info('Next: cx add <component>')
    })
}