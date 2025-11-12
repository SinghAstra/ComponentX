"use client";

import RadialBackground from "@/components/component-x/radial-background";

export function RadialBackgroundPreview() {
  return (
    <div className="relative w-full h-full overflow-hidden border flex items-center justify-center">
      <RadialBackground
        position="left-center"
        variant="fade"
        colorOne="hsl(var(--primary)/0.6)"
        colorTwo="transparent"
      />
      <h3 className="text-2xl text-foreground">Radial Background</h3>
    </div>
  );
}
