"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart2,
  LayoutTemplate,
  MessageCircle,
  Sparkles,
  Upload,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

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
  const [isProductHovered, setIsProductHovered] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 ">
          <Image
            src="/placeholder.svg?height=24&width=16"
            alt="Framer Logo"
            width={16}
            height={24}
            className="h-6 w-4"
          />
          <span className="text-lg font-bold">Framer</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <div
            className="relative group"
            onMouseEnter={() => setIsProductHovered(true)}
            onMouseLeave={() => setIsProductHovered(false)}
          >
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Product
            </Link>
            <AnimatePresence>
              {isProductHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-1/2 -translate-x-1/2 mt-4 w-64 rounded-xl bg-card/90 backdrop-blur-md p-4 shadow-lg"
                >
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
                </motion.div>
              )}
            </AnimatePresence>
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
