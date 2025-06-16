interface RadialFadePingBackgroundProps {
  className?: string;
  centerX?: number;
  centerY?: number;
  innerOpacity?: number;
  outerOpacity?: number;
  color?: string;
  animationDuration?: string;
}

export function RadialFadePingBackground({
  className = "",
  centerX = 50,
  centerY = 50,
  innerOpacity = 0,
  outerOpacity = 0.8,
  color = "white",
  animationDuration = "4s",
}: RadialFadePingBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className} animate-ping`}
      style={{
        background: `radial-gradient(circle at ${centerX}% ${centerY}%, ${color} ${
          innerOpacity * 100
        }%, transparent ${outerOpacity * 100}%)`,
        animationDuration,
      }}
    />
  );
}
