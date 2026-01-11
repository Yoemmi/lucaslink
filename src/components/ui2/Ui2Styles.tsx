'use client';

export default function Ui2Styles() {
  return (
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

      body {
        font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
        scroll-behavior: smooth;
      }

      .glass-nav {
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
      }

      .glass-card {
        background: rgba(255, 255, 255, 0.65);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border: 1px solid rgba(255, 255, 255, 0.4);
      }

      .gradient-text {
        background: linear-gradient(90deg, #4F46E5, #22C55E);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }

      .btn-shadow {
        box-shadow: 0 10px 25px rgba(15, 23, 42, 0.12);
      }

      .card-hover {
        transition: transform 180ms ease, box-shadow 180ms ease;
      }
      .card-hover:hover {
        transform: translateY(-2px);
        box-shadow: 0 18px 40px rgba(15, 23, 42, 0.10);
      }

      .ring-soft {
        box-shadow: 0 0 0 6px rgba(79, 70, 229, 0.10);
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fadeIn 0.4s ease-out forwards;
      }

      .scrollbar-hide::-webkit-scrollbar { display: none; }
      .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    `}</style>
  );
}
