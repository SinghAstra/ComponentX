import { DocsNav } from "@/components/layout/docs-sidebar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* <header className="sticky top-0 z-50 w-full border-b bg-background/40 backdrop-blur-lg">
        <div className="px-2 h-14 flex items-center justify-between mx-auto">
          <div className="flex items-center space-x-2">
            <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-[256px]">
                <VisuallyHidden.Root asChild>
                  <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                    <SheetDescription>Sidebar For Docs</SheetDescription>
                  </SheetHeader>
                </VisuallyHidden.Root>
                <Link
                  href="/"
                  className="font-medium leading-loose text-2xl text-primary px-2"
                >
                  {siteConfig.name}
                </Link>
                <DocsNav
                  config={docsConfig}
                  className="fixed border-r left-0 bottom-0 top-12 pl-1"
                  onLinkClick={() => setIsSidebarOpen(false)}
                />
              </SheetContent>
            </Sheet>
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
        </div>
      </header>
      <DocsNav
        config={docsConfig}
        className="hidden md:block fixed border-r left-0 bottom-0 top-16"
      /> */}
      <div className="md:pl-64">{children}</div>
    </>
  );
};

export default DocsLayout;
