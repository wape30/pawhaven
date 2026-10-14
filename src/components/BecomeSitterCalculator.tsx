import React, { useState } from 'react';
import { ServiceType } from '../types';
import { DollarSign, ShieldCheck, Heart, Sparkles, CheckCircle2, ChevronRight, Calculator } from 'lucide-react';

export const BecomeSitterCalculator: React.FC = () => {
  const [service, setService] = useState<ServiceType>('boarding');
  const [nightsPerMonth, setNightsPerMonth] = useState(12);
  const [petsAtOnce, setPetsAtOnce] = useState(2);
  const [nightRate, setNightRate] = useState(35);

  // Calculation:
  // Gross = nights * pets * rate
  // Sitter retains 85% (PawHaven platform fee is 15%)
  const grossMonthly = nightsPerMonth * petsAtOnce * nightRate;
  const netMonthly = Math.round(grossMonthly * 0.85);
  const annualEstimate = netMonthly * 12;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold inline-block mb-3">
          Comunidad de Cuidadores PawHaven
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
          Haz lo que amas y gana hasta <span className="text-orange-600">{netMonthly} € / mes</span>
        </h2>
        <p className="mt-3 text-stone-600 text-sm sm:text-base">
          Tú eliges tus horarios, tus tarifas y los tipos de mascotas que deseas hospedar o pasear. Nosotros te cubrimos con seguro y soporte 24/7.
        </p>
      </div>

      {/* Interactive Calculator Box */}
      <div className="bg-white rounded-3xl border border-stone-200 shadow-xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
            <Calculator className="w-5 h-5 text-orange-600" />
            <span>Calcula tus ingresos estimados</span>
          </div>

          {/* Service Selector */}
          <div>
            <label className="text-xs font-bold text-stone-700 block mb-2">Servicio Principal</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => { setService('boarding'); setNightRate(35); }}
                className={`p-3 rounded-2xl border text-xs font-bold transition-all ${
                  service === 'boarding'
                    ? 'bg-orange-50 border-orange-500 text-orange-950 ring-2 ring-orange-500/20'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                🏡 Hospedaje
              </button>
              <button
                type="button"
                onClick={() => { setService('dog-walking'); setNightRate(16); }}
                className={`p-3 rounded-2xl border text-xs font-bold transition-all ${
                  service === 'dog-walking'
                    ? 'bg-orange-50 border-orange-500 text-orange-950 ring-2 ring-orange-500/20'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                🐾 Paseos
              </button>
              <button
                type="button"
                onClick={() => { setService('daycare'); setNightRate(25); }}
                className={`p-3 rounded-2xl border text-xs font-bold transition-all ${
                  service === 'daycare'
                    ? 'bg-orange-50 border-orange-500 text-orange-950 ring-2 ring-orange-500/20'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                ☀️ Guardería
              </button>
            </div>
          </div>

          {/* Days Slider */}
          <div>
            <div className="flex justify-between items-center mb-1 text-xs font-bold text-stone-700">
              <span>Días o noches al mes:</span>
              <span className="text-orange-600 text-sm font-black">{nightsPerMonth} días</span>
            </div>
            <input
              type="range"
              min="2"
              max="28"
              value={nightsPerMonth}
              onChange={(e) => setNightsPerMonth(Number(e.target.value))}
              className="w-full accent-orange-600 cursor-pointer"
            />
          </div>

          {/* Pets Slider */}
          <div>
            <div className="flex justify-between items-center mb-1 text-xs font-bold text-stone-700">
              <span>Mascotas simultáneas:</span>
              <span className="text-orange-600 text-sm font-black">{petsAtOnce} mascota(s)</span>
            </div>
            <input
              type="range"
              min="1"
              max="4"
              value={petsAtOnce}
              onChange={(e) => setPetsAtOnce(Number(e.target.value))}
              className="w-full accent-orange-600 cursor-pointer"
            />
          </div>

          {/* Rate Slider */}
          <div>
            <div className="flex justify-between items-center mb-1 text-xs font-bold text-stone-700">
              <span>Tu tarifa fijada:</span>
              <span className="text-orange-600 text-sm font-black">{nightRate} € / {service === 'dog-walking' ? 'paseo' : 'noche'}</span>
            </div>
            <input
              type="range"
              min="12"
              max="60"
              value={nightRate}
              onChange={(e) => setNightRate(Number(e.target.value))}
              className="w-full accent-orange-600 cursor-pointer"
            />
          </div>
        </div>

        {/* Calculation Result Display */}
        <div className="lg:col-span-5 bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-6 sm:p-8 text-white text-center space-y-6 shadow-xl">
          <span className="text-xs uppercase font-bold tracking-widest text-orange-400">
            Ganancia Neta Estimada
          </span>

          <div>
            <div className="text-5xl font-black tracking-tight text-white">
              {netMonthly.toLocaleString()} €
            </div>
            <p className="text-xs text-stone-400 mt-1">al mes (ingreso en tu cuenta bancaria)</p>
          </div>

          <div className="pt-4 border-t border-stone-700/60 flex justify-around text-left">
            <div>
              <div className="text-xs text-stone-400">Proyección Anual</div>
              <div className="text-lg font-bold text-emerald-400">{annualEstimate.toLocaleString()} €</div>
            </div>
            <div className="border-l border-stone-700 pl-4">
              <div className="text-xs text-stone-400">Comisión Cuidador</div>
              <div className="text-lg font-bold text-amber-400">Solo 15%</div>
            </div>
          </div>

          <button
            onClick={() => alert('¡Gracias por tu interés! El proceso de alta de cuidador con verificación de antecedentes demora menos de 5 minutos.')}
            className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-sm rounded-2xl shadow-lg shadow-orange-500/30 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Crear Perfil de Cuidador</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Perks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-3xl border border-stone-200 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-extrabold text-stone-900 text-base">Garantía y Seguro Incluidos</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Cada reserva formalizada en la plataforma incluye cobertura ante emergencias veterinarias y seguro de responsabilidad civil.
          </p>
        </div>

        <div className="p-6 bg-white rounded-3xl border border-stone-200 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
            <DollarSign className="w-5 h-5" />
          </div>
          <h3 className="font-extrabold text-stone-900 text-base">Cobros Puntuales y Seguros</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Los dueños pagan por adelantado y tú recibes los fondos de forma automática en tu cuenta 48 horas después de completado el servicio.
          </p>
        </div>

        <div className="p-6 bg-white rounded-3xl border border-stone-200 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold">
            <Heart className="w-5 h-5" />
          </div>
          <h3 className="font-extrabold text-stone-900 text-base">Libertad Total de Aceptación</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Programa 'Meet & Greets' previos para conocer a la mascota y su dueño antes de confirmar cualquier estancia.
          </p>
        </div>
      </div>
    </div>
  );
};
