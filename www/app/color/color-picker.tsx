'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useState } from 'react';

type ColorPickerInputProps = {
  value?: string;
  onChange?: (hex: string) => void;
};

const presets = [
  '#111827',
  '#374151',
  '#6B7280',
  '#9CA3AF',
  '#D1D5DB',
  '#F3F4F6',
  '#EF4444',
  '#F59E0B',
  '#FBBF24',
  '#FCD34D',
  '#34D399',
  '#10B981',
  '#06B6D4',
  '#0EA5E9',
  '#3B82F6',
  '#6366F1',
  '#8B5CF6',
  '#EC4899',
  '#F97316',
  '#22C55E',
  '#84CC16',
  '#14B8A6',
  '#A855F7',
  '#E11D48',
];

function normalizeHex(input: string): string | null {
  let v = input.trim();
  if (!v) return null;
  if (v[0] !== '#') v = `#${v}`;
  const short = /^#([0-9a-fA-F]{3})$/;
  const long = /^#([0-9a-fA-F]{6})$/;
  if (short.test(v)) {
    const [, s] = v.match(short) as RegExpMatchArray;
    const expanded = `#${s[0]}${s[0]}${s[1]}${s[1]}${s[2]}${s[2]}`;
    return expanded.toUpperCase();
  }
  if (long.test(v)) return v.toUpperCase();
  return null;
}

export function ColorPickerInput({ value, onChange }: ColorPickerInputProps) {
  const [open, setOpen] = useState(false);
  const [internal, setInternal] = useState<string>(
    normalizeHex(value || '#3B82F6') || '#3B82F6',
  );
  const current = normalizeHex(value ?? internal) ?? '#3B82F6';

  function commit(next: string) {
    const normalized = normalizeHex(next);
    if (!normalized) return;
    setInternal(normalized);
    onChange?.(normalized);
  }

  return (
    <div className="w-full space-y-2">
      <Label htmlFor="color-input" className="text-sm">
        Color
      </Label>
      <div className="flex items-center gap-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-10 w-10 p-1 bg-transparent"
              aria-label="Open color palette"
              title="Open color palette"
            >
              <span
                aria-hidden
                className="block h-full w-full rounded"
                style={{
                  backgroundColor: current,
                }}
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-72 bg-background border rounded shadow-sm"
            align="start"
            sideOffset={8}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Pick a color</span>
              <span className="text-xs text-muted-foreground">{current}</span>
            </div>
            <div className="mt-3 grid grid-cols-8 gap-2">
              {presets.map((hex) => {
                const selected = current.toUpperCase() === hex.toUpperCase();
                return (
                  <button
                    key={hex}
                    type="button"
                    className={cn(
                      'h-7 w-7 rounded-full border hover:ring-1 hover:ring-ring transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-ring',
                      selected ? 'ring-1 ring-ring' : '',
                    )}
                    style={{
                      backgroundColor: hex,
                    }}
                    onClick={() => {
                      commit(hex);
                      setOpen(false);
                    }}
                    aria-label={`Choose ${hex}`}
                    title={hex}
                  />
                );
              })}
            </div>
          </PopoverContent>
        </Popover>
        <Input
          id="color-input"
          inputMode="text"
          spellCheck={false}
          placeholder="#000000"
          className={cn('font-mono')}
          value={internal}
          onChange={(e) => setInternal(e.target.value)}
          onBlur={(e) => {
            const normalized = normalizeHex(e.target.value);
            if (normalized) {
              commit(normalized);
            } else {
              setInternal(current);
            }
          }}
          pattern="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
          aria-describedby="color-input-help"
        />
      </div>
      <p id="color-input-help" className="text-xs text-muted-foreground">
        Enter a hex code like #3B82F6 or #fff, or pick from the palette.
      </p>
    </div>
  );
}

export default ColorPickerInput;
