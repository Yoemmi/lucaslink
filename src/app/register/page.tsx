"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

function RegisterInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const nextUrl = useMemo(() => {
    const n = searchParams.get("next") || searchParams.get("redirect") || "/ui3/dashboard";
    return n.startsWith("/") ? n : "/ui3/dashboard";
  }, [searchParams]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const u = username.trim().toLowerCase();
    if (!u || !/^[a-z0-9_\.]{3,20}$/.test(u)) {
      setError("Username inválido. Usa 3-20: letras/números/._");
      return;
    }

    setLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email.trim(), password);

      // guardamos mapping users/{uid} -> username
      await setDoc(doc(db, "users", cred.user.uid), {
        username: u,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }, { merge: true });

      // (opcional) crear un profile base para que no falle el dashboard
      await setDoc(doc(db, "profiles", u), {
        ownerUid: cred.user.uid,
        username: u,
        displayName: u,
        bio: "",
        photoURL: "",
        published: false,
        links: [],
        products: [],
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }, { merge: true });

      router.push(nextUrl);
    } catch (err: any) {
      setError(err?.message ?? "No se pudo crear la cuenta.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl">
        <div className="mb-5">
          <h1 className="text-2xl font-semibold">Crear cuenta</h1>
          <p className="text-white/70 text-sm mt-1">Crea tu usuario y empieza a publicar tu LucasLink.</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-white/80">Username</label>
            <input
              className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-white/25"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="sulam"
              required
            />
            <div className="text-xs text-white/50 mt-1">
              Vista pública: <span className="text-white/70">/{username || "tuusername"}</span>
            </div>
          </div>

          <div>
            <label className="text-sm text-white/80">Correo</label>
            <input
              className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-white/25"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
            />
          </div>

          <div>
            <label className="text-sm text-white/80">Contraseña</label>
            <input
              className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-white/25"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          {error ? (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">
              {error}
            </div>
          ) : null}

          <button
            disabled={loading}
            className="w-full rounded-xl bg-[#11b718] text-black font-semibold py-2.5 disabled:opacity-60"
            type="submit"
          >
            {loading ? "Creando..." : "Crear cuenta"}
          </button>

          <div className="text-sm text-white/70 flex items-center justify-between">
            <span>¿Ya tienes cuenta?</span>
            <Link className="text-[#11b718] font-semibold" href="/login">
              Iniciar sesión
            </Link>
          </div>
        </form>

        <div className="mt-4 text-xs text-white/50">
          Tip: puedes usar /register?next=/ui3/dashboard
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0B0F19] text-white grid place-items-center">Cargando...</div>}>
      <RegisterInner />
    </Suspense>
  );
}