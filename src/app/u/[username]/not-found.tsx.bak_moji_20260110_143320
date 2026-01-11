import Link from "next/link";

const BRAND = "#11b718";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F8FA] px-4">
      <div className="w-full max-w-md rounded-3xl border bg-white p-8 shadow-sm text-center">
        <div className="mx-auto h-12 w-12 rounded-2xl" style={{ backgroundColor: BRAND }} />
        <h1 className="mt-4 text-xl font-black text-gray-900">Perfil no encontrado</h1>
        <p className="mt-2 text-sm text-gray-600">
          Ese username no existe (todavía). Luego lo conectamos a Firebase.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center w-full rounded-2xl px-5 py-3 text-sm font-extrabold text-white"
          style={{ backgroundColor: BRAND }}
        >
          Volver al Home
        </Link>
      </div>
    </div>
  );
}