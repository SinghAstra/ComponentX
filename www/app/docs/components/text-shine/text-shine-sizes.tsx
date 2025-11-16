"use client";

import { TextShine } from "@/components/component-x/text-shine";

export function TextShineSizes() {
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-8 justify-center">
      <div className="flex items-center justify-center">
        <TextShine className="text-sm font-medium">Small Text</TextShine>
      </div>
      <div className="flex items-center justify-center">
        <TextShine className="text-lg font-semibold">Medium Text</TextShine>
      </div>
      <div className="flex items-center justify-center">
        <TextShine className="text-3xl font-bold">Large Text</TextShine>
      </div>
      <div className="flex items-center justify-center">
        <TextShine className="text-5xl font-black">Extra Large</TextShine>
      </div>
    </div>
  );
}
