"use client";

import EllipseBackground from "@/components/component-x/ellipse-background";
import DocsSidebar from "@/components/layout/docs-sidebar";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import TableOfContents from "../../components/component-x/toc";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col overflow-hidden w-full">
      <div className="sticky top-0 inset-x-0 flex items-center justify-between bg-deep-primary p-4 w-full border-b shadow-lg">
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
      <div className="flex flex-1 overflow-hidden relative ">
        <DocsSidebar />
        <EllipseBackground
          colorOne="hsl(var(--subtle-primary))"
          colorTwo="hsl(var(--deep-primary))"
          maskImage={false}
        />
        <div className=" flex-1 overflow-hidden relative">
          <div className="w-full h-full p-4 sm:px-8 overflow-y-auto">
            {children}
          </div>
        </div>
        <TableOfContents />
      </div>
    </div>
  );
};

export default DocsLayout;
