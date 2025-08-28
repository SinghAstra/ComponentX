import { cn } from "@/lib/utils";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { CodeBlock } from "./components/component-x/codeblock";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/component-x/table";

const generateId = (text: string) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => {
      const id = generateId(children?.toString() || "");
      return (
        <h1 id={id} data-heading="1" {...props}>
          {children}
        </h1>
      );
    },
    h2: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => {
      const id = generateId(children?.toString() || "");
      return (
        <h2 id={id} data-heading="2" {...props}>
          {children}
        </h2>
      );
    },
    h3: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => {
      const id = generateId(children?.toString() || "");
      return (
        <h3 id={id} data-heading="3" {...props}>
          {children}
        </h3>
      );
    },
    h4: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => {
      const id = generateId(children?.toString() || "");
      return (
        <h4 id={id} data-heading="4" {...props}>
          {children}
        </h4>
      );
    },
    p: ({ className, ...props }) => (
      <p className={cn("leading-7", className)} {...props} />
    ),
    a: ({ className, href, ...props }) => {
      // Use Next.js Link for internal links
      if (href?.startsWith("/") || href?.startsWith("#")) {
        return (
          <Link
            href={href}
            className={cn(
              "text-primary underline underline-offset-4 hover:text-primary/80 transition-colors duration-300",
              className
            )}
            {...props}
          />
        );
      }
      // External links
      return (
        <a
          href={href}
          className={cn(
            "text-primary underline underline-offset-4 hover:text-primary/80 transition-colors duration-300",
            className
          )}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        />
      );
    },
    ul: ({ className, ...props }) => (
      <ul
        className={cn("my-2 ml-6 list-disc [&>li]:mt-1", className)}
        {...props}
      />
    ),
    ol: ({ className, ...props }) => (
      <ol
        className={cn("my-2 ml-6 list-decimal [&>li]:mt-1", className)}
        {...props}
      />
    ),
    li: ({ className, ...props }) => (
      <li className={cn("leading-7", className)} {...props} />
    ),
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          "mt-6 border-l-2 border-primary pl-6 text-muted-foreground",
          className
        )}
        {...props}
      />
    ),
    code: ({ className, ...props }) => (
      <code
        className={cn(
          "relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm border z-1",
          className
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }) => (
      <CodeBlock className={className} {...props} />
    ),
    table: ({ className, ...props }) => (
      <Table className={className} {...props} />
    ),
    thead: ({ className, ...props }) => (
      <TableHeader className={className} {...props} />
    ),
    tbody: ({ className, ...props }) => (
      <TableBody className={className} {...props} />
    ),
    tfoot: ({ className, ...props }) => (
      <TableFooter className={className} {...props} />
    ),
    tr: ({ className, ...props }) => (
      <TableRow className={className} {...props} />
    ),
    th: ({ className, ...props }) => (
      <TableHead className={className} {...props} />
    ),
    td: ({ className, ...props }) => (
      <TableCell className={className} {...props} />
    ),
    hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
    strong: ({ className, ...props }) => (
      <strong className={cn("font-semibold", className)} {...props} />
    ),
    em: ({ className, ...props }) => (
      <em className={cn("italic", className)} {...props} />
    ),
  };
}
