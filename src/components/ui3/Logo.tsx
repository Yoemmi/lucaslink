
import React from 'react';

interface LogoProps {
  variant?: 'default' | 'white' | 'dark';
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', className = "", showText = true }) => {
  const isWhite = variant === 'white';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icono del Logo - Ahora con fondo verde vibrante */}
      <div className="relative flex-shrink-0 group cursor-pointer">
        <svg 
          width="42" 
          height="42" 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"
        >
          {/* Fondo del icono: Degradado Verde Intenso */}
          <rect 
            width="40" 
            height="40" 
            rx="12" 
            fill="url(#logo_bg_gradient)" 
          />
          
          {/* Sutil brillo interior */}
          <rect 
            x="2" 
            y="2" 
            width="36" 
            height="36" 
            rx="10" 
            stroke="white" 
            strokeOpacity="0.2" 
            strokeWidth="1" 
          />

          {/* Símbolo "L" + Link en Blanco para máximo contraste */}
          <path 
            d="M14 12V24C14 26.2091 15.7909 28 18 28H28" 
            stroke="white" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          
          {/* Acento dinámico */}
          <path 
            d="M22 14L26 18L22 22" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            strokeOpacity="0.6"
          />

          <defs>
            <linearGradient id="logo_bg_gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10C810" />
              <stop offset="1" stopColor="#059669" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Indicador de estado Pro */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-[#10C810] flex items-center justify-center">
          <div className="w-1 h-1 bg-[#10C810] rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Texto de Marca */}
      {showText && (
        <div className="flex flex-col -space-y-1">
          <span className={`text-xl font-black tracking-tighter transition-colors ${
            isWhite ? 'text-white' : 'text-[#0F172A]'
          }`}>
            Lucas<span className="text-[#10C810]">Link</span>
          </span>
          <span className="text-[9px] font-black text-[#10C810] uppercase tracking-[0.2em] opacity-80">
            Professional
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
