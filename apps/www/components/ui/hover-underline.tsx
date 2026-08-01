import { cn } from "@/lib/utils";
import * as React from "react";

export interface HoverUnderlineProps extends React.HTMLAttributes<HTMLSpanElement> {
  side?: "top" | "bottom" | "left" | "right";
  direction?: "ltr" | "rtl";
  thickness?: number;
  color?: string;
  duration?: number;
}

const HoverUnderline = React.forwardRef<HTMLSpanElement, HoverUnderlineProps>(
  (
    {
      className,
      children,
      side = "bottom",
      direction = "ltr",
      thickness = 1,
      color = "var(--primary)",
      duration = 300,
      ...props
    },
    ref,
  ) => {
    const isHorizontal = side === "top" || side === "bottom";

    const positionClasses = {
      top: "top-0 left-0 right-0",
      bottom: "bottom-0 left-0 right-0",
      left: "left-0 top-0 bottom-0",
      right: "right-0 top-0 bottom-0",
    };

    const getAnimationClasses = () => {
      if (isHorizontal) {
        return direction === "ltr"
          ? "scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left"
          : "scale-x-0 origin-left group-hover:scale-x-100 group-hover:origin-right";
      } else {
        return direction === "ltr"
          ? "scale-y-0 origin-bottom group-hover:scale-y-100 group-hover:origin-top"
          : "scale-y-0 origin-top group-hover:scale-y-100 group-hover:origin-bottom";
      }
    };

    return (
      <span
        ref={ref}
        className={cn("relative inline-flex cursor-pointer group", className)}
        {...props}
      >
        {children}
        <span
          className={cn(
            "absolute pointer-events-none transition-transform",
            positionClasses[side],
            getAnimationClasses(),
          )}
          style={{
            backgroundColor: color,
            transitionDuration: `${duration}ms`,
            ...(isHorizontal ? { height: thickness } : { width: thickness }),
          }}
        />
      </span>
    );
  },
);

HoverUnderline.displayName = "HoverUnderline";

export { HoverUnderline };
