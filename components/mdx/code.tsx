import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Button } from "../ui/button";

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export function Code({ className, children, ...props }: CodeProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (typeof children === "string") {
      navigator.clipboard.writeText(children.replace(/\n$/, ""));
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  // For code blocks with language specification
  if (className?.startsWith("language-")) {
    const language = className.replace("language-", "");

    return (
      <div className="relative group border rounded-md h-full py-0">
        <Button
          variant="outline"
          size="icon"
          onClick={handleCopy}
          className="absolute top-2 right-2 z-10 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {isCopied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{
            background: "transparent",
            lineHeight: "1.3rem",
            maxHeight: "350px",
            borderRadius: "0.75rem",
            paddingRight: "2.5rem",
            letterSpacing: "0.02rem",
            fontFamily: "Fira Code, monospace",
            margin: "0",
          }}
          codeTagProps={{
            className: "language-" + language,
          }}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      </div>
    );
  }

  // Default code rendering
  return (
    <code
      className={cn(
        "relative rounded font-mono text-sm bg-muted px-[0.3rem] ",
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
}
