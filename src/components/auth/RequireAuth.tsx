"use client";

import React, { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { usePathname, useRouter } from "next/navigation";

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [checking, setChecking] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setChecking(false);

      if (!u) {
        const next = encodeURIComponent(pathname || "/ui3/dashboard");
        router.replace(`/login?next=${next}`);
      }
    });
    return () => unsub();
  }, [router, pathname]);

  if (checking) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-700 shadow-sm">
          Cargando…
        </div>
      </div>
    );
  }

  // If not logged in, we already redirected. Render nothing to avoid flicker.
  if (!user) return null;

  return <>{children}</>;
}
