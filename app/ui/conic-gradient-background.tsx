function ConicGradientBackground({
  className = "",
  opacity = 1,
  blur = true,
  primary = "rgb(156, 184, 221)",
  secondary = "rgba(81, 100, 132, 0.9)",
  accent = "rgba(6, 16, 43, 0.05)",
}: {
  className?: string;
  opacity?: number;
  blur?: boolean;
  primary?: string;
  secondary?: string;
  accent?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute z-[-3] inset-0 ${className} ${
        blur ? "blur" : ""
      }`}
      style={{ opacity }}
    >
      <div
        className={`pointer-events-none absolute inset-0`}
        style={{
          background: `conic-gradient(
        from 90deg at 65% 50%, 
        rgb(248, 247, 245) 0deg, 
        ${primary} 4deg, 
        ${secondary} 8deg, 
        ${accent} 45deg, 
        rgba(255, 255, 255, 0) 360deg)`,
        }}
      />
      <div
        className={`pointer-events-none absolute inset-0`}
        style={{
          background: `conic-gradient(
        from 90deg at 65% 50%, 
        rgba(255, 255, 255, 0) ,
        ${accent} 315deg, 
        ${secondary} 352deg, 
        ${primary} 356deg, 
        rgb(248, 247, 245) 360deg)
        `,
        }}
      />
    </div>
  );
}

export default ConicGradientBackground;
