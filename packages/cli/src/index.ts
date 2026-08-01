#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import prompts from "prompts";
import ora from "ora";
import pc from "picocolors";

const args = process.argv.slice(2);
const command = args[0];

const CONFIG_FILE_NAME = "component-x.json";

if (!command || !["init", "add"].includes(command)) {
  console.log(
    pc.red("✖ Invalid command.\n") +
      "Usage: " +
      pc.cyan("componentx <init|add> [component-name]"),
  );
  process.exit(1);
}

// -----------------------------------------
// COMMAND: INIT
// -----------------------------------------
if (command === "init") {
  async function initializeConfig() {
    console.log(pc.cyan(pc.bold("\n🚀 Welcome to ComponentX CLI\n")));
    const configPath = path.join(process.cwd(), CONFIG_FILE_NAME);

    if (fs.existsSync(configPath)) {
      const response = await prompts({
        type: "confirm",
        name: "overwrite",
        message: pc.yellow(
          `⚠️  ${CONFIG_FILE_NAME} already exists. Overwrite?`,
        ),
        initial: false,
      });

      if (!response.overwrite) {
        console.log(
          pc.dim(
            "\n⏭️  Skipped initialization. Your configuration was kept.\n",
          ),
        );
        return;
      }
    }

    const defaultConfig = {
      componentPath: "./components/ui",
      packageManager: "npm",
    };

    const spinner = ora(`Creating ${CONFIG_FILE_NAME}...`).start();

    setTimeout(() => {
      fs.writeFileSync(
        configPath,
        JSON.stringify(defaultConfig, null, 2),
        "utf-8",
      );
      spinner.succeed(
        pc.green(`Initialized ${pc.bold(CONFIG_FILE_NAME)} successfully!`),
      );
      console.log(
        pc.dim("\nYou can now add components: ") +
          pc.cyan("npx componentx add <component>\n"),
      );
    }, 500); // Artificial delay just so the user sees the smooth spinner!
  }

  initializeConfig();
}

// -----------------------------------------
// COMMAND: ADD
// -----------------------------------------
if (command === "add") {
  const componentName = args[1];
  if (!componentName) {
    console.log(pc.red("✖ Missing component name."));
    console.log("Example: " + pc.cyan("componentx add hover-edge"));
    process.exit(1);
  }

  const configPath = path.join(process.cwd(), CONFIG_FILE_NAME);

  if (!fs.existsSync(configPath)) {
    console.log(pc.red(`✖ ${CONFIG_FILE_NAME} not found.`));
    console.log(
      `Run ${pc.cyan("componentx init")} first to configure your project.`,
    );
    process.exit(1);
  }

  const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
  const targetDir = path.join(process.cwd(), config.componentPath);

  async function fetchRegistryAndInstall() {
    console.log("");
    const fetchSpinner = ora(
      `Fetching ${pc.cyan(componentName)} from registry...`,
    ).start();

    const REGISTRY_URL = `http://localhost:3000/registry/${componentName}.json`;

    try {
      const response = await fetch(REGISTRY_URL);
      if (!response.ok) {
        fetchSpinner.fail(pc.red(`Network Error: HTTP ${response.status}`));
        process.exitCode = 1;
        return;
      }

      const component = await response.json();

      if (!component || !component.files) {
        fetchSpinner.fail(
          pc.red(`Invalid component data received for '${componentName}'.`),
        );
        process.exitCode = 1;
        return;
      }

      fetchSpinner.succeed(`Found ${pc.cyan(componentName)}`);

      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      for (const file of component.files) {
        const filePath = path.join(targetDir, file.name);

        if (fs.existsSync(filePath)) {
          console.log("");
          const response = await prompts({
            type: "confirm",
            name: "overwrite",
            message: pc.yellow(`⚠️  ${file.name} already exists. Overwrite?`),
            initial: false,
          });

          if (!response.overwrite) {
            console.log(pc.dim(`⏭️  Skipped ${file.name}`));
            continue;
          }
        }

        const writeSpinner = ora(`Installing ${file.name}...`).start();
        fs.writeFileSync(filePath, file.content, "utf-8");
        writeSpinner.succeed(
          `Installed ${pc.bold(file.name)} in ${pc.dim(config.componentPath)}`,
        );
      }

      // Handle Dependencies
      if (component.dependencies && component.dependencies.length > 0) {
        console.log("");
        const deps = component.dependencies.join(", ");
        const depSpinner = ora(
          `Installing dependencies: ${pc.cyan(deps)}...`,
        ).start();

        try {
          const pm = config.packageManager || "npm";
          const installCmd = pm === "npm" ? "npm install" : `${pm} add`;

          execSync(`${installCmd} ${component.dependencies.join(" ")}`, {
            cwd: process.cwd(),
            stdio: "ignore",
          });
          depSpinner.succeed("Dependencies installed successfully.");
        } catch (error) {
          depSpinner.fail(pc.red("Auto-install failed."));
          console.log(
            pc.dim("Please manually run: ") +
              pc.cyan(`pnpm add ${component.dependencies.join(" ")}`),
          );
        }
      }

      console.log(
        pc.green(
          pc.bold(
            `\n✨ Successfully added ${componentName} to your project!\n`,
          ),
        ),
      );
    } catch (error: any) {
      fetchSpinner.fail(pc.red("Network Error."));
      console.log(pc.dim(error.message));
      process.exitCode = 1;
    }
  }

  fetchRegistryAndInstall();
}
