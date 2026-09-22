"use client";

import { useState } from "react";
import ColorPickerInput from "../../components/component-x/color-picker";
import { ComponentShowcase } from "./component-showcase";

export function ColorPickerShowcase() {
  const [selectedColor, setSelectedColor] = useState("#3B82F6");

  return (
    <ComponentShowcase
      docsLink="/docs/components/color-picker"
      variant="compact"
      showHeader={false}
    >
      <ColorPickerInput value={selectedColor} onChange={setSelectedColor} />
    </ComponentShowcase>
  );
}
