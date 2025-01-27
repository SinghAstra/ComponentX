#!/usr/bin/env node
import chalk from "chalk";
import { Command } from "commander";

const program: Command = new Command();

program
  .name("ui-name")
  .description("A simple UI component CLI")
  .version("0.0.1");

program
  .command("init")
  .description("Initialize the UI library")
  .action((): void => {
    console.log(chalk.green("🎉 Hello! Everything is working fine!"));
    console.log(chalk.blue("Your UI CLI is ready to use."));
  });

program.parse();
