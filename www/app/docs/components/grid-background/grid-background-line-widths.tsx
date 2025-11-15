"use client";

import GridBackground from "@/components/component-x/grid-background";

export function GridBackgroundLineWidths() {
  const lineWidths = [
    { label: "Thin", value: 1 },
    { label: "Medium", value: 2 },
    { label: "Thick", value: 3 },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {lineWidths.map(({ label, value }) => (
        <div
          key={value}
          className="relative flex-none w-full h-full overflow-hidden border flex items-center justify-center"
        >
          <GridBackground
            gridDimension="48"
            gridColor="#161616"
            backgroundColor="bg-background"
            gridOpacity={1}
            lineWidth={value}
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h3 className="text-2xl text-foreground">
              {label} <span className="text-muted-foreground">{value}px</span>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
