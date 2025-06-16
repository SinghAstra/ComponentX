interface GradientMeshBackgroundProps {
  className?: string;
  opacity?: number;
  colors?: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export function GradientMeshBackground({
  className = "",
  opacity = 0.5,
  colors = {
    primary: "rgb(255, 255, 255)",
    secondary: "hsl(var(--primary))",
    accent: "rgba(17, 17, 17, 0)",
  },
}: GradientMeshBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="absolute -inset-y-[25%] -right-24 flex w-[100vw] flex-col md:-right-6 md:w-[1200px] blur"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255))",
          opacity: opacity,
        }}
      >
        <div
          className="grow "
          style={{
            background: `conic-gradient(from 180deg at 99.78% 35% in lab, ${colors.primary} 18deg, ${colors.secondary} 36deg, ${colors.accent} 90deg, ${colors.accent} 342deg, ${colors.primary} 360deg)`,
          }}
        />
        <div
          className="grow "
          style={{
            background: `conic-gradient(from 0deg at 99.78% 65% in lab, ${colors.primary} 0deg, ${colors.accent} 18deg, ${colors.accent} 270deg, ${colors.secondary} 324deg, ${colors.primary} 342deg)`,
          }}
        />
      </div>
    </div>
  );
}
