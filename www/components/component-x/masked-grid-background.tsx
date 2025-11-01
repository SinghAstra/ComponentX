import { cn } from "@/lib/utils";
import React from "react";

interface MaskedGridBackgroundProps {
  className?: string;
}

const MaskedGridBackground = ({ className }: MaskedGridBackgroundProps) => {
  return (
    <div className={cn("absolute inset-0 z-[-1] bg-background", className)}>
      <div
        className="w-full h-full"
        style={{
          backgroundImage:
            "linear-gradient(90deg,#161616 1px,transparent 1px),linear-gradient(180deg,#161616 1px,transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 100% 100% at 50% 0%,rgba(255,255,255,0.8) 20%,rgba(255,255,255,0.2) 60%,transparent 100%)",
        }}
      />
    </div>
  );
};

export default MaskedGridBackground;
