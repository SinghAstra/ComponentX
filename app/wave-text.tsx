"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface WaveTextProps {
  text: string;
  className?: string;
}

export function WaveText({ text, className }: WaveTextProps) {
  // Split text into individual characters
  const characters = text.split("");

  return (
    <div className={cn("flex", className)}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 0.1, // Stagger the wave effect
            ease: "easeInOut",
          }}
          className="inline-block text-primary"
        >
          {/* Preserve spaces */}
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
}
