export function GradientMeshBackground() {
  const colors = {
    primary: "rgb(255, 255, 255)",
    secondary: "hsl(var(--primary))",
    tertiary: "rgba(17, 17, 17, 0)",
  };
  return (
    <div className={`absolute inset-0 overflow-hidden z-[-3]`}>
      <div
        className="absolute -inset-y-[25%] -right-24 flex flex-col md:-right-6 md:w-[1200px] blur"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255))",
          opacity: 0.5,
        }}
      >
        <div
          className="grow"
          style={{
            background: `conic-gradient(from 180deg at 99.78% 35% in lab, ${colors.primary} 18deg, ${colors.secondary} 36deg, ${colors.tertiary} 90deg, ${colors.tertiary} 342deg, ${colors.primary} 360deg)`,
          }}
        />
        <div
          className="grow"
          style={{
            background: `conic-gradient(from 0deg at 99.78% 65% in lab, ${colors.primary} 0deg, ${colors.tertiary} 18deg, ${colors.tertiary} 270deg, ${colors.secondary} 324deg, ${colors.primary} 342deg)`,
          }}
        />
      </div>
    </div>
  );
}
