import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  FileText,
  Globe,
  Link2,
  Mail,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

const BRAND = "#11b718";

const features = [
  { icon: Link2, title: "Link-in-bio moderno", desc: "Todos tus enlaces en un solo lugar, con diseño premium y personalizable." },
  { icon: ShoppingBag, title: "Tienda para vender", desc: "Vende productos digitales, servicios o membresías desde tu perfil." },
  { icon: Mail, title: "Email marketing", desc: "Captura correos y envía campañas sin usar herramientas externas." },
  { icon: FileText, title: "Media kit", desc: "Muestra tu alcance y consigue marcas con un media kit actualizado." },
  { icon: BarChart3, title: "Analíticas", desc: "Mide clicks, ventas y rendimiento de tu perfil en tiempo real." },
  { icon: ShieldCheck, title: "Pagos y seguridad", desc: "Checkout listo para móvil y escritorio con buenas prácticas." },
];

const aiList = [
  "Textos para tu bio y perfil",
  "Descripciones de productos",
  "Ideas de campañas y correos",
  "Miniaturas e imágenes sugeridas",
  "Automatizaciones simples",
];

const testimonials = [
  { name: "Creador/a", role: "Contenido / Marca personal", quote: "Ahora tengo todo en un solo lugar: links, tienda y captación de clientes. Se siente profesional." },
  { name: "Emprendedor/a", role: "Productos digitales", quote: "Monté mi catálogo en minutos y empecé a vender sin tener que armar una web completa." },
  { name: "Freelancer", role: "Servicios", quote: "El perfil se ve increíble en móvil y es perfecto para enviarlo por WhatsApp e Instagram." },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Empuja el contenido por el navbar fixed */}
      <main className="pt-20">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white" />
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-semibold text-gray-700">
                <Zap className="h-4 w-4" style={{ color: BRAND }} />
                Plataforma todo-en-uno para vender y crecer
              </div>

              <h1 className="mt-4 text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
                Tu página tipo <span style={{ color: BRAND }}>Beacons</span>, pero hecha para tu negocio.
              </h1>

              <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
                Crea un link-in-bio moderno, agrega tu tienda, captura leads y cobra — todo en un solo lugar y optimizado para móvil.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-extrabold text-white shadow-sm"
                  style={{ backgroundColor: BRAND }}
                >
                  Empezar gratis <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-bold text-gray-800 hover:bg-gray-50"
                >
                  Ver funcionalidades
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4" style={{ color: BRAND }} /> Perfil móvil premium
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4" style={{ color: BRAND }} /> Tienda lista
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4" style={{ color: BRAND }} /> Analíticas
                </span>
              </div>
            </div>

            {/* Mock preview */}
            <div className="mx-auto w-full max-w-[420px]">
              <div className="rounded-[28px] border bg-white p-4 shadow-sm">
                <div className="rounded-2xl bg-gray-100 p-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl" style={{ backgroundColor: BRAND }} />
                    <div className="flex-1">
                      <div className="h-3 w-28 rounded bg-gray-300" />
                      <div className="mt-2 h-2 w-40 rounded bg-gray-200" />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    {["Instagram", "YouTube", "WhatsApp", "Mi Web"].map((t) => (
                      <div
                        key={t}
                        className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-xl bg-gray-100" />
                          <div>
                            <div className="text-sm font-bold text-gray-900">{t}</div>
                            <div className="text-xs text-gray-500">Enlace rápido</div>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-black text-gray-900">Shop</div>
                      <div className="text-xs text-gray-500">2 items</div>
                    </div>

                    <div className="mt-3 space-y-2">
                      {[
                        { title: "Ebook: Guía rápida", price: "$9.99" },
                        { title: "Plantillas Pro", price: "$19.99" },
                      ].map((p) => (
                        <div key={p.title} className="flex items-center justify-between rounded-2xl border px-3 py-3">
                          <div>
                            <div className="text-sm font-bold text-gray-900">{p.title}</div>
                            <div className="text-xs text-gray-500">Descargable / digital</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-sm font-black text-gray-900">{p.price}</div>
                            <button
                              className="rounded-xl px-3 py-2 text-xs font-extrabold text-white"
                              style={{ backgroundColor: BRAND }}
                            >
                              Añadir
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 text-center text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    Powered by BioLink
                  </div>
                </div>
              </div>

              <p className="mt-3 text-center text-xs text-gray-500">Preview tipo móvil (como Beacons)</p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="text-2xl font-black tracking-tight text-gray-900">
              Todo lo que necesitas en una sola plataforma
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-600">
              En vez de pagar muchas herramientas por separado, aquí lo juntas todo.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="rounded-3xl border bg-white p-5 shadow-sm">
                    <div
                      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: `${BRAND}15`, color: BRAND }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 text-base font-black text-gray-900">{f.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* AI */}
        <section id="ai" className="border-t bg-gray-50">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700">
                <Bot className="h-4 w-4" style={{ color: BRAND }} />
                Potenciado por IA
              </div>

              <h2 className="mt-3 text-2xl font-black tracking-tight text-gray-900">Crea más rápido, vende más fácil.</h2>

              <p className="mt-2 text-sm text-gray-600">
                Integra IA para ayudarte con texto, ideas, assets y automatizaciones.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-gray-700">
                {aiList.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4" style={{ color: BRAND }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="text-sm font-black text-gray-900">Ejemplo de panel “Creator”</div>
              <div className="mt-4 grid gap-3">
                {[
                  { label: "Clicks hoy", value: "1,284" },
                  { label: "Ventas", value: "12" },
                  { label: "Ingresos", value: "$248.00" },
                ].map((m) => (
                  <div key={m.label} className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">
                    <span className="text-xs font-semibold text-gray-600">{m.label}</span>
                    <span className="text-sm font-black text-gray-900">{m.value}</span>
                  </div>
                ))}
                <div className="rounded-2xl border px-4 py-4">
                  <div className="flex items-center gap-2 text-sm font-black text-gray-900">
                    <Users className="h-4 w-4" style={{ color: BRAND }} />
                    Sugerencia IA
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    “Publica tu producto #1 hoy y compártelo en WhatsApp con un CTA claro. Te dejo un texto listo para copiar.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="text-2xl font-black tracking-tight text-gray-900">Precios simples</h2>
            <p className="mt-2 text-sm text-gray-600">Empieza gratis y sube a Pro cuando quieras.</p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border p-6 shadow-sm">
                <div className="text-sm font-black text-gray-900">Free</div>
                <div className="mt-2 text-3xl font-black text-gray-900">
                  $0<span className="text-base font-bold text-gray-500">/mes</span>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-gray-700">
                  {["Link-in-bio básico", "Links ilimitados", "Tienda simple", "Checkout listo"].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4" style={{ color: BRAND }} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border px-4 py-3 text-sm font-extrabold text-gray-900 hover:bg-gray-50">
                  Empezar gratis
                </a>
              </div>

              <div className="rounded-3xl border p-6 shadow-sm ring-2" style={{ borderColor: `${BRAND}55`, boxShadow: `0 0 0 1px ${BRAND}33` }}>
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-extrabold text-white" style={{ backgroundColor: BRAND }}>
                  <Sparkles className="h-4 w-4" />
                  Recomendado
                </div>
                <div className="mt-3 text-sm font-black text-gray-900">Pro</div>
                <div className="mt-2 text-3xl font-black text-gray-900">
                  $10<span className="text-base font-bold text-gray-500">/mes</span>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-gray-700">
                  {["Dominio personalizado", "Email marketing", "Analíticas avanzadas", "Plantillas premium"].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4" style={{ color: BRAND }} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-extrabold text-white shadow-sm" style={{ backgroundColor: BRAND }}>
                  Probar Pro <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="rounded-3xl border p-6 shadow-sm">
                <div className="text-sm font-black text-gray-900">Business</div>
                <div className="mt-2 text-3xl font-black text-gray-900">
                  $29<span className="text-base font-bold text-gray-500">/mes</span>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-gray-700">
                  {["Multi-usuario (equipo)", "Permisos y roles", "Automatizaciones", "Soporte prioritario"].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4" style={{ color: BRAND }} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border px-4 py-3 text-sm font-extrabold text-gray-900 hover:bg-gray-50">
                  Hablar con ventas
                </a>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border bg-gray-50 p-6 text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <Globe className="mt-0.5 h-5 w-5" style={{ color: BRAND }} />
                <div>
                  <div className="font-black text-gray-900">Tu idea (tipo Beacons)</div>
                  <p className="mt-1 text-gray-600">
                    Vendes perfiles/páginas + planes mensuales + comisión por venta.
                    Este home es la base visual; luego agregamos: registro/login, editor de página y checkout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="mt-2 text-xs text-gray-400">
            © {new Date().getFullYear()} SantiLink. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
