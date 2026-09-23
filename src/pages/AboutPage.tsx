import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Heart, Users, Compass, ChevronDown, ChevronUp, ArrowRight, Award, Building2, Phone, Mail, Globe, MapPin } from 'lucide-react';
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
    question: 'How does NORI select aesthetic clinics, spas, and styling ateliers?',
    answer: 'We audit every destination in person with strict clinical and ethical criteria. We verify physician credentials, sterile protocol adherence, genuine equipment authenticity certificates, and patient safety records. Because NORI operates 100% independently with zero clinic kickbacks or sales quotas, our guidance is solely driven by what is healthy and beneficial for your individual skin.'
  },
  {
    question: 'Do your signature beauty and spa experiences require downtime?',
    answer: 'Our signature group and private experiences (including the Cheongdam Glass Skin Facial, Hanok Scalp Head Spa, and Personal Color Styling) are completely non-invasive and require zero downtime. You walk away radiant, calm, and camera-ready. For travelers interested in specialized clinical lasers or skin boosters, our medical liaisons prepare personalized pre-and-post care regimens to ensure full comfort throughout your trip.'
  },
  {
    question: 'What if I have sensitive or reactive skin?',
    answer: 'Our curators are certified dermo-aestheticians. Before any treatment, we evaluate your active allergies, skin barrier history, and current routine. If a gentle, soothing botanical or barrier-strengthening treatment is better than an aggressive exfoliating peel, we will recommend that with uncompromising honesty.'
  },
  {
    question: 'How does the tax refund process work in Korea?',
    answer: 'South Korea provides direct immediate VAT refunds (typically 7-10%) on medical aesthetic care and cosmetic purchases for foreign tourists. Bring your passport on your tour day. Your NORI curator assists with immediate on-site tax reduction or ensures your receipts are properly validated for swift customs clearance.'
  },
  {
    question: 'Why do you limit group sizes to maximum 4 guests?',
    answer: 'True discovery cannot happen in large bus groups. To ensure a personalized, comfortable, pressure-free atmosphere where every question can be answered and diagnostic reports can be individually reviewed, we cap our boutique groups at 4 guests.'
  }
];

export const AboutPage: React.FC<AboutPageProps> = ({ onBookExperience }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div id="about-page" className="w-full pt-28 pb-24 bg-[#F7F2EC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Title Banner */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCFAF7] border border-[#EADBCE]">
            <span className="w-2 h-2 rounded-full bg-[#D9B4B0]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#786761] font-medium">
              About NORI TOUR • Nori
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-editorial font-light text-[#302B29] tracking-tight">
            Beauty + Wellness + Playful Premium
          </h1>
          <p className="text-base sm:text-lg text-[#786761] font-light leading-relaxed max-w-2xl mx-auto">
            NORI was founded to help international travelers explore Korean beauty and wellness with confidence, honest guidance, and unhurried curiosity.
          </p>
        </div>

        {/* The Meaning of Nori Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 pb-20 border-b border-[#EADBCE]">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D9B4B0] font-semibold">
              The Meaning of Our Name
            </span>
            <h2 className="text-3xl sm:text-4xl font-editorial font-light text-[#302B29] leading-tight">
              NORI comes from the Korean word “Nori,” meaning “play.”
            </h2>
            <div className="space-y-4 text-sm text-[#786761] font-light leading-relaxed">
              <p>
                For NORI, <span className="font-editorial italic font-medium text-[#302B29]">“play”</span> means exploring freely, discovering what suits you, enjoying the process, and feeling comfortable and curious.
              </p>
              <p>
                Too often, international travelers arrive in Seoul excited about K-beauty, only to face overwhelming marketing, commercial clinic sales pressure, and confusion over complex ingredients.
              </p>
              <p>
                We believe discovering beauty and Korea should feel curious, enjoyable, relaxed, personal, and completely pressure-free. We craft experiences where you can ask real questions, learn the science behind Korean glow, and enjoy Korea in a way that feels entirely your own.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-md bg-[#ECE4D9] border border-[#EADBCE]">
              <img
                src="https://images.unsplash.com/photo-1548115184-bc6544d06a58?auto=format&fit=crop&w=1200&q=80"
                alt="Traditional Korean Hanok Courtyard with Sunlight"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Honest Guidance / Brand Philosophy */}
        <div className="mb-24">
          <div className="p-10 sm:p-14 rounded-3xl bg-[#FCFAF7] border border-[#EADBCE] shadow-xs relative overflow-hidden">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="text-xs uppercase tracking-[0.28em] text-[#D9B4B0] font-medium">
                Our Brand Promise
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#302B29]">
                Honest guidance, always.
              </h2>
              <p className="text-base sm:text-lg text-[#786761] font-light leading-relaxed">
                We believe the best beauty choice is not always the most expensive, dramatic, or popular one. NORI helps you understand your options and choose what genuinely fits you.
              </p>
              <blockquote className="p-6 rounded-2xl bg-[#F7F2EC] border border-[#EADBCE] text-center space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-[#D9B4B0] font-semibold">
                  Our Honest Standard
                </p>
                <p className="text-xl sm:text-2xl font-editorial italic text-[#302B29] leading-snug">
                  Sometimes the best recommendation is: “You don’t need it.”
                </p>
              </blockquote>
              <p className="text-xs sm:text-sm text-[#786761] font-light leading-relaxed max-w-2xl mx-auto">
                NORI never recommends a product or treatment simply because it is expensive, trending, popular, dramatic, or invasive. If a simpler or gentler option makes more sense for your skin, we say so with complete honesty.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Core Pillars of NORI */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.28em] text-[#D9B4B0] font-medium">
              The NORI Experience
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#302B29]">
              How We Guide You
            </h2>
            <p className="text-sm text-[#786761] font-light max-w-xl mx-auto">
              How we approach every guest consultation, spa partnership, and cultural encounter in Seoul.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-[#FCFAF7] border border-[#EADBCE] rounded-2xl space-y-3 hover:border-[#D9B4B0] transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#F4E8E5] flex items-center justify-center text-[#D9B4B0] mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-editorial font-light text-[#302B29]">
                Personalized K-Beauty Guidance
              </h3>
              <p className="text-xs text-[#786761] leading-relaxed font-light">
                No two complexions or lifestyles are alike. We listen to your concerns, goals, and sensitivities to guide you to routines that build genuine skin health.
              </p>
            </div>

            <div className="p-8 bg-[#FCFAF7] border border-[#EADBCE] rounded-2xl space-y-3 hover:border-[#D9B4B0] transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#F4E8E5] flex items-center justify-center text-[#D9B4B0] mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-editorial font-light text-[#302B29]">
                Local Knowledge
              </h3>
              <p className="text-xs text-[#786761] leading-relaxed font-light">
                From quiet Hanok tea courtyards in Bukchon to accredited private aesthetic suites in Cheongdam, our insider relationships open doors travelers cannot easily access alone.
              </p>
            </div>

            <div className="p-8 bg-[#FCFAF7] border border-[#EADBCE] rounded-2xl space-y-3 hover:border-[#D9B4B0] transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#F4E8E5] flex items-center justify-center text-[#D9B4B0] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-editorial font-light text-[#302B29]">
                Honest Recommendations
              </h3>
              <p className="text-xs text-[#786761] leading-relaxed font-light">
                We maintain strict independence from clinics and retail brands. We prioritize gentleness, safety, and evidence-based efficacy over fleeting trends.
              </p>
            </div>

            <div className="p-8 bg-[#FCFAF7] border border-[#EADBCE] rounded-2xl space-y-3 hover:border-[#D9B4B0] transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#F4E8E5] flex items-center justify-center text-[#D9B4B0] mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-editorial font-light text-[#302B29]">
                Beauty + Wellness Expertise
              </h3>
              <p className="text-xs text-[#786761] leading-relaxed font-light">
                Our team includes licensed dermo-aestheticians and certified personal color analysts. We explain clinical technology in clear, practical English.
              </p>
            </div>

            <div className="p-8 bg-[#FCFAF7] border border-[#EADBCE] rounded-2xl space-y-3 hover:border-[#D9B4B0] transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#F4E8E5] flex items-center justify-center text-[#D9B4B0] mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-editorial font-light text-[#302B29]">
                Comfortable & Pressure-Free
              </h3>
              <p className="text-xs text-[#786761] leading-relaxed font-light">
                We remove the intimidation from K-beauty. An unhurried pace, welcoming environments, and warm hospitality allow you to truly relax and enjoy.
              </p>
            </div>

            <div className="p-8 bg-[#FCFAF7] border border-[#EADBCE] rounded-2xl space-y-3 hover:border-[#D9B4B0] transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#F4E8E5] flex items-center justify-center text-[#D9B4B0] mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-editorial font-light text-[#302B29]">
                Curated for Individual Needs
              </h3>
              <p className="text-xs text-[#786761] leading-relaxed font-light">
                Whether you seek barrier restoration, custom foundation matching, or serene mindfulness, each journey is sculpted around what benefits you most.
              </p>
            </div>
          </div>
        </div>

        {/* Meet the Curators */}
        <div className="mb-24 pb-20 border-b border-[#EADBCE]">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D9B4B0] font-semibold">
              The Curators
            </span>
            <h2 className="text-3xl sm:text-4xl font-editorial font-light text-[#302B29]">
              Passionate Local Experts by Your Side
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FCFAF7] border border-[#EADBCE] rounded-2xl overflow-hidden shadow-xs">
              <div className="aspect-3/3 bg-[#ECE4D9] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                  alt="Lucy, Representative Director of NORI TOUR Co., Ltd."
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-2">
                <h4 className="text-xl font-editorial font-light text-[#302B29]">Lucy</h4>
                <p className="text-xs uppercase tracking-wider text-[#D9B4B0] font-semibold">Representative Director</p>
                <p className="text-xs text-[#786761] leading-relaxed font-light">
                  Representative Director of NORI TOUR Co., Ltd. (주식회사 노리투어). Dedicated to transparent travel operations, statutory integrity, and personalized Korean beauty experiences.
                </p>
              </div>
            </div>

            <div className="bg-[#FCFAF7] border border-[#EADBCE] rounded-2xl overflow-hidden shadow-xs">
              <div className="aspect-3/3 bg-[#ECE4D9] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
                  alt="Yuna Song"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-2">
                <h4 className="text-xl font-editorial font-light text-[#302B29]">Yuna Song</h4>
                <p className="text-xs uppercase tracking-wider text-[#D9B4B0] font-semibold">Lead Color & Styling Analyst</p>
                <p className="text-xs text-[#786761] leading-relaxed font-light">
                  Certified Color Consultant trained in Seoul. Passionate about helping international travelers find harmonious cosmetic shades and personal style.
                </p>
              </div>
            </div>

            <div className="bg-[#FCFAF7] border border-[#EADBCE] rounded-2xl overflow-hidden shadow-xs">
              <div className="aspect-3/3 bg-[#ECE4D9] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                  alt="Dr. Ji-Hoon Kang"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-2">
                <h4 className="text-xl font-editorial font-light text-[#302B29]">Dr. Ji-Hoon Kang</h4>
                <p className="text-xs uppercase tracking-wider text-[#D9B4B0] font-semibold">Medical Advisor & Doctor Liaison</p>
                <p className="text-xs text-[#786761] leading-relaxed font-light">
                  Board-certified dermatologist advising on safety standards, sterile clinical auditing, and gentle post-travel skin restoration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D9B4B0] font-semibold">
              Questions & Answers
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
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#786761] leading-relaxed border-t border-[#EADBCE]/50">
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
                  Statutory Transparency
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
                <p className="font-semibold text-sm text-[#302B29]">{BUSINESS_POLICIES.businessInformation.representative}</p>
                <p className="text-[#786761] text-[11px]">Representative Director & Founder</p>
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
                  <strong>Phone:</strong> <a href={`tel:${BUSINESS_POLICIES.businessInformation.phone}`} className="hover:underline ml-1">{BUSINESS_POLICIES.businessInformation.phone}</a>
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

        {/* Bottom CTA */}
        <div className="text-center space-y-4 p-12 rounded-3xl bg-[#302B29] text-[#F7F2EC] shadow-md">
          <h3 className="text-2xl sm:text-4xl font-editorial font-light text-[#F7F2EC]">
            Find Your Glow. Play Your Way.
          </h3>
          <p className="text-xs sm:text-sm text-[#D9B4B0] max-w-md mx-auto font-light leading-relaxed">
            NORI helps you find what works for you, enjoy the discovery, and leave Korea glowing in your own way.
          </p>
          <div className="pt-2">
            <button
              onClick={onBookExperience}
              className="px-8 py-3.5 bg-[#D9B4B0] hover:bg-[#E9D2CD] text-[#302B29] text-xs uppercase tracking-[0.18em] font-semibold rounded-full transition-all shadow-md"
            >
              Book Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
