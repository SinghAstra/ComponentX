interface RadialFadeBackgroundProps {
  className?: string;
  centerX?: number;
  centerY?: number;
  innerOpacity?: number;
  outerOpacity?: number;
  color?: string;
}

export function RadialFadeBackground({
  className = "",
  centerX = 50,
  centerY = 50,
  innerOpacity = 0,
  outerOpacity = 0.8,
  color = "white",
}: RadialFadeBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className} z-[-3]`}
      style={{
        background: `radial-gradient(circle at ${centerX}% ${centerY}%, ${color} ${
          innerOpacity * 100
        }%, transparent ${outerOpacity * 100}%)`,
      }}
    />
  );
}
