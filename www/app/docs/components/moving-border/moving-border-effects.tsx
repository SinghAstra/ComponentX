'use client';

import MovingBorder from '@/components/component-x/moving-border';

export function MovingBorderEffects() {
  const effects = [
    { label: 'No Blur', blur: 0, opacity: 1 },
    { label: 'Light Blur', blur: 4, opacity: 0.8 },
    { label: 'Medium Blur', blur: 8, opacity: 0.6 },
    { label: 'Heavy Blur', blur: 16, opacity: 0.4 },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex items-center justify-center">
      <div className="flex flex-col gap-4 w-fit">
        {effects.map((effect) => (
          <MovingBorder
            key={effect.label}
            blur={effect.blur}
            opacity={effect.opacity}
            className="rounded w-full"
          >
            <div className="rounded flex items-center justify-center px-3 py-1 w-full">
              <h3 className="text-foreground text-sm">
                Moving Border{' '}
                <span className="text-muted-foreground">{effect.label}</span>
              </h3>
            </div>
          </MovingBorder>
        ))}
      </div>
    </div>
  );
}
