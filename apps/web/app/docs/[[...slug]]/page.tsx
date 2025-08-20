import { Typography } from "@/components/markdown/typography";
import { getComponentSlugs, getDocument, getDocumentTOC } from "@/lib/mdx";
import { notFound } from "next/navigation";
import TOC from "./toc";

interface PageProps {
  params: {
    slug: string[] | undefined;
  };
}

export async function generateStaticParams() {
  const slugs = await getComponentSlugs();
  console.log("slugs is ", slugs);

  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const urlPath = params.slug ? params.slug.join("/") : "";

  console.log("urlPath is ", urlPath);

  const document = await getDocument(urlPath);
  if (!document) {
    return {
      title: "Component Not Found",
    };
  }

  return {
    title: document.title,
    description: document.description,
  };
}

async function ComponentDocPage({ params }: PageProps) {
  console.log("params.slug is ", params.slug);

  const urlPath = params.slug ? params.slug.join("/") : "";

  console.log("urlPath is ", urlPath);

  const document = await getDocument(urlPath);

  console.log("document is ", document);

  if (!document) {
    notFound();
  }
  const toc = await getDocumentTOC(urlPath);

  const isTocEmpty = toc.length === 0;

  return (
    <div
      className={`min-h-screen px-4 py-2 space-y-4 flex ${
        !isTocEmpty && "md:pr-80"
      }`}
    >
      <div className="p-4 flex-1 max-w-3xl w-full mx-auto">
        <h1 className="text-3xl font-bold">{document.title}</h1>
        <p className="text-muted-foreground mb-8">{document.description}</p>
        <Typography>{document.content}</Typography>
      </div>
      <TOC path={urlPath} />
    </div>
  );
}

export default ComponentDocPage;
