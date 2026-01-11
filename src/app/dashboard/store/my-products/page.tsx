"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

type Product = {
  title?: string;
  price?: string | number;
  buyUrl?: string;
};

type ShareItem = {
  title: string;
  priceText?: string;
  buyUrl?: string;
};

function formatPrice(p: Product["price"]) {
  if (p === undefined || p === null || p === "") return "";
  if (typeof p === "number") return `$${p.toFixed(2)}`;

  const s = String(p).trim();
  if (!s) return "";
  if (s.startsWith("$") || /[a-zA-Z]/.test(s)) return s;

  const n = Number(s.replace(",", "."));
  if (!Number.isNaN(n)) return `$${n.toFixed(2)}`;

  return s;
}

function buildShareText(item: ShareItem) {
  const lines: string[] = [`Producto: ${item.title}`];
  if (item.priceText) lines.push(`Precio: ${item.priceText}`);
  if (item.buyUrl) lines.push(`Comprar: ${item.buyUrl}`);
  return lines.join("\n");
}

function openWhatsApp(item: ShareItem) {
  const text = buildShareText(item);
  const wa = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(wa, "_blank", "noopener,noreferrer");
}

async function copyToClipboard(text: string) {
  if (!text) return false;

  // Preferido
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fallback
    }
  }

  // Fallback antiguo
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    ta.style.top = "-9999px";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

function Icon({ name }: { name: "home" | "tag" | "gear" }) {
  const common = "h-4 w-4";
  switch (name) {
    case "home":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5Z" />
        </svg>
      );
    case "tag":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 10V4H14L4 14l6 6 10-10Z" />
          <path d="M15.5 7.5h.01" />
        </svg>
      );
    case "gear":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7Z" />
          <path d="M19.4 15a7.9 7.9 0 0 0 .1-1l2-1.2-2-3.4-2.3.7a7.7 7.7 0 0 0-1.7-1L15 6.4 11 6l-1 2.1a7.7 7.7 0 0 0-1.7 1l-2.3-.7-2 3.4L6 14a7.9 7.9 0 0 0 .1 1L4 16.2l2 3.4 2.3-.7a7.7 7.7 0 0 0 1.7 1L11 22l4-.4 1-2.1a7.7 7.7 0 0 0 1.7-1l2.3.7 2-3.4L19.4 15Z" />
        </svg>
      );
  }
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-medium text-slate-600">
      {children}
    </span>
  );
}

function Card({
  title,
  desc,
  icon,
  href,
  ribbon,
}: {
  title: string;
  desc?: string;
  icon?: ReactNode;
  href?: string;
  ribbon?: string;
}) {
  const Inner = (
    <div className="relative w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-[1px] hover:shadow-md">
      {ribbon ? (
        <div className="absolute right-3 top-3">
          <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-semibold text-white">{ribbon}</span>
        </div>
      ) : null}

      <div className="flex items-start gap-3">
        {icon ? (
          <div className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700">
            {icon}
          </div>
        ) : null}
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-slate-900">{title}</div>
          {desc ? <div className="mt-1 text-xs leading-relaxed text-slate-600">{desc}</div> : null}
        </div>
      </div>
    </div>
  );

  if (!href) return Inner;
  return (
    <Link href={href} className="block">
      {Inner}
    </Link>
  );
}

function ShareModal({
  open,
  item,
  onClose,
  onToast,
}: {
  open: boolean;
  item: ShareItem | null;
  onClose: () => void;
  onToast: (msg: string) => void;
}) {
  if (!open || !item) return null;

  const shareText = buildShareText(item);

  return (
    <div className="fixed inset-0 z-50">
      <button
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-label="Cerrar"
        type="button"
      />
      <div className="absolute left-1/2 top-1/2 w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-slate-900">Compartir</div>
            <div className="mt-1 truncate text-xs text-slate-600">{item.title}</div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            X
          </button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => openWhatsApp(item)}
            className="rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:opacity-95"
          >
            WhatsApp
          </button>

          <button
            type="button"
            onClick={async () => {
              if (!item.buyUrl) return;
              const ok = await copyToClipboard(item.buyUrl);
              onToast(ok ? "Enlace copiado" : "No se pudo copiar");
              if (ok) onClose();
            }}
            disabled={!item.buyUrl}
            className={[
              "rounded-xl border px-3 py-2 text-xs font-semibold",
              item.buyUrl
                ? "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                : "border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed",
            ].join(" ")}
          >
            Copiar enlace
          </button>

          <button
            type="button"
            disabled
            className="rounded-xl border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-400 cursor-not-allowed"
            title="Próximamente"
          >
            Instagram
          </button>

          <button
            type="button"
            disabled
            className="rounded-xl border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-400 cursor-not-allowed"
            title="Próximamente"
          >
            Facebook
          </button>

          <button
            type="button"
            disabled
            className="rounded-xl border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-400 cursor-not-allowed"
            title="Próximamente"
          >
            X (Twitter)
          </button>

          <button
            type="button"
            disabled
            className="rounded-xl border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-400 cursor-not-allowed"
            title="Próximamente"
          >
            Telegram
          </button>
        </div>

        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-[11px] text-slate-600 whitespace-pre-line">
          {shareText}
        </div>
      </div>
    </div>
  );
}

export default function MyProductsHome() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [err, setErr] = useState<string | null>(null);

  const [shareOpen, setShareOpen] = useState(false);
  const [shareItem, setShareItem] = useState<ShareItem | null>(null);

  const [toast, setToast] = useState<string | null>(null);
  function showToast(msg: string) {
    setToast(msg);
    window.setTimeout(() => setToast(null), 1800);
  }

  const upsell = useMemo(
    () => [
      { title: "0% comisiones para el vendedor.", desc: "Gana más con cada venta que realices." },
      { title: "Personalizar las URL de los productos.", desc: "Cada producto con su enlace bonito." },
      { title: "Membresías ilimitadas", desc: "Contenido exclusivo para tus clientes." },
    ],
    []
  );

  const create = useMemo(
    () => [
      { title: "Producto digital", icon: <Icon name="tag" />, href: "/dashboard#products" },
      { title: "Enlace externo", icon: <Icon name="tag" />, href: "/dashboard#products", ribbon: "PRO" },
    ],
    []
  );

  useEffect(() => {
    let unsubProfile: null | (() => void) = null;

    const unsubAuth = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/login");
        return;
      }

      setErr(null);
      setLoading(true);

      try {
        const uref = doc(db, "users", user.uid);
        const usnap = await getDoc(uref);
        const uname = usnap.exists() ? (usnap.data() as any)?.username : null;

        if (!uname) {
          setUsername(null);
          setProducts([]);
          setErr("No se encontró tu username en users/{uid}. Ve a /dashboard y crea tu perfil.");
          setLoading(false);
          return;
        }

        setUsername(String(uname));

        const pref = doc(db, "profiles", String(uname));
        unsubProfile = onSnapshot(
          pref,
          (psnap) => {
            if (!psnap.exists()) {
              setProducts([]);
              setErr("Tu perfil profiles/{username} no existe todavía. Usa /dashboard para crearlo.");
              setLoading(false);
              return;
            }
            const data = psnap.data() as any;
            const list = Array.isArray(data?.products) ? (data.products as Product[]) : [];
            setProducts(list);
            setErr(null);
            setLoading(false);
          },
          (e) => {
            setProducts([]);
            setErr(e?.message || "Error leyendo tu perfil en Firestore (posible PERMISSION_DENIED).");
            setLoading(false);
          }
        );
      } catch (e: any) {
        setProducts([]);
        setErr(e?.message || "Error cargando datos.");
        setLoading(false);
      }
    });

    return () => {
      unsubAuth();
      if (unsubProfile) unsubProfile();
    };
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-50">
      {toast ? (
        <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-lg">
          {toast}
        </div>
      ) : null}

      <ShareModal
        open={shareOpen}
        item={shareItem}
        onClose={() => setShareOpen(false)}
        onToast={showToast}
      />

      <div className="mx-auto max-w-[1280px] px-4 py-4">
        <div className="flex gap-4">
          <aside className="hidden w-64 shrink-0 md:block">
            <div className="sticky top-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="flex items-center gap-2 px-2 py-2">
                <div className="h-9 w-9 rounded-xl bg-slate-900" />
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-slate-900">LucasLink</div>
                  <div className="truncate text-xs text-slate-500">Panel</div>
                </div>
              </div>

              <div className="mt-3 space-y-1">
                <Link className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50" href="/dashboard">
                  <Icon name="home" /> Dashboard
                </Link>

                <Link className="flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white" href="/dashboard/store/my-products">
                  <Icon name="tag" /> Productos digitales
                </Link>

                <Link className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50" href="/dashboard#settings">
                  <Icon name="gear" /> Ajustes
                </Link>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <div className="text-xs font-semibold text-slate-800">@{username ?? "..."}</div>
                <button className="mt-3 w-full rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:opacity-95">
                  Mejorar
                </button>
              </div>
            </div>
          </aside>

          <main className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <div className="min-w-0">
                <div className="text-sm font-semibold text-slate-900">
                  Aprovecha al máximo tu tienda. <span className="text-slate-500">Haz upgrade cuando quieras.</span>
                </div>
                <div className="mt-1 flex flex-wrap gap-2">
                  <Badge>Ganar más</Badge>
                  <Badge>Funciones Pro</Badge>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:opacity-95">
                  Actualizar
                </button>
              </div>
            </div>

            <div className="mt-4 overflow-x-auto">
              <div className="flex min-w-max gap-3 pb-1">
                {upsell.map((c) => (
                  <div key={c.title} className="w-[260px]">
                    <Card title={c.title} desc={c.desc} />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div className="text-lg font-semibold text-slate-900">Tu espacio de trabajo</div>
                  <div className="mt-1 text-sm text-slate-600">Aquí se muestran tus productos en tiempo real.</div>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href="/dashboard#products"
                    className="rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:opacity-95"
                  >
                    Agregar nuevo producto
                  </Link>

                  {username ? (
                    <Link
                      href={`/${username}`}
                      className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                    >
                      Ver perfil público →
                    </Link>
                  ) : null}
                </div>
              </div>

              {loading ? (
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-20 animate-pulse rounded-2xl border border-slate-200 bg-slate-50" />
                  ))}
                </div>
              ) : err ? (
                <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">{err}</div>
              ) : products.length === 0 ? (
                <div className="mt-5 text-center">
                  <div className="text-base font-semibold text-slate-900">Aún no tienes productos</div>
                  <div className="mt-1 text-sm text-slate-600">Pulsa “Agregar nuevo producto” para crear el primero.</div>
                </div>
              ) : (
                <div className="mt-5">
                  <div className="mb-3 text-sm font-semibold text-slate-900">Tus productos</div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((p, idx) => {
                      const title = p?.title?.trim() || `Producto ${idx + 1}`;
                      const priceText = formatPrice(p?.price);
                      const buyUrl = (p?.buyUrl || "").trim();

                      return (
                        <div key={`${title}-${idx}`} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <div className="truncate text-sm font-semibold text-slate-900">{title}</div>
                              <div className="mt-1 text-xs text-slate-600">
                                {priceText ? <span className="font-semibold text-slate-900">{priceText}</span> : <span>Sin precio</span>}
                                <span className="ml-2 text-slate-400">•</span>
                                {buyUrl ? <span className="ml-2 text-slate-600">Con enlace</span> : <span className="ml-2 text-slate-600">Sin enlace</span>}
                              </div>
                            </div>
                            <div className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700">
                              <Icon name="tag" />
                            </div>
                          </div>

                          <div className="mt-4 flex flex-wrap gap-2">
                            <Link
                              href="/dashboard#products"
                              className="rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:opacity-95"
                            >
                              Editar
                            </Link>

                            {buyUrl ? (
                              <a
                                href={buyUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                              >
                                Probar Comprar →
                              </a>
                            ) : null}

                            <button
                              type="button"
                              onClick={() => {
                                setShareItem({ title, priceText: priceText || undefined, buyUrl: buyUrl || undefined });
                                setShareOpen(true);
                              }}
                              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                            >
                              Compartir
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="mt-8">
                <div className="mb-3 text-sm font-semibold text-slate-900">Crear</div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {create.map((c) => (
                    <Card key={c.title} title={c.title} desc={c.desc} icon={c.icon} href={c.href} ribbon={c.ribbon} />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 text-center text-xs text-slate-500">
              Tip: “Editar” y “Agregar nuevo producto” van a /dashboard#products (tu editor actual).
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}