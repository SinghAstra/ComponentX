"use client";

import MaskedGridBackground from "@/components/component-x/masked-grid-background";

export function MaskedGridBackgroundMaskSizes() {
  const maskSizes = [
    { label: "Small (50%)", value: 50 },
    { label: "Medium (100%)", value: 100 },
    { label: "Large (150%)", value: 150 },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {maskSizes.map(({ label, value }) => (
        <div
          key={value}
          className="relative flex-none w-full h-full overflow-hidden border flex items-center justify-center"
        >
          <MaskedGridBackground
            gridSize={48}
            gridLineColor="#161616"
            gridLineOpacity={0.8}
            maskPosition="center"
            maskSize={value}
            maskOpacity={{ start: 0.8, middle: 0.2, end: 0 }}
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h3 className="text-2xl text-foreground">{label}</h3>
            <p className="text-sm text-muted-foreground mt-[1px]">
              Mask size: {value}%
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
