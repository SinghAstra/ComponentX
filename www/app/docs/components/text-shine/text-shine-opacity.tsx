"use client";

import { TextShine } from "@/components/component-x/text-shine";

export function TextShineOpacity() {
  const opacityVariants = [
    {
      label: "Subtle",
      start: 0,
      peak: 0.1,
      end: 0,
    },
    {
      label: "Medium",
      start: 0,
      peak: 0.3,
      end: 0,
    },
    {
      label: "Intense",
      start: 0,
      peak: 0.6,
      end: 0,
    },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-8">
      {opacityVariants.map(({ label, start, peak, end }) => (
        <div
          key={label}
          className="flex flex-col items-center justify-center h-32 border rounded-lg bg-muted/30"
        >
          <TextShine
            className="text-2xl font-bold"
            shineStartOpacity={start}
            shinePeakOpacity={peak}
            shineEndOpacity={end}
            duration={6}
          >
            {label} Intensity
          </TextShine>
        </div>
      ))}
    </div>
  );
}
