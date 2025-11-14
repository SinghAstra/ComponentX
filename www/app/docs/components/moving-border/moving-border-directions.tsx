"use client";

import MovingBorder, {
  type MovingBorderDirection,
} from "@/components/component-x/moving-border";

function capitalizeFirstLetter(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function MovingBorderDirections() {
  const directions: MovingBorderDirection[] = ["clockwise", "counterclockwise"];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {directions.map((direction) => (
        <div key={direction} className="flex-none w-full h-48">
          <MovingBorder direction={direction} className="rounded-lg h-full">
            <div className="w-full h-full bg-background rounded-md flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl text-foreground">
                  {capitalizeFirstLetter(direction)}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Rotation: {direction}
                </p>
              </div>
            </div>
          </MovingBorder>
        </div>
      ))}
    </div>
  );
}
