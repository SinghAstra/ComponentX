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
          className="relative flex-none w-full h-full overflow-hidden border flex items-center justify-center "
        >
          <BorderHoverLink
            borderPosition="bottom"
            borderColor="hsl(var(--primary))"
            animationDirection={dir.value}
            duration={700}
            className="bg-background px-3 py-1 cursor-pointer rounded overflow-hidden text-center"
          >
            <p className="text-foreground">
              Hover me{" "}
              <span className="text-sm text-muted-foreground">
                {dir.value === "ltr" ? "left to right" : "right to left"}
              </span>
            </p>
          </BorderHoverLink>
        </div>
      ))}
    </div>
  );
}
