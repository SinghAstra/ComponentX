"use client";
import { DocsNav } from "@/components/docs-sidebar";
import { Icons } from "@/components/Icons";
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
import { Command, Menu, Search } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 z-50 w-full border-b bg-background/40">
        <div className="md:container md:px-0 px-2 flex h-14 items-center justify-between mx-auto">
          {/* Mobile Menu Button  */}
          <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 pt-8 w-[256px]">
              <VisuallyHidden.Root asChild>
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription>Sidebar For Docs</SheetDescription>
                </SheetHeader>
              </VisuallyHidden.Root>
              <DocsNav config={docsConfig} />
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-medium leading-loose text-2xl">
              {siteConfig.name}
            </span>
          </Link>

          <div className="flex items-center space-x-2">
            <div className="border rounded-md py-1 px-2 flex items-center space-x-2 bg-card/20">
              <span className="flex items-center w-48">
                <Search className="mr-2 h-4 w-4" />
                Search...
              </span>
              <span className="ml-auto flex items-center text-sm">
                <Command className="h-4 w-4" />K
              </span>
            </div>

            {/* Right side buttons */}
            <a
              href={siteConfig.links.github}
              target="_blank"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 px-4"
            >
              <Icons.gitLogo className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>
      {/* Main content */}
      <div className="flex pt-14">
        {/* Desktop sidebar - hidden on mobile */}
        <DocsNav
          config={docsConfig}
          className="hidden md:block fixed h-[calc(100vh-3.5rem)] border-r"
        />
        {/* Main content area */}
        <main className="flex-1 md:ml-64 p-4">This is main content</main>
      </div>
    </div>
  );
};

export default HomePage;
