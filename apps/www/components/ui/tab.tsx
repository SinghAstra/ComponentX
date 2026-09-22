'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface TabElem {
  label: string;
  content: React.JSX.Element;
}

interface TabsProps {
  tabs: TabElem[];
  tabContentClassName?: string;
}

const Tabs = ({ tabs, tabContentClassName }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const tabRefs = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    if (tabRefs.current[activeTab]) {
      const activeTabElement = tabRefs.current[activeTab];
      setIndicatorStyle({
        width: activeTabElement.offsetWidth,
        left: activeTabElement.offsetLeft,
      });
    }
  }, [activeTab]);

  return (
    <div>
      <div className="flex relative">
        {tabs.map((tab, index) => (
          <button
            key={index}
            ref={(el: HTMLButtonElement | null) => {
              if (el) {
                tabRefs.current[index] = el;
              }
            }}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 text-sm font-medium cursor-pointer ${
              activeTab === index ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            {tab.label}
          </button>
        ))}

        <motion.div
          className="absolute bottom-0 h-0.5 bg-foreground"
          animate={{
            width: indicatorStyle.width,
            left: indicatorStyle.left,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        />
      </div>
      <div className={cn('mt-4', tabContentClassName)}>
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
