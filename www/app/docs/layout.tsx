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
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="sticky top-0 inset-x-0 flex items-center justify-between bg-deep-primary p-4">
        <Link href="/" className="font-medium text-2xl text-primary">
          {siteConfig.name}
        </Link>
        <a href={siteConfig.links.github} target="_blank">
          <Button
            variant={"outline"}
            size={"sm"}
            className="bg-transparent hover:bg-muted/20 transition-all duration-300 p-2"
          >
            <FaGithub className="h-4 w-4" />
          </Button>
        </a>
      </div>

      <DocsSidebar />
      <div className="p-4 sm:px-8">{children}</div>
      {/* <div className="hidden lg:block pl-8 fixed w-64 top-24 right-0 bottom-0 overflow-y-auto">
        <TableOfContents />
      </div> */}
    </div>
  );
};

export default DocsLayout;
