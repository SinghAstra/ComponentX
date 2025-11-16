import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type BorderPosition = "top" | "bottom" | "left" | "right";
export type BorderHoverAnimationDirection = "ltr" | "rtl";

export interface BorderHoverLinkProps {
  children: ReactNode;
  borderColor?: string;
  className?: string;
  duration?: number;
  borderHeight?: string;
  borderPosition?: BorderPosition;
  animationDirection?: BorderHoverAnimationDirection;
}

const BorderHoverLink = ({
  children,
  borderColor = "hsl(var(--primary))",
  className,
  duration = 700,
  borderHeight = "1px",
  borderPosition = "bottom",
  animationDirection = "ltr",
}: BorderHoverLinkProps) => {
  const positionClasses = {
    top: "top-0 left-0 w-full",
    bottom: "bottom-0 left-0 w-full",
    left: "left-0 top-0 h-full",
    right: "right-0 top-0 h-full",
  };

  const getAnimationClasses = () => {
    const isHorizontal =
      borderPosition === "top" || borderPosition === "bottom";

    if (isHorizontal) {
      return animationDirection === "ltr"
        ? "scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left"
        : "scale-x-0 origin-left group-hover:scale-x-100 group-hover:origin-right";
    } else {
      return animationDirection === "ltr"
        ? "scale-y-0 origin-bottom group-hover:scale-y-100 group-hover:origin-top"
        : "scale-y-0 origin-top group-hover:scale-y-100 group-hover:origin-bottom";
    }
  };

  const sizeClass =
    borderPosition === "left" || borderPosition === "right"
      ? "w-[1px]"
      : `h-[${borderHeight}]`;

  return (
    <span className={cn("relative group cursor-pointer", className)}>
      {children}
      <span
        className={cn(
          "absolute",
          positionClasses[borderPosition],
          sizeClass,
          "transition-transform",
          getAnimationClasses()
        )}
        style={{
          backgroundColor: borderColor,
          transitionDuration: `${duration}ms`,
        }}
      />
    </span>
  );
};

export default BorderHoverLink;
