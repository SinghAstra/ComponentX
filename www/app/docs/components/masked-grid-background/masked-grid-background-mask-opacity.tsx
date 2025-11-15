"use client";

import MaskedGridBackground from "@/components/component-x/masked-grid-background";

export function MaskedGridBackgroundMaskOpacity() {
  const opacityConfigs = [
    {
      label: "Subtle Fade",
      opacity: { start: 0.4, middle: 0.2, end: 0 },
    },
    {
      label: "Medium Fade",
      opacity: { start: 0.8, middle: 0.2, end: 0 },
    },
    {
      label: "Aggressive Fade",
      opacity: { start: 1, middle: 0, end: 0 },
    },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {opacityConfigs.map(({ label, opacity }) => (
        <div
          key={label}
          className="relative flex-none w-full h-full overflow-hidden border flex items-center justify-center"
        >
          <MaskedGridBackground
            gridSize={48}
            gridLineColor="#161616"
            gridLineOpacity={1}
            maskPosition="center"
            maskSize={100}
            maskOpacity={opacity}
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h3 className="text-2xl text-foreground">{label}</h3>
            <p className="text-sm text-muted-foreground mt-[1px]">
              Start: {opacity.start}, Middle: {opacity.middle}, End:{" "}
              {opacity.end}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
