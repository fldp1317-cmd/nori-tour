import React from 'react';
import { Sparkles, ArrowRight, Star, Heart, CheckCircle2, ShieldCheck, Compass, Sparkle } from 'lucide-react';
import { Tour, JournalArticle, Review } from '../types';
import { TourCard } from '../components/TourCard';

interface HomePageProps {
  tours: Tour[];
  articles: JournalArticle[];
  reviews: Review[];
  onSelectTour: (tour: Tour) => void;
  onBookTour: (tourId?: string) => void;
  onStartBeautyJourney: () => void;
  onSelectArticle: (article: JournalArticle) => void;
  onNavigate: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  tours,
  articles,
  reviews,
  onSelectTour,
  onBookTour,
  onStartBeautyJourney,
  onSelectArticle,
  onNavigate,
}) => {
  // Ensure the 3-day signature experience leads, followed by Skincare and Makeup lines
  const featuredOrder: Record<string, number> = {
    'nori-complete-glow-journey': 1,
    'nori-skin-edit': 2,
    'nori-skin-discovery': 3,
    'nori-glow-day': 4,
    'nori-makeup-studio-journey': 5,
    'personal-color-kbeauty-styling': 6,
  };

  const featuredTours = [...tours]
    .filter(t => t.isFeatured)
    .sort((a, b) => {
      const aOrder = featuredOrder[a.id] ?? 99;
      const bOrder = featuredOrder[b.id] ?? 99;
      if (aOrder !== bOrder) return aOrder - bOrder;
      return b.rating - a.rating;
    })
    .slice(0, 6);

  const completeGlowTour = tours.find(t => t.id === 'nori-complete-glow-journey');
  const skinEditTour = tours.find(t => t.id === 'nori-skin-edit');
  const previewArticles = articles.slice(0, 3);
  const previewReviews = reviews.slice(0, 3);

  return (
    <div id="home-page" className="w-full bg-[#F7F2EC]">
      {/* 1. Hero Section: Premium Korean Beauty Editorial */}
      <section
        id="hero-section"
        className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-6 sm:px-8 overflow-hidden bg-[#F7F2EC]"
      >
        {/* Editorial Visual with Soft Rose & Warm Ivory Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=2000&q=85"
            alt="Korean Porcelain Glass Skin and Serene Radiance"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=2000&q=85';
            }}
            className="w-full h-full object-cover object-center opacity-25 scale-105 transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F7F2EC]/85 via-[#F7F2EC]/60 to-[#F7F2EC]" />
          
          {/* Subtle Ambient Glow Motifs */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] bg-[#E9D2CD]/35 blur-3xl rounded-full" />
          <div className="absolute top-1/4 right-10 w-48 h-48 bg-[#D9B4B0]/20 blur-2xl rounded-full" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          {/* Brand Concept Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FCFAF7]/95 border border-[#EADBCE] shadow-xs backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#D9B4B0] animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.26em] text-[#786761] font-medium">
              NORI TOUR • Nori • SEOUL BEAUTY & WELLNESS
            </span>
          </div>

          {/* Exact Hero Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-editorial font-light text-[#302B29] tracking-tight leading-[1.1]">
              Find Your Glow. <br />
              <span className="italic font-normal text-[#786761]">Play Your Way.</span>
            </h1>

            {/* Exact Hero Supporting Copy */}
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#786761] font-light leading-relaxed">
              Curated K-beauty, wellness, and cultural experiences designed to help you discover what truly works for you — and enjoy Korea in a way that feels entirely your own.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              id="hero-start-journey-cta"
              onClick={onStartBeautyJourney}
              className="w-full sm:w-auto px-8 py-4 bg-[#302B29] hover:bg-[#443E3B] text-[#F7F2EC] rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md flex items-center justify-center gap-2.5 group border border-[#302B29]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E9D2CD] group-hover:rotate-12 transition-transform" />
              <span>Start Your Beauty Journey</span>
            </button>
            <button
              id="hero-explore-cta"
              onClick={() => onNavigate('experiences')}
              className="w-full sm:w-auto px-8 py-4 bg-[#FCFAF7] hover:bg-[#F4E8E5] text-[#302B29] border border-[#EADBCE] hover:border-[#D9B4B0] rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Explore Experiences</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#786761]" />
            </button>
          </div>

          {/* Editorial Trust Markers */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-center border-t border-[#EADBCE]/80">
            <div className="p-2">
              <span className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">Nori</span>
              <p className="text-[11px] uppercase tracking-wider text-[#786761] font-medium mt-0.5">Mindful Play</p>
            </div>
            <div className="p-2">
              <span className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">100%</span>
              <p className="text-[11px] uppercase tracking-wider text-[#786761] font-medium mt-0.5">Independent Advice</p>
            </div>
            <div className="p-2">
              <span className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">Max 4</span>
              <p className="text-[11px] uppercase tracking-wider text-[#786761] font-medium mt-0.5">Intimate Groups</p>
            </div>
            <div className="p-2">
              <span className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">Tailored</span>
              <p className="text-[11px] uppercase tracking-wider text-[#786761] font-medium mt-0.5">Personalized Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Flagship Section: The Complete NORI Experience */}
      {completeGlowTour && (
        <section id="complete-nori-experience" className="py-20 px-6 sm:px-8 bg-[#FCFAF7] border-y border-[#EADBCE]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Story & Journey Sequence */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4E8E5] text-[#786761] text-[10px] uppercase tracking-[0.24em] font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-[#D9B4B0]" />
                  <span>NORI Signature • 3-Day Private Journey</span>
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-5xl font-editorial font-light text-[#302B29] leading-tight">
                    The Complete NORI Experience
                  </h2>
                  <p className="text-sm sm:text-base text-[#786761] font-light leading-relaxed max-w-2xl">
                    For guests who want more than a beauty tour. Spend three days discovering what works for your skin, learning what colors suit you, practicing Korean-inspired makeup with a professional, and building a beauty routine you can take home.
                  </p>
                </div>

                {/* 4 Pillars Quote */}
                <div className="p-4 bg-[#F7F2EC] rounded-2xl border border-[#EADBCE] text-xs text-[#302B29] font-medium flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9B4B0]" />
                    Understand your skin.
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9B4B0]" />
                    Discover your colors.
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9B4B0]" />
                    Learn your look.
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9B4B0]" />
                    Take your glow home.
                  </span>
                </div>

                {/* 3-Day Journey Outline */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-4 rounded-2xl bg-[#F7F2EC] border border-[#EADBCE] space-y-1.5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D9B4B0] block">
                      Day 1
                    </span>
                    <h3 className="text-sm font-editorial font-medium text-[#302B29]">Know Your Skin</h3>
                    <p className="text-[11px] text-[#786761] leading-relaxed font-light">
                      Routine audit, skin barrier education, and targeted zero-pressure shopping.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F7F2EC] border border-[#EADBCE] space-y-1.5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D9B4B0] block">
                      Day 2
                    </span>
                    <h3 className="text-sm font-editorial font-medium text-[#302B29]">Colors & Makeup</h3>
                    <p className="text-[11px] text-[#786761] leading-relaxed font-light">
                      Personal color drape, hands-on lesson ("Half by the artist. Half by you"), and makeup shopping.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F7F2EC] border border-[#EADBCE] space-y-1.5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D9B4B0] block">
                      Day 3
                    </span>
                    <h3 className="text-sm font-editorial font-medium text-[#302B29]">Glow Your Way</h3>
                    <p className="text-[11px] text-[#786761] leading-relaxed font-light">
                      Facial or scalp wellness, K-beauty lifestyle play, and your final NORI Glow Book.
                    </p>
                  </div>
                </div>

                {/* Logistics note */}
                <p className="text-[11px] text-[#786761] font-light">
                  * Accommodation is not included by default. Guests stay at their own preferred hotel and meet NORI daily for scheduled sessions.
                </p>
              </div>

              {/* Right Column: Visual Card with Pricing and CTA */}
              <div className="lg:col-span-5">
                <div className="bg-[#F7F2EC] border border-[#EADBCE] rounded-3xl p-6 sm:p-7 space-y-5 shadow-sm">
                  <div className="relative aspect-16/10 rounded-2xl overflow-hidden border border-[#EADBCE]">
                    <img
                      src={completeGlowTour.heroImage}
                      alt={completeGlowTour.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-[#F7F2EC]/90 backdrop-blur-md rounded-full text-[10px] font-semibold tracking-wider text-[#302B29] uppercase">
                      Signature 3-Day Journey
                    </div>
                    <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-light italic">
                      “You don’t leave with more products. You leave knowing what works for you.”
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-[#EADBCE] pb-3">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#9B8983] block">Duration</span>
                        <span className="text-sm font-editorial font-medium text-[#302B29]">3 Days (Guided)</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase tracking-wider text-[#9B8983] block">Pricing</span>
                        <span className="text-base font-editorial font-medium text-[#302B29]">Price on Request</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <button
                        id="home-explore-complete-journey-cta"
                        onClick={() => onSelectTour(completeGlowTour)}
                        className="w-full py-4 bg-[#302B29] hover:bg-[#443E3B] text-[#F7F2EC] text-xs uppercase tracking-[0.2em] font-medium rounded-full transition-all text-center shadow-xs flex items-center justify-center gap-2 group"
                      >
                        <span>Explore the 3-Day Journey</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#D9B4B0] group-hover:translate-x-1 transition-transform" />
                      </button>

                      <button
                        onClick={onStartBeautyJourney}
                        className="w-full py-3 bg-transparent hover:bg-[#FCFAF7] text-[#786761] hover:text-[#302B29] text-[11px] uppercase tracking-[0.16em] font-medium rounded-full transition-all text-center border border-[#EADBCE]"
                      >
                        Take the Personalized Beauty Journey Flow
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2. Featured Experiences Section */}
      <section id="featured-experiences" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-1.5">
            <span className="text-xs uppercase tracking-[0.24em] text-[#D9B4B0] font-medium block">
              Curated Journeys
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#302B29]">
              Featured Experiences
            </h2>
          </div>
          <button
            onClick={() => onNavigate('experiences')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#302B29] hover:text-[#786761] font-medium transition-colors border-b border-[#302B29] hover:border-[#786761] pb-1 self-start md:self-auto"
          >
            <span>View All Curations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Featured Entry Point Spotlight: NORI Skin Edit */}
        <div className="mb-12 p-8 sm:p-10 rounded-3xl bg-[#FCFAF7] border border-[#EADBCE] shadow-sm relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4E8E5] text-[#786761] text-[10px] uppercase tracking-[0.2em] font-semibold">
              <Sparkles className="w-3 h-3 text-[#D9B4B0]" />
              <span>Recommended First Step • 2-Hour Experience</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-editorial font-light text-[#302B29] leading-snug">
              Not sure where to start with K-beauty?
            </h3>
            <p className="text-sm sm:text-base text-[#786761] font-light leading-relaxed">
              Start with <strong className="font-medium text-[#302B29]">NORI Skin Edit</strong> — a personalized skincare consultation and shopping experience designed to help you understand what your skin actually needs.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-[#786761]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Cafe routine review
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                No sales pressure
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Custom shopping framework
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col shrink-0 gap-3 w-full sm:w-auto">
            {skinEditTour && (
              <button
                id="explore-skin-edit-cta"
                onClick={() => onSelectTour(skinEditTour)}
                className="px-7 py-3.5 bg-[#302B29] hover:bg-[#443E3B] text-[#F7F2EC] text-xs uppercase tracking-[0.18em] font-medium rounded-full transition-all text-center shadow-xs"
              >
                Explore NORI Skin Edit
              </button>
            )}
            <button
              id="start-beauty-journey-home-cta"
              onClick={onStartBeautyJourney}
              className="px-7 py-3.5 bg-transparent hover:bg-[#F4E8E5] text-[#302B29] border border-[#EADBCE] text-xs uppercase tracking-[0.18em] font-medium rounded-full transition-all text-center"
            >
              Take Beauty Journey Quiz
            </button>
          </div>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTours.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
              onSelectTour={onSelectTour}
              onBookTour={onBookTour}
            />
          ))}
        </div>
      </section>

      {/* 2.5 Sequential Story Progression: Consult → Discover → Play → Learn → Glow */}
      <section id="nori-progression-story" className="py-24 px-6 sm:px-8 bg-[#F7F2EC] border-t border-[#EADBCE]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCFAF7] border border-[#EADBCE] text-[#786761] text-[10px] uppercase tracking-[0.24em] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#D9B4B0]" />
              <span>The NORI Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#302B29]">
              How Your Journey Unfolds
            </h2>
            <p className="text-sm sm:text-base text-[#786761] font-light leading-relaxed">
              A thoughtful progression from first welcoming tea to lifelong confidence. We guide you every step of the way without overwhelming product hauls or clinical jargon.
            </p>
          </div>

          {/* 5-Step Editorial Visual Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                stage: 'Consult',
                title: 'Welcoming Consultation',
                desc: 'Unwind over Korean tea. We audit your daily routine, test skin barrier hydration, and establish your personal goals without sales pressure.',
                image: 'https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=800&q=80',
                alt: 'Welcoming consultation and routine review over tea'
              },
              {
                step: '02',
                stage: 'Discover',
                title: 'Product Discovery & Shopping',
                desc: 'Navigate Seoul’s beauty flagships and apothecary shelves with a bilingual curator. Decode ingredients and find formulas that truly suit you.',
                image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
                alt: 'Skincare discovery and curated shopping in Seoul'
              },
              {
                step: '03',
                stage: 'Play',
                title: 'Personal Color & Makeup Play',
                desc: 'Experience precision draping under calibrated neutral daylight. Test cushions, blush formulas, and lip tints that harmonize with your natural features.',
                image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80',
                alt: 'Personal color analysis and seasonal cosmetic testing'
              },
              {
                step: '04',
                stage: 'Learn',
                title: 'Hands-On Masterclass',
                desc: '“Half by the artist. Half by you.” Practice technique in the mirror with the artist guiding your hand so you take real muscle memory home.',
                image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
                alt: 'Hands-on makeup lesson and mirror technique practice'
              },
              {
                step: '05',
                stage: 'Glow',
                title: 'Radiant, Natural Glow',
                desc: 'Leave Seoul with glowing, resilient skin, effortless everyday confidence, and your personalized NORI routine blueprint for life.',
                image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
                alt: 'Radiant, natural skin glow and lasting confidence'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl overflow-hidden hover:border-[#D9B4B0] transition-all duration-300 shadow-xs flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#ECE4D9]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  
                  {/* Step Chip */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#F7F2EC]/95 backdrop-blur-md rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold text-[#302B29]">
                    {item.step} • {item.stage}
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <h3 className="text-lg font-editorial font-light text-[#302B29] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#786761] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="pt-3 border-t border-[#EADBCE]/80 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] font-medium text-[#D9B4B0]">
                    <span>Step {item.step} of 05</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why NORI Section */}
      <section id="why-nori-section" className="py-24 px-6 sm:px-8 bg-[#FCFAF7] border-y border-[#EADBCE]">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.26em] text-[#D9B4B0] font-medium">
              Why NORI
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#302B29]">
              Beauty, curated around you.
            </h2>
            <p className="text-sm sm:text-base text-[#786761] font-light leading-relaxed">
              K-beauty is extraordinary, but it can feel overwhelming with thousands of products, treatments, clinics, and trends. NORI offers thoughtful, pressure-free navigation so you leave Korea with what genuinely suits your skin.
            </p>
          </div>

          {/* 6 Key Pillars of Why NORI */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-[#F7F2EC] border border-[#EADBCE] space-y-3 hover:border-[#D9B4B0] transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#F4E8E5] flex items-center justify-center text-[#302B29] mb-1">
                <Sparkles className="w-4 h-4 text-[#D9B4B0]" />
              </div>
              <h3 className="font-editorial text-2xl font-light text-[#302B29]">
                Personalized K-Beauty Guidance
              </h3>
              <p className="text-xs sm:text-sm text-[#786761] leading-relaxed font-light">
                No two complexions are identical. We look closely at your skin goals, sensitivities, and travel schedule to guide routines and treatments that work in harmony with your natural barrier.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F7F2EC] border border-[#EADBCE] space-y-3 hover:border-[#D9B4B0] transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#F4E8E5] flex items-center justify-center text-[#302B29] mb-1">
                <Compass className="w-4 h-4 text-[#D9B4B0]" />
              </div>
              <h3 className="font-editorial text-2xl font-light text-[#302B29]">
                Deep Local Knowledge
              </h3>
              <p className="text-xs sm:text-sm text-[#786761] leading-relaxed font-light">
                Beyond viral social media spots, our Seoul insiders guide you to serene Hanok head spas, acclaimed dermatology clinics in Cheongdam, and quiet boutique formulation labs in Seongsu.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F7F2EC] border border-[#EADBCE] space-y-3 hover:border-[#D9B4B0] transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#F4E8E5] flex items-center justify-center text-[#302B29] mb-1">
                <ShieldCheck className="w-4 h-4 text-[#D9B4B0]" />
              </div>
              <h3 className="font-editorial text-2xl font-light text-[#302B29]">
                Honest Recommendations
              </h3>
              <p className="text-xs sm:text-sm text-[#786761] leading-relaxed font-light">
                We maintain strict zero-commission independence from clinics and brands. If a gentle $20 soothing essence is better than an expensive clinical procedure, we will tell you honestly.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F7F2EC] border border-[#EADBCE] space-y-3 hover:border-[#D9B4B0] transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#F4E8E5] flex items-center justify-center text-[#302B29] mb-1">
                <Sparkle className="w-4 h-4 text-[#D9B4B0]" />
              </div>
              <h3 className="font-editorial text-2xl font-light text-[#302B29]">
                Beauty + Wellness Expertise
              </h3>
              <p className="text-xs sm:text-sm text-[#786761] leading-relaxed font-light">
                Our guides are certified dermo-aestheticians and wellness curators. We translate medical-grade scans, explain ingredient formulations, and help prevent reactive breakouts.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F7F2EC] border border-[#EADBCE] space-y-3 hover:border-[#D9B4B0] transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#F4E8E5] flex items-center justify-center text-[#302B29] mb-1">
                <Heart className="w-4 h-4 text-[#D9B4B0]" />
              </div>
              <h3 className="font-editorial text-2xl font-light text-[#302B29]">
                Comfortable & Pressure-Free
              </h3>
              <p className="text-xs sm:text-sm text-[#786761] leading-relaxed font-light">
                Travel in Korea should feel relaxing, warm, and restorative. There is never any rush, forced purchases, or commercial tourist traps—just an unhurried, comfortable pace.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F7F2EC] border border-[#EADBCE] space-y-3 hover:border-[#D9B4B0] transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#F4E8E5] flex items-center justify-center text-[#302B29] mb-1">
                <CheckCircle2 className="w-4 h-4 text-[#D9B4B0]" />
              </div>
              <h3 className="font-editorial text-2xl font-light text-[#302B29]">
                Curated for Individual Needs
              </h3>
              <p className="text-xs sm:text-sm text-[#786761] leading-relaxed font-light">
                Whether you are managing rosacea, recovering from long-haul flights, or searching for customized personal color palettes, every itinerary is shaped around your specific wishes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Honest Guidance / Our Philosophy */}
      <section id="honest-guidance-section" className="py-24 px-6 sm:px-8 bg-[#F7F2EC]">
        <div className="max-w-5xl mx-auto">
          <div className="p-10 sm:p-14 rounded-3xl bg-[#FCFAF7] border border-[#EADBCE] shadow-xs relative overflow-hidden">
            {/* Subtle glow highlight */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#E9D2CD]/30 blur-3xl rounded-full pointer-events-none" />

            <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
              <span className="text-xs uppercase tracking-[0.28em] text-[#D9B4B0] font-medium">
                Our Core Philosophy
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#302B29] leading-tight">
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
      </section>

      {/* 5. Beauty Journal Preview */}
      <section id="journal-preview" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-1.5">
            <span className="text-xs uppercase tracking-[0.24em] text-[#D9B4B0] font-medium block">
              Editorial Publication
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#302B29]">
              The Beauty Journal
            </h2>
          </div>
          <button
            onClick={() => onNavigate('journal')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#302B29] hover:text-[#786761] font-medium transition-colors border-b border-[#302B29] hover:border-[#786761] pb-1 self-start md:self-auto"
          >
            <span>Read All Stories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Magazine-style articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group cursor-pointer bg-[#FCFAF7] border border-[#EADBCE] rounded-2xl overflow-hidden hover:border-[#D9B4B0] transition-all flex flex-col justify-between hover:shadow-md"
            >
              <div>
                <div className="relative aspect-16/10 overflow-hidden bg-[#ECE4D9]">
                  <img
                    src={article.heroImage}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-[#F7F2EC]/90 backdrop-blur-md text-[10px] uppercase tracking-[0.16em] text-[#302B29] font-semibold rounded-full shadow-2xs">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] text-[#786761] mb-2.5">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-editorial font-light text-[#302B29] group-hover:text-[#786761] transition-colors leading-snug mb-3">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#786761] leading-relaxed line-clamp-2 font-light">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#EADBCE]/60 text-xs text-[#786761]">
                <span>By {article.author.name}</span>
                <span className="group-hover:text-[#302B29] font-medium flex items-center gap-1">
                  Read Story <ArrowRight className="w-3 h-3 text-[#D9B4B0]" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. Guest Reviews Section */}
      <section id="guest-reviews" className="py-24 px-6 sm:px-8 bg-[#FCFAF7] border-y border-[#EADBCE]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D9B4B0] font-medium">
              Guest Reflections
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#302B29]">
              Traveler Words
            </h2>
            <p className="text-xs sm:text-sm text-[#786761] font-light">
              Read how international guests discovered Seoul's most intimate beauty rituals with our bilingual hosts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-8 rounded-2xl bg-[#F7F2EC] border border-[#EADBCE] flex flex-col justify-between hover:border-[#D9B4B0] transition-colors shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#F59E0B] mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B]" />
                    ))}
                  </div>
                  <p className="text-sm font-editorial text-[#302B29] italic leading-relaxed mb-6 font-light">
                    "{rev.reviewText}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EADBCE] flex items-center gap-3">
                  {rev.guestPhoto ? (
                    <img
                      src={rev.guestPhoto}
                      alt={rev.guestName}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-[#EADBCE]"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#E9D2CD] flex items-center justify-center text-xs font-semibold text-[#302B29]">
                      {rev.guestName.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="text-xs font-semibold text-[#302B29] tracking-wide">
                      {rev.guestName}
                    </h4>
                    <p className="text-[11px] text-[#786761]">{rev.country}</p>
                    <p className="text-[10px] text-[#786761] font-medium truncate max-w-[200px]">
                      {rev.tourName}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('reviews')}
              className="px-6 py-2.5 border border-[#EADBCE] hover:border-[#302B29] bg-[#F7F2EC] rounded-full text-xs uppercase tracking-[0.16em] font-medium text-[#302B29] transition-all"
            >
              Explore All Guest Reviews
            </button>
          </div>
        </div>
      </section>

      {/* 7. About NORI Section */}
      <section id="about-nori-section" className="py-24 px-6 sm:px-8 bg-[#F7F2EC]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="relative aspect-3/4 rounded-3xl overflow-hidden shadow-md bg-[#ECE4D9]">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                alt="Lucy, Representative Director of NORI TOUR"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#FCFAF7]/95 backdrop-blur-md border border-[#EADBCE] text-xs">
                <span className="text-[10px] uppercase tracking-wider text-[#D9B4B0] font-semibold block">
                  Representative Director
                </span>
                <p className="font-editorial text-sm font-medium text-[#302B29]">
                  Lucy • Representative Director
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FCFAF7] border border-[#EADBCE] text-xs text-[#786761]">
              <span className="text-xs font-serif text-[#D9B4B0]">Nori</span>
              <span>The Meaning Behind Our Name</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-editorial font-light text-[#302B29] leading-tight">
              NORI comes from the Korean word “Nori,” meaning “play.”
            </h2>

            <div className="space-y-4 text-sm text-[#786761] font-light leading-relaxed">
              <p>
                For NORI, <span className="text-[#302B29] font-medium font-editorial italic">“play”</span> means exploring freely, discovering what suits you, enjoying the process, and experiencing Korea in a personal, relaxed way.
              </p>
              <p>
                We believe discovering beauty and Korea should feel curious, enjoyable, relaxed, personal, and completely pressure-free. You will never encounter aggressive clinic sales pitches or confusing medical jargon with our hosts.
              </p>
              <p>
                Our promise is honest recommendations: helping you understand your choices and leaving Korea with products you genuinely love, a routine you understand, and a lasting glow.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3 border border-[#302B29] hover:bg-[#302B29] hover:text-[#F7F2EC] rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all"
              >
                Read Our Story & Philosophy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final Booking CTA Section */}
      <section id="final-booking-cta" className="py-28 px-6 sm:px-8 bg-[#302B29] text-[#F7F2EC] relative overflow-hidden">
        {/* Soft Radiance in Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D9B4B0]/15 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs uppercase tracking-[0.2em] text-[#E9D2CD] font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#D9B4B0]" />
            <span>Find Your Glow. Play Your Way.</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-light text-[#F7F2EC] leading-tight">
            Ready to discover Korea in your own radiant way?
          </h2>

          <p className="text-sm sm:text-base text-[#D9B4B0] max-w-2xl mx-auto font-light leading-relaxed">
            NORI helps you find what works for you, enjoy the discovery, and leave Korea glowing in your own way.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              id="final-start-journey-cta"
              onClick={onStartBeautyJourney}
              className="w-full sm:w-auto px-9 py-4 bg-[#D9B4B0] hover:bg-[#E9D2CD] text-[#302B29] text-xs uppercase tracking-[0.2em] font-semibold rounded-full transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#302B29]" />
              <span>Start Your Beauty Journey</span>
            </button>
            <button
              onClick={() => onNavigate('experiences')}
              className="w-full sm:w-auto px-9 py-4 bg-transparent hover:bg-white/10 border border-[#786761] text-[#F7F2EC] text-xs uppercase tracking-[0.18em] font-medium rounded-full transition-all"
            >
              Explore Experiences
            </button>
          </div>

          <div className="pt-4 text-xs text-[#9B8983]">
            <span>Personalized K-Beauty • Intimate Boutique Groups • Honest Recommendations</span>
          </div>
        </div>
      </section>
    </div>
  );
};
