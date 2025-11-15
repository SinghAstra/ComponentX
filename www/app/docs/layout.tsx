"use client";

import TableOfContents from "@/components/component-x/toc";
import DocsSidebar from "@/components/layout/docs-sidebar";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-dvh flex flex-col overflow-hidden w-full">
      <div className="sticky top-0 inset-x-0 flex items-center justify-between p-4 py-3 w-full">
        <Link href="/" className="text-xl text-primary">
          {siteConfig.name}
        </Link>
        <a href={siteConfig.links.githubRepo} target="_blank">
          <Button
            variant={"outline"}
            className="bg-transparent hover:bg-muted/20 transition-all duration-300 px-3 py-2"
          >
            Github
          </Button>
        </a>
      </div>
      <div className="flex flex-1 overflow-hidden relative">
        <DocsSidebar />
        <div className="flex-1 flex overflow-hidden p-2">
          <div className="flex-1 h-full flex overflow-hidden border rounded bg-muted/10">
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
