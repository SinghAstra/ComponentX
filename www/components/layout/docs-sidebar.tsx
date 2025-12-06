"use client";

import { docsLink } from "@/config/docs";
import { DocsLink } from "@/interfaces/docs-link";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function DocsSidebar({
  onLinkClick,
  className,
}: {
  onLinkClick?: () => void;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "w-[256px] py-4 bg-deep-primary h-full overflow-y-auto flex-nowrap hidden md:block",
        className
      )}
    >
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
    <div className="space-y-1 text-sm pl-3">
      {items.map(
        (item, index) =>
          item.path && (
            <Link
              key={index}
              href={item.path}
              className={cn(
                "group flex h-8 w-full items-center pl-4 text-foreground hover:bg-muted/40 transition-all border-l-2 border-muted hover:border-primary",
                pathname === item.path && "bg-muted/40 border-primary"
              )}
              scroll={false}
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

export default DocsSidebar;
