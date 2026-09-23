import React, { useState, useMemo } from 'react';
import { Search, Clock, ArrowRight, Sparkles, Compass } from 'lucide-react';
import { JournalArticle, JournalCategory } from '../types';

interface BeautyJournalPageProps {
  articles: JournalArticle[];
  onSelectArticle: (article: JournalArticle) => void;
  onBookExperience: () => void;
}

const CATEGORIES: ('All' | JournalCategory)[] = [
  'All',
  'Skincare',
  'Ingredients',
  'K-Beauty Shopping',
  'Beauty Tips',
  'Beauty Treatments',
  'Wellness',
  'Korea Beauty Guide'
];

export const BeautyJournalPage: React.FC<BeautyJournalPageProps> = ({
  articles,
  onSelectArticle,
  onBookExperience,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | JournalCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    return articles.filter((art) => {
      const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (art.excerpt ? art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) : false) ||
        (art.tags || []).some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  const featuredArticle = articles[0];

  return (
    <div id="beauty-journal-page" className="w-full pt-28 pb-24 bg-[#F7F2EC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Magazine Title Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCFAF7] border border-[#EADBCE]">
            <span className="w-2 h-2 rounded-full bg-[#D9B4B0]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#786761] font-medium">
              The NORI Journal • Nori
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-editorial font-light text-[#302B29] tracking-tight">
            The Seoul Beauty Journal
          </h1>
          <p className="text-sm sm:text-base text-[#786761] font-light leading-relaxed max-w-xl mx-auto">
            Editorial essays, clinical ingredient breakdowns, and honest guides written by licensed Korean aestheticians and wellness curators.
          </p>
        </div>

        {/* Featured Editorial Cover Story */}
        {selectedCategory === 'All' && searchQuery === '' && featuredArticle && (
          <div
            onClick={() => onSelectArticle(featuredArticle)}
            className="cursor-pointer group mb-16 rounded-3xl overflow-hidden bg-[#FCFAF7] border border-[#EADBCE] hover:border-[#D9B4B0] transition-all shadow-xs hover:shadow-md grid grid-cols-1 lg:grid-cols-12"
          >
            <div className="lg:col-span-7 relative aspect-16/10 lg:aspect-auto overflow-hidden bg-[#ECE4D9]">
              <img
                src={featuredArticle.heroImage}
                alt={featuredArticle.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3.5 py-1.5 bg-[#F7F2EC]/90 backdrop-blur-md text-[11px] uppercase tracking-[0.2em] font-semibold text-[#302B29] rounded-full shadow-xs">
                  Cover Story
                </span>
                {featuredArticle.relatedExperience && (
                  <span className="px-3.5 py-1.5 bg-[#302B29]/80 backdrop-blur-md text-[11px] uppercase tracking-[0.16em] font-medium text-[#F7F2EC] rounded-full shadow-xs flex items-center gap-1">
                    <Compass className="w-3 h-3 text-[#D9B4B0]" />
                    {featuredArticle.relatedExperience}
                  </span>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-[#786761]">
                  <span className="text-[#D9B4B0] font-semibold uppercase tracking-wider">
                    {featuredArticle.category}
                  </span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-editorial font-light text-[#302B29] group-hover:text-[#786761] transition-colors leading-snug">
                  {featuredArticle.title}
                </h2>

                <p className="text-sm text-[#786761] font-light leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="pt-8 border-t border-[#EADBCE] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredArticle.author.avatar}
                    alt={featuredArticle.author.name}
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 rounded-full object-cover border border-[#EADBCE]"
                  />
                  <div>
                    <p className="text-xs font-semibold text-[#302B29]">
                      {featuredArticle.author.name}
                    </p>
                    <p className="text-[10px] text-[#786761]">{featuredArticle.author.role}</p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#302B29] font-semibold group-hover:text-[#786761] transition-colors">
                  Read Story <ArrowRight className="w-3.5 h-3.5 text-[#D9B4B0]" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Filter Navigation Bar */}
        <div className="mb-12 pt-6 border-t border-[#EADBCE] flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Category tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const count =
                cat === 'All'
                  ? articles.length
                  : articles.filter((a) => a.category === cat).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.14em] font-medium transition-all ${
                    isActive
                      ? 'bg-[#302B29] text-[#F7F2EC]'
                      : 'bg-[#FCFAF7] text-[#786761] hover:bg-[#F4E8E5] border border-[#EADBCE]'
                  }`}
                >
                  <span>{cat}</span>
                  <span className="ml-1.5 opacity-60 text-[10px]">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#786761] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stories, ingredients..."
              className="w-full pl-9 pr-4 py-2 bg-[#FCFAF7] border border-[#EADBCE] rounded-full text-xs text-[#302B29] placeholder-[#9B8983] focus:outline-none focus:border-[#D9B4B0]"
            />
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group cursor-pointer bg-[#FCFAF7] border border-[#EADBCE] rounded-2xl overflow-hidden hover:border-[#D9B4B0] transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
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
                    <span className="px-3 py-1 bg-[#F7F2EC]/90 backdrop-blur-md text-[10px] uppercase tracking-[0.16em] text-[#302B29] font-medium rounded-full shadow-2xs">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] text-[#786761] mb-2">
                    <Clock className="w-3 h-3 text-[#D9B4B0]" />
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>{article.publishDate || article.date}</span>
                  </div>

                  <h3 className="text-xl font-editorial font-light text-[#302B29] group-hover:text-[#786761] transition-colors leading-snug mb-3">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#786761] leading-relaxed line-clamp-2 font-light mb-3">
                    {article.excerpt}
                  </p>

                  {article.relatedExperience && (
                    <div className="inline-flex items-center gap-1 text-[10px] text-[#302B29] bg-[#F7F2EC] px-2.5 py-1 rounded-md border border-[#EADBCE]">
                      <Compass className="w-3 h-3 text-[#D9B4B0]" />
                      <span className="truncate max-w-[200px]">{article.relatedExperience}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-[#EADBCE] flex items-center justify-between text-xs text-[#786761]">
                  <span>By {article.author.name}</span>
                  <span className="group-hover:text-[#302B29] font-medium flex items-center gap-1">
                    Read <ArrowRight className="w-3 h-3 text-[#D9B4B0]" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 p-10 rounded-3xl bg-[#302B29] text-[#F7F2EC] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D9B4B0] font-medium">
              Curated Seoul Guidance
            </span>
            <h3 className="text-2xl sm:text-3xl font-editorial font-light text-[#F7F2EC]">
              Experience these beauty rituals in person
            </h3>
            <p className="text-xs text-[#D9B4B0] font-light max-w-md">
              From clinical facials in Cheongdam to mindful Hanok head spas, let our bilingual aestheticians guide your journey.
            </p>
          </div>

          <button
            onClick={onBookExperience}
            className="px-8 py-3.5 bg-[#D9B4B0] hover:bg-[#E9D2CD] text-[#302B29] rounded-full text-xs uppercase tracking-[0.18em] font-semibold transition-all shrink-0 shadow-md flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#302B29]" />
            <span>Book Your Journey</span>
          </button>
        </div>
      </div>
    </div>
  );
};
