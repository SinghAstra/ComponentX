import ComponentShowcase from "@/components/component-showcase";
import Pre from "@/components/markdown/pre";
import { BorderHoverLink } from "@component-x/ui";
import fs from "fs";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { ComponentProps } from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";
import { cn } from "./utils";

const contentDirectory = path.join(process.cwd(), "content");

// Custom rehype plugin to preprocess 'pre' nodes for raw content
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const preProcess = () => (tree: any) => {
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
const normalizeLanguage = () => (tree: any) => {
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
const postProcess = () => (tree: any) => {
  visit(tree, "element", (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      if (node.raw) {
        node.properties["raw"] = node.raw;
      }
    }
  });
};

export async function getComponentDoc(slug: string[] | undefined) {
  try {
    let parsedFilePath;
    let filePath;
    if (!slug) {
      filePath = path.join(contentDirectory, `introduction/index.mdx`);
      // console.log("filePath is ", filePath);
    } else {
      parsedFilePath = slug.join("/");
      // console.log("parsedFilePath is ", parsedFilePath);
      filePath = path.join(contentDirectory, `${parsedFilePath}/index.mdx`);
      // console.log("filePath is ", filePath);
    }
    const fileContent = fs.readFileSync(filePath, "utf8");
    // console.log("fileContent is ", fileContent);
    const { data, content: rawMdxContent } = matter(fileContent);

    // Compile MDX content with plugins
    // const { content: compiledMdxContent } = await compileMDX({
    //   source: rawMdxContent,
    //   options: {
    //     parseFrontmatter: false, // Frontmatter already parsed by gray-matter
    //     mdxOptions: {
    //       rehypePlugins: [
    //         preProcess,
    //         normalizeLanguage,
    //         rehypePrism,
    //         rehypeSlug,
    //         rehypeAutolinkHeadings,
    //         postProcess,
    //       ],
    //       remarkPlugins: [remarkGfm],
    //     },
    //   },
    //   components,
    // });

    console.log("rawMdXContent is ", rawMdxContent);

    return {
      title: data.title || slug,
      description: data.description || "",
      content: "hey there",
    };
  } catch (error) {
    if (error instanceof Error) {
      console.log("error.stack is ", error.stack);
      console.log("error.message is ", error.message);
    }
    return null;
  }
}

async function getAllMdxFilePaths(
  dir: string,
  baseDir: string
): Promise<string[]> {
  let mdxFiles: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      mdxFiles = mdxFiles.concat(await getAllMdxFilePaths(fullPath, baseDir));
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      mdxFiles.push(path.relative(baseDir, fullPath));
    }
  }
  return mdxFiles;
}

export async function getComponentSlugs(): Promise<string[][]> {
  try {
    const allMdxFilePaths = await getAllMdxFilePaths(
      contentDirectory,
      contentDirectory
    );
    const slugs: string[][] = [];

    for (const filePath of allMdxFilePaths) {
      const parsedPath = path.parse(filePath);
      const dirSegments = parsedPath.dir
        .split(path.sep)
        .filter((segment) => segment !== "");

      if (parsedPath.name === "index") {
        if (dirSegments.length === 1 && dirSegments[0] === "introduction") {
          // Special case for introduction/index.mdx -> [] (for /docs)
          slugs.push([]);
        } else {
          slugs.push(dirSegments);
        }
      } else {
        // For other .mdx files, the slug includes the file name (without extension)
        slugs.push([...dirSegments, parsedPath.name]);
      }
    }

    console.log("slugs is ", slugs);
    return slugs;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error in getComponentSlugs:", error.message);
      console.error(error.stack);
    }
    return [];
  }
}
