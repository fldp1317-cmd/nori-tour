import React, { useState, useEffect } from 'react';
import { ShieldCheck, Calendar, Users, Heart, ArrowRight, ArrowLeft, CheckCircle2, Lock, Sparkles, AlertCircle, HelpCircle, FileText } from 'lucide-react';
import { Tour, BookingFormData, CustomerBeautyProfile, BookingStatus } from '../types';
import {
  calculateBookingPrice,
  createPaymentOrder,
  PriceBreakdown,
  PaymentOrderDetails,
  PaymentMethodType,
  DEFAULT_USD_TO_KRW_RATE,
} from '../services/paymentService';
import { PaymentCheckoutStep } from '../components/PaymentCheckoutStep';
import { saveBookingRecord } from '../services/bookingManager';
import { LegalPoliciesModal, PolicyTabId } from '../components/LegalPoliciesModal';
import { BUSINESS_POLICIES } from '../data/businessPolicies';

interface BookingPageProps {
  tours: Tour[];
  initialTourId?: string;
  onNavigateToTour?: (tour: Tour) => void;
  onOpenPoliciesModal?: (tab?: PolicyTabId) => void;
}

const SKIN_CONCERNS_OPTIONS = [
  'Dehydration / Dullness',
  'Redness & Barrier Sensitivity',
  'Pore Refinement & Texture',
  'Hyperpigmentation & Sun Spots',
  'Fine Lines & Elasticity',
  'Acne & Post-Blemish Marks',
  'Scalp Congestion & Sensitivity'
];

const BEAUTY_INTERESTS_OPTIONS = [
  'Glass Skin Deep Hydration',
  'Barrier Repair & Soothing',
  'Traditional Hanbang Herbal Detox',
  'Anti-Aging & Collagen Lifting',
  'Luxury Scalp Restoration',
  'Bespoke Fragrance Atelier',
  'Non-Invasive Ultrasound (LDM)'
];

const MAKEUP_INTERESTS_OPTIONS = [
  'Dewy Base & Cushion Matching',
  'Personal Color Lipstick Draping',
  'Natural Korean Brow Styling',
  'Idol Stage Eye Makeup Techniques',
  'Airbrush Concealing & Contouring'
];

const PERSONAL_COLOR_OPTIONS = [
  'High Interest — Want professional drape diagnosis in Seoul',
  'Curious — Would like basic seasonal palette recommendations',
  'Already Diagnosed (Spring / Summer / Autumn / Winter)',
  'Prefer focusing primarily on skincare rituals'
];

const BUDGET_OPTIONS = [
  'Under $300 USD (Essential Consultation)',
  '$300 - $600 USD (Curated Day Experience)',
  '$600 - $1,200 USD (Signature Clinical & Atelier Tour)',
  '$1,200+ USD (Private VIP Dermatology Concierge)'
];

export const BookingPage: React.FC<BookingPageProps> = ({
  tours,
  initialTourId,
  onNavigateToTour,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    tourId: initialTourId || (tours.length > 0 ? tours[0].id : ''),
    date: '',
    guests: 2,
    fullName: '',
    email: '',
    whatsapp: '',
    country: 'United States',
    focusCategory: 'both',
    skinConcerns: ['Dehydration / Dullness', 'Redness & Barrier Sensitivity'],
    currentSkincareRoutine: 'Gentle cleanser, hydrating toner, ceramide moisturizer, daily SPF50+.',
    allergiesOrSensitivity: 'None known / sensitive to high-percentage fragrance.',
    beautyInterests: ['Glass Skin Deep Hydration', 'Barrier Repair & Soothing'],
    makeupInterests: ['Dewy Base & Cushion Matching', 'Personal Color Lipstick Draping'],
    personalColorInterest: 'High Interest — Want professional drape diagnosis in Seoul',
    budget: '$600 - $1,200 USD (Signature Clinical & Atelier Tour)',
    preferredExperience: tours.find(t => t.id === initialTourId)?.title || tours[0]?.title || '',
    specialRequests: '',
    skincareInterests: ['Glass Skin Deep Hydration']
  });

  const [bookingStep, setBookingStep] = useState<'form' | 'review' | 'payment' | 'confirmed'>('form');
  const [paymentOrder, setPaymentOrder] = useState<PaymentOrderDetails | null>(null);
  const [paidMethod, setPaidMethod] = useState<PaymentMethodType>('CARD');
  const [refCode, setRefCode] = useState('');
  const [activePolicyTab, setActivePolicyTab] = useState<PolicyTabId | null>(null);

  useEffect(() => {
    if (initialTourId) {
      setFormData(prev => {
        const found = tours.find(t => t.id === initialTourId);
        return {
          ...prev,
          tourId: initialTourId,
          preferredExperience: found ? found.title : prev.preferredExperience
        };
      });
    }
  }, [initialTourId, tours]);

  const selectedTour = tours.find(t => t.id === formData.tourId) || tours[0];
  const pricing: PriceBreakdown = calculateBookingPrice(selectedTour, formData.guests);

  const toggleBeautyInterest = (interest: string) => {
    setFormData(prev => {
      const exists = prev.beautyInterests.includes(interest);
      const updated = exists
        ? prev.beautyInterests.filter(i => i !== interest)
        : [...prev.beautyInterests, interest];
      return { ...prev, beautyInterests: updated, skincareInterests: updated };
    });
  };

  const toggleMakeupInterest = (interest: string) => {
    setFormData(prev => {
      const exists = prev.makeupInterests.includes(interest);
      return {
        ...prev,
        makeupInterests: exists
          ? prev.makeupInterests.filter(i => i !== interest)
          : [...prev.makeupInterests, interest]
      };
    });
  };

  const toggleConcern = (concern: string) => {
    setFormData(prev => {
      const exists = prev.skinConcerns.includes(concern);
      return {
        ...prev,
        skinConcerns: exists
          ? prev.skinConcerns.filter(c => c !== concern)
          : [...prev.skinConcerns, concern]
      };
    });
  };

  const handleReviewStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.date || !formData.fullName || !formData.email || !formData.whatsapp) {
      alert('Please fill in all required fields (date, name, email, WhatsApp).');
      return;
    }
    const order = createPaymentOrder(selectedTour, formData);
    setPaymentOrder(order);
    setBookingStep('review');
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handleConfirmAndProceedToPayment = () => {
  if (!selectedTour) return;

  const order =
    paymentOrder || createPaymentOrder(selectedTour, formData);

  if (!paymentOrder) {
    setPaymentOrder(order);
  }

  const customerProfile: CustomerBeautyProfile = {
    focusCategory: formData.focusCategory,
    skinConcerns: formData.skinConcerns,
    currentSkincareRoutine: formData.currentSkincareRoutine,
    allergiesOrSensitivity: formData.allergiesOrSensitivity,
    beautyInterests: formData.beautyInterests,
    makeupInterests: formData.makeupInterests,
    personalColorInterest: formData.personalColorInterest,
    budget: formData.budget,
    preferredExperience: selectedTour.title,
    fullName: formData.fullName,
    whatsapp: formData.whatsapp,
    email: formData.email,
    country: formData.country,
    specialRequests: formData.specialRequests,
  };

  saveBookingRecord(
    selectedTour,
    customerProfile,
    formData.date,
    formData.guests,
    pricing.totalUsd,
    pricing.totalKrw,
    order.orderId,
    'Pending'
  );

  setBookingStep('payment');
  window.scrollTo({ top: 120, behavior: 'smooth' });
};

  const handlePaymentSuccess = (orderId: string, method: PaymentMethodType) => {
    setRefCode(orderId);
    setPaidMethod(method);
    setBookingStep('confirmed');

    // Persist real booking record with customer beauty profile into system
    const customerProfile: CustomerBeautyProfile = {
      focusCategory: formData.focusCategory,
      skinConcerns: formData.skinConcerns,
      currentSkincareRoutine: formData.currentSkincareRoutine,
      allergiesOrSensitivity: formData.allergiesOrSensitivity,
      beautyInterests: formData.beautyInterests,
      makeupInterests: formData.makeupInterests,
      personalColorInterest: formData.personalColorInterest,
      budget: formData.budget,
      preferredExperience: selectedTour.title,
      fullName: formData.fullName,
      whatsapp: formData.whatsapp,
      email: formData.email,
      country: formData.country,
      specialRequests: formData.specialRequests
    };

    saveBookingRecord(
      selectedTour,
      customerProfile,
      formData.date,
      formData.guests,
      pricing.totalUsd,
      pricing.totalKrw,
      orderId,
      'Paid',
      method
    );

    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  const handleReset = () => {
    setBookingStep('form');
    setPaymentOrder(null);
  };

  return (
    <div id="booking-page" className="w-full pt-28 pb-24 bg-[#F7F2EC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCFAF7] border border-[#EADBCE]">
            <span className="w-2 h-2 rounded-full bg-[#D9B4B0]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#786761] font-medium">
              Reservations & Beauty Profile • 놀이
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-editorial font-light text-[#302B29] tracking-tight">
            Book an Experience
          </h1>
          <p className="text-sm sm:text-base text-[#786761] font-light leading-relaxed max-w-xl mx-auto">
            Reserve your personalized K-beauty, wellness, or cultural journey in Seoul with transparent pricing and dedicated bilingual concierge care.
          </p>

          {/* Stepper Progress Bar */}
          {bookingStep !== 'confirmed' && (
            <div className="pt-4 flex items-center justify-center gap-2 sm:gap-4 text-xs font-medium">
              <span className={`px-3 py-1 rounded-full ${bookingStep === 'form' ? 'bg-[#302B29] text-[#F7F2EC]' : 'bg-[#FCFAF7] border border-[#EADBCE] text-[#786761]'}`}>
                1. Beauty Profile & Dates
              </span>
              <span className="text-[#D1C7BD]">→</span>
              <span className={`px-3 py-1 rounded-full ${bookingStep === 'review' ? 'bg-[#302B29] text-[#F7F2EC]' : 'bg-[#FCFAF7] border border-[#EADBCE] text-[#786761]'}`}>
                2. Review & Confirm Price
              </span>
              <span className="text-[#D1C7BD]">→</span>
              <span className={`px-3 py-1 rounded-full ${bookingStep === 'payment' ? 'bg-[#302B29] text-[#F7F2EC]' : 'bg-[#FCFAF7] border border-[#EADBCE] text-[#786761]'}`}>
                3. Proceed to Payment
              </span>
            </div>
          )}
        </div>

        {/* STEP 4: Confirmed Order Receipt */}
        {bookingStep === 'confirmed' && (
          <div className="max-w-2xl mx-auto bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl p-6 sm:p-12 shadow-lg text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#F4E8E5] border border-[#D9B4B0] mx-auto flex items-center justify-center text-[#302B29]">
              <CheckCircle2 className="w-8 h-8 text-[#D9B4B0]" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Booking Status: Paid & Confirmed</span>
              </div>
              <h2 className="text-3xl font-editorial font-light text-[#302B29]">
                Warm Welcome, {formData.fullName}
              </h2>
              <p className="text-sm text-[#786761] leading-relaxed">
                Your reservation for <strong>{selectedTour?.title}</strong> is registered. Our bilingual Seoul concierge team has received your order and Customer Beauty Profile. We will message you on WhatsApp (<span className="text-[#302B29] font-medium">{formData.whatsapp}</span>) and email with your confirmed schedule.
              </p>
            </div>

            <div className="bg-[#F7F2EC] border border-[#EADBCE] rounded-2xl p-6 text-left space-y-3">
              <div className="flex items-center justify-between border-b border-[#EADBCE] pb-3">
                <span className="text-xs uppercase tracking-wider text-[#786761]">Order ID (Toss Gateway)</span>
                <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-[#302B29] bg-[#EADBCE] px-2.5 py-1 rounded">
                  {refCode || paymentOrder?.orderId || 'NORI-ORDER-CONFIRMED'}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#786761]">Experience:</span>
                <span className="font-medium text-[#302B29]">{selectedTour?.title}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#786761]">Confirmed Date:</span>
                <span className="font-medium text-[#302B29]">{formData.date}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#786761]">Party Size:</span>
                <span className="font-medium text-[#302B29]">{formData.guests} Guests</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#786761]">Lead Traveler:</span>
                <span className="font-medium text-[#302B29]">{formData.fullName} ({formData.country})</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#786761]">Beauty Focus:</span>
                <span className="font-medium capitalize text-[#302B29]">{formData.focusCategory}</span>
              </div>
              <div className="flex items-center justify-between text-xs pt-2 border-t border-[#EADBCE]">
                <span className="text-[#786761]">Final Paid Amount:</span>
                <span className="text-lg font-editorial font-medium text-[#302B29]">
                  ${pricing.totalUsd.toLocaleString()} USD (≈ ₩{pricing.totalKrw.toLocaleString()} KRW)
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F4E8E5] border border-[#EADBCE] text-xs text-[#786761] text-left space-y-1">
              <p className="font-semibold text-[#302B29]">What Happens Next:</p>
              <p>1. Our concierge locks the private clinical suite & master translator.</p>
              <p>2. Your beauty profile is reviewed by the lead aesthetician to prevent any contraindications.</p>
              <p>3. Meeting point pins, subway maps, and tax-refund paperwork arrive via WhatsApp.</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-8 py-3 bg-[#302B29] text-[#F7F2EC] text-xs uppercase tracking-[0.18em] font-medium rounded-full hover:bg-[#443E3B] transition-all shadow-xs"
              >
                Book Another Experience
              </button>
              <button
                onClick={() => setActivePolicyTab('cancellation')}
                className="text-xs text-[#786761] hover:text-[#302B29] underline"
              >
                View Cancellation & Refund Terms
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Proceed to Payment Step (Toss Payments v2 Modular Gateway) */}
        {bookingStep === 'payment' && paymentOrder && (
          <div className="max-w-4xl mx-auto">
            <PaymentCheckoutStep
              tour={selectedTour}
              formData={formData}
              pricing={pricing}
              order={paymentOrder}
              onBack={() => setBookingStep('review')}
              onPaymentSuccess={handlePaymentSuccess}
            />
          </div>
        )}

        {/* STEP 2: Review & Confirm Step */}
        {bookingStep === 'review' && (
          <div className="max-w-3xl mx-auto bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl p-6 sm:p-10 shadow-md space-y-8 animate-fadeIn">
            <div className="border-b border-[#EADBCE] pb-4 space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D9B4B0]" />
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#786761] font-semibold">
                  Step 02 • Review & Confirm
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">
                Review Your Reservation
              </h2>
              <p className="text-xs sm:text-sm text-[#786761]">
                Please verify your journey details, Customer Beauty Profile, and final price before proceeding to payment.
              </p>
            </div>

            {/* 1. Selected Experience Card */}
            <div className="p-5 bg-[#F7F2EC] rounded-2xl border border-[#EADBCE] flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              <div className="w-full sm:w-32 aspect-16/10 rounded-xl overflow-hidden bg-[#ECE4D9] shrink-0">
                <img
                  src={selectedTour.heroImage}
                  alt={selectedTour.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1 flex-1">
                <span className="text-[10px] uppercase tracking-wider text-[#D9B4B0] font-semibold">
                  {selectedTour.category}
                </span>
                <h3 className="text-lg font-editorial font-medium text-[#302B29]">
                  {selectedTour.title}
                </h3>
                <p className="text-xs text-[#786761]">
                  Duration: {selectedTour.duration} • Group: {selectedTour.groupSize}
                </p>
              </div>
            </div>

            {/* 2. Customer Information & Timing Confirmation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-white rounded-2xl border border-[#EADBCE] space-y-1.5">
                <span className="text-[10px] uppercase tracking-wider text-[#786761] font-semibold block">
                  Travel Timing & Party
                </span>
                <div className="text-[#302B29] font-medium text-sm">Date: {formData.date}</div>
                {formData.secondaryDate && (
                  <div className="text-[#786761] text-xs">Secondary: {formData.secondaryDate}</div>
                )}
                <div className="text-[#786761]">{formData.guests} {formData.guests === 1 ? 'Guest' : 'Guests'}</div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-[#EADBCE] space-y-1.5">
                <span className="text-[10px] uppercase tracking-wider text-[#786761] font-semibold block">
                  Lead Traveler Contact & Area
                </span>
                <div className="text-[#302B29] font-medium text-sm">{formData.fullName}</div>
                <div className="text-[#786761]">{formData.whatsapp} • {formData.country}</div>
                {formData.hotelArea && (
                  <div className="text-[#786761] text-xs">Seoul Area: {formData.hotelArea}</div>
                )}
                <div className="text-[#786761] truncate">{formData.email}</div>
              </div>
            </div>

            {/* 3. Customer Beauty Profile Summary */}
            <div className="p-5 bg-white rounded-2xl border border-[#EADBCE] text-xs space-y-3">
              <div className="flex items-center justify-between border-b border-[#EADBCE] pb-2">
                <span className="text-[10px] uppercase tracking-wider text-[#D9B4B0] font-bold">
                  Customer Beauty Profile Summary
                </span>
                <span className="capitalize text-[#786761] font-medium">Focus: {formData.focusCategory}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#786761]">
                <div>
                  <strong>Skin Concerns:</strong>
                  <p className="text-[#302B29]">{formData.skinConcerns.join(', ') || 'General radiance'}</p>
                </div>
                <div>
                  <strong>Personal Color Interest:</strong>
                  <p className="text-[#302B29]">{formData.personalColorInterest}</p>
                </div>
                <div>
                  <strong>Allergies / Sensitivities:</strong>
                  <p className="text-[#302B29]">{formData.allergiesOrSensitivity || 'None reported'}</p>
                </div>
                <div>
                  <strong>Target Budget:</strong>
                  <p className="text-[#302B29]">{formData.budget}</p>
                </div>
              </div>
              {formData.currentSkincareRoutine && (
                <div className="pt-2 border-t border-[#EADBCE] text-[#786761]">
                  <strong>Current Routine:</strong> {formData.currentSkincareRoutine}
                </div>
              )}
            </div>

            {/* 4. Final Price Calculation Confirmation */}
            <div className="p-6 bg-[#F7F2EC] rounded-2xl border border-[#EADBCE] space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#786761] font-semibold block">
                Final Price Confirmation
              </span>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-[#786761]">
                  <span>
                    Package Base Rate ({pricing.isTierPricing ? (pricing.tierLabel || 'Tier') : `${formData.guests} × $${pricing.unitPriceUsd}`})
                  </span>
                  <span className="font-medium text-[#302B29]">${pricing.subtotalUsd.toLocaleString()} USD</span>
                </div>
                <div className="flex justify-between text-[#786761]">
                  <span>Bilingual Private Concierge & Clinic Translation</span>
                  <span className="text-emerald-700 font-medium">Included ($0)</span>
                </div>
                <div className="flex justify-between text-[#786761]">
                  <span>Estimated KRW Equivalent (Toss Gateway)</span>
                  <span className="font-mono text-[#302B29]">≈ ₩{pricing.totalKrw.toLocaleString()} KRW</span>
                </div>
                <div className="pt-3 border-t border-[#EADBCE] flex items-baseline justify-between">
                  <span className="text-sm font-semibold text-[#302B29]">Final Price to Confirm:</span>
                  <div className="text-right">
                    <span className="text-2xl font-editorial font-medium text-[#302B29]">
                      ${pricing.totalUsd.toLocaleString()} USD
                    </span>
                    <span className="text-xs text-[#786761] block font-mono">
                      (₩{pricing.totalKrw.toLocaleString()} KRW)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons: Edit vs Proceed */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setBookingStep('form')}
                className="w-full sm:w-auto px-6 py-3.5 border border-[#EADBCE] text-[#786761] hover:text-[#302B29] text-xs uppercase tracking-[0.16em] font-medium rounded-full bg-white transition-colors flex items-center justify-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Edit Details</span>
              </button>

              <button
                type="button"
                id="confirm-and-proceed-btn"
                onClick={handleConfirmAndProceedToPayment}
                className="w-full sm:flex-1 py-4 bg-[#302B29] hover:bg-[#443E3B] text-[#F7F2EC] rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md flex items-center justify-center gap-2 border border-[#302B29]"
              >
                <span>Confirm & Proceed to Payment</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E9D2CD]" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 1: Main Booking Form Interface */}
        {bookingStep === 'form' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-8 bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl p-6 sm:p-10 shadow-xs">
              <form onSubmit={handleReviewStep} className="space-y-8">
                {/* 1. Experience & Timing */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D9B4B0] font-semibold border-b border-[#EADBCE] pb-2">
                    <span>01. Experience & Preferred Timing</span>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider text-[#786761]">
                      Select Preferred Experience *
                    </label>
                    <select
                      id="main-booking-tour"
                      value={formData.tourId}
                      onChange={(e) => {
                        const tid = e.target.value;
                        const match = tours.find(t => t.id === tid);
                        setFormData({
                          ...formData,
                          tourId: tid,
                          preferredExperience: match ? match.title : tid
                        });
                      }}
                      required
                      className="w-full px-4 py-3 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-sm text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                    >
                      {tours.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.title} — ${t.startingPrice} USD / person ({t.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#786761] mb-1">
                        Preferred Date in Seoul *
                      </label>
                      <input
                        type="date"
                        required
                        id="main-booking-date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-sm text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#786761] mb-1">
                        Secondary Date (Optional)
                      </label>
                      <input
                        type="date"
                        id="main-booking-secondary-date"
                        value={formData.secondaryDate || ''}
                        onChange={(e) => setFormData({ ...formData, secondaryDate: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-sm text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#786761] mb-1">
                        Number of Guests *
                      </label>
                      <div className="flex items-center justify-between px-4 py-2.5 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl">
                        <span className="text-xs text-[#786761]">Guests</span>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, guests: Math.max(1, prev.guests - 1) }))}
                            className="w-7 h-7 rounded-full border border-[#EADBCE] bg-[#FCFAF7] flex items-center justify-center text-sm font-semibold hover:border-[#D9B4B0] text-[#302B29]"
                          >
                            -
                          </button>
                          <span className="text-sm font-semibold text-[#302B29]">{formData.guests}</span>
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, guests: Math.min(8, prev.guests + 1) }))}
                            className="w-7 h-7 rounded-full border border-[#EADBCE] bg-[#FCFAF7] flex items-center justify-center text-sm font-semibold hover:border-[#D9B4B0] text-[#302B29]"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Customer Information (WhatsApp, Email, Origin, Hotel) */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D9B4B0] font-semibold border-b border-[#EADBCE] pb-2">
                    <span>02. Guest Information & Origin</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#786761] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        id="main-booking-name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Samantha Vance"
                        className="w-full px-4 py-3 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-sm text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#786761] mb-1">
                        Country of Origin / Residence *
                      </label>
                      <input
                        type="text"
                        required
                        id="main-booking-country"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="e.g. United States, Australia, UK..."
                        className="w-full px-4 py-3 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-sm text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#786761] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        id="main-booking-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="samantha@example.com"
                        className="w-full px-4 py-3 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-sm text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#786761] mb-1">
                        WhatsApp (with Country Code) *
                      </label>
                      <input
                        type="text"
                        required
                        id="main-booking-whatsapp"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="+1 (415) 555-0199"
                        className="w-full px-4 py-3 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-sm text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#786761] mb-1">
                        Hotel / Area in Seoul
                      </label>
                      <input
                        type="text"
                        id="main-booking-hotel-area"
                        value={formData.hotelArea || ''}
                        onChange={(e) => setFormData({ ...formData, hotelArea: e.target.value })}
                        placeholder="e.g. Gangnam, Myeongdong..."
                        className="w-full px-4 py-3 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-sm text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                      />
                    </div>
                  </div>
                  <span className="text-[11px] text-[#786761] block">
                    We coordinate clinic appointments, meeting points, and bilingual concierge logistics directly via WhatsApp and email.
                  </span>
                </div>

                {/* 3. Customer Beauty Profile: Focus & Concerns */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-[#EADBCE] pb-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#D9B4B0] font-semibold">
                      03. Customer Beauty Profile
                    </span>
                    <span className="text-[11px] text-[#786761]">Diagnostic Intake</span>
                  </div>

                  {/* Focus: Skincare / Makeup / Both */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#786761] mb-2 font-medium">
                      Primary Beauty Focus *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'skincare', label: 'Skincare' },
                        { id: 'makeup', label: 'Makeup' },
                        { id: 'both', label: 'Both (Full Ritual)' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, focusCategory: item.id as any })}
                          className={`py-3 px-3 rounded-xl border text-xs font-medium tracking-wider transition-all text-center ${
                            formData.focusCategory === item.id
                              ? 'bg-[#302B29] text-[#F7F2EC] border-[#302B29] shadow-xs'
                              : 'bg-[#F7F2EC] text-[#786761] border-[#EADBCE] hover:border-[#D9B4B0]'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Skin Concerns */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider text-[#786761]">
                      Key Skin Concerns (Select all that apply)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {SKIN_CONCERNS_OPTIONS.map((concern) => {
                        const isSelected = formData.skinConcerns.includes(concern);
                        return (
                          <button
                            key={concern}
                            type="button"
                            onClick={() => toggleConcern(concern)}
                            className={`text-xs px-3.5 py-2 rounded-full border transition-all ${
                              isSelected
                                ? 'bg-[#302B29] text-[#F7F2EC] border-[#302B29] shadow-xs'
                                : 'bg-[#F7F2EC] text-[#786761] border-[#EADBCE] hover:border-[#D9B4B0]'
                            }`}
                          >
                            {concern}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Current Routine & Allergies */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#786761] mb-1">
                        Current Skincare Routine
                      </label>
                      <textarea
                        rows={2}
                        value={formData.currentSkincareRoutine}
                        onChange={(e) => setFormData({ ...formData, currentSkincareRoutine: e.target.value })}
                        placeholder="e.g. Cleansing oil, hyaluronic serum, ceramide cream..."
                        className="w-full px-4 py-2.5 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-xs text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#786761] mb-1">
                        Allergies or Sensitivity History
                      </label>
                      <textarea
                        rows={2}
                        value={formData.allergiesOrSensitivity}
                        onChange={(e) => setFormData({ ...formData, allergiesOrSensitivity: e.target.value })}
                        placeholder="e.g. Fragrance allergy, retinoid sensitivity, or none"
                        className="w-full px-4 py-2.5 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-xs text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                      />
                    </div>
                  </div>

                  {/* Beauty Interests */}
                  {(formData.focusCategory === 'skincare' || formData.focusCategory === 'both') && (
                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-wider text-[#786761]">
                        Skincare & Treatment Interests
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {BEAUTY_INTERESTS_OPTIONS.map((interest) => {
                          const isSelected = formData.beautyInterests.includes(interest);
                          return (
                            <button
                              key={interest}
                              type="button"
                              onClick={() => toggleBeautyInterest(interest)}
                              className={`text-xs px-3.5 py-2 rounded-full border transition-all ${
                                isSelected
                                  ? 'bg-[#D9B4B0] text-[#302B29] border-[#D9B4B0] font-medium shadow-xs'
                                  : 'bg-[#F7F2EC] text-[#786761] border-[#EADBCE] hover:border-[#D9B4B0]'
                              }`}
                            >
                              {interest}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Makeup Interests */}
                  {(formData.focusCategory === 'makeup' || formData.focusCategory === 'both') && (
                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-wider text-[#786761]">
                        Makeup & Styling Interests
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {MAKEUP_INTERESTS_OPTIONS.map((interest) => {
                          const isSelected = formData.makeupInterests.includes(interest);
                          return (
                            <button
                              key={interest}
                              type="button"
                              onClick={() => toggleMakeupInterest(interest)}
                              className={`text-xs px-3.5 py-2 rounded-full border transition-all ${
                                isSelected
                                  ? 'bg-[#D9B4B0] text-[#302B29] border-[#D9B4B0] font-medium shadow-xs'
                                  : 'bg-[#F7F2EC] text-[#786761] border-[#EADBCE] hover:border-[#D9B4B0]'
                              }`}
                            >
                              {interest}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Personal Color Interest & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#786761] mb-1">
                        Personal Color Interest
                      </label>
                      <select
                        value={formData.personalColorInterest}
                        onChange={(e) => setFormData({ ...formData, personalColorInterest: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-xs text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                      >
                        {PERSONAL_COLOR_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#786761] mb-1">
                        Estimated Budget Level
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-xs text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                      >
                        {BUDGET_OPTIONS.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#786761] mb-1">
                      Special Requests, Flight Notes or Accessibility Needs
                    </label>
                    <textarea
                      rows={2}
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      placeholder="e.g. Hotel pickup details, companion notes, or flight arrival times..."
                      className="w-full px-4 py-2.5 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-xs text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                    />
                  </div>
                </div>

                {/* Submit to Review Button */}
                <div className="pt-4 border-t border-[#EADBCE] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#786761]">
                    <ShieldCheck className="w-4 h-4 text-[#D9B4B0]" />
                    <span>Free cancellation up to 72 hours before start</span>
                  </div>

                  <button
                    type="submit"
                    id="submit-booking-review-btn"
                    className="w-full sm:w-auto px-8 py-4 bg-[#302B29] hover:bg-[#443E3B] text-[#F7F2EC] rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Continue to Price Review</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E9D2CD]" />
                  </button>
                </div>
              </form>
            </div>

            {/* Sidebar Summary Column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl p-6 shadow-xs space-y-6">
                <div className="space-y-3">
                  <div className="aspect-16/10 rounded-2xl overflow-hidden bg-[#ECE4D9]">
                    <img
                      src={selectedTour.heroImage}
                      alt={selectedTour.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#D9B4B0] font-semibold">
                      {selectedTour.category}
                    </span>
                    <h3 className="text-base font-editorial font-medium text-[#302B29]">
                      {selectedTour.title}
                    </h3>
                  </div>
                </div>

                {/* Price Breakdown Preview */}
                <div className="p-4 bg-[#F7F2EC] rounded-2xl space-y-2 text-xs">
                  <div className="flex justify-between text-[#786761]">
                    <span>Rate ({pricing.isTierPricing ? (pricing.tierLabel || 'Package') : `${formData.guests} × $${pricing.unitPriceUsd}`})</span>
                    <span>${pricing.subtotalUsd.toLocaleString()} USD</span>
                  </div>
                  <div className="flex justify-between text-[#786761]">
                    <span>Bilingual Concierge & Tax</span>
                    <span className="text-emerald-700 font-medium">Included ($0)</span>
                  </div>
                  <div className="pt-2 border-t border-[#EADBCE] flex justify-between items-baseline">
                    <span className="font-semibold text-[#302B29]">Total Estimate:</span>
                    <div className="text-right">
                      <div className="text-lg font-editorial font-medium text-[#302B29]">
                        ${pricing.totalUsd.toLocaleString()} USD
                      </div>
                      <div className="text-[10px] text-[#786761]">
                        ≈ ₩{pricing.totalKrw.toLocaleString()} KRW
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust & Policies List */}
                <div className="space-y-2 text-xs text-[#786761] border-t border-[#EADBCE] pt-4">
                  <button
                    type="button"
                    onClick={() => setActivePolicyTab('cancellation')}
                    className="w-full text-left flex items-center justify-between hover:text-[#302B29] transition-colors py-1"
                  >
                    <span>100% Refund (72h Policy)</span>
                    <FileText className="w-3.5 h-3.5 text-[#D9B4B0]" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePolicyTab('privacy')}
                    className="w-full text-left flex items-center justify-between hover:text-[#302B29] transition-colors py-1"
                  >
                    <span>Skin Data Privacy (PIPA Korea)</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D9B4B0]" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePolicyTab('business')}
                    className="w-full text-left flex items-center justify-between hover:text-[#302B29] transition-colors py-1"
                  >
                    <span>Licensed Inbound Agency Details</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#D9B4B0]" />
                  </button>
                </div>

                {/* Official Operator Transparency */}
                <div className="pt-4 border-t border-[#EADBCE] text-[11px] text-[#786761] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[#302B29] font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{BUSINESS_POLICIES.businessInformation.companyName}</span>
                  </div>
                  <p className="text-[10px] text-[#86756F]">{BUSINESS_POLICIES.businessInformation.koreanName} • Rep: {BUSINESS_POLICIES.businessInformation.representative}</p>
                  <p>Tourism License: {BUSINESS_POLICIES.businessInformation.tourismLicenseNumber} | Biz Reg: {BUSINESS_POLICIES.businessInformation.businessRegistrationNumber}</p>
                  <p>{BUSINESS_POLICIES.businessInformation.englishAddress}</p>
                  <div className="pt-1 flex flex-wrap gap-2 text-[#302B29] font-medium">
                    <a href={`tel:${BUSINESS_POLICIES.businessInformation.phone}`} className="hover:underline">Tel: {BUSINESS_POLICIES.businessInformation.phone}</a>
                    <span>•</span>
                    <a href={`mailto:${BUSINESS_POLICIES.businessInformation.email}`} className="hover:underline">{BUSINESS_POLICIES.businessInformation.email}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Embedded Legal Policies Modal */}
      {activePolicyTab && (
        <LegalPoliciesModal
          isOpen={Boolean(activePolicyTab)}
          onClose={() => setActivePolicyTab(null)}
          initialTab={activePolicyTab}
        />
      )}
    </div>
  );
};
