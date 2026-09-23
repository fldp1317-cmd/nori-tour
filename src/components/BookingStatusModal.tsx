import React, { useState } from 'react';
import { X, Search, CheckCircle2, Clock, CreditCard, XCircle, Sparkles, User, Calendar, MapPin, Phone } from 'lucide-react';
import { BookingRecord, BookingStatus } from '../types';
import { findBooking, getStoredBookings } from '../services/bookingManager';
import { BUSINESS_INFORMATION } from '../data/businessPolicies';

interface BookingStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultOrderId?: string;
  onContactConcierge?: () => void;
}

export const BookingStatusModal: React.FC<BookingStatusModalProps> = ({
  isOpen,
  onClose,
  defaultOrderId = '',
  onContactConcierge,
}) => {
  const [query, setQuery] = useState(defaultOrderId);
  const [searchedBooking, setSearchedBooking] = useState<BookingRecord | null>(
    defaultOrderId ? findBooking(defaultOrderId) || null : null
  );
  const [hasSearched, setHasSearched] = useState(Boolean(defaultOrderId));

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const result = findBooking(query);
    setSearchedBooking(result || null);
    setHasSearched(true);
  };

  const getStatusBadge = (status: BookingStatus) => {
    switch (status) {
      case 'Pending':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-medium">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>Pending Review</span>
          </span>
        );
      case 'Confirmed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 text-xs font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Confirmed</span>
          </span>
        );
      case 'Paid':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium">
            <CreditCard className="w-3.5 h-3.5 text-emerald-600" />
            <span>Paid (Toss Verified)</span>
          </span>
        );
      case 'Cancelled':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200 text-xs font-medium">
            <XCircle className="w-3.5 h-3.5 text-rose-600" />
            <span>Cancelled</span>
          </span>
        );
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-800 border border-stone-300 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-stone-600" />
            <span>Completed</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div
      id="booking-status-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto"
    >
      <div
        id="booking-status-modal-container"
        className="relative w-full max-w-2xl bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl shadow-2xl overflow-hidden my-6 flex flex-col"
      >
        {/* Header */}
        <div className="bg-[#302B29] text-[#F7F2EC] px-6 sm:px-8 py-5 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="w-2 h-2 rounded-full bg-[#D9B4B0]" />
              <span className="text-[10px] tracking-[0.24em] uppercase text-[#D9B4B0] font-semibold">
                Guest Service • Nori
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-editorial font-light text-[#F7F2EC]">
              Booking Status Lookup
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Status Lookup"
            className="p-2 text-[#D9B4B0] hover:text-[#F7F2EC] transition-colors rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input Bar */}
        <div className="p-6 sm:p-8 space-y-6">
          <form onSubmit={handleSearch} className="space-y-3">
            <label className="block text-xs uppercase tracking-wider text-[#786761] font-medium">
              Enter Order ID, Email, or WhatsApp
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#786761] absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g. NORI-GLOW-7892 or genevieve.vance@example.com"
                  required
                  className="w-full pl-11 pr-4 py-3 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-sm text-[#302B29] placeholder-[#9B8983] focus:outline-none focus:border-[#D9B4B0]"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-[#302B29] hover:bg-[#443E3B] text-[#F7F2EC] rounded-xl text-xs uppercase tracking-[0.18em] font-medium transition-colors"
              >
                Check Status
              </button>
            </div>
            <p className="text-[11px] text-[#9B8983]">
              Tip: You can test with sample order IDs: <code className="bg-[#EADBCE]/50 px-1 py-0.5 rounded text-[#302B29]">NORI-GLOW-7892</code>, <code className="bg-[#EADBCE]/50 px-1 py-0.5 rounded text-[#302B29]">NORI-COLOR-4318</code>, or <code className="bg-[#EADBCE]/50 px-1 py-0.5 rounded text-[#302B29]">NORI-VIP-9912</code>
            </p>
          </form>

          {/* Search Result */}
          {hasSearched && (
            <div>
              {searchedBooking ? (
                <div className="p-5 sm:p-6 bg-white border border-[#EADBCE] rounded-2xl space-y-4 animate-fadeIn">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EADBCE] pb-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#786761] block">
                        Order Reference
                      </span>
                      <span className="font-mono text-base font-bold text-[#302B29]">
                        {searchedBooking.orderId}
                      </span>
                    </div>
                    <div>
                      {getStatusBadge(searchedBooking.status)}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-[#786761] block">Experience:</span>
                      <strong className="text-[#302B29] font-medium">{searchedBooking.tourTitle}</strong>
                    </div>
                    <div>
                      <span className="text-[#786761] block">Reservation Date:</span>
                      <strong className="text-[#302B29] font-medium">{searchedBooking.date} ({searchedBooking.guests} {searchedBooking.guests === 1 ? 'Guest' : 'Guests'})</strong>
                    </div>
                    <div>
                      <span className="text-[#786761] block">Primary Guest:</span>
                      <span className="text-[#302B29] font-medium">{searchedBooking.customerProfile.fullName} ({searchedBooking.customerProfile.country})</span>
                    </div>
                    <div>
                      <span className="text-[#786761] block">Total Amount:</span>
                      <span className="text-[#302B29] font-semibold">${searchedBooking.priceUsd} USD (≈ ₩{searchedBooking.priceKrw.toLocaleString()} KRW)</span>
                    </div>
                  </div>

                  {/* Customer Beauty Profile Highlights */}
                  <div className="p-4 bg-[#F7F2EC] rounded-xl border border-[#EADBCE] text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-[#D9B4B0] font-bold">
                        Beauty Profile Intake
                      </span>
                      <span className="text-[11px] capitalize text-[#786761]">
                        Focus: {searchedBooking.customerProfile.focusCategory}
                      </span>
                    </div>
                    <div className="text-[#786761] text-[11px]">
                      <strong>Concerns: </strong>{searchedBooking.customerProfile.skinConcerns.join(', ')}
                    </div>
                    {searchedBooking.customerProfile.allergiesOrSensitivity && (
                      <div className="text-[#786761] text-[11px]">
                        <strong>Allergies / Sensitivities: </strong>{searchedBooking.customerProfile.allergiesOrSensitivity}
                      </div>
                    )}
                    {searchedBooking.customerProfile.currentSkincareRoutine && (
                      <div className="text-[#786761] text-[11px]">
                        <strong>Routine: </strong>{searchedBooking.customerProfile.currentSkincareRoutine}
                      </div>
                    )}
                  </div>

                  <div className="pt-2 text-[11px] text-[#786761] flex items-center justify-between">
                    <span>Need to reschedule? Free up to 48h before start.</span>
                    <a
                      href="https://wa.me/821054101387"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#302B29] font-medium underline hover:text-[#D9B4B0]"
                    >
                      WhatsApp Concierge ({BUSINESS_INFORMATION.phone})
                    </a>
                  </div>
                </div>
              ) : (
                <div className="p-6 bg-[#F7F2EC] border border-[#EADBCE] rounded-2xl text-center space-y-2">
                  <p className="text-sm font-medium text-[#302B29]">No reservation found</p>
                  <p className="text-xs text-[#786761]">
                    Please verify your Order ID or contact our concierge via WhatsApp/Phone at {BUSINESS_INFORMATION.phone} or email {BUSINESS_INFORMATION.email}.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
