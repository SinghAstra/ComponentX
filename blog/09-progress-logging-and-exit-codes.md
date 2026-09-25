# Failing Loudly With Useful Logs

**The problem:** The script used to print the same two lines for every component and swallow failures with exit code 0. If the source folder was empty or a write failed, automation downstream would happily continue with stale output.

**The decision:** I log per-component progress with timing and a running count, summarize the whole run at the end, and exit non-zero on any failure. An empty discovery is itself an error — silently writing an empty index would be worse than crashing.

**How it works:** I stamp the start time, sort discovery for stable order, and guard the empty case:

```typescript
if (componentPaths.length === 0) {
  throw new Error(`No components found in ${COMPONENTS_PATH}`)
}
```

Failures go to `console.error` with the message plus stack, then `process.exit(1)`.

**What this enables:** I can watch a run like `Processed dialog in 6ms (4/20)` and trust that a broken run fails the command instead of shipping bad JSON.
