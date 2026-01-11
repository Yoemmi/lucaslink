"use client";

import { useEffect, useMemo, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

type LinkItem = { title: string; url: string };
type ProductItem = { title: string; price?: number; buyUrl?: string };

type Theme = {
  bg?: string;
  bg2?: string;
  useGradient?: boolean;
  bgImage?: string;

  card?: string;
  cardOpacity?: number;

  text?: string;
  muted?: string;
  accent?: string;

  button?: string;
  buttonText?: string;

  radius?: number;
};

type PublicProfile = {
  username: string;
  displayName: string;
  bio: string;
  photoURL?: string;
  links: LinkItem[];
  products: ProductItem[];
  published?: boolean;
  theme?: Theme;
};

function pick<T = any>(obj: any, keys: string[]): T | undefined {
  if (!obj || typeof obj !== "object") return undefined;
  for (const k of keys) {
    if (obj[k] !== undefined && obj[k] !== null) return obj[k] as T;
  }
  return undefined;
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function normalizeUrl(u: string) {
  const x = (u ?? "").trim();
  if (!x) return "";
  if (x.toLowerCase().startsWith("javascript:")) return "";
  if (x.startsWith("http://") || x.startsWith("https://")) return x;
  return `https://${x}`;
}

function normalizeHexColor(v: any, fallback: string) {
  const s = String(v ?? "").trim();
  if (/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(s)) return s;
  return fallback;
}

function normalizeOpacity(v: any, fallback: number) {
  const n = Number(v);
  if (!Number.isFinite(n)) return fallback;
  return clamp(n, 0, 1);
}

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  let r = 255, g = 255, b = 255;

  if (h.length === 3) {
    r = parseInt(h[0] + h[0], 16);
    g = parseInt(h[1] + h[1], 16);
    b = parseInt(h[2] + h[2], 16);
  } else if (h.length >= 6) {
    r = parseInt(h.slice(0, 2), 16);
    g = parseInt(h.slice(2, 4), 16);
    b = parseInt(h.slice(4, 6), 16);
  }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function normalizeTheme(raw: any): Theme {
  const t = pick<any>(raw, ["theme", "tema"]) ?? {};

  const bg = normalizeHexColor(pick(t, ["bg", "background", "fondo"]), "#f6f7f9");
  const bg2 = normalizeHexColor(pick(t, ["bg2", "background2", "fondo2"]), "#dbeafe");
  const useGradient = Boolean(pick(t, ["useGradient", "degradado"]) ?? false);

  const bgImageRaw = String(pick(t, ["bgImage", "backgroundImage", "imagenFondo"]) ?? "").trim();
  const bgImage = bgImageRaw ? normalizeUrl(bgImageRaw) : "";

  const card = normalizeHexColor(pick(t, ["card", "cardColor", "tarjeta"]), "#ffffff");
  const cardOpacity = normalizeOpacity(pick(t, ["cardOpacity", "opacidadTarjeta"]), bgImage ? 0.86 : 1);

  const text = normalizeHexColor(pick(t, ["text", "texto"]), "#0b0b0b");
  const muted = normalizeHexColor(pick(t, ["muted", "mutedText", "texto2"]), "#6b7280");
  const accent = normalizeHexColor(pick(t, ["accent", "acento"]), "#111827");

  const button = normalizeHexColor(pick(t, ["button", "boton"]), accent);
  const buttonText = normalizeHexColor(pick(t, ["buttonText", "textoBoton"]), "#ffffff");

  const radiusRaw = Number(pick(t, ["radius", "radio"]) ?? 18);
  const radius = Number.isFinite(radiusRaw) ? clamp(radiusRaw, 12, 32) : 18;

  return { bg, bg2, useGradient, bgImage, card, cardOpacity, text, muted, accent, button, buttonText, radius };
}

function normalizeProfile(username: string, raw: any): PublicProfile {
  const displayName = String(pick(raw, ["displayName", "nombre para mostrar", "nombreParaMostrar"]) ?? username).trim();
  const bio = String(pick(raw, ["bio", "biografia"]) ?? "").trim();

  const photoURL = String(pick(raw, ["photoURL", "photoUrl", "URL de la foto", "urlFoto"]) ?? "").trim();

  const linksRaw = pick<any>(raw, ["links", "enlaces"]) ?? [];
  const linksArr: any[] = Array.isArray(linksRaw)
    ? linksRaw
    : linksRaw && typeof linksRaw === "object"
      ? Object.values(linksRaw)
      : [];

  const links = linksArr
    .map((l) => {
      const title = String(pick(l, ["title", "título", "titulo"]) ?? "").trim();
      const urlRaw = String(pick(l, ["url", "URL"]) ?? "").trim();
      const url = urlRaw ? normalizeUrl(urlRaw) : "";
      return { title, url };
    })
    .filter((l) => l.title && l.url);

  const productsRaw = pick<any>(raw, ["products", "productos"]) ?? [];
  const productsArr: any[] = Array.isArray(productsRaw)
    ? productsRaw
    : productsRaw && typeof productsRaw === "object"
      ? Object.values(productsRaw)
      : [];

  const products = productsArr
    .map((p) => {
      const title = String(pick(p, ["title", "título", "titulo"]) ?? "").trim();

      const priceRaw = pick<any>(p, ["price", "precio"]);
      const price =
        typeof priceRaw === "number"
          ? priceRaw
          : Number.isFinite(Number(priceRaw))
            ? Number(priceRaw)
            : undefined;

      const buyUrlRaw = String(pick(p, ["buyUrl", "buyURL", "urlCompra", "url_compra"]) ?? "").trim();
      const buyUrl = buyUrlRaw ? normalizeUrl(buyUrlRaw) : undefined;

      return { title, price, buyUrl };
    })
    .filter((p) => p.title);

  const publishedRaw = pick<any>(raw, ["published", "publicado"]);
  const published = publishedRaw === undefined ? true : Boolean(publishedRaw);

  const theme = normalizeTheme(raw);

  return { username, displayName, bio, photoURL, links, products, published, theme };
}

async function getProfileDoc(uname: string) {
  // principal: "profiles"
  const ref1 = doc(db, "profiles", uname);
  const snap1 = await getDoc(ref1);
  if (snap1.exists()) return snap1;

  // fallback si alguien creó "perfiles"
  const ref2 = doc(db, "perfiles", uname);
  const snap2 = await getDoc(ref2);
  if (snap2.exists()) return snap2;

  return null;
}

function initialsFrom(name: string) {
  const cleaned = (name ?? "").trim();
  if (!cleaned) return "U";
  const parts = cleaned.split(" ").filter(Boolean);
  const a = parts[0]?.[0] ?? "U";
  const b = parts.length > 1 ? (parts[1]?.[0] ?? "") : (parts[0]?.[1] ?? "");
  return (a + b).toUpperCase();
}

function formatUsd(n: number) {
  try {
    return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(n);
  } catch {
    return `$ ${n.toFixed(2)}`;
  }
}

export default function ProfileClient({ username }: { username: string }) {
  const uname = useMemo(() => (username ?? "").trim().toLowerCase(), [username]);

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<PublicProfile | null>(null);

  useEffect(() => {
    let alive = true;

    async function run() {
      if (!uname) {
        setLoading(false);
        setProfile(null);
        return;
      }

      setLoading(true);
      try {
        const snap = await getProfileDoc(uname);
        if (!alive) return;

        if (!snap) {
          setProfile(null);
        } else {
          const p = normalizeProfile(uname, snap.data());
          // si está despublicado, lo tratamos como no encontrado
          if (!p.published) setProfile(null);
          else setProfile(p);
        }
      } finally {
        if (alive) setLoading(false);
      }
    }

    run();
    return () => {
      alive = false;
    };
  }, [uname]);

  const t = useMemo(() => normalizeTheme(profile ?? {}), [profile]);

  const cardBg = useMemo(() => {
    const base = t.card ?? "#ffffff";
    const op = t.cardOpacity ?? 1;
    return op >= 0.999 ? base : hexToRgba(base, op);
  }, [t.card, t.cardOpacity]);

  const rootVars = useMemo(() => {
    return {
      ["--lx-bg" as any]: t.bg ?? "#f6f7f9",
      ["--lx-bg2" as any]: t.bg2 ?? "#dbeafe",
      ["--lx-card" as any]: cardBg,
      ["--lx-text" as any]: t.text ?? "#0b0b0b",
      ["--lx-muted" as any]: t.muted ?? "#6b7280",
      ["--lx-accent" as any]: t.accent ?? "#111827",
      ["--lx-btn" as any]: t.button ?? "#111827",
      ["--lx-btnText" as any]: t.buttonText ?? "#ffffff",
      ["--lx-radius" as any]: `${t.radius ?? 18}px`,
    } as React.CSSProperties;
  }, [t, cardBg]);

  const bgStyle = useMemo(() => {
    const s: React.CSSProperties = {};
    if (t.bgImage) {
      s.backgroundImage = `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${t.bgImage})`;
      s.backgroundSize = "cover";
      s.backgroundPosition = "center";
    } else if (t.useGradient) {
      s.backgroundImage = `linear-gradient(135deg, var(--lx-bg), var(--lx-bg2))`;
    } else {
      s.backgroundColor = "var(--lx-bg)";
    }
    return s;
  }, [t.bgImage, t.useGradient]);

  const cardStyle: React.CSSProperties = {
    background: "var(--lx-card)",
    borderColor: "var(--lx-border)",
    borderRadius: "var(--lx-radius)",
  };

  const btnStyle: React.CSSProperties = {
    background: "var(--lx-btn)",
    color: "var(--lx-btnText)",
    borderRadius: "var(--lx-radius)",
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ ...rootVars, ...bgStyle }}>
        <div className="text-sm" style={{ color: "var(--lx-muted)" }}>Cargando perfil…</div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ ...rootVars, ...bgStyle }}>
        <div className="w-full max-w-md border p-6 text-center" style={cardStyle}>
          <div className="text-xl font-bold" style={{ color: "var(--lx-text)" }}>Perfil no encontrado</div>
          <div className="mt-2 text-sm" style={{ color: "var(--lx-muted)" }}>
            Revisa tu nombre de usuario o crea tu perfil desde el panel.
          </div>
        </div>
      </div>
    );
  }

  const hasLinks = (profile.links ?? []).length > 0;
  const hasProducts = (profile.products ?? []).length > 0;

  return (
    <div className="min-h-screen" style={{ ...rootVars, ...bgStyle }}>
      <div className="mx-auto w-full max-w-[440px] px-4 py-10">
        {/* Header Card */}
        <div className="border p-6 shadow-sm" style={cardStyle}>
          <div className="flex items-center gap-4">
            {profile.photoURL ? (
              <img
                src={profile.photoURL}
                alt={profile.displayName}
                className="h-16 w-16 rounded-full object-cover border"
                style={{ borderColor: "var(--lx-border)" }}
              />
            ) : (
              <div
                className="h-16 w-16 rounded-full flex items-center justify-center font-bold border"
                style={{ borderColor: "var(--lx-border)", background: "rgba(255,255,255,0.45)", color: "var(--lx-text)" }}
              >
                {initialsFrom(profile.displayName)}
              </div>
            )}

            <div className="min-w-0 flex-1">
              <div className="text-xl font-bold truncate" style={{ color: "var(--lx-text)" }}>
                {profile.displayName}
              </div>
              <div className="text-sm truncate" style={{ color: "var(--lx-accent)" }}>
                @ {profile.username}
              </div>
            </div>
          </div>

          {profile.bio ? (
            <div className="mt-4 text-sm leading-relaxed" style={{ color: "var(--lx-text)" }}>
              {profile.bio}
            </div>
          ) : null}
        </div>

        {/* Links */}
        <div className="mt-6">
          <div className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--lx-muted)" }}>
            Enlaces
          </div>

          {!hasLinks ? (
            <div className="mt-3 border p-4 text-sm" style={cardStyle}>
              <div style={{ color: "var(--lx-muted)" }}>Este perfil todavía no tiene enlaces.</div>
            </div>
          ) : (
            <div className="mt-3 grid gap-3">
              {profile.links.map((l, idx) => (
                <a
                  key={idx}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="border px-4 py-3 text-sm font-medium hover:opacity-95 transition"
                  style={cardStyle}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="truncate" style={{ color: "var(--lx-text)" }}>{l.title}</span>
                    <span className="text-xs" style={{ color: "var(--lx-muted)" }}>Abrir</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Shop */}
        <div className="mt-8">
          <div className="text-xs font-semibold tracking-wide uppercase" style={{ color: "var(--lx-muted)" }}>
            Tienda
          </div>

          {!hasProducts ? (
            <div className="mt-3 border p-4 text-sm" style={cardStyle}>
              <div style={{ color: "var(--lx-muted)" }}>Este perfil todavía no tiene productos.</div>
            </div>
          ) : (
            <div className="mt-3 grid gap-3">
              {profile.products.map((p, idx) => (
                <div key={idx} className="border p-4" style={cardStyle}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="font-semibold truncate" style={{ color: "var(--lx-text)" }}>
                        {p.title}
                      </div>
                      <div className="mt-1 text-sm" style={{ color: "var(--lx-muted)" }}>
                        {typeof p.price === "number" ? formatUsd(p.price) : "Sin precio"}
                      </div>
                    </div>
                  </div>

                  {p.buyUrl ? (
                    <a
                      href={p.buyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex w-full items-center justify-center px-4 py-2 text-sm font-semibold"
                      style={btnStyle}
                    >
                      Comprar
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 text-center text-xs" style={{ color: "var(--lx-muted)" }}>
          Hecho con LucasLink ✨
        </div>
      </div>
    </div>
  );
}