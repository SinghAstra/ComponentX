"use client";

import { FileUploader } from "@/components/component-x/file-upload";
import { useState } from "react";

export function FileUploaderPreview() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className="w-full h-full overflow-y-auto">
      <FileUploader
        value={files}
        onChange={setFiles}
        label="Upload images"
        description="Drag and drop your images here, or click to browse."
        accept="image/*"
        maxFiles={5}
      />
    </div>
  );
}
