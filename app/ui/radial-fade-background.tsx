export function RadialFadeBackground({}) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none z-[-3]`}
      style={{
        background: `radial-gradient(circle at 0% 0%, hsl(var(--primary)) 8%, transparent 60%)`,
      }}
    />
  );
}
