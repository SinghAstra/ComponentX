"use client";

import MovingBackground from "@/components/component-x/moving-background";

export function MovingBackgroundShineWidth() {
  const widths = [
    { label: "Narrow", value: 5 },
    { label: "Medium", value: 10 },
    { label: "Wide", value: 20 },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {widths.map(({ label, value }) => (
        <div
          key={value}
          className="relative flex-none w-full h-full overflow-hidden border flex items-center justify-center rounded-lg"
        >
          <MovingBackground
            backgroundColor="hsl(var(--muted)/0.4)"
            shineColor="hsl(var(--primary)/0.4)"
            animationDuration={6000}
            gradientAngle={110}
            shineWidth={value}
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h3 className="text-2xl text-foreground">{label}</h3>
            <p className="text-sm text-muted-foreground mt-[1px]">
              Width: {value}%
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
