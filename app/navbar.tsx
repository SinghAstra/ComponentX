"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    // Handler for scroll event
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted]);

  return (
    <div
      className={`flex items-center justify-between px-6 py-3 fixed top-0 inset-x-0 sm:inset-x-24 lg:inset-x-32 backdrop-blur-md z-[10]
        transition-all duration-300
        rounded sm:border bg-background/40
        ${scrolled ? "shadow-2xl sm:top-2" : "sm:top-6"}
      `}
    >
      <Link href="/">
        <p className="text-xl sm:text-2xl tracking-wide">{siteConfig.name}</p>
      </Link>
      <Link href="/background">
        <p className="text-foreground/80 hover:text-foreground transition-all duration-200">
          Background
        </p>
      </Link>
    </div>
  );
};

export default Navbar;
