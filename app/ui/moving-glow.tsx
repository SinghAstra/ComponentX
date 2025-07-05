"use client";

import type React from "react";

interface MovingGlowProps {
  borderWidth?: number;
  animationDuration?: number;
  initialTransparent?: number;
}

const MovingGlow = ({
  borderWidth = 2,
  animationDuration = 3,
  initialTransparent = 340,
}: MovingGlowProps) => {
  return (
    <div
      className="absolute z-[-2] inset-0 border-[calc(var(--border-width)*1px)] border-transparent w-[100%] rounded-inherit 
      before:absolute before:top-1/2 before:left-1/2 before:aspect-square 
      before:bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0_var(--initial-transparent),white_360deg)] 
      ![mask-clip:padding-box,border-box] ![mask-composite:intersect] 
      [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]
      before:w-[200%]
      before:content-[''] before:[translate:-50%_-50%]
      before:animate-[rotate_var(--animation-duration)_linear_infinite]"
      style={
        {
          "--animation-duration": `${animationDuration}s`,
          "--border-width": `${borderWidth}`,
          "--initial-transparent": `${initialTransparent}deg`,
        } as React.CSSProperties & { [key: string]: string }
      }
    ></div>
  );
};

export default MovingGlow;
