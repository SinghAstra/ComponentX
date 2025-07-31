import { NavItemWithChildren } from "@/types/nav";

export interface DocsConfig {
  sidebarNav: NavItemWithChildren[];
}

export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
      ],
    },
    {
      title: "Installation",
      items: [
        {
          title: "Next.js",
          href: "/docs/installation/next",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Border Hover",
          href: "/docs/components/border-hover",
          items: [],
        },
      ],
    },
  ],
};
