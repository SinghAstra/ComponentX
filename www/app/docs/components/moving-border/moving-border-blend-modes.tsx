"use client";

import MovingBorder, {
  type MovingBorderBlendMode,
} from "@/components/component-x/moving-border";

function capitalizeFirstLetter(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function MovingBorderBlendModes() {
  const blendModes: MovingBorderBlendMode[] = [
    "normal",
    "screen",
    "overlay",
    "multiply",
    "lighten",
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {blendModes.map((blendMode) => (
        <div key={blendMode} className="flex-none w-full h-48">
          <MovingBorder blendMode={blendMode} className="rounded-lg h-full">
            <div className="w-full h-full bg-background rounded-md flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl text-foreground">
                  {capitalizeFirstLetter(blendMode)}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Blend mode: {blendMode}
                </p>
              </div>
            </div>
          </MovingBorder>
        </div>
      ))}
    </div>
  );
}
