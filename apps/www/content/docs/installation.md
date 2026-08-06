# Installation

Learn how to install, configure, and initialize ComponentX within your project to start adding reusable components.

---

## Prerequisites

Before you begin, ensure you have the following installed and configured in your environment:
* Node.js 18.17 or later.
* A working React framework (Next.js is recommended).
* Tailwind CSS installed and configured in your project.

## Initialization

Run the following command in your terminal to initialize ComponentX in your project. This will set up your configuration file and prepare your project architecture to start receiving components.

```bash
npx @singhastra/componentx-cli init
```

### Configuration Prompts

When you run the `init` command, you will be asked a few questions to configure your `components.json` file.

```txt
Would you like to use TypeScript (recommended)? no / yes
Which style would you like to use? › Default / New York
Which color would you like to use as base color? › Slate / Gray / Zinc
Where is your global CSS file? › app/globals.css
```

Once the initialization is complete, the CLI will automatically create the necessary utility files (like `cn` for Tailwind class merging) and update your `tailwind.config.ts` with the required variables.

## Adding Components

Once your project is initialized, you can start adding components directly to your codebase.

Use the `add` command followed by the name of the component you want to install:

```bash
npx @singhastra/componentx-cli add hover-edge
```

The CLI will download the component, place it in your designated components directory, and install any required third-party dependencies automatically.

## Next Steps

Now that you have ComponentX installed, you can explore the available UI components or learn how to customize the base styles.

* [Explore Components](/docs/components/hover-edge)
* [Understand the CLI](/docs/cli)



