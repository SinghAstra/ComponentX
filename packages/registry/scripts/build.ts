import fs from "fs/promises";
import path from "path";

const REGISTRY_DIR = path.join(__dirname, "../components/ui");
const OUTPUT_DIR = path.join(__dirname, "../dist"); // We will output to a dist folder

async function buildRegistry() {
  try {
    // 1. Ensure the output directory exists
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // 2. Read all files in the components directory
    const files = await fs.readdir(REGISTRY_DIR);

    for (const file of files) {
      if (!file.endsWith(".tsx")) continue;

      const componentName = file.replace(".tsx", "");
      const filePath = path.join(REGISTRY_DIR, file);

      // 3. Read the raw code as a string
      const rawContent = await fs.readFile(filePath, "utf-8");

      // 4. Construct the registry JSON object
      const registryPayload = {
        name: componentName,
        type: "components:ui",
        dependencies: [], // You can map this dynamically later (e.g., framer-motion)
        registryDependencies: [],
        files: [
          {
            name: file,
            content: rawContent,
          },
        ],
      };

      // 5. Write the compiled JSON file
      const outputPath = path.join(OUTPUT_DIR, `${componentName}.json`);
      await fs.writeFile(outputPath, JSON.stringify(registryPayload, null, 2));

      console.log(`✅ Built registry for: ${componentName}`);
    }
  } catch (error) {
    console.error("Failed to build registry:", error);
    process.exit(1);
  }
}

buildRegistry();
