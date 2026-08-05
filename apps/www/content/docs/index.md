# Welcome to ComponentX

ComponentX is a modern CLI tool designed to streamline how you build and manage reusable UI components.

Instead of installing a bloated component library as an npm dependency, ComponentX allows you to download and initialize modular, fully customizable components directly from a central source of truth into your own codebase.

You own the code. You own the styling.

## Why ComponentX?

- **Zero Bloat:** Only download the exact components you need for your project. No unused CSS or JavaScript.
- **Total Control:** Components are injected directly into your project files. Tweak the core logic, adjust the Tailwind utility classes, and make them yours.
- **Centralized Truth:** Maintain a consistent design system across multiple projects by pulling from a single, reliable component registry.
- **Developer Experience:** Built for modern React and Next.js environments, ensuring perfect integration with your existing workflow.

## Installation

Run the following command in your terminal to initialize ComponentX in your project:

```bash
npx @singhastra/componentx-cli init
```

This command will prompt you to set up your configuration file and prepare your project architecture to start receiving components.

## How it Works

1. **Initialize:** Run the `init` command to configure your paths and style preferences.
2. **Add Components:** Use the CLI to pull specific elements directly into your UI folder (e.g., `npx @singhastra/componentx-cli add hover-edge`).
3. **Customize:** Open the downloaded component in your code editor and modify it to fit your exact application needs.

## Next Steps

Now that you understand the basics, dive deeper into the documentation to start building your interfaces:

- [Installation Guide](/docs/installation) - Detailed setup instructions and framework prerequisites.
- [CLI Reference](/docs/cli) - Explore all available commands and flags.
- [Browse Components](/docs/components/hover-edge) - View the component registry and see them in action.
