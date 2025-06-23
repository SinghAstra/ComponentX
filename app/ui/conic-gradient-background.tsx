function ConicGradientBackground() {
  const colors = {
    primary: "hsl(var(--primary) / 1)",
    secondary: "hsl(var(--primary) / 0.7)",
    tertiary: "rgba(17, 17, 17, 0)",
  };
  return (
    <div className="pointer-events-none absolute z-[-3] inset-0 blur">
      <div
        className="absolute -inset-y-[25%] -right-24 flex w-[100vw] flex-col md:-right-6 md:w-[1200px] blur"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255))",
          opacity: 0.5,
        }}
      >
        <div
          className={`pointer-events-none absolute inset-0`}
          style={{
            background: `conic-gradient(
        from 90deg at 65% 50%, 
        rgb(248, 247, 245) 0deg, 
        ${colors.primary} 4deg, 
        ${colors.secondary} 8deg, 
        ${colors.tertiary} 45deg, 
        rgba(255, 255, 255, 0) 360deg)`,
          }}
        />
        <div
          className={`pointer-events-none absolute inset-0`}
          style={{
            background: `conic-gradient(
        from 90deg at 65% 50%, 
        rgba(255, 255, 255, 0) ,
        ${colors.tertiary} 315deg, 
        ${colors.secondary} 352deg, 
        ${colors.primary} 356deg, 
        rgb(248, 247, 245) 360deg)
        `,
          }}
        />
      </div>
    </div>
  );
}

export default ConicGradientBackground;
