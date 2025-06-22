"use client";

import { textVariant } from "@/lib/variant";
import { motion } from "framer-motion";
import VideoBackground from "../ui/video-background";

const WaitBackgroundShowCase = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[80vw] h-[80vh] border border-neutral-800/40 relative rounded-md overflow-hidden flex items-center justify-center">
        <motion.h1
          className="text-5xl font-medium"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
        >
          How is Life Brother ?
        </motion.h1>
        <VideoBackground videoSrc="/video-2.mp4" />
      </div>
    </div>
  );
};

export default WaitBackgroundShowCase;
