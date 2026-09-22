'use client';

import EllipseBackground from '@/components/component-x/ellipse-background';

export function EllipseBackgroundPreview() {
  return (
    <div className="relative w-full h-full overflow-hidden border flex items-center justify-center">
      <EllipseBackground
        position="top-center"
        variant="fade"
        colorOne="hsl(var(--primary)/0.6)"
        colorTwo="transparent"
        radiusX={60}
        radiusY={100}
      />
      <h3 className="text-2xl text-foreground">Ellipse Background</h3>
    </div>
  );
}
