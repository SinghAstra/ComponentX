"use client";

import { motion } from "framer-motion";
import { RadialFadePulsatingBackground } from "../ui/radial-fade-pulsating-background";
const RadialFadePulsatingBackgroundShowcase = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[80vw] h-[80vh] border border-neutral-800/40 relative rounded-md overflow-hidden flex items-center justify-center">
        <motion.h1
          className="text-5xl font-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Radial Fade Pulsating Background
        </motion.h1>
        <RadialFadePulsatingBackground
          centerX={0}
          centerY={0}
          color="hsl(var(--primary))"
          outerOpacity={0.6}
        />
      </div>
    </div>
  );
};

export default RadialFadePulsatingBackgroundShowcase;
