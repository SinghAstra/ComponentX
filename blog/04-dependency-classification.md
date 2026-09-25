# Sorting Imports Into Three Buckets

**The problem:** A file might import `react`, `@/lib/utils`, `@/components/ui/button`, and `framer-motion` side by side. If the installer treats them all like npm packages, installs crash.

**The decision:** I sort every specifier into exactly one bucket using simple prefix checks. Framework code and local helpers never reach any dependency list.

**How it works:** Sibling components lose their prefix into `internalDependencies`, shadcn primitives lose theirs into `registryDependencies`, `@/lib/*` and provider paths are skipped, framework roots like `react` and `next` are skipped, and everything left is a real npm package.

**What this enables:** Each manifest tells the installer precisely what to `npm install` versus what to fetch as a UI primitive.
