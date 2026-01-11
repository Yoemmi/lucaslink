"use client";

import { useRouter } from "next/navigation";
import Ui2Styles from "@/components/ui2/Ui2Styles";

import Navbar from "@/components/ui2/landing/Navbar";
import Hero from "@/components/ui2/landing/Hero";
import Trust from "@/components/ui2/landing/Trust";
import Features from "@/components/ui2/landing/Features";
import HowItWorks from "@/components/ui2/landing/HowItWorks";
import Pricing from "@/components/ui2/landing/Pricing";
import FAQ from "@/components/ui2/landing/FAQ";
import CTAFinal from "@/components/ui2/landing/CTAFinal";
import Footer from "@/components/ui2/landing/Footer";

export default function LandingPage() {
  const router = useRouter();

  // ✅ REAL auth routes (Firebase)
  const goLogin = () => router.push("/login");
  const goSignup = () => router.push("/register");

  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      <Ui2Styles />
      <Navbar onLoginClick={goLogin} onSignupClick={goSignup} />
      <main>
        <Hero onSignupClick={goSignup} />
        <Trust />
        <Features />
        <HowItWorks />
        <Pricing onSignupClick={goSignup} />
        <FAQ />
        <CTAFinal onSignupClick={goSignup} onLoginClick={goLogin} />
        <Footer />
      </main>
    </div>
  );
}
