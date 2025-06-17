"use client";

import { textVariant } from "@/lib/variant";
import { motion } from "framer-motion";
import { RadialFadeBackground } from "../ui/radial-fade-background";
const RadialFadeBackgroundShowcase = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[80vw] h-[80vh] border border-neutral-800 relative rounded-md overflow-hidden flex items-center justify-center">
        <motion.h1
          className="text-5xl font-medium"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
        >
          Radial Fade Background
        </motion.h1>
        <RadialFadeBackground
          centerX={0}
          centerY={0}
          color="hsl(var(--primary))"
          outerOpacity={0.6}
        />
      </div>
    </div>
  );
};

export default RadialFadeBackgroundShowcase;
