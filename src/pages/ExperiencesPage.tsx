import React, { useState, useMemo } from 'react';
import { Sparkles, Search, SlidersHorizontal, ArrowRight, ShieldCheck, Heart, Layers } from 'lucide-react';
import { Tour, TourCategory } from '../types';
import { TourCard } from '../components/TourCard';

interface ExperiencesPageProps {
  tours: Tour[];
  onSelectTour: (tour: Tour) => void;
  onBookTour: (tourId?: string) => void;
}

const CATEGORIES: ('All' | TourCategory)[] = [
  'All',
  'Skincare + Makeup + Wellness',
  'Skincare',
  'Makeup',
  'Beauty',
  'Wellness',
  'Culture',
  'Private Experiences'
];

export const ExperiencesPage: React.FC<ExperiencesPageProps> = ({
  tours,
  onSelectTour,
  onBookTour,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | TourCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');

  const completeGlowTour = tours.find(t => t.id === 'nori-complete-glow-journey');

  const filteredTours = useMemo(() => {
    const tourEditorialOrder: Record<string, number> = {
      'nori-complete-glow-journey': 1,
      'nori-skin-edit': 2,
      'nori-skin-discovery': 3,
      'nori-glow-day': 4,
      'nori-makeup-studio-journey': 5,
      'personal-color-kbeauty-styling': 6,
    };

    return tours
      .filter((tour) => {
        let matchesCategory = false;
        if (selectedCategory === 'All') {
          matchesCategory = true;
        } else if (selectedCategory === 'Skincare') {
          matchesCategory =
            tour.category === 'Skincare' ||
            tour.category === 'Skincare + Wellness' ||
            tour.category === 'Skincare + Makeup + Wellness';
        } else if (selectedCategory === 'Makeup') {
          matchesCategory =
            tour.category === 'Makeup' ||
            tour.category === 'Skincare + Makeup + Wellness';
        } else if (selectedCategory === 'Wellness') {
          matchesCategory =
            tour.category === 'Wellness' ||
            tour.category === 'Skincare + Wellness' ||
            tour.category === 'Skincare + Makeup + Wellness';
        } else {
          matchesCategory = tour.category === selectedCategory;
        }

        const matchesSearch =
          searchQuery.trim() === '' ||
          tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tour.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tour.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tour.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.startingPrice - b.startingPrice;
        if (sortBy === 'price-high') return b.startingPrice - a.startingPrice;
        if (sortBy === 'rating') return b.rating - a.rating;

        // Default: featured with strict editorial ordering for signature experiences
        const aOrder = tourEditorialOrder[a.id] ?? 99;
        const bOrder = tourEditorialOrder[b.id] ?? 99;
        if (aOrder !== bOrder) return aOrder - bOrder;

        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      });
  }, [tours, selectedCategory, searchQuery, sortBy]);

  return (
    <div id="experiences-page" className="w-full pt-28 pb-24 bg-[#F7F2EC]">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCFAF7] border border-[#EADBCE]">
            <span className="w-2 h-2 rounded-full bg-[#D9B4B0]" />
            <span className="text-xs uppercase tracking-[0.26em] text-[#786761] font-medium">
              Curated Portfolio • Nori
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-light text-[#302B29] leading-tight">
            Curated Experiences in Seoul
          </h1>
          <p className="text-sm sm:text-base text-[#786761] font-light leading-relaxed max-w-2xl">
            Explore freely and discover what truly suits you. Every experience is guided by licensed, bilingual hosts who prioritize honest recommendations and your personal comfort.
          </p>
        </div>

        {/* PROMINENT SIGNATURE EXPERIENCE: NORI Complete Glow Journey */}
        {completeGlowTour && (
          <div
            id="signature-experience-card"
            className="mt-10 p-6 sm:p-8 lg:p-10 bg-[#FCFAF7] border-2 border-[#D9B4B0] rounded-3xl relative overflow-hidden shadow-md"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Column: Storytelling & Details */}
              <div className="space-y-5 max-w-2xl text-left">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3.5 py-1 bg-[#D9B4B0] text-[#302B29] text-[10px] uppercase tracking-[0.22em] font-semibold rounded-full shadow-2xs">
                    SIGNATURE EXPERIENCE
                  </span>
                  <span className="px-3 py-1 bg-[#F7F2EC] text-[#786761] text-[10px] uppercase tracking-[0.2em] font-medium rounded-full border border-[#EADBCE]">
                    {completeGlowTour.category}
                  </span>
                  <span className="px-3 py-1 bg-[#F7F2EC] text-[#786761] text-[10px] uppercase tracking-[0.2em] font-medium rounded-full border border-[#EADBCE]">
                    {completeGlowTour.duration}
                  </span>
                </div>

                <div className="space-y-2">
                  <h2
                    onClick={() => onSelectTour(completeGlowTour)}
                    className="text-2xl sm:text-3xl lg:text-4xl font-editorial font-light text-[#302B29] hover:text-[#786761] transition-colors cursor-pointer"
                  >
                    {completeGlowTour.title}
                  </h2>
                  <div className="space-y-0.5">
                    <p className="text-base font-editorial text-[#302B29] font-medium">
                      Three days.
                    </p>
                    <p className="text-sm font-editorial italic text-[#786761]">
                      One beauty journey, entirely your own.
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-[#786761] leading-relaxed font-light pt-1">
                    {completeGlowTour.shortDescription}
                  </p>
                </div>

                {/* 4 Core Pillars Highlight */}
                <div className="p-4 bg-[#F7F2EC] rounded-2xl border border-[#EADBCE]">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-[#302B29]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D9B4B0] shrink-0" />
                      <span className="font-medium">Understand your skin.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D9B4B0] shrink-0" />
                      <span className="font-medium">Discover your colors.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D9B4B0] shrink-0" />
                      <span className="font-medium">Learn your look.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D9B4B0] shrink-0" />
                      <span className="font-medium">Take your glow home.</span>
                    </div>
                  </div>
                </div>

                {/* Additional Note: Private journey, accommodation not included */}
                <div className="text-[11px] text-[#786761] font-light flex items-center gap-2">
                  <span className="text-[#D9B4B0] font-bold">ℹ</span>
                  <span>
                    3-Day guided experience • Stay at your own hotel and meet NORI daily in Seoul
                  </span>
                </div>
              </div>

              {/* Right Column: Visual, Pricing & CTA */}
              <div className="w-full lg:w-80 shrink-0 space-y-4">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-[#EADBCE] shadow-xs">
                  <img
                    src={completeGlowTour.heroImage}
                    alt={completeGlowTour.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] font-light italic">
                    Includes Your Personal NORI Glow Book
                  </div>
                </div>

                <div className="p-4 bg-[#F7F2EC] rounded-2xl border border-[#EADBCE] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-[#9B8983]">Pricing</span>
                    <span className="text-base font-editorial font-medium text-[#302B29]">
                      Price on Request
                    </span>
                  </div>
                  <button
                    id="view-signature-experience-btn"
                    onClick={() => onSelectTour(completeGlowTour)}
                    className="w-full py-3.5 bg-[#302B29] hover:bg-[#443E3B] text-[#F7F2EC] rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all shadow-xs flex items-center justify-center gap-2 group"
                  >
                    <span>View Signature Experience</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D9B4B0] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Visual Progression: The Skincare Experience Continuum */}
        <div className="mt-10 p-6 sm:p-8 bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#EADBCE]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9B4B0] font-semibold block mb-1">
                The Skincare Experience Continuum
              </span>
              <h2 className="text-xl sm:text-2xl font-editorial font-light text-[#302B29]">
                Choose Your Level of Depth
              </h2>
            </div>
            <p className="text-xs text-[#786761] max-w-md font-light leading-relaxed">
              Designed to eliminate K-beauty overwhelm. Our hosts never push products or accept brand commissions — only curated routines tailored to your actual skin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {/* Level 1 */}
            <div 
              onClick={() => {
                const tour = tours.find(t => t.id === 'nori-skin-edit');
                if (tour) onSelectTour(tour);
              }}
              className="group p-5 bg-[#F7F2EC] rounded-2xl border border-[#EADBCE] hover:border-[#D9B4B0] transition-all cursor-pointer space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D9B4B0]">
                  Level 1 • 2 Hours
                </span>
                <span className="text-xs font-editorial font-medium text-[#302B29]">$115 USD</span>
              </div>
              <h3 className="text-lg font-editorial font-medium text-[#302B29] group-hover:text-[#786761] transition-colors">
                NORI Skin Edit
              </h3>
              <p className="text-xs text-[#786761] leading-relaxed font-light">
                <strong className="font-medium text-[#302B29]">Quick Personalized Guidance.</strong> Cafe routine audit, skin priorities, and targeted curated shopping.
              </p>
              <div className="pt-2 flex items-center text-[11px] font-medium text-[#302B29] group-hover:text-[#D9B4B0] gap-1">
                <span>View 2-Hour Edit</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>

            {/* Level 2 */}
            <div 
              onClick={() => {
                const tour = tours.find(t => t.id === 'nori-skin-discovery');
                if (tour) onSelectTour(tour);
              }}
              className="group p-5 bg-[#F7F2EC] rounded-2xl border border-[#EADBCE] hover:border-[#D9B4B0] transition-all cursor-pointer space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D9B4B0]">
                  Level 2 • Half Day (3.5h)
                </span>
                <span className="text-xs font-editorial font-medium text-[#302B29]">$190 USD</span>
              </div>
              <h3 className="text-lg font-editorial font-medium text-[#302B29] group-hover:text-[#786761] transition-colors">
                NORI Skin Discovery
              </h3>
              <p className="text-xs text-[#786761] leading-relaxed font-light">
                <strong className="font-medium text-[#302B29]">Deeper Understanding.</strong> In-depth barrier analysis, multi-district shopping (Olive Young + brand flagships), and ingredient education.
              </p>
              <div className="pt-2 flex items-center text-[11px] font-medium text-[#302B29] group-hover:text-[#D9B4B0] gap-1">
                <span>View Half-Day Discovery</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>

            {/* Level 3 */}
            <div 
              onClick={() => {
                const tour = tours.find(t => t.id === 'nori-glow-day');
                if (tour) onSelectTour(tour);
              }}
              className="group p-5 bg-[#F7F2EC] rounded-2xl border border-[#EADBCE] hover:border-[#D9B4B0] transition-all cursor-pointer space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D9B4B0]">
                  Level 3 • Full Day (6–7h)
                </span>
                <span className="text-xs font-editorial font-medium text-[#302B29]">$320 USD</span>
              </div>
              <h3 className="text-lg font-editorial font-medium text-[#302B29] group-hover:text-[#786761] transition-colors">
                NORI Glow Day
              </h3>
              <p className="text-xs text-[#786761] leading-relaxed font-light">
                <strong className="font-medium text-[#302B29]">Full-Day Beauty + Wellness.</strong> Complete consulting, aesthetic treatment coordination, curated shopping, and wellness tea pairing.
              </p>
              <div className="pt-2 flex items-center text-[11px] font-medium text-[#302B29] group-hover:text-[#D9B4B0] gap-1">
                <span>View Full-Day Experience</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Makeup Experience Comparison: Distinctive distinction between Color Play & Studio Journey */}
        <div className="mt-8 p-6 sm:p-8 bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#EADBCE]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9B4B0] font-semibold block mb-1">
                Makeup Experience Comparison
              </span>
              <h2 className="text-xl sm:text-2xl font-editorial font-light text-[#302B29]">
                Choose Your Makeup Experience
              </h2>
            </div>
            <p className="text-xs text-[#786761] max-w-md font-light leading-relaxed">
              From discovering your authentic color palette to hands-on 1-on-1 technique lessons with a professional artist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            {/* NORI Color & Makeup Play */}
            <div
              onClick={() => {
                const tour = tours.find(t => t.id === 'personal-color-kbeauty-styling');
                if (tour) onSelectTour(tour);
              }}
              className="group p-6 bg-[#F7F2EC] rounded-2xl border border-[#EADBCE] hover:border-[#D9B4B0] transition-all cursor-pointer space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#786761]">
                  Boutique Exploration • 3.5 Hours
                </span>
                <span className="text-xs font-editorial font-medium text-[#302B29]">From $220 USD</span>
              </div>

              <div>
                <h3 className="text-xl font-editorial font-medium text-[#302B29] group-hover:text-[#786761] transition-colors">
                  NORI Color & Makeup Play
                </h3>
                <p className="text-xs text-[#D9B4B0] font-medium tracking-wide mt-1">
                  Discover your colors. Explore K-beauty. Shop what suits you.
                </p>
              </div>

              <p className="text-xs text-[#786761] leading-relaxed font-light">
                Certified KS 140+ seasonal fabric draping diagnostic, personal cosmetics pouch audit (what harmonizes vs. clashes), and curated boutique shopping walk to match your exact foundation and lip tint codes.
              </p>

              <div className="pt-2 flex items-center text-[11px] font-medium text-[#302B29] group-hover:text-[#D9B4B0] gap-1">
                <span>View Color & Makeup Play</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>

            {/* NORI Makeup Studio Journey */}
            <div
              onClick={() => {
                const tour = tours.find(t => t.id === 'nori-makeup-studio-journey');
                if (tour) onSelectTour(tour);
              }}
              className="group p-6 bg-[#FCFAF7] rounded-2xl border-2 border-[#D9B4B0] hover:border-[#302B29] transition-all cursor-pointer space-y-4 relative shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D9B4B0]">
                  <Sparkles className="w-3 h-3 text-[#D9B4B0]" />
                  <span>Signature Studio Atelier • 5–6 Hours</span>
                </span>
                <span className="text-xs font-editorial font-medium text-[#302B29]">Price coming soon</span>
              </div>

              <div>
                <h3 className="text-xl font-editorial font-medium text-[#302B29] group-hover:text-[#786761] transition-colors">
                  NORI Makeup Studio Journey
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-medium text-[#302B29] bg-[#F4E8E5] px-2.5 py-0.5 rounded-full">
                    Half by the artist. Half by you.
                  </span>
                </div>
              </div>

              <div className="space-y-1 text-xs text-[#302B29] font-medium">
                <p className="text-[#D9B4B0] tracking-wide">
                  Discover your colors. Learn from a professional. Practice the look yourself. Shop to recreate it at home.
                </p>
                <p className="text-xs text-[#786761] leading-relaxed font-light pt-1">
                  The artist creates one side of your face while demonstrating Korean base and eye techniques. Then, under 1-on-1 coaching, you complete the other side yourself. Concludes with lesson-connected shopping and “Your NORI Makeup Guide.”
                </p>
              </div>

              <div className="pt-2 flex items-center text-[11px] font-medium text-[#302B29] group-hover:text-[#D9B4B0] gap-1">
                <span>View Makeup Studio Journey</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-10 pt-8 border-t border-[#EADBCE] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const count =
                cat === 'All'
                  ? tours.length
                  : tours.filter((t) => t.category === cat).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  id={`cat-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.14em] font-medium transition-all ${
                    isActive
                      ? 'bg-[#302B29] text-[#F7F2EC] shadow-xs'
                      : 'bg-[#FCFAF7] text-[#786761] hover:bg-[#F4E8E5] border border-[#EADBCE]'
                  }`}
                >
                  <span>{cat}</span>
                  <span className="ml-1.5 opacity-60 text-[10px]">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Search & Sort */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-[#786761] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search treatments, Hanok..."
                className="w-full pl-9 pr-4 py-2 bg-[#FCFAF7] border border-[#EADBCE] rounded-full text-xs text-[#302B29] placeholder-[#9B8983] focus:outline-none focus:border-[#D9B4B0]"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="w-full sm:w-auto px-4 py-2 bg-[#FCFAF7] border border-[#EADBCE] rounded-full text-xs text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
            >
              <option value="featured">Featured Curations</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid of Experiences */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {filteredTours.length === 0 ? (
          <div className="p-16 text-center bg-[#FCFAF7] rounded-3xl border border-[#EADBCE] space-y-4">
            <p className="text-xl font-editorial font-light text-[#302B29]">
              No curations found matching your criteria.
            </p>
            <p className="text-xs text-[#786761]">
              Try searching for a different treatment, or reset your category filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-5 py-2 bg-[#302B29] text-[#F7F2EC] text-xs uppercase tracking-wider rounded-full"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                onSelectTour={onSelectTour}
                onBookTour={onBookTour}
              />
            ))}
          </div>
        )}

        {/* Bottom Bespoke Concierge Callout */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#302B29] text-[#F7F2EC] flex flex-col md:flex-row items-center justify-between gap-8 shadow-md">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9B4B0] font-semibold">
              Personalized Guidance
            </span>
            <h3 className="text-2xl sm:text-3xl font-editorial font-light text-[#F7F2EC]">
              Looking for a custom multi-day beauty journey?
            </h3>
            <p className="text-xs text-[#D9B4B0] leading-relaxed font-light">
              We design bespoke itineraries tailored to your skin concerns, recovery schedules, and travel wishlist across Seoul.
            </p>
          </div>
          <button
            onClick={() => onBookTour()}
            className="px-8 py-3.5 bg-[#D9B4B0] text-[#302B29] hover:bg-[#E9D2CD] text-xs uppercase tracking-[0.18em] font-semibold rounded-full transition-all whitespace-nowrap shadow-md"
          >
            Inquire for Custom Itinerary
          </button>
        </div>
      </div>
    </div>
  );
};
