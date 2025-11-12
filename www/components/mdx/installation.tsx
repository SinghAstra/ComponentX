"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import ClientCode from "./client-code";

interface InstallationProps {
  command: string;
  code: string;
}

export function Installation({ command, code }: InstallationProps) {
  const [activeTab, setActiveTab] = useState<"cli" | "manual">("cli");

  return (
    <div className="w-full space-y-4">
      <div className="flex gap-2 border-b border-border">
        <button
          onClick={() => setActiveTab("cli")}
          className={cn(
            "px-4 py-2 text-sm font-medium transition-colors relative",
            activeTab === "cli"
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          CLI
          {activeTab === "cli" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("manual")}
          className={cn(
            "px-4 py-2 text-sm font-medium transition-colors relative",
            activeTab === "manual"
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Manual
          {activeTab === "manual" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>
      </div>

      {activeTab === "cli" && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Run the following command to add the component:
          </p>
          <ClientCode
            language="bash"
            code={command}
            className="h-fit"
            showLineNumbers={false}
          />
        </div>
      )}

      {activeTab === "manual" && (
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Copy and paste the following code into your project.
          </p>
          <ClientCode language="tsx" code={code} />
        </div>
      )}
    </div>
  );
}
