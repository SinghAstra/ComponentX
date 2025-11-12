"use client";

import ConicBackground from "@/components/component-x/conic-background";

export function ConicBackgroundColors() {
  const colorSchemes = [
    { colorOne: "rgba(59, 130, 246, 0.4)", colorTwo: "rgba(59, 130, 246, 1)" },
    { colorOne: "rgba(168, 85, 247, 0.4)", colorTwo: "rgba(168, 85, 247, 1)" },
    { colorOne: "rgba(236, 72, 153, 0.4)", colorTwo: "rgba(236, 72, 153, 1)" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {colorSchemes.map((scheme, idx) => (
        <div
          key={idx}
          className="relative h-48 bg-muted rounded-lg overflow-hidden border"
        >
          <ConicBackground
            position="right"
            colorOne={scheme.colorOne}
            colorTwo={scheme.colorTwo}
          />
          <div className="relative z-10 flex items-center justify-center h-full">
            <span className="text-xs font-medium text-foreground">
              Custom {idx + 1}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
