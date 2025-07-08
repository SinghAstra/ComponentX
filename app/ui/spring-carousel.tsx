"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
  slideVariants,
  swipeConfidenceThreshold,
  swipePower,
} from "@/lib/variants";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface SpringCarouselItem {
  id: number;
  content: React.ReactNode;
}

interface SpringCarouselProps {
  items: SpringCarouselItem[];
  className?: string;
}

export function SpringCarousel({ items, className = "" }: SpringCarouselProps) {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    let newPage = (page + newDirection) % items.length;
    if (newPage < 0) {
      newPage += items.length;
    }
    setPage(newPage);
    setDirection(newDirection);
  };

  return (
    <div className={`relative w-full max-w-md mx-auto ${className}`}>
      {/* Main carousel container */}
      <div className="relative h-64 overflow-hidden rounded">
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing border"
        >
          {items[page].content}
        </motion.div>

        {/* Navigation arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-background/80 hover:bg-background/90 backdrop-blur-sm"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded bg-background/80 hover:bg-background/90 backdrop-blur-sm"
          onClick={() => paginate(1)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        {/* Bottom dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex justify-center space-x-2  z-10">
          {items.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === page
                  ? "bg-primary scale-125"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              onClick={() => {
                const newDirection = index > page ? 1 : -1;
                setPage(index);
                setDirection(newDirection);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
