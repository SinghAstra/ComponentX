interface AnimatedGlowBackgroundProps {
  className?: string;
  glowColor?: string;
  animationDuration?: string;
  intensity?: number;
}

export function AnimatedGlowBackground({
  className = "",
  glowColor = "rgb(59, 130, 246)",
  animationDuration = "8s",
  intensity = 0.3,
}: AnimatedGlowBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 animate-pulse"
        style={{
          background: `radial-gradient(ellipse at center, ${glowColor} 0%, transparent 70%)`,
          opacity: intensity,
          animationDuration: animationDuration,
        }}
      />
      <div
        className="absolute inset-0 animate-ping"
        style={{
          background: `radial-gradient(ellipse at 30% 70%, ${glowColor} 0%, transparent 50%)`,
          opacity: intensity * 0.5,
          animationDuration: `calc(${animationDuration} * 1.5)`,
          animationDelay: "1s",
        }}
      />
    </div>
  );
}
