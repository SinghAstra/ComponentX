"use client";

import { TextShine } from "@/components/component-x/text-shine";

export function TextShineCustom() {
  return (
    <div className="w-full space-y-8">
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase mb-2">
          With Gradient
        </p>
        <TextShine
          className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          duration={6}
        >
          Gradient Shine
        </TextShine>
      </div>

      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase mb-2">
          With Tracking
        </p>
        <TextShine
          className="text-2xl font-semibold tracking-widest"
          duration={5}
        >
          SPACED TEXT
        </TextShine>
      </div>

      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase mb-2">
          In Context
        </p>
        <p className="text-base text-foreground">
          This is a{" "}
          <TextShine className="font-bold" duration={4}>
            highlighted
          </TextShine>{" "}
          phrase within regular text that draws attention.
        </p>
      </div>
    </div>
  );
}
