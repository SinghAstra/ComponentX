'use client';

import { cn } from '@/lib/utils';
import { motion, useMotionValue } from 'framer-motion';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

type TabsCtx = {
  activeIndex: number;
  setActiveIndex: (i: number) => void;
  registerTabLabelRef: (index: number, el: HTMLButtonElement | null) => void;
  activeTabBorderBottomPosition: { width: number; left: number };
};

export type TabItemProps = {
  children: ReactNode;
  className?: string;
};

const TabsContext = createContext<TabsCtx | null>(null);

function useTabs() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Tabs components must be used within <Tabs>');
  return ctx;
}

type TabsProps = {
  className?: string;
  children: React.ReactNode;
};

export function Tabs({ className, children }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<HTMLButtonElement[]>([]);
  const [activeTabBorderBottomPosition, setActiveTabBorderBottomPosition] =
    useState({ width: 0, left: 0 });

  const registerTabLabelRef = (
    index: number,
    element: HTMLButtonElement | null,
  ) => {
    if (element) tabRefs.current[index] = element;
  };

  useEffect(() => {
    const element = tabRefs.current[activeIndex];
    if (element)
      setActiveTabBorderBottomPosition({
        width: element.offsetWidth,
        left: element.offsetLeft,
      });
  }, [activeIndex]);

  return (
    <TabsContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
        registerTabLabelRef,
        activeTabBorderBottomPosition,
      }}
    >
      <div className={cn('w-full overflow-hidden', className)}>{children}</div>
    </TabsContext.Provider>
  );
}

type TabsListProps = {
  className?: string;
  children: React.ReactNode;
};

export function TabsList({ className, children }: TabsListProps) {
  const { activeTabBorderBottomPosition } = useTabs();
  return (
    <div className={cn('relative flex', className)} role="tablist">
      {children}
      <motion.div
        className="absolute bottom-0 h-0.5 bg-foreground"
        animate={{
          width: activeTabBorderBottomPosition.width,
          left: activeTabBorderBottomPosition.left,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </div>
  );
}

type TabsTriggerProps = {
  index: number;
  className?: string;
  children: React.ReactNode;
};

export function TabsTrigger({ index, className, children }: TabsTriggerProps) {
  const { activeIndex, setActiveIndex, registerTabLabelRef } = useTabs();
  const isActive = activeIndex === index;

  return (
    <button
      ref={(el) => registerTabLabelRef(index, el)}
      onClick={() => setActiveIndex(index)}
      role="tab"
      className={cn(
        'px-4 py-2 text-sm cursor-pointer',
        isActive ? 'text-foreground' : 'text-muted-foreground',
        className,
      )}
    >
      {children}
    </button>
  );
}

type TabsContentProps = {
  className?: string;
  children: React.ReactNode;
};

export function TabsContent({ children, className }: TabsContentProps) {
  const { activeIndex, setActiveIndex } = useTabs();
  const tabsItemCount = React.Children.count(children);

  const dragX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -10 && activeIndex < tabsItemCount - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (x >= 10 && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
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
        translateX: `-${activeIndex * 100}%`,
      }}
      onDragEnd={onDragEnd}
      transition={{
        damping: 18,
        stiffness: 90,
        type: 'spring',
        duration: 0.2,
      }}
      className={cn(
        'flex items-center',
        'cursor-grab active:cursor-grabbing',
        className,
      )}
      ref={containerRef}
    >
      {children}
    </motion.div>
  );
}

export function TabItem({ children, className }: TabItemProps) {
  return (
    <motion.div
      className={cn(
        'w-full min-w-0 shrink-0 overflow-hidden border',
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
