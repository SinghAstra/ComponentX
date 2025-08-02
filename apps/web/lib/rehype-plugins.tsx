import { visit } from "unist-util-visit";

// Custom rehype plugin to preprocess 'pre' nodes for raw content
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const preProcess = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children;
      if (codeEl && codeEl.tagName === "code") {
        node.raw = codeEl.children?.[0]?.value; // Extract raw code content
      }
    }
  });
};

// Custom rehype plugin to normalize language classes for syntax highlighting
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const normalizeLanguage = () => (tree: any) => {
  const supported = new Set([
    "js",
    "ts",
    "tsx",
    "jsx",
    "html",
    "css",
    "json",
    "bash",
    "python",
    "c",
    "cpp",
    "java",
  ]);
  visit(tree, "element", (node) => {
    if (node.tagName === "code" && node.properties?.className) {
      const classNames = node.properties.className;
      const langClass = classNames.find((c: string) =>
        c.startsWith("language-")
      );
      if (langClass) {
        const lang = langClass.replace("language-", "");
        if (!supported.has(lang)) {
          // fallback to plain text if unsupported
          node.properties.className = ["language-text"];
        }
      }
    }
  });
};

// Custom rehype plugin to post-process 'pre' nodes, adding raw and filename properties
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postProcess = () => (tree: any) => {
  visit(tree, "element", (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      if (node.raw) {
        node.properties["raw"] = node.raw;
      }
    }
  });
};
