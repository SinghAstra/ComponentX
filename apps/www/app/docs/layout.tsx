"use client";

import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background selection:bg-muted">
      <header className="z-50 flex h-14 shrink-0 items-center px-6 border-b">
        <Link href="/" className="text-xl font-bold">
          {siteConfig.name}
        </Link>
        <nav className="ml-auto flex items-center gap-6 text-sm font-medium">
          <Link
            href={siteConfig.links.githubRepo}
            target="_blank"
            className="text-muted-foreground hover:text-foreground border px-3 py-2 rounded hover:bg-muted/50 transition-all duration-300"
          >
            GitHub
          </Link>
        </nav>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 shrink-0 overflow-y-auto border-r">
          <nav className="px-4 py-8 space-y-8 pb-24">
            {docsConfig.sidebarNav.map((section, index) => (
              <div key={index}>
                <h4 className="mb-2 px-2 text-sm font-semibold tracking-tight text-foreground">
                  {section.title}
                </h4>
                <div className="flex flex-col gap-0.5 text-sm">
                  {section.items.map((item, itemIndex) => {
                    const isActive = pathname === item.href;

                    return (
                      <Link
                        key={itemIndex}
                        href={item.href}
                        className={`group flex w-full transition-all duration-200 items-center rounded-md border-0 px-2 py-1.5 ${
                          isActive
                            ? "bg-muted text-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
