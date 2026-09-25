# What is Component-X?

Component-X is a React component library where you own the code instead of renting it from an npm package.

Instead of installing an opaque npm package where you fight CSS overrides, you run our CLI and the raw `.tsx` files land straight inside your project. You own the code completely.

## How it works

1. **We build components** inside our showcase app (`apps/www`).
2. **A script compiles them** into JSON files that list what each component needs (`scripts/build-registry.ts`).
3. **Our CLI (`packages/cli`) downloads the JSON**, installs any needed npm packages, and writes the component into your project.
