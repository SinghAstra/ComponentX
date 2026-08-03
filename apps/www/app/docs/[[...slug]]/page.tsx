import { MarkdownRenderer } from "@/components/docs/markdown-renderer";
import { TableOfContents, TOCHeading } from "@/components/docs/toc";
import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import GithubSlugger from "github-slugger";

interface DocPageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

function extractHeadings(content: string): TOCHeading[] {
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

export default async function DocPage({ params }: DocPageProps) {
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug?.join("/") || "index";
  const filePath = path.join(process.cwd(), "content/docs", `${slugPath}.md`);

  let content = "";
  let headings: TOCHeading[] = [];

  try {
    content = await fs.readFile(filePath, "utf-8");
    headings = extractHeadings(content);
  } catch (error) {
    notFound();
  }

  return (
    <div className="mx-auto flex max-w-7xl items-start gap-12 px-8 py-8 xl:px-12">
      <div className="flex-1 min-w-0">
        <MarkdownRenderer content={content} />
      </div>

      <div className="hidden w-64 shrink-0 xl:block">
        <div className="sticky top-8">
          <TableOfContents headings={headings} />
        </div>
      </div>
    </div>
  );
}
