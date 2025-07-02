import React from "react";

const ReverseTriadBanner = () => {
  return (
    <div className="absolute inset-0 ">
      <div className="relative w-full h-full grid grid-cols-12">
        <div
          className="col-span-3 "
          style={{
            maskImage:
              "radial-gradient(circle at 0% 50%, rgb(255, 255, 255,0.6), rgba(255, 255, 255,0))",
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0 100%, 0 0)",
            opacity: "0.5",
            background: `conic-gradient(from 180deg at 0% 50%, hsl(var(--primary)/0.3) 30deg, hsl(var(--primary)) 90deg,hsl(var(--primary)/0.3) 150deg)`,
          }}
        />
        <div className="col-span-6"></div>
        <div
          className="col-span-3 "
          style={{
            maskImage:
              "radial-gradient(circle at 100% 50%, rgb(255, 255, 255,0.6), rgba(255, 255, 255,0))",
            clipPath: "polygon(50% 0%, 100% 0, 100% 100%, 50% 100%, 0 50%)",
            opacity: "0.5",
            background: `conic-gradient(from 0deg at 100% 50%, hsl(var(--primary)/0.3) 30deg, hsl(var(--primary)) 90deg,hsl(var(--primary)/0.3) 150deg)`,
          }}
        />
      </div>
    </div>
  );
};

export default ReverseTriadBanner;
