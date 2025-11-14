"use client";

import MovingBorder, {
  type MovingBorderType,
} from "@/components/component-x/moving-border";

export function MovingBorderTypes() {
  const types: MovingBorderType[] = ["glow", "border", "both"];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {types.map((type) => (
        <div
          key={type}
          className="relative flex-none w-full h-72 overflow-hidden border rounded-lg flex items-center justify-center bg-background"
        >
          <MovingBorder
            color="hsl(var(--primary))"
            borderWidth={2}
            type={type}
            duration={3}
          >
            <div className="relative z-10 bg-background p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-foreground capitalize">
                {type}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Effect Type: {type}
              </p>
            </div>
          </MovingBorder>
        </div>
      ))}
    </div>
  );
}
