import { cn } from "@/lib/utils";

interface MovingBackgroundProps {
  backgroundColor?: string;
  shineColor?: string;
}

function MovingBackground({
  backgroundColor = "hsl(var(--background))",
  shineColor = "hsl(var(--muted))",
}: MovingBackgroundProps) {
  return (
    <div
      className={cn("absolute inset-0 z-[-3] rounded-[inherit] shine")}
      style={{
        background: `linear-gradient(110deg,${backgroundColor} 45%,${shineColor} 55%,${backgroundColor})`,
        backgroundSize: "400% 100%",
      }}
    />
  );
}

export default MovingBackground;
