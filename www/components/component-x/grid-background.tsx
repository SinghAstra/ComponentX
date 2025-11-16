import { cn } from '@/lib/utils';
import React from 'react';

interface GridBackgroundProps {
  className?: string;
  gridDimension?: string;
  gridColor?: string;
  backgroundColor?: string;
  gridOpacity?: number;
  lineWidth?: number;
  absolute?: boolean;
}

const GridBackground = ({
  className,
  gridDimension = '48',
  gridColor = '#161616',
  backgroundColor = 'bg-background',
  gridOpacity = 1,
  lineWidth = 1,
  absolute = true,
}: GridBackgroundProps) => {
  const containerClasses = cn(
    absolute && 'absolute inset-0 z-[-1]',
    backgroundColor,
    className,
  );

  const backgroundImage = `
    linear-gradient(90deg, ${gridColor} ${lineWidth}px, transparent ${lineWidth}px),
    linear-gradient(180deg, ${gridColor} ${lineWidth}px, transparent ${lineWidth}px)
  `;

  return (
    <div className={containerClasses}>
      <div
        className="w-full h-full"
        style={{
          backgroundImage,
          backgroundSize: `${gridDimension}px ${gridDimension}px`,
          opacity: gridOpacity,
        }}
      />
    </div>
  );
};

export default GridBackground;
