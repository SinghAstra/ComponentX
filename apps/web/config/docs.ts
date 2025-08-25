import { DocsSectionLink } from "@/interfaces/docs-link";

export const docsLink: DocsSectionLink[] = [
  {
    title: "Getting Started",
    links: [
      {
        title: "Introduction",
        path: "/docs/getting-started/introduction",
      },
      {
        title: "Installation",
        path: "/docs/getting-started/installation",
        label: "New",
      },
    ],
  },
  {
    title: "Components",
    links: [
      {
        title: "Buttons",
        path: "/docs/components/buttons",
      },
      {
        title: "Forms",
        path: "/docs/components/forms",
      },
    ],
  },
];
