"use client";

const MovingBorder = () => {
  return (
    <div className="absolute inset-0 p-1 overflow-hidden">
      <div
        className="w-full h-full"
        style={{
          background:
            "linear-gradient(90deg,hsla(var(--primary) / 0) 0%, hsla(var(--primary) / 0.6) 100%)",
          animation: "rotate 8s linear infinite",
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default MovingBorder;
