import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen selection:bg-muted">
      <aside className="fixed top-0 left-0 z-20 h-screen w-64 border-r overflow-y-auto">
        <div className="p-6">
          <Link href="/" className="text-xl font-bold">
            {siteConfig.name}
          </Link>
        </div>

        <nav className="px-4 pb-24 space-y-8">
          {docsConfig.sidebarNav.map((section, index) => (
            <div key={index}>
              <h4 className="mb-2 px-2 text-sm font-semibold tracking-tight text-neutral-100">
                {section.title}
              </h4>
              <div className="flex flex-col gap-0.5 text-sm">
                {section.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={item.href}
                    className="group flex w-full transition-all duration-300 items-center rounded border-0 px-2 py-1.5  text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      <main className="flex-1 pl-64">{children}</main>
    </div>
  );
}
