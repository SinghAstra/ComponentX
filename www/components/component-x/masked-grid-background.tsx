import { cn } from "@/lib/utils";
import React from "react";

export type MaskPosition = "top" | "center" | "bottom";

interface MaskedGridBackgroundProps {
  className?: string;
  gridSize?: number;
  gridLineColor?: string;
  gridLineOpacity?: number;
  maskPosition?: MaskPosition;
  maskSize?: number;
  maskOpacity?: {
    start?: number;
    middle?: number;
    end?: number;
  };
}

const MaskedGridBackground = ({
  className,
  gridSize = 48,
  gridLineColor = "#161616",
  gridLineOpacity = 1,
  maskPosition = "top",
  maskSize = 100,
  maskOpacity = { start: 0.8, middle: 0.2, end: 0 },
}: MaskedGridBackgroundProps) => {
  const getRgbColor = (hexColor: string) => {
    const hex = hexColor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `${r}, ${g}, ${b}`;
  };

  const rgbColor = getRgbColor(gridLineColor);
  const gridLineColorWithOpacity = `rgba(${rgbColor}, ${gridLineOpacity})`;

  const maskPositionValue = {
    top: "50% 0%",
    center: "50% 50%",
    bottom: "50% 100%",
  }[maskPosition];

  const { start = 0.8, middle = 0.2, end = 0 } = maskOpacity;

  return (
    <div className={cn("absolute inset-0 z-[-1] bg-background", className)}>
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `linear-gradient(90deg,${gridLineColorWithOpacity} 1px,transparent 1px),linear-gradient(180deg,${gridLineColorWithOpacity} 1px,transparent 1px)`,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          maskImage: `radial-gradient(ellipse ${maskSize}% ${maskSize}% at ${maskPositionValue},rgba(255,255,255,${start}) 20%,rgba(255,255,255,${middle}) 60%,rgba(255,255,255,${end}) 100%)`,
        }}
      />
    </div>
  );
};

export default MaskedGridBackground;
