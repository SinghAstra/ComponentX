'use client';

import { useState } from 'react';
import { TagInput } from './components/tag-input';

export default function Home() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="space-y-4 max-w-2xl w-full">
        <TagInput
          label="Type Your Tag"
          placeholder="Start Typing..."
          value={selectedTags}
          onChange={setSelectedTags}
          onInputChange={setInputValue}
          required
        />
        <div className="flex flex-col gap-1">
          {inputValue && (
            <p className="text-sm text-muted-foreground">
              Input Value: {inputValue}
            </p>
          )}
          {selectedTags.length > 0 && (
            <p className="text-sm text-muted-foreground">
              Selected : {selectedTags.join(', ')}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
