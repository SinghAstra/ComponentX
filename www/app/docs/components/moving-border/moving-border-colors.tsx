"use client";

import MovingBorder from "@/components/component-x/moving-border";

export function MovingBorderColors() {
  const colors = [
    { label: "Primary", value: "hsl(var(--primary))" },
    { label: "Muted", value: "hsl(var(--muted-foreground))" },
    { label: "Success", value: "hsl(142, 71%, 45%)" },
    { label: "Warning", value: "hsl(38, 92%, 50%)" },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex items-center justify-center">
      <div className="flex flex-col gap-4 w-fit">
        {colors.map(({ label, value }) => (
          <MovingBorder key={label} color={value} className="rounded w-full">
            <div className="rounded flex items-center justify-center px-3 py-1 w-full">
              <h3 className="text-foreground text-sm">
                Moving Border{" "}
                <span className="text-muted-foreground">{label}</span>
              </h3>
            </div>
          </MovingBorder>
        ))}
      </div>
    </div>
  );
}
