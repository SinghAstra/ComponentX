"use client";

import { TagInput } from "@/components/component-x/tag-input";
import { useState } from "react";

export function TagInputNoLabel() {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <div className="w-full max-w-sm">
      <TagInput
        placeholder="Type and press Enter..."
        value={tags}
        onChange={setTags}
      />
    </div>
  );
}
