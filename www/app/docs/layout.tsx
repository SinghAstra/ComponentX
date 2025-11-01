"use client";

import { DocsNav } from "@/components/layout/docs-sidebar";
import { Button } from "@/components/ui/button";
import { docsLink } from "@/config/docs";
import { siteConfig } from "@/config/site";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Sidebar from "../../components/component-x/sidebar";
import TableOfContents from "../../components/component-x/toc";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <header className="fixed z-[2] top-0 w-full backdrop-blur-lg bg-background border-b shadow-xl flex items-center justify-between p-4">
        <div className="flex items-center">
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
        </div>

        <div className="flex items-center space-x-2">
          <a
            href={siteConfig.links.github}
            target="_blank"
            className="inline-flex items-center justify-center rounded transition-all duration-200 hover:bg-muted/80 py-2 px-3 border"
          >
            <FaGithub className="h-4 w-4" />
          </a>
        </div>
      </header>
      <DocsNav
        docsLink={docsLink}
        className="hidden md:block fixed border-r left-0 bottom-0 top-24"
      />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      >
        <div className="px-4 py-3 border-b mb-2">
          <h1 className="text-primary text-xl">{siteConfig.name}</h1>
        </div>
        <DocsNav docsLink={docsLink} />
      </Sidebar>
      <div className="md:pl-72 lg:pr-64 mt-24 p-4 sm:px-8">{children}</div>
      <div className="hidden lg:block pl-8 fixed w-64 top-24 right-0 bottom-0 overflow-y-auto">
        <TableOfContents />
      </div>
    </>
  );
};

export default DocsLayout;
