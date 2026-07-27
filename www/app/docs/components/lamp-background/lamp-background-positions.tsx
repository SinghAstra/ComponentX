'use client';

import LampBackground, {
  type LampBackgroundPosition,
} from '@/components/component-x/lamp-background';

export function LampBackgroundPositions() {
  const positions: LampBackgroundPosition[] = [
    'top',
    'right',
    'bottom',
    'left',
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {positions.map((pos) => (
        <div
          key={pos}
          className="relative flex-none w-full h-full overflow-hidden border flex items-center justify-center"
        >
          <LampBackground
            position={pos}
            angleSpan="medium"
            colorOne="hsl(var(--primary)/0.6)"
            colorTwo="transparent"
          />
          <div className="relative z-10 flex items-center justify-center h-full">
            <h3 className="text-2xl text-foreground capitalize">{pos}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
