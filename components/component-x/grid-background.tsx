import { cn } from "@/lib/utils";
import React from "react";

interface GridBackgroundProps {
  className?: string;
  gridDimension?: string;
}

const GridBackground = ({
  className,
  gridDimension = "48",
}: GridBackgroundProps) => {
  return (
    <div className={cn("absolute inset-0 z-[-1] bg-background", className)}>
      <div
        className="w-full h-full"
        style={{
          backgroundImage:
            "linear-gradient(90deg, hsl(var(--muted)) 1px,transparent 1px),linear-gradient(180deg, hsl(var(--muted)) 1px,transparent 1px)",
          backgroundSize: `${gridDimension}px ${gridDimension}px`,
        }}
      />
    </div>
  );
};

export default GridBackground;
