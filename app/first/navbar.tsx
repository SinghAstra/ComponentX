"use client";

import {
  HoverPopOver,
  HoverPopOverContent,
  HoverPopOverTrigger,
} from "@/components/component-x/hover-popover";
import { Button } from "@/components/ui/button";

import { Activity, BookOpen, LayoutTemplate, Sparkles } from "lucide-react";
import Link from "next/link";

const navItems = [
  {
    name: "Link 1",
    href: "#",
    content: [
      {
        title: "Sub-link 1",
        description: "Description for sub-link 1",
        href: "#",
        icon: Sparkles,
      },
      {
        title: "Sub-link 2",
        description: "Description for sub-link 2",
        href: "#",
        icon: LayoutTemplate,
      },
    ],
  },
  {
    name: "Link 2",
    href: "#",
    content: [
      {
        title: "Sub-link 1",
        description: "Description for sub-link 1",
        href: "#",
        icon: Sparkles,
      },
      {
        title: "Sub-link 2",
        description: "Description for sub-link 2",
        href: "#",
        icon: LayoutTemplate,
      },
      {
        title: "Sub-link 3",
        description: "Description for sub-link 3",
        href: "#",
        icon: Activity,
      },
    ],
  },
  {
    name: "Link 3",
    href: "#",
    content: [
      {
        title: "Sub-link 3",
        description: "Description for sub-link 3",
        href: "#",
        icon: BookOpen,
      },
    ],
  },
  {
    name: "Link 4",
    href: "#",
    content: [
      {
        title: "Sub-link 1",
        description: "Description for sub-link 1",
        href: "#",
        icon: Sparkles,
      },
      {
        title: "Sub-link 2",
        description: "Description for sub-link 2",
        href: "#",
        icon: LayoutTemplate,
      },
      {
        title: "Sub-link 3",
        description: "Description for sub-link 3",
        href: "#",
        icon: Activity,
      },
    ],
  },
];

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 ">
          <span className="text-2xl">SiteName</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((navItem) => (
            <div key={navItem.name} className="relative group">
              {navItem.content ? (
                <HoverPopOver>
                  <HoverPopOverTrigger>
                    <Link
                      href={navItem.href}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {navItem.name}
                    </Link>
                  </HoverPopOverTrigger>
                  <HoverPopOverContent className="bg-background">
                    <div className="flex flex-col w-64 border p-2 mt-5 shadow-xl">
                      {navItem.content.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="flex items-center gap-3 rounded p-2 hover:bg-muted/30 transition-all duration-300"
                        >
                          <div className="bg-muted/60 rounded p-2 ">
                            <item.icon className="h-5 w-5 text-foreground " />
                          </div>
                          <div>
                            <div className="text-sm text-foreground">
                              {item.title}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </HoverPopOverContent>
                </HoverPopOver>
              ) : (
                <Link
                  href={navItem.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {navItem.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Login
          </Link>
          <Button
            className="rounded transition-colors"
            variant="default"
            size="sm"
          >
            Sign up
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
