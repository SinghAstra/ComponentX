import { cn } from "@/lib/utils";

interface RadialFadeBackgroundProps {
  className?: string;
  startColor?: string;
  endColor?: string;
}

const RadialFadeBackground = ({
  className,
  startColor = "hsl(var(--primary))",
  endColor = "transparent",
}: RadialFadeBackgroundProps) => {
  return (
    <div
      className={cn("absolute inset-0 overflow-hidden z-[-1]", className)}
      style={{
        maskImage:
          "radial-gradient(circle at 0% 0%, rgb(255, 255, 255), rgba(255, 255, 255,0))",
      }}
    >
      <div
        className="w-full h-full"
        style={{
          background: `radial-gradient(circle at 0% 0%, ${startColor} 8%, ${endColor} 40%,${endColor} 100%)`,
        }}
      />
    </div>
  );
};

export default RadialFadeBackground;
