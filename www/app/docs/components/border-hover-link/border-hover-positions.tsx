"use client";

import BorderHoverLink, {
  BorderPosition,
} from "@/components/component-x/border-hover-link";

export function BorderHoverPositions() {
  const positions: BorderPosition[] = ["top", "bottom", "left", "right"];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {positions.map((pos) => (
        <div
          key={pos}
          className="relative flex-none w-full h-32 overflow-hidden border flex items-center justify-center bg-muted/30"
        >
          <BorderHoverLink
            borderPosition={pos}
            borderColor="hsl(var(--primary))"
            duration={700}
          >
            <span className="text-foreground capitalize">{pos} border</span>
          </BorderHoverLink>
        </div>
      ))}
    </div>
  );
}
