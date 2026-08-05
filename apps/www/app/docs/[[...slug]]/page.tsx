import { MarkdownRenderer } from "@/components/docs/markdown-renderer";
import { TableOfContents } from "@/components/docs/toc";
import { DocsPagination } from "@/components/docs/pagination";
import { getDocContent } from "@/lib/docs";
import { notFound } from "next/navigation";

interface DocPageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export default async function DocPage({ params }: DocPageProps) {
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug?.join("/") || "index";

  const doc = await getDocContent(slugPath);

  if (!doc) {
    notFound();
  }

  return (
    <div className="mx-auto flex-1 flex max-w-7xl items-start gap-12 h-full border rounded bg-muted/20">
      <div className="flex-1 min-w-0 overflow-y-auto p-8 xl:px-12 h-full">
        <MarkdownRenderer content={doc.content} />
        <DocsPagination />
      </div>

      <div className="hidden w-64 shrink-0 p-8 xl:block overflow-y-auto h-full">
        <TableOfContents headings={doc.headings} />
      </div>
    </div>
  );
}
