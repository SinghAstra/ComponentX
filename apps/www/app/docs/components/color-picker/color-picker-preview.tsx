"use client";

import ColorPickerInput from "@/components/component-x/color-picker";

export function ColorPickerPreview() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <ColorPickerInput label="Choose a color" defaultColor="#3B82F6" />
    </div>
  );
}
