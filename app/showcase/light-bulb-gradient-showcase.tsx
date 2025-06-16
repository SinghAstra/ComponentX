"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LightBulbGradient } from "../ui/light-bulb-gradient";
const LightBulbGradientShowCase = () => {
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
          className="text-5xl font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={
            gradientBackgroundContainerTextInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Light Bulb Gradient
        </motion.h1>
        <LightBulbGradient />
      </div>
    </div>
  );
};

export default LightBulbGradientShowCase;
