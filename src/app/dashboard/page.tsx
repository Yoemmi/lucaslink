"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import type { CreatorProfile } from "@/lib/types";
import { getProfile } from "@/lib/demoProfiles";
import { clearProfileOverride, saveProfileOverride } from "@/lib/profileStore";

const BRAND = "#11b718";

function newId() {
  try {
    return crypto.randomUUID();
  } catch {
    return Math.random().toString(36).slice(2);
  }
}

export default function DashboardPage() {
  const [username, setUsername] = useState<"santi" | "demo">("santi");
  const base = useMemo(() => getProfile(username)!, [username]);

  const [profile, setProfile] = useState<CreatorProfile>(base);

  // cuando cambias de user, reinicia el editor con el demo
  React.useEffect(() => {
    setProfile(base);
  }, [base]);

  const save = () => {
    saveProfileOverride(profile);
    alert("✅ Guardado. Abre /u/" + profile.username + " y refresca.");
  };

  const reset = () => {
    clearProfileOverride(profile.username);
    setProfile(base);
    alert("🧹 Reseteado. Refresca /u/" + profile.username);
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-black text-[#0B1220]">Dashboard (Editor)</h1>
            <p className="text-sm text-gray-600">
              Edita y guarda en tu navegador (localStorage). Luego lo conectamos a Firebase.
            </p>
          </div>

          <Link
            href={`/u/${username}`}
            className="rounded-2xl px-4 py-3 text-sm font-extrabold text-white shadow-sm"
            style={{ backgroundColor: BRAND }}
          >
            Ver perfil /u/{username}
          </Link>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Editor */}
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-3">
              <label className="text-xs font-black text-gray-700">Editar usuario:</label>
              <select
                value={username}
                onChange={(e) => setUsername(e.target.value as any)}
                className="rounded-xl border px-3 py-2 text-sm font-semibold"
              >
                <option value="santi">santi</option>
                <option value="demo">demo</option>
              </select>

              <div className="ml-auto flex gap-2">
                <button
                  onClick={reset}
                  className="rounded-2xl border px-4 py-2 text-sm font-extrabold text-gray-800 hover:bg-gray-50"
                >
                  Reset
                </button>
                <button
                  onClick={save}
                  className="rounded-2xl px-4 py-2 text-sm font-extrabold text-white"
                  style={{ backgroundColor: BRAND }}
                >
                  Guardar
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              <div>
                <div className="text-xs font-black text-gray-700 mb-1">Nombre</div>
                <input
                  value={profile.displayName}
                  onChange={(e) => setProfile({ ...profile, displayName: e.target.value })}
                  className="w-full rounded-2xl border px-4 py-3 text-sm"
                />
              </div>

              <div>
                <div className="text-xs font-black text-gray-700 mb-1">Bio</div>
                <textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  className="w-full rounded-2xl border px-4 py-3 text-sm min-h-[90px]"
                />
              </div>

              <div className="grid gap-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-black text-[#0B1220]">Links</div>
                  <button
                    onClick={() =>
                      setProfile({
                        ...profile,
                        links: [
                          ...profile.links,
                          { id: newId(), title: "Nuevo link", subtitle: "", url: "https://example.com" },
                        ],
                      })
                    }
                    className="rounded-xl border px-3 py-2 text-xs font-extrabold"
                  >
                    + Añadir
                  </button>
                </div>

                {profile.links.map((l, idx) => (
                  <div key={l.id} className="rounded-2xl border p-4 bg-gray-50">
                    <div className="grid gap-2 md:grid-cols-3">
                      <input
                        value={l.title}
                        onChange={(e) => {
                          const links = [...profile.links];
                          links[idx] = { ...links[idx], title: e.target.value };
                          setProfile({ ...profile, links });
                        }}
                        className="rounded-xl border px-3 py-2 text-sm"
                        placeholder="Título"
                      />
                      <input
                        value={l.subtitle || ""}
                        onChange={(e) => {
                          const links = [...profile.links];
                          links[idx] = { ...links[idx], subtitle: e.target.value };
                          setProfile({ ...profile, links });
                        }}
                        className="rounded-xl border px-3 py-2 text-sm"
                        placeholder="Subtítulo"
                      />
                      <input
                        value={l.url}
                        onChange={(e) => {
                          const links = [...profile.links];
                          links[idx] = { ...links[idx], url: e.target.value };
                          setProfile({ ...profile, links });
                        }}
                        className="rounded-xl border px-3 py-2 text-sm"
                        placeholder="URL"
                      />
                    </div>

                    <div className="mt-3 flex justify-end">
                      <button
                        onClick={() => {
                          const links = profile.links.filter((x) => x.id !== l.id);
                          setProfile({ ...profile, links });
                        }}
                        className="text-xs font-extrabold text-red-600 hover:underline"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid gap-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-black text-[#0B1220]">Productos</div>
                  <button
                    onClick={() =>
                      setProfile({
                        ...profile,
                        products: [
                          ...profile.products,
                          { id: newId(), title: "Nuevo producto", desc: "", price: 10, currency: "USD" },
                        ],
                      })
                    }
                    className="rounded-xl border px-3 py-2 text-xs font-extrabold"
                  >
                    + Añadir
                  </button>
                </div>

                {profile.products.map((p, idx) => (
                  <div key={p.id} className="rounded-2xl border p-4 bg-gray-50">
                    <div className="grid gap-2 md:grid-cols-4">
                      <input
                        value={p.title}
                        onChange={(e) => {
                          const products = [...profile.products];
                          products[idx] = { ...products[idx], title: e.target.value };
                          setProfile({ ...profile, products });
                        }}
                        className="rounded-xl border px-3 py-2 text-sm"
                        placeholder="Título"
                      />
                      <input
                        value={p.desc || ""}
                        onChange={(e) => {
                          const products = [...profile.products];
                          products[idx] = { ...products[idx], desc: e.target.value };
                          setProfile({ ...profile, products });
                        }}
                        className="rounded-xl border px-3 py-2 text-sm"
                        placeholder="Descripción"
                      />
                      <input
                        type="number"
                        value={p.price}
                        onChange={(e) => {
                          const products = [...profile.products];
                          products[idx] = { ...products[idx], price: Number(e.target.value) };
                          setProfile({ ...profile, products });
                        }}
                        className="rounded-xl border px-3 py-2 text-sm"
                        placeholder="Precio"
                      />
                      <select
                        value={p.currency}
                        onChange={(e) => {
                          const products = [...profile.products];
                          products[idx] = { ...products[idx], currency: e.target.value as any };
                          setProfile({ ...profile, products });
                        }}
                        className="rounded-xl border px-3 py-2 text-sm"
                      >
                        <option value="USD">USD</option>
                        <option value="VES">VES</option>
                      </select>
                    </div>

                    <div className="mt-3 flex justify-end">
                      <button
                        onClick={() => {
                          const products = profile.products.filter((x) => x.id !== p.id);
                          setProfile({ ...profile, products });
                        }}
                        className="text-xs font-extrabold text-red-600 hover:underline"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Instrucciones rápidas */}
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="text-sm font-black text-[#0B1220]">Cómo probar</div>
            <ol className="mt-3 space-y-2 text-sm text-gray-700 list-decimal list-inside">
              <li>Edita nombre, bio, links o productos.</li>
              <li>Pulsa <b>Guardar</b>.</li>
              <li>Abre <b>/u/{username}</b> y refresca.</li>
              <li>Si quieres volver al demo: <b>Reset</b>.</li>
            </ol>

            <div className="mt-6 rounded-2xl border bg-gray-50 p-4 text-xs text-gray-600">
              <b>Siguiente paso:</b> conectar esto a Firebase (Firestore) para que cada usuario guarde su perfil real.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
