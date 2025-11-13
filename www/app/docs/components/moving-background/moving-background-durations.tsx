"use client";

import MovingBackground from "@/components/component-x/moving-background";

export function MovingBackgroundDurations() {
  const durations = [
    { label: "Fast", value: 3000 },
    { label: "Normal", value: 6000 },
    { label: "Slow", value: 10000 },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {durations.map(({ label, value }) => (
        <div
          key={value}
          className="relative flex-none w-full h-full overflow-hidden border flex items-center justify-center rounded-lg"
        >
          <MovingBackground
            backgroundColor="hsl(var(--muted)/0.4)"
            shineColor="hsl(var(--primary)/0.4)"
            animationDuration={value}
            gradientAngle={110}
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h3 className="text-2xl text-foreground">{label}</h3>
            <p className="text-sm text-muted-foreground mt-[1px]">
              {value}ms duration
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
