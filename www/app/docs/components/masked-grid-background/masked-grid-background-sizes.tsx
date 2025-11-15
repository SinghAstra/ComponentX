"use client";

import MaskedGridBackground from "@/components/component-x/masked-grid-background";

export function MaskedGridBackgroundSizes() {
  const sizes = [
    { label: "Small (24px)", value: 24 },
    { label: "Medium (48px)", value: 48 },
    { label: "Large (96px)", value: 96 },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {sizes.map(({ label, value }) => (
        <div
          key={value}
          className="relative flex-none w-full h-full overflow-hidden border flex items-center justify-center"
        >
          <MaskedGridBackground
            gridSize={value}
            gridLineColor="#161616"
            gridLineOpacity={0.8}
            maskPosition="center"
            maskSize={100}
            maskOpacity={{ start: 0.8, middle: 0.2, end: 0 }}
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h3 className="text-2xl text-foreground">{label}</h3>
            <p className="text-sm text-muted-foreground mt-[1px]">
              Grid cell size: {value}px
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
