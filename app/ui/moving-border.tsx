"use client";

import { useEffect, useRef } from "react";

const MovingBorder = () => {
  const movingBorderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateBeforeWidth() {
      const movingBorder = movingBorderRef.current;
      if (!movingBorder) return;

      const parentWidth = movingBorder.offsetWidth;
      const parentHeight = movingBorder.offsetHeight;
      const maxDimension = Math.max(2 * parentWidth, 2 * parentHeight);

      movingBorder.style.setProperty("--before-width", `${maxDimension}px`);
      movingBorder.style.setProperty("--before-height", `${maxDimension}px`);
    }

    updateBeforeWidth();
    window.addEventListener("resize", updateBeforeWidth);

    return () => window.removeEventListener("resize", updateBeforeWidth);
  }, [movingBorderRef]);

  return (
    <div
      className="moving-border absolute inset-0 w-full h-full rounded-[inherit] overflow-hidden z-[-1]"
      ref={movingBorderRef}
    />
  );
};

export default MovingBorder;
