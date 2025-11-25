"use client";

import { CodeBlock } from "@/components/component-x/codeblock";
import React from "react";
import ComponentPreview from "./component-preview";

interface ComponentPreviewWithCodeProps {
  children: React.ReactNode;
  code: string;
}

export function ComponentPreviewWithCode({
  children,
  code,
}: ComponentPreviewWithCodeProps) {
  return (
    <div>
      <ComponentPreview>{children}</ComponentPreview>
      <CodeBlock>{code}</CodeBlock>
    </div>
  );
}
