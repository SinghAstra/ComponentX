'use client';

import GridBackground from '@/components/component-x/grid-background';

export function GridBackgroundPreview() {
  return (
    <div className="relative w-full h-full overflow-hidden border flex items-center justify-center">
      <GridBackground
        gridDimension="48"
        gridColor="#161616"
        backgroundColor="bg-background"
        gridOpacity={1}
        lineWidth={1}
      />
      <h3 className="text-2xl text-foreground">Grid Background</h3>
    </div>
  );
}
