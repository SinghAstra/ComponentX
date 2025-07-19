"use client";
import type React from "react";

const MovingBorder = () => {
  return (
    <div
      className="w-[2000%] h-[2000%] absolute moving-glow z-[-1]"
      style={{
        background:
          "conic-gradient(from 0deg at 50% 50%,hsl(var(--background)) 0deg,hsl(var(--primary)) 20deg,hsl(var(--background)) 90deg)",
      }}
    />
  );
};

export default MovingBorder;
