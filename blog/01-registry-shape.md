# The Registry Shape

**The problem:** We have 20 components sitting in `apps/www/components/component-x/`. The installer needs to know, for each one, what npm packages to install, what shadcn primitives to fetch first, what sibling components it needs, and the actual code.

**The decision:** I defined the target JSON shape before writing any logic. If every manifest has the same four answers, the installer never has to guess.

**How it works:** Each component becomes one entry:

```typescript
type Registry = {
  name: string
  externalDependencies: string[]
  internalDependencies: string[]
  registryDependencies: string[]
  file: { name: string; content: string }
}
```

**What this enables:** Everything after this — discovery, parsing, sorting — just fills in these fields.
