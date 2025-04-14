// Product type definition
export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  quantity: string;
  image: string;
  colors: string[];
}

// Navigation item type
export interface NavItem {
  name: string;
  path: string;
  isActive?: boolean;
}

// Navigation section with items
export interface NavSection {
  title?: string;
  items: NavItem[];
}
