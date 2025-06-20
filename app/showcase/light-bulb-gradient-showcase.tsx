"use client";
import type React from "react";

interface LightBulbGradient {
  className?: string;
}

const colors = {
  primary: "hsl(var(--primary) / 1)",
  secondary: "hsl(var(--primary) / 0.7)",
  tertiary: "rgba(17, 17, 17, 0)",
};

export function LightBulbGradient({ className = "" }: LightBulbGradient) {
  return (
    <div className={`absolute  overflow-x-hidden inset-0  ${className}`}>
      <div
        className="absolute -inset-x-[20vw] top-0 flex h-[50vh] grow   "
        style={{
          maskImage:
            "linear-gradient(to top, rgba(255, 255, 255, 0), rgb(255, 255, 255))",
          opacity: 0.5,
        }}
      >
        <div
          className="grow"
          style={{
            background: `conic-gradient(
              from 90deg at 35% -1% in lab, 
              ${colors.primary} 7.2deg, 
              ${colors.secondary} 14.4deg, 
              ${colors.tertiary} 36deg, 
              ${colors.tertiary} 342deg, 
              ${colors.primary} 360deg
            )`,
          }}
        />
        <div
          className="grow"
          style={{
            background: `conic-gradient(
              from -90deg at 65% -1% in lab, 
              ${colors.primary} 0deg, 
              ${colors.tertiary} 18deg, 
              ${colors.tertiary} 324deg, 
              ${colors.secondary} 345.6deg, 
              ${colors.primary} 352.8deg
            )`,
          }}
        />
      </div>
    </div>
  );
}
