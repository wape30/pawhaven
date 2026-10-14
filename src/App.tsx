import React, { useState, useMemo } from 'react';
import { MOCK_SITTERS, DEMO_LIVE_REPORT } from './data/mockData';
import { Sitter, SearchFilters, Booking, ServiceType } from './types';
import { Navbar } from './components/Navbar';
import { HeroSearch } from './components/HeroSearch';
import { SitterCard } from './components/SitterCard';
import { MapSimulator } from './components/MapSimulator';
import { SitterDetailModal } from './components/SitterDetailModal';
import { BookingModal } from './components/BookingModal';
import { LiveReportView } from './components/LiveReportView';
import { BecomeSitterCalculator } from './components/BecomeSitterCalculator';
import { BookingsView } from './components/BookingsView';
import { TrustSafety } from './components/TrustSafety';
import { Footer } from './components/Footer';
import { Map, List, SlidersHorizontal, Sparkles } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<'search' | 'live-report' | 'calculator' | 'bookings'>('search');
  const [viewMode, setViewMode] = useState<'both' | 'list' | 'map'>('both');

  // Search and Filter State
  const [filters, setFilters] = useState<SearchFilters>({
    service: 'boarding',
    location: 'Chamartín, Madrid',
    startDate: '2026-10-18',
    endDate: '2026-10-22',
    petType: 'dog',
    petSize: 'medium',
    maxPrice: 60,
    fencedYardOnly: false,
    noOtherPets: false,
    superSitterOnly: false,
  });

  // Modals state
  const [selectedSitterForDetail, setSelectedSitterForDetail] = useState<Sitter | null>(null);
  const [selectedSitterForBooking, setSelectedSitterForBooking] = useState<Sitter | null>(null);
  const [hoveredSitter, setHoveredSitter] = useState<Sitter | null>(null);

  // User confirmed bookings
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: 'book-prev-1',
      sitter: MOCK_SITTERS[0],
      service: 'dog-walking',
      startDate: '2026-10-14',
      endDate: '2026-10-14',
      daysCount: 1,
      petName: 'Lucas',
      petType: 'dog',
      basePrice: 16,
      serviceFee: 2,
      totalPrice: 18,
      status: 'confirmed',
      createdAt: '14/10/2026'
    }
  ]);

  // Filter Sitters dynamically
  const filteredSitters = useMemo(() => {
    return MOCK_SITTERS.filter(sitter => {
      if (filters.fencedYardOnly && !sitter.homeDetails.hasFencedYard) return false;
      if (filters.noOtherPets && sitter.homeDetails.hasOtherPets) return false;
      if (filters.superSitterOnly && !sitter.badges.includes('super_sitter')) return false;
      return true;
    });
  }, [filters]);

  const handleBookingConfirmed = (booking: Booking) => {
    setBookings(prev => [booking, ...prev]);
    setSelectedSitterForBooking(null);
    setActiveTab('bookings');
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        bookingCount={bookings.length}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activeTab === 'search' && (
          <div>
            {/* Hero & Search Header */}
            <HeroSearch
              filters={filters}
              setFilters={setFilters}
              onSearch={() => {
                const el = document.getElementById('sitters-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Sitters & Map Discovery Section */}
            <section id="sitters-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-stone-200 gap-4">
                <div>
                  <h2 className="text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                    Cuidadores Disponibles en tu Zona
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-orange-100 text-orange-800">
                      {filteredSitters.length} encontrados
                    </span>
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Mostrando resultados en <strong>{filters.location || 'Madrid'}</strong> para {filters.service === 'boarding' ? 'Hospedaje Familiar' : filters.service === 'dog-walking' ? 'Paseos' : 'Cuidados'}
                  </p>
                </div>

                {/* View toggles */}
                <div className="flex items-center gap-2 bg-stone-100 p-1 rounded-2xl border border-stone-200 self-start sm:self-auto">
                  <button
                    onClick={() => setViewMode('both')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      viewMode === 'both' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600'
                    }`}
                  >
                    Lista y Mapa
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      viewMode === 'list' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600'
                    }`}
                  >
                    Solo Lista
                  </button>
                  <button
                    onClick={() => setViewMode('map')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      viewMode === 'map' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600'
                    }`}
                  >
                    Solo Mapa
                  </button>
                </div>
              </div>

              {/* Main Content Grid: Sitters + Map */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
                {/* Left List of Sitters */}
                {(viewMode === 'both' || viewMode === 'list') && (
                  <div className={`${viewMode === 'both' ? 'lg:col-span-7' : 'lg:col-span-12'} space-y-4`}>
                    {filteredSitters.map((sitter) => (
                      <SitterCard
                        key={sitter.id}
                        sitter={sitter}
                        selectedService={filters.service}
                        isSelected={hoveredSitter?.id === sitter.id}
                        onSelect={(s) => setSelectedSitterForDetail(s)}
                        onBook={(s) => setSelectedSitterForBooking(s)}
                      />
                    ))}

                    {filteredSitters.length === 0 && (
                      <div className="p-12 text-center bg-white rounded-3xl border border-stone-200">
                        <p className="text-sm font-bold text-stone-600">No se encontraron cuidadores con esos filtros exactos.</p>
                        <button
                          onClick={() => setFilters(prev => ({ ...prev, fencedYardOnly: false, noOtherPets: false, superSitterOnly: false }))}
                          className="mt-3 text-xs font-bold text-orange-600 underline"
                        >
                          Restablecer filtros
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Right Interactive Map */}
                {(viewMode === 'both' || viewMode === 'map') && (
                  <div className={`${viewMode === 'both' ? 'lg:col-span-5' : 'lg:col-span-12'} sticky top-28 self-start`}>
                    <MapSimulator
                      sitters={filteredSitters}
                      selectedSitter={hoveredSitter}
                      onSelectSitter={(s) => {
                        setHoveredSitter(s);
                        setSelectedSitterForDetail(s);
                      }}
                      selectedService={filters.service}
                    />
                  </div>
                )}
              </div>
            </section>

            {/* Trust and Safety Comparison */}
            <TrustSafety />
          </div>
        )}

        {/* Tab 2: Live Care Report GPS Tracking */}
        {activeTab === 'live-report' && (
          <LiveReportView report={DEMO_LIVE_REPORT} />
        )}

        {/* Tab 3: Become a Sitter Calculator */}
        {activeTab === 'calculator' && (
          <BecomeSitterCalculator />
        )}

        {/* Tab 4: User Bookings */}
        {activeTab === 'bookings' && (
          <BookingsView
            bookings={bookings}
            onOpenLiveReport={() => setActiveTab('live-report')}
          />
        )}
      </main>

      {/* Sitter Detail Modal */}
      <SitterDetailModal
        sitter={selectedSitterForDetail}
        selectedService={filters.service}
        onClose={() => setSelectedSitterForDetail(null)}
        onBook={(s) => setSelectedSitterForBooking(s)}
      />

      {/* Booking Checkout Modal */}
      <BookingModal
        sitter={selectedSitterForBooking}
        selectedService={filters.service}
        onClose={() => setSelectedSitterForBooking(null)}
        onConfirmBooking={handleBookingConfirmed}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
