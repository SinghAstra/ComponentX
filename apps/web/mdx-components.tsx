import { BorderHoverLink } from "@component-x/ui";
import { ComponentProps } from "react";
import ComponentShowcase from "./components/component-showcase";
import Pre from "./components/markdown/pre";
import { cn } from "./lib/utils";

export const components = {
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
