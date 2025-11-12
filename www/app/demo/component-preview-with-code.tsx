"use client";

import React from "react";
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
  return (
    <div>
      <ComponentPreview>{children}</ComponentPreview>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        showLineNumbers={true}
        customStyle={{
          borderRadius: "0 0 8px 8px",
          border: "1px solid hsl(var(--border))",
          background: "hsl(var(--muted) / 0.4)",
          margin: "0",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
