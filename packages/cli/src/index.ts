#!/usr/bin/env node

import { Command } from "commander";
import initCommand from "./commands/init.js";
import { getPackageInfo } from "./utils/get-package-info.js";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  const packageInfo = await getPackageInfo();

  const program = new Command()
    .name("layoutx")
    .description("add customizable components to your project.")
    .version(
      packageInfo.version || "1.0.0",
      "-v, --version",
      "display the version number"
    );

  program.addCommand(initCommand);

  program.parse();
}

main();
