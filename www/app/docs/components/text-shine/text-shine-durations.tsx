"use client";

import { TextShine } from "@/components/component-x/text-shine";

export function TextShineDuration() {
  const durations = [
    { label: "Fast", value: 3 },
    { label: "Medium", value: 6 },
    { label: "Slow", value: 12 },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex items-center justify-center">
      <div className="flex flex-col gap-4">
        {durations.map(({ label, value }) => (
          <div
            key={value}
            className="flex flex-col px-3 py-1 items-center justify-center border rounded bg-muted/30"
          >
            <TextShine duration={value}>
              Text Shine <span className="text-muted-foreground">{label}</span>
            </TextShine>
          </div>
        ))}
      </div>
    </div>
  );
}
