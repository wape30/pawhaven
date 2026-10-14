import React from 'react';
import { Sitter, ServiceType } from '../types';
import { X, Star, ShieldCheck, Heart, MapPin, Award, CheckCircle2, MessageSquare, Calendar, ChevronRight } from 'lucide-react';

interface SitterDetailModalProps {
  sitter: Sitter | null;
  onClose: () => void;
  onBook: (sitter: Sitter) => void;
  selectedService: ServiceType;
}

export const SitterDetailModal: React.FC<SitterDetailModalProps> = ({
  sitter,
  onClose,
  onBook,
  selectedService
}) => {
  if (!sitter) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md z-10 px-6 py-4 border-b border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={sitter.avatar} alt={sitter.name} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <h2 className="text-base font-extrabold text-stone-900">{sitter.name}</h2>
              <p className="text-xs text-stone-500">{sitter.location} • {sitter.neighborhood}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 space-y-8 flex-1">
          {/* Gallery Carousel Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 rounded-2xl overflow-hidden">
            {sitter.gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="Fotos del cuidador"
                className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-50 p-4 rounded-2xl border border-stone-200">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-amber-500 font-black text-lg">
                <Star className="w-5 h-5 fill-amber-400" />
                <span className="text-stone-900">{sitter.rating}</span>
              </div>
              <p className="text-xs text-stone-500 font-semibold">{sitter.reviewCount} Reseñas 5 estrellas</p>
            </div>

            <div className="text-center border-l border-stone-200">
              <div className="text-lg font-black text-stone-900">{sitter.repeatClients}</div>
              <p className="text-xs text-stone-500 font-semibold">Clientes recurrentes</p>
            </div>

            <div className="text-center border-l border-stone-200">
              <div className="text-lg font-black text-stone-900">{sitter.yearsExperience} años</div>
              <p className="text-xs text-stone-500 font-semibold">De experiencia</p>
            </div>

            <div className="text-center border-l border-stone-200">
              <div className="text-lg font-black text-emerald-600">{sitter.responseRate}%</div>
              <p className="text-xs text-stone-500 font-semibold">Responde en {sitter.responseTime}</p>
            </div>
          </div>

          {/* Badges / Verification */}
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Identidad oficial verificada (DNI/NIE)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Verificación de antecedentes penales
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">
              <Award className="w-4 h-4 text-amber-600" />
              SuperCuidador PawHaven 2026
            </span>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-extrabold text-stone-900 mb-2">Sobre mí y mi hogar</h3>
            <p className="text-sm text-stone-700 leading-relaxed whitespace-pre-line">
              {sitter.about}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <h4 className="text-xs font-bold text-stone-900 mb-2">Detalles del Hogar</h4>
                <ul className="text-xs text-stone-600 space-y-1.5">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Tipo: {sitter.homeDetails.housingType === 'house' ? 'Chalet / Casa independiente' : 'Piso amplio'}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    {sitter.homeDetails.hasFencedYard ? 'Jardín privado vallado y seguro' : 'Sin jardín propio (paseos frecuentes a parques)'}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    {sitter.homeDetails.hasOtherPets ? 'Tiene otras mascotas en casa' : 'No convive con otras mascotas'}
                  </li>
                </ul>
              </div>

              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                <h4 className="text-xs font-bold text-stone-900 mb-2">Habilidades Especiales</h4>
                <ul className="text-xs text-stone-600 space-y-1.5">
                  {sitter.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Complete Pricing Matrix */}
          <div>
            <h3 className="text-lg font-extrabold text-stone-900 mb-3">Tarifas por servicio</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              <div className={`p-3 rounded-2xl border text-center ${selectedService === 'boarding' ? 'bg-orange-50 border-orange-500' : 'bg-stone-50 border-stone-200'}`}>
                <div className="text-xs font-bold text-stone-700">Hospedaje</div>
                <div className="text-xl font-black text-stone-900 mt-1">{sitter.rates.boarding} €</div>
                <div className="text-[10px] text-stone-500">por noche</div>
              </div>

              <div className={`p-3 rounded-2xl border text-center ${selectedService === 'house-sitting' ? 'bg-orange-50 border-orange-500' : 'bg-stone-50 border-stone-200'}`}>
                <div className="text-xs font-bold text-stone-700">En tu casa</div>
                <div className="text-xl font-black text-stone-900 mt-1">{sitter.rates.houseSitting} €</div>
                <div className="text-[10px] text-stone-500">por noche</div>
              </div>

              <div className={`p-3 rounded-2xl border text-center ${selectedService === 'dog-walking' ? 'bg-orange-50 border-orange-500' : 'bg-stone-50 border-stone-200'}`}>
                <div className="text-xs font-bold text-stone-700">Paseos</div>
                <div className="text-xl font-black text-stone-900 mt-1">{sitter.rates.dogWalking} €</div>
                <div className="text-[10px] text-stone-500">por paseo 30m</div>
              </div>

              <div className={`p-3 rounded-2xl border text-center ${selectedService === 'daycare' ? 'bg-orange-50 border-orange-500' : 'bg-stone-50 border-stone-200'}`}>
                <div className="text-xs font-bold text-stone-700">Guardería</div>
                <div className="text-xl font-black text-stone-900 mt-1">{sitter.rates.daycare} €</div>
                <div className="text-[10px] text-stone-500">por día</div>
              </div>

              <div className={`p-3 rounded-2xl border text-center ${selectedService === 'drop-in' ? 'bg-orange-50 border-orange-500' : 'bg-stone-50 border-stone-200'}`}>
                <div className="text-xs font-bold text-stone-700">Visitas</div>
                <div className="text-xl font-black text-stone-900 mt-1">{sitter.rates.dropIn} €</div>
                <div className="text-[10px] text-stone-500">por visita</div>
              </div>
            </div>
            <p className="text-[11px] text-stone-500 mt-2">
              Política de cancelación: <strong className="text-stone-700">{sitter.cancellationPolicy}</strong> (Reembolso del 100% hasta 3 días antes de la reserva).
            </p>
          </div>

          {/* Reviews Section */}
          <div>
            <h3 className="text-lg font-extrabold text-stone-900 mb-3">
              Opiniones de dueños de mascotas ({sitter.reviewCount})
            </h3>
            <div className="space-y-3">
              {sitter.reviews.map((rev) => (
                <div key={rev.id} className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <img src={rev.authorAvatar} alt={rev.authorName} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <h5 className="text-xs font-bold text-stone-900">{rev.authorName}</h5>
                        <p className="text-[11px] text-stone-500">Dueño/a de {rev.petName} ({rev.petBreed})</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{rev.rating}.0</span>
                      <span className="text-stone-400 ml-1 font-normal">• {rev.date}</span>
                    </div>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Bar */}
        <div className="sticky bottom-0 bg-white border-t border-stone-200 p-4 sm:px-6 flex items-center justify-between gap-4">
          <div>
            <span className="text-xs text-stone-500">Tarifa actual</span>
            <div className="text-2xl font-black text-stone-900">
              {sitter.rates.boarding} € <span className="text-xs font-normal text-stone-500">/ noche</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => alert(`Mensaje enviado a ${sitter.name}. Te responderá en aproximadamente ${sitter.responseTime}.`)}
              className="px-4 py-2.5 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-700 font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Contactar
            </button>

            <button
              onClick={() => {
                onClose();
                onBook(sitter);
              }}
              className="px-6 py-2.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white rounded-xl font-bold text-xs shadow-lg shadow-orange-500/20 flex items-center gap-2 transition-all active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              Continuar a Reserva
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
