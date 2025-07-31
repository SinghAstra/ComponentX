import { Typography } from "@/components/markdown/typography";
import { getComponentDoc, getComponentSlugs } from "@/lib/mdx";
import { components } from "@/mdx-components";
import { MDXRemote } from "next-mdx-remote/rsc";
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
  const doc = getComponentDoc(params.slug);

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

function ComponentDocPage({ params }: PageProps) {
  console.log("params.slug is ", params.slug);

  const doc = getComponentDoc(params.slug);

  console.log("doc is ", doc);

  if (!doc) {
    notFound();
  }

  return (
    <div className="min-h-screen p-2 space-y-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{doc.title}</h1>
        <p className="text-muted-foreground">{doc.description}</p>
      </div>
      <Typography>
        <MDXRemote source={doc.content} components={components} />
      </Typography>
    </div>
  );
}

export default ComponentDocPage;
