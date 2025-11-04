#!/usr/bin/env node
import chalk from "chalk";
import { Command } from "commander";
import fs from "fs/promises";
import inquirer from "inquirer";
import path from "path";
import { COMPONENT_SOURCE_BASE, CONFIG_FILE_NAME } from "./constants.js";
import { Config } from "./types.js";

const program = new Command();

program
  .name("cx")
  .description("CLI for managing ComponentX components.")
  .version("1.0.0");

async function loadConfig(): Promise<Config | null> {
  const configPath = path.join(process.cwd(), CONFIG_FILE_NAME);
  try {
    const content = await fs.readFile(configPath, "utf-8");
    return JSON.parse(content) as Config;
  } catch (error) {
    return null;
  }
}

// --- 1. cx init Command ---
program
  .command("init")
  .description("Initialize ComponentX configuration in the current directory.")
  .action(async () => {
    console.log(
      chalk.bold.hex("#00A0B0")(
        `\n✨ Initializing ComponentX CLI Configuration...`
      )
    );

    const configPath = path.join(process.cwd(), CONFIG_FILE_NAME);

    // 1. Check if config file already exists
    try {
      await fs.access(configPath);

      // Prompt for overwrite confirmation
      const { confirmOverwrite } = await inquirer.prompt([
        {
          type: "confirm",
          name: "confirmOverwrite",
          message: chalk.yellow(
            `Configuration file (${CONFIG_FILE_NAME}) already exists. Overwrite it?`
          ),
          default: false,
        },
      ]);

      if (!confirmOverwrite) {
        console.log(chalk.cyan("Initialization cancelled by user."));
        return;
      }
    } catch (error) {
      // File does not exist, proceed normally
    }

    // 2. Prompt for directories and alias
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "directory",
        message: "Where should components be saved ?",
        default: "@/components/component-x",
      },
    ]);

    // 3. Create the structured configuration object
    const config: Config = {
      directory: answers.directory,
    };

    try {
      // 4. Write the configuration to cx.json
      await fs.writeFile(configPath, JSON.stringify(config, null, 2), "utf-8");

      console.log(
        chalk.green(
          `\n✅ Success! Configuration written to ${CONFIG_FILE_NAME}:`
        )
      );
      console.log(chalk.gray(JSON.stringify(config, null, 2)));
      console.log(chalk.yellow(`\nℹ️ Ensure you have shadcn theme installed.`));
    } catch (writeError) {
      console.error(
        chalk.red(`\n❌ Error writing file: ${configPath}`),
        writeError
      );
    }
  });

// --- 2. cx add Command (Implementation) ---
program
  .command("add")
  .description("Download and add a component to your project.")
  .argument(
    "<component-name>",
    'The name of the component to download (e.g., "button", "card").'
  )
  .action(async (componentName) => {
    console.log(
      chalk.bold.hex("#00A0B0")(
        `\n🔄 Attempting to add component: ${chalk.bold(componentName)}`
      )
    );

    // 1. Load configuration
    const config = await loadConfig();

    if (!config) {
      console.error(
        chalk.red(
          `\n❌ Error: Configuration file (${CONFIG_FILE_NAME}) not found. Please run 'cx init' first.`
        )
      );
      return;
    }

    // --- CRITICAL PATH CONVERSION ---
    let physicalDestDir = config.directory;
    if (physicalDestDir.startsWith("@/")) {
      physicalDestDir = "." + physicalDestDir.substring(1);
    }

    // 2. Construct the URL for the component
    const componentFileName = `${componentName.toLowerCase()}.tsx`;
    const fetchUrl = `${COMPONENT_SOURCE_BASE}/${componentFileName}`;

    console.log(chalk.gray(`Fetching raw code from: ${fetchUrl}`));

    // 3. Fetch the component content
    let componentContent: string;
    try {
      const response = await fetch(fetchUrl);

      if (!response.ok) {
        if (response.status === 404) {
          console.error(
            chalk.red(
              `\n❌ Component not found: Could not find ${componentFileName} at the source URL.`
            )
          );
        } else {
          console.error(
            chalk.red(
              `\n❌ Failed to fetch component. Status: ${response.status}`
            )
          );
        }
        return;
      }

      componentContent = await response.text();
    } catch (fetchError) {
      console.error(
        chalk.red(
          `\n❌ Network or fetch error: ${
            fetchError instanceof Error
              ? fetchError.message
              : String(fetchError)
          }`
        )
      );
      return;
    }

    // 4. Ensure the destination directory exists
    const fullDestDir = path.join(process.cwd(), physicalDestDir);
    try {
      await fs.mkdir(fullDestDir, { recursive: true });
      console.log(chalk.gray(`Target directory ensured: ${fullDestDir}`));
    } catch (dirError) {
      console.error(
        chalk.red(
          `\n❌ Failed to create directory ${fullDestDir}: ${
            dirError instanceof Error ? dirError.message : String(dirError)
          }`
        )
      );
      return;
    }

    // 6. Write the file to the local directory
    const destFilePath = path.join(fullDestDir, componentFileName);
    try {
      await fs.writeFile(destFilePath, componentContent, "utf-8");

      console.log(
        chalk.green(
          `\n✅ Success! Component ${chalk.bold(componentName)} added.`
        )
      );
      console.log(`File saved to: ${chalk.cyan(destFilePath)}`);
    } catch (writeError) {
      console.error(
        chalk.red(`\n❌ Error writing file: ${destFilePath}`),
        writeError
      );
    }
  });

program.parse(process.argv);
