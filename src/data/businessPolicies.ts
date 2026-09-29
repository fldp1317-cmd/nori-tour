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
    footerDescription?: string;
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
  representative: 'Seoha Park (Lucy)',
  representativeKorean: 'Seoha Park (Lucy)',
  businessRegistrationNumber: '117-81-56534',
  tourismLicenseNumber: '2019-82',
  telecomSalesNumber: '2019-Seoul Gangnam-05371',
  mailOrderRegistrationNumber: '2019-Seoul Gangnam-05371',
  headquartersAddress: '서울특별시 강남구 역삼로 215, 2층 E21호 (남국빌딩)',
  koreanAddress: '서울특별시 강남구 역삼로 215, 2층 E21호 (남국빌딩)',
  englishAddress: 'Room E21, 2F, 215 Yeoksam-ro, Gangnam-gu, Seoul, Republic of Korea',
  phone: '+82 10-4829-5754',
  conciergePhone: '+82 10-4829-5754',
  conciergeWhatsApp: '+82 10-4829-5754',
  inquiryEmail: 'noritour1@naver.com',
  email: 'noritour1@naver.com',
  website: 'https://www.noritour.com',
  operatingHours: 'Mon - Sat, 09:00 - 19:00 KST'
};

export const CANCELLATION_POLICY: PolicySection = {
  id: 'cancellation',
  title: 'Cancellation & Rescheduling Policy',
  subtitle: 'Transparent policies designed for personalized travel in Korea.',
  lastUpdated: 'September 2026',
  summary:
    'Cancellation and refund conditions depend on the services included in your confirmed itinerary.\n\nWhere NORI TOUR books third-party services on your behalf, such as accommodation, transportation, guides, beauty services, activities, restaurants, or other reservations, the cancellation conditions of those providers may also apply.\n\nAny known non-refundable or cancellation-restricted third-party costs will be communicated before payment or final booking confirmation whenever applicable.',
  rules: [
    {
      heading: 'Standard Cancellation Policy',
      description:
        'Cancellation requests must be submitted in writing through NORI TOUR’s official WhatsApp or email.\n\nFor NORI TOUR’s own guiding, planning, and coordination services:',
      bullets: [
        '72 hours or more before the scheduled start:\nEligible for a full refund of NORI TOUR’s refundable service fees, except for any non-refundable third-party costs that were disclosed to and accepted by the guest before confirmation.',
        'Between 24 and 72 hours before the scheduled start:\nThe refundable amount will be based on the services and reservations that can still be cancelled or recovered.\n\nAny confirmed third-party cancellation charges or non-refundable costs that were disclosed to the guest before confirmation may be deducted.',
        'Less than 24 hours before the scheduled start or no-show:\nSome or all of the booking may be non-refundable where guides, vehicles, accommodation, reservations, activities, or other confirmed services can no longer be cancelled or recovered.'
      ],
      footerDescription:
        'Where mandatory consumer protection rules or applicable Korean travel regulations provide greater rights to the guest, those rules will apply.'
    },
    {
      heading: 'Third-Party Reservations',
      description:
        'Hotels, transportation providers, guides, beauty studios, clinics, restaurants, activities, and other third-party suppliers may have their own cancellation, modification, deposit, and refund conditions.\n\nWhere applicable, NORI TOUR will communicate known non-refundable or cancellation-restricted conditions before the guest makes the relevant payment or confirms the booking.\n\nNORI TOUR will not deduct undisclosed third-party cancellation charges that the guest was not reasonably informed of before confirmation, except where otherwise required or permitted by applicable law.'
    },
    {
      heading: 'Flexible Rescheduling',
      description:
        'Guests may request a change of date or time whenever possible.\n\nNORI TOUR will make reasonable efforts to accommodate rescheduling, subject to guide, vehicle, venue, accommodation, activity, and third-party availability.\n\nIf a third-party provider charges a change, cancellation, or rebooking fee, the guest will be informed before the revised arrangement is confirmed whenever possible.'
    },
    {
      heading: 'Weather, Flight Disruptions & Emergencies',
      description:
        'If a trip is affected by severe weather, major transportation disruption, documented flight cancellation, or another circumstance beyond the guest’s reasonable control, NORI TOUR will first attempt to reschedule, modify, or rearrange the affected services whenever reasonably possible.\n\nIf cancellation is necessary, the refundable amount will be determined based on:',
      bullets: [
        'amounts recoverable from confirmed third-party providers',
        'refundable NORI TOUR service fees',
        'cancellation conditions disclosed before booking',
        'applicable Korean consumer protection requirements'
      ],
      footerDescription:
        'NORI TOUR does not guarantee a full refund regardless of timing where non-refundable third-party costs have already been incurred.'
    }
  ]
};

export const REFUND_POLICY: PolicySection = {
  id: 'refund',
  title: 'Refund Policy & Processing',
  subtitle: 'Approved refunds are returned through the original payment method whenever reasonably possible.',
  lastUpdated: 'September 2026',
  summary: '',
  rules: [
    {
      heading: 'Refund Method',
      description:
        'Approved refunds will normally be returned to the original payment method used for the booking.\n\nNORI TOUR does not charge an additional internal refund processing fee unless a different condition was clearly disclosed before payment.\n\nHowever, currency conversion differences, card issuer charges, international transaction fees, bank fees, or payment-provider charges may be outside NORI TOUR’s control.\n\nBecause of these external factors, the final amount appearing in the guest’s account may differ slightly from the original amount paid.'
    },
    {
      heading: 'Processing Timeline',
      description:
        'Once a refund has been approved, NORI TOUR will initiate the refund as soon as reasonably practicable.\n\nThe time required for the refund to appear in the guest’s account depends on the payment method, payment provider, card network, issuing bank, country, and currency.\n\nNORI TOUR will notify the guest once the refund has been initiated.'
    },
    {
      heading: 'Third-Party Costs',
      description:
        'Where NORI TOUR has made confirmed reservations or payments to accommodation providers, transportation providers, guides, beauty providers, clinics, restaurants, activities, or other third-party suppliers, applicable non-refundable charges may be deducted from the refundable amount.\n\nWhere reasonably possible, these cancellation or non-refundable conditions will be disclosed to and accepted by the guest before the relevant booking is confirmed or payment is made.'
    },
    {
      heading: 'Unused Partial Services',
      description:
        'Once a scheduled service or travel day has begun, voluntary changes, skipped activities, shortened participation, late arrival, or unused portions of the itinerary are generally not eligible for a partial refund.\n\nExceptions may be considered where NORI TOUR is unable to provide a confirmed service or where applicable law requires otherwise.'
    },
    {
      heading: 'Services Not Provided by NORI TOUR',
      description:
        'If NORI TOUR is unable to provide a confirmed NORI TOUR service for reasons within its control, the guest will receive an appropriate refund or alternative arrangement for the affected service, subject to applicable law.'
    },
    {
      heading: 'Refunds Required by Applicable Law',
      description:
        'Nothing in this policy limits or excludes any refund, cancellation, or consumer rights that cannot legally be excluded under applicable Korean law.'
    }
  ]
};

export const PRIVACY_POLICY: PolicySection = {
  id: 'privacy',
  title: 'Privacy & Personal Data Policy',
  subtitle: 'We respect your privacy and collect only the information needed to plan and coordinate your requested NORI TOUR services.',
  lastUpdated: 'September 2026',
  summary: 'NORI TOUR Co., Ltd. processes personal information in accordance with applicable Korean privacy laws, including the Personal Information Protection Act (PIPA).',
  rules: [
    {
      heading: 'Information We Collect',
      description: 'Depending on the services you request, we may collect:',
      bullets: [
        'Identity & Contact: name, country/region, email address, WhatsApp or phone number',
        'Travel Information: travel dates, accommodation area, number of travelers, and requested transportation or itinerary support',
        'Preferences: interests, beauty preferences, travel style, budget range, and other information you choose to provide',
        'Optional Beauty Information: skincare concerns, current routine, product sensitivities, or allergies only when voluntarily provided and relevant to your requested service',
        'Optional Content: photos or other materials only when you choose to provide them'
      ]
    },
    {
      heading: 'How We Use Your Information',
      description: 'We use personal information only as reasonably necessary to:',
      bullets: [
        'respond to inquiries and prepare personalized travel proposals',
        'coordinate requested guides, transportation, accommodation, activities, beauty services, and other reservations',
        'communicate about bookings, changes, payments, and customer support',
        'improve the quality and safety of requested services',
        'comply with applicable legal and regulatory requirements'
      ]
    },
    {
      heading: 'Third-Party Providers',
      description:
        'Where necessary to provide a service you request, limited personal information may be shared with relevant third-party providers such as guides, transportation providers, accommodation providers, activity operators, beauty providers, restaurants, or clinics.\n\nOnly information reasonably necessary for the requested booking or service will be shared.\n\nWhere required, additional notice or consent will be obtained before information is provided.'
    },
    {
      heading: 'Retention & Deletion',
      description:
        'Personal information is retained only for as long as reasonably necessary for the purposes for which it was collected, or for any period required by applicable Korean law.\n\nWhen the information is no longer required, it will be securely deleted or anonymized in accordance with applicable requirements.'
    },
    {
      heading: 'Your Rights',
      description:
        'You may contact NORI TOUR to request access to, correction of, deletion of, or other legally available actions concerning your personal information.'
    },
    {
      heading: 'Privacy Contact',
      description:
        'For privacy-related questions or requests, please contact:\n\nNORI TOUR Co., Ltd.\nEmail: noritour1@naver.com\nWhatsApp: +82 10-4829-5754'
    },
    {
      heading: 'Sensitive Information',
      description:
        'Please avoid sending medical records, detailed health information, or other sensitive information unless it is specifically necessary for a service you have requested.\n\nWhere sensitive information is required, NORI TOUR will handle it in accordance with applicable Korean privacy requirements.'
    }
  ]
};

export const TERMS_AND_CONDITIONS: PolicySection = {
  id: 'terms',
  title: 'Terms of Service & Guest Disclosures',
  subtitle: 'Important information for guests using NORI TOUR’s personalized travel and coordination services in Korea.',
  lastUpdated: 'September 2026',
  summary: 'By confirming and paying for services arranged by NORI TOUR Co., Ltd., you agree to the terms applicable to your confirmed itinerary, quotation, and reservations.',
  rules: [
    {
      heading: 'Scope of NORI TOUR Services',
      description:
        'NORI TOUR Co., Ltd. (Tourism Business Registration No. 2019-82) provides personalized travel planning, guiding and interpretation support, transportation coordination, reservation assistance, and K-beauty and lifestyle experience coordination in Korea.\n\nNORI TOUR is not a hospital, clinic, or medical provider and does not provide medical diagnosis, treatment, or medical advice.\n\nWhere a guest chooses to visit a clinic or other medical provider, medical consultations, treatment decisions, informed consent, and medical care are provided independently by the relevant licensed healthcare provider.'
    },
    {
      heading: 'Health & Medical Information',
      description:
        'Guests should provide medical or health information directly to the relevant healthcare provider whenever such information is required for a medical consultation or treatment.\n\nNORI TOUR does not require detailed medical history unless it is reasonably necessary for a specific requested coordination service and handled in accordance with applicable privacy requirements.'
    },
    {
      heading: 'Appointments & Punctuality',
      description:
        'Guests are responsible for arriving at confirmed appointments and meeting points on time.\n\nLate arrival may shorten an appointment, affect availability, or result in fees imposed by a third-party provider.\n\nNORI TOUR will make reasonable efforts to assist where schedules change, but availability cannot be guaranteed.'
    },
    {
      heading: 'Pricing & Third-Party Services',
      description:
        'NORI TOUR will clearly communicate the price of the services included in each confirmed quotation.\n\nCertain hotels, transportation providers, guides, beauty providers, clinics, restaurants, activities, and other third-party suppliers operate independently and may have their own prices, terms, and policies.\n\nNORI TOUR does not guarantee the pricing, availability, recommendations, or sales practices of independent third-party providers unless expressly stated in the confirmed quotation.'
    },
    {
      heading: 'No Unsolicited Upselling by NORI TOUR',
      description:
        'NORI TOUR will not require guests to purchase additional NORI TOUR products or services in order to use a confirmed service.\n\nNORI TOUR may provide optional suggestions based on a guest’s stated preferences, but the final decision to purchase any additional product, service, treatment, or experience remains entirely with the guest.'
    },
    {
      heading: 'Beauty & Medical Decisions',
      description:
        'Beauty, skincare, and lifestyle guidance provided by NORI TOUR is general informational and coordination support and is not a substitute for professional medical advice.\n\nGuests remain responsible for deciding whether to purchase products, book treatments, or proceed with medical or aesthetic services.'
    },
    {
      heading: 'Service Availability',
      description:
        'Requested guides, vehicles, venues, accommodations, beauty appointments, and other services are subject to availability until final confirmation.\n\nNORI TOUR may suggest reasonable alternatives if a requested service becomes unavailable.'
    },
    {
      heading: 'Cancellation & Refunds',
      description:
        'Cancellation, rescheduling, and refund requests are governed by the separate Cancellation Policy and Refund Policy displayed on this website, together with any third-party conditions disclosed before confirmation.'
    },
    {
      heading: 'Applicable Law',
      description:
        'These terms are subject to applicable laws and mandatory consumer protection requirements in the Republic of Korea.'
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
