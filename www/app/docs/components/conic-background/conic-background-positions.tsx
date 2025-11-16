'use client';

import ConicBackground, {
  type ConicBackgroundPositions,
} from '@/components/component-x/conic-background';

function capitalizeFirstLetter(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function ConicBackgroundPositions() {
  const conicBackgroundPositions: ConicBackgroundPositions[] = [
    'right',
    'top',
    'left',
    'bottom',
  ];
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col">
      {conicBackgroundPositions.map((pos) => (
        <div
          key={pos}
          className="relative flex-none w-full h-[350px] overflow-hidden border flex items-center justify-center"
        >
          <ConicBackground
            position={pos}
            backgroundSpan="large"
            angleSpan="medium"
            colorOne="hsl(var(--primary)/0.4)"
            colorTwo="hsl(var(--primary))"
          />
          <div className="relative z-10 flex items-center justify-center h-full">
            <h3 className="text-2xl text-foreground">
              {capitalizeFirstLetter(pos)}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
