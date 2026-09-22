'use client';

import LampBackground from '@/components/component-x/lamp-background';

export function LampBackgroundMultiPosition() {
  return (
    <div className="relative w-full h-full overflow-hidden border rounded">
      <LampBackground
        position="top"
        angleSpan="medium"
        colorOne="hsl(var(--primary)/0.4)"
        colorTwo="transparent"
      />
      <LampBackground
        position="bottom"
        angleSpan="medium"
        colorOne="hsl(var(--accent)/0.4)"
        colorTwo="transparent"
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground">
            Multi Position Lamps
          </h3>
          <p className="text-muted-foreground mt-2">Top and bottom lighting</p>
        </div>
      </div>
    </div>
  );
}
