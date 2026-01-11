"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

export default function DebugProfilePage() {
  const [uid, setUid] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [data, setData] = useState<any>(null);
  const [err, setErr] = useState<string>("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        setErr("No estás logueado. Ve a /login");
        return;
      }
      setUid(u.uid);
      setErr("");

      try {
        const uSnap = await getDoc(doc(db, "users", u.uid));
        const uname = uSnap.exists() ? (uSnap.data() as any).username : "";
        setUsername(uname || "(sin username en users/{uid})");

        if (uname) {
          const pSnap = await getDoc(doc(db, "profiles", String(uname).toLowerCase()));
          setData(pSnap.exists() ? pSnap.data() : { _missing: true });
        }
      } catch (e: any) {
        setErr(e?.message || String(e));
      }
    });

    return () => unsub();
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-2xl font-bold">Debug Profile</h1>
      <div className="mt-3 text-sm text-neutral-600">UID: {uid || "-"}</div>
      <div className="mt-1 text-sm text-neutral-600">Username: {username || "-"}</div>

      {err ? (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">{err}</div>
      ) : null}

      <div className="mt-6 rounded-2xl border p-4">
        <div className="text-sm font-medium">profiles/{String(username).toLowerCase()}</div>
        <pre className="mt-3 whitespace-pre-wrap text-xs">{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}