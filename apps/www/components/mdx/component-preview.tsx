"use client";

import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  children: React.ReactNode;
  className?: string;
}

function ComponentPreview({ children, className }: ComponentPreviewProps) {
  return (
    <div
      className={cn(
        "flex border border-b-0 h-[350px] overflow-hidden w-full items-center justify-center rounded-t-md bg-transparent",
        className
      )}
    >
      {children}
    </div>
  );
}

export default ComponentPreview;
