"use client";

import { TagInput } from "@/components/component-x/tag-input";
import { useState } from "react";

export function TagInputBasic() {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <div className="w-full max-w-sm space-y-4">
      <TagInput
        label="Technologies"
        placeholder="Type and press Enter..."
        value={tags}
        onChange={setTags}
      />
      <div className="text-sm text-muted-foreground">
        Added: {tags.length > 0 ? tags.join(", ") : "None"}
      </div>
    </div>
  );
}
