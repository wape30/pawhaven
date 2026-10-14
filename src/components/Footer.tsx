import React from 'react';
import { Footprints, Globe, Share2, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white shadow-md">
                <Footprints className="w-5 h-5 rotate-12" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">Paw<span className="text-orange-500">Haven</span></span>
            </div>
            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              La mayor comunidad de cuidadores y paseadores de mascotas de confianza. Cuidado familiar sin jaulas, respaldado por la Garantía PawHaven con cobertura veterinaria 24/7.
            </p>
            <div className="flex items-center gap-3 text-stone-400 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center hover:text-white hover:bg-stone-700 transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center hover:text-white hover:bg-stone-700 transition-colors">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col: Servicios */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#" className="hover:text-white transition-colors">Hospedaje Familiar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cuidado en tu Casa</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Paseos de Perros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guardería de Día</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Visitas a Domicilio</a></li>
            </ul>
          </div>

          {/* Col: Cuidadores */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Cuidadores</h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#" className="hover:text-white transition-colors">Conviértete en Cuidador</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Calculadora de Ganancias</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Seguridad y Verificación</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Centro de Recursos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Historias de la Comunidad</a></li>
            </ul>
          </div>

          {/* Col: Confianza & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Seguridad</h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#" className="hover:text-white transition-colors">Garantía PawHaven 25.000€</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Asistencia Veterinaria 24/7</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos del Servicio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Atención al Cliente</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 PawHaven Technologies Inc. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-stone-400">
              <Globe className="w-3.5 h-3.5" /> Español (España) • EUR (€)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
