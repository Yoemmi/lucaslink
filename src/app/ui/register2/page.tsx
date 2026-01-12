"use client";

import { useRouter } from "next/navigation";
import Ui2Styles from "@/components/ui2/Ui2Styles";
import Login from "@/components/ui2/landing/Login";

export default function Register2Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      <Ui2Styles />
      <Login
        mode="signup"
        onBack={() => router.push("/ui/home2")}
        onSwitchMode={(m) => {
          if (m === "login") router.push("/ui/login2");
        }}
        onLoginSuccess={() => router.replace("/post-login?next=" + encodeURIComponent("/ui/dashboard2"))}
      />
    </div>
  );
}
