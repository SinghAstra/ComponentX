"use client";

import ConicBackground, {
  type ConicBackgroundSpans,
} from "@/components/component-x/conic-background";

export function ConicBackgroundSpans() {
  const backgroundSpans: ConicBackgroundSpans[] = ["small", "medium", "large"];
  return (
    <div className="grid grid-cols-3 gap-4">
      {backgroundSpans.map((span) => (
        <div
          key={span}
          className="relative h-48 bg-muted rounded-lg overflow-hidden border"
        >
          <ConicBackground
            position="right"
            backgroundSpan={span}
            colorOne="hsl(var(--primary)/0.4)"
            colorTwo="hsl(var(--primary))"
          />
          <div className="relative z-10 flex items-center justify-center h-full">
            <span className="text-sm font-medium text-foreground capitalize">
              {span}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
