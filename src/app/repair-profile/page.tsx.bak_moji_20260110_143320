"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

type Status =
  | { state: "loading"; msg: string }
  | { state: "need_login"; msg: string }
  | { state: "no_username"; msg: string }
  | { state: "exists"; msg: string; username: string }
  | { state: "created"; msg: string; username: string }
  | { state: "error"; msg: string; details?: string };

export default function RepairProfilePage() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>({ state: "loading", msg: "Cargando..." });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        setStatus({ state: "need_login", msg: "No has iniciado sesión." });
        return;
      }

      try {
        setStatus({ state: "loading", msg: "Leyendo tu username..." });

        const userRef = doc(db, "users", u.uid);
        const userSnap = await getDoc(userRef);

        const username = userSnap.exists() ? (userSnap.data() as any).username : null;

        if (!username) {
          setStatus({
            state: "no_username",
            msg: "Tu usuario no tiene username en Firestore (users/{uid}). Ve al /dashboard y créalo.",
          });
          return;
        }

        const uname = String(username).trim().toLowerCase();
        setStatus({ state: "loading", msg: `Revisando profiles/${uname}...` });

        const profileRef = doc(db, "profiles", uname);
        const profileSnap = await getDoc(profileRef);

        if (profileSnap.exists()) {
          setStatus({ state: "exists", msg: "Tu perfil ya existe ✅", username: uname });
          return;
        }

        setStatus({ state: "loading", msg: "No existía el perfil. Creándolo..." });

        await setDoc(profileRef, {
          ownerUid: u.uid,
          username: uname,
          displayName: u.displayName || uname,
          bio: "",
          photoURL: u.photoURL || "",
          published: true,
          links: [],
          products: [],
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });

        setStatus({ state: "created", msg: "Perfil creado ✅", username: uname });
      } catch (e: any) {
        setStatus({
          state: "error",
          msg: "Error reparando el perfil (Firestore).",
          details: e?.message || String(e),
        });
      }
    });

    return () => unsub();
  }, [router]);

  return (
    <div className="mx-auto max-w-lg px-4 py-12">
      <h1 className="text-2xl font-bold">Repair Profile</h1>

      <div className="mt-6 rounded-2xl border p-5">
        <div className="font-medium">{status.msg}</div>

        {status.state === "error" && status.details ? (
          <pre className="mt-3 whitespace-pre-wrap text-xs text-red-700">{status.details}</pre>
        ) : null}

        {status.state === "need_login" ? (
          <button
            className="mt-4 rounded-xl bg-black px-4 py-2 text-white"
            onClick={() => router.push("/login")}
          >
            Ir a Login
          </button>
        ) : null}

        {(status.state === "exists" || status.state === "created") ? (
          <button
            className="mt-4 rounded-xl bg-black px-4 py-2 text-white"
            onClick={() => router.push(`/u/${(status as any).username}`)}
          >
            Ver mi perfil
          </button>
        ) : null}
      </div>
    </div>
  );
}