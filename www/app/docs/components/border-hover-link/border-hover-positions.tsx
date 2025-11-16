"use client";

import BorderHoverLink, {
  BorderPosition,
} from "@/components/component-x/border-hover-link";

function capitalizeFirstLetter(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function BorderHoverPositions() {
  const positions: BorderPosition[] = ["top", "bottom", "left", "right"];

  return (
    <div className="w-full h-full overflow-y-auto flex items-center justify-center">
      <div className="flex flex-col gap-4">
        {positions.map((pos) => (
          <BorderHoverLink
            key={pos}
            borderPosition={pos}
            borderColor="hsl(var(--primary))"
            duration={700}
            className="bg-background px-3 py-1 cursor-pointer rounded overflow-hidden w-full text-center"
          >
            Hover me{" "}
            <span className="text-muted-foreground text-sm">
              {capitalizeFirstLetter(pos)}
            </span>
          </BorderHoverLink>
        ))}
      </div>
    </div>
  );
}
