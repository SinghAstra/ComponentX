import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const REGISTRY_DIR = path.join(__dirname, "../components/ui");

const OUTPUT_DIR = path.join(__dirname, "../../../apps/www/public/registry");

async function buildRegistry() {
  try {
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    const files = await fs.readdir(REGISTRY_DIR);

    for (const file of files) {
      if (!file.endsWith(".tsx")) continue;

      const componentName = file.replace(".tsx", "");
      const filePath = path.join(REGISTRY_DIR, file);
      const rawContent = await fs.readFile(filePath, "utf-8");

      const registryPayload = {
        name: componentName,
        type: "components:ui",
        dependencies: [],
        registryDependencies: [],
        files: [
          {
            name: file,
            content: rawContent,
          },
        ],
      };

      const outputPath = path.join(OUTPUT_DIR, `${componentName}.json`);
      await fs.writeFile(outputPath, JSON.stringify(registryPayload, null, 2));

      console.log(`✅ Built and synced to www/public: ${componentName}.json`);
    }
  } catch (error) {
    console.error("Failed to build registry:", error);
    process.exit(1);
  }
}

buildRegistry();
