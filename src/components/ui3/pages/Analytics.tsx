'use client';

import React from 'react';
import TopBanner from '@/components/ui3/TopBanner';
import { 
  Eye, 
  MousePointer2, 
  TrendingUp, 
  TrendingDown, 
  Globe, 
  Instagram, 
  Twitter, 
  Facebook, 
  ExternalLink,
  ArrowUpRight
} from 'lucide-react';

const Analytics: React.FC = () => {
  const stats = [
    { label: 'Vistas totales', value: '24,812', trend: '+12.5%', isUp: true, icon: Eye, color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: 'Clics en enlaces', value: '8,240', trend: '+8.2%', isUp: true, icon: MousePointer2, color: 'text-green-500', bg: 'bg-green-50' },
    { label: 'CTR Promedio', value: '33.2%', trend: '-2.1%', isUp: false, icon: TrendingUp, color: 'text-purple-500', bg: 'bg-purple-50' },
    { label: 'Ingresos Totales', value: '$1,420.00', trend: '+18.7%', isUp: true, icon: TrendingUp, color: 'text-pink-500', bg: 'bg-pink-50' },
  ];

  const topLinks = [
    { title: 'Mi Nuevo Canal de YouTube', clicks: '3,210', ctr: '12.9%', color: 'bg-red-500' },
    { title: 'E-book Gratis', clicks: '2,840', ctr: '34.2%', color: 'bg-[#10C810]' },
    { title: 'Portfolio 2024', clicks: '1,120', ctr: '4.5%', color: 'bg-blue-500' },
    { title: 'Newsletter', clicks: '980', ctr: '8.1%', color: 'bg-orange-500' },
  ];

  const sources = [
    { name: 'Instagram', value: '45%', icon: Instagram, color: 'text-pink-600' },
    { name: 'TikTok', value: '30%', icon: Globe, color: 'text-black' },
    { name: 'Twitter / X', value: '15%', icon: Twitter, color: 'text-blue-400' },
    { name: 'Directo', value: '10%', icon: ExternalLink, color: 'text-slate-500' },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-8 pb-20">
      <TopBanner 
        title="Analítica"
        subtitle="Monitorea el crecimiento de tu comunidad en tiempo real."
        actions={
          <div className="flex bg-white border border-[#E2E8F0] rounded-xl p-1 shadow-sm">
            <button className="px-4 py-1.5 text-xs font-bold bg-[#F1F5F9] text-[#0F172A] rounded-lg">7 días</button>
            <button className="px-4 py-1.5 text-xs font-bold text-[#64748B] hover:text-[#0F172A]">30 días</button>
            <button className="px-4 py-1.5 text-xs font-bold text-[#64748B] hover:text-[#0F172A]">90 días</button>
          </div>
        }
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white border border-[#E2E8F0] rounded-[24px] p-6 shadow-sm hover:border-[#10C810] transition-colors group">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon size={20} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold ${stat.isUp ? 'text-[#10C810]' : 'text-red-500'}`}>
                {stat.isUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                {stat.trend}
              </div>
            </div>
            <p className="text-xs font-bold text-[#64748B] uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-2xl font-black text-[#0F172A]">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Main Chart Card */}
        <div className="lg:col-span-2 bg-white border border-[#E2E8F0] rounded-[32px] p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-black text-[#0F172A]">Vistas por día</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#10C810] rounded-full"></div>
                <span className="text-xs font-bold text-[#64748B]">Vistas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-xs font-bold text-[#64748B]">Clics</span>
              </div>
            </div>
          </div>
          
          {/* Mock Chart Visualization */}
          <div className="relative h-64 w-full flex items-end justify-between gap-2 px-2">
            {[45, 62, 58, 75, 90, 82, 95].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center group cursor-pointer">
                <div className="w-full relative flex flex-col items-center gap-1">
                  {/* Tooltip on hover */}
                  <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-[#0F172A] text-white text-[10px] font-bold py-1.5 px-2.5 rounded-lg pointer-events-none whitespace-nowrap z-10">
                    {h * 10} visitas
                  </div>
                  {/* Bars */}
                  <div className="w-full bg-blue-100 rounded-t-xl overflow-hidden relative" style={{ height: `${h * 0.7}%` }}>
                    <div className="absolute bottom-0 w-full bg-blue-500 transition-all duration-500" style={{ height: `${h * 0.4}%` }}></div>
                  </div>
                  <div className="w-full bg-green-100 rounded-t-xl overflow-hidden relative" style={{ height: `${h}%` }}>
                    <div className="absolute bottom-0 w-full bg-[#10C810] transition-all duration-500" style={{ height: `${h * 0.6}%` }}></div>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-[#64748B] mt-3 uppercase tracking-tighter">Lun + {i}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white border border-[#E2E8F0] rounded-[32px] p-8 shadow-sm">
          <h3 className="text-lg font-black text-[#0F172A] mb-8">Fuentes de tráfico</h3>
          <div className="space-y-6">
            {sources.map((source, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <source.icon size={16} className={source.color} />
                    <span className="text-sm font-bold text-[#475569]">{source.name}</span>
                  </div>
                  <span className="text-sm font-black text-[#0F172A]">{source.value}</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 ${source.color === 'text-black' ? 'bg-slate-900' : source.color.replace('text-', 'bg-')}`} 
                    style={{ width: source.value }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] flex items-center justify-between">
            <span className="text-xs font-bold text-[#64748B]">Ver desglose completo</span>
            <ArrowUpRight size={16} className="text-[#64748B]" />
          </div>
        </div>
      </div>

      {/* Top Links Table */}
      <div className="bg-white border border-[#E2E8F0] rounded-[32px] p-8 shadow-sm">
        <h3 className="text-xl font-black text-[#0F172A] mb-6 tracking-tight">Enlaces más populares</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-50">
                <th className="pb-4 text-[10px] font-black text-[#64748B] uppercase tracking-[0.2em]">Enlace</th>
                <th className="pb-4 text-[10px] font-black text-[#64748B] uppercase tracking-[0.2em] text-center">Clics</th>
                <th className="pb-4 text-[10px] font-black text-[#64748B] uppercase tracking-[0.2em] text-center">CTR</th>
                <th className="pb-4 text-[10px] font-black text-[#64748B] uppercase tracking-[0.2em] text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {topLinks.map((link, i) => (
                <tr key={i} className="group">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 ${link.color} rounded-lg opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                      <span className="text-sm font-bold text-[#0F172A] group-hover:text-[#10C810] transition-colors">{link.title}</span>
                    </div>
                  </td>
                  <td className="py-4 text-center">
                    <span className="text-sm font-black text-[#475569]">{link.clicks}</span>
                  </td>
                  <td className="py-4 text-center">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 rounded-full">
                      <div className="w-1 h-4 bg-[#10C810] rounded-full"></div>
                      <span className="text-xs font-bold text-[#10C810]">{link.ctr}</span>
                    </div>
                  </td>
                  <td className="py-4 text-right">
                    <button className="p-2 text-[#64748B] hover:text-[#0F172A] hover:bg-slate-50 rounded-lg transition-all">
                      <ExternalLink size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
