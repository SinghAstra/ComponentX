'use client';

import EllipseBackground from '@/components/component-x/ellipse-background';

export function EllipseBackgroundTransition() {
  const transitions = [
    { label: 'Sharp', value: 40 },
    { label: 'Medium', value: 80 },
    { label: 'Smooth', value: 120 },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {transitions.map(({ label, value }) => (
        <div
          key={value}
          className="relative flex-none w-full h-full overflow-hidden border flex items-center justify-center"
        >
          <EllipseBackground
            position="top-center"
            variant="fade"
            colorOne="hsl(var(--primary)/0.6)"
            colorTwo="transparent"
            radiusX={60}
            radiusY={100}
            transition={value}
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h3 className="text-2xl text-foreground">{label}</h3>
            <p className="text-sm text-muted-foreground mt-[1px]">
              Transition: {value}%
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
