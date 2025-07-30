export interface NavItemWithChildren {
  title: string;
  href?: string;
  label?: string;
  items: NavItemWithChildren[];
}
