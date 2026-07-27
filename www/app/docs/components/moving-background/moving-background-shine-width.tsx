'use client';

import MovingBackground from '@/components/component-x/moving-background';

export function MovingBackgroundShineWidth() {
  const widths = [
    { label: 'Narrow', value: 5 },
    { label: 'Medium', value: 10 },
    { label: 'Wide', value: 20 },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-4">
        {widths.map(({ label, value }) => (
          <div
            key={value}
            className="relative px-4 py-2 border shadow-md rounded w-full"
          >
            <MovingBackground
              backgroundColor="hsl(var(--muted)/0.4)"
              shineColor="hsl(var(--primary)/0.4)"
              animationDuration={6000}
              gradientAngle={110}
              shineWidth={value}
            />
            <h3 className="text-foreground relative z-10 text-center">
              Moving Background {label}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
