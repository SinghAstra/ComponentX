"use client";

import MovingBackground from "@/components/component-x/moving-background";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function MovingBackgroundControl() {
  const [animated, setAnimated] = useState(true);

  return (
    <div className="relative w-full h-full overflow-hidden border flex flex-col items-center justify-center  gap-4">
      <div className="flex flex-col gap-4">
        <div className="relative px-4 py-2 border shadow-md rounded w-full">
          <MovingBackground
            backgroundColor="hsl(var(--muted)/0.4)"
            shineColor="hsl(var(--primary)/0.4)"
            animationDuration={6000}
            animated={animated}
          />
          <h3 className="text-foreground relative z-10 text-center">
            Animation Control
          </h3>
        </div>
        <Button
          onClick={() => setAnimated(!animated)}
          variant="outline"
          className="w-full rounded font-normal bg-muted/40 hover:bg-muted/20 transition-all duration-300"
        >
          {animated ? "Pause" : "Play"}
        </Button>
      </div>
    </div>
  );
}
