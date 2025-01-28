import chalk from "chalk";
import { execSync } from "child_process";
import { Command } from "commander";
import * as fs from "fs/promises";
import ora from "ora";
import * as path from "path";

interface ProjectConfig {
  style: "default" | "new-york";
  tailwind: {
    config: string;
    css: string;
    baseColor: string;
  };
  aliases: {
    components: string;
    utils: string;
  };
  typescript: boolean;
}

const initCommand = new Command("init")
  .description(
    "In order to start using LayoutX Customizable Components You need to initialize your project with shadcn/ui configuration"
  )
  .option("-y, --yes", "Skip confirmation prompt")
  .option(
    "--style <style>",
    "Select style configuration (default or new-york)",
    "default"
  )
  .option("--baseColor <color>", "Select base color for components", "slate")
  .action(async (options) => {
    const spinner = ora("Initializing project...").start();

    try {
      // 1. Check if project is a valid directory
      const projectRoot = process.cwd();
      await fs.access(projectRoot);

      // 2. Verify package.json exists
      const packageJsonPath = path.join(projectRoot, "package.json");
      try {
        await fs.access(packageJsonPath);
      } catch {
        spinner.fail("No package.json found. Please run npm init first.");
        process.exit(1);
      }

      // 3. Create components.json configuration
      const config: ProjectConfig = {
        style: options.style,
        tailwind: {
          config: "tailwind.config.js",
          css: "app/globals.css",
          baseColor: options.baseColor,
        },
        aliases: {
          components: "@/components",
          utils: "@/lib/utils",
        },
        typescript: true,
      };

      // 4. Create necessary directories
      const directories = ["components", "components/ui", "lib"];

      for (const dir of directories) {
        await fs.mkdir(path.join(projectRoot, dir), { recursive: true });
      }

      // 5. Write configuration file
      await fs.writeFile(
        path.join(projectRoot, "components.json"),
        JSON.stringify(config, null, 2)
      );

      // 6. Create utils.ts file with basic utilities
      const utilsContent = `
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
      `.trim();

      await fs.writeFile(path.join(projectRoot, "lib/utils.ts"), utilsContent);

      // 7. Install required dependencies
      const dependencies = [
        "tailwindcss-animate",
        "class-variance-authority",
        "clsx",
        "tailwind-merge",
        "lucide-react",
      ];

      spinner.text = "Installing dependencies...";
      execSync(`npm install ${dependencies.join(" ")}`, { stdio: "ignore" });

      spinner.succeed("Project initialized successfully!");
      console.log("\nNext steps:");
      console.log(
        chalk.green("1."),
        "Add the following to your tailwind.config.js:"
      );
      console.log(
        chalk.gray(`
content: [
  './components/**/*.{ts,tsx}',
  './app/**/*.{ts,tsx}',
],
plugins: [require("tailwindcss-animate")],`)
      );
      console.log(
        chalk.green("2."),
        "Start adding components with:",
        chalk.cyan("npx shadcn-ui add <component>")
      );
    } catch (error) {
      spinner.fail("Initialization failed");
      console.error(chalk.red("Error:"), error);
      process.exit(1);
    }
  });

export default initCommand;
