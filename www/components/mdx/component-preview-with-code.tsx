"use client";

import { useToastContext } from "@/components/providers/toast";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ComponentPreview from "./component-preview";

interface ComponentPreviewWithCodeProps {
  children: React.ReactNode;
  code: string;
  language?: string;
}

export function ComponentPreviewWithCode({
  children,
  code,
  language = "tsx",
}: ComponentPreviewWithCodeProps) {
  const [hasCopied, setHasCopied] = useState(false);
  const { setToastMessage } = useToastContext();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setHasCopied(true);

      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    } catch (error) {
      if (error instanceof Error) {
        console.log("error.stack is ", error.stack);
        console.log("error.message is ", error.message);
      }
      setToastMessage("Failed to Copy!");
    }
  };
  return (
    <div>
      <ComponentPreview>{children}</ComponentPreview>
      <div className="relative">
        <Button
          onClick={handleCopy}
          variant={"outline"}
          size={"sm"}
          className="absolute top-2 right-2 z-10 bg-muted/80 border hover:bg-muted/30 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {hasCopied ? (
            <Check className="h-4 w-4 text-primary" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          showLineNumbers={true}
          className=""
          customStyle={{
            borderRadius: "0 0 8px 8px",
            border: "1px solid hsl(var(--border))",
            background: "hsl(var(--muted) / 0.4)",
            margin: "0",
          }}
          lineNumberStyle={{
            color: "hsl(var(--primary))",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
