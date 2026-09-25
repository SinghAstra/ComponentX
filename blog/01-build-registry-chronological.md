# Building the Registry: How We Solved It Step by Step

`scripts/build-registry.ts` is the most important script in this project. It takes our 20 React components and turns them into clean JSON manifests that our installer CLI can use.

Here is how we thought through and built this file chronologically, solving each problem as it came up.

---

### Step 1: "What are we actually trying to do?"

**The goal:** We have 20 components sitting in `apps/www/components/component-x/` (like `button.tsx`, `dialog.tsx`, `color-picker.tsx`).
We need to generate a JSON file for each one that tells the installer CLI:
1. What npm packages to install.
2. What shadcn UI primitives to fetch first.
3. What sibling components it needs.
4. The actual code content.

We defined this target shape first:

```typescript
type Registry = {
  name: string
  externalDependencies: string[]
  internalDependencies: string[]
  registryDependencies: string[]
  file: { name: string; content: string }
}
```

---

### Step 2: "How do we find and read all 20 components?"

**The problem:** We don't want to maintain a hardcoded list of 20 file paths that goes out of date when someone adds a component.

**The solution:** Use `glob` to discover all `.tsx` files in the folder automatically:

```typescript
const componentPaths = await glob(`${COMPONENTS_PATH}/*.tsx`)
```

---

### Step 3: "How do we find what each file imports?"

**The naive idea:** Read the file as plain text and use a regular expression to match `import ... from ...`.

**Why regex failed:**
- Multi-line imports break regex easily.
- Comments like `// import something` fool it.
- Regex just gives raw text, not clean data.

**The solution:** Use `ts-morph` to parse the file into a TypeScript Abstract Syntax Tree (AST). It treats the code as structured data and gives us the exact module specifiers every time:

```typescript
const project = new Project()
const sourceFile = project.addSourceFileAtPath(componentPath)
const importSpecifiers = sourceFile
  .getImportDeclarations()
  .map(declaration => declaration.getModuleSpecifierValue())
```

---

### Step 4: "We have a list of imports. Now how do we sort them?"

**The problem:** A file might import `react`, `@/lib/utils`, `@/components/ui/button`, and `framer-motion`. If the CLI treats them all like npm packages, things crash.

**The solution:** Sort imports into three distinct buckets using simple checks:

1. **Sibling components (`@/components/component-x/*`):** These are our other components. Drop the prefix and add them to `internalDependencies`.
2. **shadcn primitives (`@/components/ui/*`):** UI elements like buttons or dialogs. Drop the prefix and add them to `registryDependencies`.
3. **Local helpers (`@/lib/*`):** Skip them here (we rewrite them to template tags later).
4. **Framework imports (`react`, `react-dom`, `next`):** We trim the import down to its root package name and check if it's in our `FRAMEWORK_PACKAGES` set. That way `react/jsx-runtime`, `react-dom/client`, and `next/navigation` are all skipped automatically without brittle string comparisons.
5. **Everything else:** Real third-party libraries (like `framer-motion`), which go into `externalDependencies`.

---

### Step 5: "Wait, what about deep imports like `clsx/lite`?"

**The problem:** A component might import a subpath instead of the root package:

```typescript
import { clsx } from "clsx/lite"
import { Slot } from "@radix-ui/react-slot/dist/index.js"
```

If the CLI runs `npm install clsx/lite`, npm crashes because `clsx/lite` is not a package on npm. Only root packages can be installed.

**Understanding package names:**
- **Unscoped packages (`clsx`, `lodash`):** Normal packages with no `@`. They never have slashes in their name. Take the first part before the slash (`clsx`), and throw away the rest (`lite`).
- **Scoped packages (`@radix-ui/react-slot`):** Packages owned by an organization starting with `@`. The scope (`@radix-ui`) is not an installable package by itself. You need both the scope and the package name (`@radix-ui/react-slot`).

**The solution:** A 5-line trimmer that only runs on `externalDependencies`:

```typescript
function toPackageName(specifier: string): string {
  const segments = specifier.split('/')
  return specifier.startsWith('@')
    ? `${segments[0]}/${segments[1]}`
    : segments[0]
}
```

---

### Step 6: "Keep the output deterministic"

**The problem:** Re-running the script shouldn't produce random diffs in git just because array items were in a different order.

**The solution:** Use `Set` to deduplicate package names, and `.sort()` all arrays before returning them:

```typescript
return {
  externalDependencies: [...externalDependencies].sort(),
  internalDependencies: [...internalDependencies].sort(),
  registryDependencies: [...registryDependencies].sort(),
}
```

---

## The Segue

With discovery, AST parsing, classification, and package name trimming all working together, we can reliably catalog every component's dependencies.

The next step is alias rewriting: taking local imports like `@/lib/utils` and converting them into template placeholders like `<%= it.aliases.utils %>` so the CLI can adapt each component to any user's project structure.
