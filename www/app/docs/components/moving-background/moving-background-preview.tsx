"use client";

import MovingBackground from "@/components/component-x/moving-background";

export function MovingBackgroundPreview() {
  return (
    <div className="relative w-full h-96 overflow-hidden border flex items-center justify-center bg-background rounded-lg">
      <MovingBackground
        backgroundColor="hsl(var(--muted)/0.4)"
        shineColor="hsl(var(--primary)/0.4)"
        animationDuration={6000}
        gradientAngle={110}
      />
      <h3 className="text-2xl text-foreground relative z-10">
        Moving Background
      </h3>
    </div>
  );
}
