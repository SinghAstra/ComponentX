# Rewriting Local Aliases to Placeholders

**The problem:** 18 of our 20 components import `cn` from `@/lib/utils`. When the installer drops that code into a stranger's project, their `utils` file might live somewhere else — shipping the raw path breaks installs.

**The decision:** I rewrite exactly two specifiers into template placeholders the installer renders at install time. Everything else stays literal, because rewriting UI or provider paths would corrupt installs. I use an exact-match map, not a regex, so `@/components/ui/button` can never match by accident.

**How it works:** ts-morph edits the in-memory file buffer directly, so the function returns nothing — its effect shows up later when I read the file text:

```typescript
const ALIAS_TEMPLATES: Record<string, string> = {
  '@/lib/utils': '<%= it.aliases.utils %>',
}
```

I classify specifiers first and rewrite second. Reversed, the classifier would mistake the placeholder for an npm package.

**What this enables:** Portable file content that adapts to any user's folder layout.
