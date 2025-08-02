import BorderHoverLink from "@/app/ui/border-hover-link";
import ComponentShowcase from "@/components/markdown/component-showcase";
import { HighlightedCode } from "@/components/markdown/highlighted-code";
import Pre from "@/components/markdown/pre";
import Link from "next/link";
import { ComponentProps } from "react";
import { cn } from "../../lib/utils";

export const components = {
  Link,
  HighlightedCode,
  BorderHoverLink,
  ComponentShowcase,
  pre: Pre,
  code: ({ className, children, ...props }: ComponentProps<"code">) => {
    return (
      <code
        className={`${className} text-sm py-0.5 px-1 rounded border`}
        {...props}
      >
        {children}
      </code>
    );
  },
  em: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <em className={cn("not-italic", className)} {...props} />
  ),
};
