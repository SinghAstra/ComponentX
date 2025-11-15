"use client";

import EllipseBackground, {
  EllipseVariant,
} from "@/components/component-x/ellipse-background";

function capitalizeFirstLetter(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function EllipseBackgroundVariants() {
  const variants: EllipseVariant[] = ["fade", "glow"];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {variants.map((variant) => (
        <div
          key={variant}
          className="relative flex-none w-full h-full overflow-hidden border flex items-center justify-center"
        >
          <EllipseBackground
            position="top-center"
            variant={variant}
            colorOne="hsl(var(--primary)/0.7)"
            colorTwo="transparent"
            radiusX={60}
            radiusY={100}
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h3 className="text-2xl text-foreground">
              {capitalizeFirstLetter(variant)}
            </h3>
            <p className="text-sm text-muted-foreground mt-[1px]">
              {variant === "fade"
                ? "Smooth gradient fade"
                : "Bright glowing effect"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
