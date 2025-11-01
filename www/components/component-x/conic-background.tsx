import { cn } from "@/lib/utils";

interface ConicBackgroundProps {
  className?: string;
  position?: "right" | "top" | "left" | "bottom";
  backgroundSpan?: "small" | "medium" | "large";
  angleSpan?: "small" | "medium" | "large";
  colorOne?: string;
  colorTwo?: string;
}

const ConicBackground = ({
  className,
  position = "right",
  angleSpan = "medium",
  colorOne = "hsl(var(--primary)/0.4)",
  colorTwo = "hsl(var(--primary))",
  backgroundSpan = "large",
}: ConicBackgroundProps) => {
  const backgroundStops = {
    small:
      "rgba(255, 255, 255,0.7) 0%, rgba(255, 255, 255, 0.4) 20%, rgba(255, 255, 255, 0.1) 100%",
    medium:
      "rgba(255, 255, 255,0.7) 0%, rgba(255, 255, 255, 0.4) 30%, rgba(255, 255, 255, 0.1) 100%",
    large:
      "rgba(255, 255, 255,0.7) 0%, rgba(255, 255, 255, 0.4) 60%, rgba(255, 255, 255, 0.1) 100%",
  }[backgroundSpan];

  const positionVal = {
    right: { from: "180deg", positionX: "100%", positionY: "50%" },
    top: { from: "90deg", positionX: "50%", positionY: "0%" },
    left: { from: "0deg", positionX: "0%", positionY: "50%" },
    bottom: { from: "270deg", positionX: "50%", positionY: "100%" },
  }[position];

  const angleStops = {
    small: { start: 45, mid: 90, end: 135 },
    medium: { start: 30, mid: 90, end: 150 },
    large: { start: 15, mid: 90, end: 165 },
  }[angleSpan];

  const conicGradientValue = `conic-gradient(from ${positionVal.from} at ${positionVal.positionX} ${positionVal.positionY}, ${colorOne} ${angleStops.start}deg, ${colorTwo} ${angleStops.mid}deg, ${colorOne} ${angleStops.end}deg)`;
  const maskImageValue = `radial-gradient(circle at ${positionVal.positionX} ${positionVal.positionY}, ${backgroundStops})`;

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden z-[-1] bg-background",
        className
      )}
    >
      <div
        className="w-full h-full"
        style={{
          background: conicGradientValue,
          maskImage: maskImageValue,
        }}
      />
    </div>
  );
};

export default ConicBackground;
