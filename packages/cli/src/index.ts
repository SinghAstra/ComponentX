#!/usr/bin/env node
import fs from "fs";
import path from "path";

const args = process.argv.slice(2);
const command = args[0];
const componentName = args[1];

if (command !== "add" || !componentName) {
  console.error("Usage: componentx add <component-name>");
  process.exit(1);
}

console.log(`Fetching ${componentName} from ComponentX Registry...`);

// In a real published CLI, this would fetch() from a URL.
// For local testing in our monorepo, we read the compiled JSON directly.
const registryPath = path.resolve(
  __dirname,
  "../../registry/dist/registry.json",
);

if (!fs.existsSync(registryPath)) {
  console.error("Error: Registry JSON not found at", registryPath);
  process.exit(1);
}

const registryData = JSON.parse(fs.readFileSync(registryPath, "utf-8"));
const component = registryData.find((c: any) => c.name === componentName);

if (!component) {
  console.error(`Error: Component '${componentName}' not found in registry.`);
  process.exit(1);
}

// The target directory inside the user's project (e.g., apps/www/components/ui)
const targetDir = path.join(process.cwd(), "components", "ui");

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

for (const file of component.files) {
  const filePath = path.join(targetDir, file.name);
  fs.writeFileSync(filePath, file.content, "utf-8");
  console.log(`✅ Successfully installed: ${file.name} to ./components/ui/`);
}
