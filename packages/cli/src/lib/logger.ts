import chalk from 'chalk'

export const logger = {
  info: (message: string) => console.log(chalk.cyan(message)),
  success: (message: string) => console.log(chalk.green(message)),
  warn: (message: string) => console.warn(chalk.yellow(message)),
  error: (message: string) => console.error(chalk.red(message)),
}