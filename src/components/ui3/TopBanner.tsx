
import React from 'react';

interface TopBannerProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

const TopBanner: React.FC<TopBannerProps> = ({ title, subtitle, actions }) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 py-8">
      <div>
        <h1 className="text-3xl font-bold text-[#0F172A] tracking-tight">{title}</h1>
        {subtitle && <p className="text-[#475569] mt-1">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-3">
        {actions}
      </div>
    </div>
  );
};

export default TopBanner;
