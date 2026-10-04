import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, FileText, AlertCircle, RefreshCw, Building2 } from 'lucide-react';
import {
  BUSINESS_POLICIES,
  PolicySection,
  BusinessInformation
} from '../data/businessPolicies';

export type PolicyTabId = 'cancellation' | 'refund' | 'privacy' | 'terms' | 'business';

interface LegalPoliciesModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: PolicyTabId;
}

export const LegalPoliciesModal: React.FC<LegalPoliciesModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'cancellation'
}) => {
  const [activeTab, setActiveTab] = useState<PolicyTabId>(initialTab);

  useEffect(() => {
    if (isOpen && initialTab) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  const {
    businessInformation,
    cancellationPolicy,
    refundPolicy,
    privacyPolicy,
    termsAndConditions
  } = BUSINESS_POLICIES;

  const tabs: { id: PolicyTabId; label: string; icon: React.ReactNode }[] = [
    { id: 'cancellation', label: 'Cancellation Policy', icon: <AlertCircle className="w-4 h-4" /> },
    { id: 'refund', label: 'Refund Policy', icon: <RefreshCw className="w-4 h-4" /> },
    { id: 'privacy', label: 'Privacy & Data', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'terms', label: 'Terms & Conditions', icon: <FileText className="w-4 h-4" /> },
    { id: 'business', label: 'Business Information', icon: <Building2 className="w-4 h-4" /> }
  ];

  const renderPolicySection = (section: PolicySection) => (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#D9B4B0]" />
          <span className="text-[10px] uppercase tracking-[0.22em] text-[#D9B4B0] font-semibold">
            Last Updated: {section.lastUpdated}
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-sans font-bold text-[#F7F2EC]">
          {section.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#BFB3AC] mt-1.5 leading-relaxed font-normal">
          {section.subtitle}
        </p>
      </div>

      {section.summary && (
        <div className="p-4 bg-[#1C1917] border border-[#3D3634] rounded-2xl text-xs text-[#E8DFD7] leading-relaxed whitespace-pre-line shadow-xs font-normal">
          <strong className="block mb-1 text-[#D9B4B0]">Summary</strong>
          {section.summary}
        </div>
      )}

      <div className="space-y-5 pt-2">
        {section.rules.map((rule, idx) => (
          <div key={idx} className="p-5 bg-[#252120] rounded-2xl border border-[#3D3634] space-y-2 shadow-xs">
            <h4 className="text-sm font-semibold text-[#F7F2EC] tracking-wide">
              {rule.heading}
            </h4>
            <p className="text-xs text-[#BFB3AC] leading-relaxed whitespace-pre-line font-normal">
              {rule.description}
            </p>
            {rule.bullets && rule.bullets.length > 0 && (
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#BFB3AC] pt-1">
                {rule.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="whitespace-pre-line leading-relaxed">{bullet}</li>
                ))}
              </ul>
            )}
            {rule.footerDescription && (
              <p className="text-xs text-[#BFB3AC] leading-relaxed whitespace-pre-line pt-1">
                {rule.footerDescription}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderBusinessInformation = (info: BusinessInformation) => (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-[#D9B4B0]" />
          <span className="text-[10px] uppercase tracking-[0.22em] text-[#D9B4B0] font-semibold">
            Registered Entity • Republic of Korea
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-sans font-bold text-[#F7F2EC]">
          Official Business Information
        </h3>
        <p className="text-xs sm:text-sm text-[#BFB3AC] mt-1.5 leading-relaxed font-normal">
          Full statutory disclosures and tourism licensing under the Ministry of Culture, Sports and Tourism of Korea.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        <div className="p-4 bg-[#252120] rounded-2xl border border-[#3D3634] space-y-1">
          <span className="text-[10px] uppercase tracking-wider text-[#BFB3AC] block font-semibold">
            Company Name
          </span>
          <p className="font-semibold text-[#F7F2EC]">{info.companyName}</p>
          <p className="text-[#BFB3AC] text-[11px]">Korean Name: {info.koreanName}</p>
        </div>

        <div className="p-4 bg-[#252120] rounded-2xl border border-[#3D3634] space-y-1">
          <span className="text-[10px] uppercase tracking-wider text-[#BFB3AC] block font-semibold">
            Representative Director
          </span>
          <p className="font-semibold text-[#F7F2EC]">{info.representative}</p>
        </div>

        <div className="p-4 bg-[#252120] rounded-2xl border border-[#3D3634] space-y-1">
          <span className="text-[10px] uppercase tracking-wider text-[#BFB3AC] block font-semibold">
            Business Registration Number (사업자등록번호)
          </span>
          <p className="font-mono font-medium text-[#F7F2EC]">{info.businessRegistrationNumber}</p>
        </div>

        <div className="p-4 bg-[#252120] rounded-2xl border border-[#3D3634] space-y-1">
          <span className="text-[10px] uppercase tracking-wider text-[#BFB3AC] block font-semibold">
            Tourism Business Registration No. (관광사업자 등록번호)
          </span>
          <p className="font-medium text-[#F7F2EC]">{info.tourismLicenseNumber}</p>
        </div>

        <div className="p-4 bg-[#252120] rounded-2xl border border-[#3D3634] space-y-1">
          <span className="text-[10px] uppercase tracking-wider text-[#BFB3AC] block font-semibold">
            Mail-Order Business Registration (통신판매업신고)
          </span>
          <p className="font-medium text-[#F7F2EC]">{info.mailOrderRegistrationNumber}</p>
        </div>

        <div className="p-4 bg-[#252120] rounded-2xl border border-[#3D3634] space-y-1">
          <span className="text-[10px] uppercase tracking-wider text-[#BFB3AC] block font-semibold">
            Official Website
          </span>
          <p className="font-medium text-[#F7F2EC]">
            <a href={info.website} target="_blank" rel="noopener noreferrer" className="hover:underline text-[#D9B4B0] hover:text-[#E9D2CD]">
              {info.website}
            </a>
          </p>
        </div>
      </div>

      <div className="p-5 bg-[#252120] rounded-2xl border border-[#3D3634] space-y-3 text-xs">
        <h4 className="text-xs uppercase tracking-wider text-[#F7F2EC] font-semibold">
          Registered Headquarters & Official Contact
        </h4>
        <div className="space-y-1 text-[#BFB3AC]">
          <p><strong className="text-[#F7F2EC]">Business Address:</strong> {info.englishAddress}</p>
          <p><strong className="text-[#F7F2EC]">Korean Address:</strong> {info.koreanAddress}</p>
        </div>
        <div className="pt-2 border-t border-[#3D3634] flex flex-wrap gap-4 sm:gap-6 text-[#BFB3AC]">
          <p><strong className="text-[#F7F2EC]">Phone:</strong> <a href="https://wa.me/821048295754" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#D9B4B0] hover:text-[#E9D2CD]">{info.phone}</a></p>
          <p><strong className="text-[#F7F2EC]">Email:</strong> <a href={`mailto:${info.email}`} className="hover:underline text-[#D9B4B0] hover:text-[#E9D2CD]">{info.email}</a></p>
          <p><strong className="text-[#F7F2EC]">Operating Hours:</strong> <span className="text-[#BFB3AC]">{info.operatingHours}</span></p>
        </div>
      </div>
    </div>
  );

  return (
    <div
      id="legal-policies-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
    >
      <div
        id="legal-policies-modal-container"
        className="relative w-full max-w-4xl bg-[#1C1917] border border-[#3D3634] rounded-3xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col text-[#F7F2EC]"
      >
        {/* Header */}
        <div className="bg-[#252120] text-[#F7F2EC] px-6 sm:px-8 py-5 flex items-center justify-between shrink-0 border-b border-[#3D3634]">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="w-2 h-2 rounded-full bg-[#D9B4B0]" />
              <span className="text-[10px] tracking-[0.24em] uppercase text-[#D9B4B0] font-semibold">
                Customer Protection & Operational Terms
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#F7F2EC]">
              Policies & Business Registry
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Policies Modal"
            className="p-2 text-[#D9B4B0] hover:text-[#F7F2EC] transition-colors rounded-full hover:bg-white/10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-[#1C1917] border-b border-[#3D3634] px-4 sm:px-8 py-2.5 overflow-x-auto shrink-0 flex items-center gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-[#2E2826] text-[#F7F2EC] font-semibold shadow-xs'
                    : 'text-[#BFB3AC] hover:text-[#F7F2EC] hover:bg-white/5'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-[#1C1917]">
          {activeTab === 'cancellation' && renderPolicySection(cancellationPolicy)}
          {activeTab === 'refund' && renderPolicySection(refundPolicy)}
          {activeTab === 'privacy' && renderPolicySection(privacyPolicy)}
          {activeTab === 'terms' && renderPolicySection(termsAndConditions)}
          {activeTab === 'business' && renderBusinessInformation(businessInformation)}
        </div>

        {/* Footer actions */}
        <div className="bg-[#252120] border-t border-[#3D3634] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 text-xs text-[#BFB3AC]">
          <span>NORI TOUR • Inbound Travel Agency Licensed in Seoul, Korea</span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#2E2826] hover:bg-[#342D2B] text-[#F7F2EC] rounded-full text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
