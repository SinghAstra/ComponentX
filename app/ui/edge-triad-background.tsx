import { cn } from "@/lib/utils";
import React from "react";

interface EdgeTriadBackgroundProps {
  className?: string;
}

const EdgeTriadBackground = ({ className }: EdgeTriadBackgroundProps) => {
  return (
    <div className={cn("absolute inset-0 z-[-1] ", className)}>
      <div className="relative w-full h-full grid grid-cols-12">
        <div
          className="col-span-3 "
          style={{
            maskImage:
              "radial-gradient(circle at 100% 50%, rgb(255, 255, 255,0.6), rgba(255, 255, 255,0))",
            clipPath: "polygon(0 0, 100% 0%, 70% 100%, 0% 100%)",
            opacity: "0.5",
            background: `linear-gradient(100deg, hsl(var(--primary)/0.3) , hsl(var(--primary)) )`,
          }}
        />
        <div className="col-span-6"></div>
        <div
          className="col-span-3 "
          style={{
            maskImage:
              "radial-gradient(circle at 0% 50%, rgb(255, 255, 255,0.6), rgba(255, 255, 255,0))",
            clipPath: "polygon(30% 0, 100% 0%, 100% 100%, 0% 100%)",
            opacity: "0.5",
            background: `linear-gradient(100deg, hsl(var(--primary)), hsl(var(--primary)/0.3) )`,
          }}
        />
      </div>
    </div>
  );
};

export default EdgeTriadBackground;
