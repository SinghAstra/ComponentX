"use client";

import { useState } from "react";
import ColorPickerInput, { DEFAULT_COLOR_PRESETS } from "./color-picker";

export default function Page() {
  const [selectedColor, setSelectedColor] = useState("#3B82F6");

  return (
    <main className="min-h-screen p-8 flex items-center justify-center w-full">
      <div className="border p-8 space-y-6 max-w-md">
        <ColorPickerInput
          value={selectedColor}
          onChange={setSelectedColor}
          label="Select a Color"
          presets={DEFAULT_COLOR_PRESETS}
          showHelpText={true}
        />
      </div>
    </main>
  );
}
