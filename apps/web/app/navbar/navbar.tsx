"use client";

import {
  BarChart2,
  LayoutTemplate,
  MessageCircle,
  Sparkles,
  Upload,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import HoverPopOver from "../ui/hover-popover";

const productLinks = [
  {
    icon: Sparkles,
    title: "AI",
    description: "Set your ideas free",
    href: "#",
  },
  {
    icon: LayoutTemplate,
    title: "Design",
    description: "Create with ease",
    href: "#",
  },
  {
    icon: MessageCircle,
    title: "Collaborate",
    description: "Build together",
    href: "#",
  },
  {
    icon: Upload,
    title: "Publish",
    description: "Launch instantly",
    href: "#",
  },
  {
    icon: BarChart2,
    title: "Scale",
    description: "Grow your reach",
    href: "#",
  },
];

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 ">
          <span className="text-lg font-bold">Framer</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <div className="relative group">
            <HoverPopOver>
              <HoverPopOver.Trigger>
                <Link
                  href="#"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Product
                </Link>
              </HoverPopOver.Trigger>
              <HoverPopOver.Content>
                {productLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-start gap-3 rounded-lg p-2 hover:bg-accent/50 transition-colors"
                  >
                    <item.icon className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        {item.title}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {item.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </HoverPopOver.Content>
            </HoverPopOver>
          </div>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Teams
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Resources
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Community
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Help
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Enterprise
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Login
          </Link>
          <Button
            className="rounded-lg transition-colors"
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
