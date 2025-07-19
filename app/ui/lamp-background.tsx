import { cn } from "@/lib/utils";
import type { CSSProperties } from "react"; // Import CSSProperties for type safety

interface LampBackgroundProps {
  colorOne?: string;
  colorTwo?: string;
  className?: string;
  position?: "top" | "right" | "bottom" | "left";
  angleSpan?: "small" | "medium" | "large";
}

function LampBackground({
  className,
  colorOne = "hsl(var(--primary))",
  colorTwo = "transparent",
  position = "top", // Default position
  angleSpan = "medium", // Default angleSpan
}: LampBackgroundProps) {
  let maskImageStyle: CSSProperties["maskImage"];
  let containerFlexClass: string;
  let gradient1FromAt: string;
  let gradient2FromAt: string;
  let div1SizeClass: string;
  let div2SizeClass: string;

  // Determine the final colors based on the position
  let finalColorOne = colorOne;
  let finalColorTwo = colorTwo;

  if (position === "left" || position === "bottom") {
    finalColorOne = colorTwo;
    finalColorTwo = colorOne;
  }

  switch (position) {
    case "top":
      maskImageStyle =
        "linear-gradient(0deg, rgba(255, 255, 255,0), rgb(255, 255, 255,0.8))";
      containerFlexClass = "flex-row";
      gradient1FromAt = "from 90deg at 0% 0%";
      gradient2FromAt = "from 180deg at 100% 0%";
      div1SizeClass = "h-full flex-1";
      div2SizeClass = "flex-1 h-full";
      break;
    case "bottom":
      maskImageStyle =
        "linear-gradient(180deg, rgba(255, 255, 255,0), rgb(255, 255, 255,0.8))";
      containerFlexClass = "flex-row";
      gradient1FromAt = "from 0deg at 0% 100%";
      gradient2FromAt = "from 270deg at 100% 100%";
      div1SizeClass = "h-full flex-1";
      div2SizeClass = "flex-1 h-full";
      break;
    case "left":
      maskImageStyle =
        "linear-gradient(90deg, rgba(255, 255, 255), rgb(255, 255, 255,0.6))";
      containerFlexClass = "flex-col";
      gradient1FromAt = "from 90deg at 0% 0%"; // Top-left corner for first half
      gradient2FromAt = "from 0deg at 0% 100%"; // Bottom-left corner for second half
      div1SizeClass = "w-full flex-1";
      div2SizeClass = "flex-1 w-full";
      break;
    case "right":
      maskImageStyle =
        "linear-gradient(270deg, rgba(255, 255, 255), rgb(255, 255, 255,0.6))";
      containerFlexClass = "flex-col";
      gradient1FromAt = "from 180deg at 100% 0%"; // Top-right corner for first half
      gradient2FromAt = "from 270deg at 100% 100%"; // Bottom-right corner for second half
      div1SizeClass = "w-full flex-1";
      div2SizeClass = "flex-1 w-full";
      break;
  }
  let angleSpread: number;
  let angleOffset: number;
  switch (angleSpan) {
    case "small":
      angleSpread = 60;
      angleOffset = 30;
      break;
    case "medium":
      angleSpread = 80;
      angleOffset = 10;
      break;
    case "large":
      angleSpread = 100;
      angleOffset = 0;
      break;
  }
  return (
    <div
      className={cn(
        "absolute inset-0 flex z-[-1] bg-background",
        containerFlexClass,
        className
      )}
    >
      <div
        className={div1SizeClass}
        style={{
          background: `conic-gradient(
            ${gradient1FromAt},
            ${finalColorOne} 0deg,
            ${finalColorTwo} ${angleSpread}deg
          )`,
          maskImage: maskImageStyle,
        }}
      />
      <div
        className={div2SizeClass}
        style={{
          background: `conic-gradient(
            ${gradient2FromAt},
            ${finalColorTwo} ${angleOffset}deg,
            ${finalColorOne} 90deg
          )`,
          maskImage: maskImageStyle,
        }}
      />
    </div>
  );
}

export default LampBackground;
