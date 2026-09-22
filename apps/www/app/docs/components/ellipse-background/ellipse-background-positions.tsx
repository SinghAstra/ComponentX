'use client';

import EllipseBackground, {
  EllipsePosition,
} from '@/components/component-x/ellipse-background';

function capitalizeFirstLetter(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function EllipseBackgroundPositions() {
  const radialPositions: EllipsePosition[] = [
    'top-left',
    'top-center',
    'top-right',
    'left-center',
    'right-center',
    'bottom-left',
    'bottom-center',
    'bottom-right',
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {radialPositions.map((pos) => (
        <div
          key={pos}
          className="relative flex-none w-full h-full overflow-hidden border flex items-center justify-center"
        >
          <EllipseBackground
            position={pos}
            variant="fade"
            colorOne="hsl(var(--primary)/0.6)"
            colorTwo="transparent"
            radiusX={60}
            radiusY={100}
          />
          <div className="relative z-10 flex items-center justify-center h-full">
            <h3 className="text-2xl text-foreground">
              {pos.split('-').map(capitalizeFirstLetter).join(' ')}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
