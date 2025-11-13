"use client";

import MovingBackground from "@/components/component-x/moving-background";

export function MovingBackgroundAngles() {
  const angles = [
    { label: "45°", value: 45 },
    { label: "90°", value: 90 },
    { label: "110°", value: 110 },
    { label: "180°", value: 180 },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {angles.map(({ label, value }) => (
        <div
          key={value}
          className="relative flex-none w-full h-full overflow-hidden border flex items-center justify-center rounded-lg"
        >
          <MovingBackground
            backgroundColor="hsl(var(--muted)/0.4)"
            shineColor="hsl(var(--primary)/0.4)"
            animationDuration={6000}
            gradientAngle={value}
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h3 className="text-2xl text-foreground">{label}</h3>
            <p className="text-sm text-muted-foreground mt-[1px]">
              Gradient angle
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
