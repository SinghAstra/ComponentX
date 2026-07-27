'use client';

import LampBackground, {
  type LampAngleSpan,
} from '@/components/component-x/lamp-background';

export function LampBackgroundAngleSpan() {
  const angleSpans: LampAngleSpan[] = ['small', 'medium', 'large'];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {angleSpans.map((span) => (
        <div
          key={span}
          className="relative flex-none w-full h-full overflow-hidden border flex items-center justify-center"
        >
          <LampBackground
            position="top"
            angleSpan={span}
            colorOne="hsl(var(--primary)/0.6)"
            colorTwo="transparent"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h3 className="text-2xl text-foreground capitalize">{span}</h3>
            <p className="text-sm text-muted-foreground mt-[1px]">
              {span === 'small' && '60° beam angle'}
              {span === 'medium' && '80° beam angle'}
              {span === 'large' && '100° beam angle'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
