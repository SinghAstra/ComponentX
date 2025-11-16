"use client";

import BorderHoverLink from "@/components/component-x/border-hover-link";

export function BorderHoverColors() {
  const colors = [
    { label: "Primary", value: "hsl(var(--primary))" },
    { label: "Destructive", value: "hsl(var(--destructive))" },
    { label: "Muted", value: "hsl(var(--muted-foreground))" },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {colors.map(({ label, value }) => (
        <div
          key={label}
          className="relative flex-none w-full h-32 overflow-hidden border flex items-center justify-center bg-muted/30"
        >
          <BorderHoverLink
            borderPosition="bottom"
            borderColor={value}
            duration={700}
          >
            <p className="text-foreground font-medium">{label} Border</p>
          </BorderHoverLink>
        </div>
      ))}
    </div>
  );
}
