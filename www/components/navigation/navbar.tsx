"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { navLinks } from "@/lib/nav-links";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Sidebar from "../component-x/sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // const handleClose = () => {
  //   setIsSidebarOpen(false);
  // };

  return (
    <>
      <div className="p-4 z-[5] bg-background flex items-center justify-between shadow-lg">
        <div className="flex items-center space-x-12">
          <Link href="/" className="text-xl font-bold logo text-primary">
            {siteConfig.name}
          </Link>

          <div className="hidden lg:flex space-x-5">
            {navLinks.map((navLink) => {
              return (
                <Link
                  key={navLink.title}
                  href={navLink.href}
                  className="flex text-sm items-center hover:bg-muted/40 cursor-pointer transition-all duration-300 py-1 px-3 font-medium rounded"
                >
                  {navLink.title}
                </Link>
              );
            })}
          </div>
        </div>

        <Button
          size="icon"
          variant="ghost"
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden"
        >
          <Menu className="w-5 h-5" />
        </Button>
      </div>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        direction="right"
      >
        <div className="flex flex-col items-start w-60  p-4 h-full bg-background/60">
          <Link href="/" className="text-lg font-bold logo mb-2 text-primary">
            {siteConfig.name}
          </Link>
        </div>
      </Sidebar>
    </>
  );
};

export default Navbar;
