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
import { ScrollReveal } from '../components/ScrollReveal';
import aboutEditorialHero from '../assets/images/about_nori_editorial_hero_1790649547011.jpg';

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
    <div id="about-page" className="w-full pt-32 pb-24 bg-[#1C1917] text-[#F7F2EC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Title Banner */}
        <ScrollReveal variant="heading">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A2523] border border-[#3D3634] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D9B4B0]" />
              <span className="text-[11px] uppercase tracking-[0.26em] text-[#E9D2CD] font-semibold">
                ABOUT NORI TOUR
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-sans font-bold text-[#F7F2EC] tracking-tight leading-[1.12] [text-wrap:balance]">
              Personal, playful, and <span className="text-[#E9D2CD]">designed around you.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#BFB3AC] font-normal leading-relaxed max-w-2xl mx-auto [text-wrap:balance]">
              NORI TOUR creates personalized Korea travel and K-beauty experiences for international travelers — combining thoughtful ground arrangements with honest local guidance.
            </p>
          </div>
        </ScrollReveal>

        {/* Who We Are & How We Work */}
        <ScrollReveal variant="heading">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 pb-20 border-b border-[#3D3634]">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D9B4B0] font-semibold block">
                Our Approach
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#F7F2EC] leading-tight [text-wrap:balance]">
                Built around your trip, not a pre-made catalog.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#BFB3AC] font-normal leading-relaxed">
                <p>
                  Inspired by the Korean word <span className="font-serif italic font-medium text-[#F7F2EC]">“놀이” (nori)</span>, meaning play, NORI was created to help travelers explore Korea and K-beauty with curiosity, ease, and no unnecessary pressure.
                </p>
                <p>
                  Instead of asking you to fit your schedule into a fixed group tour or a pre-bundled package, we start by listening to what you want to experience, your travel pace, and what kind of support would make your time in Korea smoother.
                </p>
                <p>
                  From private airport transfers, guiding, and hotel support to K-beauty shopping, personal color, hair, and aesthetic care coordination, we help put the pieces together in a way that feels genuinely yours.
                </p>
              </div>

              <div className="pt-4 border-t border-[#3D3634] space-y-0.5">
                <p className="text-sm font-sans font-semibold text-[#F7F2EC]">
                  Seoha Park (Lucy)
                </p>
                <p className="text-xs text-[#BFB3AC] font-normal tracking-wide">
                  Founder &amp; Representative Director
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-16/10 rounded-3xl overflow-hidden shadow-xl bg-[#252120] border border-[#3D3634] group">
                <img
                  src={aboutEditorialHero}
                  alt="Personalized Korea travel planning and K-beauty curation in Seoul"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Beauty Expertise Section */}
        <ScrollReveal variant="card" className="mb-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#252120] border border-[#3D3634] shadow-md">
            <div className="max-w-3xl mx-auto space-y-5">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D9B4B0] font-semibold block">
                BEAUTY EXPERTISE
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#F7F2EC] leading-tight [text-wrap:balance]">
                Beauty knowledge, shaped by real conversations.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#BFB3AC] font-normal leading-relaxed pt-1">
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
        </ScrollReveal>

        {/* Core Philosophy Pillars */}
        <div className="mb-24">
          <ScrollReveal variant="heading">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <span className="text-xs uppercase tracking-[0.28em] text-[#D9B4B0] font-semibold block">
                Our Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#F7F2EC] tracking-tight [text-wrap:balance]">
                What Guides Every Plan
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal variant="card" delay={0} className="h-full">
              <div className="p-8 sm:p-10 bg-[#252120] border border-[#3D3634] rounded-3xl space-y-4 hover:border-[#D9B4B0] hover:-translate-y-1 transition-all duration-200 shadow-md group h-full">
                <div className="w-10 h-10 rounded-full bg-[#2E2826] flex items-center justify-center text-[#D9B4B0] group-hover:bg-[#342D2B] transition-colors">
                  <Sliders className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#F7F2EC] leading-snug">
                  Personalized over packaged.
                </h3>
                <p className="text-xs sm:text-sm text-[#BFB3AC] leading-relaxed font-normal">
                  Every traveler has a different rhythm. Choose only the ground arrangements, local activities, and beauty experiences you actually want—and skip the rest.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="card" delay={80} className="h-full">
              <div className="p-8 sm:p-10 bg-[#252120] border border-[#3D3634] rounded-3xl space-y-4 hover:border-[#D9B4B0] hover:-translate-y-1 transition-all duration-200 shadow-md group h-full">
                <div className="w-10 h-10 rounded-full bg-[#2E2826] flex items-center justify-center text-[#D9B4B0] group-hover:bg-[#342D2B] transition-colors">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#F7F2EC] leading-snug">
                  Useful over excessive.
                </h3>
                <p className="text-xs sm:text-sm text-[#BFB3AC] leading-relaxed font-normal">
                  A great itinerary isn't about packing in the most stops or buying the longest list of products. We focus on thoughtful scheduling and practical local guidance that truly helps you.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="card" delay={160} className="h-full">
              <div className="p-8 sm:p-10 bg-[#252120] border border-[#3D3634] rounded-3xl space-y-4 hover:border-[#D9B4B0] hover:-translate-y-1 transition-all duration-200 shadow-md group h-full">
                <div className="w-10 h-10 rounded-full bg-[#2E2826] flex items-center justify-center text-[#D9B4B0] group-hover:bg-[#342D2B] transition-colors">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#F7F2EC] leading-snug">
                  Honest recommendations over unnecessary spending.
                </h3>
                <p className="text-xs sm:text-sm text-[#BFB3AC] leading-relaxed font-normal">
                  We believe discovering K-beauty should be comfortable and pressure-free. When a simpler option makes more sense—or when you don't need something at all—we say so honestly.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Honest Guidance Callout */}
        <ScrollReveal variant="card" className="mb-24">
          <div className="p-10 sm:p-14 rounded-3xl bg-[#252120] border border-[#3D3634] shadow-md relative overflow-hidden">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="text-xs uppercase tracking-[0.28em] text-[#D9B4B0] font-semibold block">
                Our Standard
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#F7F2EC] tracking-tight [text-wrap:balance]">
                Beauty, without the pressure.
              </h2>
              <p className="text-sm sm:text-base text-[#BFB3AC] font-normal leading-relaxed max-w-2xl mx-auto [text-wrap:balance]">
                Navigating beauty shops, salons, and clinics in a new country can feel overwhelming. NORI is here to help you explore at your own pace and focus on what genuinely fits you.
              </p>
              <blockquote className="p-6 rounded-2xl bg-[#1C1917] border border-[#3D3634] text-center space-y-2 max-w-xl mx-auto shadow-inner">
                <p className="text-xs uppercase tracking-[0.2em] text-[#D9B4B0] font-medium">
                  Sometimes the best recommendation is:
                </p>
                <p className="text-xl sm:text-2xl font-serif italic text-[#F7F2EC] leading-snug">
                  “You don’t need it.”
                </p>
              </blockquote>
            </div>
          </div>
        </ScrollReveal>

        {/* FAQs Accordion */}
        <ScrollReveal variant="heading" className="max-w-3xl mx-auto mb-24">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D9B4B0] font-semibold">
              Questions &amp; Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#F7F2EC] tracking-tight [text-wrap:balance]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-[#3D3634] rounded-2xl overflow-hidden bg-[#252120] transition-all shadow-md"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4.5 flex items-center justify-between text-left focus:outline-none hover:bg-[#2A2523] transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-sans font-semibold text-[#F7F2EC] pr-4">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#D9B4B0] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#BFB3AC] shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-3 text-xs sm:text-sm text-[#E8DFD7] font-normal leading-relaxed border-t border-[#3D3634] bg-[#1C1917]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Official Business Information Section */}
        <ScrollReveal variant="card" className="mb-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#252120] border border-[#3D3634] shadow-md space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#3D3634] pb-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#D9B4B0] font-semibold block mb-1">
                  Company Details
                </span>
                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-[#F7F2EC]">
                  Official Business Information
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2A2523] border border-[#3D3634] text-xs text-[#E8DFD7]">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Licensed Korean Tourism Operator</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
              <div className="p-5 bg-[#1C1917] rounded-2xl border border-[#3D3634] space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#BFB3AC] block font-semibold">
                  Company Name
                </span>
                <p className="font-semibold text-sm text-[#F7F2EC]">{BUSINESS_POLICIES.businessInformation.companyName}</p>
                <p className="text-[#BFB3AC] text-[11px]">{BUSINESS_POLICIES.businessInformation.koreanName}</p>
              </div>

              <div className="p-5 bg-[#1C1917] rounded-2xl border border-[#3D3634] space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#BFB3AC] block font-semibold">
                  Representative Director
                </span>
                <p className="font-semibold text-sm text-[#F7F2EC]">Seoha Park (Lucy)</p>
                <p className="text-[#BFB3AC] text-[11px]">Founder &amp; Representative Director</p>
              </div>

              <div className="p-5 bg-[#1C1917] rounded-2xl border border-[#3D3634] space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#BFB3AC] block font-semibold">
                  Business Registration Number
                </span>
                <p className="font-mono font-medium text-sm text-[#F7F2EC]">
                  {BUSINESS_POLICIES.businessInformation.businessRegistrationNumber}
                </p>
                <p className="text-[#BFB3AC] text-[11px]">사업자등록번호</p>
              </div>

              <div className="p-5 bg-[#1C1917] rounded-2xl border border-[#3D3634] space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#BFB3AC] block font-semibold">
                  Tourism Business Registration Number
                </span>
                <p className="font-medium text-sm text-[#F7F2EC]">
                  {BUSINESS_POLICIES.businessInformation.tourismLicenseNumber}
                </p>
                <p className="text-[#BFB3AC] text-[11px]">관광사업자등록번호</p>
              </div>

              <div className="p-5 bg-[#1C1917] rounded-2xl border border-[#3D3634] space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#BFB3AC] block font-semibold">
                  Mail-Order Business Registration
                </span>
                <p className="font-medium text-sm text-[#F7F2EC]">
                  {BUSINESS_POLICIES.businessInformation.mailOrderRegistrationNumber}
                </p>
                <p className="text-[#BFB3AC] text-[11px]">통신판매업신고</p>
              </div>

              <div className="p-5 bg-[#1C1917] rounded-2xl border border-[#3D3634] space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#BFB3AC] block font-semibold">
                  Official Website
                </span>
                <p className="font-medium text-sm text-[#F7F2EC]">
                  <a href={BUSINESS_POLICIES.businessInformation.website} target="_blank" rel="noopener noreferrer" className="hover:underline text-[#D9B4B0] hover:text-[#E9D2CD]">
                    {BUSINESS_POLICIES.businessInformation.website}
                  </a>
                </p>
                <p className="text-[#BFB3AC] text-[11px]">Official Online Portal</p>
              </div>
            </div>

            <div className="p-6 bg-[#1C1917] rounded-2xl border border-[#3D3634] space-y-3 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#BFB3AC]">
                <div>
                  <strong className="text-[#F7F2EC] block mb-1">Business Address (English):</strong>
                  <p>{BUSINESS_POLICIES.businessInformation.englishAddress}</p>
                </div>
                <div>
                  <strong className="text-[#F7F2EC] block mb-1">Korean Address (사업장 소재지):</strong>
                  <p>{BUSINESS_POLICIES.businessInformation.koreanAddress}</p>
                </div>
              </div>
              <div className="pt-3 border-t border-[#3D3634] flex flex-wrap items-center gap-6 text-[#BFB3AC]">
                <div>
                  <strong className="text-[#F7F2EC]">Phone:</strong> <a href="https://wa.me/821048295754" target="_blank" rel="noopener noreferrer" className="hover:underline ml-1 text-[#D9B4B0] hover:text-[#E9D2CD]">{BUSINESS_POLICIES.businessInformation.phone}</a>
                </div>
                <div>
                  <strong className="text-[#F7F2EC]">Email:</strong> <a href={`mailto:${BUSINESS_POLICIES.businessInformation.email}`} className="hover:underline ml-1 text-[#D9B4B0] hover:text-[#E9D2CD]">{BUSINESS_POLICIES.businessInformation.email}</a>
                </div>
                <div>
                  <strong className="text-[#F7F2EC]">Hours:</strong> <span className="text-[#BFB3AC] ml-1">{BUSINESS_POLICIES.businessInformation.operatingHours}</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Callout */}
        <ScrollReveal variant="card">
          <div className="text-center space-y-6 p-12 sm:p-16 rounded-3xl bg-[#252120] border border-[#3D3634] text-[#F7F2EC] shadow-xl">
            <div className="space-y-3">
              <h3 className="text-3xl sm:text-5xl font-sans font-bold text-[#F7F2EC] tracking-tight [text-wrap:balance]">
                Find your glow. <span className="text-[#E9D2CD]">Play your way.</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#BFB3AC] max-w-lg mx-auto font-normal leading-relaxed [text-wrap:balance]">
                Tell us what you want to experience in Korea, and we'll create a personalized plan and quote around you.
              </p>
            </div>
            <div className="pt-1">
              <button
                onClick={onBookExperience}
                className="px-9 py-4 bg-[#D9B4B0] hover:bg-[#E9D2CD] text-[#1C1917] rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-lg inline-flex items-center gap-2.5 group cursor-pointer active:scale-[0.98]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#1C1917] group-hover:scale-110 transition-transform" />
                <span>PLAN MY TRIP</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#1C1917] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
