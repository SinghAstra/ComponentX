import fs from "fs/promises";
import path from "path";
import GithubSlugger from "github-slugger";
import { TOCHeading } from "@/components/docs/toc";

export function extractHeadings(content: string): TOCHeading[] {
  const slugger = new GithubSlugger();
  const regex = /^(## |### )(.*)$/gm;
  const headings: TOCHeading[] = [];
  let match;

  while ((match = regex.exec(content)) !== null) {
    const level = match[1].trim() === "##" ? 2 : 3;
    const title = match[2].trim();
    const id = slugger.slug(title);
    headings.push({ level, title, id });
  }

  return headings;
}

export async function getDocContent(slugPath: string) {
  const basePath = path.join(process.cwd(), "content/docs", slugPath);
  
  try {
    const content = await fs.readFile(`${basePath}.md`, "utf-8");
    const headings = extractHeadings(content);
    return { content, headings };
  } catch (error) {
    try {
      const content = await fs.readFile(path.join(basePath, "index.md"), "utf-8");
      const headings = extractHeadings(content);
      return { content, headings };
    } catch (fallbackError) {
      return null; 
    }
  }
}