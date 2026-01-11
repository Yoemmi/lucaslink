"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Ui2Styles from "@/components/ui2/Ui2Styles";
import Login from "@/components/ui2/landing/Login";

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/ui3/dashboard";

  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      <Ui2Styles />
      <Login
        mode="login"
        onBack={() => router.push("/")}
        onSwitchMode={() => router.push(`/register?next=${encodeURIComponent(next)}`)}
        onLoginSuccess={() => router.push(next)}
        onSubmit={async ({ email, password }) => {
          await signInWithEmailAndPassword(auth, email, password);
        }}
      />
    </div>
  );
}
