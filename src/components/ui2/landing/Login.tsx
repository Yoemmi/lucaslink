"use client";

import React, { useMemo, useState } from "react";

type Mode = "login" | "signup";

export type AuthSubmitPayload = {
  fullName?: string;
  email: string;
  password: string;
};

interface LoginProps {
  mode: Mode;
  onBack: () => void;
  onSwitchMode: (mode: Mode) => void;
  onLoginSuccess: () => void;

  /**
   * Optional: if provided, the component will call this async submit handler.
   * If not provided, it will behave as a visual-only mock (simulated delay).
   */
  onSubmit?: (payload: AuthSubmitPayload) => Promise<void>;
}

function toErrorMessage(e: any) {
  const msg = String(e?.message || "Error");
  // Show a cleaner message for Firebase errors
  if (msg.includes("auth/invalid-credential") || msg.includes("auth/wrong-password") || msg.includes("auth/user-not-found")) {
    return "Credenciales inválidas. Revisa tu email y contraseña.";
  }
  if (msg.includes("auth/invalid-email")) return "Email inválido.";
  if (msg.includes("auth/email-already-in-use")) return "Ese email ya está registrado.";
  if (msg.includes("auth/weak-password")) return "Contraseña débil. Usa al menos 6 caracteres.";
  if (msg.includes("auth/network-request-failed")) return "Sin conexión. Verifica tu internet.";
  return msg;
}

const Login: React.FC<LoginProps> = ({ mode, onBack, onSwitchMode, onLoginSuccess, onSubmit }) => {
  const isLogin = mode === "login";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const title = useMemo(() => (isLogin ? "Bienvenido de nuevo" : "Crea tu cuenta"), [isLogin]);
  const subtitle = useMemo(
    () => (isLogin ? "Inicia sesión para gestionar tus enlaces" : "Únete a miles de creadores hoy mismo"),
    [isLogin]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    try {
      if (onSubmit) {
        await onSubmit({ fullName: isLogin ? undefined : fullName.trim(), email: email.trim(), password });
      } else {
        // Visual-only mock
        await new Promise((r) => setTimeout(r, 800));
      }
      onLoginSuccess();
    } catch (e2: any) {
      setErr(toErrorMessage(e2));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-[520px] rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onBack}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            Volver
          </button>

          <div className="text-xs font-semibold text-slate-600">
            {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}{" "}
            <button
              type="button"
              onClick={() => onSwitchMode(isLogin ? "signup" : "login")}
              className="text-[#11B718] hover:underline"
            >
              {isLogin ? "Crear cuenta" : "Iniciar sesión"}
            </button>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-extrabold text-[#0B1220]">{title}</h2>
          <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
        </div>

        {err ? (
          <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">{err}</div>
        ) : null}

        <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
          {!isLogin ? (
            <div>
              <label className="block text-sm font-bold text-[#0B1220] mb-2 px-1">Nombre completo</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ej. Alex Rivera"
                className="w-full rounded-2xl border border-slate-200 bg-[#F6F7FB] px-6 py-4 font-medium text-slate-900 placeholder:text-slate-400 focus:border-[#11B718] focus:outline-none"
              />
            </div>
          ) : null}

          <div>
            <label className="block text-sm font-bold text-[#0B1220] mb-2 px-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tuemail@correo.com"
              className="w-full rounded-2xl border border-slate-200 bg-[#F6F7FB] px-6 py-4 font-medium text-slate-900 placeholder:text-slate-400 focus:border-[#11B718] focus:outline-none"
              autoComplete="email"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#0B1220] mb-2 px-1">Contraseña</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-2xl border border-slate-200 bg-[#F6F7FB] px-6 py-4 font-medium text-slate-900 placeholder:text-slate-400 focus:border-[#11B718] focus:outline-none"
              autoComplete={isLogin ? "current-password" : "new-password"}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-[#11B718] py-4 text-sm font-extrabold text-white hover:opacity-95 disabled:opacity-70"
          >
            {loading ? (isLogin ? "Entrando..." : "Creando cuenta...") : isLogin ? "Iniciar sesión" : "Crear cuenta"}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-slate-500">
          {isLogin ? "Al iniciar sesión aceptas nuestros términos." : "Al crear tu cuenta aceptas nuestros términos."}
        </div>
      </div>
    </div>
  );
};

export default Login;
