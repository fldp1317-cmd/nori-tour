import React from 'react';
import {
  Sparkles,
  ArrowRight,
  PlaneLanding,
  Car,
  Building2,
  ShoppingBag,
  Palette,
  HeartHandshake,
  Compass,
  Check,
  Info,
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

interface WhatWeCanArrangePageProps {
  onPlanMyTrip: () => void;
}

export const WhatWeCanArrangePage: React.FC<WhatWeCanArrangePageProps> = ({ onPlanMyTrip }) => {
  return (
    <div id="what-we-can-arrange-page" className="w-full pt-32 pb-24 bg-[#1C1917] text-[#F7F2EC]">
      {/* Page Intro */}
      <section id="arrange-intro" className="max-w-4xl mx-auto px-6 sm:px-8 pb-20 text-center flex flex-col items-center">
        <ScrollReveal variant="heading" className="flex flex-col items-center">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#2A2523] border border-[#3D3634] shadow-md mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-[#D9B4B0]" />
            <span className="text-[11px] uppercase tracking-[0.26em] text-[#E9D2CD] font-semibold">
              WHAT WE CAN ARRANGE
            </span>
          </div>

          {/* Balanced, Intentional Headline with tightened line-height */}
          <div className="max-w-3xl mx-auto mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-sans font-bold text-[#F7F2EC] tracking-tight leading-[1.08] sm:leading-[1.06] [text-wrap:balance]">
              Build your Korea trip,<br className="hidden sm:inline" />{' '}
              <span className="text-[#E9D2CD]">your way.</span>
            </h1>
          </div>

          {/* Scannable Supporting Copy */}
          <div className="max-w-xl mx-auto space-y-4 mb-8 text-sm sm:text-base text-[#BFB3AC] font-normal leading-relaxed">
            <p className="text-base sm:text-lg text-[#E8DFD7] font-medium">
              Every traveler needs something different.
            </p>
            <p className="max-w-md sm:max-w-lg mx-auto text-sm sm:text-[15px] leading-relaxed text-[#BFB3AC]">
              Choose only what you need — from airport transfers and private transportation to K-beauty experiences, local activities and personalized travel support.
            </p>
            <p className="text-base sm:text-lg text-[#E9D2CD] font-serif italic pt-1">
              Tell us what you're looking for, and NORI will put the pieces together.
            </p>
          </div>

          {/* Primary CTA */}
          <div>
            <button
              id="arrange-intro-plan-cta"
              onClick={onPlanMyTrip}
              className="px-9 py-4 bg-[#D9B4B0] hover:bg-[#E9D2CD] text-[#1C1917] rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-lg inline-flex items-center gap-2.5 group cursor-pointer active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#1C1917] group-hover:scale-110 transition-transform duration-300" />
              <span>PLAN MY TRIP</span>
            </button>
          </div>
        </ScrollReveal>
      </section>

      {/* Main Editorial Service Sections */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-12 sm:space-y-16">
        {/* 01 — ARRIVAL & DEPARTURE */}
        <ScrollReveal
          variant="card"
          as="section"
          id="service-01-arrival-departure"
          className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#252120] border border-[#3D3634] shadow-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-serif italic text-[#D9B4B0] tracking-[0.24em] font-semibold">
                  01
                </span>
                <span className="h-px w-8 bg-[#3D3634]" />
                <div className="w-9 h-9 rounded-full bg-[#2E2826] flex items-center justify-center">
                  <PlaneLanding className="w-4 h-4 text-[#D9B4B0]" />
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#F7F2EC] leading-tight [text-wrap:balance]">
                Arrival &amp; Departure
              </h2>

              <p className="text-sm sm:text-base text-[#BFB3AC] font-normal leading-relaxed">
                Start and finish your Korea trip smoothly.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#D9B4B0] font-medium">
                  Services may include:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Incheon Airport pickup',
                    'Incheon Airport drop-off',
                    'Gimpo Airport pickup',
                    'Gimpo Airport drop-off',
                    'Private airport transfer',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-[#1C1917] border border-[#3D3634] text-xs sm:text-sm text-[#E8DFD7] font-normal"
                    >
                      <Check className="w-3.5 h-3.5 text-[#D9B4B0] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#2A2523] border border-[#3D3634] flex items-start gap-3">
                <Info className="w-4 h-4 text-[#E9D2CD] shrink-0 mt-0.5" />
                <p className="text-xs text-[#BFB3AC] font-normal leading-relaxed">
                  NORI specializes in ground arrangements in Korea.
                  <br />
                  International airfare is not included.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 02 — PRIVATE TRANSPORT & GUIDING */}
        <ScrollReveal
          variant="card"
          as="section"
          id="service-02-getting-around"
          className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#252120] border border-[#3D3634] shadow-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-serif italic text-[#D9B4B0] tracking-[0.24em] font-semibold">
                  02
                </span>
                <span className="h-px w-8 bg-[#3D3634]" />
                <div className="w-9 h-9 rounded-full bg-[#2E2826] flex items-center justify-center">
                  <Car className="w-4 h-4 text-[#D9B4B0]" />
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#F7F2EC] leading-tight [text-wrap:balance]">
                Getting Around
              </h2>

              <p className="text-sm sm:text-base text-[#BFB3AC] font-normal leading-relaxed">
                Comfortable ground transportation and local guiding tailored to your pace and schedule.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#D9B4B0] font-medium">
                  Services may include:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Private vehicle & driver',
                    'Driving guide',
                    'Private English-speaking guide',
                    'Transportation between scheduled activities',
                    'Personalized day itineraries',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-[#1C1917] border border-[#3D3634] text-xs sm:text-sm text-[#E8DFD7] font-normal"
                    >
                      <Check className="w-3.5 h-3.5 text-[#D9B4B0] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clear explanation of the difference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-[#1C1917] border border-[#3D3634] space-y-2">
                  <h3 className="text-xs uppercase tracking-[0.16em] text-[#F7F2EC] font-bold">
                    PRIVATE VEHICLE &amp; DRIVER
                  </h3>
                  <p className="text-xs text-[#BFB3AC] font-normal leading-relaxed">
                    A dedicated vehicle and professional driver for transportation.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#1C1917] border border-[#3D3634] space-y-2">
                  <h3 className="text-xs uppercase tracking-[0.16em] text-[#F7F2EC] font-bold">
                    DRIVING GUIDE
                  </h3>
                  <p className="text-xs text-[#BFB3AC] font-normal leading-relaxed">
                    A guide who accompanies your trip while also providing driving support, depending on the itinerary and availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 03 — STAY & TRAVEL SUPPORT */}
        <ScrollReveal
          variant="card"
          as="section"
          id="service-03-stay-travel"
          className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#252120] border border-[#3D3634] shadow-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-serif italic text-[#D9B4B0] tracking-[0.24em] font-semibold">
                  03
                </span>
                <span className="h-px w-8 bg-[#3D3634]" />
                <div className="w-9 h-9 rounded-full bg-[#2E2826] flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-[#D9B4B0]" />
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#F7F2EC] leading-tight [text-wrap:balance]">
                Stay &amp; Travel
              </h2>

              <p className="text-sm sm:text-base text-[#BFB3AC] font-normal leading-relaxed">
                Thoughtful planning and reservation support to help your days in Korea flow effortlessly.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#D9B4B0] font-medium">
                Services may include:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Hotel recommendations',
                  'Hotel booking assistance',
                  'Personalized itinerary planning',
                  'Restaurant recommendations',
                  'Experience reservations',
                  'Local activity planning',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-[#1C1917] border border-[#3D3634] text-xs sm:text-sm text-[#E8DFD7] font-normal"
                  >
                    <Check className="w-3.5 h-3.5 text-[#D9B4B0] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* 04 — K-BEAUTY SHOPPING & DISCOVERY */}
        <ScrollReveal
          variant="card"
          as="section"
          id="service-04-kbeauty-shopping"
          className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#252120] border border-[#3D3634] shadow-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-serif italic text-[#D9B4B0] tracking-[0.24em] font-semibold">
                  04
                </span>
                <span className="h-px w-8 bg-[#3D3634]" />
                <div className="w-9 h-9 rounded-full bg-[#2E2826] flex items-center justify-center">
                  <ShoppingBag className="w-4 h-4 text-[#D9B4B0]" />
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#F7F2EC] leading-tight [text-wrap:balance]">
                K-Beauty Shopping &amp; Discovery
              </h2>

              <p className="text-sm sm:text-base text-[#BFB3AC] font-normal leading-relaxed">
                Explore Korea's skincare and beauty landscape with personalized guidance that can be woven naturally into your itinerary.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#D9B4B0] font-medium">
                Services may include:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Personalized skincare shopping',
                  'K-beauty product discovery',
                  'Olive Young shopping guidance',
                  'Korean pharmacy beauty shopping',
                  'Beauty flagship store visits',
                  'Skincare routine guidance',
                  'Beauty neighborhood exploration',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-[#1C1917] border border-[#3D3634] text-xs sm:text-sm text-[#E8DFD7] font-normal"
                  >
                    <Check className="w-3.5 h-3.5 text-[#D9B4B0] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* 05 — COLOR, MAKEUP & HAIR */}
        <ScrollReveal
          variant="card"
          as="section"
          id="service-05-color-makeup-hair"
          className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#252120] border border-[#3D3634] shadow-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-serif italic text-[#D9B4B0] tracking-[0.24em] font-semibold">
                  05
                </span>
                <span className="h-px w-8 bg-[#3D3634]" />
                <div className="w-9 h-9 rounded-full bg-[#2E2826] flex items-center justify-center">
                  <Palette className="w-4 h-4 text-[#D9B4B0]" />
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#F7F2EC] leading-tight [text-wrap:balance]">
                Color, Makeup &amp; Hair
              </h2>

              <p className="text-sm sm:text-base text-[#BFB3AC] font-normal leading-relaxed">
                Discover shades, styling, and salon experiences tailored to your features and preferences.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#D9B4B0] font-medium">
                Services may include:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Personal color analysis',
                  'Makeup consultation',
                  'Professional makeup experience',
                  'Makeup lesson',
                  'Makeup shopping',
                  'Korean hair salon experience',
                  'Hair styling',
                  'Scalp care / head spa',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-[#1C1917] border border-[#3D3634] text-xs sm:text-sm text-[#E8DFD7] font-normal"
                  >
                    <Check className="w-3.5 h-3.5 text-[#D9B4B0] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* 06 — BEAUTY & AESTHETIC CARE */}
        <ScrollReveal
          variant="card"
          as="section"
          id="service-06-beauty-aesthetic-care"
          className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#252120] border border-[#3D3634] shadow-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-serif italic text-[#D9B4B0] tracking-[0.24em] font-semibold">
                  06
                </span>
                <span className="h-px w-8 bg-[#3D3634]" />
                <div className="w-9 h-9 rounded-full bg-[#2E2826] flex items-center justify-center">
                  <HeartHandshake className="w-4 h-4 text-[#D9B4B0]" />
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#F7F2EC] leading-tight [text-wrap:balance]">
                Beauty &amp; Aesthetic Care
              </h2>

              <p className="text-sm sm:text-base text-[#BFB3AC] font-normal leading-relaxed">
                Thoughtful coordination and interpretation support for travelers exploring dermatology or aesthetic consultations in Korea.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#D9B4B0] font-medium">
                  Services may include:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Dermatology consultation coordination',
                    'Skin treatment planning support',
                    'Lifting / anti-aging treatment coordination',
                    'Plastic surgery consultation coordination',
                    'Beauty clinic interpretation support',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-[#1C1917] border border-[#3D3634] text-xs sm:text-sm text-[#E8DFD7] font-normal"
                    >
                      <Check className="w-3.5 h-3.5 text-[#D9B4B0] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#2A2523] border border-[#3D3634] flex items-start gap-3">
                <Info className="w-4 h-4 text-[#E9D2CD] shrink-0 mt-0.5" />
                <p className="text-xs text-[#BFB3AC] font-normal leading-relaxed">
                  Please note: All medical decisions, diagnoses, and treatments are made directly between the traveler and licensed medical providers.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 07 — SOMETHING ELSE? */}
        <ScrollReveal
          variant="card"
          as="section"
          id="service-07-something-else"
          className="p-10 sm:p-14 lg:p-16 rounded-3xl bg-[#252120] border border-[#3D3634] text-center space-y-6 shadow-md"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2A2523] border border-[#3D3634] text-[10px] uppercase tracking-[0.24em] text-[#D9B4B0] font-semibold">
            <Compass className="w-3.5 h-3.5 text-[#D9B4B0]" />
            <span>07 • Custom Requests</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#F7F2EC] [text-wrap:balance]">
            Have something else in mind?
          </h2>

          <div className="max-w-xl mx-auto space-y-3 text-sm sm:text-base text-[#BFB3AC] font-normal leading-relaxed">
            <p className="text-[#E8DFD7] font-medium">
              Your trip doesn't have to fit into a category.
            </p>
            <p>
              Tell us what you'd like to experience, and we'll see how we can incorporate it into your Korea itinerary.
            </p>
          </div>

          <div className="pt-2">
            <button
              id="arrange-something-else-cta"
              onClick={onPlanMyTrip}
              className="px-8 py-4 bg-[#D9B4B0] hover:bg-[#E9D2CD] text-[#1C1917] rounded-full text-xs uppercase tracking-[0.18em] font-bold transition-all shadow-md inline-flex items-center gap-2.5 group cursor-pointer active:scale-[0.98]"
            >
              <span>TELL US WHAT YOU'RE LOOKING FOR</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#1C1917] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </ScrollReveal>

        {/* NORI BRAND STORY — SMALL SECTION */}
        <ScrollReveal
          variant="card"
          as="section"
          id="arrange-nori-brand-story"
          className="pt-8 pb-4"
        >
          <div className="max-w-3xl mx-auto p-10 sm:p-14 rounded-3xl bg-[#252120] border border-[#3D3634] text-center space-y-6 relative overflow-hidden shadow-xl">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#D9B4B0]/15 blur-3xl rounded-full pointer-events-none" />

            <span className="text-[10px] uppercase tracking-[0.28em] text-[#D9B4B0] font-semibold block">
              The Spirit of NORI
            </span>

            <p className="text-2xl sm:text-3xl font-sans font-bold text-[#F7F2EC] leading-snug [text-wrap:balance]">
              "NORI comes from the Korean word '놀이' (nori) — meaning play."
            </p>

            <div className="max-w-xl mx-auto space-y-3 text-sm sm:text-base text-[#BFB3AC] font-normal leading-relaxed">
              <p>
                Because discovering Korea should feel personal, curious and fun.
              </p>
              <p>
                There is no one right way to experience Korea, beauty, or yourself.
              </p>
            </div>

            <div className="pt-2">
              <p className="text-xl sm:text-2xl font-sans font-bold text-[#F7F2EC] leading-relaxed">
                Find your glow.<br />
                <span className="text-[#E9D2CD]">Play your way.</span>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
