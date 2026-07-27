"use client";

import { TextShine } from "@/components/component-x/text-shine";

export function TextShinePreview() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col px-3 py-1 items-center justify-center border rounded bg-muted/30">
        <TextShine>Text Shine</TextShine>
      </div>
    </div>
  );
}
