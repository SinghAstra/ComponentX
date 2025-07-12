import { cn } from "@/lib/utils";

interface RadialFadeBackgroundProps {
  className?: string;
}

const RadialFadeBackground = ({ className }: RadialFadeBackgroundProps) => {
  return (
    <div
      className={cn("absolute inset-0 overflow-hidden z-[-1]", className)}
      style={{
        maskImage:
          "radial-gradient(circle at 0% 0%, rgb(255, 255, 255), rgba(255, 255, 255,0))",
        opacity: 0.5,
      }}
    >
      <div
        className="w-full h-full"
        style={{
          background:
            "radial-gradient(circle at 0% 0%, hsl(var(--primary)) 8%, transparent 40%)",
        }}
      />
    </div>
  );
};

export default RadialFadeBackground;
