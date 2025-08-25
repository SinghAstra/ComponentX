export interface DocsLink {
  title: string;
  path: string;
  label?: string;
}

export interface DocsSectionLink {
  title: string;
  links: DocsLink[];
}
