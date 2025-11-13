import { cn } from "@/lib/utils";

export type EllipsePosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "left-center"
  | "right-center"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export type EllipseVariant = "fade" | "glow";

interface EllipseBackgroundProps {
  className?: string;
  colorOne?: string;
  colorTwo?: string;
  position?: EllipsePosition;
  variant?: EllipseVariant;
  animate?: boolean;
  radiusX?: number;
  radiusY?: number;
  transition?: number;
  maskImage?: boolean;
}

const positionMap: Record<EllipsePosition, string> = {
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
  position = "top-center",
  variant = "fade",
  radiusX = 60,
  radiusY = 100,
  transition = 80,
  animate = false,
  maskImage = true,
}: EllipseBackgroundProps) {
  const gradientPosition = positionMap[position];
  let backgroundGradientValue;
  if (variant === "fade") {
    backgroundGradientValue = `radial-gradient(ellipse ${radiusX}% ${radiusY}% at ${gradientPosition}, ${colorOne} 0%, ${colorTwo} ${transition}%)`;
  } else {
    backgroundGradientValue = `radial-gradient(ellipse  ${radiusX}% ${radiusY}% at ${gradientPosition}, ${colorOne} ${
      transition / 2
    }%, ${colorTwo} ${transition}%)`;
  }
  const maskGradientValue = `radial-gradient(ellipse ${radiusX}% ${radiusY}% at ${gradientPosition}, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)`;
  const style = {
    background: backgroundGradientValue,
    ...(maskImage && { maskImage: maskGradientValue }),
  };

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden bg-background z-[-1]",
        className
      )}
    >
      <div
        className={`w-full h-full ${animate && "animate-pulse"}`}
        style={style}
      />
    </div>
  );
}

export default EllipseBackground;
