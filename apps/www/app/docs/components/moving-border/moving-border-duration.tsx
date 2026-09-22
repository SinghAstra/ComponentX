'use client';

import MovingBorder from '@/components/component-x/moving-border';

export function MovingBorderDuration() {
  const durations = [
    { label: '1s', value: 1 },
    { label: '3s', value: 3 },
    { label: '6s', value: 6 },
    { label: '10s', value: 10 },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex items-center justify-center">
      <div className="flex flex-col gap-4 w-fit">
        {durations.map(({ label, value }) => (
          <MovingBorder key={label} duration={value} className="rounded w-full">
            <div className="rounded flex items-center justify-center px-3 py-1 w-full">
              <h3 className="text-foreground text-sm">
                Moving Border{' '}
                <span className="text-muted-foreground">{label}</span>
              </h3>
            </div>
          </MovingBorder>
        ))}
      </div>
    </div>
  );
}
