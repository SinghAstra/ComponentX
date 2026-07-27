'use client';

import EllipseBackground from '@/components/component-x/ellipse-background';

export function EllipseBackgroundDimensions() {
  const dimensions = [
    { label: 'Wide Ellipse', radiusX: 120, radiusY: 40 },
    { label: 'Balanced', radiusX: 60, radiusY: 60 },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {dimensions.map(({ label, radiusX, radiusY }, index) => (
        <div
          key={index}
          className="relative flex-none w-full h-full overflow-hidden border flex items-center justify-center"
        >
          <EllipseBackground
            position="top-center"
            variant="fade"
            colorOne="hsl(var(--primary)/0.6)"
            colorTwo="transparent"
            radiusX={radiusX}
            radiusY={radiusY}
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h3 className="text-2xl text-foreground">{label}</h3>
            <p className="text-sm text-muted-foreground mt-[1px]">
              X: {radiusX}% × Y: {radiusY}%
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
