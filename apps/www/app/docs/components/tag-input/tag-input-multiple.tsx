"use client";

import { TagInput } from "@/components/component-x/tag-input";
import { useState } from "react";

export function TagInputMultiple() {
  const [skills, setSkills] = useState<string[]>(["React", "Vue"]);
  const [interests, setInterests] = useState<string[]>(["Design", "Music"]);

  return (
    <div className="w-full max-w-sm space-y-6">
      <TagInput
        label="Technical Skills"
        placeholder="Add a skill..."
        value={skills}
        onChange={setSkills}
      />
      <TagInput
        label="Interests"
        placeholder="Add an interest..."
        value={interests}
        onChange={setInterests}
      />
    </div>
  );
}
