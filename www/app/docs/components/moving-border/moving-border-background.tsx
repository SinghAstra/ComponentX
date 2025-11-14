"use client";

import MovingBorder from "@/components/component-x/moving-border";

export function MovingBorderBackground() {
  return (
    <div className="relative w-full h-96 overflow-hidden border rounded-lg bg-background flex items-center justify-center">
      <MovingBorder
        color="hsl(var(--primary)/0.8)"
        glowColor="hsl(var(--primary)/0.5)"
        borderWidth={0}
        size="large"
        type="glow"
        position="fixed"
        duration={4}
        blur={20}
        opacity={0.6}
      />
      <div className="relative z-10 text-center">
        <h3 className="text-2xl font-bold text-foreground">Background Glow</h3>
        <p className="text-muted-foreground mt-2">
          Use as a background effect without wrapping content
        </p>
      </div>
    </div>
  );
}
