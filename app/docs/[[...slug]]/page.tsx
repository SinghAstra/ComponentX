"use client";

import { allDocs } from "@/.contentlayer/generated";
import { Mdx } from "@/components/mdx/mdx-components";
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Heading, HeadingWithElement } from "@/types/heading";
import { ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Balancer from "react-wrap-balancer";

const DocsPage = () => {
  const params = useParams();
  const paramsSlug = params.slug as string[];
  const parsedParamsSlug = paramsSlug?.join("/") || "";
  const doc = allDocs.find((doc) => doc.slugAsParams === parsedParamsSlug);
  // const [activeSection, setActiveSection] = useState<string | null>(null);

  if (!doc) {
    notFound();
  }

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const headingElements: HeadingWithElement[] = doc.headings.map(
  //       (heading: Heading) => ({
  //         id: heading.id,
  //         element: document.getElementById(heading.id),
  //       })
  //     );

  //     // Get all heading positions
  //     const headingPositions = headingElements
  //       .map(({ id, element }) => ({
  //         id,
  //         position: element?.getBoundingClientRect().top || 0,
  //       }))
  //       .filter(({ position }) => position !== 0);

  //     // Find the heading closest to being 100px from the top of the viewport
  //     const currentSection = headingPositions.reduce((closest, current) => {
  //       if (!closest) return current;

  //       const closestDistance = Math.abs(closest.position - 100);
  //       const currentDistance = Math.abs(current.position - 100);

  //       return currentDistance < closestDistance ? current : closest;
  //     });

  //     setActiveSection(currentSection?.id || null);
  //   };

  //   // Add scroll event listener
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   // Run once on mount to set initial active section
  //   handleScroll();

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [doc.headings]);

  return (
    <main className="relative flex-1 md:ml-64 flex md:mr-72">
      <div className="mx-auto w-full max-w-2xl py-6 relative">
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
      </div>
      <div className="hidden md:block fixed h-[calc(100vh-3.5rem)] right-0 w-72 py-2 ">
        <nav className="space-y-1">
          {doc.headings.map((heading: Heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={cn(
                "block text-sm transition-colors hover:text-foreground border-l-2",
                // activeSection === heading.id
                //   ? "text-foreground font-medium border-primary"
                // :
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
