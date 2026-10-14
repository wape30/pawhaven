import React from 'react';
import { ShieldCheck, Check, X, Award, Stethoscope, HeartHandshake, PhoneCall } from 'lucide-react';

export const TrustSafety: React.FC = () => {
  return (
    <section className="bg-stone-100/70 border-t border-stone-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Tranquilidad Absoluta
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mt-3 tracking-tight">
            ¿Por qué PawHaven en lugar de una residencia tradicional?
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base">
            Tu mascota merece el cariño de un hogar real, atención individualizada y mimos constantes, no una jaula fría.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* PawHaven Advantage Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/80 shadow-lg relative">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-extrabold text-xs mb-4">
              <Award className="w-4 h-4 text-emerald-600" /> Experiencia PawHaven
            </div>
            <h3 className="text-xl font-black text-stone-900 mb-4">Un Hogar Cálido y Familiar</h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-stone-700">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Sin jaulas ni boxes:</strong> Duermen en sofás, camas o mantas como en su propia casa.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Atención 1 a 1:</strong> Solo cuidan una o dos mascotas a la vez para máxima dedicación.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Reportes en Vivo y Fotos:</strong> Actualizaciones diarias con fotos, vídeos y GPS.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span><strong>Garantía Veterinaria:</strong> Cobertura ante emergencias de hasta 25.000€.</span>
              </li>
            </ul>
          </div>

          {/* Traditional Kennels Card */}
          <div className="bg-white/80 rounded-3xl p-6 sm:p-8 border border-stone-300 text-stone-500">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-600 font-bold text-xs mb-4">
              Residencias Caninas Clásicas
            </div>
            <h3 className="text-xl font-bold text-stone-700 mb-4">Perreras y Guarderías Masivas</h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-stone-500">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </div>
                <span>Jaulas y boxes con barrotes durante la mayor parte del día y noche.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </div>
                <span>Estrés alto debido al ruido constante de decenas de perros ladrando.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </div>
                <span>Sin fotos ni comunicación regular sobre el estado de tu mascota.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </div>
                <span>Sin cobertura directa de urgencias veterinarias imprevistas.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3 Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-stone-200">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-stone-900 text-sm">Verificación en 4 Pasos</h4>
              <p className="text-xs text-stone-600 mt-1">Revisión de DNI, antecedentes penales, inspección de hogar y test de conocimiento animal.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-stone-200">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-stone-900 text-sm">Línea Veterinaria 24/7</h4>
              <p className="text-xs text-stone-600 mt-1">Nuestros cuidadores tienen contacto directo las 24 horas con veterinarios de guardia.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-stone-200">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-stone-900 text-sm">Atención al Cliente Humana</h4>
              <p className="text-xs text-stone-600 mt-1">Soporte telefónico y por chat los 365 días del año para ayudarte con cualquier duda.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
