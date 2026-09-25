# Writing the JSON the Installer Fetches

**The problem:** Everything so far lives in memory. The installer needs real files on disk — one manifest per component, plus an index of what's available.

**The decision:** I wipe and recreate the output folder on every run. That guarantees no stale file lingers after a rename or delete. I sort the component list for the same reason I sort dependencies — deterministic output, clean diffs. I keep the runner as a root script and don't wire it into the site build, so I regenerate by hand, inspect the diff, then commit.

**How it works:** Per component I combine the classified deps with the rewritten file text, then write pretty-printed JSON:

```typescript
content: sourceFile.getFullText()
```

Running it is one command:

```bash
pnpm run build:registry
```

**What this enables:** 20 per-component manifests plus a sorted `index.json` — the contract the installer builds on.
