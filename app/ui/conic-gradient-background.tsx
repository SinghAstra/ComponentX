const ConicGradientBackground = () => {
  return (
    <div
      className="absolute inset-0 overflow-hidden z-[-3]"
      style={{
        maskImage:
          "linear-gradient(90deg, rgba(255, 255, 255, 0), rgb(255, 255, 255))",
        opacity: 0.5,
      }}
    >
      <div
        className="w-full h-full"
        style={{
          background: `conic-gradient(from 180deg at 100% 50%, transparent 30deg, hsl(var(--primary)) 90deg,transparent 150deg)`,
        }}
      />
    </div>
  );
};

export default ConicGradientBackground;
