"use client";

import MovingBorder from "@/components/component-x/moving-border";

export function MovingBorderEffects() {
  const effects = [
    { label: "No Blur", blur: 0, opacity: 1 },
    { label: "Light Blur", blur: 4, opacity: 0.8 },
    { label: "Medium Blur", blur: 8, opacity: 0.6 },
    { label: "Heavy Blur", blur: 16, opacity: 0.4 },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {effects.map(({ label, blur, opacity }) => (
        <div key={label} className="flex-none w-full h-40">
          <MovingBorder
            blur={blur}
            opacity={opacity}
            className="rounded-lg h-full"
          >
            <div className="w-full h-full bg-background rounded-md flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-xl text-foreground">{label}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Blur: {blur}px | Opacity: {opacity}
                </p>
              </div>
            </div>
          </MovingBorder>
        </div>
      ))}
    </div>
  );
}
