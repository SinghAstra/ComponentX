'use client';

import EllipseBackground from '@/components/component-x/ellipse-background';

export function EllipseBackgroundAnimated() {
  return (
    <div className="relative w-full h-full overflow-hidden border">
      <EllipseBackground
        position="top-center"
        variant="glow"
        colorOne="hsl(var(--primary)/0.8)"
        colorTwo="transparent"
        animate={true}
        radiusX={60}
        radiusY={100}
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h3 className="text-2xl text-foreground">Animated Ellipse</h3>
          <p className="text-muted-foreground mt-2">Pulse animation effect</p>
        </div>
      </div>
    </div>
  );
}
