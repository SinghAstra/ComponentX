"use client";

import { VideoUpload } from "./video-upload";

export default function Home() {
  return (
    <main className="min-h-screen p-4 flex items-center justify-center">
      <div className="max-w-4xl space-y-8 w-full">
        <VideoUpload maxSize={100} />
      </div>
    </main>
  );
}
