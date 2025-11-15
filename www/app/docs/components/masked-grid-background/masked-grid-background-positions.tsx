"use client";

import MaskedGridBackground, {
  MaskPosition,
} from "@/components/component-x/masked-grid-background";

export function MaskedGridBackgroundPositions() {
  const positions: MaskPosition[] = ["top", "center", "bottom"];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {positions.map((position) => (
        <div
          key={position}
          className="relative flex-none w-full h-full overflow-hidden border flex items-center justify-center"
        >
          <MaskedGridBackground
            gridSize={48}
            gridLineColor="#161616"
            gridLineOpacity={0.8}
            maskPosition={position}
            maskSize={100}
            maskOpacity={{ start: 0.8, middle: 0.2, end: 0 }}
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h3 className="text-2xl text-foreground">{position}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
