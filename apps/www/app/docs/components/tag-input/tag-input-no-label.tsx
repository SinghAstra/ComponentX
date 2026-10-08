'use client';

import { useState } from 'react';
import { TagInput } from '@/components/component-x/tag-input';

export function TagInputNoLabel() {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <div className="w-full max-w-sm">
      <TagInput placeholder="Type and press Enter..." value={tags} onChange={setTags} />
    </div>
  );
}
