export type LinkItem = {
  id: string;
  title: string;
  subtitle?: string;
  url: string;
  icon: string;
};

export type Product = {
  id: string;
  title: string;
  price: string;
  image?: string;
  description?: string;
};

export type CreatorProfile = {
  name: string;
  handle: string;
  bio: string;
  avatarUrl: string;
  coverUrl?: string;
};

export type CreatorData = {
  profile: CreatorProfile;
  links: LinkItem[];
  products: Product[];
};
