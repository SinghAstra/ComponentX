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

interface RadialFadeBackgroundProps {
  className?: string;
  colorOne?: string;
  colorTwo?: string;
  position?: RadialPosition;
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

const RadialFadeBackground = ({
  className,
  colorOne = "hsl(var(--primary))",
  colorTwo = "transparent",
  position = "top-left", // Default position
}: RadialFadeBackgroundProps) => {
  const gradientPosition = positionMap[position];

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden bg-background z-[-1]",
        className
      )}
    >
      <div
        className="w-full h-full"
        style={{
          background: `radial-gradient(circle at ${gradientPosition}, ${colorOne} 8%, ${colorTwo} 60%,${colorTwo} 100%)`,
          maskImage: `radial-gradient(circle at ${gradientPosition}, rgb(255, 255, 255), rgba(255, 255, 255,0))`,
        }}
      />
    </div>
  );
};

export default RadialFadeBackground;
