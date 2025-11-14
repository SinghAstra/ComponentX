"use client";

import MovingBorder, {
  type MovingBorderSpeed,
} from "@/components/component-x/moving-border";

export function MovingBorderSpeeds() {
  const speeds: MovingBorderSpeed[] = ["slow", "normal", "fast"];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {speeds.map((speed) => (
        <div
          key={speed}
          className="relative flex-none w-full h-72 overflow-hidden border rounded-lg flex items-center justify-center bg-background"
        >
          <MovingBorder
            color="hsl(var(--primary))"
            borderWidth={2}
            speed={speed}
            type="both"
            duration={3}
          >
            <div className="relative z-10 bg-background p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-foreground capitalize">
                {speed}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Animation Speed: {speed}
              </p>
            </div>
          </MovingBorder>
        </div>
      ))}
    </div>
  );
}
