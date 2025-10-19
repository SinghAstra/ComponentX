"use client";

import type React from "react";

import { cn } from "@/lib/utils";
import { useCallback, useRef, useState } from "react";
import { InputField } from "./input-field";
import { Tag } from "./tag";

export interface TagInputProps {
  label?: string;
  placeholder?: string;
  value: string[];
  onChange: (value: string[]) => void;
  onInputChange?: (value: string) => void;
  required?: boolean;
}

export function TagInput({
  label,
  placeholder = "Add items...",
  value,
  onChange,
  onInputChange,
  required = false,
}: TagInputProps) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onInputChange?.(newValue);
  };

  const handleAddItem = useCallback(
    (item: string) => {
      const trimmedItem = item.trim();
      if (trimmedItem && !value.includes(trimmedItem)) {
        onChange([...value, trimmedItem]);
        setInputValue("");
        inputRef.current?.focus();
      }
    },
    [value, onChange]
  );

  const handleRemoveItem = useCallback(
    (item: string) => {
      onChange(value.filter((v) => v !== item));
    },
    [value, onChange]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddItem(inputValue);
    } else if (e.key === "Backspace" && inputValue === "" && value.length > 0) {
      handleRemoveItem(value[value.length - 1]);
    }
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-foreground mb-2">
          {label}
          {required && <span className="text-primary ml-1">*</span>}
        </label>
      )}

      <div
        ref={containerRef}
        className={cn(
          "flex flex-wrap items-center gap-2 px-3 py-2 rounded",
          "border border-input bg-background",
          "transition-all duration-300"
        )}
      >
        {value.map((item) => (
          <Tag
            key={item}
            label={item}
            onRemove={() => handleRemoveItem(item)}
          />
        ))}

        <InputField
          ref={inputRef}
          type="text"
          placeholder={value.length === 0 ? placeholder : ""}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}
