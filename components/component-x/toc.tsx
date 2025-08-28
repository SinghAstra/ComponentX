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
  const [sliderStyle, setSliderStyle] = useState({ top: 0, height: 0 });
  const listItemRefs = useRef<(HTMLLIElement | null)[]>([]);

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

  useEffect(() => {
    if (activeId && listItemRefs.current.length > 0) {
      const activeItem = headings.findIndex((h) => h.link === activeId);
      if (activeItem !== -1 && listItemRefs.current[activeItem]) {
        const activeElement = listItemRefs.current[activeItem];
        setSliderStyle({
          top: activeElement.offsetTop,
          height: activeElement.offsetHeight,
        });
      }
    }
  }, [activeId, headings]);

  if (headings.length === 0) return null;

  return (
    <>
      <p className="mt-4 mb-2 text-sm">On this page</p>
      <ul
        className="list-none space-y-3 text-sm pl-2 "
        role="list"
        key={pathname}
      >
        {headings.map((heading) => (
          <li
            key={`${heading.id}-${heading.level}-${pathname}`}
            className={cn(
              "transition-all duration-200",
              heading.level === 2 && "pl-0",
              heading.level === 3 && "pl-2",
              heading.level === 4 && "pl-4"
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
    </>
  );
}

export default TableOfContents;
