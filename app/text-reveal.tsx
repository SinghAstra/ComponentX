"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
  // Split text into individual characters for animation
  const characters = text.split("");

  return (
    <div className={cn("overflow-hidden", className)}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.05, // Stagger each character
            ease: [0.25, 0.25, 0, 1],
          }}
          className="inline-block text-foreground"
        >
          {/* Preserve spaces */}
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
}
