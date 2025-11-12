"use client";

import RadialBackground from "@/components/component-x/radial-background";

export function RadialBackgroundRadius() {
  const radiusSizes = [
    { label: "Small (30%)", value: 30 },
    { label: "Medium (60%)", value: 60 },
    { label: "Large (100%)", value: 100 },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {radiusSizes.map(({ label, value }) => (
        <div
          key={value}
          className="relative flex-none w-full h-72 overflow-hidden border rounded-lg flex items-center justify-center"
        >
          <RadialBackground
            position="left-center"
            variant="fade"
            colorOne="hsl(var(--primary)/0.6)"
            colorTwo="transparent"
            radius={value}
          />
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground">{label}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Radius: {value}%
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
