"use client";

import { VideoUpload } from "@/components/component-x/video-upload";

export function VideoUploadPreview() {
  return (
    <div className="w-full h-full overflow-y-auto p-4">
      <VideoUpload maxSize={100} />
    </div>
  );
}
