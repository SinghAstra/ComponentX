"use client";

import MovingBorder from "@/components/component-x/moving-border";

export function MovingBorderCustomization() {
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      <div className="flex-none w-full h-64">
        <MovingBorder
          color="hsl(var(--primary))"
          duration={2}
          speed="fast"
          direction="clockwise"
          blur={6}
          opacity={0.8}
          className="rounded-2xl h-full"
        >
          <div className="w-full h-full bg-gradient-to-br from-muted/50 to-background rounded-xl flex items-center justify-center">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-foreground">
                Fully Customized
              </h3>
              <p className="text-sm text-muted-foreground">
                Fast animation with blur effect
              </p>
            </div>
          </div>
        </MovingBorder>
      </div>
    </div>
  );
}
