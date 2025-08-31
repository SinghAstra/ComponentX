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
        <h1
          id={id}
          className="text-4xl text-primary my-4"
          data-heading="1"
          {...props}
        >
          {children}
        </h1>
      );
    },
    h2: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => {
      const id = generateId(children?.toString() || "");
      return (
        <h2
          id={id}
          data-heading="2"
          className="text-3xl text-primary my-4"
          {...props}
        >
          {children}
        </h2>
      );
    },
    p: ({ className, ...props }) => (
      <p className={cn("leading-7", className)} {...props} />
    ),
    Link: ({ className, href, children, ...props }) => {
      const baseClasses =
        "text-primary underline underline-offset-4 hover:text-primary/80 transition-colors duration-300";
      const combinedClassName = cn(baseClasses, className);

      const isInternal =
        href &&
        (href.startsWith("/") || href.startsWith("#") || !href.includes("://"));

      if (isInternal) {
        return (
          <Link href={href} className={combinedClassName}>
            {children}
          </Link>
        );
      }

      return (
        <a
          href={href}
          className={combinedClassName}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    },
    ul: ({ className, ...props }) => (
      <ul
        className={cn(
          "my-2 ml-6 list-disc marker:text-primary [&>li]:mt-1",
          className
        )}
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
    hr: ({ ...props }) => <hr className="my-2" {...props} />,
    strong: ({ className, ...props }) => (
      <strong className={cn("font-semibold", className)} {...props} />
    ),
    em: ({ className, ...props }) => (
      <em className={cn("italic", className)} {...props} />
    ),
  };
}
