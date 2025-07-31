"use client";

import { type DocsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { NavItemWithChildren } from "@/types/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DocsNav({
  config,
  className,
  onLinkClick,
}: {
  config: DocsConfig;
  className?: string;
  onLinkClick?: () => void;
}) {
  const pathname = usePathname();
  const items = config.sidebarNav;

  return (
    <div className={cn("w-64 space-y-6 overflow-auto pb-2", className)}>
      {items.map((item, index) => (
        <div key={index} className="flex flex-col gap-1">
          <h4 className="py-1 pl-1 text-xs tracking-widest text-muted-foreground uppercase">
            {item.title}
          </h4>
          <DocsNavItems
            items={item.items}
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
  items: NavItemWithChildren[];
  pathname: string;
  onLinkClick?: () => void;
}) {
  return (
    <div className="space-y-1 text-sm pl-2">
      {items.map(
        (item, index) =>
          item.href && (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "group flex h-8 w-full items-center pl-4 text-foreground hover:bg-muted/80 transition-all border-l-2 border-muted hover:border-primary",
                pathname === item.href && "bg-muted/80 border-primary"
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
