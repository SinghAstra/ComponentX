"use client";

import { ReactNode, useEffect, useRef } from "react";

const MovingBorder = ({ children }: { children: ReactNode }) => {
  const movingBorderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateBeforeWidth() {
      const movingBorder = movingBorderRef.current;
      if (!movingBorder) return;

      const parentWidth = movingBorder.offsetWidth;
      const parentHeight = movingBorder.offsetHeight;
      const maxDimension = Math.max(2 * parentWidth, 2 * parentHeight);

      console.log("maxDimension is ", maxDimension);

      movingBorder.style.setProperty("--before-width", `${maxDimension}px`);
      movingBorder.style.setProperty("--before-height", `${maxDimension}px`);
    }

    updateBeforeWidth();
    window.addEventListener("resize", updateBeforeWidth);

    return () => window.removeEventListener("resize", updateBeforeWidth);
  }, [movingBorderRef]);

  return (
    <div className="moving-border p-1" ref={movingBorderRef}>
      {children}
    </div>
  );
};

export default MovingBorder;
