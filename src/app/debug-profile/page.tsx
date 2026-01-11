import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default function DebugProfilePage() {
  // Esta ruta es solo para desarrollo. En producción no existe.
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 22, fontWeight: 700 }}>Debug Profile</h1>
      <p style={{ marginTop: 8, opacity: 0.8 }}>
        Esta página es solo para DEV. En producción devuelve 404.
      </p>
    </main>
  );
}
