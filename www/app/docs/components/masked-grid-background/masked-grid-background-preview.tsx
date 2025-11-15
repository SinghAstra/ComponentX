"use client";

import MaskedGridBackground from "@/components/component-x/masked-grid-background";

export function MaskedGridBackgroundPreview() {
  return (
    <div className="relative w-full h-full overflow-hidden border flex items-center justify-center">
      <MaskedGridBackground
        gridSize={48}
        gridLineColor="#161616"
        gridLineOpacity={1}
        maskPosition="center"
        maskSize={100}
        maskOpacity={{ start: 0.8, middle: 0.2, end: 0 }}
      />
      <h3 className="text-2xl text-foreground">Masked Grid Background</h3>
    </div>
  );
}
