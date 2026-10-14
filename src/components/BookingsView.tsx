import React from 'react';
import { Booking } from '../types';
import { Calendar, MapPin, CheckCircle2, MessageSquare, Phone, Clock, Footprints } from 'lucide-react';

interface BookingsViewProps {
  bookings: Booking[];
  onOpenLiveReport: () => void;
}

export const BookingsView: React.FC<BookingsViewProps> = ({ bookings, onOpenLiveReport }) => {
  if (bookings.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mx-auto">
          <Calendar className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-stone-900">Aún no tienes reservas activas</h3>
        <p className="text-xs text-stone-600 max-w-sm mx-auto">
          Busca un cuidador cerca de ti para hospedar a tu mascota o pasearla durante tu jornada laboral.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-stone-900">Tus Reservas y Estancias</h2>
          <p className="text-xs text-stone-600">Historial y reservas en curso</p>
        </div>
        <span className="text-xs font-bold px-3 py-1 bg-stone-100 rounded-full text-stone-700">
          {bookings.length} {bookings.length === 1 ? 'reserva' : 'reservas'}
        </span>
      </div>

      <div className="space-y-4">
        {bookings.map((b) => (
          <div key={b.id} className="bg-white rounded-3xl p-5 border border-stone-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <img src={b.sitter.avatar} alt={b.sitter.name} className="w-16 h-16 rounded-2xl object-cover ring-2 ring-stone-100" />
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-stone-900">{b.sitter.name}</h4>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Confirmada
                  </span>
                </div>
                <p className="text-xs text-stone-600 mt-0.5">
                  Mascota: <strong>{b.petName}</strong> ({b.petType === 'dog' ? 'Perro' : 'Gato'})
                </p>
                <div className="flex items-center gap-3 text-xs text-stone-500 mt-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-orange-600" />
                    {b.startDate} al {b.endDate} ({b.daysCount} días)
                  </span>
                  <span>•</span>
                  <span>Total: <strong>{b.totalPrice} €</strong></span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap sm:flex-col gap-2 w-full sm:w-auto">
              <button
                onClick={onOpenLiveReport}
                className="flex-1 sm:flex-none px-4 py-2 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl text-xs font-bold shadow-md shadow-orange-500/20 flex items-center justify-center gap-1.5 hover:scale-[1.02] transition-transform"
              >
                <Footprints className="w-3.5 h-3.5" />
                Ver Reporte en Vivo
              </button>

              <button
                onClick={() => alert(`Conectando con ${b.sitter.name}...`)}
                className="flex-1 sm:flex-none px-4 py-2 border border-stone-200 hover:bg-stone-50 text-stone-700 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Mensajes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
