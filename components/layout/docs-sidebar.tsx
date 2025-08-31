"use client";

import { siteConfig } from "@/config/site";
import { DocsLink, DocsSectionLink } from "@/interfaces/docs-link";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DocsNav({
  docsLink,
  className,
  onLinkClick,
}: {
  docsLink: DocsSectionLink[];
  className?: string;
  onLinkClick?: () => void;
}) {
  const pathname = usePathname();

  return (
    <div className={cn("w-64 space-y-6 overflow-auto pb-2", className)}>
      <div className="text-primary text-2xl">{siteConfig.name}</div>
      {docsLink.map((item, index) => (
        <div key={index} className="flex flex-col gap-1">
          <h4 className="py-1 pl-1 text-xs tracking-widest text-muted-foreground uppercase">
            {item.title}
          </h4>
          <DocsNavItems
            items={item.links}
            pathname={pathname}
            onLinkClick={onLinkClick}
          />
        </div>
      ))}
    </div>
  );
}

function DocsNavItems({
  items,
  pathname,
  onLinkClick,
}: {
  items: DocsLink[];
  pathname: string;
  onLinkClick?: () => void;
}) {
  return (
    <div className="space-y-1 text-sm pl-2">
      {items.map(
        (item, index) =>
          item.path && (
            <Link
              key={index}
              href={item.path}
              className={cn(
                "group flex h-8 w-full items-center pl-4 text-foreground hover:bg-muted/80 transition-all border-l-2 border-muted hover:border-primary",
                pathname === item.path && "bg-muted/80 border-primary"
              )}
              onClick={onLinkClick}
            >
              {item.title}
              {item.label && (
                <span className="ml-2 rounded bg-primary/80 px-1.5 py-0.5 text-xs leading-none ">
                  {item.label}
                </span>
              )}
            </Link>
          )
      )}
    </div>
  );
}
