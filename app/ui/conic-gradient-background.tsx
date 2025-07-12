import { cn } from "@/lib/utils";

interface ConicGradientBackgroundProps {
  className?: string;
}

const ConicGradientBackground = ({
  className,
}: ConicGradientBackgroundProps) => {
  return (
    <div
      className={cn("absolute inset-0 overflow-hidden z-[-1]", className)}
      style={{
        maskImage:
          "linear-gradient(90deg,rgba(255, 255, 255,0),rgb(255, 255, 255,0.6))",
        opacity: 0.5,
      }}
    >
      <div
        className="w-full h-full"
        style={{
          background:
            "conic-gradient(from 180deg at 100% 50%, hsl(var(--muted-foreground)) 30deg, hsl(var(--primary)) 90deg,hsl(var(--muted-foreground)) 150deg)",
        }}
      />
    </div>
  );
};

export default ConicGradientBackground;
