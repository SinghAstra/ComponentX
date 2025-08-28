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

interface RadialBackgroundProps {
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
  radius?: number;
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

const RadialBackground = ({
  className,
  colorOne = "hsl(var(--primary))",
  colorTwo = "transparent",
  position = "top-left", // Default position
  variant = "fade",
  radius = 60,
  animate = false,
}: RadialBackgroundProps) => {
  const gradientPosition = positionMap[position];
  let backgroundGradientValue;
  const maskImageValue = `radial-gradient(circle at ${gradientPosition}, rgb(255, 255, 255,0.8), rgba(255, 255, 255,0.3) ${radius}%,rgba(255, 255, 255,0) 100%)`;
  if (variant === "fade") {
    backgroundGradientValue = `radial-gradient(circle at ${gradientPosition}, ${colorOne} 8%, ${colorTwo} ${radius}%,${colorTwo} 100%)`;
  } else {
    backgroundGradientValue = `radial-gradient(circle at ${gradientPosition}, ${colorOne} ${
      radius / 2
    }%, ${colorTwo} ${radius}%,${colorTwo} 100%)`;
  }

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
          maskImage: maskImageValue,
        }}
      />
    </div>
  );
};

export default RadialBackground;
