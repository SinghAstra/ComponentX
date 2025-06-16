interface LayeredGradientBackgroundProps {
  className?: string;
  layers?: Array<{
    gradient: string;
    opacity: number;
    blendMode?: string;
  }>;
}

export function LayeredGradientBackground({
  className = "",
  layers = [
    {
      gradient:
        "linear-gradient(135deg, rgb(99, 102, 241) 0%, rgb(168, 85, 247) 100%)",
      opacity: 0.8,
      blendMode: "normal",
    },
    {
      gradient:
        "radial-gradient(circle at 20% 80%, rgb(120, 119, 198) 0%, transparent 50%)",
      opacity: 0.4,
      blendMode: "multiply",
    },
  ],
}: LayeredGradientBackgroundProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {layers.map((layer, index) => (
        <div
          key={index}
          className="absolute inset-0"
          style={{
            background: layer.gradient,
            opacity: layer.opacity,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            mixBlendMode: layer.blendMode as any,
          }}
        />
      ))}
    </div>
  );
}
