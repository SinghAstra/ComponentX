"use client";

import MovingBorder from "@/components/component-x/moving-border";

export function MovingBorderPreview() {
  return (
    <div className="relative w-full h-96 overflow-hidden border rounded-lg flex items-center justify-center bg-background">
      <MovingBorder
        color="hsl(var(--primary))"
        borderWidth={2}
        duration={3}
        speed="normal"
        direction="clockwise"
        type="both"
      >
        <div className="relative z-10 bg-background p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-foreground">Moving Border</h3>
          <p className="text-muted-foreground mt-2">Animated rotating effect</p>
        </div>
      </MovingBorder>
    </div>
  );
}
