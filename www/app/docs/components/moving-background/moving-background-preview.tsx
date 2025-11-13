"use client";

import MovingBackground from "@/components/component-x/moving-background";

export function MovingBackgroundPreview() {
  return (
    <div className="relative w-full h-full overflow-hidden border flex items-center justify-center">
      <div className="relative px-4 py-2 border shadow-md rounded">
        <MovingBackground
          backgroundColor="hsl(var(--muted)/0.4)"
          shineColor="hsl(var(--primary)/0.4)"
          animationDuration={6000}
          gradientAngle={110}
        />
        <h3 className="text-foreground relative z-10">Moving Background</h3>
      </div>
    </div>
  );
}
