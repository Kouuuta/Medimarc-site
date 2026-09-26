export interface Category {
  id: string;
  brand: string;
  name: string;
  image: string;
  description: string;
  skus: string[];
}

export interface QuoteItem {
  sku: string;
  categoryId: string;
  categoryName: string;
}

export interface Milestone {
  at: number;
  year: string;
  title: string;
  body: string;
}

export interface Client {
  name: string;
  short: string;
}

export interface NavLink {
  id: string;
  label: string;
}
