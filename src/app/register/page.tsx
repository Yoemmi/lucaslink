"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Ui2Styles from "@/components/ui2/Ui2Styles";
import Login from "@/components/ui2/landing/Login";

export default function RegisterPage() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/ui3/dashboard";

  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      <Ui2Styles />
      <Login
        mode="signup"
        onBack={() => router.push("/")}
        onSwitchMode={() => router.push(`/login?next=${encodeURIComponent(next)}`)}
        onLoginSuccess={() => router.push(next)}
        onSubmit={async ({ fullName, email, password }) => {
          const cred = await createUserWithEmailAndPassword(auth, email, password);
          if (fullName) {
            try {
              await updateProfile(cred.user, { displayName: fullName });
            } catch {
              // non-blocking
            }
          }
        }}
      />
    </div>
  );
}
