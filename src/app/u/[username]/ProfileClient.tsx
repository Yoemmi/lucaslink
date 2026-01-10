"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import type { CreatorProfile, Product } from "@/lib/demoProfiles";

const BRAND = "#11b718";

function money(p: Product) {
  const val = p.price.toFixed(2);
  return p.currency === "USD" ? `$${val}` : `${val} Bs`;
}

export default function ProfileClient({ profile }: { profile: CreatorProfile }) {
  const [cart, setCart] = useState<Product[]>([]);
  const count = cart.length;

  const cover =
    profile.coverUrl ??
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop";
  const avatar =
    profile.avatarUrl ?? `https://api.dicebear.com/9.x/identicon/svg?seed=${profile.username}`;

  const add = (p: Product) => setCart((prev) => [...prev, p]);

  return (
    <div className="min-h-screen bg-[#F7F8FA] flex justify-center">
      <main className="w-full max-w-[430px] bg-[#F7F8FA] min-h-screen relative pb-24">
        <div className="relative h-44 w-full overflow-hidden">
          <img src={cover} alt="cover" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="px-4 -mt-10">
          <div className="rounded-3xl border bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <img
                src={avatar}
                alt="avatar"
                className="h-16 w-16 rounded-2xl border bg-white object-cover"
              />
              <div className="flex-1">
                <div className="text-lg font-black text-[#0B1220]">{profile.displayName}</div>
                <div className="text-xs text-gray-500">@{profile.username}</div>
              </div>
              <Link href="/" className="text-xs font-bold text-gray-600 hover:text-gray-900">
                Home
              </Link>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">{profile.bio}</p>
          </div>
        </div>

        <section className="px-4 mt-4">
          <h2 className="text-lg font-black text-gray-900 mb-3 px-1">Links</h2>
          <div className="space-y-2">
            {profile.links.map((l) => (
              <a
                key={l.id}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border bg-white px-4 py-3 shadow-sm hover:shadow-md transition"
              >
                <div className="min-w-0">
                  <div className="text-sm font-extrabold text-gray-900 truncate">{l.title}</div>
                  {l.subtitle ? <div className="text-xs text-gray-500 truncate">{l.subtitle}</div> : null}
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
              </a>
            ))}
          </div>
        </section>

        <section className="px-4 mt-6">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-lg font-black text-gray-900">Shop</h2>
            <div className="text-xs text-gray-500">{profile.products.length} items</div>
          </div>

          <div className="mt-3 space-y-3">
            {profile.products.map((p) => (
              <div key={p.id} className="rounded-2xl border bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-sm font-black text-gray-900">{p.title}</div>
                    {p.desc ? <div className="text-xs text-gray-500 mt-1">{p.desc}</div> : null}
                  </div>
                  <div className="text-sm font-black text-gray-900 whitespace-nowrap">{money(p)}</div>
                </div>

                <div className="mt-3 flex justify-end">
                  <button
                    onClick={() => add(p)}
                    className="rounded-xl px-4 py-2 text-xs font-extrabold text-white active:scale-95"
                    style={{ backgroundColor: BRAND }}
                  >
                    Añadir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-10 text-center">
          <p className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">
            Powered by <span className="text-gray-600 font-black tracking-normal">SantiLink</span>
          </p>
        </footer>

        {count > 0 ? (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-[400px] px-4 z-50">
            <button
              className="w-full h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-between px-6 shadow-xl transition-all active:scale-[0.98]"
              onClick={() => alert(`Carrito: ${count} item(s). (Luego hacemos checkout)`)}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <ShoppingBag className="w-5 h-5" />
                  <span
                    className="absolute -top-2 -right-2 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-gray-900"
                    style={{ backgroundColor: BRAND }}
                  >
                    {count}
                  </span>
                </div>
                <span className="font-semibold text-sm">Ver carrito</span>
              </div>
              <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded-md">Checkout</span>
            </button>
          </div>
        ) : null}
      </main>
    </div>
  );
}