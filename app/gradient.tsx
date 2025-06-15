const GradientBackground = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[80vw] h-[80vh] border border-neutral-800/40 relative rounded-md overflow-hidden flex items-center justify-center">
        <h1 className="text-3xl "> Background For Your Next Hero Section ?</h1>
        <div
          className="absolute -inset-y-[25%] -right-24 flex w-[100vw] flex-col md:-right-6 md:w-[1200px] blur z-[-10]"
          style={{
            maskImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255))",
            opacity: 1,
            transform: "none",
          }}
        >
          <div
            className="grow"
            style={{
              background:
                "conic-gradient(from 180deg at 99.78% 35% in lab, rgb(255, 255, 255) 18deg, rgb(255, 208, 134) 36deg, rgba(17, 17, 17, 0) 90deg, rgba(17, 17, 17, 0) 342deg, rgb(255, 255, 255) 360deg)",
            }}
          />
          <div
            className="grow"
            style={{
              background:
                "conic-gradient(from 0deg at 99.78% 65% in lab, rgb(255, 255, 255) 0deg, rgba(17, 17, 17, 0) 18deg, rgba(17, 17, 17, 0) 270deg, rgb(255, 208, 134) 324deg, rgb(255, 255, 255) 342deg)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GradientBackground;
