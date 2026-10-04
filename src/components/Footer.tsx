import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, FileText, Building2, ClipboardList, Sparkles, MessageCircle } from 'lucide-react';
import { NoriLogo } from './NoriLogo';
import { PolicyTabId } from './LegalPoliciesModal';
import { BUSINESS_POLICIES } from '../data/businessPolicies';
import { NORI_WHATSAPP_URL } from './WhatsAppButton';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenBooking: () => void;
  onOpenPoliciesModal?: (tab?: PolicyTabId) => void;
  onOpenBookingStatus?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenBooking,
  onOpenPoliciesModal,
  onOpenBookingStatus,
}) => {
  const [seoulTime, setSeoulTime] = useState('');

  useEffect(() => {
    const updateSeoulTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Seoul',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setSeoulTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateSeoulTime();
    const interval = setInterval(updateSeoulTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePolicyClick = (tab: PolicyTabId) => {
    if (onOpenPoliciesModal) {
      onOpenPoliciesModal(tab);
    }
  };

  return (
    <footer id="main-footer" className="bg-[#1C1917] text-[#F7F2EC] pt-20 pb-12 border-t border-[#3D3634]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Upper Editorial Newsletter & Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#3D3634]">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2A2523] border border-[#3D3634]">
              <span className="w-2 h-2 rounded-full bg-[#D9B4B0]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#D9B4B0] font-medium">
                NORI TOUR • SEOUL, KOREA
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight leading-tight text-white">
              Find your glow. <span className="text-[#E9D2CD]">Play your way.</span>
            </h2>
            <p className="text-sm text-[#D9B4B0] font-light max-w-xl leading-relaxed">
              Personalized Korea travel and K-beauty experiences, designed around you. Tell us what you need, and NORI creates a personalized plan and quote.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 bg-[#D9B4B0] text-[#1C1917] hover:bg-[#E9D2CD] transition-all rounded-full text-xs uppercase tracking-[0.18em] font-semibold flex items-center justify-center gap-2 shadow-xs group cursor-pointer active:scale-[0.98]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#1C1917] group-hover:scale-110 transition-transform duration-300" />
                <span>PLAN MY TRIP</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab('journal');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-[#252120] hover:bg-[#2E2826] text-[#F7F2EC] hover:border-[#D9B4B0] border border-[#3D3634] transition-all rounded-full text-xs uppercase tracking-[0.16em] font-medium flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.98]"
              >
                <span>NORI's Journal</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D9B4B0] group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
            <div className="mt-1 flex items-center gap-2 text-[11px] text-[#BAAEA8] tracking-wider">
              <Clock className="w-3.5 h-3.5 text-[#D9B4B0]" />
              <span>Current Time in Seoul (KST): <strong className="text-[#F7F2EC]">{seoulTime || '09:00 AM'}</strong></span>
            </div>
          </div>
        </div>

        {/* Middle Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 py-16">
          {/* Col 1: Brand & Business Registration */}
          <div className="col-span-2 space-y-4">
            <NoriLogo variant="light" size="md" showSubtitle={true} />
            <p className="text-xs leading-relaxed text-[#D9B4B0] font-light max-w-sm pt-1">
              NORI TOUR crafts elevated Korean beauty, wellness, and cultural journeys for international travelers. Rooted in "Nori" (playful discovery), comfort, and honest guidance.
            </p>
            <div className="pt-2 text-xs text-[#BAAEA8] space-y-1">
              <p className="text-[#E9D2CD] font-medium">
                NORI TOUR Co., Ltd. (주식회사 노리투어)
              </p>
              <p>Representative Director: Seoha Park</p>
              <p>Business Registration: {BUSINESS_POLICIES.businessInformation.businessRegistrationNumber}</p>
              <p>Tourism Business Registration No. {BUSINESS_POLICIES.businessInformation.tourismLicenseNumber}</p>
              <p>Mail-Order Business: {BUSINESS_POLICIES.businessInformation.mailOrderRegistrationNumber}</p>
              <p>Address: {BUSINESS_POLICIES.businessInformation.englishAddress}</p>
              <p className="text-[11px] text-[#A89C96]">{BUSINESS_POLICIES.businessInformation.koreanAddress}</p>
              <p>Phone: <a href="https://wa.me/821048295754" target="_blank" rel="noopener noreferrer" className="hover:text-[#F7F2EC] transition-colors">{BUSINESS_POLICIES.businessInformation.phone}</a></p>
              <p>Email: {BUSINESS_POLICIES.businessInformation.email}</p>
              <p>Website: <a href={BUSINESS_POLICIES.businessInformation.website} target="_blank" rel="noopener noreferrer" className="hover:text-[#F7F2EC] underline underline-offset-2">{BUSINESS_POLICIES.businessInformation.website}</a></p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.22em] text-[#D9B4B0] font-semibold">
              Explore NORI
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E9D2CD]">
              <li>
                <button
                  onClick={() => { setActiveTab('home'); window.scrollTo(0, 0); }}
                  className="hover:text-[#F7F2EC] transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('arrange'); window.scrollTo(0, 0); }}
                  className="hover:text-[#F7F2EC] transition-colors text-left"
                >
                  What We Can Arrange
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('plan'); window.scrollTo(0, 0); }}
                  className="hover:text-[#F7F2EC] transition-colors text-left"
                >
                  Plan My Trip
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('journal'); window.scrollTo(0, 0); }}
                  className="hover:text-[#F7F2EC] transition-colors text-left"
                >
                  NORI's Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('reviews'); window.scrollTo(0, 0); }}
                  className="hover:text-[#F7F2EC] transition-colors text-left"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('about'); window.scrollTo(0, 0); }}
                  className="hover:text-[#F7F2EC] transition-colors text-left"
                >
                  About NORI
                </button>
              </li>
              <li className="pt-1">
                <a
                  href={NORI_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#D9B4B0] hover:text-[#F7F2EC] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Contact / WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Business Operation Policies */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.22em] text-[#D9B4B0] font-semibold">
              Policies & Service
            </h4>
            <ul className="space-y-2 text-xs text-[#E9D2CD]">
              <li>
                <button
                  onClick={() => handlePolicyClick('cancellation')}
                  className="hover:text-[#F7F2EC] transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Cancellation Policy</span>
                  <FileText className="w-3 h-3 text-[#D9B4B0]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePolicyClick('refund')}
                  className="hover:text-[#F7F2EC] transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Refund Policy</span>
                  <FileText className="w-3 h-3 text-[#D9B4B0]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePolicyClick('privacy')}
                  className="hover:text-[#F7F2EC] transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Privacy Policy (PIPA)</span>
                  <FileText className="w-3 h-3 text-[#D9B4B0]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePolicyClick('terms')}
                  className="hover:text-[#F7F2EC] transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Terms & Conditions</span>
                  <FileText className="w-3 h-3 text-[#D9B4B0]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePolicyClick('business')}
                  className="hover:text-[#F7F2EC] transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Business Information</span>
                  <Building2 className="w-3 h-3 text-[#D9B4B0]" />
                </button>
              </li>
              {onOpenBookingStatus && (
                <li className="pt-1">
                  <button
                    onClick={onOpenBookingStatus}
                    className="text-[#D9B4B0] hover:text-[#F7F2EC] transition-colors text-left font-medium flex items-center gap-1"
                  >
                    <ClipboardList className="w-3.5 h-3.5" />
                    <span>Track Reservation Status</span>
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Lower Legal & Aesthetic Sign-off */}
        <div className="pt-8 border-t border-[#3D3634] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#BAAEA8]">
          <p>© 2026 NORI TOUR Co., Ltd. All rights reserved. Licensed Inbound Tourism Agency, Seoul.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => handlePolicyClick('privacy')}
              className="hover:text-[#F7F2EC] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handlePolicyClick('terms')}
              className="hover:text-[#F7F2EC] transition-colors"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => handlePolicyClick('cancellation')}
              className="hover:text-[#F7F2EC] transition-colors"
            >
              Cancellation & Refund
            </button>
            <button
              onClick={() => handlePolicyClick('business')}
              className="hover:text-[#F7F2EC] transition-colors"
            >
              Business Information
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
