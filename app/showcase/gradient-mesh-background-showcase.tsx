"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GradientMeshBackground } from "../ui/gradient-mesh-background";
const GradientMeshBackgroundShowcase = () => {
  const gradientBackgroundContainerTextRef = useRef(null);
  const gradientBackgroundContainerTextInView = useInView(
    gradientBackgroundContainerTextRef,
    {
      once: true,
      margin: "-100px",
    }
  );
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[80vw] h-[80vh] border border-neutral-800/40 relative rounded-md overflow-hidden flex items-center justify-center">
        <motion.h1
          ref={gradientBackgroundContainerTextRef}
          className="text-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={
            gradientBackgroundContainerTextInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Gradient Mesh Background
        </motion.h1>
        <GradientMeshBackground />
      </div>
    </div>
  );
};

export default GradientMeshBackgroundShowcase;
