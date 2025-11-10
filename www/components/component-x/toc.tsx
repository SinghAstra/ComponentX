"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Heading = {
  id: string;
  text: string;
  level: number;
  link: string;
};

function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const pathname = usePathname();
  const [lineStyle, setLineStyle] = useState({});
  const itemRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});

  useEffect(() => {
    const updateHeadings = () => {
      const elements = Array.from(document.querySelectorAll("[data-heading]"));
      const newHeadings = elements
        .map((elem) => {
          const level = parseInt(elem.getAttribute("data-heading") || "2", 10);

          if (level === 1) return null;

          return {
            id: `${elem.id}-${level}`,
            link: elem.id,
            text: elem.textContent ?? "",
            level,
          };
        })
        .filter((heading): heading is Heading => heading !== null);
      setHeadings(newHeadings);
    };

    updateHeadings();
  }, [pathname]);

  useEffect(() => {
    if (activeId && itemRefs.current[activeId]) {
      const activeElement = itemRefs.current[activeId];
      setLineStyle({
        top: `${activeElement.offsetTop}px`,
        height: `${activeElement.offsetHeight}px`,
      });
    } else {
      setLineStyle({});
    }
  }, [activeId, headings]);

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("[data-heading]")
    ).filter((elem) => elem.getAttribute("data-heading") !== "1");

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
      observerOptions
    );

    headingElements.forEach((element) => observer.observe(element));

    return () => {
      headingElements.forEach((element) => observer.unobserve(element));
    };
  }, [pathname, headings]);

  if (headings.length === 0) return null;

  return (
    <>
      <p className="mt-4 mb-2 text-sm">On this page</p>
      <div className="relative pl-0">
        <div
          className="absolute w-[2px] bg-muted left-0 top-0 h-full rounded-full"
          aria-hidden="true"
        />
        <div
          className="absolute w-[2px] rounded-full bg-primary transition-all duration-300 ease-in-out"
          style={{
            ...lineStyle,
            left: "0px",
          }}
        />
        <ul
          className="list-none space-y-3 text-sm pl-2 "
          role="list"
          key={pathname}
        >
          {headings.map((heading) => (
            <li
              key={`${heading.id}-${heading.level}-${pathname}`}
              ref={(el) => {
                itemRefs.current[heading.link] = el;
              }}
              className={cn(
                "transition-all duration-200",
                heading.level === 2 && "pl-2",
                heading.level === 3 && "pl-4",
                heading.level === 4 && "pl-6"
              )}
            >
              <a
                href={`#${heading.link}`}
                className={cn(
                  "hover:text-primary transition-colors duration-200 tracking-wide",
                  activeId === heading.link
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                )}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TableOfContents;
