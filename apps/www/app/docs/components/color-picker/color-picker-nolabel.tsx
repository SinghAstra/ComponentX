'use client';

import { useState } from 'react';
import ColorPickerInput from '@/components/component-x/color-picker';

export function ColorPickerNoLabel() {
  const [color, setColor] = useState('#8B5CF6');

  return (
    <div className="w-full max-w-sm">
      <ColorPickerInput value={color} onChange={setColor} showLabel={false} showHexCode={true} />
    </div>
  );
}
