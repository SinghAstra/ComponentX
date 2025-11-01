import { Command } from "commander";
import inquirer from "inquirer";
import { configExists, writeConfig } from "../config/reader.js";
import { Config } from "../types.js";

export const initCommand = new Command("init")
  .description("Initialize a new ComponentX project")
  .action(async () => {
    try {
      // Check if config already exists
      if (configExists()) {
        const { overwrite } = await inquirer.prompt([
          {
            type: "confirm",
            name: "overwrite",
            message: "cx.json already exists. Overwrite it ?",
            default: false,
          },
        ]);

        if (!overwrite) {
          console.log("Initialization cancelled.");
          return;
        }
      }

      // Prompt for installation directory
      const { directory } = await inquirer.prompt([
        {
          type: "input",
          name: "directory",
          message: "Where should components be installed ?",
          default: "src/components/component-x",
        },
      ]);

      // Prompt for path alias
      const { alias } = await inquirer.prompt([
        {
          type: "input",
          name: "alias",
          message: "What is the path alias for your components ?",
          default: "@/components/component-x",
        },
      ]);

      // Create and save config
      const config: Config = {
        directory,
        aliases: {
          "component-x": alias,
        },
        configVersion: "1.0",
      };

      writeConfig(config);
      console.log("✓ Project initialized successfully!");
    } catch (error) {
      console.error(
        "Error during initialization:",
        error instanceof Error ? error.message : error
      );
      process.exit(1);
    }
  });
