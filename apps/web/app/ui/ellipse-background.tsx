import { cn } from "@/lib/utils";

type RadialPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "left-center"
  | "right-center"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

interface EllipseBackgroundProps {
  className?: string;
  colorOne?: string;
  colorTwo?: string;
  position?: RadialPosition;
  /**
   * Defines the type of radial gradient effect.
   * 'fade': A simple fade from colorOne to colorTwo with an optional mask.
   * 'glow': A multi-stop gradient with primary color opacities, typically used for a subtle glow.
   */
  variant?: "fade" | "glow";
  animate?: boolean;
  radiusX?: number;
  radiusY?: number;
  transition?: number;
}

const positionMap: Record<RadialPosition, string> = {
  "top-left": "0% 0%",
  "top-center": "50% 0%",
  "top-right": "100% 0%",
  "left-center": "0% 50%",
  "right-center": "100% 50%",
  "bottom-left": "0% 100%",
  "bottom-center": "50% 100%",
  "bottom-right": "100% 100%",
};

function EllipseBackground({
  className,
  colorOne = "hsl(var(--primary))",
  colorTwo = "transparent",
  position = "top-center", // Default position for ellipse
  variant = "fade",
  radiusX = 60,
  radiusY = 100,
  transition = 80,
  animate = false,
}: EllipseBackgroundProps) {
  const gradientPosition = positionMap[position];
  let backgroundGradientValue;

  // The mask image for ellipse gradient

  if (variant === "fade") {
    backgroundGradientValue = `radial-gradient(ellipse ${radiusX}% ${radiusY}% at ${gradientPosition}, ${colorOne} 0%, ${colorTwo} ${transition}%)`;
  } else {
    // Glow variant logic, similar to RadialBackground
    backgroundGradientValue = `radial-gradient(ellipse  ${radiusX}% ${radiusY}% at ${gradientPosition}, ${colorOne} ${
      transition / 2
    }%, ${colorTwo} ${transition}%)`;
  }
  const maskGradientValue = `radial-gradient(ellipse ${radiusX}% ${radiusY}% at ${gradientPosition}, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)`;

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden bg-background z-[-1]",
        className
      )}
    >
      <div
        className={`w-full h-full ${animate && "animate-pulse"}`}
        style={{
          background: backgroundGradientValue,
          maskImage: maskGradientValue,
        }}
      />
    </div>
  );
}

export default EllipseBackground;
