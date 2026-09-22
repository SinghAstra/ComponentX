"use client";

import { TagInput } from "@/components/component-x/tag-input";
import { useState } from "react";

export function TagInputPreview() {
  const [tags, setTags] = useState<string[]>([
    "react",
    "typescript",
    "tailwind",
  ]);

  return (
    <div className="w-full max-w-sm mx-auto">
      <TagInput
        label="Skills"
        placeholder="Add a skill..."
        value={tags}
        onChange={setTags}
      />
    </div>
  );
}
