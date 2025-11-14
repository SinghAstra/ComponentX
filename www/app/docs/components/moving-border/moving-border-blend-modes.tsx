"use client";

import MovingBorder, {
  type MovingBorderBlendMode,
} from "@/components/component-x/moving-border";

export function MovingBorderBlendModes() {
  const modes: MovingBorderBlendMode[] = [
    "screen",
    "overlay",
    "multiply",
    "lighten",
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {modes.map((mode) => (
        <div
          key={mode}
          className="relative flex-none w-full h-72 overflow-hidden border rounded-lg flex items-center justify-center bg-background"
        >
          <MovingBorder
            color="hsl(var(--primary))"
            borderWidth={2}
            blendMode={mode}
            type="glow"
            duration={3}
          >
            <div className="relative z-10 bg-background p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-foreground capitalize">
                {mode}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Blend Mode: {mode}
              </p>
            </div>
          </MovingBorder>
        </div>
      ))}
    </div>
  );
}
