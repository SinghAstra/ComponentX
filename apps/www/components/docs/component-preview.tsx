"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  preview: React.ReactNode;
  code: React.ReactNode;
  className?: string;
}

export function ComponentPreview({ preview, code, className }: ComponentPreviewProps) {
  return (
    <Tabs defaultValue="preview" className={cn("relative my-6 w-full", className)}>
      <TabsList className="w-full justify-start rounded-none border-b border-border bg-transparent p-0">
        <TabsTrigger
          value="preview"
          className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
        >
          Preview
        </TabsTrigger>
        <TabsTrigger
          value="code"
          className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
        >
          Code
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="preview"
        className="mt-4 flex min-h-87.5 w-full items-center justify-center rounded-xl border bg-background p-10"
      >
        {preview}
      </TabsContent>
      <TabsContent value="code" className="mt-4">
        {code}
      </TabsContent>
    </Tabs>
  );
}