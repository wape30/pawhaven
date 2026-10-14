import React from 'react';
import { Sitter, ServiceType } from '../types';
import { Star, ShieldCheck, Footprints, Layers } from 'lucide-react';

interface MapSimulatorProps {
  sitters: Sitter[];
  selectedSitter: Sitter | null;
  onSelectSitter: (sitter: Sitter) => void;
  selectedService: ServiceType;
}

export const MapSimulator: React.FC<MapSimulatorProps> = ({
  sitters,
  selectedSitter,
  onSelectSitter,
  selectedService
}) => {
  const getRate = (sitter: Sitter) => {
    switch (selectedService) {
      case 'boarding': return `${sitter.rates.boarding}€`;
      case 'house-sitting': return `${sitter.rates.houseSitting}€`;
      case 'dog-walking': return `${sitter.rates.dogWalking}€`;
      case 'daycare': return `${sitter.rates.daycare}€`;
      case 'drop-in': return `${sitter.rates.dropIn}€`;
      default: return `${sitter.rates.boarding}€`;
    }
  };

  // Convert lat/lng to percentage coordinates on map canvas
  const mapCoordinates = [
    { id: 'sitter-1', top: '32%', left: '55%' },
    { id: 'sitter-2', top: '52%', left: '38%' },
    { id: 'sitter-3', top: '68%', left: '62%' },
    { id: 'sitter-4', top: '42%', left: '25%' },
  ];

  return (
    <div className="relative w-full h-[620px] bg-stone-100 rounded-3xl overflow-hidden border border-stone-200 shadow-inner">
      {/* SVG Map Canvas Styling */}
      <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d6d3d1" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        {/* River */}
        <path d="M -50 450 Q 200 400 450 550 T 900 650" fill="none" stroke="#bae6fd" strokeWidth="32" strokeLinecap="round" />
        {/* Green Parks */}
        <ellipse cx="65%" cy="65%" rx="110" ry="80" fill="#dcfce7" />
        <ellipse cx="25%" cy="30%" rx="90" ry="70" fill="#dcfce7" />
        <ellipse cx="75%" cy="20%" rx="100" ry="60" fill="#dcfce7" />
        {/* Main Avenues */}
        <path d="M 0 200 L 900 280" stroke="#ffffff" strokeWidth="8" />
        <path d="M 300 0 L 350 700" stroke="#ffffff" strokeWidth="8" />
        <path d="M 600 0 L 580 700" stroke="#ffffff" strokeWidth="6" />
        <path d="M 0 500 L 900 480" stroke="#ffffff" strokeWidth="6" />
      </svg>

      {/* Map Header / Controls */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-2xl shadow-sm border border-stone-200 text-xs font-semibold text-stone-700">
        <Layers className="w-4 h-4 text-orange-600" />
        <span>Zona: Madrid Centro & Chamartín</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
      </div>

      <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-sm border border-stone-200 text-[11px] font-bold text-stone-600">
        4 Cuidadores disponibles
      </div>

      {/* Sitter Interactive Pins */}
      {sitters.map((sitter) => {
        const coord = mapCoordinates.find(c => c.id === sitter.id) || { top: '50%', left: '50%' };
        const isCurrent = selectedSitter?.id === sitter.id;
        const rateLabel = getRate(sitter);

        return (
          <div
            key={sitter.id}
            style={{ top: coord.top, left: coord.left }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
          >
            <button
              onClick={() => onSelectSitter(sitter)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-black text-xs transition-all shadow-md active:scale-95 ${
                isCurrent
                  ? 'bg-orange-600 text-white scale-110 ring-4 ring-orange-500/20 z-30 shadow-orange-500/30'
                  : 'bg-white hover:bg-stone-900 text-stone-900 hover:text-white border border-stone-300 shadow-stone-300'
              }`}
            >
              <Footprints className="w-3.5 h-3.5" />
              <span>{rateLabel}</span>
            </button>

            {/* Hover Tooltip Card */}
            <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-white rounded-2xl p-2.5 shadow-xl border border-stone-200 transition-all pointer-events-none ${
              isCurrent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
            }`}>
              <div className="flex items-center gap-2.5">
                <img src={sitter.avatar} alt={sitter.name} className="w-10 h-10 rounded-xl object-cover" />
                <div className="overflow-hidden">
                  <h4 className="text-xs font-bold text-stone-900 truncate">{sitter.name}</h4>
                  <div className="flex items-center gap-1 text-[10px] text-amber-500 font-bold">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>{sitter.rating}</span>
                    <span className="text-stone-600">({sitter.reviewCount})</span>
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-stone-500 mt-1 truncate">{sitter.neighborhood}</p>
            </div>
          </div>
        );
      })}

      {/* Legend / User Location Marker */}
      <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-sm border border-stone-200 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-100 animate-pulse"></div>
          <span className="font-bold text-stone-800">Tu ubicación de búsqueda</span>
        </div>
        <p className="text-[10px] text-stone-500 mt-0.5">Se muestran cuidadores en un radio de 5 km</p>
      </div>

      <div className="absolute bottom-4 right-4 z-10 bg-emerald-900/90 text-white text-[11px] font-semibold px-3 py-1.5 rounded-xl backdrop-blur-sm flex items-center gap-1.5">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
        <span>Garantía y seguro incluidos</span>
      </div>
    </div>
  );
};
