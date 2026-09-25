# Checking the Registry Instead of Eyeballing It

**The problem:** After generating 20 JSON files, I was verifying them by hand with one-off searches. That works once, but the next regeneration could silently ship a broken manifest and nobody would notice.

**The decision:** I wrote a second script that re-checks every invariant from scratch and fails the command on any mismatch. It never trusts the generator — it re-reads the source files and compares.

**How it works:** One command runs the whole suite:

```bash
pnpm run check:registry
```

It checks the index is sorted and matches source, every manifest exists with sorted deduped lists, no `@/lib/` leaks, no framework packages as externals, placeholder counts, literal survivals, and two spot checks.

**What this enables:** Regenerate-then-verify becomes a two-command habit I can trust before every commit.
