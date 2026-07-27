'use client';

import MovingBorder, {
  type MovingBorderDirection,
} from '@/components/component-x/moving-border';

function capitalizeFirstLetter(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function MovingBorderDirections() {
  const directions: MovingBorderDirection[] = ['clockwise', 'counterclockwise'];

  return (
    <div className="w-full h-full overflow-y-auto flex items-center justify-center">
      <div className="flex flex-col gap-4 w-fit">
        {directions.map((direction) => (
          <MovingBorder
            key={direction}
            direction={direction}
            className="rounded w-full"
          >
            <div className="rounded flex items-center justify-center px-3 py-1 w-full">
              <h3 className="text-foreground text-sm">
                Moving Border{' '}
                <span className="text-muted-foreground">
                  {capitalizeFirstLetter(direction)}
                </span>
              </h3>
            </div>
          </MovingBorder>
        ))}
      </div>
    </div>
  );
}
