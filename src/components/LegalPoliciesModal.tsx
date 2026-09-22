import React, { useState } from 'react';
import { X, ShieldCheck, FileText, AlertCircle, RefreshCw, Building2, ExternalLink } from 'lucide-react';
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
          <span className="text-[10px] uppercase tracking-[0.22em] text-[#786761] font-medium">
            Last Updated: {section.lastUpdated}
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">
          {section.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#786761] mt-1.5 leading-relaxed">
          {section.subtitle}
        </p>
      </div>

      <div className="p-4 bg-[#F4E8E5]/50 border border-[#D9B4B0]/40 rounded-2xl text-xs text-[#302B29] leading-relaxed">
        <strong>Summary: </strong>{section.summary}
      </div>

      <div className="space-y-5 pt-2">
        {section.rules.map((rule, idx) => (
          <div key={idx} className="p-5 bg-white rounded-2xl border border-[#EADBCE] space-y-2">
            <h4 className="text-sm font-semibold text-[#302B29] tracking-wide">
              {rule.heading}
            </h4>
            <p className="text-xs text-[#786761] leading-relaxed">
              {rule.description}
            </p>
            {rule.bullets && rule.bullets.length > 0 && (
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#786761] pt-1">
                {rule.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
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
          <span className="text-[10px] uppercase tracking-[0.22em] text-[#786761] font-medium">
            Registered Entity • Republic of Korea
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">
          Official Business Information
        </h3>
        <p className="text-xs sm:text-sm text-[#786761] mt-1.5 leading-relaxed">
          Full statutory disclosures and tourism licensing under the Ministry of Culture, Sports and Tourism of Korea.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        <div className="p-4 bg-white rounded-2xl border border-[#EADBCE] space-y-1">
          <span className="text-[10px] uppercase tracking-wider text-[#786761] block font-semibold">
            Company Name
          </span>
          <p className="font-semibold text-[#302B29]">{info.companyName}</p>
          <p className="text-[#786761] text-[11px]">Korean Name: {info.koreanName}</p>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-[#EADBCE] space-y-1">
          <span className="text-[10px] uppercase tracking-wider text-[#786761] block font-semibold">
            Representative Director
          </span>
          <p className="font-semibold text-[#302B29]">{info.representative}</p>
          <p className="text-[#786761] text-[11px]">Executive Director, NORI TOUR Co., Ltd.</p>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-[#EADBCE] space-y-1">
          <span className="text-[10px] uppercase tracking-wider text-[#786761] block font-semibold">
            Business Registration Number (사업자등록번호)
          </span>
          <p className="font-mono font-medium text-[#302B29]">{info.businessRegistrationNumber}</p>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-[#EADBCE] space-y-1">
          <span className="text-[10px] uppercase tracking-wider text-[#786761] block font-semibold">
            Tourism Business Registration (관광사업자 등록번호)
          </span>
          <p className="font-medium text-[#302B29]">{info.tourismLicenseNumber}</p>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-[#EADBCE] space-y-1">
          <span className="text-[10px] uppercase tracking-wider text-[#786761] block font-semibold">
            Mail-Order Business Registration (통신판매업신고)
          </span>
          <p className="font-medium text-[#302B29]">{info.mailOrderRegistrationNumber}</p>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-[#EADBCE] space-y-1">
          <span className="text-[10px] uppercase tracking-wider text-[#786761] block font-semibold">
            Official Website
          </span>
          <p className="font-medium text-[#302B29]">
            <a href={info.website} target="_blank" rel="noopener noreferrer" className="hover:underline text-[#302B29]">
              {info.website}
            </a>
          </p>
        </div>
      </div>

      <div className="p-5 bg-[#F7F2EC] rounded-2xl border border-[#EADBCE] space-y-3 text-xs">
        <h4 className="text-xs uppercase tracking-wider text-[#302B29] font-semibold">
          Registered Headquarters & Official Contact
        </h4>
        <div className="space-y-1 text-[#786761]">
          <p><strong>Business Address:</strong> {info.englishAddress}</p>
          <p><strong>Korean Address:</strong> {info.koreanAddress}</p>
        </div>
        <div className="pt-2 border-t border-[#EADBCE] flex flex-wrap gap-4 sm:gap-6 text-[#302B29]">
          <p><strong>Phone:</strong> <a href={`tel:${info.phone}`} className="hover:underline">{info.phone}</a></p>
          <p><strong>Email:</strong> <a href={`mailto:${info.email}`} className="hover:underline">{info.email}</a></p>
          <p><strong>Operating Hours:</strong> {info.operatingHours}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div
      id="legal-policies-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto"
    >
      <div
        id="legal-policies-modal-container"
        className="relative w-full max-w-4xl bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
      >
        {/* Header */}
        <div className="bg-[#302B29] text-[#F7F2EC] px-6 sm:px-8 py-5 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="w-2 h-2 rounded-full bg-[#D9B4B0]" />
              <span className="text-[10px] tracking-[0.24em] uppercase text-[#D9B4B0] font-semibold">
                Customer Protection & Operational Terms
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-editorial font-light text-[#F7F2EC]">
              Policies & Business Registry
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Policies Modal"
            className="p-2 text-[#D9B4B0] hover:text-[#F7F2EC] transition-colors rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-[#F7F2EC] border-b border-[#EADBCE] px-4 sm:px-8 py-2 overflow-x-auto shrink-0 flex items-center gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-full text-xs tracking-wider transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#302B29] text-[#F7F2EC] font-medium shadow-xs'
                    : 'text-[#786761] hover:text-[#302B29] hover:bg-white/60'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {activeTab === 'cancellation' && renderPolicySection(cancellationPolicy)}
          {activeTab === 'refund' && renderPolicySection(refundPolicy)}
          {activeTab === 'privacy' && renderPolicySection(privacyPolicy)}
          {activeTab === 'terms' && renderPolicySection(termsAndConditions)}
          {activeTab === 'business' && renderBusinessInformation(businessInformation)}
        </div>

        {/* Footer actions */}
        <div className="bg-[#F7F2EC] border-t border-[#EADBCE] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 text-xs text-[#786761]">
          <span>NORI TOUR • Inbound Travel Agency Licensed in Seoul, Korea</span>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#302B29] hover:bg-[#443E3B] text-[#F7F2EC] rounded-full text-xs uppercase tracking-wider font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
