"use client";

import { MenuToggle } from "@/components/component-x/menu-toggle";
import DocsSidebar from "@/components/layout/docs-sidebar";
import TableOfContents from "@/components/mdx/toc";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import React, { useState } from "react";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  return (
    <div className="h-dvh flex flex-col overflow-hidden w-full">
      <div className="sticky top-0 inset-x-0 flex items-center justify-between p-4 py-3 w-full">
        <Link href="/" className="text-xl text-primary">
          {siteConfig.name}
        </Link>

        <div className="flex gap-2 items-center">
          <a href={siteConfig.links.githubRepo} target="_blank">
            <Button
              variant={"outline"}
              className="bg-transparent hover:bg-muted/20 transition-all duration-300 px-3 py-2"
            >
              Github
            </Button>
          </a>
          <MenuToggle onOpenChange={setIsSheetOpen} />

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetContent
              side="right"
              className="h-full overflow-y-auto pt-0 border border-yellow-400 w-full"
            >
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-xl text-primary font-bold mb-4 block"
                  onClick={() => setIsSheetOpen(false)}
                >
                  {siteConfig.name}
                </Link>

                <DocsSidebar
                  className="block w-full bg-transparent p-0"
                  onLinkClick={() => setIsSheetOpen(false)}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden relative">
        <DocsSidebar />
        <div className="flex-1 flex overflow-hidden pb-2 pr-2">
          <div className="flex-1 h-full flex overflow-hidden border rounded bg-muted/30">
            <div className="h-full p-4 sm:px-8 flex-1 overflow-y-auto">
              {children}
            </div>
            <TableOfContents />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsLayout;
