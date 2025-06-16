"use client";

import { motion } from "framer-motion";
import { RadialFadePingBackground } from "../ui/radial-fade-ping-background";
const RadialFadePingBackgroundShowcase = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[80vw] h-[80vh] border border-neutral-800/40 relative rounded-md overflow-hidden flex items-center justify-center">
        <motion.h1
          className="text-5xl font-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
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
