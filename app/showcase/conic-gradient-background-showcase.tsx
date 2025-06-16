"use client";

import { motion } from "framer-motion";
import ConicGradientBackground from "../ui/conic-gradient-background";
const ConicGradientBackgroundShowcase = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[80vw] h-[80vh] border border-neutral-800/40 relative rounded-md overflow-hidden flex items-center justify-center">
        <motion.h1
          className="text-5xl font-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
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
