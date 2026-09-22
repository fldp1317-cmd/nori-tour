import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, Users, Shield, ArrowRight, ArrowLeft, CheckCircle2, FileText, Sparkles } from 'lucide-react';
import { Tour, BookingFormData, CustomerBeautyProfile } from '../types';
import {
  calculateBookingPrice,
  createPaymentOrder,
  PriceBreakdown,
  PaymentOrderDetails,
  PaymentMethodType,
} from '../services/paymentService';
import { PaymentCheckoutStep } from './PaymentCheckoutStep';
import { saveBookingRecord } from '../services/bookingManager';
import { LegalPoliciesModal, PolicyTabId } from './LegalPoliciesModal';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tours: Tour[];
  selectedTourId?: string;
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
  'Bespoke Fragrance Atelier'
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

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  tours,
  selectedTourId,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    tourId: selectedTourId || (tours.length > 0 ? tours[0].id : ''),
    date: '',
    guests: 2,
    fullName: '',
    email: '',
    whatsapp: '',
    country: 'United States',
    focusCategory: 'both',
    skinConcerns: ['Dehydration / Dullness'],
    currentSkincareRoutine: 'Gentle cleanser, hydrating essence, ceramide moisturizer, SPF50+.',
    allergiesOrSensitivity: 'None known.',
    beautyInterests: ['Glass Skin Deep Hydration'],
    makeupInterests: ['Dewy Base & Cushion Matching'],
    personalColorInterest: 'High Interest — Want professional drape diagnosis in Seoul',
    budget: '$600 - $1,200 USD (Signature Clinical & Atelier Tour)',
    preferredExperience: tours.find(t => t.id === selectedTourId)?.title || tours[0]?.title || '',
    specialRequests: '',
    skincareInterests: ['Glass Skin Deep Hydration']
  });

  const [bookingStep, setBookingStep] = useState<'form' | 'review' | 'payment' | 'confirmed'>('form');
  const [paymentOrder, setPaymentOrder] = useState<PaymentOrderDetails | null>(null);
  const [paidMethod, setPaidMethod] = useState<PaymentMethodType>('CARD');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [activePolicyTab, setActivePolicyTab] = useState<PolicyTabId | null>(null);

  useEffect(() => {
    if (selectedTourId) {
      setFormData(prev => {
        const found = tours.find(t => t.id === selectedTourId);
        return {
          ...prev,
          tourId: selectedTourId,
          preferredExperience: found ? found.title : prev.preferredExperience
        };
      });
    } else if (tours.length > 0 && !formData.tourId) {
      setFormData(prev => ({
        ...prev,
        tourId: tours[0].id,
        preferredExperience: tours[0].title
      }));
    }
  }, [selectedTourId, tours]);

  if (!isOpen) return null;

  const currentTour = tours.find(t => t.id === formData.tourId) || tours[0];
  const pricing: PriceBreakdown = calculateBookingPrice(currentTour, formData.guests);

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
    const order = createPaymentOrder(currentTour, formData);
    setPaymentOrder(order);
    setBookingStep('review');
  };

  const handleConfirmAndProceedToPayment = () => {
    if (!paymentOrder && currentTour) {
      setPaymentOrder(createPaymentOrder(currentTour, formData));
    }
    setBookingStep('payment');
  };

  const handlePaymentSuccess = (orderId: string, method: PaymentMethodType) => {
    setConfirmationCode(orderId);
    setPaidMethod(method);
    setBookingStep('confirmed');

    // Save real booking record with customer beauty profile
    const customerProfile: CustomerBeautyProfile = {
      focusCategory: formData.focusCategory,
      skinConcerns: formData.skinConcerns,
      currentSkincareRoutine: formData.currentSkincareRoutine,
      allergiesOrSensitivity: formData.allergiesOrSensitivity,
      beautyInterests: formData.beautyInterests,
      makeupInterests: formData.makeupInterests,
      personalColorInterest: formData.personalColorInterest,
      budget: formData.budget,
      preferredExperience: currentTour.title,
      fullName: formData.fullName,
      whatsapp: formData.whatsapp,
      email: formData.email,
      country: formData.country,
      specialRequests: formData.specialRequests
    };

    saveBookingRecord(
      currentTour,
      customerProfile,
      formData.date,
      formData.guests,
      pricing.totalUsd,
      pricing.totalKrw,
      orderId,
      'Paid',
      method
    );
  };

  const handleReset = () => {
    setBookingStep('form');
    setPaymentOrder(null);
  };

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto"
    >
      <div
        id="booking-modal-container"
        className="relative w-full max-w-4xl bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
      >
        {/* Modal Header */}
        <div className="bg-[#302B29] text-[#F7F2EC] px-6 sm:px-8 py-5 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="w-2 h-2 rounded-full bg-[#D9B4B0]" />
              <span className="text-[10px] tracking-[0.24em] uppercase text-[#D9B4B0] font-semibold">
                {bookingStep === 'form' && 'Step 01 • Reservation & Beauty Profile'}
                {bookingStep === 'review' && 'Step 02 • Review & Confirm Price'}
                {bookingStep === 'payment' && 'Step 03 • Proceed to Payment (Toss v2)'}
                {bookingStep === 'confirmed' && 'Reservation Confirmed'}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-editorial font-light text-[#F7F2EC]">
              {bookingStep === 'confirmed' ? 'Journey Confirmed' : 'Reserve Your Journey'}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-[#D9B4B0] hover:text-[#F7F2EC] transition-colors rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEP 4: Confirmed Order Receipt */}
        {bookingStep === 'confirmed' && (
          <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-center animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#F4E8E5] border border-[#D9B4B0] mx-auto flex items-center justify-center text-[#302B29]">
              <CheckCircle2 className="w-8 h-8 text-[#D9B4B0]" />
            </div>

            <div className="space-y-2 max-w-lg mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Booking Status: Paid (Toss Payments)</span>
              </div>
              <h4 className="text-2xl font-editorial font-light text-[#302B29]">
                Thank You, {formData.fullName}
              </h4>
              <p className="text-xs sm:text-sm text-[#786761] leading-relaxed">
                Your reservation for <strong>{currentTour?.title}</strong> is saved. Our concierge team has received your order and Customer Beauty Profile.
              </p>
            </div>

            <div className="max-w-md mx-auto bg-[#F7F2EC] border border-[#EADBCE] rounded-2xl p-5 text-left space-y-2.5 text-xs">
              <div className="flex items-center justify-between border-b border-[#EADBCE] pb-2">
                <span className="text-[#786761] uppercase tracking-wider text-[10px]">Order ID (Toss Gateway)</span>
                <span className="font-mono text-xs font-bold text-[#302B29] bg-[#EADBCE] px-2 py-0.5 rounded">
                  {confirmationCode || paymentOrder?.orderId || 'NORI-ORDER-CONFIRMED'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#786761]">Date:</span>
                <span className="font-medium text-[#302B29]">{formData.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#786761]">Party:</span>
                <span className="font-medium text-[#302B29]">{formData.guests} Guests</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#786761]">WhatsApp:</span>
                <span className="font-medium text-[#302B29]">{formData.whatsapp}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#786761]">Beauty Focus:</span>
                <span className="font-medium capitalize text-[#302B29]">{formData.focusCategory}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#EADBCE]">
                <span className="font-medium text-[#302B29]">Total Charged:</span>
                <span className="font-editorial text-base font-semibold text-[#302B29]">
                  ${pricing.totalUsd} USD (≈ ₩{pricing.totalKrw.toLocaleString()} KRW)
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-8 py-3 bg-[#302B29] text-[#F7F2EC] text-xs uppercase tracking-[0.18em] font-medium rounded-full hover:bg-[#443E3B] transition-all shadow-xs"
              >
                Close & Return
              </button>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 border border-[#EADBCE] text-[#786761] hover:text-[#302B29] text-xs uppercase tracking-[0.16em] font-medium rounded-full hover:bg-white transition-all"
              >
                New Reservation
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Proceed to Payment Step (Toss Payments v2 Modular Gateway) */}
        {bookingStep === 'payment' && paymentOrder && (
          <div className="p-6 sm:p-8 overflow-y-auto flex-1">
            <PaymentCheckoutStep
              tour={currentTour}
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
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 animate-fadeIn">
            <div className="border-b border-[#EADBCE] pb-3 space-y-1">
              <h4 className="text-xl sm:text-2xl font-editorial font-light text-[#302B29]">
                Review Your Reservation & Final Price
              </h4>
              <p className="text-xs text-[#786761]">
                Please review your travel timing, customer beauty profile, and calculated price before proceeding to payment.
              </p>
            </div>

            {/* Experience Card */}
            <div className="p-4 bg-[#F7F2EC] rounded-2xl border border-[#EADBCE] flex items-center gap-4">
              <img
                src={currentTour.heroImage}
                alt={currentTour.title}
                referrerPolicy="no-referrer"
                className="w-20 h-16 rounded-xl object-cover shrink-0"
              />
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase tracking-wider text-[#D9B4B0] font-semibold">
                  {currentTour.category}
                </span>
                <h5 className="text-base font-editorial font-medium text-[#302B29]">
                  {currentTour.title}
                </h5>
                <p className="text-xs text-[#786761]">
                  {formData.date} • {formData.guests} Guests • {formData.country}
                </p>
              </div>
            </div>

            {/* Customer Beauty Profile Review */}
            <div className="p-4 bg-white rounded-2xl border border-[#EADBCE] text-xs space-y-2">
              <div className="flex justify-between border-b border-[#EADBCE] pb-1.5">
                <span className="text-[10px] uppercase tracking-wider text-[#D9B4B0] font-bold">
                  Customer Beauty Profile
                </span>
                <span className="capitalize text-[#786761]">Focus: {formData.focusCategory}</span>
              </div>
              <p className="text-[#786761]"><strong>Concerns:</strong> {formData.skinConcerns.join(', ') || 'Radiance'}</p>
              <p className="text-[#786761]"><strong>Color Interest:</strong> {formData.personalColorInterest}</p>
              <p className="text-[#786761]"><strong>Allergies:</strong> {formData.allergiesOrSensitivity || 'None reported'}</p>
              <p className="text-[#786761]"><strong>Lead Guest:</strong> {formData.fullName} ({formData.whatsapp})</p>
            </div>

            {/* Final Price Breakdown */}
            <div className="p-5 bg-[#F7F2EC] rounded-2xl border border-[#EADBCE] space-y-2 text-xs">
              <div className="flex justify-between text-[#786761]">
                <span>Rate ({pricing.isTierPricing ? (pricing.tierLabel || 'Tier') : `${formData.guests} × $${pricing.unitPriceUsd}`})</span>
                <span>${pricing.subtotalUsd.toLocaleString()} USD</span>
              </div>
              <div className="flex justify-between text-[#786761]">
                <span>Bilingual Concierge & Tax</span>
                <span className="text-emerald-700 font-medium">Included ($0)</span>
              </div>
              <div className="flex justify-between text-[#786761]">
                <span>Estimated KRW Equivalent</span>
                <span className="font-mono text-[#302B29]">≈ ₩{pricing.totalKrw.toLocaleString()} KRW</span>
              </div>
              <div className="pt-2 border-t border-[#EADBCE] flex items-baseline justify-between">
                <span className="font-semibold text-[#302B29]">Final Price to Confirm:</span>
                <span className="text-2xl font-editorial font-medium text-[#302B29]">
                  ${pricing.totalUsd} USD
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={() => setBookingStep('form')}
                className="px-5 py-3 border border-[#EADBCE] rounded-full text-xs uppercase tracking-wider text-[#786761] hover:text-[#302B29] flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Edit Profile</span>
              </button>

              <button
                type="button"
                id="modal-confirm-and-proceed-btn"
                onClick={handleConfirmAndProceedToPayment}
                className="px-8 py-3.5 bg-[#302B29] hover:bg-[#443E3B] text-[#F7F2EC] rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md flex items-center gap-2"
              >
                <span>Confirm & Proceed to Payment</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E9D2CD]" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 1: Main Form with Full Customer Beauty Profile */}
        {bookingStep === 'form' && (
          <form onSubmit={handleReviewStep} className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
            {/* Experience Selection & Timing */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D9B4B0] font-semibold border-b border-[#EADBCE] pb-2">
                <span>01. Experience & Preferred Timing</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#786761] mb-1.5">
                    Experience *
                  </label>
                  <select
                    id="booking-experience-select"
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
                    className="w-full px-4 py-3 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-sm text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                  >
                    {tours.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.title} (${t.startingPrice} USD)
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#786761] mb-1.5">
                      Date in Seoul *
                    </label>
                    <input
                      type="date"
                      id="booking-date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-3 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-xs sm:text-sm text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#786761] mb-1.5">
                      Guests *
                    </label>
                    <div className="flex items-center justify-between px-3 py-2 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl">
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, guests: Math.max(1, prev.guests - 1) }))}
                        className="w-6 h-6 rounded-full border border-[#EADBCE] bg-white flex items-center justify-center text-xs font-bold text-[#302B29]"
                      >
                        -
                      </button>
                      <span className="text-xs font-semibold text-[#302B29]">{formData.guests}</span>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, guests: Math.min(8, prev.guests + 1) }))}
                        className="w-6 h-6 rounded-full border border-[#EADBCE] bg-white flex items-center justify-center text-xs font-bold text-[#302B29]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guest Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D9B4B0] font-semibold border-b border-[#EADBCE] pb-2">
                <span>02. Guest Information</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#786761] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Jessica Vance"
                    className="w-full px-3 py-2.5 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-xs text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#786761] mb-1">
                    Country *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="United States"
                    className="w-full px-3 py-2.5 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-xs text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#786761] mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jessica@example.com"
                    className="w-full px-3 py-2.5 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-xs text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#786761] mb-1">
                    WhatsApp *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="+1 (415) 555-0199"
                    className="w-full px-3 py-2.5 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-xs text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                  />
                </div>
              </div>
            </div>

            {/* Customer Beauty Profile */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#EADBCE] pb-2">
                <span className="text-xs uppercase tracking-[0.2em] text-[#D9B4B0] font-semibold">
                  03. Customer Beauty Profile
                </span>
                <span className="text-[11px] text-[#786761]">Diagnostic Intake</span>
              </div>

              {/* Focus selector */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#786761] mb-1.5 font-medium">
                  Primary Beauty Focus *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'skincare', label: 'Skincare' },
                    { id: 'makeup', label: 'Makeup' },
                    { id: 'both', label: 'Both (Full Glow)' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, focusCategory: item.id as any })}
                      className={`py-2 px-2 rounded-xl border text-xs font-medium tracking-wider transition-all text-center ${
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
              <div className="space-y-1.5">
                <label className="block text-xs uppercase tracking-wider text-[#786761]">
                  Skin Concerns (Select all that apply)
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {SKIN_CONCERNS_OPTIONS.map((concern) => {
                    const isSelected = formData.skinConcerns.includes(concern);
                    return (
                      <button
                        key={concern}
                        type="button"
                        onClick={() => toggleConcern(concern)}
                        className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                          isSelected
                            ? 'bg-[#302B29] text-[#F7F2EC] border-[#302B29]'
                            : 'bg-[#F7F2EC] text-[#786761] border-[#EADBCE]'
                        }`}
                      >
                        {concern}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Routine & Allergies */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#786761] mb-1">
                    Current Skincare Routine
                  </label>
                  <input
                    type="text"
                    value={formData.currentSkincareRoutine}
                    onChange={(e) => setFormData({ ...formData, currentSkincareRoutine: e.target.value })}
                    placeholder="Cleanser, toner, moisturizer, sunscreen"
                    className="w-full px-3 py-2 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-xs text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#786761] mb-1">
                    Allergies or Sensitivity History
                  </label>
                  <input
                    type="text"
                    value={formData.allergiesOrSensitivity}
                    onChange={(e) => setFormData({ ...formData, allergiesOrSensitivity: e.target.value })}
                    placeholder="Fragrance, retinoids, or none"
                    className="w-full px-3 py-2 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-xs text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                  />
                </div>
              </div>

              {/* Personal Color & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#786761] mb-1">
                    Personal Color Interest
                  </label>
                  <select
                    value={formData.personalColorInterest}
                    onChange={(e) => setFormData({ ...formData, personalColorInterest: e.target.value })}
                    className="w-full px-3 py-2 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-xs text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                  >
                    {PERSONAL_COLOR_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#786761] mb-1">
                    Budget Level
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3 py-2 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-xs text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
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
                  Special Requests / Inquiries
                </label>
                <textarea
                  rows={2}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="Hotel pickup, flight details, or specific cosmetic preferences..."
                  className="w-full px-3 py-2 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-xs text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                />
              </div>
            </div>

            {/* Price Preview & Proceed */}
            <div className="bg-[#F7F2EC] border border-[#EADBCE] p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#786761] block">
                  Estimated Total ({formData.guests} Guests)
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-editorial font-medium text-[#302B29]">
                    ${pricing.totalUsd}
                  </span>
                  <span className="text-xs text-[#786761]">USD (≈ ₩{pricing.totalKrw.toLocaleString()} KRW)</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    type="button"
                    onClick={() => setActivePolicyTab('cancellation')}
                    className="text-[11px] text-[#786761] hover:text-[#302B29] underline"
                  >
                    Cancellation & Refund Policy
                  </button>
                </div>
              </div>

              <button
                type="submit"
                id="booking-submit-btn"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#302B29] hover:bg-[#443E3B] text-[#F7F2EC] rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Review & Final Price</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E9D2CD]" />
              </button>
            </div>
          </form>
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
