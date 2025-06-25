"use client";

function GradientShowCase() {
  const gradients = [
    {
      name: "Primary Linear Gradient",
      gradient:
        "linear-gradient(135deg, hsl(var(--primary)/0.25),hsl(var(--primary)/0.36), hsl(var(--primary)/0.49))",
      maskImage:
        "linear-gradient(90deg, rgba(255, 255, 255, 0), rgb(255, 255, 255))",
      description: "Primary Linear Gradient to bottom right",
    },
    {
      name: "Primary Circular Radial Gradient",
      gradient:
        "radial-gradient(circle at 0% 0%, hsl(var(--primary)/0.25), hsl(var(--primary)/0.36), hsl(var(--primary)/0.49))",
      maskImage:
        "radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0), rgb(255, 255, 255))",
      description: "Primary Circular Radial Gradient centered at top left",
    },
    {
      name: "Primary Circular Radial Gradient",
      gradient:
        "radial-gradient(circle at 50% 50%, hsl(var(--primary)/0.25), hsl(var(--primary)/0.36), hsl(var(--primary)/0.49))",
      maskImage:
        "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.4), rgb(255, 255, 255))",
      description: "Primary Circular Radial Gradient centered at center",
    },
    {
      name: "Primary Ellipse Radial Gradient",
      gradient:
        "radial-gradient(ellipse at 0% 0%,hsl(var(--primary)/0.25), hsl(var(--primary)/0.36), hsl(var(--primary)/0.49))",
      maskImage:
        "radial-gradient(ellipse at 0% 0%, rgba(255, 255, 255, 0), rgb(255, 255, 255))",
      description: "Primary Ellipse Radial Gradient centered at top left",
    },
    {
      name: "Primary Ellipse Radial Gradient",
      gradient:
        "radial-gradient(ellipse at 50% 50%, hsl(var(--primary)/0.25), hsl(var(--primary)/0.36), hsl(var(--primary)/0.49))",
      maskImage:
        "radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.4), rgb(255, 255, 255))",
      description: "Primary Ellipse Radial Gradient centered at center",
    },
  ];

  return (
    <div>
      {gradients.map((gradient, index) => {
        return (
          <div
            key={index}
            className="min-h-screen flex items-center justify-center"
          >
            <div className="h-[80vh] w-[80vw] flex items-center justify-center border border-neutral-800/40 relative">
              <div
                style={{
                  maskImage: gradient.maskImage,
                  opacity: 0.5,
                }}
                className="absolute inset-0 z-[-3]"
              >
                <div
                  className="w-full h-full"
                  style={{
                    background: gradient.gradient,
                  }}
                />
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <h1 className="text-4xl">{gradient.name}</h1>
                <p className="text-muted-foreground">{gradient.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GradientShowCase;
