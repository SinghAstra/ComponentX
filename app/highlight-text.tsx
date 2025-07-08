"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface HighlightTextProps {
  text: string;
  highlightWords: string[];
  className?: string;
  delay?: number;
}

export function HighlightText({
  text,
  highlightWords,
  className,
  delay = 0,
}: HighlightTextProps) {
  // Split text into words and check if each should be highlighted
  const words = text.split(" ");

  return (
    <div className={cn("text-foreground", className)}>
      {words.map((word, index) => {
        const isHighlighted = highlightWords.some((hw) =>
          word.toLowerCase().includes(hw.toLowerCase())
        );

        return (
          <span key={index} className="relative inline-block">
            {isHighlighted ? (
              <>
                {/* Animated highlight background */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: delay + index * 0.1,
                    ease: [0.25, 0.25, 0, 1],
                  }}
                  className="absolute inset-0 bg-primary/20 origin-left"
                />
                {/* Highlighted text */}
                <span className="relative text-primary font-semibold">
                  {word}
                </span>
              </>
            ) : (
              <span>{word}</span>
            )}
            {/* Add space between words */}
            {index < words.length - 1 && " "}
          </span>
        );
      })}
    </div>
  );
}
