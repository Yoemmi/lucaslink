"use client";

import React from "react";

type LinkItem = { title: string; url: string };
type ProductItem = { title: string; price?: number; buyUrl?: string };

export type PreviewProfile = {
  username: string;
  displayName?: string;
  bio?: string;
  photoURL?: string;
  links?: LinkItem[];
  products?: ProductItem[];
  theme?: {
    background?: string;
    text?: string;
    muted?: string;
    primary?: string;
    buttonText?: string;
    card?: string;
    cardOpacity?: number;
    radius?: number;
  };
};

function safeUrl(u?: string) {
  const x = String(u ?? "").trim();
  if (!x) return "";
  const lower = x.toLowerCase();
  if (lower.startsWith("javascript:")) return "";
  if (lower.startsWith("http://") || lower.startsWith("https://")) return x;
  return `https://${x}`;
}

function hexToRgba(hex: string, opacity: number) {
  const h = hex.replace("#", "").trim();
  if (!(h.length === 3 || h.length === 6)) return hex;
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export default function PhonePreview({ profile }: { profile: PreviewProfile }) {
  const t = profile.theme ?? {};
  const bg = t.background ?? "#f6f7fb";
  const text = t.text ?? "#111111";
  const muted = t.muted ?? "#6b7280";
  const primary = t.primary ?? "#111111";
  const buttonText = t.buttonText ?? "#ffffff";
  const radius = Number.isFinite(Number(t.radius)) ? Number(t.radius) : 18;

  const cardOpacity = Number.isFinite(Number(t.cardOpacity)) ? Math.max(0, Math.min(1, Number(t.cardOpacity))) : 1;
  const cardBase = t.card ?? "#ffffff";
  const cardBg = cardOpacity < 1 && cardBase.startsWith("#") ? hexToRgba(cardBase, cardOpacity) : cardBase;

  const containerStyle: React.CSSProperties =
    bg.includes("gradient") || bg.includes("url(") ? { backgroundImage: bg } : { background: bg };

  const cardStyle: React.CSSProperties = { background: cardBg, borderRadius: radius };
  const btnStyle: React.CSSProperties = { background: primary, color: buttonText, borderRadius: radius };

  const links = profile.links ?? [];
  const products = profile.products ?? [];

  return (
    <div className="mx-auto w-[360px] rounded-[48px] border bg-black p-[10px] shadow-xl">
      <div className="relative h-[720px] overflow-hidden rounded-[40px] bg-white">
        <div className="pointer-events-none absolute left-1/2 top-3 h-6 w-36 -translate-x-1/2 rounded-full bg-black/85" />

        <div className="h-full overflow-y-auto px-5 pb-10 pt-10" style={containerStyle}>
          <div className="mx-auto max-w-[320px]">
            <div className="flex flex-col items-center text-center">
              <div className="h-20 w-20 overflow-hidden rounded-full border bg-white/70">
                {profile.photoURL ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={profile.photoURL} alt="avatar" className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm" style={{ color: muted }}>
                    {(profile.displayName || profile.username || "U").slice(0, 1).toUpperCase()}
                  </div>
                )}
              </div>

              <div className="mt-3 text-xl font-semibold" style={{ color: text }}>
                {profile.displayName || profile.username}
              </div>
              <div className="text-sm" style={{ color: muted }}>
                @{profile.username}
              </div>

              {profile.bio ? (
                <div className="mt-3 text-sm leading-relaxed text-neutral-700">{profile.bio}</div>
              ) : null}
            </div>

            <div className="mt-6 space-y-3">
              {links.length === 0 ? (
                <div className="border px-4 py-3 text-sm" style={{ ...cardStyle, color: muted }}>
                  Este perfil todavía no tiene enlaces.
                </div>
              ) : (
                links.map((l, i) => (
                  <div key={i} className="border px-4 py-3" style={cardStyle}>
                    <div className="text-sm font-medium" style={{ color: text }}>
                      {l.title || "Sin título"}
                    </div>
                    <div className="mt-1 text-xs" style={{ color: muted }}>
                      {safeUrl(l.url)}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-8">
              <div className="text-sm font-semibold" style={{ color: text }}>
                Tienda
              </div>

              {products.length === 0 ? (
                <div className="mt-3 border px-4 py-3 text-sm" style={{ ...cardStyle, color: muted }}>
                  Este perfil todavía no tiene productos.
                </div>
              ) : (
                <div className="mt-3 space-y-3">
                  {products.map((p, i) => (
                    <div key={i} className="border p-4" style={cardStyle}>
                      <div className="font-semibold" style={{ color: text }}>
                        {p.title || "Producto"}
                      </div>
                      {typeof p.price === "number" ? (
                        <div className="mt-1 text-sm text-neutral-700">$ {p.price.toFixed(2)}</div>
                      ) : null}

                      {p.buyUrl ? (
                        <div className="mt-3 inline-flex w-full items-center justify-center px-4 py-2 text-sm font-medium" style={btnStyle}>
                          Comprar
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-10 text-center text-[11px]" style={{ color: muted }}>
              Vista previa (dashboard)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}