import fs from "fs";
import path from "path";
import type { ComponentSource, Config } from "../types.js";

function ensureDirectory(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

export function writeFiles(
  components: Map<string, ComponentSource>,
  config: Config,
  transformed: Map<string, string>
): void {
  ensureDirectory(config.directory);

  let written = 0;

  for (const [name, component] of components.entries()) {
    const filePath = path.join(config.directory, `${name}.tsx`);
    const content = transformed.get(name);

    if (!content) {
      throw new Error(`No transformed content for component '${name}'`);
    }

    try {
      fs.writeFileSync(filePath, content);
      console.log(`✓ Installed: ${name}`);
      written++;
    } catch (error) {
      throw new Error(
        `Failed to write ${name}: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }

  console.log(
    `\n✓ Successfully installed ${written} component(s) to ${config.directory}`
  );
}
