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
      title: "Components",
      items: [
        {
          title: "Multi Step Icons",
          href: "/docs/components/accordion",
          items: [],
        },
      ],
    },
  ],
};
