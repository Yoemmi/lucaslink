'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/ui3/Sidebar';
import type { ViewType } from '@/components/ui3/types';

const ROUTES: Record<ViewType, string> = {
  home: '/ui3/home',
  dashboard: '/ui3/dashboard',
  products: '/ui3/products',
  websites: '/ui3/websites',
  profile: '/ui3/profile',
  'mobile-preview': '/ui3/mobile-preview',
  'web-preview': '/ui3/web-preview',
  referrals: '/ui3/referrals',
  settings: '/ui3/settings',
};

export default function Ui3Shell({
  activeView,
  children,
}: {
  activeView: ViewType;
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="flex h-screen overflow-hidden bg-[#F8FAFC]">
      <Sidebar
        activeView={activeView}
        setView={(v) => {
          const href = ROUTES[v] ?? '/ui3/dashboard';
          router.push(href);
        }}
      />

      {/* ✅ Solid background for the WHOLE scroll area (fixes lines showing at bottom) */}
      <main
        className="flex-1 overflow-auto bg-[#F8FAFC]"
        style={{ backgroundImage: 'none', backgroundColor: '#F8FAFC' }}
      >
        <div className="min-h-full bg-[#F8FAFC]" style={{ backgroundImage: 'none' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
