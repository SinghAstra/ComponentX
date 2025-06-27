const RadialFadePulsatingBackground = () => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none z-[-3]`}
      style={{
        maskImage:
          "radial-gradient(circle at 0% 0%, rgba(255, 255, 255), rgba(255, 255, 255,0))",
        opacity: 0.5,
      }}
    >
      <div
        className="w-full h-full animate-pulse"
        style={{
          background: `radial-gradient(circle at 0% 0%, hsl(var(--primary)) 8%, transparent 60%) `,
        }}
      />
    </div>
  );
};

export default RadialFadePulsatingBackground;
