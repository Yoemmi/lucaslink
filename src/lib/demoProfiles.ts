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

const PROFILES: Record<string, CreatorProfile> = {
  santi: {
    username: "santi",
    displayName: "Santi",
    bio: "Link-in-bio + tienda simple para vender productos y servicios.",
    avatarUrl: "https://api.dicebear.com/9.x/identicon/svg?seed=santi",
    coverUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop",
    links: [
      { id: "ig", title: "Instagram", subtitle: "@santi", url: "https://instagram.com" },
      { id: "yt", title: "YouTube", subtitle: "Canal", url: "https://youtube.com" },
      { id: "wa", title: "WhatsApp", subtitle: "Escríbeme", url: "https://wa.me/584000000000" },
      { id: "web", title: "Mi Web", subtitle: "Portafolio", url: "https://example.com" },
    ],
    products: [
      { id: "p1", title: "Ebook: Guía rápida", desc: "PDF descargable", price: 9.99, currency: "USD" },
      { id: "p2", title: "Plantillas Pro", desc: "Pack de recursos", price: 19.99, currency: "USD" },
    ],
  },

  demo: {
    username: "demo",
    displayName: "Demo Creator",
    bio: "Perfil de prueba para ver cómo se ve /u/[username].",
    avatarUrl: "https://api.dicebear.com/9.x/identicon/svg?seed=demo",
    coverUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop",
    links: [
      { id: "site", title: "Mi web", subtitle: "Portafolio", url: "https://example.com" },
      { id: "mail", title: "Email", subtitle: "Contacto", url: "mailto:demo@example.com" },
    ],
    products: [{ id: "p3", title: "Asesoría 30 min", desc: "Videollamada", price: 15, currency: "USD" }],
  },
};

export function getProfile(username: string): CreatorProfile | null {
  const key = decodeURIComponent(username || "")
    .toLowerCase()
    .trim()
    .replace(/^@/, "")
    .replace(/[^a-z0-9_-]/g, "");

  return key ? PROFILES[key] ?? null : null;
}
