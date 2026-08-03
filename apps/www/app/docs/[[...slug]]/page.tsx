import { MarkdownRenderer } from "@/components/docs/markdown-renderer";
import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";

interface DocPageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export default async function DocPage({ params }: DocPageProps) {
  // In Next.js 15, params is a Promise that must be awaited
  const resolvedParams = await params;

  // If there is no slug (i.e. `/docs`), we default to "index.md"
  const slugPath = resolvedParams.slug?.join("/") || "index";

  // Point to the content directory
  const filePath = path.join(process.cwd(), "content/docs", `${slugPath}.md`);

  let content = "";

  try {
    // Attempt to read the markdown file
    content = await fs.readFile(filePath, "utf-8");
  } catch (error) {
    // If the file doesn't exist, trigger a 404 page automatically
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-8 xl:px-12">
      <MarkdownRenderer content={content} />
    </div>
  );
}
