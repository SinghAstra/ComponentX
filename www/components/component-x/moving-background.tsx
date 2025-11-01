import { cn } from "@/lib/utils";

interface MovingBackgroundProps {
  backgroundColor?: string;
  shineColor?: string;
}

function MovingBackground({
  backgroundColor = "hsl(var(--muted)/0.4)",
  shineColor = "hsl(var(--primary)/0.4)",
}: MovingBackgroundProps) {
  return (
    <div
      className={cn("absolute inset-0 z-[-1] overflow-hidden shine")}
      style={{
        background: `linear-gradient(110deg,${backgroundColor} 45%,${shineColor} 55%,${backgroundColor})`,
        backgroundSize: "400% 100%",
      }}
    />
  );
}

export default MovingBackground;
