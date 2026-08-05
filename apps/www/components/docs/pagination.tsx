"use client";

import { docsConfig } from "@/config/docs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const allDocsLinks = docsConfig.sidebarNav.flatMap((section) => section.items);

export function DocsPagination() {
  const pathname = usePathname();

  const currentIndex = allDocsLinks.findIndex((item) => item.href === pathname);

  const previousLink = currentIndex > 0 ? allDocsLinks[currentIndex - 1] : null;
  const nextLink =
    currentIndex !== -1 && currentIndex < allDocsLinks.length - 1
      ? allDocsLinks[currentIndex + 1]
      : null;

  if (!previousLink && !nextLink) {
    return null;
  }

  return (
    <div className="flex flex-row items-center justify-between gap-4 py-8 mt-12 border-t border-border">
      {previousLink ? (
        <Link
          href={previousLink.href}
          className="group flex flex-col gap-1 rounded-lg border border-border p-4 hover:bg-muted/50 transition-colors w-full sm:w-[48%]"
        >
          <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
            <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Previous
          </div>
          <span className="font-semibold text-foreground truncate pl-5">
            {previousLink.title}
          </span>
        </Link>
      ) : (
        <div className="hidden sm:block w-[48%]"></div>
      )}

      {nextLink ? (
        <Link
          href={nextLink.href}
          className="group flex flex-col items-end gap-1 rounded-lg border border-border p-4 hover:bg-muted/50 transition-colors w-full sm:w-[48%] text-right"
        >
          <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
            Next
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
          <span className="font-semibold text-foreground truncate pr-5">
            {nextLink.title}
          </span>
        </Link>
      ) : (
        <div className="hidden sm:block w-[48%]"></div>
      )}
    </div>
  );
}
