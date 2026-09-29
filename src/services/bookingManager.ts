import { BookingRecord, BookingStatus, CustomerBeautyProfile, Tour, TripInquiryData } from '../types';

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

export const submitTripInquiry = async (inquiry: TripInquiryData): Promise<BookingRecord> => {
  const orderId = `NORI-TRIP-${Math.floor(100000 + Math.random() * 900000)}`;
  const customerName = `${inquiry.firstName.trim()} ${inquiry.lastName.trim()}`.trim();
  const formattedWhatsapp = inquiry.whatsappNumber.trim()
    ? `${inquiry.whatsappCountryCode.trim()} ${inquiry.whatsappNumber.trim()}`.trim()
    : '';

  const travelDatesSummary = inquiry.datesFlexible
    ? `${inquiry.arrivalDate || 'Not specified'} to ${inquiry.departureDate || 'Not specified'} (Flexible / Not Confirmed Yet)`
    : `${inquiry.arrivalDate || 'Not specified'} to ${inquiry.departureDate || 'Not specified'}`;

  // Descriptive Airport Pickup & Drop-off values (e.g. "Incheon", "Gimpo", "Incheon, Gimpo", or "No")
  const pickupAirports: string[] = [];
  if (inquiry.travelSupportAirport.includes('Incheon Airport pickup')) pickupAirports.push('Incheon');
  if (inquiry.travelSupportAirport.includes('Gimpo Airport pickup')) pickupAirports.push('Gimpo');
  const airportPickupValue = pickupAirports.length > 0 ? pickupAirports.join(', ') : 'No';

  const dropoffAirports: string[] = [];
  if (inquiry.travelSupportAirport.includes('Incheon Airport drop-off')) dropoffAirports.push('Incheon');
  if (inquiry.travelSupportAirport.includes('Gimpo Airport drop-off')) dropoffAirports.push('Gimpo');
  const airportDropoffValue = dropoffAirports.length > 0 ? dropoffAirports.join(', ') : 'No';

  const allTravelSupport = [
    ...inquiry.travelSupportAirport,
    ...inquiry.travelSupportGettingAround,
    ...inquiry.travelSupportStayPlanning,
    ...(inquiry.travelSupportBeautyOnly
      ? ["I don't need travel support — I'm only interested in beauty experiences."]
      : []),
  ];

  // Separate Skincare vs Shopping selections clearly for NORI team
  const skincareItems = inquiry.beautySkincareShopping.filter((item) =>
    ['Personalized skincare guidance', 'Skincare routine guidance'].includes(item)
  );
  const shoppingItems = inquiry.beautySkincareShopping.filter((item) =>
    [
      'K-beauty shopping',
      'Olive Young shopping',
      'Korean pharmacy beauty',
      'Beauty flagship stores',
    ].includes(item)
  );
  const personalColorSelected = inquiry.beautyColorMakeup.includes('Personal color analysis');
  const makeupItems = inquiry.beautyColorMakeup.filter((item) => item !== 'Personal color analysis');
  const hairItems = inquiry.beautyHairWellness.filter((item) =>
    ['Korean hair salon', 'Hair styling', 'Scalp care / head spa'].includes(item)
  );
  const wellnessItems = inquiry.beautyHairWellness.filter((item) =>
    ['Scalp care / head spa', 'Korean spa / wellness experience'].includes(item)
  );
  const dermatologyAestheticItems = inquiry.beautyAestheticCare.filter((item) =>
    [
      'Dermatology consultation',
      'Skin treatments',
      'Lifting / anti-aging treatments',
    ].includes(item)
  );
  const plasticSurgerySelected = inquiry.beautyAestheticCare.includes(
    'Plastic surgery consultation'
  );
  const interpretationSelected = inquiry.beautyAestheticCare.includes(
    'Beauty clinic interpretation support'
  );

  const allBeautySelections = [
    ...inquiry.beautySkincareShopping,
    ...inquiry.beautyColorMakeup,
    ...inquiry.beautyHairWellness,
    ...inquiry.beautyAestheticCare,
    ...(inquiry.beautyNotSureRecommend
      ? ["I'm not sure — I'd like NORI to recommend options."]
      : []),
  ];

  // Logical Group Summaries for immediate readability by the NORI team
  const resolvedPreferredLanguage =
    inquiry.preferredLanguage === 'Other' && inquiry.preferredLanguageOther?.trim()
      ? `Other (${inquiry.preferredLanguageOther.trim()})`
      : inquiry.preferredLanguage;

  const travelerGroupSummary = [
    `Name: ${customerName}`,
    `Country / Region: ${inquiry.countryRegion.trim() || 'Not specified'}`,
    `Preferred Language: ${resolvedPreferredLanguage}`,
  ].join(' | ');

  const tripDetailsGroupSummary = [
    `Origin: ${inquiry.countryRegion.trim() || 'Not specified'}`,
    `Arrival: ${inquiry.arrivalDate || 'Not specified'}`,
    `Departure: ${inquiry.departureDate || 'Not specified'}`,
    `Flexible Dates: ${inquiry.datesFlexible ? 'Yes' : 'No'}`,
    `Number of Travelers: ${inquiry.numberOfTravelers}`,
    `Travel Party: ${inquiry.travelCompanions.length > 0 ? inquiry.travelCompanions.join(', ') : 'Not specified'}`,
  ].join(' | ');

  const travelSupportGroupSummary = inquiry.travelSupportBeautyOnly
    ? "Only interested in beauty experiences (No travel support requested)"
    : allTravelSupport.length > 0
    ? allTravelSupport.join(', ')
    : 'None selected';

  const beautyInterestsGroupSummary =
    allBeautySelections.length > 0 ? allBeautySelections.join(', ') : 'None selected';

  const preferencesGroupSummary = [
    `Matters Most: ${inquiry.preferencesMattersMost.length > 0 ? inquiry.preferencesMattersMost.join(', ') : 'Not specified'}`,
    `Approximate Budget (NORI services): ${inquiry.approximateBudget || 'Not specified'}`,
    `Notes: ${inquiry.freeTextRequest.trim() || 'None'}`,
  ].join(' | ');

  const contactGroupSummary = [
    `Name: ${customerName}`,
    `Email: ${inquiry.email.trim()}`,
    `Preferred Contact: ${inquiry.preferredContactMethod}`,
    `WhatsApp: ${formattedWhatsapp || 'Not provided'}`,
    `Language: ${resolvedPreferredLanguage}`,
    `Instagram / Social: ${inquiry.instagramHandle.trim() || 'Not provided'}`,
  ].join(' | ');

  const consentSummary = inquiry.quoteRequestConsent
    ? 'Yes — Customer understands this is a personalized quote request and not an instant booking'
    : 'No';

  const customerProfile: CustomerBeautyProfile = {
    focusCategory: 'both',
    skinConcerns: inquiry.preferencesMattersMost,
    currentSkincareRoutine: travelSupportGroupSummary,
    allergiesOrSensitivity: '',
    beautyInterests: allBeautySelections,
    makeupInterests: inquiry.beautyColorMakeup,
    personalColorInterest: personalColorSelected ? 'Yes' : 'No',
    budget: inquiry.approximateBudget || "I'm not sure yet",
    preferredExperience: 'Personalized Korea Trip Request',
    fullName: customerName,
    whatsapp: formattedWhatsapp,
    email: inquiry.email.trim(),
    country: inquiry.countryRegion.trim(),
    specialRequests: inquiry.freeTextRequest.trim(),
  };

  const newRecord: BookingRecord = {
    id: 'inq-' + Date.now(),
    orderId,
    tourId: 'personalized-trip-inquiry',
    tourTitle: 'Personalized Korea Trip & Beauty Plan Request',
    date: travelDatesSummary,
    guests: inquiry.numberOfTravelers,
    priceUsd: 0,
    priceKrw: 0,
    status: 'Pending',
    createdAt: new Date().toISOString(),
    customerProfile,
    inquiryDetails: inquiry,
  };

  if (typeof window !== 'undefined') {
    const params = new URLSearchParams();
    params.append('form-name', 'nori-booking');

    // 1. Logical Group Summaries
    params.append('Inquiry_Reference', orderId);
    params.append('TRAVELER', travelerGroupSummary);
    params.append('TRIP_DETAILS', tripDetailsGroupSummary);
    params.append('TRAVEL_SUPPORT', travelSupportGroupSummary);
    params.append('BEAUTY_INTERESTS', beautyInterestsGroupSummary);
    params.append('PREFERENCES', preferencesGroupSummary);
    params.append('CONTACT', contactGroupSummary);
    params.append('CONSENT', consentSummary);

    // 2. CUSTOMER / CONTACT
    params.append('First_Name', inquiry.firstName.trim());
    params.append('Last_Name', inquiry.lastName.trim() || 'Not provided');
    params.append('Email', inquiry.email.trim());
    params.append('WhatsApp_Number', formattedWhatsapp || 'Not provided');
    params.append('Preferred_Contact_Method', inquiry.preferredContactMethod);
    params.append('Preferred_Language', resolvedPreferredLanguage);
    params.append('Instagram_or_Social_Handle', inquiry.instagramHandle.trim() || 'Not provided');

    // 3. TRIP DETAILS
    params.append('Country_or_Region', inquiry.countryRegion.trim() || 'Not specified');
    params.append('Arrival_Date', inquiry.arrivalDate || 'Not specified');
    params.append('Departure_Date', inquiry.departureDate || 'Not specified');
    params.append('Flexible_Dates_Status', inquiry.datesFlexible ? 'Yes (Flexible / Not confirmed yet)' : 'No');
    params.append('Number_of_Travelers', String(inquiry.numberOfTravelers));
    params.append(
      'Travel_Party_Type',
      inquiry.travelCompanions.length > 0 ? inquiry.travelCompanions.join(', ') : 'Not specified'
    );

    // 4. TRAVEL SUPPORT (Descriptive values)
    params.append(
      'Airport_Transfer_Selections',
      inquiry.travelSupportAirport.length > 0 ? inquiry.travelSupportAirport.join(', ') : 'None'
    );
    params.append('Airport_Pickup', airportPickupValue);
    params.append('Airport_Drop_Off', airportDropoffValue);
    params.append(
      'Private_Vehicle_and_Driver',
      inquiry.travelSupportGettingAround.includes('Private vehicle & driver') ? 'Yes' : 'No'
    );
    params.append(
      'Driving_Guide',
      inquiry.travelSupportGettingAround.includes('Driving guide') ? 'Yes' : 'No'
    );
    params.append(
      'Private_Guide',
      inquiry.travelSupportGettingAround.includes('Private English-speaking guide') ? 'Yes' : 'No'
    );
    params.append(
      'Transportation_Requests',
      inquiry.travelSupportGettingAround.includes('Transportation between activities')
        ? 'Yes (Transportation between activities)'
        : 'No'
    );
    const hotelSelections = inquiry.travelSupportStayPlanning.filter((item) =>
      ['Hotel recommendations', 'Hotel booking assistance'].includes(item)
    );
    params.append(
      'Hotel_Assistance',
      hotelSelections.length > 0 ? hotelSelections.join(', ') : 'No'
    );
    params.append(
      'Itinerary_Planning',
      inquiry.travelSupportStayPlanning.includes('Personalized itinerary planning') ? 'Yes' : 'No'
    );
    params.append(
      'Restaurant_Support',
      inquiry.travelSupportStayPlanning.includes('Restaurant recommendations / reservations')
        ? 'Yes'
        : 'No'
    );
    params.append(
      'Activity_and_Experience_Support',
      inquiry.travelSupportStayPlanning.includes('Local activities / experience reservations')
        ? 'Yes'
        : 'No'
    );
    params.append(
      'Only_Interested_in_Beauty_Experiences',
      inquiry.travelSupportBeautyOnly ? 'Yes' : 'No'
    );

    // 5. BEAUTY (Descriptive values)
    params.append(
      'Skincare_Selections',
      skincareItems.length > 0 ? skincareItems.join(', ') : 'None'
    );
    params.append(
      'Shopping_Selections',
      shoppingItems.length > 0 ? shoppingItems.join(', ') : 'None'
    );
    params.append('K_Beauty_Shopping', shoppingItems.length > 0 ? 'Yes' : 'No');
    params.append('Personal_Color', personalColorSelected ? 'Yes' : 'No');
    params.append(
      'Personal_Color_Selections',
      personalColorSelected ? 'Personal color analysis' : 'None'
    );
    params.append(
      'Makeup_Selections',
      makeupItems.length > 0 ? makeupItems.join(', ') : 'None'
    );
    params.append('Hair_Selections', hairItems.length > 0 ? hairItems.join(', ') : 'None');
    params.append(
      'Wellness_Selections',
      wellnessItems.length > 0 ? wellnessItems.join(', ') : 'None'
    );
    params.append(
      'Dermatology_and_Aesthetic_Selections',
      dermatologyAestheticItems.length > 0 ? dermatologyAestheticItems.join(', ') : 'None'
    );
    params.append('Plastic_Surgery_Consultation', plasticSurgerySelected ? 'Yes' : 'No');
    params.append('Interpretation_Support', interpretationSelected ? 'Yes' : 'No');
    params.append(
      'Not_Sure_Recommend_Options',
      inquiry.beautyNotSureRecommend ? 'Yes (Please recommend options)' : 'No'
    );

    // 6. PREFERENCES & CONSENT
    params.append(
      'Travel_Interests',
      inquiry.preferencesMattersMost.length > 0
        ? inquiry.preferencesMattersMost.join(', ')
        : 'Not specified'
    );
    params.append('Approximate_Budget', inquiry.approximateBudget || 'Not specified');
    params.append('Free_Text_Request', inquiry.freeTextRequest.trim() || 'None');
    params.append('Quote_Request_Acknowledgement', consentSummary);

    // 7. Legacy compatibility fields
    params.append('orderId', orderId);
    params.append('tourTitle', 'Personalized Korea Trip & Beauty Plan Request');
    params.append('date', travelDatesSummary);
    params.append('guests', String(inquiry.numberOfTravelers));
    params.append('priceUsd', '0');
    params.append('priceKrw', '0');
    params.append('status', 'Inquiry - Pending Personalized Quote');
    params.append('paymentMethod', 'Pending Personalized Quote');
    params.append('fullName', customerName);
    params.append('whatsapp', formattedWhatsapp);
    params.append('email', inquiry.email.trim());
    params.append('country', inquiry.countryRegion.trim());
    params.append('focusCategory', 'both');
    params.append('skinConcerns', inquiry.preferencesMattersMost.join(', '));
    params.append('currentSkincareRoutine', travelSupportGroupSummary);
    params.append('allergiesOrSensitivity', '');
    params.append('beautyInterests', allBeautySelections.join(', '));
    params.append('makeupInterests', inquiry.beautyColorMakeup.join(', '));
    params.append('personalColorInterest', personalColorSelected ? 'Yes' : 'No');
    params.append('budget', inquiry.approximateBudget || "I'm not sure yet");
    params.append('specialRequests', inquiry.freeTextRequest.trim());

    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    // On Netlify production, POST / returns 200 OK.
    // On local Vite dev server (without Netlify's edge middleware), POST / may return 404.
    // Throw an error if there is a 5xx server failure.
    if (response.status >= 500) {
      throw new Error(`Submission failed with status ${response.status}`);
    }

    try {
      const existing = getStoredBookings();
      const updated = [newRecord, ...existing];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // localStorage fallback
    }
  }

  return newRecord;
};

