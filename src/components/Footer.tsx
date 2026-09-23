import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowRight, Clock, FileText, Building2, ClipboardList } from 'lucide-react';
import { NoriLogo } from './NoriLogo';
import { PolicyTabId } from './LegalPoliciesModal';
import { BUSINESS_POLICIES } from '../data/businessPolicies';

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
    <footer id="main-footer" className="bg-[#302B29] text-[#F7F2EC] pt-20 pb-12 border-t border-[#443E3B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Upper Editorial Newsletter & Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#443E3B]">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#443E3B]/60 border border-[#524B47]">
              <span className="w-2 h-2 rounded-full bg-[#D9B4B0]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#D9B4B0] font-medium">
                The Seoul Beauty Dispatch • Nori
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light tracking-wide leading-tight text-[#F7F2EC]">
              Curated Korean beauty and wellness, all in one place.
            </h2>
            <p className="text-sm text-[#D9B4B0] font-light max-w-xl leading-relaxed">
              Seasonal skincare guides from Cheongdam clinics, mindful Hanok retreats, and personal travel tips before visiting Seoul.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end">
            <button
              onClick={() => {
                setActiveTab('journal');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-[#D9B4B0] text-[#302B29] hover:bg-[#E9D2CD] transition-all rounded-full text-xs uppercase tracking-[0.18em] font-semibold flex items-center justify-center gap-2 shadow-xs group"
            >
              <span>Read the Journal</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#302B29] group-hover:translate-x-0.5 transition-transform" />
            </button>
            <div className="mt-4 flex items-center gap-2 text-[11px] text-[#9B8983] tracking-wider">
              <Clock className="w-3.5 h-3.5 text-[#D9B4B0]" />
              <span>Current Time in Seoul (KST): <strong className="text-[#F7F2EC]">{seoulTime || '09:00 AM'}</strong></span>
            </div>
          </div>
        </div>

        {/* Middle Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 py-16">
          {/* Col 1: Brand & Business Registration */}
          <div className="col-span-2 space-y-4">
            <NoriLogo variant="light" size="md" showSubtitle={true} />
            <p className="text-xs leading-relaxed text-[#D9B4B0] font-light max-w-sm pt-1">
              NORI TOUR crafts elevated Korean beauty, wellness, and cultural journeys for international travelers. Rooted in "Nori" (playful discovery), comfort, and honest guidance.
            </p>
            <div className="pt-2 text-xs text-[#9B8983] space-y-1">
              <p className="text-[#E9D2CD] font-medium">
                {BUSINESS_POLICIES.businessInformation.companyName} ({BUSINESS_POLICIES.businessInformation.koreanName})
              </p>
              <p>Representative Director: {BUSINESS_POLICIES.businessInformation.representative}</p>
              <p>Business Registration: {BUSINESS_POLICIES.businessInformation.businessRegistrationNumber}</p>
              <p>Tourism Business Registration: {BUSINESS_POLICIES.businessInformation.tourismLicenseNumber}</p>
              <p>Mail-Order Business: {BUSINESS_POLICIES.businessInformation.mailOrderRegistrationNumber}</p>
              <p>Address: {BUSINESS_POLICIES.businessInformation.englishAddress}</p>
              <p className="text-[11px] text-[#86756F]">{BUSINESS_POLICIES.businessInformation.koreanAddress}</p>
              <p>Phone: {BUSINESS_POLICIES.businessInformation.phone}</p>
              <p>Email: {BUSINESS_POLICIES.businessInformation.email}</p>
              <p>Website: <a href={BUSINESS_POLICIES.businessInformation.website} target="_blank" rel="noopener noreferrer" className="hover:text-[#F7F2EC] underline underline-offset-2">{BUSINESS_POLICIES.businessInformation.website}</a></p>
            </div>
          </div>

          {/* Col 2: Experiences */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.22em] text-[#D9B4B0] font-semibold">
              Experiences
            </h4>
            <ul className="space-y-2 text-xs text-[#E9D2CD]">
              <li>
                <button
                  onClick={() => { setActiveTab('experiences'); window.scrollTo(0, 0); }}
                  className="hover:text-[#F7F2EC] transition-colors text-left"
                >
                  Cheongdam Glass Skin Clinic
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('experiences'); window.scrollTo(0, 0); }}
                  className="hover:text-[#F7F2EC] transition-colors text-left"
                >
                  NORI Glow Day (Signature)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('experiences'); window.scrollTo(0, 0); }}
                  className="hover:text-[#F7F2EC] transition-colors text-left"
                >
                  Personal Color Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('experiences'); window.scrollTo(0, 0); }}
                  className="hover:text-[#F7F2EC] transition-colors text-left"
                >
                  Hanok Head Spa & Tea Ritual
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('experiences'); window.scrollTo(0, 0); }}
                  className="hover:text-[#F7F2EC] transition-colors text-left"
                >
                  Private VIP Concierge
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Journal & Stories */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.22em] text-[#D9B4B0] font-semibold">
              Journal & Stories
            </h4>
            <ul className="space-y-2 text-xs text-[#E9D2CD]">
              <li>
                <button
                  onClick={() => { setActiveTab('journal'); window.scrollTo(0, 0); }}
                  className="hover:text-[#F7F2EC] transition-colors text-left"
                >
                  The Beauty Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('about'); window.scrollTo(0, 0); }}
                  className="hover:text-[#F7F2EC] transition-colors text-left"
                >
                  Our Story & Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('reviews'); window.scrollTo(0, 0); }}
                  className="hover:text-[#F7F2EC] transition-colors text-left"
                >
                  Guest Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('about'); window.scrollTo(0, 0); }}
                  className="hover:text-[#F7F2EC] transition-colors text-left"
                >
                  Honest Guidance Promise
                </button>
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
        <div className="pt-8 border-t border-[#443E3B] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#9B8983]">
          <p>© {new Date().getFullYear()} NORI TOUR Co., Ltd. (주식회사 노리투어). All rights reserved. Licensed Inbound Tourism Agency, Seoul.</p>
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
