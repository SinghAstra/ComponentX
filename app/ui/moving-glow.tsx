import React from "react";

const MovingGlow = () => {
  return (
    <div
      className="absolute z-[-2] inset-0  border-2 border-transparent
      w-[100%] before:animate-rotate before:absolute before:top-1/2 before:left-1/2  
      before:aspect-square before:w-[200%]  
      before:bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0_340deg,white_360deg)] 
      ![mask-clip:padding-box,border-box] ![mask-composite:intersect] 
      [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]
      before:content-['']  before:[translate:-50%_-50%]"
    />
  );
};

export default MovingGlow;
