"use client";

import { cn } from "@/lib/utils";
import { fadeInVariant } from "@/lib/variants";
import { motion } from "framer-motion";
import type React from "react";
import { Children, cloneElement, isValidElement, useState } from "react";

type PopoverAlign =
  | "bottom-center"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "top-left"
  | "top-right"
  | "left-center"
  | "left-top"
  | "left-bottom"
  | "right-center"
  | "right-top"
  | "right-bottom";

const alignmentClasses = {
  "bottom-left": "top-[100%] left-0",
  "bottom-right": "top-[100%] right-0",
  "bottom-center": "top-[100%] left-[50%] -translate-x-1/2",
  "top-left": "bottom-[100%] left-0",
  "top-right": "bottom-[100%] right-0",
  "top-center": "bottom-[100%] left-[50%] -translate-x-1/2",
  "left-top": "right-[100%] top-0",
  "left-bottom": "right-[100%] bottom-0",
  "left-center": "right-[100%] top-[50%] -translate-y-1/2",
  "right-top": "left-[100%] top-0",
  "right-bottom": "left-[100%] bottom-0",
  "right-center": "left-[100%] top-[50%] -translate-y-1/2",
};

interface HoverPopOverProps {
  align?: PopoverAlign;
  children: React.ReactNode;
}

interface HoverPopOverTriggerProps {
  children: React.ReactElement;
}

interface HoverPopOverContentProps {
  children: React.ReactNode;
  className?: string;
}

const HoverPopOverTrigger = ({ children }: HoverPopOverTriggerProps) => {
  return children;
};

const HoverPopOverContent = ({
  children,
  className,
}: HoverPopOverContentProps) => {
  return <div className={className}>{children}</div>;
};

const HoverPopOver = ({
  align = "bottom-center",
  children,
}: HoverPopOverProps) => {
  const [isPopOverVisible, setIsPopOverVisible] = useState(false);

  let triggerElement: React.ReactElement | null = null;
  let contentElement: React.ReactNode | null = null;

  // Iterate through children to find the Trigger and Content components
  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      if (child.type === HoverPopOverTrigger) {
        // Clone the trigger element and inject mouse event handlers
        triggerElement = cloneElement(child.props.children, {
          onMouseEnter: () => setIsPopOverVisible(true),
        });
      } else if (child.type === HoverPopOverContent) {
        contentElement = child;
      }
    }
  });

  return (
    <div
      className="relative inline-block"
      onMouseLeave={() => setIsPopOverVisible(false)} // Mouse leave on the whole container
    >
      {triggerElement}
      {isPopOverVisible && contentElement && (
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          className={cn(
            "absolute w-64 bg-muted/20 backdrop-blur-lg z-50 border divide-y",
            alignmentClasses[align],
            (contentElement as React.ReactElement<HoverPopOverContentProps>)
              .props.className
          )}
        >
          {
            (contentElement as React.ReactElement<HoverPopOverContentProps>)
              .props.children
          }
        </motion.div>
      )}
    </div>
  );
};

// Attach sub-components to the main component for easy access
HoverPopOver.Trigger = HoverPopOverTrigger;
HoverPopOver.Content = HoverPopOverContent;

export default HoverPopOver;
