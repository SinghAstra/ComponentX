import { Heading } from "@/types/heading";

export function extractHeadings(source: string): Heading[] {
  const headingLines = source
    .split("\n")
    .filter((line) => line.match(/^#{1,6}\s/));

  return headingLines
    .map((raw) => {
      const match = raw.match(/^(#{1,6})\s+(.+)\r?$/);
      if (!match) return null;

      const [, level, title] = match;

      return {
        level: level.length,
        title: title,
        id: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      };
    })
    .filter((heading): heading is Heading => heading !== null);
}
