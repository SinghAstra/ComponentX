"use client";

import MovingBackground from "@/components/component-x/moving-background";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function MovingBackgroundControl() {
  const [animated, setAnimated] = useState(true);

  return (
    <div className="relative w-full h-96 overflow-hidden border flex flex-col items-center justify-center bg-background rounded-lg gap-4">
      <MovingBackground
        backgroundColor="hsl(var(--muted)/0.4)"
        shineColor="hsl(var(--primary)/0.4)"
        animationDuration={6000}
        animated={animated}
      />
      <div className="relative z-10 flex flex-col items-center justify-center gap-4">
        <h3 className="text-2xl text-foreground">Animation Control</h3>
        <Button onClick={() => setAnimated(!animated)} variant="outline">
          {animated ? "Pause" : "Play"}
        </Button>
      </div>
    </div>
  );
}
