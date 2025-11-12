"use client";

import RadialBackground, {
  type RadialVariant,
} from "@/components/component-x/radial-background";

function capitalizeFirstLetter(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function RadialBackgroundVariants() {
  const variants: RadialVariant[] = ["fade", "glow"];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {variants.map((variant) => (
        <div
          key={variant}
          className="relative flex-none w-full h-72 overflow-hidden border rounded-lg flex items-center justify-center"
        >
          <RadialBackground
            position="left-center"
            variant={variant}
            colorOne="hsl(var(--primary)/0.7)"
            colorTwo="transparent"
            radius={60}
          />
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground">
                {capitalizeFirstLetter(variant)}
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                {variant === "fade"
                  ? "Smooth gradient fade"
                  : "Bright glowing effect"}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
