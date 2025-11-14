"use client";

import MovingBorder from "@/components/component-x/moving-border";

export function MovingBorderDuration() {
  const durations = [
    { label: "1s", value: 1 },
    { label: "3s", value: 3 },
    { label: "6s", value: 6 },
    { label: "10s", value: 10 },
  ];

return (

<div className="w-full h-full overflow-y-auto flex flex-col gap-4">
  {durations.map(({ label, value }) => (
    <div key={label} className="flex-none w-full h-40">
      <MovingBorder duration={value} className="rounded-lg h-full">
        <div className="w-full h-full bg-background rounded-md flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-xl text-foreground">{label} Duration</h3>
            <p className="text-xs text-muted-foreground mt-1">
              One full rotation: {label}
            </p>
          </div>
        </div>
      </MovingBorder>
    </div>
  ))}
</div>
); } 