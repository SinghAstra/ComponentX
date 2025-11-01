import fs from "fs";
import path from "path";
import { Config } from "../types";

export function readConfig(): Config {
  const configPath = path.join(process.cwd(), "cx.json");

  // Check if cx.json exists
  if (!fs.existsSync(configPath)) {
    throw new Error('cx.json not found. Run "cx init" to set up your project.');
  }

  try {
    // Read and parse the JSON file
    const content = fs.readFileSync(configPath, "utf-8");
    const config: Config = JSON.parse(content);

    // Validate required fields
    if (!config.directory || !config.aliases) {
      throw new Error("Invalid cx.json structure");
    }

    return config;
  } catch (error) {
    throw new Error(
      `Failed to read cx.json: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

/**
 * Write config to cx.json in project root
 */
export function writeConfig(config: Config): void {
  const configPath = path.join(process.cwd(), "cx.json");
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  console.log(`✓ Config saved to ${configPath}`);
}

/**
 * Check if cx.json already exists
 */
export function configExists(): boolean {
  const configPath = path.join(process.cwd(), "cx.json");
  return fs.existsSync(configPath);
}
