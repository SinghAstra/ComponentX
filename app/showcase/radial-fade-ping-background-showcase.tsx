"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RadialFadePingBackground } from "../ui/radial-fade-ping-background";
const RadialFadePingBackgroundShowcase = () => {
  const radialFadeBackgroundContainerTextRef = useRef(null);
  const radialFadeBackgroundContainerTextInView = useInView(
    radialFadeBackgroundContainerTextRef,
    {
      once: true,
      margin: "-100px",
    }
  );
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[80vw] h-[80vh] border border-neutral-800/40 relative rounded-md overflow-hidden flex items-center justify-center">
        <motion.h1
          ref={radialFadeBackgroundContainerTextRef}
          className="text-5xl font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={
            radialFadeBackgroundContainerTextInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Radial Fade Ping Background
        </motion.h1>
        <RadialFadePingBackground
          centerX={0}
          centerY={0}
          color="hsl(var(--primary))"
          outerOpacity={0.6}
          animationDuration="3s"
        />
        <RadialFadePingBackground
          centerX={100}
          centerY={100}
          color="hsl(var(--primary))"
          outerOpacity={0.6}
          animationDuration="4s"
        />
      </div>
    </div>
  );
};

export default RadialFadePingBackgroundShowcase;
