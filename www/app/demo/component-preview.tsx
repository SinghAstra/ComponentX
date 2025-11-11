"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Copy, CopyX as Copy2, CornerDownLeft } from "lucide-react";
import * as React from "react";

interface ComponentPreviewProps {
  children: React.ReactNode;
  className?: string;
  previewClassName?: string;
}

export function ComponentPreview({
  children,
  className,
  previewClassName,
}: ComponentPreviewProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "group relative rounded-lg border border-border bg-card",
        className
      )}
    >
      {/* Preview Area */}
      <div
        className={cn(
          "flex min-h-[350px] w-full items-center justify-center overflow-hidden rounded-[calc(var(--radius)-1px)] bg-muted/30 p-10",
          previewClassName
        )}
      >
        {children}
      </div>

      {/* Action Buttons */}
      <div className="absolute right-3 top-3 z-50 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 bg-background/80 hover:bg-background"
          onClick={copyToClipboard}
          title={copied ? "Copied!" : "Copy code"}
        >
          {copied ? (
            <Copy2 className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 bg-background/80 hover:bg-background"
          title="Open in new window"
        >
          <CornerDownLeft className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
