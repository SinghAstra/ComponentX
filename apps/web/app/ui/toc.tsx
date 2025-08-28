"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Heading = {
  id: string;
  text: string;
  level: number;
  link: string;
};

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const pathname = usePathname();

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

    const observer = new MutationObserver(updateHeadings);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [pathname]);

  if (headings.length === 0) return null;

  return (
    <>
      <p className="mb-2 text-sm">On this page</p>
      <ul className="list-none space-y-2 text-sm/6 " role="list" key={pathname}>
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
            <a href={`#${heading.link}`} className={cn("")}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
