# CLI

The ComponentX CLI is the fastest way to initialize your project environment and seamlessly add reusable components directly into your codebase.

---

## init

The `init` command is used to initialize your project. It generates a `components.json` configuration file, configures your Tailwind settings, and creates the foundational utility functions (like `cn`) required by the components.

```bash
npx @singhastra/componentx-cli init
```

### Options

You can pass various flags to the `init` command to customize its behavior or run it in CI/CD environments:

* `-y, --yes`: Skip the confirmation prompts and automatically initialize using the default values.
* `-c, --cwd <cwd>`: Specify the working directory. Defaults to the current directory.

```bash
npx @singhastra/componentx-cli init --yes
```

## add

The `add` command downloads the requested component and its required dependencies. It places the raw source code directly into your project's configured components directory so you retain full control over the markup and styling.

```bash
npx @singhastra/componentx-cli add [component]
```

### Example

To add a specific component like `hover-edge`, run:

```bash
npx @singhastra/componentx-cli add hover-edge
```

You can also install multiple components simultaneously by separating their names with a space:

```bash
npx @singhastra/componentx-cli add hover-edge floating-navbar
```

### Options

* `-y, --yes`: Skip confirmation prompts.
* `-o, --overwrite`: Automatically overwrite existing component files without prompting for confirmation.
* `-a, --all`: Download and add all available ComponentX components to your project.
* `-c, --cwd <cwd>`: Specify the working directory. Defaults to the current directory.

```bash
npx @singhastra/componentx-cli add hover-edge --overwrite
```
