"use client";

import FloatingNavbar, {
  FloatingNavbarContent,
  FloatingNavbarItem,
  FloatingNavbarSeparator,
} from "@/components/component-x/floating-navbar";
import { Button } from "@/components/ui/button";
import { Menu, Settings, X } from "lucide-react";
import { useState } from "react";

export function FloatingNavbarPreview() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {isNavbarOpen && (
        <div
          className="fixed inset-0 bg-muted/30 backdrop-blur-sm z-[5] transition-opacity duration-300"
          onClick={() => setIsNavbarOpen(false)}
          aria-hidden="true"
        />
      )}

      {isNavbarOpen && (
        <FloatingNavbar>
          <FloatingNavbarContent className="bg-background">
            <FloatingNavbarItem href="/" icon={Menu} label="Home" />
            <FloatingNavbarSeparator />
            <FloatingNavbarItem href="/projects" label="Projects" />
            <FloatingNavbarSeparator />
            <FloatingNavbarItem
              href="/settings"
              icon={Settings}
              label="Settings"
            />
          </FloatingNavbarContent>
        </FloatingNavbar>
      )}

      <Button
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        className="h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        size="icon"
        variant={isNavbarOpen ? "default" : "outline"}
      >
        {isNavbarOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
}
