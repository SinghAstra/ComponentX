"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

export interface TOCHeading {
  level: number;
  title: string;
  id: string;
}

interface TableOfContentsProps {
  headings: TOCHeading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});

  const [indicatorStyle, setIndicatorStyle] = useState({
    top: 0,
    height: 0,
    opacity: 0,
  });

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
          break;
        }
      }
    };

    const observerOptions = {
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  useEffect(() => {
    const activeElement = itemRefs.current[activeId];
    if (activeElement) {
      setIndicatorStyle({
        top: activeElement.offsetTop,
        height: activeElement.offsetHeight,
        opacity: 1,
      });
    } else {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeId]);

  if (headings.length === 0) return null;

  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold tracking-tight text-foreground">
        On This Page
      </h4>
      <div className="relative pl-0">
        <div
          className="absolute left-0 top-0 h-full w-0.5 bg-border/40 rounded-full"
          aria-hidden="true"
        />

        <div
          className="absolute left-0 w-0.5 bg-primary transition-all duration-300 ease-out rounded-full"
          style={{
            top: `${indicatorStyle.top}px`,
            height: `${indicatorStyle.height}px`,
            opacity: indicatorStyle.opacity,
          }}
        />

        <ul className="list-none space-y-2.5 text-sm m-0 p-0">
          {headings.map((heading) => (
            <li
              key={heading.id}
              ref={(el) => {
                itemRefs.current[heading.id] = el;
              }}
              className={cn(
                "transition-all duration-200",
                heading.level === 3 ? "pl-7" : "pl-4",
              )}
            >
              <a
                href={`#${heading.id}`}
                className={cn(
                  "block truncate transition-colors duration-200",
                  activeId === heading.id
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {heading.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
