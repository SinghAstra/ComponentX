"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type React from "react";
import { CSSProperties } from "react";

export type MovingBorderSpeed = "slow" | "normal" | "fast";
export type MovingBorderDirection = "clockwise" | "counterclockwise";
export type MovingBorderBlendMode =
  | "normal"
  | "screen"
  | "overlay"
  | "multiply"
  | "lighten";

export interface MovingBorderProps {
  // Color & appearance
  color?: string;

  // Animation
  duration?: number;
  speed?: MovingBorderSpeed;
  direction?: MovingBorderDirection;

  // Content
  children: React.ReactNode;

  // Styling
  className?: string;
  blendMode?: MovingBorderBlendMode;
  opacity?: number;
  blur?: number;
}

const MovingBorder = ({
  color = "hsl(var(--primary))",
  duration = 3,
  speed = "normal",
  direction = "clockwise",
  children,
  className = "",
  blendMode = "normal",
  opacity = 1,
  blur = 0,
}: MovingBorderProps) => {
  const speedMap = {
    slow: duration * 1.5,
    normal: duration,
    fast: duration * 0.6,
  };

  const animationDuration = speedMap[speed];
  const rotation = direction === "clockwise" ? 360 : -360;

  const dimensions = {
    width: 1000,
    height: 1000,
  };

  const glowStyle: CSSProperties = {
    background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${color} 20deg, transparent 90deg)`,
    filter: `blur(${blur}px)`,
    opacity,
    mixBlendMode: blendMode,
    width: `${dimensions.width}%`,
    height: `${dimensions.height}%`,
  };

  return (
    <div
      className={cn(
        "relative border p-[2px] overflow-hidden rounded",
        className
      )}
    >
      <motion.div
        className="absolute top-1/2 left-1/2 pointer-events-none z-[-1]"
        style={{
          ...glowStyle,
          x: "-50%",
          y: "-50%",
        }}
        animate={{ rotate: rotation }}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="z-10 bg-background">{children}</div>
    </div>
  );
};

export default MovingBorder;
