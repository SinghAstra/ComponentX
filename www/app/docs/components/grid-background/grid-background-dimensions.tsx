'use client';

import GridBackground from '@/components/component-x/grid-background';

export function GridBackgroundDimensions() {
  const dimensions = [
    { label: 'Small', value: '24' },
    { label: 'Medium', value: '48' },
    { label: 'Large', value: '96' },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {dimensions.map(({ label, value }) => (
        <div
          key={value}
          className="relative flex-none w-full h-full overflow-hidden border flex items-center justify-center"
        >
          <GridBackground
            gridDimension={value}
            gridColor="#161616"
            backgroundColor="bg-background"
            gridOpacity={0.8}
            lineWidth={1}
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h3 className="text-2xl text-foreground">
              {label} <span className="text-muted-foreground">{value}px</span>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
