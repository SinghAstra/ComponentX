export interface NavItem {
  title: string;
  href: string;
  external?: boolean;
}

export interface SidebarNavItem {
  title: string;
  items: NavItem[];
}

export interface DocsConfig {
  sidebarNav: SidebarNavItem[];
}
