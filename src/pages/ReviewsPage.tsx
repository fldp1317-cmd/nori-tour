import React, { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

export interface GuestReviewItem {
  id: string;
  paragraphs: string[];
  guestInfo: string;
  experienceLabel: string;
}

export const GUEST_REVIEWS: GuestReviewItem[] = [
  {
    id: 'singapore-skincare-beauty-experience',
    paragraphs: [
      '“We were already very interested in skincare, but we had no idea where to start, which is why we booked with Lucy.',
      'She explained everything in a way that was so easy to understand, starting with skincare ingredients and then walking us through each step of a routine. She reviewed both of our entire skincare routines and helped us understand what we could keep using, what we could replace, and what we simply didn’t need.',
      'What surprised us most was that we actually ended up shopping less than we expected. Lucy never encouraged us to buy something just for the sake of buying it. We really appreciated her honesty.',
      'She also helped us navigate our options for skin treatments. It has been about two weeks since our treatment, and we’re very happy with the results so far.',
      'We highly recommend her, especially if you love skincare but feel overwhelmed by all the products and treatments available in Korea.”',
    ],
    guestInfo: 'Singapore · 40s · 2 Travelers',
    experienceLabel: 'Skincare & Beauty Experience',
  },
  {
    id: 'singapore-private-seoul-beauty-experience',
    paragraphs: [
      '“The three of us wanted to explore Korea, especially Gyeongbokgung and Changdeokgung Palace, but we were also very interested in lifting treatments, so we decided to book a tour with Lucy.',
      'Lucy was incredibly kind, cheerful, and attentive throughout the entire experience. She was always checking how we were feeling and planned our route carefully to keep unnecessary walking and travel to a minimum, which made the whole day much less tiring for us.',
      'When it came to skincare and lifting, we especially appreciated that she only guided us toward what we actually needed. She even helped us realize that the retinol products we had been using were too much for our current routines, which was something we had never really considered before.',
      'We were already happy immediately after our treatment at the dermatology clinic, and now that some time has passed, we’re still very pleased with the experience and how things are looking.',
      'If you’re thinking about booking with Lucy, don’t hesitate. Just book it! She will do everything she can to make your time in Korea a wonderful experience.”',
    ],
    guestInfo: 'Singapore · 50s · 3 Travelers',
    experienceLabel: 'Private Seoul & Beauty Experience',
  },
  {
    id: 'los-angeles-personalized-seoul-kbeauty-experience',
    paragraphs: [
      '“We knew from the beginning that we didn’t want a typical package tour. We wanted to make the most of our time in Korea, so a customized private tour seemed like the better choice.',
      'We kept hearing about how great K-beauty was, but honestly, neither of us knew much about skincare. My girlfriend was pretty good about wearing sunscreen, but even that felt like too much work for me sometimes, so I would just skip it. 😂',
      'We found Lucy because she seemed to specialize in K-beauty while still being able to show us the history and culture of Seoul. We weren’t completely sure what to expect, but decided to give it a try. She was incredibly kind and thoughtful, and throughout the tour she kept checking in to make sure we were comfortable and enjoying ourselves.',
      'The biggest surprise was that we actually came home with a skincare routine. Not a huge bag of products, just a really simple routine that made sense for us. Even during the rest of our trip, we both felt like our skin was looking and feeling better.',
      'I even asked Lucy whether I should get a skin treatment while we were in Korea. Instead of trying to sell me something, she told me she honestly didn’t think I needed one and that I should just stick to my skincare routine. That really stayed with me. We appreciated how genuine she was.',
      'From the market we visited together to Gwanghwamun Square, there are so many moments from that day we won’t forget. If you want to experience Seoul in a personal way and explore K-beauty without feeling pressured to buy or do things you don’t need, we definitely recommend Lucy.”',
    ],
    guestInfo: 'Los Angeles, USA · 40s · Couple',
    experienceLabel: 'Personalized Seoul & K-Beauty Experience',
  },
];

const MinimalSmileIcon: React.FC = () => (
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
    <circle cx="12" cy="12" r="8.5" />
    <path d="M9 10.25C9.35 9.75 9.85 9.5 10.35 9.5C10.85 9.5 11.35 9.75 11.7 10.25" />
    <path d="M12.3 10.25C12.65 9.75 13.15 9.5 13.65 9.5C14.15 9.5 14.65 9.75 15 10.25" />
    <path d="M8.85 13.65C9.7 15 10.8 15.65 12 15.65C13.2 15.65 14.3 15 15.15 13.65" />
  </svg>
);

export const ReviewsPage: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleReview = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div id="reviews-page" className="w-full pt-32 pb-28 bg-[#1C1917] text-[#F7F2EC] min-h-[75vh]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Clean, Understated Hero */}
        <ScrollReveal variant="heading">
          <header className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#2A2523] border border-[#3D3634] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D9B4B0]" />
              <span className="text-[11px] uppercase tracking-[0.26em] text-[#E9D2CD] font-semibold">
                GUEST STORIES
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-sans font-bold text-[#F7F2EC] tracking-tight leading-[1.12] [text-wrap:balance]">
              Real experiences, honestly shared.
            </h1>
            <p className="text-base sm:text-lg text-[#BFB3AC] font-normal leading-relaxed max-w-xl mx-auto pt-1 [text-wrap:balance]">
              Thoughts from travelers we&apos;ve helped navigate beauty and travel in Korea.
            </p>
          </header>
        </ScrollReveal>

        {/* Interactive Editorial Review Cards */}
        <section
          aria-label="Guest Testimonials"
          className={
            GUEST_REVIEWS.length === 1
              ? 'max-w-xl mx-auto'
              : GUEST_REVIEWS.length === 2
              ? 'grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start'
              : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start'
          }
        >
          {GUEST_REVIEWS.map((review, idx) => {
            const isExpanded = Boolean(expandedIds[review.id]);

            return (
              <ScrollReveal
                key={review.id}
                variant="card"
                delay={idx * 80}
                className="h-full"
              >
                <article
                  onClick={() => toggleReview(review.id)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleReview(review.id);
                    }
                  }}
                  className="group cursor-pointer text-left rounded-2xl bg-[#252120] border border-[#3D3634] hover:border-[#D9B4B0] transition-all duration-200 ease-out md:hover:-translate-y-1 shadow-md hover:shadow-xl p-6 sm:p-8 flex flex-col justify-between min-h-[220px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B4B0] h-full"
                >
                  <div className="space-y-4">
                    {/* Top Row: Minimal Smile Line Icon & Rating */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-[#D9B4B0] group-hover:text-[#E9D2CD] transition-transform duration-200 ease-out md:group-hover:-translate-y-0.5">
                        <MinimalSmileIcon />
                      </div>

                      <div
                        className="inline-flex items-center gap-2 whitespace-nowrap select-none"
                        aria-label="5 out of 5 stars"
                      >
                        <span className="text-sm tracking-[0.28em] text-[#D9B4B0]">
                          ★★★★★
                        </span>
                        <span className="text-[11px] tracking-[0.14em] text-[#BFB3AC] font-normal">
                          5/5
                        </span>
                      </div>
                    </div>

                    {/* Guest Information & Experience Label */}
                    <div className="pt-2 space-y-2">
                      <h2 className="text-2xl sm:text-[26px] font-sans font-bold text-[#F7F2EC] group-hover:text-[#E9D2CD] transition-colors leading-[1.22] tracking-tight">
                        {review.guestInfo}
                      </h2>
                      <span className="text-[10px] uppercase tracking-[0.24em] text-[#D9B4B0] font-medium block">
                        {review.experienceLabel}
                      </span>
                    </div>

                    {/* Smoothly Expanded Full Testimonial */}
                    {isExpanded && (
                      <div className="pt-5 mt-5 border-t border-[#3D3634] space-y-4 text-[#BFB3AC] animate-fade-in">
                        {review.paragraphs.map((paragraph, pIdx) => (
                          <p
                            key={pIdx}
                            className="text-base sm:text-[17px] text-[#E8DFD7] font-normal leading-[1.82]"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom Interaction Cue */}
                  <div className="pt-6 mt-5 border-t border-[#3D3634] flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-[#D9B4B0] group-hover:text-[#E9D2CD] font-medium transition-colors">
                      {isExpanded ? 'Close ↑' : 'Read their story →'}
                    </span>
                    <span className="w-5 h-[1px] bg-[#D9B4B0] transition-all duration-200 group-hover:w-8" />
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </section>
      </div>
    </div>
  );
};
