"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValue } from "framer-motion";
import {
  Children,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export type CarouselContextType = {
  index: number;
  setIndex: (newIndex: number) => void;
  itemsCount: number;
  setItemsCount: (newItemsCount: number) => void;
};

const CarouselContext = createContext<CarouselContextType | undefined>(
  undefined
);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within an CarouselProvider");
  }
  return context;
}

export type CarouselProviderProps = {
  children: ReactNode;
};

function CarouselProvider({ children }: CarouselProviderProps) {
  const [index, setIndex] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);

  return (
    <CarouselContext.Provider
      value={{
        index,
        setIndex,
        itemsCount,
        setItemsCount,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
}

export type CarouselProps = {
  children: ReactNode;
  className?: string;
};

function Carousel({ children, className }: CarouselProps) {
  return (
    <CarouselProvider>
      <div className={cn("group/hover relative", className)}>
        <div className="overflow-hidden">{children}</div>
      </div>
    </CarouselProvider>
  );
}

export type CarouselIndicatorProps = {
  className?: string;
  classNameButton?: string;
};

function CarouselIndicator({
  className,
  classNameButton,
}: CarouselIndicatorProps) {
  const { index, itemsCount, setIndex } = useCarousel();

  return (
    <div
      className={cn(
        "absolute bottom-0 z-10 flex w-full items-center justify-center ",
        className
      )}
    >
      <div className="flex space-x-2">
        {Array.from({ length: itemsCount }, (_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={cn(
              "h-2 w-2 rounded-full transition-opacity duration-300",
              index === i ? "bg-muted-foreground" : "bg-muted-foreground/60",
              classNameButton
            )}
          />
        ))}
      </div>
    </div>
  );
}

export type CarouselContentProps = {
  children: ReactNode;
  className?: string;
};

function CarouselContent({ children, className }: CarouselContentProps) {
  const { index, setIndex, setItemsCount } = useCarousel();
  const [visibleItemsCount, setVisibleItemsCount] = useState(1);
  const dragX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsLength = Children.count(children);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const options = {
      root: containerRef.current,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      const visibleCount = entries.filter(
        (entry) => entry.isIntersecting
      ).length;
      setVisibleItemsCount(visibleCount);
    }, options);

    const childNodes = containerRef.current.children;
    Array.from(childNodes).forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [children, setItemsCount]);

  useEffect(() => {
    setItemsCount(itemsLength);
  }, [itemsLength, setItemsCount]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -10 && index < itemsLength - 1) {
      setIndex(index + 1);
    } else if (x >= 10 && index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      dragMomentum={false}
      style={{
        x: dragX,
      }}
      animate={{
        translateX: `-${index * (100 / visibleItemsCount)}%`,
      }}
      onDragEnd={onDragEnd}
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
      ref={containerRef}
    >
      {children}
    </motion.div>
  );
}

export type CarouselItemProps = {
  children: ReactNode;
  className?: string;
};

function CarouselItem({ children, className }: CarouselItemProps) {
  return (
    <motion.div
      className={cn("w-full min-w-0 shrink-0 overflow-hidden", className)}
    >
      {children}
    </motion.div>
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  useCarousel,
};
