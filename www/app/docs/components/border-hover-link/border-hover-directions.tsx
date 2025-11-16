"use client";

import BorderHoverLink, {
  BorderHoverAnimationDirection,
} from "@/components/component-x/border-hover-link";

interface BorderItem {
  label: string;
  value: BorderHoverAnimationDirection;
}

export function BorderHoverDirections() {
  const directions: BorderItem[] = [
    { label: "Left to Right", value: "ltr" },
    { label: "Right to Left", value: "rtl" },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {directions.map((dir) => (
        <div
          key={dir.value}
          className="relative flex-none w-full h-32 overflow-hidden border flex items-center justify-center bg-muted/30"
        >
          <BorderHoverLink
            borderPosition="bottom"
            borderColor="hsl(var(--primary))"
            animationDirection={dir.value}
            duration={700}
          >
            <div className="text-center">
              <p className="text-foreground font-medium">{dir.label}</p>
              <p className="text-sm text-muted-foreground">
                {dir.value === "ltr"
                  ? "Animates from left to right"
                  : "Animates from right to left"}
              </p>
            </div>
          </BorderHoverLink>
        </div>
      ))}
    </div>
  );
}
