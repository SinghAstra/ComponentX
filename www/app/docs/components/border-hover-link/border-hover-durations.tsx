"use client";

import BorderHoverLink from "@/components/component-x/border-hover-link";

export function BorderHoverDurations() {
  const durations = [
    { label: "Fast", value: 300 },
    { label: "Normal", value: 700 },
    { label: "Slow", value: 1200 },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {durations.map(({ label, value }) => (
        <div
          key={value}
          className="relative flex-none w-full h-32 overflow-hidden border flex items-center justify-center bg-muted/30"
        >
          <BorderHoverLink
            borderPosition="bottom"
            borderColor="hsl(var(--primary))"
            duration={value}
          >
            <div className="text-center">
              <p className="text-foreground font-medium">{label}</p>
              <p className="text-sm text-muted-foreground">{value}ms</p>
            </div>
          </BorderHoverLink>
        </div>
      ))}
    </div>
  );
}
