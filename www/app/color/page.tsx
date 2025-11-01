"use client";

import { useState } from "react";
import ColorPickerInput from "./color-picker";

function ColorPickerPage() {
  const [hex, setHex] = useState("#2688EB");

  return (
    <main className="min-h-screen bg-background text-foreground p-6">
      <div className="mx-auto max-w-xl space-y-6">
        <header>
          <h1 className="text-2xl font-semibold text-balance">
            Hex Color Picker
          </h1>
          <p className="text-sm text-muted-foreground">
            Pick a color from the palette or type a hex code.
          </p>
        </header>

        <ColorPickerInput value={hex} onChange={setHex} />

        <section className="rounded border bg-muted/20 p-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Preview</span>
            <code className="text-xs text-muted-foreground">{hex}</code>
          </div>
          <div
            className="mt-4 h-12 w-full rounded border"
            style={{ backgroundColor: hex }}
          />
        </section>
      </div>
    </main>
  );
}

export default ColorPickerPage;
