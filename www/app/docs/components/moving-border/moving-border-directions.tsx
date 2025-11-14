"use client";

import MovingBorder, {
  type MovingBorderDirection,
} from "@/components/component-x/moving-border";

export function MovingBorderDirections() {
  const directions: MovingBorderDirection[] = ["clockwise", "counterclockwise"];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {directions.map((direction) => (
        <div
          key={direction}
          className="relative flex-none w-full h-72 overflow-hidden border rounded-lg flex items-center justify-center bg-background"
        >
          <MovingBorder
            color="hsl(var(--primary))"
            borderWidth={2}
            direction={direction}
            type="both"
            duration={3}
          >
            <div className="relative z-10 bg-background p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-foreground capitalize">
                {direction.split("-").join(" ")}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Rotation: {direction}
              </p>
            </div>
          </MovingBorder>
        </div>
      ))}
    </div>
  );
}
