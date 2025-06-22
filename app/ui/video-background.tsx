"use client";

import { useEffect, useRef } from "react";

interface AbstractBackgroundProps {
  className?: string;
  videoSrc?: string;
}

function VideoBackground({ className, videoSrc }: AbstractBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure video plays on load
      video.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-[-3] overflow-hidden ${className}`}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        style={{
          filter: "grayscale(1)",
        }}
      />
    </div>
  );
}

export default VideoBackground;
