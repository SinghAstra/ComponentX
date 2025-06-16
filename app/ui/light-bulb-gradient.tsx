import type React from "react";

interface LightBulbGradient {
  className?: string;
}

const colors = {
  white: "rgb(255, 255, 255)",
  blue: "rgb(156, 184, 221)",
  transparent: "rgba(17, 17, 17, 0)",
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
              ${colors.white} 7.2deg, 
              ${colors.blue} 14.4deg, 
              ${colors.transparent} 36deg, 
              ${colors.transparent} 342deg, 
              ${colors.white} 360deg
            )`,
          }}
        />
        <div
          className="grow"
          style={{
            background: `conic-gradient(
              from -90deg at 65% -1% in lab, 
              ${colors.white} 0deg, 
              ${colors.transparent} 18deg, 
              ${colors.transparent} 324deg, 
              ${colors.blue} 345.6deg, 
              ${colors.white} 352.8deg
            )`,
          }}
        />
      </div>
    </div>
  );
}
