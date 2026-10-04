import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  Info,
  Calendar,
  Globe,
  Mail,
  MessageCircle,
  Instagram,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { TripInquiryData, BookingRecord } from '../types';
import { submitTripInquiry } from '../services/bookingManager';
import { PolicyTabId } from '../components/LegalPoliciesModal';
import { NORI_WHATSAPP_URL } from '../components/WhatsAppButton';
import { ScrollReveal } from '../components/ScrollReveal';

interface PlanMyTripPageProps {
  onOpenPoliciesModal: (tab?: PolicyTabId) => void;
  onBackHome: () => void;
}

const STEPS = [
  { num: '01', label: 'YOUR TRIP' },
  { num: '02', label: 'TRAVEL SUPPORT' },
  { num: '03', label: 'BEAUTY' },
  { num: '04', label: 'YOUR PREFERENCES' },
  { num: '05', label: 'CONTACT' },
];

const COMPANION_OPTIONS = ['Solo', 'Partner', 'Friends', 'Family', 'Group', 'Other'];

const AIRPORT_OPTIONS = [
  'Incheon Airport pickup',
  'Incheon Airport drop-off',
  'Gimpo Airport pickup',
  'Gimpo Airport drop-off',
];

const GETTING_AROUND_OPTIONS = [
  'Private vehicle & driver',
  'Driving guide',
  'Private English-speaking guide',
  'Transportation between activities',
];

const STAY_PLANNING_OPTIONS = [
  'Hotel recommendations',
  'Hotel booking assistance',
  'Personalized itinerary planning',
  'Restaurant recommendations / reservations',
  'Local activities / experience reservations',
];

const SKINCARE_SHOPPING_OPTIONS = [
  'Personalized skincare guidance',
  'K-beauty shopping',
  'Olive Young shopping',
  'Korean pharmacy beauty',
  'Beauty flagship stores',
  'Skincare routine guidance',
];

const COLOR_MAKEUP_OPTIONS = [
  'Personal color analysis',
  'Professional makeup experience',
  'Makeup lesson',
  'Makeup shopping',
];

const HAIR_WELLNESS_OPTIONS = [
  'Korean hair salon',
  'Hair styling',
  'Scalp care / head spa',
  'Korean spa / wellness experience',
];

const BEAUTY_AESTHETIC_OPTIONS = [
  'Dermatology consultation',
  'Skin treatments',
  'Lifting / anti-aging treatments',
  'Plastic surgery consultation',
  'Beauty clinic interpretation support',
];

const MATTERS_MOST_OPTIONS = [
  'Beauty & skincare',
  'Local experiences',
  'Food',
  'Culture & history',
  'Shopping',
  'Relaxation & wellness',
  'Photography / content',
  'Hidden local spots',
  'Other',
];

const BUDGET_OPTIONS = [
  'Under USD 500',
  'USD 500–1,000',
  'USD 1,000–2,000',
  'USD 2,000–5,000',
  'USD 5,000+',
  "I'm not sure yet",
];

const LANGUAGE_OPTIONS: Array<'English' | 'Chinese' | 'Other'> = [
  'English',
  'Chinese',
  'Other',
];

const INITIAL_INQUIRY_STATE: TripInquiryData = {
  countryRegion: '',
  arrivalDate: '',
  departureDate: '',
  datesFlexible: false,
  numberOfTravelers: 2,
  travelCompanions: [],

  travelSupportAirport: [],
  travelSupportGettingAround: [],
  travelSupportStayPlanning: [],
  travelSupportBeautyOnly: false,

  beautySkincareShopping: [],
  beautyColorMakeup: [],
  beautyHairWellness: [],
  beautyAestheticCare: [],
  beautyNotSureRecommend: false,

  preferencesMattersMost: [],
  approximateBudget: '',
  freeTextRequest: '',

  firstName: '',
  lastName: '',
  email: '',
  preferredContactMethod: 'WhatsApp',
  whatsappCountryCode: '+1',
  whatsappNumber: '',
  preferredLanguage: 'English',
  preferredLanguageOther: '',
  instagramHandle: '',
  quoteRequestConsent: false,
};

export const PlanMyTripPage: React.FC<PlanMyTripPageProps> = ({
  onOpenPoliciesModal,
  onBackHome,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<TripInquiryData>(INITIAL_INQUIRY_STATE);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [submissionFailed, setSubmissionFailed] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedRecord, setSubmittedRecord] = useState<BookingRecord | null>(null);

  const toggleArrayItem = (list: string[], item: string): string[] => {
    return list.includes(item) ? list.filter((i) => i !== item) : [...list, item];
  };

  const handleToggleCompanion = (companion: string) => {
    setFormData((prev) => ({
      ...prev,
      travelCompanions: toggleArrayItem(prev.travelCompanions, companion),
    }));
  };

  const handleToggleTravelSupport = (
    category: 'travelSupportAirport' | 'travelSupportGettingAround' | 'travelSupportStayPlanning',
    item: string
  ) => {
    setFormData((prev) => {
      const updatedList = toggleArrayItem(prev[category], item);
      return {
        ...prev,
        [category]: updatedList,
        travelSupportBeautyOnly: updatedList.length > 0 ? false : prev.travelSupportBeautyOnly,
      };
    });
  };

  const handleToggleBeautyOnly = () => {
    setFormData((prev) => {
      const nextVal = !prev.travelSupportBeautyOnly;
      return {
        ...prev,
        travelSupportBeautyOnly: nextVal,
        ...(nextVal
          ? {
              travelSupportAirport: [],
              travelSupportGettingAround: [],
              travelSupportStayPlanning: [],
            }
          : {}),
      };
    });
  };

  const handleToggleBeautyCategory = (
    category:
      | 'beautySkincareShopping'
      | 'beautyColorMakeup'
      | 'beautyHairWellness'
      | 'beautyAestheticCare',
    item: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [category]: toggleArrayItem(prev[category], item),
    }));
  };

  const handleToggleMattersMost = (item: string) => {
    setFormData((prev) => ({
      ...prev,
      preferencesMattersMost: toggleArrayItem(prev.preferencesMattersMost, item),
    }));
  };

  const goToStep = (step: number) => {
    if (isSubmitting) return;
    setValidationError(null);
    setSubmissionFailed(false);
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (isSubmitting) return;
    setValidationError(null);
    setSubmissionFailed(false);

    if (currentStep === 1 && (!formData.numberOfTravelers || formData.numberOfTravelers < 1)) {
      setValidationError('Please let us know how many people are traveling (at least 1 traveler).');
      return;
    }

    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (isSubmitting) return;
    setValidationError(null);
    setSubmissionFailed(false);
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setValidationError(null);
    setSubmissionFailed(false);

    if (!formData.numberOfTravelers || formData.numberOfTravelers < 1) {
      setValidationError('Please enter the number of travelers (at least 1).');
      return;
    }

    if (!formData.firstName.trim()) {
      setValidationError('Please enter your first name so we know how to address your plan.');
      return;
    }

    const trimmedEmail = formData.email.trim();
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setValidationError('Please enter a valid email address so we can send your personalized plan.');
      return;
    }

    if (!formData.preferredContactMethod) {
      setValidationError('Please select your preferred contact method.');
      return;
    }

    if (formData.preferredContactMethod === 'WhatsApp') {
      if (!formData.whatsappNumber.trim()) {
        setValidationError(
          'Please enter your WhatsApp number, or switch your preferred contact method to Email.'
        );
        return;
      }
    }

    if (!formData.quoteRequestConsent) {
      setValidationError(
        'Please confirm that you understand this is a personalized quote request and not an instant booking.'
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const record = await submitTripInquiry(formData);
      setSubmittedRecord(record);
      window.scrollTo({ top: 80, behavior: 'smooth' });
    } catch {
      setSubmissionFailed(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderCheckboxCard = (
    label: string,
    checked: boolean,
    onChange: () => void,
    idPrefix: string
  ) => {
    const safeId = `${idPrefix}-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    return (
      <label
        key={label}
        htmlFor={safeId}
        className={`group flex items-start gap-3.5 p-4 rounded-2xl border cursor-pointer transition-all select-none active:scale-[0.99] ${
          checked
            ? 'bg-[#2E2826] border-2 border-[#D9B4B0] text-[#F7F2EC] font-medium shadow-sm'
            : 'bg-[#1C1917] border border-[#3D3634] text-[#E8DFD7] hover:border-[#D9B4B0]/80 hover:bg-[#252120]'
        }`}
      >
        <input
          id={safeId}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <span
          className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
            checked
              ? 'bg-[#D9B4B0] border-[#D9B4B0] text-[#1C1917]'
              : 'bg-[#1C1917] border-[#443E3B] group-hover:border-[#D9B4B0]/80'
          }`}
        >
          {checked && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
        </span>
        <span
          className={`text-xs sm:text-sm leading-snug transition-colors ${
            checked ? 'text-[#F7F2EC] font-medium' : 'text-[#E8DFD7] font-normal group-hover:text-[#F7F2EC]'
          }`}
        >
          {label}
        </span>
      </label>
    );
  };

  // SUCCESS STATE AFTER SUBMISSION
  if (submittedRecord) {
    const formattedWhatsapp = formData.whatsappNumber.trim()
      ? `${formData.whatsappCountryCode.trim()} ${formData.whatsappNumber.trim()}`.trim()
      : '';

    const preferredContactDisplay =
      formData.preferredContactMethod === 'WhatsApp'
        ? `WhatsApp (${formattedWhatsapp})`
        : `Email (${formData.email.trim()})`;

    return (
      <div id="plan-trip-confirmation-page" className="w-full pt-36 sm:pt-32 pb-32 sm:pb-28 px-6 sm:px-8 bg-[#1C1917] text-[#F7F2EC]">
        <div className="max-w-2xl mx-auto bg-[#252120] border border-[#3D3634] rounded-3xl p-8 sm:p-14 shadow-xl text-center space-y-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1C1917] border border-[#3D3634] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D9B4B0]" />
            <span className="text-[11px] uppercase tracking-[0.26em] text-[#E9D2CD] font-semibold">
              REQUEST RECEIVED
            </span>
          </div>

          {/* Heading & Body */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-[#F7F2EC] tracking-tight leading-tight [text-wrap:balance]">
              Your Korea plan starts here ✨
            </h1>

            <div className="space-y-3 text-sm sm:text-base text-[#BFB3AC] font-normal leading-relaxed max-w-xl mx-auto pt-1">
              <p className="text-base sm:text-lg text-[#E8DFD7] font-medium">
                Thanks for telling us what you're looking for.
              </p>
              <p>
                The NORI team will review your trip details and preferences and contact you with a personalized plan and quote.
              </p>
              <p className="text-xs sm:text-sm text-[#BFB3AC] pt-1">
                Your booking is not confirmed until the itinerary, price and payment have been agreed.
              </p>
            </div>
          </div>

          {/* Preferred Contact & Nori Copy */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#1C1917] border border-[#3D3634] space-y-4">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#D9B4B0] font-medium block">
                Preferred contact:
              </span>
              <p className="text-sm sm:text-base font-medium text-[#F7F2EC]">
                {preferredContactDisplay}
              </p>
            </div>

            <div className="pt-3 border-t border-[#3D3634] flex flex-col items-center justify-center gap-3">
              <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10px] uppercase tracking-[0.15em] text-[#BFB3AC]">
                <span className="text-[#F7F2EC] font-semibold">Submit Request</span>
                <span className="text-[#D9B4B0]">→</span>
                <span className="text-[#F7F2EC] font-semibold">NORI Reviews</span>
                <span className="text-[#D9B4B0]">→</span>
                <span>Personalized Plan &amp; Quote</span>
                <span className="text-[#D9B4B0]">→</span>
                <span>Customer Agrees</span>
                <span className="text-[#D9B4B0]">→</span>
                <span>Payment</span>
                <span className="text-[#D9B4B0]">→</span>
                <span>Booking Confirmed</span>
              </div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#252120] border border-[#3D3634] text-xs text-[#E9D2CD] font-medium">
                Nori's on it ✌️
              </span>
            </div>
          </div>

          {/* WhatsApp Support Link */}
          <div className="p-6 rounded-2xl bg-[#2A2321] border border-[#3D3634] space-y-3">
            <p className="text-xs sm:text-sm text-[#E8DFD7] font-normal">
              Have a question while you wait?
            </p>
            <div>
              <a
                href={NORI_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-[#252120] hover:bg-[#2E2826] text-[#F7F2EC] border border-[#3D3634] hover:border-[#D9B4B0] rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all inline-flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>CHAT WITH NORI</span>
              </a>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={onBackHome}
              className="px-8 py-3.5 text-xs uppercase tracking-[0.18em] text-[#BFB3AC] hover:text-[#F7F2EC] font-semibold transition-colors cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="plan-my-trip-page" className="w-full pt-36 sm:pt-32 pb-32 sm:pb-28 bg-[#1C1917] text-[#F7F2EC]">
      {/* Page Intro */}
      <ScrollReveal variant="heading">
        <section className="max-w-3xl mx-auto px-6 sm:px-8 pb-12 text-center space-y-5">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#2A2523] border border-[#3D3634] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D9B4B0]" />
            <span className="text-[11px] uppercase tracking-[0.26em] text-[#E9D2CD] font-semibold">
              PLAN YOUR TRIP
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-sans font-bold text-[#F7F2EC] tracking-tight leading-[1.12] [text-wrap:balance]">
            Tell us what your Korea trip looks like.
          </h1>

          <div className="max-w-xl mx-auto space-y-2 text-sm sm:text-base text-[#BFB3AC] font-normal leading-relaxed [text-wrap:balance]">
            <p>Choose what you need, skip what you don't.</p>
            <p>
              We'll review your request and create a personalized plan and quote for you.
            </p>
          </div>

          <div className="pt-1 space-y-3">
            <p className="text-xs uppercase tracking-[0.18em] text-[#D9B4B0] font-medium">
              No payment is required at this stage.
            </p>
            <div className="lg:-mx-16 xl:-mx-24 flex justify-center">
              <div className="w-full sm:w-auto inline-flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-center justify-center gap-y-1.5 sm:gap-x-2.5 sm:gap-y-2 px-5 py-4 sm:px-5 sm:py-3 rounded-2xl bg-[#252120] border border-[#3D3634] text-[10px] uppercase tracking-[0.13em] text-[#BFB3AC] shadow-md">
                <span className="text-[#F7F2EC] font-bold whitespace-nowrap">
                  SUBMIT REQUEST
                </span>
                <span aria-hidden="true" className="text-[#D9B4B0] leading-none sm:hidden">
                  ↓
                </span>
                <span aria-hidden="true" className="hidden sm:inline text-[#D9B4B0] leading-none">
                  →
                </span>
                <span className="whitespace-nowrap text-[#E8DFD7]">
                  NORI REVIEWS YOUR REQUEST
                </span>
                <span aria-hidden="true" className="text-[#D9B4B0] leading-none sm:hidden">
                  ↓
                </span>
                <span aria-hidden="true" className="hidden sm:inline text-[#D9B4B0] leading-none">
                  →
                </span>
                <span className="whitespace-nowrap text-[#E8DFD7]">
                  PERSONALIZED PLAN &amp; QUOTE
                </span>
                <span aria-hidden="true" className="text-[#D9B4B0] leading-none sm:hidden">
                  ↓
                </span>
                <span aria-hidden="true" className="hidden lg:inline text-[#D9B4B0] leading-none">
                  →
                </span>
                <span aria-hidden="true" className="hidden sm:block lg:hidden basis-full h-0" />
                <span aria-hidden="true" className="hidden sm:inline lg:hidden text-[#D9B4B0] leading-none">
                  →
                </span>
                <span className="whitespace-nowrap text-[#E8DFD7]">
                  YOU CONFIRM
                </span>
                <span aria-hidden="true" className="text-[#D9B4B0] leading-none sm:hidden">
                  ↓
                </span>
                <span aria-hidden="true" className="hidden sm:inline text-[#D9B4B0] leading-none">
                  →
                </span>
                <span className="whitespace-nowrap text-[#E8DFD7]">
                  PAYMENT
                </span>
                <span aria-hidden="true" className="text-[#D9B4B0] leading-none sm:hidden">
                  ↓
                </span>
                <span aria-hidden="true" className="hidden sm:inline text-[#D9B4B0] leading-none">
                  →
                </span>
                <span className="whitespace-nowrap text-[#F7F2EC] font-semibold">
                  BOOKING CONFIRMED
                </span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Multi-Step Progress Bar */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 mb-10">
        <div className="p-3 rounded-2xl bg-[#252120] border border-[#3D3634] shadow-md">
          {/* Mobile Step Navigation */}
          <div className="md:hidden">
            <div className="grid grid-cols-5 gap-1.5">
              {STEPS.map((step, index) => {
                const stepNumber = index + 1;
                const isActive = currentStep === stepNumber;
                const isCompleted = currentStep > stepNumber;

                return (
                  <button
                    key={step.num}
                    type="button"
                    onClick={() => goToStep(stepNumber)}
                    disabled={isSubmitting}
                    aria-label={`Step ${step.num}: ${step.label}`}
                    aria-current={isActive ? 'step' : undefined}
                    className={`py-2.5 rounded-xl text-center transition-all flex items-center justify-center cursor-pointer ${
                      isActive
                        ? 'bg-[#D9B4B0] text-[#1C1917] font-bold shadow-md'
                        : isCompleted
                        ? 'bg-[#2E2826] text-[#E8DFD7] hover:bg-[#342D2B] border border-[#3D3634]'
                        : 'bg-transparent text-[#BFB3AC] hover:bg-[#252120]'
                    }`}
                  >
                    <span
                      className={`text-xs font-serif italic tracking-[0.16em] font-semibold ${
                        isActive ? 'text-[#1C1917]' : isCompleted ? 'text-[#D9B4B0]' : 'text-[#BFB3AC]'
                      }`}
                    >
                      {step.num}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="mt-2.5 pt-2.5 border-t border-[#3D3634] text-center">
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#E9D2CD] font-semibold">
                {STEPS[currentStep - 1]?.label}
              </span>
            </div>
          </div>

          {/* Desktop & Tablet Step Navigation */}
          <div className="hidden md:grid md:grid-cols-5 gap-2">
            {STEPS.map((step, index) => {
              const stepNumber = index + 1;
              const isActive = currentStep === stepNumber;
              const isCompleted = currentStep > stepNumber;

              return (
                <button
                  key={step.num}
                  type="button"
                  onClick={() => goToStep(stepNumber)}
                  disabled={isSubmitting}
                  className={`py-2.5 px-3 rounded-xl text-left transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-[#D9B4B0] text-[#1C1917] font-bold shadow-md'
                      : isCompleted
                      ? 'bg-[#2E2826] text-[#E8DFD7] hover:bg-[#342D2B] border border-[#3D3634]'
                      : 'bg-transparent text-[#BFB3AC] hover:bg-[#252120] hover:text-[#E8DFD7]'
                  }`}
                >
                  <span
                    className={`text-[10px] font-serif italic tracking-[0.18em] font-semibold ${
                      isActive ? 'text-[#1C1917]' : isCompleted ? 'text-[#D9B4B0]' : 'text-[#BFB3AC]'
                    }`}
                  >
                    {step.num}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.12em] font-medium truncate">
                    {step.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Form Container — Clean Deep Charcoal Panel */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <form
          id="nori-trip-inquiry-form"
          name="nori-booking"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          noValidate
          className="bg-[#252120] border border-[#3D3634] rounded-3xl p-7 sm:p-12 lg:p-14 shadow-2xl space-y-9 relative"
        >
          <input type="hidden" name="form-name" value="nori-booking" />

          {/* STEP 01 — YOUR TRIP */}
          {currentStep === 1 && (
            <div id="step-01-your-trip" className="space-y-8">
              <div className="border-b border-[#3D3634] pb-6 space-y-2">
                <span className="text-[11px] uppercase tracking-[0.26em] text-[#D9B4B0] font-semibold block">
                  01 — YOUR TRIP
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-[#F7F2EC] tracking-tight leading-tight [text-wrap:balance]">
                  About your trip to Korea
                </h2>
              </div>

              {/* Where are you traveling from? */}
              <div className="space-y-2.5">
                <label
                  htmlFor="inquiry-country-region"
                  className="block text-sm sm:text-base font-semibold text-[#E8DFD7]"
                >
                  Where are you traveling from?
                </label>
                <div className="relative">
                  <Globe className="w-4 h-4 text-[#786761] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="inquiry-country-region"
                    name="Country_or_Region"
                    type="text"
                    value={formData.countryRegion}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, countryRegion: e.target.value }))
                    }
                    placeholder="Country / region"
                    className="w-full pl-11 pr-4 py-3.5 bg-[#F3EEE8] border border-[#D5CBC2] focus:border-[#C99E9A] focus:bg-white rounded-2xl text-sm text-[#302B29] placeholder:text-[#8C7E77] focus:outline-none focus:ring-2 focus:ring-[#D9B4B0]/40 transition-colors font-normal"
                  />
                </div>
              </div>

              {/* When will you be in Korea? */}
              <div className="space-y-3.5">
                <label className="block text-sm sm:text-base font-semibold text-[#E8DFD7]">
                  When will you be in Korea?
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <span className="text-[11px] uppercase tracking-[0.16em] text-[#BFB3AC] font-medium block">
                      Arrival date
                    </span>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-[#786761] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        id="inquiry-arrival-date"
                        name="Arrival_Date"
                        type="date"
                        value={formData.arrivalDate}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, arrivalDate: e.target.value }))
                        }
                        className="w-full pl-11 pr-4 py-3.5 bg-[#F3EEE8] border border-[#D5CBC2] focus:border-[#C99E9A] focus:bg-white rounded-2xl text-sm text-[#302B29] focus:outline-none focus:ring-2 focus:ring-[#D9B4B0]/40 transition-colors scheme-light font-normal"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[11px] uppercase tracking-[0.16em] text-[#BFB3AC] font-medium block">
                      Departure date
                    </span>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-[#786761] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        id="inquiry-departure-date"
                        name="Departure_Date"
                        type="date"
                        value={formData.departureDate}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, departureDate: e.target.value }))
                        }
                        className="w-full pl-11 pr-4 py-3.5 bg-[#F3EEE8] border border-[#D5CBC2] focus:border-[#C99E9A] focus:bg-white rounded-2xl text-sm text-[#302B29] focus:outline-none focus:ring-2 focus:ring-[#D9B4B0]/40 transition-colors scheme-light font-normal"
                      />
                    </div>
                  </div>
                </div>

                {renderCheckboxCard(
                  'My dates are flexible / not confirmed yet',
                  formData.datesFlexible,
                  () =>
                    setFormData((prev) => ({
                      ...prev,
                      datesFlexible: !prev.datesFlexible,
                    })),
                  'dates-flexible'
                )}
              </div>

              {/* How many people are traveling? */}
              <div className="space-y-3">
                <label
                  htmlFor="inquiry-travelers-count"
                  className="block text-sm sm:text-base font-semibold text-[#E8DFD7]"
                >
                  How many people are traveling? <span className="text-[#D9B4B0] font-bold">*</span>
                </label>
                <input
                  id="inquiry-travelers-count"
                  name="Number_of_Travelers"
                  type="hidden"
                  value={formData.numberOfTravelers >= 7 ? '7+' : formData.numberOfTravelers}
                />
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2.5">
                  {[
                    { label: '1', value: 1 },
                    { label: '2', value: 2 },
                    { label: '3', value: 3 },
                    { label: '4', value: 4 },
                    { label: '5', value: 5 },
                    { label: '6', value: 6 },
                    { label: '7+', value: 7 },
                  ].map((option) => {
                    const isSelected =
                      option.value === 7
                        ? formData.numberOfTravelers >= 7
                        : formData.numberOfTravelers === option.value;
                    return (
                      <button
                        key={option.label}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            numberOfTravelers: option.value,
                          }))
                        }
                        className={`py-3 px-4 rounded-2xl border text-xs sm:text-sm transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#D9B4B0] text-[#1C1917] border-[#D9B4B0] font-bold shadow-md'
                            : 'bg-[#1C1917] text-[#E8DFD7] border border-[#3D3634] hover:border-[#D9B4B0] hover:bg-[#2E2826] font-medium'
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
                <p className="text-xs text-[#BFB3AC] font-normal leading-relaxed">
                  NORI specializes in private, personalized trips for small groups. Some experiences may have individual group-size limits. Traveling with 7 or more? Send us your request and we’ll let you know what we can arrange.
                </p>
              </div>

              {/* Who are you traveling with? */}
              <div className="space-y-3">
                <label className="block text-sm sm:text-base font-semibold text-[#E8DFD7]">
                  Who are you traveling with?{' '}
                  <span className="text-xs font-normal text-[#BFB3AC]">(Optional)</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {COMPANION_OPTIONS.map((option) =>
                    renderCheckboxCard(
                      option,
                      formData.travelCompanions.includes(option),
                      () => handleToggleCompanion(option),
                      'companion'
                    )
                  )}
                </div>
              </div>
            </div>
          )}

          {/* STEP 02 — TRAVEL SUPPORT */}
          {currentStep === 2 && (
            <div id="step-02-travel-support" className="space-y-8">
              <div className="border-b border-[#3D3634] pb-6 space-y-2">
                <span className="text-[11px] uppercase tracking-[0.26em] text-[#D9B4B0] font-semibold block">
                  02 — TRAVEL SUPPORT
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-[#F7F2EC] tracking-tight leading-tight [text-wrap:balance]">
                  What would you like help with?
                </h2>
                <p className="text-xs sm:text-sm text-[#BFB3AC] font-normal">
                  Select as many as you need.
                </p>
              </div>

              {/* AIRPORT */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-[0.24em] text-[#D9B4B0] font-bold">
                  AIRPORT
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {AIRPORT_OPTIONS.map((item) =>
                    renderCheckboxCard(
                      item,
                      formData.travelSupportAirport.includes(item),
                      () => handleToggleTravelSupport('travelSupportAirport', item),
                      'airport'
                    )
                  )}
                </div>
              </div>

              {/* GETTING AROUND */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-[0.24em] text-[#D9B4B0] font-bold">
                  GETTING AROUND
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {GETTING_AROUND_OPTIONS.map((item) =>
                    renderCheckboxCard(
                      item,
                      formData.travelSupportGettingAround.includes(item),
                      () => handleToggleTravelSupport('travelSupportGettingAround', item),
                      'getting-around'
                    )
                  )}
                </div>
              </div>

              {/* STAY & PLANNING */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-[0.24em] text-[#D9B4B0] font-bold">
                  STAY &amp; PLANNING
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {STAY_PLANNING_OPTIONS.map((item) =>
                    renderCheckboxCard(
                      item,
                      formData.travelSupportStayPlanning.includes(item),
                      () => handleToggleTravelSupport('travelSupportStayPlanning', item),
                      'stay-planning'
                    )
                  )}
                </div>
              </div>

              {/* Beauty Only Option */}
              <div className="pt-3 border-t border-[#3D3634]">
                {renderCheckboxCard(
                  "I don't need travel support — I'm only interested in beauty experiences.",
                  formData.travelSupportBeautyOnly,
                  handleToggleBeautyOnly,
                  'beauty-only'
                )}
              </div>

              {/* Subtle Ground Arrangements Note */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#1C1917] border border-[#3D3634] flex items-start gap-3">
                <Info className="w-4 h-4 text-[#D9B4B0] shrink-0 mt-0.5" />
                <p className="text-xs text-[#BFB3AC] font-normal leading-relaxed">
                  NORI specializes in ground arrangements in Korea.
                  <br />
                  International airfare is not included.
                </p>
              </div>
            </div>
          )}

          {/* STEP 03 — BEAUTY */}
          {currentStep === 3 && (
            <div id="step-03-beauty" className="space-y-8">
              <div className="border-b border-[#3D3634] pb-6 space-y-2">
                <span className="text-[11px] uppercase tracking-[0.26em] text-[#D9B4B0] font-semibold block">
                  03 — BEAUTY
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-[#F7F2EC] tracking-tight leading-tight [text-wrap:balance]">
                  What are you interested in?
                </h2>
                <p className="text-xs sm:text-sm text-[#BFB3AC] font-normal leading-relaxed">
                  Choose anything you'd like to explore.
                  <br />
                  You don't need to know exactly what you want yet.
                </p>
              </div>

              {/* SKINCARE & SHOPPING */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-[0.24em] text-[#D9B4B0] font-bold">
                  SKINCARE &amp; SHOPPING
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SKINCARE_SHOPPING_OPTIONS.map((item) =>
                    renderCheckboxCard(
                      item,
                      formData.beautySkincareShopping.includes(item),
                      () => handleToggleBeautyCategory('beautySkincareShopping', item),
                      'skincare-shopping'
                    )
                  )}
                </div>
              </div>

              {/* COLOR & MAKEUP */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-[0.24em] text-[#D9B4B0] font-bold">
                  COLOR &amp; MAKEUP
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {COLOR_MAKEUP_OPTIONS.map((item) =>
                    renderCheckboxCard(
                      item,
                      formData.beautyColorMakeup.includes(item),
                      () => handleToggleBeautyCategory('beautyColorMakeup', item),
                      'color-makeup'
                    )
                  )}
                </div>
              </div>

              {/* HAIR & WELLNESS */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-[0.24em] text-[#D9B4B0] font-bold">
                  HAIR &amp; WELLNESS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {HAIR_WELLNESS_OPTIONS.map((item) =>
                    renderCheckboxCard(
                      item,
                      formData.beautyHairWellness.includes(item),
                      () => handleToggleBeautyCategory('beautyHairWellness', item),
                      'hair-wellness'
                    )
                  )}
                </div>
              </div>

              {/* BEAUTY & AESTHETIC CARE */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-[0.24em] text-[#D9B4B0] font-bold">
                  BEAUTY &amp; AESTHETIC CARE
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {BEAUTY_AESTHETIC_OPTIONS.map((item) =>
                    renderCheckboxCard(
                      item,
                      formData.beautyAestheticCare.includes(item),
                      () => handleToggleBeautyCategory('beautyAestheticCare', item),
                      'beauty-aesthetic'
                    )
                  )}
                </div>
              </div>

              {/* Not Sure Option */}
              <div className="pt-3 border-t border-[#3D3634]">
                {renderCheckboxCard(
                  "I'm not sure — I'd like NORI to recommend options.",
                  formData.beautyNotSureRecommend,
                  () =>
                    setFormData((prev) => ({
                      ...prev,
                      beautyNotSureRecommend: !prev.beautyNotSureRecommend,
                    })),
                  'beauty-not-sure'
                )}
              </div>
            </div>
          )}

          {/* STEP 04 — YOUR PREFERENCES */}
          {currentStep === 4 && (
            <div id="step-04-preferences" className="space-y-8">
              <div className="border-b border-[#3D3634] pb-6 space-y-2">
                <span className="text-[11px] uppercase tracking-[0.26em] text-[#D9B4B0] font-semibold block">
                  04 — YOUR PREFERENCES
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-[#F7F2EC] tracking-tight leading-tight [text-wrap:balance]">
                  Make it yours.
                </h2>
              </div>

              {/* What matters most to you? */}
              <div className="space-y-3">
                <label className="block text-sm sm:text-base font-semibold text-[#E8DFD7]">
                  What matters most to you?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {MATTERS_MOST_OPTIONS.map((item) =>
                    renderCheckboxCard(
                      item,
                      formData.preferencesMattersMost.includes(item),
                      () => handleToggleMattersMost(item),
                      'matters-most'
                    )
                  )}
                </div>
              </div>

              {/* Approximate Budget */}
              <div className="space-y-3 pt-2">
                <div className="space-y-1">
                  <label className="block text-sm sm:text-base font-semibold text-[#E8DFD7]">
                    What's your approximate budget for the services you'd like NORI to arrange?
                  </label>
                  <p className="text-xs text-[#BFB3AC] font-normal">
                    This refers to the NORI-arranged portion of the trip, not international airfare.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {BUDGET_OPTIONS.map((option) =>
                    renderCheckboxCard(
                      option,
                      formData.approximateBudget === option,
                      () =>
                        setFormData((prev) => ({
                          ...prev,
                          approximateBudget: prev.approximateBudget === option ? '' : option,
                        })),
                      'budget'
                    )
                  )}
                </div>
              </div>

              {/* Large Optional Text Field */}
              <div className="space-y-2.5 pt-2">
                <label
                  htmlFor="inquiry-free-text"
                  className="block text-sm sm:text-base font-semibold text-[#E8DFD7]"
                >
                  Tell Nori more ✨
                </label>
                <p className="text-xs text-[#BFB3AC] font-normal">
                  What would make this trip perfect for you?
                </p>
                <textarea
                  id="inquiry-free-text"
                  name="Free_Text_Request"
                  rows={4}
                  value={formData.freeTextRequest}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, freeTextRequest: e.target.value }))
                  }
                  placeholder="I'm traveling with my mom and we'd love a skincare shopping day, personal color analysis and a relaxing beauty treatment. We'd also like a private car for two days."
                  className="w-full p-4 bg-[#F3EEE8] border border-[#D5CBC2] focus:border-[#C99E9A] focus:bg-white rounded-2xl text-xs sm:text-sm text-[#302B29] placeholder:text-[#8C7E77] font-normal leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#D9B4B0]/40 transition-colors"
                />
              </div>
            </div>
          )}

          {/* STEP 05 — CONTACT */}
          {currentStep === 5 && (
            <div id="step-05-contact" className="space-y-8">
              <div className="border-b border-[#3D3634] pb-6 space-y-2">
                <span className="text-[11px] uppercase tracking-[0.26em] text-[#D9B4B0] font-semibold block">
                  05 — CONTACT
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-[#F7F2EC] tracking-tight leading-tight [text-wrap:balance]">
                  Where should we send your plan?
                </h2>
              </div>

              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="inquiry-first-name"
                    className="block text-sm sm:text-base font-semibold text-[#E8DFD7]"
                  >
                    First name <span className="text-[#D9B4B0] font-bold">*</span>
                  </label>
                  <input
                    id="inquiry-first-name"
                    name="First_Name"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, firstName: e.target.value }))
                    }
                    placeholder="First name"
                    className="w-full px-4 py-3.5 bg-[#F3EEE8] border border-[#D5CBC2] focus:border-[#C99E9A] focus:bg-white rounded-2xl text-sm text-[#302B29] placeholder:text-[#8C7E77] focus:outline-none focus:ring-2 focus:ring-[#D9B4B0]/40 transition-colors font-normal"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="inquiry-last-name"
                    className="block text-sm sm:text-base font-semibold text-[#E8DFD7]"
                  >
                    Last name
                  </label>
                  <input
                    id="inquiry-last-name"
                    name="Last_Name"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, lastName: e.target.value }))
                    }
                    placeholder="Last name"
                    className="w-full px-4 py-3.5 bg-[#F3EEE8] border border-[#D5CBC2] focus:border-[#C99E9A] focus:bg-white rounded-2xl text-sm text-[#302B29] placeholder:text-[#8C7E77] focus:outline-none focus:ring-2 focus:ring-[#D9B4B0]/40 transition-colors font-normal"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="inquiry-email"
                  className="block text-sm sm:text-base font-semibold text-[#E8DFD7]"
                >
                  Email <span className="text-[#D9B4B0] font-bold">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#786761] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="inquiry-email"
                    name="Email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder="you@example.com"
                    className="w-full pl-11 pr-4 py-3.5 bg-[#F3EEE8] border border-[#D5CBC2] focus:border-[#C99E9A] focus:bg-white rounded-2xl text-sm text-[#302B29] placeholder:text-[#8C7E77] focus:outline-none focus:ring-2 focus:ring-[#D9B4B0]/40 transition-colors font-normal"
                  />
                </div>
              </div>

              {/* Preferred Contact Method */}
              <div className="space-y-3">
                <label className="block text-sm sm:text-base font-semibold text-[#E8DFD7]">
                  Preferred contact method <span className="text-[#D9B4B0] font-bold">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3 max-w-md">
                  {(['WhatsApp', 'Email'] as const).map((method) => {
                    const isSelected = formData.preferredContactMethod === method;
                    return (
                      <label
                        key={method}
                        className={`flex items-center gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-[#2E2826] border-2 border-[#D9B4B0] text-[#F7F2EC] font-medium shadow-sm'
                            : 'bg-[#1C1917] border border-[#3D3634] text-[#E8DFD7] hover:border-[#D9B4B0]/80 hover:text-[#F7F2EC]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="Preferred_Contact_Method"
                          value={method}
                          checked={isSelected}
                          onChange={() =>
                            setFormData((prev) => ({ ...prev, preferredContactMethod: method }))
                          }
                          className="sr-only"
                        />
                        <span
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected ? 'border-[#D9B4B0]' : 'border-[#443E3B]'
                          }`}
                        >
                          {isSelected && <span className="w-2 h-2 rounded-full bg-[#D9B4B0]" />}
                        </span>
                        <span className="text-xs sm:text-sm font-medium">{method}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* WhatsApp Details (Required when WhatsApp is selected) */}
              {formData.preferredContactMethod === 'WhatsApp' && (
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-5 rounded-2xl bg-[#1C1917] border border-[#3D3634]">
                  <div className="sm:col-span-4 space-y-1.5">
                    <label
                      htmlFor="inquiry-whatsapp-code"
                      className="block text-xs uppercase tracking-[0.14em] text-[#E8DFD7] font-semibold"
                    >
                      Country code
                    </label>
                    <input
                      id="inquiry-whatsapp-code"
                      name="whatsappCountryCode"
                      type="text"
                      value={formData.whatsappCountryCode}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, whatsappCountryCode: e.target.value }))
                      }
                      placeholder="+1, +44, +65..."
                      className="w-full px-4 py-3 bg-[#F3EEE8] border border-[#D5CBC2] focus:border-[#C99E9A] focus:bg-white rounded-xl text-sm text-[#302B29] placeholder:text-[#8C7E77] focus:outline-none focus:ring-2 focus:ring-[#D9B4B0]/40 transition-colors font-normal"
                    />
                  </div>

                  <div className="sm:col-span-8 space-y-1.5">
                    <label
                      htmlFor="inquiry-whatsapp-number"
                      className="block text-xs uppercase tracking-[0.14em] text-[#E8DFD7] font-semibold"
                    >
                      WhatsApp number <span className="text-[#D9B4B0] font-bold">*</span>
                    </label>
                    <div className="relative">
                      <MessageCircle className="w-4 h-4 text-[#25D366] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        id="inquiry-whatsapp-number"
                        name="WhatsApp_Number"
                        type="tel"
                        required
                        value={formData.whatsappNumber}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, whatsappNumber: e.target.value }))
                        }
                        placeholder="Phone number"
                        className="w-full pl-11 pr-4 py-3 bg-[#F3EEE8] border border-[#D5CBC2] focus:border-[#C99E9A] focus:bg-white rounded-xl text-sm text-[#302B29] placeholder:text-[#8C7E77] focus:outline-none focus:ring-2 focus:ring-[#D9B4B0]/40 transition-colors font-normal"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Preferred Language */}
              <div className="space-y-3">
                <label className="block text-sm sm:text-base font-semibold text-[#E8DFD7]">
                  Preferred language
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {LANGUAGE_OPTIONS.map((lang) => {
                    const isSelected = formData.preferredLanguage === lang;
                    return (
                      <button
                        key={lang}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, preferredLanguage: lang }))
                        }
                        className={`py-3 px-4 rounded-2xl border text-xs sm:text-sm transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#D9B4B0] text-[#1C1917] border-[#D9B4B0] font-bold shadow-md'
                            : 'bg-[#1C1917] text-[#E8DFD7] border border-[#3D3634] hover:border-[#D9B4B0] hover:bg-[#252120] font-medium'
                        }`}
                      >
                        {lang}
                      </button>
                    );
                  })}
                </div>

                {formData.preferredLanguage === 'Other' && (
                  <div className="space-y-1.5 pt-1">
                    <label
                      htmlFor="inquiry-preferred-language-other"
                      className="block text-xs uppercase tracking-[0.14em] text-[#E8DFD7] font-semibold"
                    >
                      Please specify your preferred language
                    </label>
                    <input
                      id="inquiry-preferred-language-other"
                      name="Preferred_Language_Other"
                      type="text"
                      value={formData.preferredLanguageOther || ''}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          preferredLanguageOther: e.target.value,
                        }))
                      }
                      placeholder="e.g. Japanese, French, Spanish"
                      className="w-full px-4 py-3.5 bg-[#F3EEE8] border border-[#D5CBC2] focus:border-[#C99E9A] focus:bg-white rounded-2xl text-sm text-[#302B29] placeholder:text-[#8C7E77] focus:outline-none focus:ring-2 focus:ring-[#D9B4B0]/40 transition-colors font-normal"
                    />
                  </div>
                )}
              </div>

              {/* Instagram / Social Handle (Optional) */}
              <div className="space-y-2">
                <label
                  htmlFor="inquiry-instagram"
                  className="block text-sm sm:text-base font-semibold text-[#E8DFD7]"
                >
                  Instagram / social handle{' '}
                  <span className="text-xs font-normal text-[#BFB3AC]">(optional)</span>
                </label>
                <div className="relative">
                  <Instagram className="w-4 h-4 text-[#786761] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="inquiry-instagram"
                    name="Instagram_or_Social_Handle"
                    type="text"
                    value={formData.instagramHandle}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, instagramHandle: e.target.value }))
                    }
                    placeholder="@yourhandle"
                    className="w-full pl-11 pr-4 py-3.5 bg-[#F3EEE8] border border-[#D5CBC2] focus:border-[#C99E9A] focus:bg-white rounded-2xl text-sm text-[#302B29] placeholder:text-[#8C7E77] focus:outline-none focus:ring-2 focus:ring-[#D9B4B0]/40 transition-colors font-normal"
                  />
                </div>
              </div>

              {/* Consent Checkbox & Legal Policy Links */}
              <div className="pt-4 border-t border-[#3D3634] space-y-4">
                {renderCheckboxCard(
                  'I understand that this is a personalized quote request and not an instant booking.',
                  formData.quoteRequestConsent,
                  () =>
                    setFormData((prev) => ({
                      ...prev,
                      quoteRequestConsent: !prev.quoteRequestConsent,
                    })),
                  'quote-consent'
                )}

                <p className="text-xs text-[#BFB3AC] font-normal leading-relaxed pl-1">
                  By submitting this request, you agree to our{' '}
                  <button
                    type="button"
                    onClick={() => onOpenPoliciesModal('privacy')}
                    className="underline text-[#E9D2CD] hover:text-[#F7F2EC] transition-colors cursor-pointer"
                  >
                    Privacy Policy
                  </button>{' '}
                  and{' '}
                  <button
                    type="button"
                    onClick={() => onOpenPoliciesModal('terms')}
                    className="underline text-[#E9D2CD] hover:text-[#F7F2EC] transition-colors cursor-pointer"
                  >
                    Terms &amp; Cancellation Policy
                  </button>
                  .
                </p>
              </div>
            </div>
          )}

          {/* Validation Error Banner */}
          {validationError && (
            <div className="p-4 rounded-2xl bg-rose-950/60 border border-rose-700/70 flex items-start gap-3 text-xs text-rose-100">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span>{validationError}</span>
            </div>
          )}

          {/* Submission Failure Banner */}
          {submissionFailed && (
            <div className="p-5 rounded-2xl bg-rose-950/60 border border-rose-700/70 space-y-4 text-xs text-rose-100">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div className="space-y-1 leading-relaxed">
                  <p className="font-semibold text-rose-100">
                    Something went wrong while sending your request.
                  </p>
                  <p>Please try again, or contact NORI on WhatsApp.</p>
                </div>
              </div>
              <div>
                <a
                  href={NORI_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#1C1917] hover:bg-[#252120] text-[#F7F2EC] border border-[#3D3634] rounded-full text-[11px] uppercase tracking-[0.16em] font-medium transition-all inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Contact NORI on WhatsApp</span>
                </a>
              </div>
            </div>
          )}

          {/* Step Navigation Buttons */}
          <div className="pt-6 border-t border-[#3D3634] flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
            {currentStep > 1 ? (
              <button
                type="button"
                id="plan-step-back-btn"
                onClick={handleBack}
                disabled={isSubmitting}
                className="w-full sm:w-auto px-7 py-4 bg-[#1C1917] hover:bg-[#252120] disabled:opacity-50 text-[#E8DFD7] border border-[#3D3634] hover:border-[#D9B4B0]/60 rounded-full text-xs uppercase tracking-[0.18em] font-semibold transition-all inline-flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#D9B4B0]" />
                <span>Back</span>
              </button>
            ) : (
              <div className="hidden sm:block" />
            )}

            {currentStep < 5 ? (
              <button
                type="button"
                id="plan-step-next-btn"
                onClick={handleNext}
                className="w-full sm:w-auto px-9 py-4 bg-[#D9B4B0] hover:bg-[#E9D2CD] text-[#1C1917] rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2.5 group cursor-pointer active:scale-[0.98]"
              >
                <span>Next</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#1C1917] group-hover:translate-x-0.5 transition-transform" />
              </button>
            ) : (
              <button
                type="submit"
                id="create-trip-request-submit-btn"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-9 py-4 bg-[#D9B4B0] hover:bg-[#E9D2CD] disabled:opacity-75 disabled:cursor-not-allowed text-[#1C1917] rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-lg inline-flex items-center justify-center gap-2.5 group cursor-pointer active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 text-[#1C1917] animate-spin" />
                    <span>SENDING YOUR REQUEST...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-[#1C1917] group-hover:scale-110 transition-transform duration-300" />
                    <span>CREATE MY TRIP REQUEST</span>
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
