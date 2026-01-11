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
  links: LinkItem[];
  products: ProductItem[];
  published?: boolean;
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
    if (obj && Object.prototype.hasOwnProperty.call(obj, k)) return obj[k];
  }
  return undefined;
}

function normalizeProfile(username: string, raw: any): PublicProfile {
  const linksRaw = pick(raw, ["links", "enlaces"]);
  const productsRaw = pick(raw, ["products", "productos"]);

  const linksArr: any[] = Array.isArray(linksRaw)
    ? linksRaw
    : linksRaw && typeof linksRaw === "object"
      ? Object.values(linksRaw)
      : [];

  const productsArr: any[] = Array.isArray(productsRaw)
    ? productsRaw
    : productsRaw && typeof productsRaw === "object"
      ? Object.values(productsRaw)
      : [];

  const displayName = String(pick(raw, ["displayName", "nombre para mostrar", "nombreParaMostrar", "name"]) ?? username).trim();
  const bio = String(pick(raw, ["bio"]) ?? "").trim();
  const photoURL = String(pick(raw, ["photoURL", "photoUrl", "URL de la foto", "urlFoto"]) ?? "").trim();
  const published = Boolean(pick(raw, ["published", "publicado"]) ?? true);

  const links: LinkItem[] = linksArr
    .map((l) => {
      const title = String(pick(l, ["title", "titulo", "título"]) ?? "").trim();
      const url = normalizeUrl(String(pick(l, ["url", "URL"]) ?? ""));
      return { title, url };
    })
    .filter((l) => l.title && l.url);

  const products: ProductItem[] = productsArr
    .map((p) => {
      const title = String(pick(p, ["title", "titulo", "título"]) ?? "").trim();
      const priceVal = pick(p, ["price", "precio"]);
      const price = typeof priceVal === "number" ? priceVal : undefined;

      const buyUrlRaw = String(pick(p, ["buyUrl", "buyURL", "urlCompra", "url_compra"]) ?? "").trim();
      const buyUrl = buyUrlRaw ? normalizeUrl(buyUrlRaw) : undefined;

      return { title, price, buyUrl };
    })
    .filter((p) => p.title);

  return { username, displayName, bio, photoURL, published, links, products };
}

async function getProfileDoc(uname: string) {
  // ✅ Primero tu colección real: perfiles
  const a = await getDoc(doc(db, "perfiles", uname));
  if (a.exists()) return a;

  // fallback: profiles
  const b = await getDoc(doc(db, "profiles", uname));
  return b;
}

export default function ProfileClient({ username }: { username: string }) {
  const uname = useMemo(() => String(username || "").trim().toLowerCase(), [username]);

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<PublicProfile | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;

    (async () => {
      setLoading(true);
      setError(null);

      try {
        if (!uname) {
          setProfile(null);
          return;
        }

        const snap = await getProfileDoc(uname);
        if (!alive) return;

        if (!snap.exists()) {
          setProfile(null);
          return;
        }

        setProfile(normalizeProfile(uname, snap.data()));
      } catch (e: any) {
        if (!alive) return;
        setError(e?.message || String(e));
        setProfile(null);
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => { alive = false; };
  }, [uname]);

  if (loading) return <div className="mx-auto max-w-xl px-4 py-12 text-sm text-neutral-600">Cargando perfil...</div>;

  if (error) {
    return (
      <div className="mx-auto max-w-xl px-4 py-12">
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="mx-auto max-w-xl px-4 py-12">
        <h1 className="text-2xl font-bold">Perfil no encontrado</h1>
        <p className="mt-2 text-sm text-neutral-600">Revisa tu nombre de usuario o crea tu perfil desde el panel.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-10">
      <div className="rounded-2xl border p-5">
        <div className="text-xl font-bold">{profile.displayName}</div>
        <div className="text-sm text-neutral-600">@ {profile.username}</div>
        {profile.bio ? <div className="mt-3 text-sm">{profile.bio}</div> : null}
      </div>

      <div className="mt-6">
        {profile.links.length === 0 ? (
          <div className="rounded-xl border bg-neutral-50 p-4 text-sm text-neutral-600">
            Este perfil todavía no tiene enlaces.
          </div>
        ) : (
          <div className="grid gap-3">
            {profile.links.map((l, idx) => (
              <a key={idx} href={l.url} target="_blank" rel="noreferrer"
                 className="rounded-xl border px-4 py-3 font-medium hover:bg-neutral-50">
                {l.title}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold">Tienda</h2>

        {profile.products.length === 0 ? (
          <div className="mt-3 rounded-xl border bg-neutral-50 p-4 text-sm text-neutral-600">
            Este perfil todavía no tiene productos
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