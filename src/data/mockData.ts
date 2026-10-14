import { Sitter, ServiceInfo, LiveCareReport } from '../types';

export const SERVICES: ServiceInfo[] = [
  {
    id: 'boarding',
    title: 'Hospedaje Familiar',
    tagline: 'Tu mascota se queda en casa del cuidador',
    description: 'La alternativa cariñosa y sin jaulas a las residencias caninas tradicionales.',
    iconName: 'Home',
    unit: 'noche',
    averageRate: 35
  },
  {
    id: 'house-sitting',
    title: 'Cuidado en tu Casa',
    tagline: 'El cuidador se traslada a tu domicilio',
    description: 'Perfecto para mascotas que prefieren la tranquilidad de su propio entorno.',
    iconName: 'ShieldCheck',
    unit: 'noche',
    averageRate: 40
  },
  {
    id: 'dog-walking',
    title: 'Paseos Caninos',
    tagline: 'Paseos de 30 o 60 min con reporte GPS',
    description: 'Ejercicio, juegos y pausas para hacer sus necesidades mientras trabajas.',
    iconName: 'Footprints',
    unit: 'paseo',
    averageRate: 15
  },
  {
    id: 'daycare',
    title: 'Guardería de Día',
    tagline: 'Cuidado y socialización diurna',
    description: 'Llévalo por la mañana y recógelo por la tarde cansado y feliz.',
    iconName: 'Sun',
    unit: 'día',
    averageRate: 25
  },
  {
    id: 'drop-in',
    title: 'Visitas a Domicilio',
    tagline: 'Visitas de 30 minutos para comida y mimos',
    description: 'Ideal para gatos y cachorros que necesitan compañía, comida y juegos.',
    iconName: 'Clock',
    unit: 'visita',
    averageRate: 18
  }
];

export const MOCK_SITTERS: Sitter[] = [
  {
    id: 'sitter-1',
    name: 'Elena & Carlos García',
    tagline: 'Amor infinito y casa con jardín vallado de 200m²',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80',
    location: 'Madrid, Chamartín',
    neighborhood: 'Zona Residencial Alfonso XIII',
    distanceKm: 1.4,
    coordinates: { lat: 40.4530, lng: -3.6765 },
    rating: 4.98,
    reviewCount: 94,
    repeatClients: 38,
    yearsExperience: 6,
    badges: ['verified_id', 'background_checked', 'first_aid', 'super_sitter'],
    rates: {
      boarding: 36,
      houseSitting: 42,
      dogWalking: 16,
      daycare: 26,
      dropIn: 18
    },
    homeDetails: {
      housingType: 'house',
      hasFencedYard: true,
      hasOtherPets: false,
      hasChildren: false,
      smokersInHome: false
    },
    about: '¡Hola familias! Somos Elena y Carlos, biólogos y apasionados de los animales. Vivimos en un chalet adosado con jardín 100% cerrado y seguro. Trabajamos en remoto por lo que tu peludo nunca estará solo. Damos paseos por los parques cercanos y enviamos fotos y vídeos en cada comida y paseo.',
    skills: ['Primeros auxilios veterinarios', 'Administración de medicamentos', 'Cuidado de perros sénior', 'Rutinas de estimulación mental'],
    gallery: [
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80'
    ],
    reviews: [
      {
        id: 'rev-1',
        authorName: 'Marta Soler',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: 'Hace 4 días',
        petName: 'Lucas',
        petBreed: 'Golden Retriever',
        comment: 'Lucas no quería volver a casa de lo bien que se lo pasó. Me mandaron fotos cada 2 horas con los paseos y los juegos en el jardín. ¡Total tranquilidad para mis vacaciones!'
      },
      {
        id: 'rev-2',
        authorName: 'Javier Morales',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: 'Hace 2 semanas',
        petName: 'Nala',
        petBreed: 'Border Collie',
        comment: 'Súper profesionales y atentos. Nala necesita mucha actividad física y la sacaron a correr por el parque. Repetiremos sin dudarlo.'
      }
    ],
    responseRate: 100,
    responseTime: 'Menos de 10 min',
    cancellationPolicy: 'Flexible'
  },
  {
    id: 'sitter-2',
    name: 'Mateo Fernández',
    tagline: 'Veterinario técnico con especial amor por cachorros y gatos',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80',
    location: 'Madrid, Chamberí',
    neighborhood: 'Plaza de Olavide',
    distanceKm: 2.1,
    coordinates: { lat: 40.4350, lng: -3.7015 },
    rating: 4.95,
    reviewCount: 68,
    repeatClients: 29,
    yearsExperience: 4,
    badges: ['verified_id', 'background_checked', 'first_aid', 'super_sitter'],
    rates: {
      boarding: 32,
      houseSitting: 38,
      dogWalking: 14,
      daycare: 24,
      dropIn: 16
    },
    homeDetails: {
      housingType: 'apartment',
      hasFencedYard: false,
      hasOtherPets: true,
      hasChildren: false,
      smokersInHome: false
    },
    about: 'Soy asistente técnico veterinario (ATV). Si tu perro o gato necesita medicación oral o inyectable, o cuidados específicos por edad, estará en las mejores manos. Mi piso es amplio, luminoso y con terraza acristalada 100% protegida.',
    skills: ['Inyecciones y medicación', 'Cuidado felino especializado', 'Socialización guiada', 'Manejo de ansiedad por separación'],
    gallery: [
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80'
    ],
    reviews: [
      {
        id: 'rev-3',
        authorName: 'Lucía Navarro',
        authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: 'Hace 1 semana',
        petName: 'Mishi & Copito',
        petBreed: 'Gatos Europeos',
        comment: 'Hizo visitas a domicilio para mis dos gatos durante 5 días. Les dio su medicina a tiempo y me mandó vídeos jugando con la caña. Mateo es un 10.'
      }
    ],
    responseRate: 98,
    responseTime: 'Menos de 20 min',
    cancellationPolicy: 'Flexible'
  },
  {
    id: 'sitter-3',
    name: 'Sara & Bruno Martínez',
    tagline: 'Adiestradora canina en positivo y paseadora pro',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=80',
    location: 'Madrid, Retiro',
    neighborhood: 'Junto al Parque del Retiro',
    distanceKm: 3.5,
    coordinates: { lat: 40.4150, lng: -3.6820 },
    rating: 5.0,
    reviewCount: 112,
    repeatClients: 51,
    yearsExperience: 8,
    badges: ['verified_id', 'background_checked', 'first_aid', 'super_sitter'],
    rates: {
      boarding: 40,
      houseSitting: 45,
      dogWalking: 18,
      daycare: 28,
      dropIn: 20
    },
    homeDetails: {
      housingType: 'apartment',
      hasFencedYard: false,
      hasOtherPets: false,
      hasChildren: true,
      smokersInHome: false
    },
    about: 'Titulada en modificación de conducta canina amable. Vivo a escasos 100 metros del Parque del Retiro. Cada paseo es enriquecedor: olfato, juego sin tirones y descanso en un ambiente hogareño de máxima calma.',
    skills: ['Educación en positivo', 'Perros reactivos o miedosos', 'Rutas por la naturaleza', 'Juegos de estimulación olfativa'],
    gallery: [
      'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80'
    ],
    reviews: [
      {
        id: 'rev-4',
        authorName: 'Diego Velázquez',
        authorAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: 'Hace 3 días',
        petName: 'Thor',
        petBreed: 'Pastor Alemán',
        comment: 'Thor suele ser reactivo con otros perros y Sara supo gestionarlo a la perfección con calma y premios. Nunca había tenido tanta confianza al dejarlo.'
      }
    ],
    responseRate: 99,
    responseTime: 'Menos de 15 min',
    cancellationPolicy: 'Moderada'
  },
  {
    id: 'sitter-4',
    name: 'David Rivas',
    tagline: 'Espacio acogedor, paseos largos y mucha diversión',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=1200&q=80',
    location: 'Madrid, Malasaña',
    neighborhood: 'Cerca de Parque del Oeste',
    distanceKm: 2.8,
    coordinates: { lat: 40.4280, lng: -3.7090 },
    rating: 4.88,
    reviewCount: 42,
    repeatClients: 15,
    yearsExperience: 3,
    badges: ['verified_id', 'background_checked'],
    rates: {
      boarding: 28,
      houseSitting: 34,
      dogWalking: 12,
      daycare: 20,
      dropIn: 15
    },
    homeDetails: {
      housingType: 'apartment',
      hasFencedYard: false,
      hasOtherPets: false,
      hasChildren: false,
      smokersInHome: false
    },
    about: 'Desarrollador de software con horario flexible 100% en casa. Siempre he tenido perros en casa y ahora cuido de los de mis amigos y clientes con la misma dedicación. Paseos mínimo 3 veces al día.',
    skills: ['Paseos largos de montaña', 'Compañía continua', 'Fotos de alta calidad'],
    gallery: [
      'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80'
    ],
    reviews: [
      {
        id: 'rev-5',
        authorName: 'Carla Blanco',
        authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: 'Hace 5 días',
        petName: 'Bimba',
        petBreed: 'Beagle',
        comment: 'David es majísimo y Bimba volvió cansada y feliz. Totalmente recomendado para estancias de fin de semana.'
      }
    ],
    responseRate: 95,
    responseTime: 'Menos de 30 min',
    cancellationPolicy: 'Flexible'
  }
];

export const DEMO_LIVE_REPORT: LiveCareReport = {
  id: 'rep-live-101',
  sitterId: 'sitter-1',
  sitterName: 'Elena García',
  sitterAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  petName: 'Lucas',
  petBreed: 'Golden Retriever',
  petPhoto: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=400&q=80',
  service: 'dog-walking',
  startTime: '10:15 AM',
  status: 'in_progress',
  durationMinutes: 28,
  distanceKm: 1.85,
  peeCount: 3,
  pooCount: 1,
  waterGiven: true,
  routePoints: [
    { x: 20, y: 80, label: 'Inicio: Portal' },
    { x: 35, y: 65, label: 'Pausa olfativa' },
    { x: 50, y: 40, label: '💧 Pis #1' },
    { x: 68, y: 30, label: 'Parque de los Pinos' },
    { x: 80, y: 48, label: '💩 Caca recogida' },
    { x: 60, y: 70, label: '🥣 Hidratación' },
    { x: 45, y: 85, label: 'Camino de regreso' }
  ],
  events: [
    { time: '10:15', type: 'photo', label: 'Inicio del paseo', note: '¡Lucas salió súper entusiasmado!' },
    { time: '10:22', type: 'pee', label: 'Hizo pis en el césped' },
    { time: '10:31', type: 'poo', label: 'Hizo caca (recogida y bolsa desechada)' },
    { time: '10:38', type: 'water', label: 'Bebió abundante agua fresca' },
    { time: '10:41', type: 'photo', label: 'Jugando con la pelota en la sombra', imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80' }
  ],
  photos: [
    'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80'
  ],
  sitterNote: 'Lucas tiene una energía increíble hoy. Ya ha tomado su agua y ha socializado con una perrita Beagle muy tranquila. Estamos regresando despacito.'
};
