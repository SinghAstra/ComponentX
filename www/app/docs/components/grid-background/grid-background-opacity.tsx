"use client";

import GridBackground from "@/components/component-x/grid-background";

export function GridBackgroundOpacity() {
  const opacities = [
    { label: "Subtle", value: 0.3 },
    { label: "Medium", value: 0.6 },
    { label: "Strong", value: 1 },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {opacities.map(({ label, value }) => (
        <div
          key={value}
          className="relative flex-none w-full h-full overflow-hidden border flex items-center justify-center"
        >
          <GridBackground
            gridDimension="48"
            gridColor="#161616"
            backgroundColor="bg-background"
            gridOpacity={value}
            lineWidth={1}
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h3 className="text-2xl text-foreground">
              {label}{" "}
              <span className="text-muted-foreground">
                {(value * 100).toFixed(0)}%
              </span>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
