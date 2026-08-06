"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface InstallationTabsProps {
  cli: React.ReactNode;
  manual: React.ReactNode;
  className?: string;
}

export function InstallationTabs({ cli, manual, className }: InstallationTabsProps) {
  return (
    <Tabs defaultValue="cli" className={cn("relative my-6 w-full", className)}>
      <TabsList className="flex h-auto w-full justify-start gap-4 rounded-none bg-transparent p-0">
        <TabsTrigger
          value="cli"
          className="bg-transparent px-0 text-sm font-bold text-muted-foreground shadow-none data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none"
        >
          CLI
        </TabsTrigger>
        <TabsTrigger
          value="manual"
          className="bg-transparent px-0 text-sm font-bold text-muted-foreground shadow-none data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none"
        >
          Manual
        </TabsTrigger>
      </TabsList>
      <TabsContent value="cli" className="mt-4">
        {cli}
      </TabsContent>
      <TabsContent value="manual" className="mt-4">
        {manual}
      </TabsContent>
    </Tabs>
  );
}