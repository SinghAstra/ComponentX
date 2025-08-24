"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tab";

interface ComponentShowcaseProps {
  preview: React.ReactNode;
  code: React.ReactNode;
}

function ComponentShowcase({ preview, code }: ComponentShowcaseProps) {
  return (
    <Tabs defaultValue="preview" className="w-full mb-5">
      <TabsList className="rounded px-1 py-[1px] m-0 rounded-b-none bg-muted/80">
        <TabsTrigger value="preview" className="rounded px-3 py-1 font-normal ">
          Preview
        </TabsTrigger>
        <TabsTrigger value="code" className="rounded px-3 py-1 font-normal ">
          Code
        </TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="mt-0 ">
        <div className="rounded-tl-none flex items-center justify-center min-h-[200px] border">
          {preview}
        </div>
      </TabsContent>
      <TabsContent value="code" className="mt-0">
        <div className="rounded-tl-none border max-h-[200px]">{code}</div>
      </TabsContent>
    </Tabs>
  );
}

export default ComponentShowcase;
