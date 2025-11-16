'use client';

import MovingBorder, {
  type MovingBorderSpeed,
} from '@/components/component-x/moving-border';

function capitalizeFirstLetter(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function MovingBorderSpeeds() {
  const speeds: MovingBorderSpeed[] = ['slow', 'normal', 'fast'];

  return (
    <div className="w-full h-full overflow-y-auto flex items-center justify-center">
      <div className="flex flex-col gap-4 w-fit">
        {speeds.map((speed) => (
          <MovingBorder key={speed} speed={speed} className="rounded w-full">
            <div className="rounded flex items-center justify-center px-3 py-1 w-full">
              <h3 className="text-foreground text-sm">
                Moving Border{' '}
                <span className="text-muted-foreground">
                  {capitalizeFirstLetter(speed)}
                </span>
              </h3>
            </div>
          </MovingBorder>
        ))}
      </div>
    </div>
  );
}
