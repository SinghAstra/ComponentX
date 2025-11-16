'use client';

import BorderHoverLink from '@/components/component-x/border-hover-link';

export function BorderHoverDurations() {
  const durations = [
    { label: 'Fast', value: 300 },
    { label: 'Normal', value: 700 },
    { label: 'Slow', value: 1200 },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex items-center justify-center">
      <div className="flex flex-col gap-4">
        {durations.map(({ label, value }) => (
          <BorderHoverLink
            key={label}
            borderPosition="bottom"
            borderColor="hsl(var(--primary))"
            duration={value}
            className="bg-background px-3 py-1 cursor-pointer rounded overflow-hidden text-center"
          >
            <p className="text-foreground">
              Hover me{' '}
              <span className="text-sm text-muted-foreground">{label}</span>
            </p>
          </BorderHoverLink>
        ))}
      </div>
    </div>
  );
}
