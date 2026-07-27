'use client';

import LampBackground from '@/components/component-x/lamp-background';

export function LampBackgroundColors() {
  const colorCombos = [
    {
      label: 'Primary',
      colorOne: 'hsl(var(--primary)/0.6)',
      colorTwo: 'transparent',
    },
    {
      label: 'Accent',
      colorOne: 'hsl(var(--accent)/0.6)',
      colorTwo: 'transparent',
    },
    {
      label: 'Secondary',
      colorOne: 'hsl(200, 100%, 50%)',
      colorTwo: 'transparent',
    },
    {
      label: 'Warm',
      colorOne: 'hsl(30, 100%, 50%)',
      colorTwo: 'transparent',
    },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {colorCombos.map(({ label, colorOne, colorTwo }) => (
        <div
          key={label}
          className="relative flex-none w-full h-full overflow-hidden border flex items-center justify-center"
        >
          <LampBackground
            position="top"
            angleSpan="medium"
            colorOne={colorOne}
            colorTwo={colorTwo}
          />
          <div className="relative z-10 flex items-center justify-center h-full">
            <h3 className="text-2xl text-foreground">{label}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
