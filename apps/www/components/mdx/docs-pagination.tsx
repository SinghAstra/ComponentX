"use client";

import { docsLink } from "@/config/docs";
import { DocsLink } from "@/interfaces/docs-link";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const allDocsLinks = docsLink.flatMap((section) => section.links);

export function DocsPagination() {
  const pathname = usePathname();
  const currentIndex = allDocsLinks.findIndex((item) => item.path === pathname);

  let previousLink: DocsLink | undefined;
  let nextLink: DocsLink | undefined;

  if (currentIndex > 0) {
    previousLink = allDocsLinks[currentIndex - 1];
  }

  if (currentIndex !== -1 && currentIndex < allDocsLinks.length - 1) {
    nextLink = allDocsLinks[currentIndex + 1];
  }

  if (!previousLink && !nextLink) {
    return null;
  }

  return (
    <div className="flex gap-2 justify-between items-center my-8 sm:mt-32">
      {previousLink ? (
        <Link
          href={previousLink.path}
          className={
            "flex items-center gap-1 p-2 rounded border transition-all duration-300 hover:bg-muted/30 w-fit group max-w-[48%]"
          }
        >
          <ChevronLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-all duration-300 flex-shrink-0" />
          <span className="text-base truncate">{previousLink.title}</span>
        </Link>
      ) : (
        <div className="hidden sm:block w-1/2"></div>
      )}

      {nextLink ? (
        <Link
          href={nextLink.path}
          className={cn(
            "flex items-center ml-auto sm:ml-0 gap-1 p-2 rounded border transition-all duration-300 hover:bg-muted/30 w-fit group max-w-[48%]"
          )}
        >
          <span className="text-base truncate">{nextLink.title}</span>
          <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
        </Link>
      ) : (
        <div className="hidden sm:block w-1/2"></div>
      )}
    </div>
  );
}
