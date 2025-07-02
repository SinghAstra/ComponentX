import React from "react";

const MovingGlow = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Inner background to mask the gradient, leaving only border visible */}
      <div className="absolute inset-[1px] bg-background z-[-1]" />
      <span className="absolute z-[-2] inset-0  w-[100%] before:animate-rotate  before:absolute before:top-1/2 before:left-1/2  before:aspect-square before:w-[200%]  before:bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0_340deg,white_360deg)] before:content-['']  before:[translate:-50%_-50%]" />
    </div>
  );
};

export default MovingGlow;
