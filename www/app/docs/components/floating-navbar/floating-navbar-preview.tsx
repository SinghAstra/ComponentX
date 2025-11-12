"use client";

import FloatingNavbar, {
    FloatingNavbarContent,
    FloatingNavbarItem,
    FloatingNavbarSeparator,
} from "@/components/component-x/floating-navbar";
import { Home, Settings } from "lucide-react";
import React from "react";

const FloatingNavbarPreview = () => {
  return (
    <FloatingNavbar>
      <FloatingNavbarContent>
        <FloatingNavbarItem href="/" icon={Home} label="Home" />
        <FloatingNavbarSeparator />
        <FloatingNavbarItem href="/projects" label="Projects" />
        <FloatingNavbarSeparator />
        <FloatingNavbarItem href="/settings" icon={Settings} label="Settings" />
      </FloatingNavbarContent>
    </FloatingNavbar>
  );
};

export default FloatingNavbarPreview;
