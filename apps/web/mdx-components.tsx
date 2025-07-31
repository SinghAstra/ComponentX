import { BorderHoverLink } from "@component-x/ui";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    BorderHoverLink,
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6 text-slate-900">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mb-4 mt-8 text-slate-800">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mb-3 mt-6 text-slate-700">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-slate-600 mb-4 leading-relaxed">{children}</p>
    ),
    code: ({ children }) => (
      <code className="bg-slate-100 px-2 py-1 rounded text-sm font-mono text-slate-800">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-slate-900 text-white p-4 rounded-lg overflow-x-auto mb-6 text-sm">
        {children}
      </pre>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-slate-300">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-slate-300 bg-slate-50 px-4 py-2 text-left font-semibold">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-slate-300 px-4 py-2">{children}</td>
    ),
    ...components,
  };
}
