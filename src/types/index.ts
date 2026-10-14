export type ServiceType = 
  | 'boarding' 
  | 'house-sitting' 
  | 'dog-walking' 
  | 'daycare' 
  | 'drop-in';

export type PetType = 'dog' | 'cat' | 'other';
export type PetSize = 'small' | 'medium' | 'large' | 'giant';

export interface ServiceInfo {
  id: ServiceType;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  unit: string;
  averageRate: number;
}

export interface Review {
  id: string;
  authorName: string;
  authorAvatar: string;
  rating: number;
  date: string;
  petName: string;
  petBreed: string;
  comment: string;
}

export interface Sitter {
  id: string;
  name: string;
  tagline: string;
  avatar: string;
  coverImage: string;
  location: string;
  neighborhood: string;
  distanceKm: number;
  coordinates: { lat: number; lng: number };
  rating: number;
  reviewCount: number;
  repeatClients: number;
  yearsExperience: number;
  badges: Array<'verified_id' | 'background_checked' | 'first_aid' | 'super_sitter'>;
  rates: {
    boarding: number;
    houseSitting: number;
    dogWalking: number;
    daycare: number;
    dropIn: number;
  };
  homeDetails: {
    housingType: 'house' | 'apartment';
    hasFencedYard: boolean;
    hasOtherPets: boolean;
    hasChildren: boolean;
    smokersInHome: boolean;
  };
  about: string;
  skills: string[];
  gallery: string[];
  reviews: Review[];
  responseRate: number; // percentage e.g. 99
  responseTime: string; // e.g. "Menos de 15 minutos"
  cancellationPolicy: 'Flexible' | 'Moderada' | 'Estricta';
}

export interface SearchFilters {
  service: ServiceType;
  location: string;
  startDate: string;
  endDate: string;
  petType: PetType;
  petSize: PetSize;
  maxPrice: number;
  fencedYardOnly: boolean;
  noOtherPets: boolean;
  superSitterOnly: boolean;
}

export interface LiveReportEvent {
  time: string;
  type: 'pee' | 'poo' | 'water' | 'food' | 'photo';
  label: string;
  note?: string;
  imageUrl?: string;
}

export interface LiveCareReport {
  id: string;
  sitterId: string;
  sitterName: string;
  sitterAvatar: string;
  petName: string;
  petBreed: string;
  petPhoto: string;
  service: ServiceType;
  startTime: string;
  status: 'in_progress' | 'completed';
  durationMinutes: number;
  distanceKm: number;
  peeCount: number;
  pooCount: number;
  waterGiven: boolean;
  routePoints: Array<{ x: number; y: number; label?: string }>;
  events: LiveReportEvent[];
  photos: string[];
  sitterNote: string;
}

export interface Booking {
  id: string;
  sitter: Sitter;
  service: ServiceType;
  startDate: string;
  endDate: string;
  daysCount: number;
  petName: string;
  petType: PetType;
  basePrice: number;
  serviceFee: number;
  totalPrice: number;
  status: 'confirmed' | 'pending' | 'completed';
  createdAt: string;
}
