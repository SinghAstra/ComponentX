import { components } from "@/components/markdown/mdx-components";
import {
  normalizeLanguage,
  postProcess,
  preProcess,
} from "@/lib/rehype-plugins";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

interface HighlightedCodeProps {
  code: string;
  language: string;
}

export async function HighlightedCode({
  code,
  language,
}: HighlightedCodeProps) {
  // Wrap the raw code in a fenced code block for MDX compilation
  const source = `\`\`\`${language}\n${code}\n\`\`\``;

  const { content } = await compileMDX({
    source: source,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        rehypePlugins: [
          preProcess,
          normalizeLanguage,
          rehypePrism,
          rehypeSlug,
          rehypeAutolinkHeadings,
          postProcess,
        ],
        remarkPlugins: [remarkGfm],
      },
    },
    components,
  });

  return <>{content}</>;
}
