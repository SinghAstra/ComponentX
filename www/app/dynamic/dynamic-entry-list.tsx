'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { PlusIcon, Trash } from 'lucide-react';

type DynamicEntryListProps = {
  value: string[];
  onChange: (next: string[]) => void;
  required: boolean;
  label?: string;
  placeholder?: string;
  addButtonLabel?: string;
  name?: string;
  minRows?: number;
  maxRows?: number;
  className?: string;
};

export function DynamicEntryList({
  value,
  onChange,
  required,
  label,
  placeholder = 'Enter a value',
  addButtonLabel = 'Add',
  name,
  minRows = 0,
  maxRows,
  className,
}: DynamicEntryListProps) {
  const list = value ?? [];

  const canAdd = typeof maxRows === 'number' ? list.length < maxRows : true;
  const canDelete = () => list.length > minRows;

  const handleAdd = () => {
    if (!canAdd) return;
    onChange([...list, '']);
  };

  const handleDelete = (index: number) => {
    if (!canDelete()) return;
    const next = list.slice(0, index).concat(list.slice(index + 1));
    onChange(next);
  };

  // Dynamic List
  const handleChange = (index: number, nextValue: string) => {
    const next = [...list];
    next[index] = nextValue;
    onChange(next);
  };

  return (
    <div className={cn('w-full', className)}>
      <div className="mb-2 flex justify-between items-center w-full">
        <Label className="text-sm">
          {label}
          {required && <span className="text-primary ml-1">*</span>}
        </Label>
        <Button
          onClick={handleAdd}
          disabled={!canAdd}
          className="cursor-pointer rounded-xs"
        >
          <PlusIcon className="mr-1" />
          {addButtonLabel}
        </Button>
      </div>

      <ul className="flex flex-col gap-2">
        {list.map((entry, idx) => {
          const id = `${name || 'entry'}-${idx}`;
          return (
            <li key={id} className="flex items-center gap-2 rounded border p-2">
              <div className="flex-1">
                <Label htmlFor={id} className="sr-only">
                  {`Entry ${idx + 1}`}
                </Label>
                <Input
                  id={id}
                  name={name ? `${name}[${idx}]` : undefined}
                  placeholder={placeholder}
                  value={entry}
                  onChange={(e) => handleChange(idx, e.target.value)}
                  className="rounded focus-visible:ring-0 transition-all duration-300"
                />
              </div>

              <Button
                type="button"
                variant="outline"
                onClick={() => handleDelete(idx)}
                disabled={!canDelete()}
                className="rounded hover:bg-muted/30 transition-all duration-300"
                aria-label={`Delete Entry ${idx + 1}`}
              >
                <Trash />
              </Button>
            </li>
          );
        })}

        {list.length === 0 && minRows === 0 ? (
          <li className="text-sm text-muted-foreground bg-muted/30 rounded-md border border-dashed border-border p-3">
            No entries yet.
          </li>
        ) : null}
      </ul>
    </div>
  );
}
