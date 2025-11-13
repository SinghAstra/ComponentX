"use client";

import RadialBackground from "@/components/component-x/radial-background";

export function RadialBackgroundRadius() {
  const radiusSizes = [
    { label: "Small", value: 30 },
    { label: "Medium", value: 60 },
    { label: "Large", value: 100 },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {radiusSizes.map(({ label, value }) => (
        <div
          key={value}
          className="relative flex-none w-full h-full overflow-hidden border flex items-center justify-center"
        >
          <RadialBackground
            position="left-center"
            variant="fade"
            colorOne="hsl(var(--primary)/0.6)"
            colorTwo="transparent"
            radius={value}
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h3 className="text-2xl text-foreground">{label}</h3>
            <p className="text-sm text-muted-foreground mt-[1px]">
              Radius: {value}%
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
