"use client";

import React from "react";

import ClientCode from "./client-code";
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
    <div className="my-8">
      <ComponentPreview>{children}</ComponentPreview>
      <ClientCode className="rounded-t-none" code={code} language={language} />
    </div>
  );
}
