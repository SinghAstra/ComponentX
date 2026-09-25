# Reading Imports With an AST, Not Regex

**The problem:** I need the exact list of what each file imports. Reading files as plain text and matching `import ... from ...` with a regex breaks on multi-line imports and gets fooled by comments.

**The decision:** I parse each file into a TypeScript Abstract Syntax Tree and ask it for the imports. The tree treats code as structured data, so I get clean specifiers every time.

**How it works:** Three lines give me every import path in a file:

```typescript
const sourceFile = project.addSourceFileAtPath(componentPath)
const importSpecifiers = sourceFile
  .getImportDeclarations()
  .map(declaration => declaration.getModuleSpecifierValue())
```

**What this enables:** A reliable string list that the classifier can sort into buckets.
