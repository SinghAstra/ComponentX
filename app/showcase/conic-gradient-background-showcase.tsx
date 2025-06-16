"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ConicGradientBackground from "../ui/conic-gradient-background";
const ConicGradientBackgroundShowcase = () => {
  const conicGradientBackgroundContainerTextRef = useRef(null);
  const conicGradientBackgroundContainerTextInView = useInView(
    conicGradientBackgroundContainerTextRef,
    {
      once: true,
      margin: "-100px",
    }
  );
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[80vw] h-[80vh] border border-neutral-800/40 relative rounded-md overflow-hidden flex items-center justify-center">
        <motion.h1
          ref={conicGradientBackgroundContainerTextRef}
          className="text-5xl font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={
            conicGradientBackgroundContainerTextInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Conic Gradient Background
        </motion.h1>
        <ConicGradientBackground />
      </div>
    </div>
  );
};

export default ConicGradientBackgroundShowcase;
