import { getComponentDoc, getComponentSlugs } from "@/lib/mdx";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string[];
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
  const doc = await getComponentDoc(params.slug);

  if (!doc) {
    return {
      title: "Component Not Found",
    };
  }

  return {
    title: doc.title,
    description: doc.description,
  };
}

async function ComponentDocPage({ params }: PageProps) {
  console.log("params.slug is ", params.slug);

  const doc = await getComponentDoc(params.slug);

  console.log("doc is ", doc);

  if (!doc) {
    notFound();
  }

  return (
    <div className="min-h-screen px-4 py-2 space-y-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{doc.title}</h1>
        <p className="text-muted-foreground">{doc.description}</p>
      </div>
      <div>{doc.content}</div>
    </div>
  );
}

export default ComponentDocPage;
