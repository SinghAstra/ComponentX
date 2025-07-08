"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GradientTextProps {
  text: string;
  className?: string;
}

export function GradientText({ text, className }: GradientTextProps) {
  return (
    <motion.div
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{
        duration: 3,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
      className={cn(
        // Using CSS custom properties that map to shadcn theme colors
        "bg-gradient-to-r from-primary via-primary/80 to-accent bg-[length:200%_100%]",
        "bg-clip-text text-transparent",
        className
      )}
      style={{
        // Fallback gradient using CSS custom properties
        backgroundImage:
          "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary) / 0.8), hsl(var(--accent)))",
      }}
    >
      {text}
    </motion.div>
  );
}
