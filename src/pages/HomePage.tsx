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
  language?: 'EN' | '中文';
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
  language = 'EN',
}) => {
  const isZh = language === '中文';

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
              {isZh ? 'NORI TOUR • Nori • 首尔美妆与身心疗愈' : 'NORI TOUR • Nori • SEOUL BEAUTY & WELLNESS'}
            </span>
          </div>

          {/* Exact Hero Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-editorial font-light text-[#302B29] tracking-tight leading-[1.1]">
              {isZh ? (
                <>
                  遇见自然光彩。 <br />
                  <span className="italic font-normal text-[#786761]">开启专属玩美之旅。</span>
                </>
              ) : (
                <>
                  Find Your Glow. <br />
                  <span className="italic font-normal text-[#786761]">Play Your Way.</span>
                </>
              )}
            </h1>

            {/* Exact Hero Supporting Copy */}
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#786761] font-light leading-relaxed">
              {isZh
                ? '精选韩国美妆、疗愈体验与生活美学，陪你探索真正契合自己的护肤与造型方式，以最自在从容的姿态漫游首尔。'
                : 'Curated K-beauty, wellness, and cultural experiences designed to help you discover what truly works for you — and enjoy Korea in a way that feels entirely your own.'}
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
              <span>{isZh ? '开启美妆探索测试' : 'Start Your Beauty Journey'}</span>
            </button>
            <button
              id="hero-explore-cta"
              onClick={() => onNavigate('experiences')}
              className="w-full sm:w-auto px-8 py-4 bg-[#FCFAF7] hover:bg-[#F4E8E5] text-[#302B29] border border-[#EADBCE] hover:border-[#D9B4B0] rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <span>{isZh ? '探索特色体验' : 'Explore Experiences'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#786761]" />
            </button>
          </div>

          {/* Editorial Trust Markers */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-center border-t border-[#EADBCE]/80">
            <div className="p-2">
              <span className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">Nori</span>
              <p className="text-[11px] uppercase tracking-wider text-[#786761] font-medium mt-0.5">
                {isZh ? '自在玩美' : 'Mindful Play'}
              </p>
            </div>
            <div className="p-2">
              <span className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">100%</span>
              <p className="text-[11px] uppercase tracking-wider text-[#786761] font-medium mt-0.5">
                {isZh ? '独立客观建议' : 'Independent Advice'}
              </p>
            </div>
            <div className="p-2">
              <span className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">
                {isZh ? '最多4人' : 'Max 4'}
              </span>
              <p className="text-[11px] uppercase tracking-wider text-[#786761] font-medium mt-0.5">
                {isZh ? '私密小团体验' : 'Intimate Groups'}
              </p>
            </div>
            <div className="p-2">
              <span className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">
                {isZh ? '定制化' : 'Tailored'}
              </span>
              <p className="text-[11px] uppercase tracking-wider text-[#786761] font-medium mt-0.5">
                {isZh ? '个性化贴心服务' : 'Personalized Care'}
              </p>
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
                  <span>
                    {isZh ? 'NORI 经典代表作 • 3日私享深度之旅' : 'NORI Signature • 3-Day Private Journey'}
                  </span>
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-5xl font-editorial font-light text-[#302B29] leading-tight">
                    {isZh ? '完整的 NORI 焕美体验' : 'The Complete NORI Experience'}
                  </h2>
                  <p className="text-sm sm:text-base text-[#786761] font-light leading-relaxed max-w-2xl">
                    {isZh
                      ? '专为渴望深度沉浸美学旅程的宾客打造。用三天时间，深入了解适合自身肌肤的配方，探寻契合肤色的色彩搭配，由专业彩妆师亲授韩系妆容技艺，带走一套可持久运用的专属日常护肤与妆容方案。'
                      : 'For guests who want more than a beauty tour. Spend three days discovering what works for your skin, learning what colors suit you, practicing Korean-inspired makeup with a professional, and building a beauty routine you can take home.'}
                  </p>
                </div>

                {/* 4 Pillars Quote */}
                <div className="p-4 bg-[#F7F2EC] rounded-2xl border border-[#EADBCE] text-xs text-[#302B29] font-medium flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9B4B0]" />
                    {isZh ? '读懂你的肌肤。' : 'Understand your skin.'}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9B4B0]" />
                    {isZh ? '找寻你的专属色彩。' : 'Discover your colors.'}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9B4B0]" />
                    {isZh ? '掌握适合你的妆容。' : 'Learn your look.'}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9B4B0]" />
                    {isZh ? '将自信光彩带回家。' : 'Take your glow home.'}
                  </span>
                </div>

                {/* 3-Day Journey Outline */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-4 rounded-2xl bg-[#F7F2EC] border border-[#EADBCE] space-y-1.5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D9B4B0] block">
                      {isZh ? '第 1 天' : 'Day 1'}
                    </span>
                    <h3 className="text-sm font-editorial font-medium text-[#302B29]">
                      {isZh ? '读懂肌肤' : 'Know Your Skin'}
                    </h3>
                    <p className="text-[11px] text-[#786761] leading-relaxed font-light">
                      {isZh
                        ? '日常护肤诊断、屏障知识解析与零推销针对性选品。'
                        : 'Routine audit, skin barrier education, and targeted zero-pressure shopping.'}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F7F2EC] border border-[#EADBCE] space-y-1.5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D9B4B0] block">
                      {isZh ? '第 2 天' : 'Day 2'}
                    </span>
                    <h3 className="text-sm font-editorial font-medium text-[#302B29]">
                      {isZh ? '色彩与妆容' : 'Colors & Makeup'}
                    </h3>
                    <p className="text-[11px] text-[#786761] leading-relaxed font-light">
                      {isZh
                        ? '专业个人色彩测试、手把手妆容实践（“彩妆师示范半脸，你独立完成半脸”）与彩妆选品。'
                        : 'Personal color drape, hands-on lesson ("Half by the artist. Half by you"), and makeup shopping.'}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F7F2EC] border border-[#EADBCE] space-y-1.5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D9B4B0] block">
                      {isZh ? '第 3 天' : 'Day 3'}
                    </span>
                    <h3 className="text-sm font-editorial font-medium text-[#302B29]">
                      {isZh ? '焕发专属光彩' : 'Glow Your Way'}
                    </h3>
                    <p className="text-[11px] text-[#786761] leading-relaxed font-light">
                      {isZh
                        ? '面部或头皮深层水疗、K-beauty 生活美学体验及 NORI 专属焕彩指南。'
                        : 'Facial or scalp wellness, K-beauty lifestyle play, and your final NORI Glow Book.'}
                    </p>
                  </div>
                </div>

                {/* Logistics note */}
                <p className="text-[11px] text-[#786761] font-light">
                  {isZh
                    ? '* 默认不含住宿。宾客可根据喜好入住自选酒店，每日于约定时间与 NORI 顾问汇合开启专属行程。'
                    : '* Accommodation is not included by default. Guests stay at their own preferred hotel and meet NORI daily for scheduled sessions.'}
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
                      {isZh ? '3日私享代表作' : 'Signature 3-Day Journey'}
                    </div>
                    <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-light italic">
                      {isZh
                        ? '“你带走的不仅是几件产品，而是受用一生的护肤自信。”'
                        : '“You don’t leave with more products. You leave knowing what works for you.”'}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-[#EADBCE] pb-3">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#9B8983] block">
                          {isZh ? '时长' : 'Duration'}
                        </span>
                        <span className="text-sm font-editorial font-medium text-[#302B29]">
                          {isZh ? '3天 (全程专属顾问陪同)' : '3 Days (Guided)'}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase tracking-wider text-[#9B8983] block">
                          {isZh ? '价格' : 'Pricing'}
                        </span>
                        <span className="text-base font-editorial font-medium text-[#302B29]">
                          {isZh ? '按需定制询价' : 'Price on Request'}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <button
                        id="home-explore-complete-journey-cta"
                        onClick={() => onSelectTour(completeGlowTour)}
                        className="w-full py-4 bg-[#302B29] hover:bg-[#443E3B] text-[#F7F2EC] text-xs uppercase tracking-[0.2em] font-medium rounded-full transition-all text-center shadow-xs flex items-center justify-center gap-2 group"
                      >
                        <span>{isZh ? '探索3日深度之旅' : 'Explore the 3-Day Journey'}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#D9B4B0] group-hover:translate-x-1 transition-transform" />
                      </button>

                      <button
                        onClick={onStartBeautyJourney}
                        className="w-full py-3 bg-transparent hover:bg-[#FCFAF7] text-[#786761] hover:text-[#302B29] text-[11px] uppercase tracking-[0.16em] font-medium rounded-full transition-all text-center border border-[#EADBCE]"
                      >
                        {isZh ? '参与个性化美妆定制问卷' : 'Take the Personalized Beauty Journey Flow'}
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
              {isZh ? '精选旅程' : 'Curated Journeys'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#302B29]">
              {isZh ? '精选体验' : 'Featured Experiences'}
            </h2>
          </div>
          <button
            onClick={() => onNavigate('experiences')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#302B29] hover:text-[#786761] font-medium transition-colors border-b border-[#302B29] hover:border-[#786761] pb-1 self-start md:self-auto"
          >
            <span>{isZh ? '查看全部精选体验' : 'View All Curations'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Featured Entry Point Spotlight: NORI Skin Edit */}
        <div className="mb-12 p-8 sm:p-10 rounded-3xl bg-[#FCFAF7] border border-[#EADBCE] shadow-sm relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4E8E5] text-[#786761] text-[10px] uppercase tracking-[0.2em] font-semibold">
              <Sparkles className="w-3 h-3 text-[#D9B4B0]" />
              <span>{isZh ? '初访首选推荐 • 2小时体验' : 'Recommended First Step • 2-Hour Experience'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-editorial font-light text-[#302B29] leading-snug">
              {isZh ? '初涉韩国美妆，不知从何开始？' : 'Not sure where to start with K-beauty?'}
            </h3>
            <p className="text-sm sm:text-base text-[#786761] font-light leading-relaxed">
              {isZh ? (
                <>
                  从 <strong className="font-medium text-[#302B29]">NORI 皮肤定制选品（NORI Skin Edit）</strong> 开始——一对一专业护肤咨询与选品体验，帮你真正读懂肌肤所需的配方与成分。
                </>
              ) : (
                <>
                  Start with <strong className="font-medium text-[#302B29]">NORI Skin Edit</strong> — a personalized skincare consultation and shopping experience designed to help you understand what your skin actually needs.
                </>
              )}
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-[#786761]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                {isZh ? '咖啡厅轻松梳理日常习惯' : 'Cafe routine review'}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                {isZh ? '绝无任何推销压力' : 'No sales pressure'}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                {isZh ? '量身定制的选品框架' : 'Custom shopping framework'}
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
                {isZh ? '了解 NORI 皮肤定制体验' : 'Explore NORI Skin Edit'}
              </button>
            )}
            <button
              id="start-beauty-journey-home-cta"
              onClick={onStartBeautyJourney}
              className="px-7 py-3.5 bg-transparent hover:bg-[#F4E8E5] text-[#302B29] border border-[#EADBCE] text-xs uppercase tracking-[0.18em] font-medium rounded-full transition-all text-center"
            >
              {isZh ? '参与美妆探索测试' : 'Take Beauty Journey Quiz'}
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
              language={language}
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
              <span>{isZh ? 'NORI 的体验理念' : 'The NORI Experience'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#302B29]">
              {isZh ? '旅程如何展开' : 'How Your Journey Unfolds'}
            </h2>
            <p className="text-sm sm:text-base text-[#786761] font-light leading-relaxed">
              {isZh
                ? '从一杯暖心欢迎茶到持久的生活自信，我们全程相伴，绝无眼花缭乱的产品推销或生涩难懂的医学术语。'
                : 'A thoughtful progression from first welcoming tea to lifelong confidence. We guide you every step of the way without overwhelming product hauls or clinical jargon.'}
            </p>
          </div>

          {/* 5-Step Editorial Visual Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                stage: isZh ? '咨询' : 'Consult',
                title: isZh ? '温馨初见咨询' : 'Welcoming Consultation',
                desc: isZh
                  ? '品一杯韩国传统暖茶。我们为你梳理日常护肤步骤，测试肌肤屏障水分，明确个人护肤目标，全程毫无销售推销。'
                  : 'Unwind over Korean tea. We audit your daily routine, test skin barrier hydration, and establish your personal goals without sales pressure.',
                image: 'https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=800&q=80',
                alt: isZh ? '温馨咨询与茶饮交流' : 'Welcoming consultation and routine review over tea'
              },
              {
                step: '02',
                stage: isZh ? '探索' : 'Discover',
                title: isZh ? '产品探索与精选' : 'Product Discovery & Shopping',
                desc: isZh
                  ? '在双语美学顾问陪同下漫步首尔美妆旗舰店与小众草本工坊，剖析配方成分，甄选真正适合你的产品。'
                  : 'Navigate Seoul’s beauty flagships and apothecary shelves with a bilingual curator. Decode ingredients and find formulas that truly suit you.',
                image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
                alt: isZh ? '首尔护肤探索与精选购物' : 'Skincare discovery and curated shopping in Seoul'
              },
              {
                step: '03',
                stage: isZh ? '体验' : 'Play',
                title: isZh ? '个人色彩与彩妆试色' : 'Personal Color & Makeup Play',
                desc: isZh
                  ? '在专业中性自然光下进行色彩布料比对，试用与自然容貌完美契合的气垫、腮红与唇彩配方。'
                  : 'Experience precision draping under calibrated neutral daylight. Test cushions, blush formulas, and lip tints that harmonize with your natural features.',
                image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80',
                alt: isZh ? '个人色彩分析与彩妆试色' : 'Personal color analysis and seasonal cosmetic testing'
              },
              {
                step: '04',
                stage: isZh ? '实践' : 'Learn',
                title: isZh ? '手把手实践教学' : 'Hands-On Masterclass',
                desc: isZh
                  ? '“彩妆师示范半脸，你亲手完成半脸。”在镜前反复练习，由彩妆师亲手指导手势与力度，将真实肌肉记忆带回家。'
                  : '“Half by the artist. Half by you.” Practice technique in the mirror with the artist guiding your hand so you take real muscle memory home.',
                image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
                alt: isZh ? '手把手美妆教学与镜前练习' : 'Hands-on makeup lesson and mirror technique practice'
              },
              {
                step: '05',
                stage: isZh ? '焕彩' : 'Glow',
                title: isZh ? '由内而外的自然光采' : 'Radiant, Natural Glow',
                desc: isZh
                  ? '告别首尔时，带走光泽健康、充满活力的肌肤，毫不费力的日常自信，以及为你定制的终身 NORI 护肤指南。'
                  : 'Leave Seoul with glowing, resilient skin, effortless everyday confidence, and your personalized NORI routine blueprint for life.',
                image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
                alt: isZh ? '自然光彩与持久自信' : 'Radiant, natural skin glow and lasting confidence'
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
                    <span>{isZh ? `第 ${item.step} 步 / 共 05 步` : `Step ${item.step} of 05`}</span>
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
              {isZh ? '为何选择 NORI' : 'Why NORI'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#302B29]">
              {isZh ? '因你而定制的美学体验。' : 'Beauty, curated around you.'}
            </h2>
            <p className="text-sm sm:text-base text-[#786761] font-light leading-relaxed">
              {isZh
                ? '韩国美妆精彩纷呈，但成千上万的产品、项目、诊所和流行趋势往往令人无所适从。NORI 为你提供客观从容的向导，让你真正带走适合自己的美。'
                : 'K-beauty is extraordinary, but it can feel overwhelming with thousands of products, treatments, clinics, and trends. NORI offers thoughtful, pressure-free navigation so you leave Korea with what genuinely suits your skin.'}
            </p>
          </div>

          {/* 6 Key Pillars of Why NORI */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-[#F7F2EC] border border-[#EADBCE] space-y-3 hover:border-[#D9B4B0] transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#F4E8E5] flex items-center justify-center text-[#302B29] mb-1">
                <Sparkles className="w-4 h-4 text-[#D9B4B0]" />
              </div>
              <h3 className="font-editorial text-2xl font-light text-[#302B29]">
                {isZh ? '个性化 K-Beauty 指导' : 'Personalized K-Beauty Guidance'}
              </h3>
              <p className="text-xs sm:text-sm text-[#786761] leading-relaxed font-light">
                {isZh
                  ? '世上没有两张完全相同的面庞。我们深入了解你的护肤诉求、过敏史与旅行节奏，量身推荐与天然皮脂膜和谐共处的护理方案。'
                  : 'No two complexions are identical. We look closely at your skin goals, sensitivities, and travel schedule to guide routines and treatments that work in harmony with your natural barrier.'}
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F7F2EC] border border-[#EADBCE] space-y-3 hover:border-[#D9B4B0] transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#F4E8E5] flex items-center justify-center text-[#302B29] mb-1">
                <Compass className="w-4 h-4 text-[#D9B4B0]" />
              </div>
              <h3 className="font-editorial text-2xl font-light text-[#302B29]">
                {isZh ? '深厚在地洞察' : 'Deep Local Knowledge'}
              </h3>
              <p className="text-xs sm:text-sm text-[#786761] leading-relaxed font-light">
                {isZh
                  ? '远离千篇一律的网红打卡点，首尔在地团队带你走进幽静的韩屋头皮水疗、清潭洞备受赞誉的高级皮肤科与圣水洞小众私享实验室。'
                  : 'Beyond viral social media spots, our Seoul insiders guide you to serene Hanok head spas, acclaimed dermatology clinics in Cheongdam, and quiet boutique formulation labs in Seongsu.'}
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F7F2EC] border border-[#EADBCE] space-y-3 hover:border-[#D9B4B0] transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#F4E8E5] flex items-center justify-center text-[#302B29] mb-1">
                <ShieldCheck className="w-4 h-4 text-[#D9B4B0]" />
              </div>
              <h3 className="font-editorial text-2xl font-light text-[#302B29]">
                {isZh ? '诚实客观的建议' : 'Honest Recommendations'}
              </h3>
              <p className="text-xs sm:text-sm text-[#786761] leading-relaxed font-light">
                {isZh
                  ? '我们严格坚持独立性，绝不收取任何诊所或品牌的销售提成。如果一支温和的精华比昂贵的医美项目更合适，我们会坦诚相告。'
                  : 'We maintain strict zero-commission independence from clinics and brands. If a gentle $20 soothing essence is better than an expensive clinical procedure, we will tell you honestly.'}
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F7F2EC] border border-[#EADBCE] space-y-3 hover:border-[#D9B4B0] transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#F4E8E5] flex items-center justify-center text-[#302B29] mb-1">
                <Sparkle className="w-4 h-4 text-[#D9B4B0]" />
              </div>
              <h3 className="font-editorial text-2xl font-light text-[#302B29]">
                {isZh ? '美妆与身心疗愈兼修' : 'Beauty + Wellness Expertise'}
              </h3>
              <p className="text-xs sm:text-sm text-[#786761] leading-relaxed font-light">
                {isZh
                  ? '我们的团队由持证皮肤美疗师与身心生活方式顾问组成。我们帮你解读专业皮肤检测报告，拆解成分表，有效预防敏感泛红。'
                  : 'Our guides are certified dermo-aestheticians and wellness curators. We translate medical-grade scans, explain ingredient formulations, and help prevent reactive breakouts.'}
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F7F2EC] border border-[#EADBCE] space-y-3 hover:border-[#D9B4B0] transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#F4E8E5] flex items-center justify-center text-[#302B29] mb-1">
                <Heart className="w-4 h-4 text-[#D9B4B0]" />
              </div>
              <h3 className="font-editorial text-2xl font-light text-[#302B29]">
                {isZh ? '舒心惬意，毫无压力' : 'Comfortable & Pressure-Free'}
              </h3>
              <p className="text-xs sm:text-sm text-[#786761] leading-relaxed font-light">
                {isZh
                  ? '在韩国的旅行应当是一场放松、温暖且疗愈的时光。这里没有行色匆匆、强迫购物或商业旅游陷阱，只有从容悠闲的体验节奏。'
                  : 'Travel in Korea should feel relaxing, warm, and restorative. There is never any rush, forced purchases, or commercial tourist traps—just an unhurried, comfortable pace.'}
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F7F2EC] border border-[#EADBCE] space-y-3 hover:border-[#D9B4B0] transition-colors shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#F4E8E5] flex items-center justify-center text-[#302B29] mb-1">
                <CheckCircle2 className="w-4 h-4 text-[#D9B4B0]" />
              </div>
              <h3 className="font-editorial text-2xl font-light text-[#302B29]">
                {isZh ? '专属定制，回应个性需求' : 'Curated for Individual Needs'}
              </h3>
              <p className="text-xs sm:text-sm text-[#786761] leading-relaxed font-light">
                {isZh
                  ? '无论你是需要改善泛红、缓解长途飞行的疲惫，还是寻找量身定制的专属个人色彩，每一份行程都因你而设计。'
                  : 'Whether you are managing rosacea, recovering from long-haul flights, or searching for customized personal color palettes, every itinerary is shaped around your specific wishes.'}
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
                {isZh ? '我们的核心理念' : 'Our Core Philosophy'}
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#302B29] leading-tight">
                {isZh ? '始终坚持诚恳指引。' : 'Honest guidance, always.'}
              </h2>

              <p className="text-base sm:text-lg text-[#786761] font-light leading-relaxed">
                {isZh
                  ? '我们坚信，最好的美妆选择并不一定是价格最昂贵、效果最夸张或最流行的方案。NORI 帮助你清晰理解每一项选择，找到真正适合你的答案。'
                  : 'We believe the best beauty choice is not always the most expensive, dramatic, or popular one. NORI helps you understand your options and choose what genuinely fits you.'}
              </p>

              <blockquote className="p-6 rounded-2xl bg-[#F7F2EC] border border-[#EADBCE] text-center space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-[#D9B4B0] font-semibold">
                  {isZh ? '我们的诚实准则' : 'Our Honest Standard'}
                </p>
                <p className="text-xl sm:text-2xl font-editorial italic text-[#302B29] leading-snug">
                  {isZh
                    ? '“有时最好的建议其实是：‘你并不需要它。’”'
                    : 'Sometimes the best recommendation is: “You don’t need it.”'}
                </p>
              </blockquote>

              <p className="text-xs sm:text-sm text-[#786761] font-light leading-relaxed max-w-2xl mx-auto">
                {isZh
                  ? 'NORI 绝不会因为某款产品或项目昂贵、流行、声量大或具有侵入性而盲目推荐。如果更温和、更简单的方案对你的肌肤更有益，我们始终诚实以告。'
                  : 'NORI never recommends a product or treatment simply because it is expensive, trending, popular, dramatic, or invasive. If a simpler or gentler option makes more sense for your skin, we say so with complete honesty.'}
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
              {isZh ? '特撰专栏' : 'Editorial Publication'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#302B29]">
              {isZh ? '美学期刊' : 'The Beauty Journal'}
            </h2>
          </div>
          <button
            onClick={() => onNavigate('journal')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#302B29] hover:text-[#786761] font-medium transition-colors border-b border-[#302B29] hover:border-[#786761] pb-1 self-start md:self-auto"
          >
            <span>{isZh ? '阅读全部专栏' : 'Read All Stories'}</span>
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
                <span>{isZh ? `作者：${article.author.name}` : `By ${article.author.name}`}</span>
                <span className="group-hover:text-[#302B29] font-medium flex items-center gap-1">
                  {isZh ? '阅读全文' : 'Read Story'} <ArrowRight className="w-3 h-3 text-[#D9B4B0]" />
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
              {isZh ? '宾客心声' : 'Guest Reflections'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#302B29]">
              {isZh ? '旅行者的真实感言' : 'Traveler Words'}
            </h2>
            <p className="text-xs sm:text-sm text-[#786761] font-light">
              {isZh
                ? '阅读来自世界各地的宾客如何与我们的双语顾问一同探索首尔最惬意的美妆体验。'
                : 'Read how international guests discovered Seoul\'s most intimate beauty rituals with our bilingual hosts.'}
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
              {isZh ? '浏览全部宾客评价' : 'Explore All Guest Reviews'}
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
                  {isZh ? '代表理事' : 'Representative Director'}
                </span>
                <p className="font-editorial text-sm font-medium text-[#302B29]">
                  {isZh ? 'Lucy • 代表理事' : 'Lucy • Representative Director'}
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FCFAF7] border border-[#EADBCE] text-xs text-[#786761]">
              <span className="text-xs font-serif text-[#D9B4B0]">Nori</span>
              <span>{isZh ? '品牌名称的背后寓意' : 'The Meaning Behind Our Name'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-editorial font-light text-[#302B29] leading-tight">
              {isZh
                ? 'NORI 源自韩语“놀이 (Nori)”，意为“游玩、欢聚”。'
                : 'NORI comes from the Korean word “Nori,” meaning “play.”'}
            </h2>

            <div className="space-y-4 text-sm text-[#786761] font-light leading-relaxed">
              <p>
                {isZh ? (
                  <>
                    在 NORI 的理念中，<span className="text-[#302B29] font-medium font-editorial italic">“游玩”</span> 意味着自由自在地探索，发现真正适合自己的事物，享受整个过程，并以最惬意的方式体验韩国。
                  </>
                ) : (
                  <>
                    For NORI, <span className="text-[#302B29] font-medium font-editorial italic">“play”</span> means exploring freely, discovering what suits you, enjoying the process, and experiencing Korea in a personal, relaxed way.
                  </>
                )}
              </p>
              <p>
                {isZh
                  ? '我们坚信，发现美与探索韩国应当是一件充满好奇、愉悦、放松与个性化的趣事，毫无任何心理负担。在我们的陪同下，你永远不会遭遇强买强卖或生硬难懂的专业词汇。'
                  : 'We believe discovering beauty and Korea should feel curious, enjoyable, relaxed, personal, and completely pressure-free. You will never encounter aggressive clinic sales pitches or confusing medical jargon with our hosts.'}
              </p>
              <p>
                {isZh
                  ? '我们的诺言是给出诚恳的建议：协助你理解各项选择，让你带着真正喜爱的产品、了然于心的日常护肤手法与由内而外的持久光泽离开首尔。'
                  : 'Our promise is honest recommendations: helping you understand your choices and leaving Korea with products you genuinely love, a routine you understand, and a lasting glow.'}
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3 border border-[#302B29] hover:bg-[#302B29] hover:text-[#F7F2EC] rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all"
              >
                {isZh ? '阅读我们的故事与理念' : 'Read Our Story & Philosophy'}
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
            <span>{isZh ? '遇见自然光彩。开启专属玩美之旅。' : 'Find Your Glow. Play Your Way.'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-light text-[#F7F2EC] leading-tight">
            {isZh
              ? '准备好以专属的光采姿态，探索韩国了吗？'
              : 'Ready to discover Korea in your own radiant way?'}
          </h2>

          <p className="text-sm sm:text-base text-[#D9B4B0] max-w-2xl mx-auto font-light leading-relaxed">
            {isZh
              ? 'NORI 陪你发现真正契合自己的美好，享受探索的乐趣，带着属于你自己的动人光泽告别首尔。'
              : 'NORI helps you find what works for you, enjoy the discovery, and leave Korea glowing in your own way.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              id="final-start-journey-cta"
              onClick={onStartBeautyJourney}
              className="w-full sm:w-auto px-9 py-4 bg-[#D9B4B0] hover:bg-[#E9D2CD] text-[#302B29] text-xs uppercase tracking-[0.2em] font-semibold rounded-full transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#302B29]" />
              <span>{isZh ? '开启美妆探索测试' : 'Start Your Beauty Journey'}</span>
            </button>
            <button
              onClick={() => onNavigate('experiences')}
              className="w-full sm:w-auto px-9 py-4 bg-transparent hover:bg-white/10 border border-[#786761] text-[#F7F2EC] text-xs uppercase tracking-[0.18em] font-medium rounded-full transition-all"
            >
              {isZh ? '探索特色体验' : 'Explore Experiences'}
            </button>
          </div>

          <div className="pt-4 text-xs text-[#9B8983]">
            <span>
              {isZh
                ? '专属个性化 K-Beauty • 私密精品小团 • 诚实客观的建议'
                : 'Personalized K-Beauty • Intimate Boutique Groups • Honest Recommendations'}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
