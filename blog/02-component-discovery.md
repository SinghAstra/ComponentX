# Finding Components Without a Hardcoded List

**The problem:** I didn't want to maintain a hardcoded list of 20 file paths that goes stale the moment someone adds a component.

**The decision:** I discover source files automatically at build time. Add a `.tsx` file to the folder and it shows up in the next run with zero config.

**How it works:** One call finds every component:

```typescript
const componentPaths = await glob(`${COMPONENTS_PATH}/*.tsx`)
```

**What this enables:** The rest of the script just loops over `componentPaths` — it never cares how many components exist.
