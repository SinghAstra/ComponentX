'use client';

import ConicBackground from '@/components/component-x/conic-background';

export function ConicBackgroundPreview() {
  return (
    <div className="relative w-full h-full overflow-hidden border flex items-center justify-center">
      <ConicBackground
        position="right"
        backgroundSpan="large"
        angleSpan="medium"
        colorOne="hsl(var(--primary)/0.4)"
        colorTwo="hsl(var(--primary))"
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h3 className="text-2xl text-foreground">Conic Background</h3>
      </div>
    </div>
  );
}
