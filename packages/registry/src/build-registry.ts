import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { registryItemSchema } from "./schema.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.join(__dirname, "../components");
const entries = fs.readdirSync(componentsDir, { withFileTypes: true });

const items = [];

for (const entry of entries) {
  if (entry.isDirectory()) {
    const compName = entry.name;
    const compDir = path.join(componentsDir, compName);
    const jsonPath = path.join(compDir, `${compName}.json`);
    const tsxPath = path.join(compDir, `${compName}.tsx`);

    if (fs.existsSync(jsonPath) && fs.existsSync(tsxPath)) {
      const metadata = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
      const content = fs.readFileSync(tsxPath, "utf8");

      const payload = {
        ...metadata,
        files: [{ name: `${compName}.tsx`, content }],
      };

      items.push(registryItemSchema.parse(payload));
    }
  }
}

const outDir = path.join(__dirname, "../dist");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  path.join(outDir, "registry.json"),
  JSON.stringify(items, null, 2),
);
console.log("Dynamic registry built successfully!");
