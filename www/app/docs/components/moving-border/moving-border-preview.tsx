'use client';

import MovingBorder from '@/components/component-x/moving-border';

export function MovingBorderPreview() {
  return (
    <MovingBorder className="rounded">
      <div className="w-full rounded flex items-center justify-center px-3 py-1">
        <h3 className="text-foreground">Moving Border</h3>
      </div>
    </MovingBorder>
  );
}
