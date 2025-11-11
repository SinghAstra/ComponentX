"use client";

import { CodeBlock } from "@/components/component-x/codeblock";
import { cn } from "@/lib/utils";
import type * as React from "react";
import { ComponentPreview } from "./component-preview";

interface ComponentPreviewWithCodeProps {
  /** The component to preview */
  children: React.ReactNode;
  /** Code string to display */
  code: string;
  /** Additional CSS class for preview container */
  previewClassName?: string;
  /** Additional CSS class for code block container */
  codeClassName?: string;
  /** Additional CSS class for wrapper */
  className?: string;
}

export function ComponentPreviewWithCode({
  children,
  code,
  previewClassName,
  codeClassName,
  className,
}: ComponentPreviewWithCodeProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {/* Component Preview */}
      <ComponentPreview previewClassName={previewClassName}>
        {children}
      </ComponentPreview>

      {/* Code Block */}
      <CodeBlock className={codeClassName}>
        <code>{code}</code>
      </CodeBlock>
    </div>
  );
}
