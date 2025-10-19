"use client";

import { X } from "lucide-react";

interface TagProps {
  label: string;
  onRemove: () => void;
}

export function Tag({ label, onRemove }: TagProps) {
  return (
    <div className="inline-flex border items-center gap-2 px-3 py-1.5 rounded text-sm font-medium transition-all duration-300  hover:bg-muted/20">
      <span>{label}</span>
      <button
        onClick={onRemove}
        className="inline-flex items-center justify-center hover:opacity-70 transition-opacity cursor-pointer"
        aria-label={`Remove ${label}`}
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
