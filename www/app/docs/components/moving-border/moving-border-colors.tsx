"use client";

import MovingBorder from "@/components/component-x/moving-border";

export function MovingBorderColors() {
  const colors = [
    { label: "Primary", color: "hsl(var(--primary))" },
    { label: "Destructive", color: "hsl(var(--destructive))" },
    { label: "Chart 1", color: "hsl(var(--chart-1))" },
    { label: "Chart 2", color: "hsl(var(--chart-2))" },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {colors.map(({ label, color }) => (
        <div
          key={label}
          className="relative flex-none w-full h-72 overflow-hidden border rounded-lg flex items-center justify-center bg-background"
        >
          <MovingBorder color={color} borderWidth={2} type="both" duration={3}>
            <div className="relative z-10 bg-background p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-foreground">{label}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Color: {label}
              </p>
            </div>
          </MovingBorder>
        </div>
      ))}
    </div>
  );
}
