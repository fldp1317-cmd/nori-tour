import React, { useState } from 'react';
import {
  Sparkles,
  ShieldCheck,
  Heart,
  Compass,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sliders,
} from 'lucide-react';
import { BUSINESS_POLICIES } from '../data/businessPolicies';

interface AboutPageProps {
  onBookExperience: () => void;
}

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'Is NORI TOUR a fixed-package tour agency?',
    answer:
      'No. NORI TOUR does not sell rigid, one-size-fits-all tour packages. We are a personalized Korea travel and K-beauty planning service. You tell us what you want to experience—from airport transfers and private guiding to skincare shopping, personal color analysis, or beauty consultations—and we build a custom plan and quote around you.',
  },
  {
    question: 'How does the planning and booking process work?',
    answer:
      'Start by submitting a request through our Plan My Trip form. No payment is required when submitting your request. Our team reviews your travel dates, preferences, and interests, then contacts you via WhatsApp or email with a personalized itinerary proposal and quote. Your booking is only confirmed once the plan, pricing, and payment are agreed upon.',
  },
  {
    question: 'Can I request only beauty experiences, or only travel arrangements?',
    answer:
      'Yes. Every itinerary is built around what you actually need. Whether you only want help navigating K-beauty experiences in Seoul, or you want end-to-end ground support including airport transfers, a private vehicle, hotel assistance, and local activities, you can choose as much or as little as fits your trip.',
  },
  {
    question: 'Does NORI arrange international flights to Korea?',
    answer:
      'NORI specializes in ground arrangements within Korea. International airfare is not included or arranged, though we are happy to coordinate Incheon or Gimpo airport pickups and drop-offs around your flight schedule.',
  },
  {
    question: 'How does NORI approach beauty treatments and clinical consultations?',
    answer:
      'We believe in honest, pressure-free guidance—sometimes the best recommendation is "You don\'t need it." When travelers request dermatology or aesthetic clinic coordination, NORI assists with scheduling and interpretation support. All medical advice, diagnoses, and treatments are provided directly by licensed medical professionals.',
  },
];

export const AboutPage: React.FC<AboutPageProps> = ({ onBookExperience }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div id="about-page" className="w-full pt-32 pb-24 bg-[#F7F2EC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Title Banner */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCFAF7] border border-[#EADBCE]">
            <span className="w-2 h-2 rounded-full bg-[#D9B4B0]" />
            <span className="text-[11px] uppercase tracking-[0.26em] text-[#786761] font-medium">
              ABOUT NORI TOUR
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-editorial font-light text-[#302B29] tracking-tight leading-[1.12]">
            Personal, playful, and <span className="italic font-normal text-[#786761]">designed around you.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#786761] font-light leading-relaxed max-w-2xl mx-auto">
            NORI TOUR creates personalized Korea travel and K-beauty experiences for international travelers — combining thoughtful ground arrangements with honest local guidance.
          </p>
        </div>

        {/* Who We Are & How We Work */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 pb-20 border-b border-[#EADBCE]">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D9B4B0] font-semibold block">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-editorial font-light text-[#302B29] leading-tight">
              Built around your trip, not a pre-made catalog.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#786761] font-light leading-relaxed">
              <p>
                Inspired by the Korean word <span className="font-editorial italic font-medium text-[#302B29]">“놀이” (nori)</span>, meaning play, NORI was created to help travelers explore Korea and K-beauty with curiosity, ease, and no unnecessary pressure.
              </p>
              <p>
                Instead of asking you to fit your schedule into a fixed group tour or a pre-bundled package, we start by listening to what you want to experience, your travel pace, and what kind of support would make your time in Korea smoother.
              </p>
              <p>
                From private airport transfers, guiding, and hotel support to K-beauty shopping, personal color, hair, and aesthetic care coordination, we help put the pieces together in a way that feels genuinely yours.
              </p>
            </div>

            <div className="pt-4 border-t border-[#EADBCE]/80 space-y-0.5">
              <p className="text-sm font-editorial font-medium text-[#302B29]">
                Seoha Park (Lucy)
              </p>
              <p className="text-xs text-[#786761] font-light tracking-wide">
                Founder &amp; Representative Director
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-16/10 rounded-3xl overflow-hidden shadow-md bg-[#ECE4D9] border border-[#EADBCE]">
              <img
                src="/src/assets/images/about_nori_editorial_hero_1790649547011.jpg"
                alt="Personalized Korea travel planning and K-beauty curation in Seoul"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Beauty Expertise Editorial Section */}
        <div className="mb-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#FCFAF7] border border-[#EADBCE] shadow-xs">
            <div className="max-w-3xl mx-auto space-y-5">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D9B4B0] font-semibold block">
                BEAUTY EXPERTISE
              </span>
              <h2 className="text-3xl sm:text-4xl font-editorial font-light text-[#302B29] leading-tight">
                Beauty knowledge, shaped by real conversations.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#786761] font-light leading-relaxed pt-1">
                <p>
                  NORI TOUR is led by Seoha Park (Lucy), who holds the highest-level Cosmetics Specialist qualification (Level 1) and has hands-on experience working in a K-beauty curation retail environment.
                </p>
                <p>
                  Through assisting many international customers with skincare and cosmetic shopping, she gained practical experience listening to different skin concerns, routines, preferences, and budgets — and helping each customer navigate Korea’s wide range of beauty products with greater confidence.
                </p>
                <p>
                  That experience continues to shape NORI’s approach today: thoughtful guidance, personalized recommendations, and an honest belief that more is not always better.
                </p>
                <p>
                  For NORI, K-beauty is not about following every trend. It is about helping each guest understand their options and discover what genuinely makes sense for them.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Philosophy Pillars */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase tracking-[0.28em] text-[#D9B4B0] font-medium block">
              Our Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#302B29]">
              What Guides Every Plan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 sm:p-10 bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl space-y-4 hover:border-[#D9B4B0] transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#F4E8E5] flex items-center justify-center text-[#D9B4B0]">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-editorial font-light text-[#302B29]">
                Personalized over packaged.
              </h3>
              <p className="text-xs sm:text-sm text-[#786761] leading-relaxed font-light">
                Every traveler has a different rhythm. Choose only the ground arrangements, local activities, and beauty experiences you actually want—and skip the rest.
              </p>
            </div>

            <div className="p-8 sm:p-10 bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl space-y-4 hover:border-[#D9B4B0] transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#F4E8E5] flex items-center justify-center text-[#D9B4B0]">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-editorial font-light text-[#302B29]">
                Useful over excessive.
              </h3>
              <p className="text-xs sm:text-sm text-[#786761] leading-relaxed font-light">
                A great itinerary isn't about packing in the most stops or buying the longest list of products. We focus on thoughtful scheduling and practical local guidance that truly helps you.
              </p>
            </div>

            <div className="p-8 sm:p-10 bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl space-y-4 hover:border-[#D9B4B0] transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#F4E8E5] flex items-center justify-center text-[#D9B4B0]">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-editorial font-light text-[#302B29]">
                Honest recommendations over unnecessary spending.
              </h3>
              <p className="text-xs sm:text-sm text-[#786761] leading-relaxed font-light">
                We believe discovering K-beauty should be comfortable and pressure-free. When a simpler option makes more sense—or when you don't need something at all—we say so honestly.
              </p>
            </div>
          </div>
        </div>

        {/* Honest Guidance Callout */}
        <div className="mb-24">
          <div className="p-10 sm:p-14 rounded-3xl bg-[#FCFAF7] border border-[#EADBCE] shadow-xs relative overflow-hidden">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="text-xs uppercase tracking-[0.28em] text-[#D9B4B0] font-medium block">
                Our Standard
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#302B29]">
                Beauty, without the pressure.
              </h2>
              <p className="text-sm sm:text-base text-[#786761] font-light leading-relaxed max-w-2xl mx-auto">
                Navigating beauty shops, salons, and clinics in a new country can feel overwhelming. NORI is here to help you explore at your own pace and focus on what genuinely fits you.
              </p>
              <blockquote className="p-6 rounded-2xl bg-[#F7F2EC] border border-[#EADBCE] text-center space-y-2 max-w-xl mx-auto">
                <p className="text-xs uppercase tracking-[0.2em] text-[#786761] font-light">
                  Sometimes the best recommendation is:
                </p>
                <p className="text-xl sm:text-2xl font-editorial italic text-[#302B29] leading-snug">
                  “You don’t need it.”
                </p>
              </blockquote>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D9B4B0] font-semibold">
              Questions &amp; Answers
            </span>
            <h2 className="text-3xl font-editorial font-light text-[#302B29]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-[#EADBCE] rounded-2xl overflow-hidden bg-[#FCFAF7] transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4.5 flex items-center justify-between text-left focus:outline-none hover:bg-[#F7F2EC]"
                  >
                    <span className="text-sm sm:text-base font-editorial font-medium text-[#302B29] pr-4">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#D9B4B0] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#786761] shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-2 text-xs sm:text-sm text-[#786761] font-light leading-relaxed border-t border-[#EADBCE]/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Official Business Information Section */}
        <div className="mb-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#FCFAF7] border border-[#EADBCE] shadow-xs space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EADBCE] pb-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#D9B4B0] font-semibold block mb-1">
                  Company Details
                </span>
                <h3 className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">
                  Official Business Information
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F2EC] border border-[#EADBCE] text-xs text-[#786761]">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Licensed Korean Tourism Operator</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
              <div className="p-5 bg-white rounded-2xl border border-[#EADBCE] space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#786761] block font-semibold">
                  Company Name
                </span>
                <p className="font-semibold text-sm text-[#302B29]">{BUSINESS_POLICIES.businessInformation.companyName}</p>
                <p className="text-[#786761] text-[11px]">{BUSINESS_POLICIES.businessInformation.koreanName}</p>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-[#EADBCE] space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#786761] block font-semibold">
                  Representative Director
                </span>
                <p className="font-semibold text-sm text-[#302B29]">Seoha Park (Lucy)</p>
                <p className="text-[#786761] text-[11px]">Founder &amp; Representative Director</p>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-[#EADBCE] space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#786761] block font-semibold">
                  Business Registration Number
                </span>
                <p className="font-mono font-medium text-sm text-[#302B29]">
                  {BUSINESS_POLICIES.businessInformation.businessRegistrationNumber}
                </p>
                <p className="text-[#786761] text-[11px]">사업자등록번호</p>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-[#EADBCE] space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#786761] block font-semibold">
                  Tourism Business Registration Number
                </span>
                <p className="font-medium text-sm text-[#302B29]">
                  {BUSINESS_POLICIES.businessInformation.tourismLicenseNumber}
                </p>
                <p className="text-[#786761] text-[11px]">관광사업자등록번호</p>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-[#EADBCE] space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#786761] block font-semibold">
                  Mail-Order Business Registration
                </span>
                <p className="font-medium text-sm text-[#302B29]">
                  {BUSINESS_POLICIES.businessInformation.mailOrderRegistrationNumber}
                </p>
                <p className="text-[#786761] text-[11px]">통신판매업신고</p>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-[#EADBCE] space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#786761] block font-semibold">
                  Official Website
                </span>
                <p className="font-medium text-sm text-[#302B29]">
                  <a href={BUSINESS_POLICIES.businessInformation.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {BUSINESS_POLICIES.businessInformation.website}
                  </a>
                </p>
                <p className="text-[#786761] text-[11px]">Official Online Portal</p>
              </div>
            </div>

            <div className="p-6 bg-[#F7F2EC] rounded-2xl border border-[#EADBCE] space-y-3 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#786761]">
                <div>
                  <strong className="text-[#302B29] block mb-1">Business Address (English):</strong>
                  <p>{BUSINESS_POLICIES.businessInformation.englishAddress}</p>
                </div>
                <div>
                  <strong className="text-[#302B29] block mb-1">Korean Address (사업장 소재지):</strong>
                  <p>{BUSINESS_POLICIES.businessInformation.koreanAddress}</p>
                </div>
              </div>
              <div className="pt-3 border-t border-[#EADBCE] flex flex-wrap items-center gap-6 text-[#302B29]">
                <div>
                  <strong>Phone:</strong> <a href="https://wa.me/821048295754" target="_blank" rel="noopener noreferrer" className="hover:underline ml-1">{BUSINESS_POLICIES.businessInformation.phone}</a>
                </div>
                <div>
                  <strong>Email:</strong> <a href={`mailto:${BUSINESS_POLICIES.businessInformation.email}`} className="hover:underline ml-1">{BUSINESS_POLICIES.businessInformation.email}</a>
                </div>
                <div>
                  <strong>Hours:</strong> <span className="text-[#786761] ml-1">{BUSINESS_POLICIES.businessInformation.operatingHours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="text-center space-y-6 p-12 sm:p-16 rounded-3xl bg-[#302B29] text-[#F7F2EC] shadow-md">
          <div className="space-y-3">
            <h3 className="text-3xl sm:text-5xl font-editorial font-light text-[#F7F2EC]">
              Find your glow. <span className="italic text-[#E9D2CD]">Play your way.</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#D9B4B0] max-w-lg mx-auto font-light leading-relaxed">
              Tell us what you want to experience in Korea, and we'll create a personalized plan and quote around you.
            </p>
          </div>
          <div className="pt-1">
            <button
              onClick={onBookExperience}
              className="px-9 py-4 bg-[#D9B4B0] hover:bg-[#E9D2CD] text-[#302B29] rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md inline-flex items-center gap-2.5 group"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#302B29]" />
              <span>PLAN MY TRIP</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#302B29] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
