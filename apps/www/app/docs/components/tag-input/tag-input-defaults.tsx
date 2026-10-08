'use client';

import { useState } from 'react';
import { TagInput } from '@/components/component-x/tag-input';

export function TagInputDefaults() {
  const [tags, setTags] = useState<string[]>(['JavaScript', 'React', 'TypeScript']);

  return (
    <div className="w-full max-w-sm">
      <TagInput
        label="Programming Languages"
        placeholder="Add a language..."
        value={tags}
        onChange={setTags}
      />
    </div>
  );
}
