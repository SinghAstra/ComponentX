import { cn } from "@/lib/utils";

interface ConicGradientBackgroundProps {
  className?: string;
  position?: "right" | "top" | "left" | "bottom";
  /**
   * Defines the angular span of the gradient colors.
   * 'small': A tighter, more focused gradient.
   * 'medium': A balanced spread (default, similar to previous).
   * 'large': A wider, more expansive gradient.
   * @default "medium"
   */
  angleSpan?: "small" | "medium" | "large";
  /**
   * The first color in the conic gradient.
   * Can be any valid CSS color value (e.g., 'red', '#FF0000', 'hsl(var(--muted-foreground))').
   * @default "hsl(var(--muted-foreground))"
   */
  colorOne?: string;
  /**
   * The second color in the conic gradient.
   * Can be any valid CSS color value (e.g., 'blue', '#0000FF', 'hsl(var(--primary))').
   * @default "hsl(var(--primary))"
   */
  colorTwo?: string;
}

const ConicGradientBackground = ({
  className,
  position = "right",
  angleSpan = "medium",
  colorOne = "hsl(var(--primary)/0.4)",
  colorTwo = "hsl(var(--primary))",
}: ConicGradientBackgroundProps) => {
  const positionVal = {
    right: { positionX: "100%", positionY: "50%", from: "180deg" },
    top: { positionX: "50%", positionY: "0%", from: "90deg" },
    left: { positionX: "0%", positionY: "50%", from: "0deg" },
    bottom: { positionX: "50%", positionY: "100%", from: "270deg" },
  }[position];

  // Define angle stops based on the angleSpan prop
  const angleStops = {
    small: { start: 45, mid: 90, end: 135 }, // 45deg span
    medium: { start: 30, mid: 90, end: 150 }, // 60deg span
    large: { start: 15, mid: 90, end: 165 }, // 90deg span
  }[angleSpan];

  const conicGradientValue = `conic-gradient(from ${positionVal.from} at ${positionVal.positionX} ${positionVal.positionY}, ${colorOne} ${angleStops.start}deg, ${colorTwo} ${angleStops.mid}deg, ${colorOne} ${angleStops.end}deg)`;

  // Dynamic maskImage based on positionX and positionY
  // This radial gradient makes the area around the origin transparent, fading to opaque at the edges.
  const maskImageValue = `radial-gradient(circle at ${positionVal.positionX} ${positionVal.positionY}, rgba(255, 255, 255,0.7) 0%, rgba(255, 255, 255, 0.4) 60%, rgba(255, 255, 255, 0.1) 100%)`;

  return (
    <div
      className={cn("absolute inset-0 overflow-hidden z-[-1]", className)}
      style={{
        maskImage: maskImageValue,
      }}
    >
      <div
        className="w-full h-full"
        style={{
          background: conicGradientValue,
        }}
      />
    </div>
  );
};

export default ConicGradientBackground;
