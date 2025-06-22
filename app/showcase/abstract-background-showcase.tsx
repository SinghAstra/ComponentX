"use client";

import { textVariant } from "@/lib/variant";
import { motion } from "framer-motion";
import VideoBackground from "../ui/video-background";

const AbstractBackgroundShowCase = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[80vw] h-[80vh] border border-neutral-800/40 relative rounded-md overflow-hidden flex items-center justify-center">
        <motion.h1
          className="text-5xl font-medium"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
        >
          Abstract Background
        </motion.h1>
        <VideoBackground videoSrc="/video-1.mp4" />
      </div>
    </div>
  );
};

export default AbstractBackgroundShowCase;
