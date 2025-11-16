'use client';

import { cn } from '@/lib/utils';
import { fadeScaleInVariant } from '@/lib/variants';
import { motion } from 'framer-motion';
import { createContext, useContext, useState, type ReactNode } from 'react';

type PopoverAlign =
  | 'bottom-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'top-left'
  | 'top-right'
  | 'left-center'
  | 'left-top'
  | 'left-bottom'
  | 'right-center'
  | 'right-top'
  | 'right-bottom';

const alignmentClasses = {
  'bottom-left': 'top-[100%] left-0',
  'bottom-right': 'top-[100%] right-0',
  'bottom-center': 'top-[100%] left-[50%] -translate-x-1/2',
  'top-left': 'bottom-[100%] left-0',
  'top-right': 'bottom-[100%] right-0',
  'top-center': 'bottom-[100%] left-[50%] -translate-x-1/2',
  'left-top': 'right-[100%] top-0',
  'left-bottom': 'right-[100%] bottom-0',
  'left-center': 'right-[100%] top-[50%] -translate-y-1/2',
  'right-top': 'left-[100%] top-0',
  'right-bottom': 'left-[100%] bottom-0',
  'right-center': 'left-[100%] top-[50%] -translate-y-1/2',
};

export type HoverPopOverContextType = {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
  align: PopoverAlign;
};

export type HoverPopOverProviderProps = {
  children: ReactNode;
  align?: PopoverAlign;
};

export type HoverPopOverProps = {
  children: ReactNode;
  className?: string;
  align?: PopoverAlign;
};

export type HoverPopOverTriggerProps = {
  children: ReactNode;
  className?: string;
};

export type HoverPopOverContentProps = {
  children: ReactNode;
  className?: string;
};

const HoverPopOverContext = createContext<HoverPopOverContextType | undefined>(
  undefined,
);

function useHoverPopOver() {
  const context = useContext(HoverPopOverContext);
  if (!context) {
    throw new Error(
      'useHoverPopOver must be used within a HoverPopOverProvider',
    );
  }
  return context;
}

function HoverPopOverProvider({
  children,
  align = 'bottom-center',
}: HoverPopOverProviderProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <HoverPopOverContext.Provider
      value={{
        isVisible,
        setIsVisible,
        align,
      }}
    >
      {children}
    </HoverPopOverContext.Provider>
  );
}

function HoverPopOver({
  children,
  align = 'bottom-center',
}: HoverPopOverProps) {
  return (
    <HoverPopOverProvider align={align}>
      <HoverPopOverWrapper>{children}</HoverPopOverWrapper>
    </HoverPopOverProvider>
  );
}

function HoverPopOverWrapper({ children }: { children: ReactNode }) {
  const { setIsVisible } = useHoverPopOver();
  return (
    <div className="relative" onMouseLeave={() => setIsVisible(false)}>
      {children}
    </div>
  );
}

function HoverPopOverTrigger({
  children,
  className,
}: HoverPopOverTriggerProps) {
  const { setIsVisible } = useHoverPopOver();

  return (
    <div className={className} onMouseEnter={() => setIsVisible(true)}>
      {children}
    </div>
  );
}

function HoverPopOverContent({
  children,
  className,
}: HoverPopOverContentProps) {
  const { isVisible, align } = useHoverPopOver();

  if (!isVisible) return null;

  return (
    <motion.div
      variants={fadeScaleInVariant}
      initial="hidden"
      animate="visible"
      className={cn('absolute z-50', alignmentClasses[align], className)}
    >
      {children}
    </motion.div>
  );
}

export {
  HoverPopOver,
  HoverPopOverContent,
  HoverPopOverTrigger,
  useHoverPopOver,
};
