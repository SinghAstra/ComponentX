"use client";

import MovingBorder, {
  type MovingBorderSpeed,
} from "@/components/component-x/moving-border";

function capitalizeFirstLetter(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function MovingBorderSpeeds() {
  const speeds: MovingBorderSpeed[] = ["slow", "normal", "fast"];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {speeds.map((speed) => (
        <div key={speed} className="flex-none w-full h-48">
          <MovingBorder speed={speed} className="rounded-lg h-full">
            <div className="w-full h-full bg-background rounded-md flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl text-foreground">
                  {capitalizeFirstLetter(speed)} Speed
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Animation speed: {speed}
                </p>
              </div>
            </div>
          </MovingBorder>
        </div>
      ))}
    </div>
  );
}
