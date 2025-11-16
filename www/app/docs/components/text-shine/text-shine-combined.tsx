"use client";

import { TextShine } from "@/components/component-x/text-shine";

export function TextShineCombined() {
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-12 justify-center p-8">
      <div className="flex flex-col items-center gap-2">
        <TextShine
          className="text-3xl font-bold tracking-tight"
          shineColor="rgba(255, 215, 0, 1)"
          shinePeakOpacity={0.4}
          duration={5}
        >
          Premium Feature
        </TextShine>
        <p className="text-muted-foreground text-sm">
          With custom gold shine effect
        </p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <TextShine
          className="text-4xl font-black leading-tight"
          shineColor="rgba(0, 255, 255, 1)"
          shinePeakOpacity={0.5}
          duration={4}
        >
          Headline <span className="text-muted-foreground">with Shine</span>
        </TextShine>
        <p className="text-muted-foreground text-sm">
          Cyan shine for maximum impact
        </p>
      </div>
    </div>
  );
}
