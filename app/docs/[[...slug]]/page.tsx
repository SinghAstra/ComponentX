"use client";

import { allDocs } from "@/.contentlayer/generated";
import { Mdx } from "@/components/mdx-components";
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import Balancer from "react-wrap-balancer";

const DocsPage = () => {
  const params = useParams();
  const paramsSlug = params.slug as string[];
  const ans = paramsSlug?.join("/") || "";
  const doc = allDocs.find((doc) => doc.slugAsParams === ans);

  if (!doc) {
    notFound();
  }

  return (
    <main className="relative py-6 flex-1 md:ml-64 ">
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground">
          <div className="truncate">Docs</div>
          <ChevronRight className="h-3.5 w-3.5" />
          <div className="text-foreground">{doc.title}</div>
        </div>
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-3xl font-bold tracking-tight")}>
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-base text-muted-foreground">
              <Balancer>{doc.description}</Balancer>
            </p>
          )}
        </div>
        {doc.links ? (
          <div className="flex items-center space-x-2 pt-4">
            {doc.links?.doc && (
              <Link
                href={doc.links.doc}
                target="_blank"
                rel="noreferrer"
                className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
              >
                Docs
                <ExternalLink className="h-3 w-3" />
              </Link>
            )}
            {doc.links?.api && (
              <Link
                href={doc.links.api}
                target="_blank"
                rel="noreferrer"
                className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
              >
                API Reference
                <ExternalLink className="h-3 w-3" />
              </Link>
            )}
          </div>
        ) : null}
        <div className="pb-12 pt-8">
          <Mdx code={doc.body.code} />
        </div>
        {/* <DocsPager doc={doc} /> */}
      </div>
      <div className="hidden text-sm md:block w-20">
        {/* {doc.toc && <DashboardTableOfContents toc={toc} />} */}
      </div>
    </main>
  );
};

export default DocsPage;
