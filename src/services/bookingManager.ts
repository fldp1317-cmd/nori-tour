import { BookingRecord, BookingStatus, CustomerBeautyProfile, Tour } from '../types';

const STORAGE_KEY = 'nori_tour_bookings_v1';

const INITIAL_DEMO_BOOKINGS: BookingRecord[] = [
  {
    id: 'rec-001',
    orderId: 'NORI-GLOW-7892',
    tourId: 'cheongdam-glass-skin',
    tourTitle: 'Cheongdam Glass Skin & Clinical Facial Ritual',
    date: '2026-10-12',
    guests: 2,
    priceUsd: 780,
    priceKrw: 1053000,
    status: 'Confirmed',
    createdAt: '2026-09-18T14:20:00Z',
    paymentMethod: 'TOSS_PAY',
    customerProfile: {
      focusCategory: 'skincare',
      skinConcerns: ['Dehydration / Dullness', 'Barrier Sensitivity'],
      currentSkincareRoutine: 'Gentle cleansing foam, hyaluronic acid serum, ceramide cream, daily SPF50+.',
      allergiesOrSensitivity: 'Sensitive to synthetic fragrances and high-percentage glycolic acid.',
      beautyInterests: ['Glass Skin Deep Hydration', 'Barrier Repair & Soothing'],
      makeupInterests: ['Natural Glow Skin Finish'],
      personalColorInterest: 'Muted Summer Cool',
      budget: '$500 - $1,000 USD',
      preferredExperience: 'Cheongdam Glass Skin & Clinical Facial Ritual',
      fullName: 'Genevieve Vance',
      whatsapp: '+1 (415) 882-9104',
      email: 'genevieve.vance@example.com',
      country: 'United States',
      specialRequests: 'Would appreciate quiet, gentle consultation and bilingual translation.'
    }
  },
  {
    id: 'rec-002',
    orderId: 'NORI-COLOR-4318',
    tourId: 'personal-color-kbeauty-styling',
    tourTitle: 'Personal Color Harmony & K-Beauty Stylist Studio',
    date: '2026-10-18',
    guests: 1,
    priceUsd: 280,
    priceKrw: 378000,
    status: 'Paid',
    createdAt: '2026-09-20T09:12:00Z',
    paymentMethod: 'CARD',
    paymentReference: 'toss_pay_20260920_98214',
    customerProfile: {
      focusCategory: 'makeup',
      skinConcerns: ['Uneven Tone & Fatigue'],
      currentSkincareRoutine: 'Oil cleanser, vitamin C serum, lightweight water gel cream.',
      allergiesOrSensitivity: 'None known.',
      beautyInterests: ['Personal Color & Makeup Palette', 'Bespoke Fragrance'],
      makeupInterests: ['K-Beauty Lip Tint Matching', 'Airbrush Cushion Foundation'],
      personalColorInterest: 'High interest - looking to discover accurate seasonal palette',
      budget: '$200 - $500 USD',
      preferredExperience: 'Personal Color Harmony & K-Beauty Stylist Studio',
      fullName: 'Aaliyah Robinson',
      whatsapp: '+44 7700 900142',
      email: 'aaliyah.robinson@example.co.uk',
      country: 'United Kingdom',
      specialRequests: 'Interested in finding lip shades suitable for olive undertones.'
    }
  },
  {
    id: 'rec-003',
    orderId: 'NORI-VIP-9912',
    tourId: 'private-vip-cheongdam-dermatology-concierge',
    tourTitle: 'Private VIP Cheongdam Dermatology & Luxury Shopping Concierge',
    date: '2026-11-02',
    guests: 2,
    priceUsd: 1400,
    priceKrw: 1890000,
    status: 'Pending',
    createdAt: '2026-09-22T04:10:00Z',
    customerProfile: {
      focusCategory: 'both',
      skinConcerns: ['Fine Lines & Elasticity', 'Pore Refinement & Texture'],
      currentSkincareRoutine: 'Double cleansing, retinal night treatment, copper peptide essence.',
      allergiesOrSensitivity: 'Mild histamine response to topical propolis.',
      beautyInterests: ['Anti-Aging & Collagen Lifting', 'Luxury Scalp Restoration'],
      makeupInterests: ['Dewy Base Techniques', 'Neutral Contour'],
      personalColorInterest: 'Autumn Warm',
      budget: '$1,000+ USD',
      preferredExperience: 'Private VIP Cheongdam Dermatology & Luxury Shopping Concierge',
      fullName: 'Charlotte Lin',
      whatsapp: '+65 9123 4567',
      email: 'charlotte.lin@example.sg',
      country: 'Singapore',
      specialRequests: 'Requires private Genesis chauffeur pickup from Four Seasons Seoul.'
    }
  },
  {
    id: 'rec-004',
    orderId: 'NORI-HEAD-2201',
    tourId: 'bukchon-hanok-head-spa-tea',
    tourTitle: 'Bukchon Hanok Herbal Head Spa & Mindful Tea Ceremony',
    date: '2026-09-14',
    guests: 2,
    priceUsd: 580,
    priceKrw: 783000,
    status: 'Completed',
    createdAt: '2026-09-01T11:00:00Z',
    paymentMethod: 'CARD',
    customerProfile: {
      focusCategory: 'skincare',
      skinConcerns: ['Scalp Sensitivity', 'Fatigue'],
      currentSkincareRoutine: 'Gentle micellar water, mugwort essence, squalane oil.',
      allergiesOrSensitivity: 'None.',
      beautyInterests: ['Traditional Hanbang Herbal Detox', 'Luxury Scalp Restoration'],
      makeupInterests: [],
      personalColorInterest: 'Not sure',
      budget: '$500 - $1,000 USD',
      preferredExperience: 'Bukchon Hanok Herbal Head Spa & Mindful Tea Ceremony',
      fullName: 'Isabelle Dubois',
      whatsapp: '+33 6 12 34 56 78',
      email: 'isabelle.dubois@example.fr',
      country: 'France'
    }
  },
  {
    id: 'rec-005',
    orderId: 'NORI-CAN-1190',
    tourId: '2hr-kbeauty-skincare-shopping-seoul',
    tourTitle: '2-Hour Essential K-Beauty Skincare & Shopping Consultation',
    date: '2026-09-10',
    guests: 1,
    priceUsd: 180,
    priceKrw: 243000,
    status: 'Cancelled',
    createdAt: '2026-09-03T16:45:00Z',
    customerProfile: {
      focusCategory: 'skincare',
      skinConcerns: ['Acne & Post-Blemish Marks'],
      currentSkincareRoutine: 'Salicylic acid cleanser, niacinamide 10%, lightweight lotion.',
      allergiesOrSensitivity: 'Tea tree essential oil.',
      beautyInterests: ['Pore Refinement & Acne Care'],
      makeupInterests: [],
      personalColorInterest: 'None',
      budget: 'Under $200 USD',
      preferredExperience: '2-Hour Essential K-Beauty Skincare & Shopping Consultation',
      fullName: 'Lucas Meyer',
      whatsapp: '+49 170 1234567',
      email: 'lucas.meyer@example.de',
      country: 'Germany',
      specialRequests: 'Flight schedule changed, cancelled with 100% refund.'
    }
  }
];

export const getStoredBookings = (): BookingRecord[] => {
  if (typeof window === 'undefined') return INITIAL_DEMO_BOOKINGS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DEMO_BOOKINGS));
      return INITIAL_DEMO_BOOKINGS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_DEMO_BOOKINGS;
  }
};

export const saveBookingRecord = (
  tour: Tour,
  customerProfile: CustomerBeautyProfile,
  date: string,
  guests: number,
  priceUsd: number,
  priceKrw: number,
  orderId: string,
  status: BookingStatus = 'Pending',
  paymentMethod?: string
): BookingRecord => {
  const newRecord: BookingRecord = {
    id: 'rec-' + Date.now(),
    orderId,
    tourId: tour.id,
    tourTitle: tour.title,
    date,
    guests,
    priceUsd,
    priceKrw,
    status,
    createdAt: new Date().toISOString(),
    customerProfile,
    paymentMethod
  };

  if (typeof window !== 'undefined') {
    try {
      const existing = getStoredBookings();
      const updated = [newRecord, ...existing.filter(b => b.orderId !== orderId)];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // fallback
    }
  }
// Send booking to Netlify Forms
if (typeof window !== 'undefined') {
  const params = new URLSearchParams();

  params.append('form-name', 'nori-booking');
  params.append('orderId', newRecord.orderId || '');
  params.append('tourTitle', newRecord.tourTitle || '');
  params.append('date', newRecord.date || '');
  params.append('guests', String(newRecord.guests || ''));
  params.append('priceUsd', String(newRecord.priceUsd || ''));
  params.append('priceKrw', String(newRecord.priceKrw || ''));
  params.append('status', newRecord.status || '');
  params.append('paymentMethod', newRecord.paymentMethod || '');

  params.append('fullName', newRecord.customerProfile?.fullName || '');
  params.append('whatsapp', newRecord.customerProfile?.whatsapp || '');
  params.append('email', newRecord.customerProfile?.email || '');
  params.append('country', newRecord.customerProfile?.country || '');

  params.append('focusCategory', newRecord.customerProfile?.focusCategory || '');
  params.append(
    'skinConcerns',
    (newRecord.customerProfile?.skinConcerns || []).join(', ')
  );
  params.append(
    'currentSkincareRoutine',
    newRecord.customerProfile?.currentSkincareRoutine || ''
  );
  params.append(
    'allergiesOrSensitivity',
    newRecord.customerProfile?.allergiesOrSensitivity || ''
  );
  params.append(
    'beautyInterests',
    (newRecord.customerProfile?.beautyInterests || []).join(', ')
  );
  params.append(
    'makeupInterests',
    (newRecord.customerProfile?.makeupInterests || []).join(', ')
  );
  params.append(
    'personalColorInterest',
    newRecord.customerProfile?.personalColorInterest || ''
  );
  params.append('budget', newRecord.customerProfile?.budget || '');
  params.append(
    'specialRequests',
    newRecord.customerProfile?.specialRequests || ''
  );

  fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  }).catch((error) => {
    console.error('Netlify booking submission failed:', error);
  });
}
  return newRecord;
};

export const findBooking = (query: string): BookingRecord | undefined => {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return undefined;
  const list = getStoredBookings();
  return list.find(b => 
    b.orderId.toLowerCase() === trimmed ||
    b.customerProfile.email.toLowerCase() === trimmed ||
    b.customerProfile.whatsapp.toLowerCase() === trimmed
  );
};

export const updateBookingStatus = (orderId: string, status: BookingStatus): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const existing = getStoredBookings();
    const index = existing.findIndex(b => b.orderId === orderId);
    if (index === -1) return false;
    existing[index].status = status;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    return true;
  } catch {
    return false;
  }
};
