import { cn } from '@/lib/utils';

interface MovingBackgroundProps {
  backgroundColor?: string;
  shineColor?: string;

  animationDuration?: number;
  animationDelay?: number;
  animated?: boolean;
  gradientAngle?: number;
  shineWidth?: number;
  zIndex?: number;
  opacity?: number;
  className?: string;
  position?: 'absolute' | 'fixed' | 'relative';
}

function MovingBackground({
  backgroundColor = 'hsl(var(--muted)/0.4)',
  shineColor = 'hsl(var(--primary)/0.4)',
  animationDuration = 6000,
  animationDelay = 0,
  animated = true,
  gradientAngle = 110,
  shineWidth = 10,
  zIndex = -1,
  opacity = 1,
  className,
  position = 'absolute',
}: MovingBackgroundProps) {
  const shineStart = 50 - shineWidth / 2;
  const shineEnd = 50 + shineWidth / 2;

  const positionClass = {
    absolute: 'absolute',
    fixed: 'fixed',
    relative: 'relative',
  }[position];

  return (
    <>
      {animated && (
        <style>{`
          @keyframes moveShine {
            0% { background-position: 200% 0; }
          100% { background-position: 0% 0; }
          }
        `}</style>
      )}

      <div
        className={cn(positionClass, 'inset-0 overflow-hidden', className)}
        style={{
          zIndex,
          opacity,
          background: `linear-gradient(${gradientAngle}deg, ${backgroundColor} ${shineStart}%, ${shineColor} 50%, ${backgroundColor} ${shineEnd}%)`,
          backgroundSize: '400% 100%',
          animation: animated
            ? `moveShine ${animationDuration}ms infinite linear ${animationDelay}ms`
            : 'none',
        }}
      />
    </>
  );
}

export default MovingBackground;
