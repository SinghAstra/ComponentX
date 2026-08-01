import { cn } from "@/lib/utils";
import * as React from "react";

export interface HoverEdgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  side?: "top" | "bottom" | "left" | "right";
  origin?: "start" | "end";
  thickness?: number | string;
  color?: string;
  duration?: number;
  active?: boolean;
}

const positionClasses = {
  top: "top-0 left-0 right-0",
  bottom: "bottom-0 left-0 right-0",
  left: "left-0 top-0 bottom-0",
  right: "right-0 top-0 bottom-0",
};

const HoverEdge = React.forwardRef<HTMLSpanElement, HoverEdgeProps>(
  (
    {
      className,
      children,
      side = "bottom",
      origin = "start",
      thickness = 1,
      color = "var(--primary)",
      duration = 300,
      active = false,
      ...props
    },
    ref,
  ) => {
    const isHorizontal = side === "top" || side === "bottom";

    const getAnimationClasses = () => {
      const scaleAxis = isHorizontal ? "scale-x" : "scale-y";
      const [restOrigin, activeOrigin] = isHorizontal
        ? origin === "start"
          ? ["origin-right", "origin-left"]
          : ["origin-left", "origin-right"]
        : origin === "start"
          ? ["origin-bottom", "origin-top"]
          : ["origin-top", "origin-bottom"];

      if (active) {
        return cn(`${scaleAxis}-100`, activeOrigin);
      }

      return cn(
        `${scaleAxis}-0`,
        restOrigin,
        `group-hover/underline:${scaleAxis}-100`,
        `group-hover/underline:${activeOrigin}`,
        `group-focus-within/underline:${scaleAxis}-100`,
        `group-focus-within/underline:${activeOrigin}`,
      );
    };

    return (
      <span
        ref={ref}
        className={cn("relative inline-flex group/underline", className)}
        {...props}
      >
        {children}
        <span
          className={cn(
            "absolute pointer-events-none transition-transform motion-reduce:transition-none",
            positionClasses[side],
            getAnimationClasses(),
          )}
          style={{
            backgroundColor: color,
            transitionDuration: `${duration}ms`,
            ...(isHorizontal ? { height: thickness } : { width: thickness }),
          }}
          aria-hidden="true"
        />
      </span>
    );
  },
);

HoverEdge.displayName = "HoverEdge";

export { HoverEdge };
