"use client";

const GradientInsetBackground = () => {
  return (
    <div
      className="absolute inset-0 z-[-3] rounded-[inherit] overflow-hidden"
      style={{
        boxShadow:
          "inset 1px 1px 5px hsla(var(--muted)/40),inset -1px -1px 5px hsla(var(--muted)/40)",
      }}
    >
      <div className="relative w-full h-full">
        <span
          className="absolute inset-[1px]"
          style={{
            background:
              "linear-gradient(225deg,hsla(var(--muted)),hsla(var(--muted)/0))",
          }}
        />
      </div>
    </div>
  );
};

export default GradientInsetBackground;
