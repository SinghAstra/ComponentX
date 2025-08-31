"use client";

import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import React, { useRef, useState } from "react";

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  children?: React.ReactNode;
}

export const CodeBlock = ({
  children,
  className,
  ...props
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLPreElement>(null);

  const copyToClipboard = async () => {
    const text = codeRef.current?.textContent || "";

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.log("Failed to copy text.");
      if (error instanceof Error) {
        console.log("error.stack is ", error.stack);
        console.log("error.message is ", error.message);
      }
    }
  };

  return (
    <div className="relative z-1">
      <pre
        ref={codeRef}
        className={cn(
          "my-4 overflow-x-auto rounded border bg-muted/10 p-4 pr-12",
          className
        )}
        {...props}
      >
        {children}
      </pre>
      <button
        onClick={copyToClipboard}
        className={cn(
          "absolute top-3 right-3 p-2 rounded transition-all duration-300",
          "bg-background/80 hover:bg-background border",
          "hover:scale-105 active:scale-95"
        )}
        aria-label="Copy code to clipboard"
      >
        {copied ? (
          <Check className="h-4 w-4 text-primary" />
        ) : (
          <Copy className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
    </div>
  );
};
