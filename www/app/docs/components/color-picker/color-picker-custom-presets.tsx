"use client";

import ColorPickerInput from "@/components/component-x/color-picker";
import { useState } from "react";

export function ColorPickerCustomPresets() {
  const [color, setColor] = useState("#FF6B35");

  const brandColors = [
    "#FF6B35",
    "#004E89",
    "#F77F00",
    "#FCBF49",
    "#EAE2B7",
    "#003049",
    "#D62828",
    "#F77F00",
  ];

  return (
    <div className="w-full max-w-sm">
      <ColorPickerInput
        value={color}
        onChange={setColor}
        label="Brand Colors"
        presets={brandColors}
        paletteTitle="Select a brand color"
      />
    </div>
  );
}
