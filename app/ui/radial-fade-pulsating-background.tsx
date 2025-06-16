interface RadialFadePulsatingBackgroundProps {
  className?: string;
  centerX?: number;
  centerY?: number;
  innerOpacity?: number;
  outerOpacity?: number;
  color?: string;
  animationDuration?: string;
}

export function RadialFadePulsatingBackground({
  className = "",
  centerX = 50,
  centerY = 50,
  innerOpacity = 0,
  outerOpacity = 0.8,
  color = "white",
  animationDuration = "2s",
}: RadialFadePulsatingBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className} animate-pulse`}
      style={{
        background: `radial-gradient(circle at ${centerX}% ${centerY}%, ${color} ${
          innerOpacity * 100
        }%, transparent ${outerOpacity * 100}%)`,
        animationDuration,
      }}
    />
  );
}
