# ComponentX CLI 🚀

The official command-line interface for **ComponentX**, a beautiful, customizable, and copy-and-paste UI component library built for Next.js and Tailwind CSS.

Instead of installing an inflated npm package, ComponentX injects the raw component source code directly into your project. This gives you absolute control over the code, styling, and animations.

## Usage

You do not need to install this package globally. You can use `npx` to run it on-the-fly.

### 1. Initialize your project

Run the `init` command in the root of your Next.js or React project to set up your configuration:

```bash
npx @singhastra/componentx-cli@latest init
```

This will generate a `components.json` file in your root directory. By default, it configures your components to be installed into `./components/ui`. You can manually adjust this file if your project uses a different directory structure (like `src/components/ui`).

### 2. Add a component

Once initialized, use the `add` command to pull components directly from the ComponentX registry into your app.

For example, to install the `text-shine` component:

```bash
npx @singhastra/componentx-cli@latest add text-shine
```

**What happens?**

1. The CLI fetches the latest component code from the remote registry.
2. It writes the `.tsx` file directly into your configured UI directory.
3. It automatically installs any required npm dependencies (like `framer-motion` or `clsx`).

## Configuration (`components.json`)

```json
{
  "componentPath": "./components/ui",
  "packageManager": "npm"
}
```

- `componentPath`: Where the CLI will inject the downloaded `.tsx` files.
- `packageManager`: Your preferred package manager for auto-installing dependencies (`npm`, `pnpm`, `yarn`, or `bun`).
