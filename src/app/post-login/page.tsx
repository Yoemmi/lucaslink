"use client";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { auth } from "@/lib/firebase.";

export default function PostLogin() {
  const router = useRouter();
  const sp = useSearchParams();

  useEffect(() => {
    const next = sp.get("next") || "/ui3/dashboard";

    const unsub = onAuthStateChanged(auth, (u) => {
      if (u) {
        router.replace(next);
      } else {
        router.replace("/login?next=" + encodeURIComponent(next));
      }
    });

    return () => unsub();
  }, [router, sp]);

  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 18, fontWeight: 700 }}>Entrando...</h1>
      <p style={{ marginTop: 8, opacity: 0.75 }}>Verificando sesión...</p>
    </main>
  );
}