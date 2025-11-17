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
    <div className="w-full h-full overflow-y-auto flex items-center justify-center">
      <div className="flex flex-col gap-4 w-fit">
        {colors.map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-col px-3 py-1 items-center justify-center border rounded bg-muted/30 w-full"
          >
            <TextShine shineColor={value}>
              Text Shine <span className="text-muted-foreground">{label}</span>
            </TextShine>
          </div>
        ))}
      </div>
    </div>
  );
}
