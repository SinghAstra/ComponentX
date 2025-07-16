import { cn } from "@/lib/utils";
import React from "react";

interface TriadBackgroundProps {
  className?: string;
}

const TriadBackground = ({ className }: TriadBackgroundProps) => {
  return (
    <div className={cn("absolute inset-0 z-[-1]", className)}>
      <div className="relative w-full h-full grid grid-cols-12">
        <div className="col-span-9"></div>
        <div
          className="col-span-3 "
          style={{
            clipPath: "polygon(50% 0%, 100% 0, 100% 100%, 50% 100%, 0 50%)",
            opacity: "0.5",
            background: `conic-gradient(from 0deg at 0% 50%, hsl(var(--primary)/0.3) 30deg, hsl(var(--primary)) 90deg,hsl(var(--primary)/0.3) 150deg)`,
          }}
        />
      </div>
    </div>
  );
};

export default TriadBackground;
