"use client";

import React, { useState } from 'react';

interface NavbarProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onSignupClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-[#E7EAF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-[#11B718] rounded-xl flex items-center justify-center shadow-lg shadow-[#11B718]/20">
              <span className="text-white font-black text-xl">L</span>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-[#0B1220]">LucasLink</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-semibold text-[#0B1220] hover:text-[#11B718] transition-colors">Funciones</a>
            <a href="#pricing" className="text-sm font-semibold text-[#0B1220] hover:text-[#11B718] transition-colors">Precios</a>
            <a href="#templates" className="text-sm font-semibold text-[#0B1220] hover:text-[#11B718] transition-colors">Plantillas</a>
            <button 
              onClick={onLoginClick}
              className="text-sm font-semibold text-[#0B1220] hover:text-[#11B718] transition-colors"
            >
              Iniciar sesión
            </button>
            <button 
              onClick={onSignupClick}
              className="bg-[#11B718] text-white px-6 py-3 rounded-[16px] font-bold text-sm hover:shadow-lg hover:shadow-[#11B718]/30 transition-all active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#11B718]"
            >
              Crear gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#0B1220] focus:outline-none transition-transform active:scale-90"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-[#E7EAF2] px-4 py-6 space-y-4 animate-fade-in shadow-xl">
          <a href="#features" className="block text-lg font-semibold px-2 py-2" onClick={() => setIsOpen(false)}>Funciones</a>
          <a href="#pricing" className="block text-lg font-semibold px-2 py-2" onClick={() => setIsOpen(false)}>Precios</a>
          <a href="#templates" className="block text-lg font-semibold px-2 py-2" onClick={() => setIsOpen(false)}>Plantillas</a>
          <div className="pt-4 border-t border-[#E7EAF2] space-y-4">
            <button 
              onClick={() => { setIsOpen(false); onLoginClick(); }}
              className="block text-lg font-semibold w-full text-center py-4 border-2 border-[#E7EAF2] rounded-[16px]"
            >
              Iniciar sesión
            </button>
            <button 
              onClick={() => { setIsOpen(false); onSignupClick(); }}
              className="w-full bg-[#11B718] text-white py-4 rounded-[16px] font-bold text-lg shadow-lg shadow-[#11B718]/20"
            >
              Crear gratis
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;