import fs from "fs";
import matter from "gray-matter";
import path from "path";

const contentDirectory = path.join(process.cwd(), "content");

export interface ComponentDoc {
  slug: string;
  title: string;
  description: string;
  content: string;
}

export function getComponentDoc(slug: string): ComponentDoc | null {
  try {
    const filePath = path.join(contentDirectory, `${slug}.mdx`);
    console.log("filePath is ", filePath);
    const fileContent = fs.readFileSync(filePath, "utf8");
    console.log("fileContent is ", fileContent);
    const { data, content } = matter(fileContent);

    return {
      slug,
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

export function getAllComponentDocs(): ComponentDoc[] {
  try {
    const files = fs.readdirSync(contentDirectory);
    const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

    return mdxFiles
      .map((file) => {
        const slug = file.replace(".mdx", "");
        return getComponentDoc(slug);
      })
      .filter(Boolean) as ComponentDoc[];
  } catch (error) {
    if (error instanceof Error) {
      console.log("error.stack is ", error.stack);
      console.log("error.message is ", error.message);
    }
    return [];
  }
}

export function getComponentSlugs(): string[] {
  try {
    const files = fs.readdirSync(contentDirectory);
    return files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => file.replace(".mdx", ""));
  } catch (error) {
    if (error instanceof Error) {
      console.log("error.stack is ", error.stack);
      console.log("error.message is ", error.message);
    }
    return [];
  }
}
