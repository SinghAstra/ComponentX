"use client";

import { docsLink } from "@/config/docs"; // Your doc structure array
import { DocsLink } from "@/interfaces/docs-link";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// 1. Flatten the structured docsLink array into a single, ordered list
const allDocsLinks = docsLink.flatMap((section) => section.links);

export function DocsPagination() {
  const pathname = usePathname();

  // 2. Find the index of the current page in the flattened list
  const currentIndex = allDocsLinks.findIndex((item) => item.path === pathname);

  // Initialize previous and next links
  let previousLink: DocsLink | undefined;
  let nextLink: DocsLink | undefined;

  // 3. Determine previous and next links based on the index
  if (currentIndex > 0) {
    previousLink = allDocsLinks[currentIndex - 1];
  }

  if (currentIndex !== -1 && currentIndex < allDocsLinks.length - 1) {
    nextLink = allDocsLinks[currentIndex + 1];
  }

  // If there are no previous or next links, don't render the component
  if (!previousLink && !nextLink) {
    return null;
  }

  return (
    <div className="flex justify-between items-center mt-32 mb-8">
      {previousLink ? (
        <Link
          href={previousLink.path}
          className={
            "flex items-center gap-1 p-4 rounded border transition-all duration-300 hover:bg-muted/30 w-fit pr-16 group"
          }
        >
          <ChevronLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-all duration-300" />
          <span className="text-base">{previousLink.title}</span>
        </Link>
      ) : (
        <div className="w-1/2"></div>
      )}

      {nextLink ? (
        <Link
          href={nextLink.path}
          className={cn(
            "flex items-center gap-1 p-4 rounded border transition-all duration-300 hover:bg-muted/30 w-fit pl-16 group"
          )}
        >
          <span className="text-base">{nextLink.title}</span>
          <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-all duration-300" />
        </Link>
      ) : (
        <div className="w-1/2"></div>
      )}
    </div>
  );
}
