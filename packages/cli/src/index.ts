#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const args = process.argv.slice(2);
const command = args[0];

if (!command || !["init", "add"].includes(command)) {
  console.error("Usage: componentx <init|add> [component-name]");
  process.exit(1);
}

// -----------------------------------------
// COMMAND: INIT
// -----------------------------------------
if (command === "init") {
  const configPath = path.join(process.cwd(), "components.json");
  const defaultConfig = {
    componentPath: "./components/ui",
    packageManager: "npm",
  };

  fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2), "utf-8");
  console.log("✅ Initialized components.json Configuration File!");
  process.exit(0);
}

// -----------------------------------------
// COMMAND: ADD
// -----------------------------------------
if (command === "add") {
  const componentName = args[1];
  if (!componentName) {
    console.error(
      "❌ Error: Please specify a component name (e.g., componentx add text-shine)",
    );
    process.exit(1);
  }

  const configPath = path.join(process.cwd(), "components.json");
  if (!fs.existsSync(configPath)) {
    console.error("❌ Error: components.json not found in this directory.");
    console.error("💡 Run 'componentx init' first to configure your project.");
    process.exit(1);
  }

  const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
  const targetDir = path.join(process.cwd(), config.componentPath);

  async function fetchRegistryAndInstall() {
    console.log(
      `🌐 Fetching ${componentName} from ComponentX Remote Registry...`,
    );

    const REGISTRY_URL =
      "https://raw.githubusercontent.com/SinghAstra/ComponentX/feature/v2-monorepo/packages/registry/dist/registry.json";

    try {
      const response = await fetch(REGISTRY_URL);
      if (!response.ok) {
        console.error(
          `❌ Network Error: Failed to fetch registry (HTTP ${response.status})`,
        );
        console.error("💡 Ensure the registry.json file is pushed to GitHub.");
        process.exitCode = 1; // Safely set exit code
        return; // Gracefully exit to prevent Windows async crash
      }

      const registryData = await response.json();
      const component = registryData.find((c: any) => c.name === componentName);

      if (!component) {
        console.error(
          `❌ Error: Component '${componentName}' not found in remote registry.`,
        );
        process.exitCode = 1;
        return;
      }

      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      for (const file of component.files) {
        const filePath = path.join(targetDir, file.name);
        fs.writeFileSync(filePath, file.content, "utf-8");
        console.log(
          `✅ Successfully installed: ${file.name} to ${config.componentPath}`,
        );
      }

      if (component.dependencies && component.dependencies.length > 0) {
        console.log(
          `📦 Installing dependencies: ${component.dependencies.join(", ")}...`,
        );
        try {
          const pm = config.packageManager || "npm";
          const installCmd = pm === "npm" ? "npm install" : `${pm} add`;

          execSync(`${installCmd} ${component.dependencies.join(" ")}`, {
            cwd: process.cwd(),
            stdio: "inherit",
          });
          console.log("✅ Dependencies installed successfully.");
        } catch (error) {
          console.error(
            "\n❌ Auto-install bypassed (monorepo restriction or network timeout).",
          );
          console.log(
            `💡 Please manually run this from your terminal: pnpm add ${component.dependencies.join(" ")}\n`,
          );
        }
      } else {
        console.log("✨ No additional dependencies required.");
      }
    } catch (error: any) {
      console.error("❌ Network Error:", error.message);
      console.error("💡 Ensure you have an active internet connection.");
      process.exitCode = 1;
      return;
    }
  }

  fetchRegistryAndInstall();
}
