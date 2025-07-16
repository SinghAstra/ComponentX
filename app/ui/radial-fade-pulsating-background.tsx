import { cn } from "@/lib/utils";

interface RadialFadePulsatingBackgroundProps {
  className?: string;
}

const RadialFadePulsatingBackground = ({
  className,
}: RadialFadePulsatingBackgroundProps) => {
  return (
    <div
      className={cn("absolute inset-0 pointer-events-none z-[-3]", className)}
    >
      <div
        className="w-full h-full animate-pulse"
        style={{
          background: `radial-gradient(circle at 0% 0%, hsl(var(--primary)) 8%, transparent 40%) `,
        }}
      />
    </div>
  );
};

export default RadialFadePulsatingBackground;
