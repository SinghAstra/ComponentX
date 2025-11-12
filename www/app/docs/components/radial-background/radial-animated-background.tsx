"use client";

import RadialBackground from "@/components/component-x/radial-background";

export function RadialBackgroundAnimated() {
  return (
    <div className="relative w-full h-96 bg-gradient-to-b from-muted to-background rounded-lg overflow-hidden border">
      <RadialBackground
        position="left-center"
        variant="glow"
        colorOne="hsl(var(--primary)/0.8)"
        colorTwo="transparent"
        animate={true}
        radius={60}
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground">
            Animated Radial
          </h3>
          <p className="text-muted-foreground mt-2">Pulse animation effect</p>
        </div>
      </div>
    </div>
  );
}
