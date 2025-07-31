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

export function getComponentSlugs(): string[][] {
  try {
    const entries = fs.readdirSync(contentDirectory, { withFileTypes: true });

    const slugs = entries
      .filter((entry) => {
        if (entry.isDirectory()) {
          const indexFilePath = path.join(
            contentDirectory,
            entry.name,
            "index.mdx"
          );
          console.log("entry.parentPath is ", entry.parentPath);
          console.log("entry.name is ", entry.name);
          return fs.existsSync(indexFilePath);
        }
        return false;
      })
      .map((entry) => (entry.name === "introduction" ? ["/"] : ["/"]));

    return slugs;
  } catch (error) {
    if (error instanceof Error) {
      console.log("error.stack is ", error.stack);
      console.log("error.message is ", error.message);
    }
    return [];
  }
}
