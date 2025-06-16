interface NoiseTextureBackgroundProps {
  className?: string;
  intensity?: number;
  scale?: number;
  color?: string;
}

export function NoiseTextureBackground({
  className = "",
  intensity = 0.05,
  scale = 100,
}: NoiseTextureBackgroundProps) {
  // Generate a simple noise pattern using CSS
  const noiseDataUrl = `data:image/svg+xml,%3Csvg viewBox='0 0 ${scale} ${scale}' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='${intensity}'/%3E%3C/svg%3E`;

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `url("${noiseDataUrl}")`,
        backgroundSize: `${scale}px ${scale}px`,
        mixBlendMode: "overlay",
      }}
    />
  );
}
