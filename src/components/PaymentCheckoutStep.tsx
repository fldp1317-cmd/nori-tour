import React, { useState } from 'react';
import { ShieldCheck, CreditCard, Lock, Sparkles, CheckCircle2, ArrowLeft, ExternalLink, AlertCircle } from 'lucide-react';
import { Tour, BookingFormData } from '../types';
import {
  PaymentOrderDetails,
  PaymentMethodType,
  PriceBreakdown,
  TOSS_CLIENT_CONFIG,
  initiateTossPaymentsV2,
} from '../services/paymentService';

interface PaymentCheckoutStepProps {
  tour: Tour;
  formData: BookingFormData;
  pricing: PriceBreakdown;
  order: PaymentOrderDetails;
  onBack: () => void;
  onPaymentSuccess: (orderId: string, method: PaymentMethodType) => void;
}

export const PaymentCheckoutStep: React.FC<PaymentCheckoutStepProps> = ({
  tour,
  formData,
  pricing,
  order,
  onBack,
  onPaymentSuccess,
}) => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethodType>('CARD');
  const [currencyView, setCurrencyView] = useState<'USD' | 'KRW'>('USD');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleProceedPayment = async () => {
    setIsProcessing(true);
    setErrorMessage(null);

    try {
      // Calls the modular Toss Payments v2 adapter
      const updatedOrder = { ...order, paymentMethod: selectedMethod };
      const result = await initiateTossPaymentsV2(updatedOrder);

      if (result.success) {
        onPaymentSuccess(result.orderId, selectedMethod);
      } else {
        setErrorMessage(result.message || 'Payment simulation failed.');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'An unexpected error occurred.');
    } finally {
      setIsProcessing(false);
    }
  };

  const paymentMethods: { id: PaymentMethodType; label: string; badge: string; desc: string }[] = [
    {
      id: 'CARD',
      label: 'Credit / Debit Card',
      badge: 'Visa • Mastercard • Amex • JCB',
      desc: 'International and Korean domestic credit cards accepted with 3D Secure verification.',
    },
    {
      id: 'TOSS_PAY',
      label: 'Toss Pay',
      badge: '토스페이 간편결제',
      desc: 'One-touch simple checkout via Toss App with instant verification.',
    },
    {
      id: 'INTERNATIONAL_CARD',
      label: 'Global Travel Card',
      badge: 'Zero FX Surcharge',
      desc: 'Optimized for international travelers with multi-currency dynamic conversion.',
    },
    {
      id: 'TRANSFER',
      label: 'Korean Bank Wire / Virtual Account',
      badge: '가상계좌 발급',
      desc: 'Real-time account transfer with tax refund receipts for Korean residents and travelers.',
    },
  ];

  return (
    <div id="toss-payment-checkout-step" className="space-y-8 animate-fadeIn">
      {/* Header & Architecture Status Pill */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EADBCE] pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#786761] font-semibold">
              Step 03 • Payment Gateway
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">
            Proceed to Payment
          </h2>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF2FF] border border-[#C7D2FE] text-[#3730A3] text-xs self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-[#4F46E5] animate-pulse" />
          <span className="font-mono text-[11px] font-medium tracking-tight">Toss Payments v2 Ready</span>
        </div>
      </div>

      {/* Main Grid: Order Summary + Toss Payments Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Toss Payments Integration Container */}
        <div className="lg:col-span-7 space-y-6">
          {/* Security Notice Banner */}
          <div className="p-4 bg-[#FCFAF7] border border-[#EADBCE] rounded-2xl flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
            <div className="text-xs text-[#786761] leading-relaxed">
              <span className="font-semibold text-[#302B29] block">
                Toss Payments SDK v2 Modular Gateway
              </span>
              <span>
                Ready for client SDK activation. Live payments are currently disabled in preview mode. All booking parameters and idempotency tokens are pre-formatted.
              </span>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="space-y-3">
            <label className="block text-xs uppercase tracking-wider text-[#786761] font-medium">
              Select Payment Method
            </label>
            <div className="space-y-2.5">
              {paymentMethods.map((m) => {
                const isSelected = selectedMethod === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setSelectedMethod(m.id)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-start justify-between gap-3 ${
                      isSelected
                        ? 'bg-white border-[#3B82F6] ring-2 ring-[#3B82F6]/20 shadow-xs'
                        : 'bg-[#FCFAF7] border-[#EADBCE] hover:border-[#D9B4B0]'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-[#302B29]">{m.label}</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#F7F2EC] text-[#786761] border border-[#EADBCE]">
                          {m.badge}
                        </span>
                      </div>
                      <p className="text-xs text-[#786761] font-light leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected ? 'border-[#3B82F6] bg-[#3B82F6] text-white' : 'border-[#D1C7BD]'
                      }`}
                    >
                      {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Security & Client Key Transparency (No secret keys) */}
          <div className="p-4 bg-[#F7F2EC] rounded-2xl border border-[#EADBCE] text-[11px] text-[#786761] space-y-1.5">
            <div className="flex items-center gap-2 text-[#302B29] font-medium">
              <Lock className="w-3.5 h-3.5 text-[#302B29]" />
              <span>Zero Frontend Secrets Guarantee</span>
            </div>
            <p>
              Only public Toss Payments client keys are referenced in browser logic. Transaction settlement and refunds will execute strictly via backend webhooks using server-side credentials.
            </p>
          </div>

          {errorMessage && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <button
              type="button"
              id="proceed-to-toss-payment-btn"
              onClick={handleProceedPayment}
              disabled={isProcessing}
              className="w-full py-4 bg-[#302B29] hover:bg-[#443E3B] text-[#F7F2EC] rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md flex items-center justify-center gap-2 group border border-[#302B29] disabled:opacity-60"
            >
              {isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-[#D9B4B0] border-t-transparent rounded-full animate-spin" />
                  <span>Connecting Toss Payments Gateway...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-[#E9D2CD] group-hover:rotate-12 transition-transform" />
                  <span>
                    Proceed to Payment (
                    {currencyView === 'USD'
                      ? `$${pricing.totalUsd.toLocaleString()} USD`
                      : `₩${pricing.totalKrw.toLocaleString()} KRW`}
                    )
                  </span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onBack}
              disabled={isProcessing}
              className="w-full py-2.5 text-xs text-[#786761] hover:text-[#302B29] transition-colors flex items-center justify-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Booking Review</span>
            </button>
          </div>
        </div>

        {/* Right: Verified Order & Pricing Confirmation */}
        <div className="lg:col-span-5 bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl p-6 sm:p-7 space-y-6 shadow-xs">
          <div>
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#D9B4B0] font-semibold block mb-1">
              Confirmed Order Summary
            </span>
            <h3 className="text-xl font-editorial font-light text-[#302B29]">
              {tour.title}
            </h3>
          </div>

          {/* Image & Key Badges */}
          <div className="aspect-16/9 rounded-2xl overflow-hidden bg-[#ECE4D9] relative">
            <img
              src={tour.heroImage}
              alt={tour.title}
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80';
              }}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#F7F2EC]/95 backdrop-blur-md rounded-full text-[10px] font-medium text-[#302B29]">
              {tour.duration} • {tour.category}
            </div>
          </div>

          {/* Customer & Booking Details */}
          <div className="space-y-2 text-xs border-b border-[#EADBCE] pb-4">
            <div className="flex justify-between py-1 border-b border-[#EADBCE]/60">
              <span className="text-[#786761]">Date</span>
              <span className="font-medium text-[#302B29]">{formData.date}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#EADBCE]/60">
              <span className="text-[#786761]">Party Size</span>
              <span className="font-medium text-[#302B29]">
                {formData.guests} {formData.guests === 1 ? 'Guest' : 'Guests'}
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#EADBCE]/60">
              <span className="text-[#786761]">Lead Traveler</span>
              <span className="font-medium text-[#302B29]">{formData.fullName}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#EADBCE]/60">
              <span className="text-[#786761]">WhatsApp</span>
              <span className="font-medium text-[#302B29]">{formData.whatsapp}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-[#786761]">Email</span>
              <span className="font-medium text-[#302B29] truncate max-w-[180px]">{formData.email}</span>
            </div>
          </div>

          {/* Pricing Breakdown with Currency View Switcher */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-[#786761] font-medium">
                Final Pricing
              </span>
              <div className="inline-flex rounded-lg bg-[#F7F2EC] p-0.5 border border-[#EADBCE] text-[11px]">
                <button
                  type="button"
                  onClick={() => setCurrencyView('USD')}
                  className={`px-2.5 py-0.5 rounded-md font-medium transition-colors ${
                    currencyView === 'USD' ? 'bg-white text-[#302B29] shadow-2xs' : 'text-[#786761]'
                  }`}
                >
                  USD ($)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrencyView('KRW')}
                  className={`px-2.5 py-0.5 rounded-md font-medium transition-colors ${
                    currencyView === 'KRW' ? 'bg-white text-[#302B29] shadow-2xs' : 'text-[#786761]'
                  }`}
                >
                  KRW (₩)
                </button>
              </div>
            </div>

            <div className="p-4 bg-[#F7F2EC] rounded-2xl space-y-2 text-xs">
              <div className="flex justify-between text-[#786761]">
                <span>Rate ({pricing.isTierPricing ? (pricing.tierLabel || 'Package') : `${formData.guests} × $${pricing.unitPriceUsd}`})</span>
                <span>${pricing.subtotalUsd.toLocaleString()} USD</span>
              </div>
              <div className="flex justify-between text-[#786761]">
                <span>Bilingual Concierge & Tax</span>
                <span className="text-emerald-700 font-medium">Included ($0)</span>
              </div>
              <div className="pt-2 border-t border-[#EADBCE] flex items-baseline justify-between">
                <span className="text-[#302B29] font-medium">Final Charge Amount:</span>
                <div className="text-right">
                  <div className="text-xl font-editorial font-medium text-[#302B29]">
                    {currencyView === 'USD'
                      ? `$${pricing.totalUsd.toLocaleString()} USD`
                      : `₩${pricing.totalKrw.toLocaleString()} KRW`}
                  </div>
                  <div className="text-[11px] text-[#9B8983]">
                    {currencyView === 'USD'
                      ? `≈ ₩${pricing.totalKrw.toLocaleString()} KRW`
                      : `≈ $${pricing.totalUsd.toLocaleString()} USD`}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Idempotent Order ID */}
          <div className="text-[10px] text-[#9B8983] font-mono text-center truncate pt-1">
            Order ID: {order.orderId}
          </div>
        </div>
      </div>
    </div>
  );
};
