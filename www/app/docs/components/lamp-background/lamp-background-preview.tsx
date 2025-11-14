"use client";

import LampBackground from "@/components/component-x/lamp-background";

export function LampBackgroundPreview() {
  return (
    <div className="relative w-full h-full overflow-hidden border flex items-center justify-center">
      <LampBackground
        position="top"
        angleSpan="medium"
        colorOne="hsl(var(--primary)/0.6)"
        colorTwo="transparent"
      />
      <h3 className="text-2xl text-foreground">Lamp Background</h3>
    </div>
  );
}
