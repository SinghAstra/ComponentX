# Sorting Dependencies for Stable Diffs

**The problem:** Sets remove duplicates but keep insertion order. Two runs over the same code could emit lists in different orders, creating noisy git diffs.

**The decision:** I sort every list before returning it. Re-running the script produces zero diff unless something actually changed.

**How it works:** Spread each set into an array and sort it:

```typescript
return {
  externalDependencies: [...externalDependencies].sort(),
}
```

**What this enables:** Reviewable output — a diff always means a real dependency changed.
