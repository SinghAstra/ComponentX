"use client";

import React, { useEffect, useState, useRef } from "react";

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

  // Keep track of ALL headings currently visible on the screen
  const visibleHeadings = useRef<Set<string>>(new Set());

  const [indicatorStyle, setIndicatorStyle] = useState({
    top: 0,
    height: 0,
    opacity: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleHeadings.current.add(entry.target.id);
          } else {
            visibleHeadings.current.delete(entry.target.id);
          }
        });

        // Filter the headings array to find which ones are currently visible
        const visible = headings.filter((h) =>
          visibleHeadings.current.has(h.id),
        );

        // Always highlight the highest visible heading on the screen
        if (visible.length > 0) {
          setActiveId(visible[0].id);
        }
      },
      // Expanded detection area: triggers when headings enter the top 60% of the screen
      { rootMargin: "0px 0px -40% 0px" },
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
      <div className="relative">
        <div
          className="absolute -left-px w-0.5 bg-primary transition-all duration-300 ease-out"
          style={{
            top: `${indicatorStyle.top}px`,
            height: `${indicatorStyle.height}px`,
            opacity: indicatorStyle.opacity,
          }}
        />

        <ul className="border-l border-border text-sm">
          {headings.map((heading) => (
            <li
              key={heading.id}
              ref={(el) => {
                itemRefs.current[heading.id] = el;
              }}
              className={`py-1.5 transition-colors ${
                heading.level === 3 ? "pl-8" : "pl-4"
              }`}
            >
              <a
                href={`#${heading.id}`}
                className={`block truncate transition-colors ${
                  activeId === heading.id
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
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
