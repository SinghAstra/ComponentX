"use client";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

type Position = "right" | "top" | "left" | "bottom";
type Span = "small" | "medium" | "large";

export interface ConicBackgroundProps
  extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  position?: Position;
  angleSpan?: Span;
  backgroundSpan?: Span;
  colorOne?: string;
  colorTwo?: string;
  blur?: boolean;
  opacity?: number;
}

export const ConicBackground = React.forwardRef<
  HTMLElement,
  ConicBackgroundProps
>(
  (
    {
      asChild,
      className,
      position = "right",
      angleSpan = "medium",
      backgroundSpan = "large",
      colorOne = "hsl(var(--primary)/0.4)",
      colorTwo = "hsl(var(--primary))",
      blur = false,
      opacity = 1,
      children,
      style,
      ...props
    },
    ref
  ) => {
    // Position anchors for the conic gradient origin
    const positionVal = {
      right: { from: "180deg", x: "100%", y: "50%" },
      top: { from: "90deg", x: "50%", y: "0%" },
      left: { from: "0deg", x: "0%", y: "50%" },
      bottom: { from: "270deg", x: "50%", y: "100%" },
    }[position];

    // Angle sweep controls
    const angleStops = {
      small: { start: 45, mid: 90, end: 135 },
      medium: { start: 30, mid: 90, end: 150 },
      large: { start: 15, mid: 90, end: 165 },
    }[angleSpan];

    // Radial mask falloff
    const backgroundStops = {
      small:
        "rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0.1) 100%",
      medium:
        "rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 30%, rgba(255,255,255,0.1) 100%",
      large:
        "rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.1) 100%",
    }[backgroundSpan];

    const conic = `conic-gradient(from ${positionVal.from} at ${positionVal.x} ${positionVal.y}, ${colorOne} ${angleStops.start}deg, ${colorTwo} ${angleStops.mid}deg, ${colorOne} ${angleStops.end}deg)`;
    const mask = `radial-gradient(circle at ${positionVal.x} ${positionVal.y}, ${backgroundStops})`;

    // Put computed values into CSS vars so we can target ::before via Tailwind arbitrary properties.
    const Comp: any = asChild ? Slot : "div";
    const cssVars = {
      "--cb-image": conic,
      "--cb-mask": mask,
      "--cb-opacity": String(opacity),
    } as React.CSSProperties;

    return (
      <Comp
        ref={ref}
        // Ensure stacking and clipping are predictable on host
        className={cn(
          // Host element setup
          "relative isolate overflow-hidden",
          // ::before as the actual background layer
          // content: pseudo; absolute fill; no pointer capture; under content
          // inherit border radius via arbitrary value
          'before:content-[""] before:absolute before:inset-0 before:pointer-events-none before:-z-10 before:opacity-[var(--cb-opacity)] before:rounded-[inherit]',
          // background image and mask via CSS vars
          "before:bg-[image:var(--cb-image)] before:[mask-image:var(--cb-mask)] before:[-webkit-mask-image:var(--cb-mask)]",
          blur ? "before:blur-sm" : "",
          className
        )}
        // apply css variables on the host element
        style={{ ...cssVars, ...style }}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

ConicBackground.displayName = "ConicBackground";
