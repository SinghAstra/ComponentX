"use client";

function GradientShowCase() {
  const gradients = [
    {
      name: "Primary Spiral",
      gradient:
        "conic-gradient(from 0deg at 50% 50%, hsl(var(--primary)/0.01) 0deg, hsl(var(--primary)/0.4) 60deg, hsl(var(--primary)/0.5) 90deg, hsl(var(--primary)/0.4) 120deg, hsl(var(--primary)/0.01) 180deg",
      description: "Spiral primary color rotation",
    },
    {
      name: "Primary Linear Gradient",
      gradient:
        "linear-gradient(135deg, hsl(var(--primary)/0.04),hsl(var(--primary)/0.16), hsl(var(--primary)/0.04)",
      description: "Primary Linear Gradient to bottom right",
    },
    {
      name: "Primary Circular Radial Gradient",
      gradient:
        "radial-gradient(circle at 0% 0%, hsl(var(--primary)/0.04),hsl(var(--primary)/0.09), hsl(var(--primary)/0.16), hsl(var(--primary)/0.25)",
      description: "Primary Circular Radial Gradient centered at top left",
    },
    {
      name: "Primary Circular Radial Gradient",
      gradient:
        "radial-gradient(circle at 50% 50%, hsl(var(--primary)/0.04),hsl(var(--primary)/0.09), hsl(var(--primary)/0.16), hsl(var(--primary)/0.25)",
      description: "Primary Circular Radial Gradient centered at center",
    },
    {
      name: "Primary Ellipse Radial Gradient",
      gradient:
        "radial-gradient(ellipse at 0% 0%, hsl(var(--primary)/0.04),hsl(var(--primary)/0.09), hsl(var(--primary)/0.16), hsl(var(--primary)/0.25)",
      description: "Primary Ellipse Radial Gradient centered at top left",
    },
    {
      name: "Primary Ellipse Radial Gradient",
      gradient:
        "radial-gradient(ellipse at 50% 50%, hsl(var(--primary)/0.04),hsl(var(--primary)/0.09), hsl(var(--primary)/0.16), hsl(var(--primary)/0.25)",
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
            <div className="h-[80vh] w-[80vw] flex items-center justify-center border-neutral-800/40 relative">
              <div
                className="absolute inset-0 z-[-3] "
                style={{
                  backgroundImage: gradient.gradient,
                  opacity: 0.6,
                }}
              />
              <div className="flex flex-col gap-2 text-center">
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
