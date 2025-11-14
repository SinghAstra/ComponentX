"use client";

import type React from "react";
import { CSSProperties } from "react";

export type MovingBorderSpeed = "slow" | "normal" | "fast";
export type MovingBorderDirection = "clockwise" | "counterclockwise";
export type MovingBorderSize = "small" | "medium" | "large" | "custom";
export type MovingBorderBlendMode =
  | "normal"
  | "screen"
  | "overlay"
  | "multiply"
  | "lighten";
export type MovingBorderType = "glow" | "border" | "both";
export type MovingBorderPositioning = "absolute" | "relative" | "fixed";

export interface MovingBorderCustomSize {
  width: string;
  height: string;
}

export interface MovingBorderProps {
  // Color & appearance
  color?: string;
  glowColor?: string;
  borderWidth?: number;

  // Animation
  duration?: number;
  speed?: MovingBorderSpeed;
  direction?: MovingBorderDirection;

  // Size & positioning
  size?: MovingBorderSize;
  customSize?: MovingBorderCustomSize;

  // Content
  children?: React.ReactNode;

  // Styling
  className?: string;
  blendMode?: MovingBorderBlendMode;
  opacity?: number;
  blur?: number;

  // Effect type
  type?: MovingBorderType;

  // Positioning
  position?: MovingBorderPositioning;
}

const MovingBorder = ({
  color = "hsl(var(--primary))",
  glowColor,
  borderWidth = 2,
  duration = 3,
  speed = "normal",
  direction = "clockwise",
  size = "large",
  customSize,
  children,
  className = "",
  blendMode = "screen",
  opacity = 1,
  blur = 10,
  type = "glow",
  position = "absolute",
}: MovingBorderProps) => {
  // Calculate animation duration based on speed
  const speedMap = {
    slow: duration * 1.5,
    normal: duration,
    fast: duration * 0.6,
  };

  const animationDuration = speedMap[speed];
  const rotation = direction === "clockwise" ? "360deg" : "-360deg";

  const sizeMap = {
    small: { width: "300%", height: "300%" },
    medium: { width: "800%", height: "800%" },
    large: { width: "2000%", height: "2000%" },
    custom: customSize || { width: "2000%", height: "2000%" },
  };

  const dimensions = sizeMap[size];

  const glowStyle: CSSProperties = {
    background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${color} 20deg, transparent 90deg)`,
    animation: `rotate ${animationDuration}s linear infinite`,
    filter: `blur(${blur}px)`,
    opacity,
    mixBlendMode: blendMode,
  };

  const borderStyle: CSSProperties = {
    background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${
      glowColor || color
    } 30deg, transparent 90deg)`,
    animation: `rotate-border ${animationDuration * 0.8}s linear infinite`,
    opacity: opacity * 0.8,
    mixBlendMode: "normal",
  };

  return (
    <>
      <style>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(${rotation});
          }
        }

        @keyframes rotate-border {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(${rotation});
          }
        }
      `}</style>

      {children ? (
        <div className={`relative ${className}`}>
          {(type === "glow" || type === "both") && (
            <div
              className={`${position} pointer-events-none z-[-1]`}
              style={{
                width: dimensions.width,
                height: dimensions.height,
                ...glowStyle,
              }}
            />
          )}

          {(type === "border" || type === "both") && (
            <div
              className={`${position} pointer-events-none z-[-1]`}
              style={{
                width: dimensions.width,
                height: dimensions.height,
                borderWidth: `${borderWidth}px`,
                borderStyle: "solid",
                borderColor: glowColor || color,
                ...borderStyle,
              }}
            />
          )}

          <div className="relative z-10">{children}</div>
        </div>
      ) : (
        <div
          className={`${position} z-[-1] pointer-events-none ${className}`}
          style={{
            width: dimensions.width,
            height: dimensions.height,
            ...glowStyle,
          }}
        />
      )}
    </>
  );
};

export default MovingBorder;
