"use client";

import MovingBackground from "@/components/component-x/moving-background";

export function MovingBackgroundColors() {
  const colorSchemes = [
    {
      label: "Primary",
      bg: "hsl(var(--muted)/0.4)",
      shine: "hsl(var(--primary)/0.4)",
    },
    {
      label: "Accent",
      bg: "hsl(var(--muted)/0.3)",
      shine: "hsl(var(--accent)/0.5)",
    },
    {
      label: "Destructive",
      bg: "hsl(var(--muted)/0.4)",
      shine: "hsl(var(--destructive)/0.3)",
    },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {colorSchemes.map(({ label, bg, shine }) => (
        <div
          key={label}
          className="relative flex-none w-full h-full overflow-hidden border flex items-center justify-center rounded-lg"
        >
          <MovingBackground
            backgroundColor={bg}
            shineColor={shine}
            animationDuration={6000}
            gradientAngle={110}
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h3 className="text-2xl text-foreground">{label}</h3>
            <p className="text-sm text-muted-foreground mt-[1px]">
              Color variation
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
