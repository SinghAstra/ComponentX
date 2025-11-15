"use client";

import MaskedGridBackground from "@/components/component-x/masked-grid-background";

export function MaskedGridBackgroundColors() {
  const colors = [
    { label: "Dark Gray", color: "#161616" },
    { label: "Primary", color: "hsl(var(--primary))" },
    { label: "Muted", color: "hsl(var(--muted-foreground))" },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {colors.map(({ label, color }) => (
        <div
          key={label}
          className="relative flex-none w-full h-full overflow-hidden border flex items-center justify-center"
        >
          <MaskedGridBackground
            gridSize={48}
            gridLineColor={color}
            gridLineOpacity={0.8}
            maskPosition="center"
            maskSize={100}
            maskOpacity={{ start: 0.8, middle: 0.2, end: 0 }}
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h3 className="text-2xl text-foreground">{label}</h3>
            <div
              className="w-8 h-8 rounded mt-2 border"
              style={{ backgroundColor: color }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
