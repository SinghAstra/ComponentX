import { Command } from "commander";
import { initCommand } from "./commands/init";

const program = new Command();

program
  .name("cx")
  .description("ComponentX (CLI) - Install and manage reusable UI components")
  .version("1.0.0");

// Register all commands
program.addCommand(initCommand);

// Parse command-line arguments
program.parse(process.argv);
