import { getComponentDoc, getComponentSlugs } from "@/lib/mdx";
import { useMDXComponents } from "@/mdx-components";
import { BorderHoverLink } from "@component-x/ui";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string[];
  };
}

// export async function generateStaticParams() {
//   const slugs = getComponentSlugs();
//   return slugs.map((slug) => ({
//     slug,
//   }));
// }

// export async function generateMetadata({ params }: PageProps) {
//   const doc = getComponentDoc(params.slug);

//   if (!doc) {
//     return {
//       title: "Component Not Found",
//     };
//   }

//   return {
//     title: `${doc.title} - Component-X`,
//     description: doc.description,
//   };
// }

function ComponentDocPage({ params }: PageProps) {
  console.log("params.slug is ", params.slug);
  // const doc = getComponentDoc(params.slug);

  // console.log("doc is ", doc);

  // if (!doc) {
  //   notFound();
  // }

  const components = useMDXComponents({});

  return (
    <div className="min-h-screen">
      <header className="border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <BorderHoverLink>
              <Link
                href="/docs"
                className="flex items-center gap-2 text-sm font-medium"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Docs
              </Link>
            </BorderHoverLink>
          </div>
          <div className="flex items-center space-x-2">
            <BorderHoverLink>
              <Link
                href={`https://www.npmjs.com/package/@component-x/ui`}
                className="flex items-center gap-1 text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                npm
              </Link>
            </BorderHoverLink>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-slate max-w-none">
            {/* <MDXRemote source={doc.content} components={components} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentDocPage;
