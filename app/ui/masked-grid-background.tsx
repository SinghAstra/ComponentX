import { cn } from "@/lib/utils";
import React from "react";

interface MaskedGridBackgroundProps {
  className?: string;
}

const MaskedGridBackground = ({ className }: MaskedGridBackgroundProps) => {
  return (
    <div
      className={cn("absolute inset-0 z-[-3]", className)}
      style={{
        backgroundImage:
          "linear-gradient(90deg,#161616 1px,transparent 1px),linear-gradient(180deg,#161616 1px,transparent 1px)",
        backgroundSize: "48px 48px",
        maskImage:
          "radial-gradient(ellipse 60% 50% at 50% 0%,rgb(255,255,255) 70%,transparent 100%)",
      }}
    />
  );
};

export default MaskedGridBackground;
