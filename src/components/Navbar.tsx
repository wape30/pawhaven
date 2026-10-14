import React from 'react';
import { ShieldCheck, Heart, Footprints, User, Calendar, Bell } from 'lucide-react';

interface NavbarProps {
  activeTab: 'search' | 'live-report' | 'calculator' | 'bookings';
  setActiveTab: (tab: 'search' | 'live-report' | 'calculator' | 'bookings') => void;
  bookingCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, bookingCount }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveTab('search')}
          className="flex items-center gap-2.5 cursor-pointer group select-none"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-600 to-orange-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
            <Footprints className="w-6 h-6 rotate-12" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-2xl tracking-tight text-stone-900">Paw<span className="text-orange-600">Haven</span></span>
              <span className="text-[10px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">Pro</span>
            </div>
            <p className="text-[11px] font-medium text-stone-400 hidden sm:block">El hogar donde tu mascota siempre es familia</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-stone-100 p-1.5 rounded-full border border-stone-200">
          <button
            onClick={() => setActiveTab('search')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'search'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Buscar Cuidador
          </button>
          
          <button
            onClick={() => setActiveTab('live-report')}
            className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'live-report'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Paseo en Vivo
          </button>

          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'calculator'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Conviértete en Cuidador
          </button>

          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'bookings'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            Mis Reservas
            {bookingCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-orange-600 text-[10px] text-white flex items-center justify-center font-bold">
                {bookingCount}
              </span>
            )}
          </button>
        </nav>

        {/* User / Trust Badge */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 text-xs font-medium text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Garantía Veterinaria 25.000€</span>
          </div>

          <button 
            onClick={() => setActiveTab('calculator')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-orange-700 bg-orange-50 hover:bg-orange-100 rounded-full border border-orange-200 transition-colors"
          >
            <Heart className="w-3.5 h-3.5 text-orange-600 fill-orange-600" />
            Ofrecer Cuidados
          </button>

          <div className="flex items-center gap-2 border-l border-stone-200 pl-3">
            <button className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-700 transition-colors relative">
              <Bell className="w-4 h-4" />
              <span className="w-2 h-2 rounded-full bg-orange-500 absolute top-2 right-2"></span>
            </button>
            <div className="w-9 h-9 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-xs ring-2 ring-stone-200">
              <User className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
