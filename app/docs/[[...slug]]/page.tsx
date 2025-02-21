"use client";

import { allDocs } from "@/.contentlayer/generated";
import { Mdx } from "@/components/mdx/mdx-components";
import { cn } from "@/lib/utils";
import { Heading } from "@/types/heading";
import { ChevronRight } from "lucide-react";
import { notFound, useParams } from "next/navigation";
import Balancer from "react-wrap-balancer";

const DocsPage = () => {
  const params = useParams();
  const paramsSlug = params.slug as string[];
  const parsedParamsSlug = paramsSlug?.join("/") || "";
  const doc = allDocs.find((doc) => doc.slugAsParams === parsedParamsSlug);

  if (!doc) {
    notFound();
  }

  return (
    <main className="relative flex-1 md:ml-64 flex xl:mr-72">
      <div className="mx-auto w-full max-w-2xl py-6 relative">
        <div className="mb-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground">
          <div className="truncate">Docs</div>
          <ChevronRight className="h-3.5 w-3.5" />
          <div className="text-foreground">{doc.title}</div>
        </div>
        <div className="space-y-2">
          <h1 className={cn("text-3xl font-bold tracking-tight")}>
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-base text-muted-foreground">
              <Balancer>{doc.description}</Balancer>
            </p>
          )}
        </div>
        <div className="pb-12 pt-8">
          <Mdx code={doc.body.code} />
        </div>
      </div>
      <div className="hidden xl:block fixed h-[calc(100vh-3.5rem)] right-0 w-72 py-2 ">
        <nav className="space-y-1">
          {doc.headings.map((heading: Heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={cn(
                "block text-sm transition-colors hover:text-foreground border-l-2",
                "text-muted-foreground ",
                {
                  "pl-4": heading.level === 2,
                  "pl-8": heading.level === 3,
                  "pl-12": heading.level === 4,
                }
              )}
            >
              {heading.title}
            </a>
          ))}
        </nav>
      </div>
    </main>
  );
};

export default DocsPage;
