'use client';

import React, { useState } from 'react';
import TopBanner from '@/components/ui3/TopBanner';
import { 
  ShoppingBag, 
  Plus, 
  Edit2, 
  Trash2, 
  X, 
  Download, 
  Calendar, 
  GraduationCap, 
  CreditCard, 
  ArrowRight, 
  ChevronRight,
  Sparkles,
  Search,
  CheckCircle2,
  AlertCircle,
  Crown,
  Rocket,
  Star,
  Zap,
  TrendingUp,
  DollarSign,
  Layers,
  MousePointer2
} from 'lucide-react';

const Products: React.FC = () => {
  const [products, setProducts] = useState<any[]>([
    { 
      id: '1', 
      name: 'Masterclass UI/UX Pro', 
      price: '$49.00', 
      status: 'Activo', 
      type: 'digital',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=400' 
    },
    { 
      id: '2', 
      name: 'Lightroom Presets 2024', 
      price: '$15.00', 
      status: 'Activo', 
      type: 'digital',
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=400'
    },
    { 
      id: '3', 
      name: 'Planner de Notion', 
      price: '$10.00', 
      status: 'Borrador', 
      type: 'digital',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=400'
    },
    { 
      id: '4', 
      name: 'Mentoría 1-on-1', 
      price: '$120.00', 
      status: 'Activo', 
      type: 'service',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400'
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', type: 'digital' });
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return;

    const product = {
      id: Math.random().toString(36).substr(2, 9),
      name: newProduct.name,
      price: newProduct.price.startsWith('$') ? newProduct.price : `$${newProduct.price}`,
      status: 'Activo',
      type: newProduct.type,
      image: `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 1000)}`
    };

    setProducts([product, ...products]);
    setNewProduct({ name: '', price: '', type: 'digital' });
    setIsFormOpen(false);
    setIsModalOpen(false);
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
    setDeleteConfirm(null);
  };

  const openFormForType = (type: string) => {
    setNewProduct(prev => ({ ...prev, type }));
    setIsFormOpen(true);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-12 pb-24 bg-[#F8FAFC]">
      <TopBanner 
        title="Productos"
        subtitle="Gestiona tu inventario digital y servicios profesionales."
        actions={
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-6 py-3 bg-[#10C810] text-white rounded-2xl text-sm font-black shadow-lg shadow-[#10C810]/20 hover:scale-[1.02] active:scale-95 transition-all"
          >
            <Plus size={18} strokeWidth={3} />
            Nuevo Producto
          </button>
        }
      />

      {/* Stats Section - 2D Clean Icons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { 
            label: 'Ventas Totales', 
            value: '$2,840.00', 
            color: 'text-[#10C810]', 
            bg: 'bg-[#E6F8E6]',
            icon: DollarSign 
          },
          { 
            label: 'Productos Activos', 
            value: products.filter(p => p.status === 'Activo').length.toString(), 
            color: 'text-blue-500', 
            bg: 'bg-blue-50',
            icon: Layers 
          },
          { 
            label: 'Conversión', 
            value: '12.4%', 
            color: 'text-purple-500', 
            bg: 'bg-purple-50',
            icon: MousePointer2 
          },
        ].map((stat, i) => (
          <div key={i} className="bg-white border border-slate-100 rounded-[32px] p-6 flex items-center gap-5 hover:shadow-sm transition-shadow">
            <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center`}>
              <stat.icon size={26} strokeWidth={2} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{stat.label}</p>
              <p className="text-2xl font-black text-[#0F172A] tracking-tight">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="bg-white border border-slate-100 rounded-[48px] p-8 md:p-10 shadow-sm min-h-[500px]">
        <div className="flex flex-wrap items-center justify-between gap-6 mb-10">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
            <input 
              type="text" 
              placeholder="Buscar por nombre..." 
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-[#10C810] transition-all"
            />
          </div>
          <div className="flex items-center gap-3">
             <button className="px-5 py-2.5 bg-slate-100 text-[#0F172A] rounded-xl text-[10px] font-black uppercase tracking-widest">Todos</button>
             <button className="px-5 py-2.5 text-slate-400 rounded-xl text-[10px] font-black uppercase tracking-widest hover:text-[#0F172A]">Borradores</button>
          </div>
        </div>

        {products.length === 0 ? (
          <div className="py-24 text-center">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="text-slate-200" size={32} />
            </div>
            <p className="text-slate-400 font-bold text-sm tracking-widest uppercase">Tu catálogo está vacío</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.id} className="group bg-white border border-slate-100 rounded-[36px] p-4 hover:border-[#10C810] hover:shadow-xl transition-all flex flex-col relative">
                {/* Product Image */}
                <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden mb-4 bg-slate-50 border border-slate-50">
                  <img src={p.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={p.name} />
                  
                  {/* Status Badges - Optimized colors */}
                  <div className={`absolute top-3 right-3 px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest shadow-sm backdrop-blur-md ${
                    p.status === 'Activo' 
                      ? 'bg-[#E6F8E6]/90 text-[#10C810]' 
                      : 'bg-[#FEF3C7]/90 text-[#F59E0B]'
                  }`}>
                    {p.status}
                  </div>
                </div>

                <div className="flex-1 px-1">
                  <h3 className="text-sm font-black text-[#0F172A] leading-tight mb-1 truncate">{p.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                      <Zap size={10} className="text-[#10C810]" />
                      {p.type}
                    </p>
                    <p className="text-sm font-black text-[#10C810]">{p.price}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 py-3 bg-slate-50 text-[#0F172A] rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#0F172A] hover:text-white transition-all flex items-center justify-center gap-2">
                    <Edit2 size={12} />
                    Editar
                  </button>
                  <button 
                    onClick={() => setDeleteConfirm(p.id)}
                    className="p-3 bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                {deleteConfirm === p.id && (
                  <div className="absolute inset-0 bg-white/98 backdrop-blur-sm p-6 flex flex-col items-center justify-center text-center rounded-[36px] z-10 animate-in fade-in zoom-in-95 duration-200">
                    <AlertCircle size={32} className="text-red-500 mb-3" />
                    <p className="text-sm font-black text-[#0F172A] mb-6 leading-tight">¿Eliminar este producto?</p>
                    <div className="flex gap-2 w-full">
                      <button onClick={() => handleDeleteProduct(p.id)} className="flex-1 py-2.5 bg-red-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-red-100">Sí, borrar</button>
                      <button onClick={() => setDeleteConfirm(null)} className="flex-1 py-2.5 bg-slate-100 text-slate-500 rounded-xl text-[10px] font-black uppercase tracking-widest">No</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pro Upgrade Banner - High Fidelity */}
      <section className="mt-20 bg-[#0F172A] rounded-[56px] p-12 md:p-20 relative overflow-hidden group shadow-2xl border border-[#10C810]/20">
        {/* Atmosphere */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#10C810]/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-[#10C810]/15 transition-all duration-1000"></div>
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-[#10C810]/20 text-[#10C810] rounded-full text-[11px] font-black uppercase tracking-[0.2em] mb-8 border border-[#10C810]/30 shadow-lg">
               <Crown size={16} fill="#FACC15" stroke="#FACC15" />
               Elite Creator Access
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
              Escala tu negocio digital <span className="text-[#10C810] inline-flex items-center gap-4">al 100% <Rocket size={46} className="animate-bounce" /></span>
            </h2>
            <p className="text-slate-400 font-medium text-lg md:text-xl leading-relaxed max-w-xl">
              Vende sin límites, usa dominios propios y domina tus ventas con analítica avanzada de <span className="text-white font-black underline decoration-[#10C810] underline-offset-4">LucasLink Pro</span>.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-6 shrink-0">
            <button className="relative group/btn overflow-hidden px-14 py-7 bg-[#10C810] text-white rounded-[28px] font-black text-2xl hover:scale-105 transition-all shadow-2xl shadow-[#10C810]/30 active:scale-95 flex items-center gap-4">
               <Zap size={28} fill="white" />
               Activar Pro
               <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover/btn:animate-[shine_1.5s_ease-in-out_infinite]"></div>
            </button>
            <div className="flex items-center gap-3 text-xs font-black text-slate-500 uppercase tracking-widest">
               <Sparkles size={16} className="text-[#FACC15]" />
               Prueba gratuita disponible
            </div>
          </div>
        </div>
      </section>

      {/* Add Product Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" onClick={() => setIsModalOpen(false)}></div>
          
          <div className="relative w-full max-w-2xl bg-white rounded-[48px] p-10 md:p-14 shadow-2xl overflow-y-auto max-h-[90vh] animate-in zoom-in-95 duration-300">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-black text-[#0F172A] tracking-tight">
                {isFormOpen ? 'Configura tu venta' : 'Elegir tipo de producto'}
              </h2>
              <button 
                onClick={() => {setIsModalOpen(false); setIsFormOpen(false);}} 
                className="p-3 hover:bg-slate-50 rounded-full transition-colors text-slate-400"
              >
                <X size={24} />
              </button>
            </div>

            {!isFormOpen ? (
              <div className="grid grid-cols-2 gap-5">
                {[
                  { label: 'Descarga Digital', icon: Download, color: 'text-blue-500', bg: 'bg-blue-50', id: 'digital' },
                  { label: 'Mentoría / Cita', icon: Calendar, color: 'text-orange-500', bg: 'bg-orange-50', id: 'service' },
                  { label: 'Curso Online', icon: GraduationCap, color: 'text-purple-500', bg: 'bg-purple-50', id: 'course' },
                  { label: 'Suscripción', icon: CreditCard, color: 'text-pink-500', bg: 'bg-pink-50', id: 'sub' },
                ].map((item) => (
                  <button 
                    key={item.label}
                    onClick={() => openFormForType(item.id)}
                    className="group p-8 bg-white border border-slate-100 rounded-[36px] hover:border-[#10C810] hover:shadow-2xl transition-all text-left flex flex-col items-start gap-8"
                  >
                    <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <item.icon size={28} strokeWidth={2.5} />
                    </div>
                    <span className="text-xs font-black text-[#0F172A] uppercase tracking-widest">{item.label}</span>
                  </button>
                ))}
              </div>
            ) : (
              <form onSubmit={handleAddProduct} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Nombre del producto</label>
                  <input 
                    type="text" 
                    required
                    autoFocus
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    placeholder="Ej: Guía de Estilo 2025"
                    className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-3xl focus:outline-none focus:border-[#10C810] focus:bg-white transition-all text-[#0F172A] font-bold text-lg shadow-inner"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Precio (USD)</label>
                  <div className="relative">
                    <span className="absolute left-8 top-1/2 -translate-y-1/2 text-slate-400 font-black text-xl">$</span>
                    <input 
                      type="text" 
                      required
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({...newProduct, price: e.target.value.replace(/[^0-9.]/g, '')})}
                      placeholder="0.00"
                      className="w-full pl-12 pr-8 py-5 bg-slate-50 border border-slate-100 rounded-3xl focus:outline-none focus:border-[#10C810] focus:bg-white transition-all text-[#0F172A] font-bold text-lg shadow-inner"
                    />
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-6 bg-[#10C810] text-white rounded-[28px] font-black text-xl shadow-2xl shadow-[#10C810]/20 active:scale-95 transition-all mt-6"
                >
                  Publicar Ahora
                </button>
                <button 
                  type="button" 
                  onClick={() => setIsFormOpen(false)} 
                  className="w-full text-xs font-black text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors"
                >
                  &larr; Volver a tipos
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 125%; }
        }
      `}</style>
    </div>
  );
};

export default Products;
