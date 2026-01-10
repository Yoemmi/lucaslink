export type ProfileLink = {
  id: string;
  title: string;
  subtitle?: string;
  url: string;
};

export type Product = {
  id: string;
  title: string;
  desc?: string;
  price: number;
  currency: "USD" | "VES";
  imageUrl?: string;
};

export type CreatorProfile = {
  username: string;
  displayName: string;
  bio: string;
  avatarUrl?: string;
  coverUrl?: string;
  links: ProfileLink[];
  products: Product[];
};
