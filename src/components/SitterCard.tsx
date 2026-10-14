import React from 'react';
import { Sitter, ServiceType } from '../types';
import { Star, ShieldCheck, Heart, MapPin, Award, ChevronRight } from 'lucide-react';

interface SitterCardProps {
  sitter: Sitter;
  selectedService: ServiceType;
  isSelected?: boolean;
  onSelect: (sitter: Sitter) => void;
  onBook: (sitter: Sitter) => void;
}

export const SitterCard: React.FC<SitterCardProps> = ({
  sitter,
  selectedService,
  isSelected,
  onSelect,
  onBook
}) => {
  const getRate = () => {
    switch (selectedService) {
      case 'boarding': return { price: sitter.rates.boarding, unit: '/ noche' };
      case 'house-sitting': return { price: sitter.rates.houseSitting, unit: '/ noche' };
      case 'dog-walking': return { price: sitter.rates.dogWalking, unit: '/ paseo' };
      case 'daycare': return { price: sitter.rates.daycare, unit: '/ día' };
      case 'drop-in': return { price: sitter.rates.dropIn, unit: '/ visita' };
      default: return { price: sitter.rates.boarding, unit: '/ noche' };
    }
  };

  const { price, unit } = getRate();

  return (
    <div
      onClick={() => onSelect(sitter)}
      className={`group bg-white rounded-3xl border transition-all duration-300 p-5 cursor-pointer relative ${
        isSelected
          ? 'border-orange-500 ring-4 ring-orange-500/10 shadow-xl'
          : 'border-stone-200/80 hover:border-orange-300 hover:shadow-lg hover:shadow-stone-200/50'
      }`}
    >
      <div className="flex flex-col sm:flex-row gap-5">
        {/* Avatar & Badges */}
        <div className="relative flex-shrink-0 self-start">
          <img
            src={sitter.avatar}
            alt={sitter.name}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover ring-2 ring-stone-100 group-hover:scale-[1.02] transition-transform"
          />
          {sitter.badges.includes('super_sitter') && (
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white p-1.5 rounded-xl shadow-md" title="SuperCuidador de alta calificación">
              <Award className="w-4 h-4" />
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-orange-600 transition-colors">
                  {sitter.name}
                </h3>
                {sitter.badges.includes('verified_id') && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    Verificado
                  </span>
                )}
              </div>
              <p className="text-xs font-semibold text-stone-700 mt-0.5">{sitter.tagline}</p>
            </div>

            {/* Price Box */}
            <div className="text-right flex-shrink-0">
              <div className="text-2xl font-black text-stone-900 tracking-tight">
                {price} €
              </div>
              <div className="text-[11px] font-medium text-stone-600">{unit}</div>
            </div>
          </div>

          {/* Location & Reviews meta */}
          <div className="flex flex-wrap items-center gap-y-1 gap-x-4 mt-3 text-xs text-stone-600">
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-4 h-4 fill-amber-400" />
              <span className="text-stone-900">{sitter.rating}</span>
              <span className="text-stone-600 font-normal">({sitter.reviewCount} reseñas)</span>
            </div>

            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-stone-600" />
              <span>{sitter.location}</span>
              <span className="text-stone-500">• a {sitter.distanceKm} km</span>
            </div>

            <div className="flex items-center gap-1 text-emerald-700 font-medium">
              <Heart className="w-3 h-3 text-emerald-600 fill-emerald-600" />
              <span>{sitter.repeatClients} clientes recurrentes</span>
            </div>
          </div>

          {/* About snippet */}
          <p className="text-xs text-stone-600 mt-3 line-clamp-2 leading-relaxed">
            "{sitter.about}"
          </p>

          {/* Feature chips */}
          <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-3 border-t border-stone-100">
            {sitter.homeDetails.hasFencedYard && (
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-stone-100 text-stone-700">
                🌿 Jardín vallado
              </span>
            )}
            {!sitter.homeDetails.hasOtherPets && (
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-stone-100 text-stone-700">
                🐾 Sin otras mascotas
              </span>
            )}
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-stone-100 text-stone-700">
              ⚡ Resp: {sitter.responseTime}
            </span>
          </div>
        </div>
      </div>

      {/* Action buttons footer */}
      <div className="mt-4 pt-3 flex items-center justify-between border-t border-stone-100">
        <span className="text-xs text-orange-600 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
          Ver perfil completo, fotos y opiniones <ChevronRight className="w-3.5 h-3.5" />
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onBook(sitter);
          }}
          className="px-4 py-2 bg-stone-900 hover:bg-orange-600 text-white rounded-xl text-xs font-bold transition-colors shadow-sm"
        >
          Reservar
        </button>
      </div>
    </div>
  );
};
