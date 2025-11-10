"use client";

import DocsSidebar from "@/components/layout/docs-sidebar";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import TableOfContents from "../../components/component-x/toc";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex items-center w-full border border-yellow-400">
        <Button
          variant="ghost"
          className="hover:bg-transparent md:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu />
        </Button>
        <Link
          href="/"
          className="font-medium leading-loose text-2xl text-primary"
        >
          {siteConfig.name}
        </Link>
        <a
          href={siteConfig.links.github}
          target="_blank"
          className="inline-flex items-center justify-center rounded transition-all duration-200 hover:bg-muted/80 py-2 px-3 border"
        >
          <FaGithub className="h-4 w-4" />
        </a>
      </div>

      {/* <DocsSidebar /> */}
      <div className="p-4 sm:px-8">{children}</div>
      {/* <div className="hidden lg:block pl-8 fixed w-64 top-24 right-0 bottom-0 overflow-y-auto">
        <TableOfContents />
      </div> */}
    </div>
  );
};

export default DocsLayout;
