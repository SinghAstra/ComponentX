import { cn } from "@/lib/utils";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
  title?: string;
}

export function Code({ className, children, title, ...props }: CodeProps) {
  // For code blocks with language specification
  if (className?.startsWith("language-")) {
    const language = className.replace("language-", "");
    console.log("title is ", title);

    return (
      <div className="relative">
        {title && (
          <div className="bg-zinc-800 text-zinc-300 px-4 py-2 rounded-t-lg text-sm font-medium">
            {title}
          </div>
        )}
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{
            background: "#18181b",
            lineHeight: "1.3rem",
            overflowX: "auto",
            marginBottom: "1rem",
            marginTop: title ? "0" : "1.5rem",
            maxHeight: "650px",
            borderRadius: title ? "0 0 0.75rem 0.75rem" : "0.75rem",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            letterSpacing: "0.02rem",
            fontFamily: "Fira Code, monospace",
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
        "relative rounded font-mono text-sm bg-muted px-[0.3rem] py-[0.2rem]",
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
}
