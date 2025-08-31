"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

export type CarouselProviderProps = {
  children: ReactNode;
};

export type CarouselProps = {
  children: ReactNode;
  className?: string;
};

export type CarouselIndicatorRoundedIconProps = {
  className?: string;
  classNameButton?: string;
};

export type CarouselIndicatorLabelProps = {
  className?: string;
  classNameButton?: string;
  labels: string[];
};

export type CarouselContentProps = {
  children: ReactNode;
  className?: string;
};

export type CarouselItemProps = {
  children: ReactNode;
  className?: string;
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

function Carousel({ children, className }: CarouselProps) {
  return (
    <CarouselProvider>
      <div className={cn("relative", className)}>
        <div className="overflow-hidden">{children}</div>
      </div>
    </CarouselProvider>
  );
}

function CarouselIndicatorRoundedIcon({
  className,
  classNameButton,
}: CarouselIndicatorRoundedIconProps) {
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

function CarouselIndicatorLabel({
  className,
  classNameButton,
  labels,
}: CarouselIndicatorLabelProps) {
  const { index, itemsCount, setIndex } = useCarousel();

  if (labels.length !== itemsCount) {
    return;
  }

  return (
    <div className={cn("flex w-full items-center justify-center ", className)}>
      <div className="flex space-x-2">
        {Array.from({ length: itemsCount }, (_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={cn(
              index === i ? "text-foreground" : "text-muted-foreground/60",
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

function CarouselItem({ children, className }: CarouselItemProps) {
  return (
    <motion.div
      className={cn(
        "w-full min-w-0 shrink-0 overflow-hidden border",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

function CarouselBottomNavigation() {
  const { index, setIndex, itemsCount } = useCarousel();

  const handlePrevious = () => {
    setIndex(index > 0 ? index - 1 : itemsCount - 1);
  };
  const handleNext = () => {
    setIndex((index + 1) % itemsCount);
  };
  return (
    <div className="flex gap-2">
      <button
        className="bg-muted/60 text-muted-foreground hover:text-foreground rounded-full cursor-pointer"
        onClick={handlePrevious}
      >
        <ChevronLeft className="h-4 w-4 m-1" />
      </button>
      <button
        className="bg-muted/60 text-muted-foreground hover:text-foreground rounded-full cursor-pointer"
        onClick={handleNext}
      >
        <ChevronRight className="h-4 w-4 m-1" />
      </button>
    </div>
  );
}

function CarouselFooter({ children }: { children: ReactNode }) {
  return <div className="w-full z-10 flex">{children}</div>;
}

export {
  Carousel,
  CarouselBottomNavigation,
  CarouselContent,
  CarouselFooter,
  CarouselIndicatorLabel,
  CarouselIndicatorRoundedIcon,
  CarouselItem,
  useCarousel,
};
