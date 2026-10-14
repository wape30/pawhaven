import React from 'react';
import { SERVICES } from '../data/mockData';
import { ServiceType, SearchFilters, PetType, PetSize } from '../types';
import { Home, ShieldCheck, Footprints, Sun, Clock, MapPin, Calendar, Dog, Cat, Search } from 'lucide-react';

interface HeroSearchProps {
  filters: SearchFilters;
  setFilters: React.Dispatch<React.SetStateAction<SearchFilters>>;
  onSearch: () => void;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({ filters, setFilters, onSearch }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Home': return <Home className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Footprints': return <Footprints className="w-5 h-5" />;
      case 'Sun': return <Sun className="w-5 h-5" />;
      case 'Clock': return <Clock className="w-5 h-5" />;
      default: return <Home className="w-5 h-5" />;
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-orange-50/60 via-stone-50 to-stone-50 pt-10 pb-12 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></span>
            Más de 14.000 cuidadores y familias verificadas en tu zona
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-tight">
            Amor, mimos y seguridad <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-emerald-700">
              cuando tú no estás en casa.
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 max-w-2xl mx-auto">
            Reserva hospedaje familiar cariñoso, paseos con seguimiento GPS en directo y visitas a domicilio con cobertura veterinaria integral.
          </p>
        </div>

        {/* Search Container */}
        <div className="bg-white rounded-3xl shadow-xl shadow-stone-200/60 border border-stone-200 p-4 sm:p-6 max-w-5xl mx-auto">
          {/* Service Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 pb-6 border-b border-stone-100">
            {SERVICES.map((srv) => {
              const isSelected = filters.service === srv.id;
              return (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => setFilters(prev => ({ ...prev, service: srv.id }))}
                  className={`flex flex-col items-center text-center p-3 rounded-2xl transition-all border ${
                    isSelected
                      ? 'bg-orange-50/80 border-orange-500 text-orange-950 ring-2 ring-orange-500/20 shadow-sm'
                      : 'bg-stone-50/50 hover:bg-stone-100/70 border-transparent text-stone-600'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl mb-2 transition-colors ${
                    isSelected ? 'bg-orange-600 text-white' : 'bg-stone-200/80 text-stone-700'
                  }`}>
                    {getIcon(srv.iconName)}
                  </div>
                  <span className="text-xs font-bold leading-tight">{srv.title}</span>
                  <span className="text-[10px] text-stone-600 mt-0.5 line-clamp-1">{srv.tagline}</span>
                </button>
              );
            })}
          </div>

          {/* Form Filter Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3.5 pt-5 items-stretch">
            {/* Location */}
            <div className="md:col-span-1 lg:col-span-4 bg-stone-50 rounded-2xl p-3 border border-stone-200 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/20 transition-all flex flex-col justify-between">
              <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />
                <span>¿Dónde necesitas el cuidado?</span>
              </label>
              <input
                type="text"
                value={filters.location}
                onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                placeholder="Ej. Chamartín, Madrid o tu código postal"
                className="w-full bg-transparent text-sm font-semibold text-stone-900 placeholder-stone-400 focus:outline-none"
              />
            </div>

            {/* Dates (Entrada y Salida) */}
            <div className="md:col-span-1 lg:col-span-3 bg-stone-50 rounded-2xl p-3 border border-stone-200 focus-within:border-orange-500 transition-all flex flex-col justify-between">
              <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                <Calendar className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />
                <span>Fechas de estancia</span>
              </label>
              <div className="grid grid-cols-2 gap-2 min-w-0">
                <div className="min-w-0">
                  <span className="text-[10px] text-stone-500 font-semibold block leading-tight mb-0.5">Entrada</span>
                  <input
                    type="date"
                    value={filters.startDate}
                    onChange={(e) => setFilters(prev => ({ ...prev, startDate: e.target.value }))}
                    className="w-full bg-white px-2 py-1.5 rounded-xl text-xs font-semibold text-stone-800 border border-stone-200 focus:outline-none focus:border-orange-500 min-w-0"
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-stone-500 font-semibold block leading-tight mb-0.5">Salida</span>
                  <input
                    type="date"
                    value={filters.endDate}
                    onChange={(e) => setFilters(prev => ({ ...prev, endDate: e.target.value }))}
                    className="w-full bg-white px-2 py-1.5 rounded-xl text-xs font-semibold text-stone-800 border border-stone-200 focus:outline-none focus:border-orange-500 min-w-0"
                  />
                </div>
              </div>
            </div>

            {/* Pet Type & Size */}
            <div className="md:col-span-1 lg:col-span-3 bg-stone-50 rounded-2xl p-3 border border-stone-200 flex flex-col justify-between">
              <label className="text-[11px] font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                <Dog className="w-3.5 h-3.5 text-orange-600 flex-shrink-0" />
                <span>Mascota y tamaño</span>
              </label>
              <div className="grid grid-cols-2 gap-2 min-w-0">
                <div className="flex bg-white rounded-xl p-0.5 border border-stone-200 min-w-0">
                  <button
                    type="button"
                    onClick={() => setFilters(prev => ({ ...prev, petType: 'dog' }))}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition-all ${
                      filters.petType === 'dog' ? 'bg-orange-600 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <Dog className="w-3 h-3 flex-shrink-0" />
                    <span>Perro</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilters(prev => ({ ...prev, petType: 'cat' }))}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition-all ${
                      filters.petType === 'cat' ? 'bg-orange-600 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <Cat className="w-3 h-3 flex-shrink-0" />
                    <span>Gato</span>
                  </button>
                </div>

                <div className="min-w-0">
                  <select
                    value={filters.petSize}
                    onChange={(e) => setFilters(prev => ({ ...prev, petSize: e.target.value as PetSize }))}
                    className="w-full bg-white px-2 py-1.5 rounded-xl text-xs font-semibold text-stone-800 border border-stone-200 focus:outline-none focus:border-orange-500 truncate"
                  >
                    <option value="small">Pequeño (0-7kg)</option>
                    <option value="medium">Mediano (8-18kg)</option>
                    <option value="large">Grande (19-45kg)</option>
                    <option value="giant">Gigante (+45kg)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-1 lg:col-span-2 flex items-end">
              <button
                type="button"
                onClick={onSearch}
                className="w-full h-full min-h-[50px] bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold p-3 rounded-2xl shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <Search className="w-4 h-4" />
                <span>Buscar</span>
              </button>
            </div>
          </div>


          {/* Quick toggle pills */}
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-stone-100 text-xs">
            <span className="text-stone-600 font-semibold text-[11px]">Filtros directos:</span>
            <button
              onClick={() => setFilters(prev => ({ ...prev, fencedYardOnly: !prev.fencedYardOnly }))}
              className={`px-3 py-1 rounded-full border transition-all ${
                filters.fencedYardOnly
                  ? 'bg-emerald-50 border-emerald-500 text-emerald-800 font-bold'
                  : 'bg-white border-stone-200 text-stone-600 hover:border-stone-300'
              }`}
            >
              🌿 Jardín vallado
            </button>
            <button
              onClick={() => setFilters(prev => ({ ...prev, noOtherPets: !prev.noOtherPets }))}
              className={`px-3 py-1 rounded-full border transition-all ${
                filters.noOtherPets
                  ? 'bg-emerald-50 border-emerald-500 text-emerald-800 font-bold'
                  : 'bg-white border-stone-200 text-stone-600 hover:border-stone-300'
              }`}
            >
              🏠 Única mascota en el hogar
            </button>
            <button
              onClick={() => setFilters(prev => ({ ...prev, superSitterOnly: !prev.superSitterOnly }))}
              className={`px-3 py-1 rounded-full border transition-all ${
                filters.superSitterOnly
                  ? 'bg-amber-50 border-amber-500 text-amber-900 font-bold'
                  : 'bg-white border-stone-200 text-stone-600 hover:border-stone-300'
              }`}
            >
              ⭐ SuperCuidador (Respuesta rápida)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
