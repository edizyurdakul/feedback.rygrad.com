export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  labe?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {}
