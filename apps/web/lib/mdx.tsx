import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";
import fs from "fs";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { components } from "../components/markdown/mdx-components";
import { normalizeLanguage, postProcess, preProcess } from "./rehype-plugins";

const contentDirectory = path.join(process.cwd(), "content");

function getDocumentFilePath(urlPath: string) {
  const isIntroduction = urlPath === "";
  const contentPath = isIntroduction
    ? "introduction/index.mdx"
    : `${urlPath}/index.mdx`;
  return path.join(contentDirectory, contentPath);
}

async function getAllMdxFilePaths(dir: string, baseDir: string) {
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

export async function getDocument(urlPath: string) {
  try {
    const filePath = getDocumentFilePath(urlPath);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content: rawMdxContent } = matter(fileContent);
    const { content: compiledMdxContent } = await compileMDX({
      source: rawMdxContent,
      options: {
        parseFrontmatter: false,
        mdxOptions: {
          rehypePlugins: [
            preProcess,
            normalizeLanguage,
            rehypePrism,
            rehypeSlug,
            rehypeAutolinkHeadings,
            postProcess,
          ],
          remarkPlugins: [remarkGfm],
        },
        scope: { siteConfig },
      },
      components,
    });

    return {
      title: data.title,
      description: data.description,
      content: compiledMdxContent,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error in getDocument");
      console.log("error.stack is ", error.stack);
      console.log("error.message is ", error.message);
    }
    return null;
  }
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
      console.log("Error in getComponentSlugs.");
      console.log("error.stack is ", error.stack);
      console.log("error.message is ", error.message);
    }
    return [];
  }
}

export function getPreviousNext(urlPath: string) {
  // Flatten the sidebar navigation items
  const flattenedNav: { title: string; href: string }[] = [];

  docsConfig.sidebarNav.forEach((section) => {
    section.items.forEach((item) => {
      if (item.href) {
        flattenedNav.push({ title: item.title, href: item.href });
      }
    });
  });

  const parsedPath = urlPath === "" ? "/docs" : `/docs/${urlPath}`;
  const currentPathIndex = flattenedNav.findIndex(
    (item) => item.href === parsedPath
  );

  console.log("currentPathIndex is ", currentPathIndex);

  return {
    prev: currentPathIndex > 0 ? flattenedNav[currentPathIndex - 1] : null,
    next:
      currentPathIndex < flattenedNav.length - 1
        ? flattenedNav[currentPathIndex + 1]
        : null,
  };
}

function getLinkForHeading(text: string) {
  const slug = text.toLowerCase().replace(/\s+/g, "-");
  return slug.replace(/[^a-z0-9-]/g, "");
}

export async function getDocumentTOC(urlPath: string) {
  const contentPath = getDocumentFilePath(urlPath);
  const fileContent = fs.readFileSync(contentPath, "utf8");
  const headingsRegex = /^(#{2,4})\s(.+)$/gm;
  let match;
  const extractedHeadings = [];
  while ((match = headingsRegex.exec(fileContent)) !== null) {
    const headingLevel = match[1].length;
    const headingText = match[2].trim();
    const slug = getLinkForHeading(headingText);
    extractedHeadings.push({
      level: headingLevel,
      text: headingText,
      href: `#${slug}`,
    });
  }
  return extractedHeadings;
}
