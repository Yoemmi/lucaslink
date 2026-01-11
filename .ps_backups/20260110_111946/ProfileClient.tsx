"use client";

import { useEffect, useMemo, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

type LinkItem = { title: string; url: string };
type ProductItem = { title: string; price?: number; buyUrl?: string };

type PublicProfile = {
  username: string;
  displayName: string;
  bio: string;
  photoURL?: string;
  published: boolean;
  links: LinkItem[];
  products: ProductItem[];
};

function normalizeUrl(u: string) {
  const x = (u ?? "").trim();
  if (!x) return "";
  if (x.toLowerCase().startsWith("javascript:")) return "";
  if (x.startsWith("http://") || x.startsWith("https://")) return x;
  return `https://${x}`;
}

function pick(obj: any, keys: string[]) {
  for (const k of keys) {
    if (obj && typeof obj === "object" && obj[k] != null) return obj[k];
  }
  return undefined;
}

function normalizeProfile(username: string, raw: any): PublicProfile {
  const displayName = String(pick(raw, ["displayName", "name", "nombre", "nombreParaMostrar"]) ?? username).trim() || username;
  const bio = String(pick(raw, ["bio", "about", "descripcion"]) ?? "").trim();
  const photoURL = String(pick(raw, ["photoURL", "photoUrl", "avatarUrl", "avatarURL"]) ?? "").trim() || undefined;
  const published = Boolean(pick(raw, ["published", "publicado"]) ?? true);

  const linksRaw = pick(raw, ["links", "enlaces"]) ?? [];
  const linksArr: any[] = Array.isArray(linksRaw)
    ? linksRaw
    : linksRaw && typeof linksRaw === "object"
      ? Object.values(linksRaw)
      : [];

  const links: LinkItem[] = linksArr
    .map((l) => {
      const title = String(pick(l, ["title", "titulo", "título"]) ?? "").trim();
      const urlRaw = String(pick(l, ["url", "link"]) ?? "").trim();
      const url = normalizeUrl(urlRaw);
      return { title, url };
    })
    .filter((l) => l.title && l.url);

  const productsRaw = pick(raw, ["products", "productos"]) ?? [];
  const productsArr: any[] = Array.isArray(productsRaw)
    ? productsRaw
    : productsRaw && typeof productsRaw === "object"
      ? Object.values(productsRaw)
      : [];

  const products: ProductItem[] = productsArr
    .map((p) => {
      const title = String(pick(p, ["title", "titulo", "título", "name"]) ?? "").trim();
      const priceRaw = pick(p, ["price", "precio"]);
      const price = typeof priceRaw === "number" ? priceRaw : Number.isFinite(Number(priceRaw)) ? Number(priceRaw) : undefined;

      const buyUrlRaw = String(pick(p, ["buyUrl", "buyURL", "urlCompra", "url_compra"]) ?? "").trim();
      const buyUrl = buyUrlRaw ? normalizeUrl(buyUrlRaw) : undefined;

      return { title, price, buyUrl };
    })
    .filter((p) => p.title);

  return { username, displayName, bio, photoURL, published, links, products };
}

export default function ProfileClient({ username }: { username?: string }) {
  const uname = useMemo(() => String(username ?? "").trim().toLowerCase(), [username]);

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<PublicProfile | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        setError(null);

        if (!uname) {
          setProfile(null);
          setLoading(false);
          return;
        }

        setLoading(true);

        const refA = doc(db, "profiles", uname);
let snap = await getDoc(refA);

if (!snap.exists()) {
  const refB = doc(db, "perfiles", uname);
  snap = await getDoc(refB);
}

        if (!alive) return;

        if (!snap.exists()) {
          setProfile(null);
          setLoading(false);
          return;
        }

        const raw = snap.data();
        setProfile(normalizeProfile(uname, raw));
        setLoading(false);
      } catch (e: any) {
        if (!alive) return;
        setError(e?.message || String(e));
        setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, [uname]);

  if (loading) {
    return <div className="mx-auto max-w-xl px-4 py-12 text-sm text-neutral-600">Cargando perfil...</div>;
  }

  if (error) {
    return (
      <div className="mx-auto max-w-xl px-4 py-12">
        <h1 className="text-xl font-bold">Error</h1>
        <p className="mt-2 text-sm text-red-600">{error}</p>
        <p className="mt-3 text-sm text-neutral-600">
          Si ves “Permisos faltantes o insuficientes”, es por las reglas de Firestore (lectura pública).
        </p>
      </div>
    );
  }

  if (!profile || !profile.published) {
    return (
      <div className="mx-auto max-w-xl px-4 py-12">
        <h1 className="text-xl font-bold">Perfil no encontrado</h1>
        <p className="mt-2 text-sm text-neutral-600">
          Revisa tu nombre de usuario o crea tu perfil desde el panel.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-10">
      <div className="flex items-center gap-3">
        <div className="h-14 w-14 rounded-full bg-neutral-200 overflow-hidden">
          {profile.photoURL ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={profile.photoURL} alt="" className="h-full w-full object-cover" />
          ) : null}
        </div>

        <div className="min-w-0">
          <div className="text-xl font-bold truncate">{profile.displayName}</div>
          <div className="text-sm text-neutral-600">@{profile.username}</div>
        </div>
      </div>

      {profile.bio ? <p className="mt-4 text-sm text-neutral-700 whitespace-pre-wrap">{profile.bio}</p> : null}

      <div className="mt-8 space-y-3">
        {(profile.links ?? []).length === 0 ? (
          <div className="rounded-xl border bg-neutral-50 p-4 text-sm text-neutral-600">
            Este perfil todavía no tiene enlaces.
          </div>
        ) : (
          profile.links.map((l, idx) => (
            <a
              key={idx}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl border p-4 hover:bg-neutral-50"
            >
              <div className="font-medium">{l.title}</div>
              <div className="mt-1 text-xs text-neutral-500 break-all">{l.url}</div>
            </a>
          ))
        )}
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold">Tienda</h2>

        {(profile.products ?? []).length === 0 ? (
          <div className="mt-3 rounded-xl border bg-neutral-50 p-4 text-sm text-neutral-600">
            Este perfil todavía no tiene productos.
          </div>
        ) : (
          <div className="mt-3 grid grid-cols-1 gap-3">
            {profile.products.map((p, idx) => (
              <div key={idx} className="rounded-xl border p-4">
                <div className="font-semibold">{p.title}</div>

                <div className="mt-1 text-sm text-neutral-600">
                  {typeof p.price === "number" ? `$ ${p.price.toFixed(2)}` : "Precio: consultar"}
                </div>

                {p.buyUrl ? (
                  <a
                    href={p.buyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-black px-4 py-2 text-sm font-medium text-white"
                  >
                    Comprar
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}