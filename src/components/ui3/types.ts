
export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
}

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon?: string;
}

export type ViewType = 'dashboard' | 'products' | 'home' | 'profile' | 'websites' | 'mobile-preview' | 'web-preview' | 'referrals' | 'settings';
