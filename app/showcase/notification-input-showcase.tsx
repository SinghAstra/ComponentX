import React from "react";
import NotificationInput from "../ui/notification-input";
import VideoBackground from "../ui/video-background";

const NotificationInputShowCase = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="min-h-[80vh] min-w-[80vw] flex items-center justify-center border border-neutral-800/40 relative">
        <NotificationInput />
        <VideoBackground videoSrc="/music.mp4" />
      </div>
    </div>
  );
};

export default NotificationInputShowCase;
