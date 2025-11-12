"use client";

import RadialBackground, {
  type RadialPosition,
} from "@/components/component-x/radial-background";

export function RadialBackgroundPositions() {
  const radialPositions: RadialPosition[] = [
    "top-left",
    "top-center",
    "top-right",
    "left-center",
    "right-center",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ];

  return (
    <div className="w-full h-full overflow-y-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {radialPositions.map((pos) => (
        <div
          key={pos}
          className="relative flex-none w-full h-56 overflow-hidden border rounded-lg flex items-center justify-center"
        >
          <RadialBackground
            position={pos}
            variant="fade"
            colorOne="hsl(var(--primary)/0.6)"
            colorTwo="transparent"
            radius={60}
          />
          <div className="relative z-10 flex items-center justify-center h-full">
            <h3 className="text-sm font-semibold text-foreground text-center">
              {pos.replace("-", " ")}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
