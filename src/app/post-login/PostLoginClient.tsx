"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  inMemoryPersistence,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

const DASH_FALLBACK = "/ui3/dashboard";

export default function PostLoginClient() {
  const router = useRouter();
  const sp = useSearchParams();
  const ran = useRef(false);
  const [msg, setMsg] = useState("Verificando sesión...");

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    const next = sp.get("next") || DASH_FALLBACK;

    (async () => {
      // Persistencia: local -> session -> memory (incognito)
      try {
        await setPersistence(auth, browserLocalPersistence);
      } catch (e1) {
        try {
          await setPersistence(auth, browserSessionPersistence);
        } catch (e2) {
          await setPersistence(auth, inMemoryPersistence);
        }
      }

      setMsg("Cargando tu sesión...");

      const unsub = onAuthStateChanged(auth, (user) => {
        unsub();
        if (user) {
          router.replace(next);
        } else {
          router.replace(`/login?next=${encodeURIComponent(next)}`);
        }
      });
    })();
  }, [router, sp]);

  return (
    <main style={{ minHeight: "70vh", display: "grid", placeItems: "center", padding: 24 }}>
      <div style={{ textAlign: "center", maxWidth: 520 }}>
        <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{msg}</div>
        <div style={{ opacity: 0.7, fontSize: 14 }}>
          Si estás en incógnito, esto puede tardar 1–2 segundos mientras se guarda la sesión.
        </div>
      </div>
    </main>
  );
}
