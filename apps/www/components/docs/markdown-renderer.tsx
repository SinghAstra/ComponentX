"use client";

import { Check, Copy } from "lucide-react";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import Link from "next/link";

interface MarkdownRendererProps {
  content: string;
}

const extractText = (node: React.ReactNode): string => {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");

  if (React.isValidElement(node)) {
    const element = node as React.ReactElement<{ children?: React.ReactNode }>;
    return extractText(element.props.children);
  }

  return "";
};

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="w-full max-w-none pb-24">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeSlug]}
        components={{
          h1: ({ children, ...props }) => (
            <h1
              {...props}
              className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight text-foreground"
            >
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2
              {...props}
              className="mt-12 scroll-m-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground first:mt-0"
            >
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3
              {...props}
              className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-foreground"
            >
              {children}
            </h3>
          ),
          h4: ({ children, ...props }) => (
            <h4
              {...props}
              className="mt-8 scroll-m-20 text-lg font-semibold tracking-tight text-foreground"
            >
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="leading-7 not-first:mt-6 text-neutral-300">
              {children}
            </p>
          ),
          a: ({ children, href }) => {
            const isExternal = href?.startsWith("http");
            const className =
              "font-medium text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm";

            if (isExternal) {
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {children}
                </a>
              );
            }

            return (
              <Link href={href || "#"} className={className}>
                {children}
              </Link>
            );
          },
          strong: ({ children }) => (
            <strong className="font-semibold text-neutral-100">
              {children}
            </strong>
          ),
          code: ({ children, className }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code className="relative rounded bg-muted/50 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-muted-foreground border">
                  {children}
                </code>
              );
            }
            return <code className={className}>{children}</code>;
          },
          pre: ({ children }) => {
            const codeElement = React.isValidElement(children)
              ? (children as React.ReactElement<{
                  className?: string;
                  children?: React.ReactNode;
                }>)
              : null;

            const className = codeElement?.props?.className ?? "";

            const language = /language-(\w+)/.exec(className)?.[1] ?? "text";

            const rawText = extractText(codeElement?.props?.children).replace(
              /\n$/,
              "",
            );
            const isCopied = copiedCode === rawText;

            return (
              <div className="my-6 overflow-hidden rounded-xl border border-neutral-800 bg-[#0d1117]">
                <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800 bg-neutral-900/50">
                  <span className="text-xs font-mono text-neutral-400 font-medium">
                    {language}
                  </span>
                  <button
                    onClick={() => copyToClipboard(rawText)}
                    className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded-sm px-1"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span className="text-green-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed font-mono">
                  {children}
                </pre>
              </div>
            );
          },
          ul: ({ children }) => (
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-neutral-300">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2 text-neutral-300">
              {children}
            </ol>
          ),
          li: ({ children }) => <li>{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="mt-6 border-l-2 border-neutral-700 pl-6 italic text-neutral-400">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="my-8 border-neutral-800" />,
          table: ({ children }) => (
            <div className="my-6 w-full overflow-y-auto rounded-lg border border-neutral-800">
              <table className="w-full text-sm text-left">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-neutral-900/50 text-neutral-200 border-b border-neutral-800">
              {children}
            </thead>
          ),
          tbody: ({ children }) => <tbody>{children}</tbody>,
          tr: ({ children }) => (
            <tr className="border-b border-neutral-800/50 last:border-0 hover:bg-neutral-900/20 transition-colors">
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 font-medium">{children}</th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 text-neutral-300">{children}</td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
