import { DocsConfig } from "@/types/nav";

export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        { title: "Introduction", href: "/docs" },
        { title: "Installation", href: "/docs/installation" },
        { title: "CLI", href: "/docs/cli" },
      ],
    },
    {
      title: "Components",
      items: [{ title: "Hover Edge", href: "/docs/components/hover-edge" }],
    },
  ],
};
