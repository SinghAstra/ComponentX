import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect, useRef } from "react";

const MovingBorder = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const movingBorderContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateBeforeWidth() {
      const movingBorderContainer = movingBorderContainerRef.current;
      if (!movingBorderContainer) return;
      const parentWidth = movingBorderContainer.offsetWidth;
      const parentHeight = movingBorderContainer.offsetHeight;
      const maxDimension = Math.max(2 * parentWidth, 2 * parentHeight);
      movingBorderContainer.style.setProperty(
        "--before-width",
        `${maxDimension}px`
      );
      movingBorderContainer.style.setProperty(
        "--before-height",
        `${maxDimension}px`
      );
    }

    updateBeforeWidth();
    window.addEventListener("resize", updateBeforeWidth);
    return () => window.removeEventListener("resize", updateBeforeWidth);
  }, []);
  return (
    <div
      className={cn(
        "moving-border-container p-1 relative overflow-hidden",
        className
      )}
      ref={movingBorderContainerRef}
    >
      <div>{children}</div>
    </div>
  );
};

export default MovingBorder;
