import fs from "fs";
import path from "path";

export function getPackageInfo() {
  const packageJsonPath = path.join("package.json");
  const data = fs.readFileSync(packageJsonPath, "utf-8");

  return JSON.parse(data);
}
