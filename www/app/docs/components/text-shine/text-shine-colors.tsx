"use client";

import { TextShine } from "@/components/component-x/text-shine";

export function TextShineColors() {
  const colors = [
    { label: "White", value: "rgba(255, 255, 255, 1)" },
    { label: "Gold", value: "rgba(255, 215, 0, 1)" },
    { label: "Cyan", value: "rgba(0, 255, 255, 1)" },
    { label: "Pink", value: "rgba(255, 105, 180, 1)" },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-8">
      {colors.map(({ label, value }) => (
        <div
          key={label}
          className="flex flex-col items-center justify-center h-32 border rounded-lg bg-muted/30"
        >
          <TextShine
            className="text-2xl font-bold"
            shineColor={value}
            duration={6}
          >
            {label} Shine
          </TextShine>
        </div>
      ))}
    </div>
  );
}
