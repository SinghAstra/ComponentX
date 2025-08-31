"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type React from "react";
import { createContext, useContext, useEffect, useRef, useState } from "react";

type TabsCtx = {
  activeIndex: number;
  setActiveIndex: (i: number) => void;
  registerTabRef: (index: number, el: HTMLButtonElement | null) => void;
  indicator: { width: number; left: number };
};

const TabsContext = createContext<TabsCtx | null>(null);

function useTabs() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("Tabs components must be used within <Tabs>");
  return ctx;
}

type TabsProps = {
  defaultIndex?: number;
  className?: string;
  children: React.ReactNode;
};

export function Tabs({ defaultIndex = 0, className, children }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const tabRefs = useRef<HTMLButtonElement[]>([]);
  const [indicator, setIndicator] = useState({ width: 0, left: 0 });

  const registerTabRef = (index: number, el: HTMLButtonElement | null) => {
    if (el) tabRefs.current[index] = el;
  };

  useEffect(() => {
    const el = tabRefs.current[activeIndex];
    if (el) setIndicator({ width: el.offsetWidth, left: el.offsetLeft });
  }, [activeIndex]);

  return (
    <TabsContext.Provider
      value={{ activeIndex, setActiveIndex, registerTabRef, indicator }}
    >
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

type TabsListProps = {
  className?: string;
  children: React.ReactNode;
};

export function TabsList({ className, children }: TabsListProps) {
  const { indicator } = useTabs();
  return (
    <div className={cn("relative flex", className)} role="tablist">
      {children}
      <motion.div
        className="absolute bottom-0 h-0.5 bg-foreground"
        animate={{ width: indicator.width, left: indicator.left }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
  const { activeIndex, setActiveIndex, registerTabRef } = useTabs();
  const isActive = activeIndex === index;

  return (
    <button
      ref={(el) => registerTabRef(index, el)}
      onClick={() => setActiveIndex(index)}
      role="tab"
      aria-selected={isActive}
      aria-controls={`tab-panel-${index}`}
      id={`tab-${index}`}
      className={cn(
        "px-4 py-2 text-sm cursor-pointer",
        isActive ? "text-foreground" : "text-muted-foreground",
        className
      )}
    >
      {children}
    </button>
  );
}

type TabsContentProps = {
  index: number;
  className?: string;
  children: React.ReactNode;
};

export function TabsContent({ index, className, children }: TabsContentProps) {
  const { activeIndex } = useTabs();
  if (activeIndex !== index) return null;

  return (
    <div
      role="tabpanel"
      id={`tab-panel-${index}`}
      aria-labelledby={`tab-${index}`}
      className={cn("mt-4", className)}
    >
      {children}
    </div>
  );
}
