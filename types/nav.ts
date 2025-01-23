export interface NavItem {
  title: string;
  href?: string;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}
