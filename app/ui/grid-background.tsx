import React from "react";

const GridBackground = () => {
  return (
    <div
      className="absolute inset-0 z-[-3]"
      style={{
        backgroundImage:
          "linear-gradient(90deg,#161616 1px,transparent 1px),linear-gradient(180deg,#161616 1px,transparent 1px)",
        backgroundSize: "48px 48px",
        maskImage:
          "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0), rgb(255, 255, 255))",
      }}
    />
  );
};

export default GridBackground;
