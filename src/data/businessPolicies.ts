export interface BusinessInformation {
  brandName: string;
  companyName: string;
  koreanName: string;
  legalEntity: string;
  representative: string;
  representativeKorean: string;
  businessRegistrationNumber: string;
  tourismLicenseNumber: string;
  telecomSalesNumber: string;
  mailOrderRegistrationNumber: string;
  headquartersAddress: string;
  koreanAddress: string;
  englishAddress: string;
  phone: string;
  conciergePhone: string;
  conciergeWhatsApp: string;
  inquiryEmail: string;
  email: string;
  website: string;
  operatingHours: string;
}

export interface PolicySection {
  id: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  summary: string;
  rules: {
    heading: string;
    description: string;
    bullets?: string[];
  }[];
}

export interface BusinessPoliciesData {
  businessInformation: BusinessInformation;
  cancellationPolicy: PolicySection;
  refundPolicy: PolicySection;
  privacyPolicy: PolicySection;
  termsAndConditions: PolicySection;
}

export const BUSINESS_INFORMATION: BusinessInformation = {
  brandName: 'NORI TOUR (주식회사 노리투어)',
  companyName: 'NORI TOUR Co., Ltd.',
  koreanName: '주식회사 노리투어',
  legalEntity: 'NORI TOUR Co., Ltd. (주식회사 노리투어)',
  representative: 'Lucy',
  representativeKorean: 'Lucy',
  businessRegistrationNumber: '117-81-56534',
  tourismLicenseNumber: '2019-82',
  telecomSalesNumber: '2019-Seoul Gangnam-05371',
  mailOrderRegistrationNumber: '2019-Seoul Gangnam-05371',
  headquartersAddress: '서울특별시 강남구 역삼로 215, 2층 E21호 (남국빌딩)',
  koreanAddress: '서울특별시 강남구 역삼로 215, 2층 E21호 (남국빌딩)',
  englishAddress: 'Room E21, 2F, 215 Yeoksam-ro, Gangnam-gu, Seoul, Republic of Korea',
  phone: '+82 10-5410-1387',
  conciergePhone: '+82 10-5410-1387',
  conciergeWhatsApp: '+82 10-5410-1387',
  inquiryEmail: 'noritour1@naver.com',
  email: 'noritour1@naver.com',
  website: 'https://www.noritour.com',
  operatingHours: 'Mon - Sat: 09:00 - 19:00 KST (24/7 on-call concierge for active traveling guests)'
};

export const CANCELLATION_POLICY: PolicySection = {
  id: 'cancellation',
  title: 'Cancellation & Rescheduling Policy',
  subtitle: 'Transparent, guest-first policies designed for international travel flexibility.',
  lastUpdated: 'October 2024',
  summary: 'We understand that international flights and travel plans change. We offer full refunds up to 72 hours before your scheduled appointment.',
  rules: [
    {
      heading: 'Standard Cancellation Tiers',
      description: 'Cancellations must be communicated in writing via WhatsApp concierge (+82 10-5410-1387) or official email (noritour1@naver.com).',
      bullets: [
        'Up to 72 hours prior to scheduled start: 100% full refund with zero cancellation penalty.',
        'Between 72 hours and 24 hours prior to scheduled start: 50% refund (compensating dedicated partner hospital / atelier reserve blocks).',
        'Less than 24 hours or no-show: Non-refundable, as clinical suites, translators, and private stylists are confirmed and locked.'
      ]
    },
    {
      heading: 'Flexible Rescheduling',
      description: 'You may request to reschedule your experience date or time without penalty up to 48 hours in advance, subject to clinic and guide availability in Seoul.'
    },
    {
      heading: 'Severe Weather & Flight Delays',
      description: 'In the event of verified flight cancellations, typhoons, or medical emergencies with documentation, NORI TOUR Co., Ltd. will issue a full credit or refund regardless of timing.'
    }
  ]
};

export const REFUND_POLICY: PolicySection = {
  id: 'refund',
  title: 'Refund Policy & Processing',
  subtitle: 'How and when payments are credited back to your account.',
  lastUpdated: 'October 2024',
  summary: 'All approved refunds are handled through the original payment channel with no hidden processing deductions from NORI TOUR Co., Ltd.',
  rules: [
    {
      heading: 'Refund Method & Currency',
      description: 'Approved refunds will be credited directly back to the original card or payment method used during checkout (via Toss Payments or international credit card networks). All calculations reflect the exact original transaction value.'
    },
    {
      heading: 'Processing Timeline',
      description: 'Once a cancellation is confirmed by our concierge team (noritour1@naver.com, +82 10-5410-1387), the refund is initiated within 24 hours. Depending on your home country bank and card network (Visa, Mastercard, Amex), funds typically appear in your account within 3 to 7 business days.'
    },
    {
      heading: 'Unused Partial Services',
      description: 'If a guest chooses to skip or abbreviate an activity during an active tour (e.g. opting out of a shopping stop), partial refunds cannot be granted once the scheduled day has commenced.'
    }
  ]
};

export const PRIVACY_POLICY: PolicySection = {
  id: 'privacy',
  title: 'Privacy & Skin Data Protection Policy',
  subtitle: 'Respecting your personal identity and sensitive skin health information.',
  lastUpdated: 'October 2024',
  summary: 'NORI TOUR Co., Ltd. (주식회사 노리투어) adheres to the Republic of Korea Personal Information Protection Act (PIPA) and international privacy principles for all travelers.',
  rules: [
    {
      heading: 'Information We Collect',
      description: 'To deliver safe, personalized K-beauty curation, we collect:',
      bullets: [
        'Identity & Contact: Full name, country, email address, and WhatsApp/phone contact number.',
        'Customer Beauty Profile: Skin concerns, current skincare routine, known cosmetic allergies, and personal color preferences.',
        'Travel Information: Flight arrival dates, hotel stay location in Seoul, and booking party size.',
        'Visual Consent: Optional guest reflections or photos only when explicit consent is provided.'
      ]
    },
    {
      heading: 'How Your Data Is Used',
      description: 'Your beauty profile is accessed exclusively by your assigned bilingual concierge and licensed clinic coordinators to prevent cosmetic ingredient cross-reactions and tailor customized formulas.'
    },
    {
      heading: 'Data Security, Retention & Officer',
      description: 'We do not sell, rent, or monetize personal or health data. Traveler information is retained only as long as necessary to complete your travel itinerary and fulfill Korean tax and tourism licensing regulations. Privacy inquiries can be addressed to our representative director Lucy at noritour1@naver.com.'
    }
  ]
};

export const TERMS_AND_CONDITIONS: PolicySection = {
  id: 'terms',
  title: 'Terms of Service & Guest Disclosures',
  subtitle: 'Important guidelines for participants of NORI TOUR curated experiences.',
  lastUpdated: 'October 2024',
  summary: 'By booking an experience through NORI TOUR Co., Ltd. (주식회사 노리투어), you agree to these transparent terms of hospitality and cultural guidance.',
  rules: [
    {
      heading: 'Non-Medical Hospitality Scope',
      description: 'NORI TOUR Co., Ltd. (Tourism Business Registration: 2019-82) provides cultural curation, lifestyle scheduling, linguistic translation, and concierge assistance. NORI TOUR is not a medical clinic or licensed medical facility. All cosmetic dermatological consultations and aesthetic treatments are conducted independently by licensed Korean medical personnel at accredited clinics.'
    },
    {
      heading: 'Informed Consent & Medical History',
      description: 'Guests are responsible for disclosing all relevant allergies, medication histories, retinoid/Accutane use, and skin sensitivities during the beauty profile intake so aesthetic partners can adapt treatments safely.'
    },
    {
      heading: 'Punctuality & Atelier Etiquette',
      description: 'Korean aesthetic ateliers and private Hanok spas operate on strict appointment schedules. Please arrive 10 minutes prior to the designated meeting time to ensure the full duration of your curated ritual.'
    },
    {
      heading: 'Pricing Transparency & No Unsolicited Upselling',
      description: 'NORI TOUR Co., Ltd. guarantees that all quoted prices include specified curation and accompaniment. We enforce a zero-high-pressure-sales policy with all of our partner aesthetic clinics.'
    }
  ]
};

export const BUSINESS_POLICIES: BusinessPoliciesData = {
  businessInformation: BUSINESS_INFORMATION,
  cancellationPolicy: CANCELLATION_POLICY,
  refundPolicy: REFUND_POLICY,
  privacyPolicy: PRIVACY_POLICY,
  termsAndConditions: TERMS_AND_CONDITIONS
};
