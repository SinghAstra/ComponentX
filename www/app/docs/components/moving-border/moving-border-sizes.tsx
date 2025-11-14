"use client";

import MovingBorder, {
  type MovingBorderSize,
} from "@/components/component-x/moving-border";

export function MovingBorderSizes() {
  const sizes: MovingBorderSize[] = ["small", "medium", "large"];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {sizes.map((size) => (
        <div
          key={size}
          className="relative flex-none w-full h-72 overflow-hidden border rounded-lg flex items-center justify-center bg-background"
        >
          <MovingBorder
            color="hsl(var(--primary))"
            borderWidth={2}
            size={size}
            type="both"
            duration={3}
          >
            <div className="relative z-10 bg-background p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-foreground capitalize">
                {size}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">Size: {size}</p>
            </div>
          </MovingBorder>
        </div>
      ))}
    </div>
  );
}
