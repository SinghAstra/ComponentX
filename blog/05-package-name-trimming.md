# Trimming Deep Imports to Root Packages

**The problem:** A component might import a subpath like `clsx/lite`. If the installer runs `npm install clsx/lite`, npm crashes — only root packages can be installed.

**The decision:** I trim every external specifier down to its root package name before storing it. Scoped packages keep their scope, everything else keeps its first segment.

**How it works:** `clsx/lite` becomes `clsx`, while `@radix-ui/react-slot/dist/index.js` becomes `@radix-ui/react-slot`:

```typescript
externalDependencies.add(toPackageName(specifier))
```

**What this enables:** The installer only ever sees installable names.
