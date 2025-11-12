"use client";

import ConicBackground, {
  type ConicAngleSpans,
} from "@/components/component-x/conic-background";

function capitalizeFirstLetter(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function ConicAngleSpans() {
  const angleSpans: ConicAngleSpans[] = ["small", "medium", "large"];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col">
      {angleSpans.map((span) => (
        <div
          key={span}
          className="relative flex-none w-full h-[350px] overflow-hidden border flex items-center justify-center"
        >
          <ConicBackground
            position="right"
            backgroundSpan="large"
            angleSpan={span}
            colorOne="hsl(var(--primary)/0.4)"
            colorTwo="hsl(var(--primary))"
          />
          <div className="relative z-10 flex items-center justify-center h-full">
            <h3 className="text-2xl text-foreground">
              {capitalizeFirstLetter(span)}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
