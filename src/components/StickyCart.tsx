"use client";

import { ShoppingBag } from "lucide-react";
import { BRAND_COLOR } from "@/constants";

export default function StickyCart({ count }: { count: number }) {
  if (count === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-[430px] px-4 z-50">
      <button className="w-full h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-between px-5 shadow-xl transition active:scale-[0.98]">
        <div className="flex items-center gap-3">
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            <span
              className="absolute -top-2 -right-2 min-w-5 h-5 px-1 rounded-full flex items-center justify-center text-[11px] font-extrabold border-2 border-gray-900"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              {count}
            </span>
          </div>

          <span className="font-bold text-sm">Ver carrito</span>
        </div>

        <span className="text-xs font-bold bg-white/15 px-3 py-1 rounded-lg">
          Checkout
        </span>
      </button>
    </div>
  );
}
