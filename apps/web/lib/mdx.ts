import fs from "fs";
import matter from "gray-matter";
import path from "path";

const contentDirectory = path.join(process.cwd(), "content");

export interface ComponentDoc {
  title: string;
  description: string;
  content: string;
}

export function getComponentDoc(
  slug: string[] | undefined
): ComponentDoc | null {
  try {
    let parsedFilePath;
    let filePath;
    if (!slug) {
      filePath = path.join(contentDirectory, `introduction/index.mdx`);
      console.log("filePath is ", filePath);
    } else {
      parsedFilePath = slug.join("/");
      console.log("parsedFilePath is ", parsedFilePath);
      filePath = path.join(contentDirectory, `${parsedFilePath}/index.mdx`);
      console.log("filePath is ", filePath);
    }
    const fileContent = fs.readFileSync(filePath, "utf8");
    console.log("fileContent is ", fileContent);
    const { data, content } = matter(fileContent);

    console.log("data is ", data);

    return {
      title: data.title || slug,
      description: data.description || "",
      content,
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
