import { cn } from "@/lib/utils";
import { Check, Copy, Loader2 } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Code } from "./code";

interface ComponentPreviewProps {
  component: React.ReactNode;
  code: string;
  align?: "start" | "center" | "end";
}

export function ComponentPreview({
  code,
  component,
  align = "center",
}: ComponentPreviewProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (typeof code === "string") {
      navigator.clipboard.writeText(code.replace(/\n$/, ""));
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className={cn("group relative my-4 flex flex-col space-y-2 ")}>
      <Tabs defaultValue="preview" className="relative mr-auto w-full ">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Code
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="preview" className="relative rounded-md border">
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
          <div
            className={cn(
              "preview flex min-h-[350px] w-full justify-center p-10 ",
              {
                "items-center": align === "center",
                "items-start": align === "start",
                "items-end": align === "end",
              }
            )}
          >
            <React.Suspense
              fallback={
                <div className="flex w-full items-center justify-center text-sm text-muted-foreground">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </div>
              }
            >
              {component}
            </React.Suspense>
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div className="w-full rounded-md ">
            <Code className="language-tsx">{code}</Code>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
