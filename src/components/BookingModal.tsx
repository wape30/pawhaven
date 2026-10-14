import React, { useState } from 'react';
import { Sitter, ServiceType, Booking } from '../types';
import { X, ShieldCheck, Heart, CheckCircle2, Lock, Sparkles } from 'lucide-react';

interface BookingModalProps {
  sitter: Sitter | null;
  selectedService: ServiceType;
  onClose: () => void;
  onConfirmBooking: (booking: Booking) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  sitter,
  selectedService,
  onClose,
  onConfirmBooking
}) => {
  if (!sitter) return null;

  const [startDate, setStartDate] = useState('2026-10-18');
  const [endDate, setEndDate] = useState('2026-10-22');
  const [petName, setPetName] = useState('Max');
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [notes, setNotes] = useState('Es muy dócil, toma pienso normal dos veces al día y le encanta jugar con pelotas.');
  const [isSuccess, setIsSuccess] = useState(false);

  // Calculate days difference
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  const getServicePrice = () => {
    switch (selectedService) {
      case 'boarding': return sitter.rates.boarding;
      case 'house-sitting': return sitter.rates.houseSitting;
      case 'dog-walking': return sitter.rates.dogWalking;
      case 'daycare': return sitter.rates.daycare;
      case 'drop-in': return sitter.rates.dropIn;
      default: return sitter.rates.boarding;
    }
  };

  const unitPrice = getServicePrice();
  const subtotal = unitPrice * diffDays;
  const serviceFee = Math.round(subtotal * 0.10); // 10% platform fee
  const totalPrice = subtotal + serviceFee;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBooking: Booking = {
      id: `book-${Date.now()}`,
      sitter,
      service: selectedService,
      startDate,
      endDate,
      daysCount: diffDays,
      petName,
      petType,
      basePrice: subtotal,
      serviceFee,
      totalPrice,
      status: 'confirmed',
      createdAt: new Date().toLocaleDateString()
    };

    setIsSuccess(true);
    setTimeout(() => {
      onConfirmBooking(newBooking);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-stone-200 overflow-hidden relative">
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-bold text-stone-700 uppercase tracking-wider">Reserva Segura Protegida</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-stone-900">¡Reserva Confirmada con Éxito!</h3>
            <p className="text-xs text-stone-600 max-w-sm mx-auto">
              Hemos notificado a <strong>{sitter.name}</strong>. Recibirás actualizaciones y fotos en tiempo real en tu panel.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Garantía PawHaven 25.000€ activada
            </div>
          </div>
        ) : (
          <form onSubmit={handleBookingSubmit} className="p-6 space-y-5">
            {/* Sitter summary badge */}
            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-2xl border border-stone-200">
              <img src={sitter.avatar} alt={sitter.name} className="w-12 h-12 rounded-xl object-cover" />
              <div>
                <h4 className="text-sm font-bold text-stone-900">{sitter.name}</h4>
                <p className="text-xs text-stone-500">{sitter.location} • Tarifa {unitPrice}€/noche</p>
              </div>
            </div>

            {/* Dates row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">Fecha de inicio</label>
                <input
                  type="date"
                  required
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">Fecha de finalización</label>
                <input
                  type="date"
                  required
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Pet details */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">Nombre de la mascota</label>
                <input
                  type="text"
                  required
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  placeholder="Ej. Lucas, Max, Luna"
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">Tipo de animal</label>
                <select
                  value={petType}
                  onChange={(e) => setPetType(e.target.value as 'dog' | 'cat')}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-semibold focus:border-orange-500 focus:outline-none"
                >
                  <option value="dog">Perro</option>
                  <option value="cat">Gato</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">Indicaciones o cuidados especiales</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                placeholder="Horario de comida, medicación o paseos..."
                className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-medium focus:border-orange-500 focus:outline-none"
              />
            </div>

            {/* Cost Breakdown */}
            <div className="p-4 bg-orange-50/50 rounded-2xl border border-orange-200/80 space-y-2">
              <div className="flex justify-between text-xs text-stone-600">
                <span>{unitPrice} € x {diffDays} {diffDays === 1 ? 'día/noche' : 'días/noches'}</span>
                <span className="font-semibold text-stone-900">{subtotal} €</span>
              </div>

              <div className="flex justify-between text-xs text-stone-600">
                <span className="flex items-center gap-1">
                  Cuota de Servicio PawHaven
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded font-bold">10%</span>
                </span>
                <span className="font-semibold text-stone-900">{serviceFee} €</span>
              </div>

              <div className="border-t border-orange-200/60 pt-2 flex justify-between items-center">
                <span className="text-sm font-extrabold text-stone-900">Total a Pagar</span>
                <span className="text-xl font-black text-orange-600">{totalPrice} €</span>
              </div>
            </div>

            {/* Trust badge */}
            <div className="flex items-start gap-2.5 p-3 bg-emerald-50 rounded-xl text-emerald-900 text-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold">Protegido por la Garantía PawHaven</strong>
                <p className="text-[11px] text-emerald-700">
                  Cubre atención veterinaria de urgencia hasta 25.000€, soporte 24/7 y reembolso total si cancelas con 3 días de antelación.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-black text-sm rounded-2xl shadow-lg shadow-orange-500/25 transition-all active:scale-98"
            >
              Confirmar Reserva • {totalPrice} €
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
