"use client";

import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function HeroContent() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-[90vw] h-72 bg-purple-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-900/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 text-center min-h-screen justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm uppercase tracking-widest text-purple-400 font-mono mb-4 block">
            Elevate your projects
          </span>
          <h1 className="max-w-3xl font-medium text-6xl tracking-tight md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-indigo-200">
            {siteConfig.name}
          </h1>
        </motion.div>

        <motion.p
          className="max-w-lg text-xl text-foreground/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Collection of Reusable UI Components.
          <br />
          <span className="text-purple-400">Simple Copy Paste</span> and Elevate
          UI.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
            y: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: 1.5,
            },
          }}
        >
          <ChevronDown className="w-6 h-6 text-foreground/50" />
        </motion.div>
      </div>
    </div>
  );
}
