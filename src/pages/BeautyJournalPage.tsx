import React from 'react';
import { Sparkles } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { JournalArticle, JournalCategory } from '../types';

interface BeautyJournalPageProps {
  articles: JournalArticle[];
  onSelectArticle: (article: JournalArticle) => void;
  onBookExperience: () => void;
}

const CARD_TEASERS: Record<string, string> = {
  'nori-philosophy-what-beauty-means-to-nori':
    'There is no one way to be beautiful.',
  'skincare-ingredients-the-secret-of-niacinamide':
    'More isn’t always better. The percentage matters.',
  'skincare-science-why-dark-spots-happen-and-how-to-fade-them':
    'Sun, acne, vitamin C, and when professional treatment may make sense.',
  'skin-barrier-your-skin-barrier-is-doing-more-than-you-think':
    'Ceramides, panthenol, and why healthy skin sometimes needs less, not more.',
  'aesthetic-guide-before-you-fill-your-nasolabial-folds':
    'Why NORI doesn’t automatically recommend filling every smile line.',
};

const renderCategoryIcon = (category: JournalCategory) => {
  switch (category) {
    case 'NORI PHILOSOPHY':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M12 3.5C12.7 7.8 16.2 11.3 20.5 12C16.2 12.7 12.7 16.2 12 20.5C11.3 16.2 7.8 12.7 3.5 12C7.8 11.3 11.3 7.8 12 3.5Z" />
          <circle cx="12" cy="12" r="1.25" />
        </svg>
      );

    case 'SKINCARE INGREDIENTS':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M12 3.75C12 3.75 6.5 10.2 6.5 14.5C6.5 17.54 8.96 20 12 20C15.04 20 17.5 17.54 17.5 14.5C17.5 10.2 12 3.75 12 3.75Z" />
          <path d="M9.75 14.75C9.75 16.1 10.65 17.15 12 17.4" />
        </svg>
      );

    case 'SKINCARE SCIENCE':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <circle cx="11.5" cy="11.5" r="4.25" />
          <path d="M11.5 4V5.25" />
          <path d="M11.5 17.75V19" />
          <path d="M4 11.5H5.25" />
          <path d="M17.75 11.5H19" />
          <path d="M6.2 6.2L7.1 7.1" />
          <path d="M15.9 15.9L16.8 16.8" />
          <path d="M16.8 6.2L15.9 7.1" />
          <path d="M7.1 15.9L6.2 16.8" />
          <circle cx="18.25" cy="17.75" r="1.35" />
        </svg>
      );

    case 'SKIN BARRIER':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M4.5 9.25C7 7.75 9.5 7.75 12 9.25C14.5 10.75 17 10.75 19.5 9.25" />
          <path d="M4.5 13.25C7 11.75 9.5 11.75 12 13.25C14.5 14.75 17 14.75 19.5 13.25" />
          <path d="M4.5 17.25C7 15.75 9.5 15.75 12 17.25C14.5 18.75 17 18.75 19.5 17.25" />
        </svg>
      );

    case 'AESTHETIC GUIDE':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M9.5 4.25C13.5 4.25 16.25 7.1 16.25 11.1C16.25 14.8 14.1 18.2 10.75 19.75" />
          <path d="M11.25 12.25C12.35 13.1 13.1 14.55 12.85 16.1" />
        </svg>
      );

    default:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M12 4.5V19.5M4.5 12H19.5" />
        </svg>
      );
  }
};

export const BeautyJournalPage: React.FC<BeautyJournalPageProps> = ({
  articles,
  onSelectArticle,
  onBookExperience,
}) => {
  return (
    <div id="beauty-journal-page" className="w-full pt-32 pb-28 bg-[#1C1917] text-[#F7F2EC]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Magazine Archive Header */}
        <ScrollReveal variant="heading">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#2A2523] border border-[#3D3634] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D9B4B0]" />
              <span className="text-[11px] uppercase tracking-[0.26em] text-[#E9D2CD] font-semibold">
                THE NORI JOURNAL
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-sans font-bold text-[#F7F2EC] tracking-tight leading-[1.12] [text-wrap:balance]">
              NORI&apos;s Journal
            </h1>
            <p className="text-base sm:text-lg text-[#BFB3AC] font-normal leading-relaxed max-w-xl mx-auto [text-wrap:balance]">
              Thoughtful notes on K-beauty, skin, and aesthetic care.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Editorial Archive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {articles.map((article, idx) => {
            const teaser =
              CARD_TEASERS[article.id] || article.subtitle || article.excerpt || '';

            return (
              <ScrollReveal
                key={article.id}
                variant="card"
                delay={idx * 70}
                className="h-full"
              >
                <article
                  onClick={() => onSelectArticle(article)}
                  className="group cursor-pointer rounded-2xl bg-[#252120] border border-[#3D3634] hover:border-[#D9B4B0] transition-all duration-200 ease-out md:hover:-translate-y-1 shadow-md hover:shadow-xl p-7 sm:p-9 flex flex-col justify-between min-h-[230px] sm:min-h-[250px] h-full"
                >
                  <div className="space-y-4">
                    {/* Small Minimal Line Icon */}
                    <div className="text-[#D9B4B0] group-hover:text-[#E9D2CD] transition-transform duration-200 ease-out md:group-hover:-translate-y-0.5">
                      {renderCategoryIcon(article.category)}
                    </div>

                    {/* Category Label */}
                    <span className="text-[10px] uppercase tracking-[0.24em] text-[#D9B4B0] font-medium block pt-0.5">
                      {article.category}
                    </span>

                    {/* Article Title */}
                    <h2 className="text-2xl sm:text-[26px] font-sans font-bold text-[#F7F2EC] group-hover:text-[#E9D2CD] transition-colors leading-[1.25] tracking-tight [text-wrap:balance]">
                      {article.title}
                    </h2>

                    {/* Short Teaser: always visible on mobile, gently revealed on desktop */}
                    {teaser && (
                      <p className="text-xs sm:text-[13.5px] text-[#BFB3AC] font-normal leading-relaxed pt-1">
                        {teaser}
                      </p>
                    )}
                  </div>

                  {/* Subtle Read Journal Affordance */}
                  <div className="pt-6 mt-4 border-t border-[#3D3634] flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#BFB3AC] font-normal">
                      {article.author.name}
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.22em] text-[#D9B4B0] group-hover:text-[#E9D2CD] font-semibold transition-colors flex items-center gap-1">
                      <span>READ JOURNAL</span> <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </span>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <ScrollReveal variant="card" delay={140} className="mt-20">
          <div className="p-10 sm:p-12 rounded-3xl bg-[#252120] border border-[#3D3634] text-[#F7F2EC] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D9B4B0] font-semibold">
                Personalized Korea Travel &amp; K-Beauty
              </span>
              <h3 className="text-2xl sm:text-3xl font-sans font-bold text-[#F7F2EC] [text-wrap:balance]">
                Planning a trip to Korea?
              </h3>
              <p className="text-xs sm:text-sm text-[#BFB3AC] font-normal max-w-lg leading-relaxed">
                Tell us what you&apos;d like to experience, from getting around Seoul to discovering K-beauty, and we&apos;ll build a personalized plan and quote around you.
              </p>
            </div>
            <button
              onClick={onBookExperience}
              className="w-full md:w-auto px-8 py-4 bg-[#D9B4B0] hover:bg-[#E9D2CD] text-[#1C1917] rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-lg inline-flex items-center justify-center gap-2 shrink-0 group cursor-pointer active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#1C1917] group-hover:scale-110 transition-transform duration-200" />
              <span>PLAN MY TRIP</span>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
