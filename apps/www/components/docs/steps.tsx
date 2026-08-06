import React from "react";
import { cn } from "@/lib/utils";

export function Steps({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div 
      className={cn(
        "mb-12 ml-4 border-l border-border pl-8 [counter-reset:step]", 
        className
      )}
    >
      {children}
    </div>
  );
}

export function Step({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative mb-8", className)}>
      <div 
        className="absolute -left-12.25 mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold text-foreground [counter-increment:step] before:content-[counter(step)]" 
      />
      <h3 className="mb-4 font-mono text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      {children}
    </div>
  );
}