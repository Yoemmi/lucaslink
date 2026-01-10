import type { CreatorData } from "@/types";
import {
  Instagram, Youtube, Globe, MessageCircle, Mail, Phone, Link2
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const BRAND_COLOR = "#11B718";

export function iconFor(name: string): LucideIcon {
  const k = (name || "").toLowerCase();
  if (k.includes("insta")) return Instagram;
  if (k.includes("yout")) return Youtube;
  if (k.includes("whats") || k.includes("chat")) return MessageCircle;
  if (k.includes("mail")) return Mail;
  if (k.includes("phone") || k.includes("tel")) return Phone;
  if (k.includes("web") || k.includes("site")) return Globe;
  return Link2;
}

export const CREATOR_DATA: CreatorData = {
  profile: {
    name: "Tu Nombre",
    handle: "@tuusuario",
    bio: "Bienvenido 👋 Aquí tienes mis links y productos.",
    avatarUrl: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=256&h=256&fit=crop",
    coverUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop"
  },
  links: [
    { id: "1", title: "Instagram", subtitle: "Contenido diario", url: "https://instagram.com", icon: "instagram" },
    { id: "2", title: "YouTube", subtitle: "Videos nuevos", url: "https://youtube.com", icon: "youtube" },
    { id: "3", title: "WhatsApp", subtitle: "Escríbeme aquí", url: "https://wa.me/0000000000", icon: "whatsapp" },
    { id: "4", title: "Mi Web", subtitle: "Portafolio", url: "https://example.com", icon: "web" }
  ],
  products: [
    { id: "p1", title: "Ebook: Guía rápida", price: "$9.99", description: "PDF descargable (ejemplo)" },
    { id: "p2", title: "Plantillas Pro", price: "$19.99", description: "Pack de recursos (ejemplo)" }
  ]
};
