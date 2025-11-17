"use client";

import { cn } from "@/lib/utils";
import { motion, MotionValue, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type SliderContextType = {
  activeIndex: number;
  setActiveIndex: (i: number) => void;
  itemsCount: number;
  setItemsCount: (count: number) => void;
  dragX: MotionValue<number>;
};

const SliderContext = createContext<SliderContextType | null>(null);

export function useSlider() {
  const ctx = useContext(SliderContext);
  if (!ctx) throw new Error("Slider components must be used within <Slider>");
  return ctx;
}

type SliderProps = {
  children: ReactNode;
  className?: string;
  initialIndex?: number;
};

export function Slider({ children, className, initialIndex = 0 }: SliderProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [itemsCount, setItemsCount] = useState(0);
  const dragX = useMotionValue(0);

  return (
    <SliderContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
        itemsCount,
        setItemsCount,
        dragX,
      }}
    >
      <div className={cn("relative overflow-hidden w-full", className)}>
        {children}
      </div>
    </SliderContext.Provider>
  );
}

type SliderNavProps = {
  children: ReactNode;
  className?: string;
};

export function SliderNav({ children, className }: SliderNavProps) {
  const { activeIndex } = useSlider();
  const navRefs = useRef<HTMLButtonElement[]>([]);
  const [activeNavPosition, setActiveNavPosition] = useState({
    width: 0,
    left: 0,
  });

  const registerNavRef = (index: number, el: HTMLButtonElement | null) => {
    if (el) navRefs.current[index] = el;
  };

  useEffect(() => {
    const element = navRefs.current[activeIndex];
    if (element) {
      setActiveNavPosition({
        width: element.offsetWidth,
        left: element.offsetLeft,
      });
    }
  }, [activeIndex]);

  return (
    <div className={cn("relative flex", className)} role="tablist">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...child.props,
            index,
            registerRef: registerNavRef,
          });
        }
        return child;
      })}
      <motion.div
        className="absolute bottom-0 h-0.5 bg-foreground"
        animate={{
          width: activeNavPosition.width,
          left: activeNavPosition.left,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </div>
  );
}

type SliderNavTriggerProps = {
  children: ReactNode;
  className?: string;
  index?: number;
  registerRef?: (index: number, el: HTMLButtonElement | null) => void;
};

export function SliderNavTrigger({
  children,
  className,
  index = 0,
  registerRef,
}: SliderNavTriggerProps) {
  const { activeIndex, setActiveIndex } = useSlider();
  const isActive = activeIndex === index;

  return (
    <button
      ref={(el) => registerRef?.(index, el)}
      onClick={() => setActiveIndex(index)}
      role="tab"
      className={cn(
        "px-4 py-2 text-sm cursor-pointer transition-colors",
        isActive ? "text-foreground" : "text-muted-foreground",
        className
      )}
    >
      {children}
    </button>
  );
}

type SliderContentProps = {
  children: ReactNode;
  className?: string;
  onDragEnd?: (direction: "left" | "right" | "none") => void;
};

export function SliderContent({
  children,
  className,
  onDragEnd,
}: SliderContentProps) {
  const { activeIndex, setActiveIndex, dragX, setItemsCount } = useSlider();
  const itemsLength = React.Children.count(children);

  useEffect(() => {
    setItemsCount(itemsLength);
  }, [itemsLength, setItemsCount]);

  const handleDragEnd = () => {
    const x = dragX.get() as number;

    let direction: "left" | "right" | "none" = "none";
    if (x <= -10 && activeIndex < itemsLength - 1) {
      setActiveIndex(activeIndex + 1);
      direction = "left";
    } else if (x >= 10 && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      direction = "right";
    }
    onDragEnd?.(direction);
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragMomentum={false}
      style={{ x: dragX }}
      animate={{
        translateX: `-${activeIndex * 100}%`,
      }}
      onDragEnd={handleDragEnd}
      transition={{
        damping: 18,
        stiffness: 90,
        type: "spring",
        duration: 0.2,
      }}
      className={cn(
        "flex items-center",
        "cursor-grab active:cursor-grabbing",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

type SliderItemProps = {
  children: ReactNode;
  className?: string;
};

export function SliderItem({ children, className }: SliderItemProps) {
  return (
    <motion.div
      className={cn("w-full min-w-0 shrink-0 overflow-hidden", className)}
    >
      {children}
    </motion.div>
  );
}

type SliderIndicatorProps = {
  className?: string;
  classNameButton?: string;
};

export function SliderIndicatorDots({
  className,
  classNameButton,
}: SliderIndicatorProps) {
  const { activeIndex, itemsCount, setActiveIndex } = useSlider();

  return (
    <div className={cn("flex w-full items-center justify-center", className)}>
      <div className="flex gap-2">
        {Array.from({ length: itemsCount }, (_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300",
              activeIndex === i ? "bg-foreground" : "bg-muted-foreground/60",
              classNameButton
            )}
          />
        ))}
      </div>
    </div>
  );
}

type SliderIndicatorLabelsProps = {
  labels: string[];
  className?: string;
  classNameButton?: string;
};

export function SliderIndicatorLabels({
  labels,
  className,
  classNameButton,
}: SliderIndicatorLabelsProps) {
  const { activeIndex, itemsCount, setActiveIndex } = useSlider();

  if (labels.length !== itemsCount) return null;

  return (
    <div className={cn("flex w-full items-center justify-center", className)}>
      <div className="flex gap-2">
        {Array.from({ length: itemsCount }, (_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={cn(
              "transition-colors duration-200",
              activeIndex === i
                ? "text-foreground"
                : "text-muted-foreground/60",
              classNameButton
            )}
          >
            {labels[i]}
          </button>
        ))}
      </div>
    </div>
  );
}

export function SliderNavigation() {
  const { activeIndex, setActiveIndex, itemsCount } = useSlider();

  const handlePrevious = () => {
    setActiveIndex(activeIndex > 0 ? activeIndex - 1 : itemsCount - 1);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % itemsCount);
  };

  return (
    <div className="flex gap-2">
      <button
        className="bg-muted/60 text-muted-foreground hover:text-foreground rounded-full cursor-pointer p-1 transition-colors"
        onClick={handlePrevious}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        className="bg-muted/60 text-muted-foreground hover:text-foreground rounded-full cursor-pointer p-1 transition-colors"
        onClick={handleNext}
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
