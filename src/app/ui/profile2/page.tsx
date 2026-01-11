import Link from "next/link";
import Ui2Styles from "@/components/ui2/Ui2Styles";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#E7EAF2] bg-white px-3 py-1 text-xs font-bold text-[#0B1220]">
      {children}
    </span>
  );
}

export default function Profile2Page() {
  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      <Ui2Styles />

      <div className="mx-auto max-w-[520px] px-4 py-10">
        <div className="rounded-3xl border border-[#E7EAF2] bg-white p-6 shadow-xl shadow-black/5">
          <div className="flex items-start gap-4">
            <div className="h-16 w-16 rounded-2xl bg-[#11B718]/10 border border-[#11B718]/20 flex items-center justify-center">
              <span className="text-[#11B718] font-black text-2xl">S</span>
            </div>

            <div className="min-w-0">
              <div className="truncate text-xl font-extrabold tracking-tight text-[#0B1220]">Sulam (demo)</div>
              <div className="mt-1 text-sm text-gray-500">
                Bio de ejemplo para la pantalla <span className="font-bold">profile2</span> (solo visual).
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Pill>links</Pill>
                <Pill>tienda</Pill>
                <Pill>tema</Pill>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {[
              { t: "Instagram", d: "@sulam" },
              { t: "YouTube", d: "Mi canal" },
              { t: "Portafolio", d: "Mis trabajos" },
              { t: "Contacto", d: "WhatsApp / email" },
            ].map((x) => (
              <div
                key={x.t}
                className="flex items-center justify-between rounded-2xl border border-[#E7EAF2] bg-white px-4 py-3"
              >
                <div className="min-w-0">
                  <div className="truncate text-sm font-extrabold text-[#0B1220]">{x.t}</div>
                  <div className="truncate text-xs text-gray-500">{x.d}</div>
                </div>
                <span className="text-gray-400">→</span>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-3xl border border-[#E7EAF2] bg-[#F6F7FB] p-5">
            <div className="text-sm font-extrabold text-[#0B1220]">Tienda (mock)</div>
            <div className="mt-4 grid grid-cols-1 gap-3">
              {[
                { t: "Curso PDF", p: "$9.99", cta: "Comprar" },
                { t: "Plantilla Notion", p: "$4.99", cta: "Comprar" },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border border-[#E7EAF2] bg-white p-4">
                  <div className="text-sm font-extrabold text-[#0B1220]">{x.t}</div>
                  <div className="mt-1 text-xs text-gray-500">{x.p}</div>
                  <button className="mt-4 w-full rounded-2xl bg-[#11B718] px-4 py-3 text-sm font-extrabold text-white shadow-xl shadow-[#11B718]/20 hover:shadow-[#11B718]/30 transition-all active:scale-95">
                    {x.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500">
            <span>UI only (sin Firestore)</span>
            <div className="flex gap-2">
              <Link className="font-bold text-[#0B1220] hover:text-[#11B718]" href="/ui/dashboard2">
                Dashboard →
              </Link>
              <Link className="font-bold text-[#0B1220] hover:text-[#11B718]" href="/ui/products2">
                Productos →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
