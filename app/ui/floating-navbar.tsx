"use client";

import { Button } from "@/components/ui/button";
import { BookOpen, Briefcase, Home, ImageIcon, Info } from "lucide-react";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Info, label: "About", href: "/background" },
  { icon: Briefcase, label: "Work", href: "/background" },
  { icon: BookOpen, label: "Blog", href: "/background" },
  { icon: ImageIcon, label: "Gallery", href: "/background" },
];

function NavbarContent() {
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-1 bg-muted/20 backdrop-blur-sm border rounded px-2 py-1 shadow-lg">
      {navItems.map((item, index) => (
        <Fragment key={item.label}>
          <Button
            key={item.label}
            variant="ghost"
            className={`hover:bg-primary transition-all duration-200 rounded font-normal
               ${
                 pathname === item.href
                   ? "bg-primary text-primary-foreground"
                   : "text-muted-foreground"
               }
            `}
            asChild
          >
            <a href={item.href}>
              <item.icon className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline"> {item.label}</span>
            </a>
          </Button>
          {/* Add divider except after the last button */}
          {index !== navItems.length - 1 && (
            <span className="h-5 w-px bg-muted/50 " aria-hidden="true"></span>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export function FloatingNavbar({ showNavbar }: { showNavbar: boolean }) {
  if (!showNavbar) return;
  return (
    <>
      <nav className="fixed bottom-6 md:bottom-auto  md:top-6 left-1/2 transform -translate-x-1/2 z-50">
        <NavbarContent />
      </nav>
    </>
  );
}
