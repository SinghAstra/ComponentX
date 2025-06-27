function LightBulbGradient() {
  return (
    <div
      className="absolute inset-0 flex bottom-[50%]"
      style={{
        maskImage:
          "linear-gradient(0deg, rgba(255, 255, 255, 0), rgb(255, 255, 255))",
        opacity: 0.5,
      }}
    >
      <div
        className="h-full flex-1"
        style={{
          background: `conic-gradient(
              from 90deg at 0% 0%, 
              hsl(var(--primary)) 0deg, 
              transparent 30deg
            )`,
        }}
      />
      <div
        className="flex-1 h-full"
        style={{
          background: `conic-gradient(
              from 180deg at 100% 0%, 
              transparent 60deg,
              hsl(var(--primary)) 90deg
            )`,
        }}
      />
    </div>
  );
}

export default LightBulbGradient;
