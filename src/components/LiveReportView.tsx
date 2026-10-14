import React, { useState, useEffect } from 'react';
import { LiveCareReport } from '../types';
import { Footprints, Droplets, Utensils, Camera, Clock, CheckCircle2, Navigation, MessageCircle, Heart } from 'lucide-react';

interface LiveReportViewProps {
  report: LiveCareReport;
}

export const LiveReportView: React.FC<LiveReportViewProps> = ({ report }) => {
  const [seconds, setSeconds] = useState(28 * 60 + 14);
  const [peeCount, setPeeCount] = useState(report.peeCount);
  const [pooCount, setPooCount] = useState(report.pooCount);
  const [showSimulateEvent, setShowSimulateEvent] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-emerald-600 rounded-3xl p-6 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img src={report.petPhoto} alt={report.petName} className="w-16 h-16 rounded-2xl object-cover ring-4 ring-white/30" />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 ring-2 ring-white"></span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-black">{report.petName} está de paseo</h2>
              <span className="bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">
                En Directo
              </span>
            </div>
            <p className="text-white/80 text-xs mt-0.5">
              Con <strong>{report.sitterName}</strong> • {report.petBreed}
            </p>
          </div>
        </div>

        {/* Big Live Timer */}
        <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 text-center flex-shrink-0">
          <div className="text-xs uppercase tracking-wider text-white/85 font-bold flex items-center justify-center gap-1">
            <Clock className="w-3.5 h-3.5" /> Tiempo activo
          </div>
          <div className="text-3xl font-black font-mono tracking-tight">{formatTime(seconds)}</div>
        </div>
      </div>

      {/* Grid: GPS Map & Real-time Counters */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* GPS Map Canvas */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-5 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Navigation className="w-4 h-4 text-orange-600" />
              <h3 className="text-sm font-extrabold text-stone-900">Ruta GPS en Tiempo Real</h3>
            </div>
            <span className="text-xs font-bold text-stone-500">{report.distanceKm} km recorridos</span>
          </div>

          {/* Map Simulation */}
          <div className="relative h-72 bg-emerald-50/50 rounded-2xl border border-emerald-100 overflow-hidden">
            {/* SVG Roads & Trail */}
            <svg className="w-full h-full" viewBox="0 0 100 100">
              {/* Park Grass Pattern */}
              <rect width="100" height="100" fill="#f0fdf4" />
              <circle cx="50" cy="50" r="35" fill="#dcfce7" opacity="0.6" />
              {/* Streets */}
              <line x1="0" y1="30" x2="100" y2="30" stroke="#e2e8f0" strokeWidth="4" />
              <line x1="0" y1="70" x2="100" y2="70" stroke="#e2e8f0" strokeWidth="4" />
              <line x1="30" y1="0" x2="30" y2="100" stroke="#e2e8f0" strokeWidth="4" />
              <line x1="70" y1="0" x2="70" y2="100" stroke="#e2e8f0" strokeWidth="4" />
              {/* Dynamic Walk Path */}
              <path
                d="M 20 80 Q 35 65 50 40 T 80 48 T 60 70"
                fill="none"
                stroke="#ea580c"
                strokeWidth="2.5"
                strokeDasharray="2 1"
                className="animate-pulse"
              />
              {/* Waypoints */}
              <circle cx="20" cy="80" r="2.5" fill="#16a34a" />
              <circle cx="50" cy="40" r="2" fill="#0284c7" />
              <circle cx="80" cy="48" r="2" fill="#9333ea" />
              {/* Current Sitter & Dog Location Marker */}
              <circle cx="60" cy="70" r="3.5" fill="#ea580c" className="animate-ping" opacity="0.75" />
              <circle cx="60" cy="70" r="3.5" fill="#ea580c" />
            </svg>

            {/* Float Badge */}
            <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm border border-stone-200 text-[11px] font-bold text-stone-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              GPS Activo • Parque de los Pinos
            </div>
          </div>

          {/* Quick interactive buttons to simulate report updates */}
          <div className="pt-2 flex items-center justify-between text-xs border-t border-stone-100">
            <span className="text-stone-500 font-semibold">Simular evento del cuidador:</span>
            <div className="flex gap-2">
              <button
                onClick={() => setPeeCount(prev => prev + 1)}
                className="px-2.5 py-1 bg-sky-50 text-sky-700 hover:bg-sky-100 rounded-lg font-bold transition-colors"
              >
                + Pis 💧
              </button>
              <button
                onClick={() => setPooCount(prev => prev + 1)}
                className="px-2.5 py-1 bg-amber-50 text-amber-800 hover:bg-amber-100 rounded-lg font-bold transition-colors"
              >
                + Caca 💩
              </button>
            </div>
          </div>
        </div>

        {/* Live Counters & Sitter Note */}
        <div className="lg:col-span-5 space-y-4">
          {/* Counters Card */}
          <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-sm space-y-4">
            <h3 className="text-sm font-extrabold text-stone-900">Registro de Necesidades</h3>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-3 bg-sky-50 rounded-2xl border border-sky-200">
                <Droplets className="w-5 h-5 text-sky-600 mx-auto mb-1" />
                <div className="text-2xl font-black text-sky-950">{peeCount}</div>
                <div className="text-[11px] font-bold text-sky-700">Pis</div>
              </div>

              <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200">
                <span className="text-xl block mb-1">💩</span>
                <div className="text-2xl font-black text-amber-950">{pooCount}</div>
                <div className="text-[11px] font-bold text-amber-800">Caca</div>
              </div>

              <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200">
                <Utensils className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                <div className="text-sm font-black text-emerald-950 mt-1">Fresca</div>
                <div className="text-[11px] font-bold text-emerald-700">Agua dada</div>
              </div>
            </div>
          </div>

          {/* Sitter Message Card */}
          <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <img src={report.sitterAvatar} alt={report.sitterName} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <h4 className="text-xs font-bold text-stone-900">Mensaje de {report.sitterName}</h4>
                <p className="text-[10px] text-stone-400">Recibido hace 4 minutos</p>
              </div>
            </div>
            <p className="text-xs text-stone-700 italic bg-stone-50 p-3 rounded-xl border border-stone-100 leading-relaxed">
              "{report.sitterNote}"
            </p>
          </div>
        </div>
      </div>

      {/* Activity Timeline & Live Photos */}
      <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-extrabold text-stone-900 flex items-center gap-2">
            <Camera className="w-4 h-4 text-orange-600" />
            Línea de Tiempo y Fotos del Paseo
          </h3>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            {report.photos.length} fotos compartidas
          </span>
        </div>

        {/* Timeline Events */}
        <div className="space-y-4">
          {report.events.map((ev, i) => (
            <div key={i} className="flex gap-4 items-start pb-4 border-b border-stone-100 last:border-0 last:pb-0">
              <div className="w-14 text-right flex-shrink-0">
                <span className="text-xs font-mono font-bold text-stone-500">{ev.time}</span>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500 mt-1 flex-shrink-0 ring-4 ring-orange-100"></div>
              <div className="flex-1 space-y-2">
                <p className="text-xs font-bold text-stone-800">{ev.label}</p>
                {ev.note && <p className="text-xs text-stone-600">{ev.note}</p>}
                {ev.imageUrl && (
                  <img
                    src={ev.imageUrl}
                    alt="Foto del paseo"
                    className="w-48 h-32 rounded-xl object-cover ring-2 ring-stone-100 shadow-sm hover:scale-105 transition-transform"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
