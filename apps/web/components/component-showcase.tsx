"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ComponentShowcaseProps {
  preview: React.ReactNode;
  code: string;
}

function ComponentShowcase({ preview, code }: ComponentShowcaseProps) {
  return (
    <Tabs defaultValue="preview" className="w-full">
      <TabsList className="rounded px-1 py-[1px]">
        <TabsTrigger value="preview" className="rounded px-3 py-1 font-normal">
          Preview
        </TabsTrigger>
        <TabsTrigger value="code" className="rounded px-3 py-1 font-normal">
          Code
        </TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <Card className="p-4 flex justify-center items-center min-h-[150px]">
          {preview}
        </Card>
      </TabsContent>
      <TabsContent value="code">
        <pre className="p-4 rounded overflow-auto text-sm">
          <code>{code}</code>
        </pre>
      </TabsContent>
    </Tabs>
  );
}

export default ComponentShowcase;
