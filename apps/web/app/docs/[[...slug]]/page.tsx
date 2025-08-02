import { Typography } from "@/components/markdown/typography";
import { getComponentSlugs, getDocument } from "@/lib/mdx";
import { notFound } from "next/navigation";

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

  return (
    <div className="min-h-screen px-4 py-2 space-y-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{document.title}</h1>
        <p className="text-muted-foreground">{document.description}</p>
      </div>
      <Typography>{document.content}</Typography>
    </div>
  );
}

export default ComponentDocPage;
