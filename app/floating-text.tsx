"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FloatingTextProps {
  text: string;
  className?: string;
}

export function FloatingText({ text, className }: FloatingTextProps) {
  return (
    <motion.div
      // Continuous floating animation
      animate={{
        y: [-10, 10, -10],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
      }}
      className={cn("text-foreground", className)}
    >
      {text}
    </motion.div>
  );
}
