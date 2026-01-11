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

  const goLogin = () => router.push("/login");
  const goSignup = () => router.push("/register");

  return (
    <div className="min-h-screen bg-white">
      <Ui2Styles />
      <Navbar onLoginClick={goLogin} onSignupClick={goSignup} />
      <main>
        <Hero onStartClick={goSignup} />
        <Trust />
        <Features />
        <HowItWorks />
        <Pricing onPlanClick={goSignup} />
        <FAQ />
        <CTAFinal onStartClick={goSignup} />
      </main>
      <Footer />
    </div>
  );
}
