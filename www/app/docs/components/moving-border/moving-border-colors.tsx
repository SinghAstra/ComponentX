"use client";

import MovingBorder from "@/components/component-x/moving-border";

export function MovingBorderColors() {
  const colors = [
    { label: "Primary", value: "hsl(var(--primary))" },
    { label: "Destructive", value: "hsl(var(--destructive))" },
    { label: "Success", value: "hsl(142, 71%, 45%)" },
    { label: "Warning", value: "hsl(38, 92%, 50%)" },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {colors.map(({ label, value }) => (
        <div key={label} className="flex-none w-full h-40">
          <MovingBorder color={value} className="rounded-lg h-full">
            <div className="w-full h-full bg-background rounded-md flex items-center justify-center">
              <h3 className="text-xl text-foreground">{label} Color</h3>
            </div>
          </MovingBorder>
        </div>
      ))}
    </div>
  );
}
