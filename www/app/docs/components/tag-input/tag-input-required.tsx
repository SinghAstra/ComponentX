"use client";

import { TagInput } from "@/components/component-x/tag-input";
import { useState } from "react";

export function TagInputRequired() {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <div className="w-full max-w-sm">
      <TagInput
        label="Project Keywords"
        placeholder="Add keywords..."
        value={tags}
        onChange={setTags}
        required={true}
      />
    </div>
  );
}
