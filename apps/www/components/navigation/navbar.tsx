"use client";

import { siteConfig } from "@/config/site";
import { navLinks } from "@/lib/nav-links";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
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
    </div>
  );
};

export default Navbar;
