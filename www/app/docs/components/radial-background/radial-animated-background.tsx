"use client";

import RadialBackground from "@/components/component-x/radial-background";

export function RadialBackgroundAnimated() {
  return (
    <div className="relative w-full h-full overflow-hidden border">
      <RadialBackground
        position="left-center"
        variant="glow"
        colorOne="hsl(var(--primary)/0.8)"
        colorTwo="transparent"
        animate={true}
        radius={60}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h3 className="text-2xl text-foreground">Animated Radial</h3>
        <p className="text-muted-foreground mt-[1px]">Pulse animation effect</p>
      </div>
    </div>
  );
}
