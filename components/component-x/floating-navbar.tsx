"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import type * as React from "react";

export function FloatingNavbar({
  show = true,
  className,
  children,
}: {
  show: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  if (!show) return null;
  return (
    <nav
      className={cn(
        "fixed bottom-6 md:bottom-auto md:top-6 left-1/2 -translate-x-1/2 z-50",
        className
      )}
    >
      {children}
    </nav>
  );
}

export function FloatingNavbarContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-1 bg-muted/20 backdrop-blur-sm border rounded px-2 py-1 shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}

export function FloatingNavbarItem({
  href,
  icon: Icon,
  label,
  className,
}: {
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  label?: string;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Button
      variant="ghost"
      asChild
      className={cn(
        "hover:bg-primary transition-all duration-300 rounded font-normal",
        isActive
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground",
        className
      )}
    >
      <a href={href}>
        {Icon ? <Icon className="h-4 w-4 mr-1" /> : null}
        {label ? <span className="hidden sm:inline">{label}</span> : null}
      </a>
    </Button>
  );
}

export function FloatingNavbarSeparator({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("h-5 w-px bg-muted/50", className)}
    />
  );
}

export default FloatingNavbar;
