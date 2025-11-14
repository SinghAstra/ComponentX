"use client";

import MovingBorder from "@/components/component-x/moving-border";

export function MovingBorderPreview() {
  return (
    <MovingBorder className="rounded-lg">
      <div className="w-full h-48 bg-background rounded-md flex items-center justify-center">
        <h3 className="text-2xl text-foreground">Moving Border</h3>
      </div>
    </MovingBorder>
  );
}
