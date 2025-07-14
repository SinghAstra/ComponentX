import { cn } from "@/lib/utils";
import React from "react";

interface TopCenterRadialBackgroundProps {
  className?: string;
}

const TopCenterRadialBackground = ({
  className,
}: TopCenterRadialBackgroundProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden z-[-1]", className)}>
      <div
        className="w-full h-full"
        style={{
          background:
            "radial-gradient(circle 95vw at 50% 0%, hsl(var(--primary)/0.2) 0%, hsl(var(--primary)/0.3) 30%, hsl(var(--primary)/0.4) 40%, transparent 50%)",
        }}
      />
    </div>
  );
};

export default TopCenterRadialBackground;
