import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Compass,
  Car,
  Building2,
  Palette,
  HeartHandshake,
  ChevronDown,
} from 'lucide-react';
import { JournalArticle } from '../types';
import { ScrollReveal } from '../components/ScrollReveal';

interface HomePageProps {
  articles: JournalArticle[];
  onSelectArticle: (article: JournalArticle) => void;
  onNavigate: (tab: string) => void;
  language?: 'EN' | '中文';
}

export const HomePage: React.FC<HomePageProps> = ({
  articles,
  onSelectArticle,
  onNavigate,
  language = 'EN',
}) => {
  const isZh = language === '中文';
  const previewArticles = articles.slice(0, 3);

  const serviceCategories = [
    {
      num: '01',
      title: isZh ? '出行与向导' : 'GETTING AROUND',
      desc: isZh
        ? '机场接送、私人专车接驳与随行向导服务。'
        : 'Airport transfers, private transportation and guiding options.',
      icon: Car,
    },
    {
      num: '02',
      title: isZh ? '住宿与行程' : 'STAY & TRAVEL',
      desc: isZh
        ? '酒店预订协助与韩国个性化行程规划。'
        : 'Hotel assistance and personalized travel planning in Korea.',
      icon: Building2,
    },
    {
      num: '03',
      title: isZh ? '韩系美学体验' : 'K-BEAUTY',
      desc: isZh
        ? '护肤、美妆购物、彩妆造型、个人色彩测试、韩式美发及在地美学体验。'
        : 'Skincare, shopping, makeup, personal color, hair and local beauty experiences.',
      icon: Palette,
    },
    {
      num: '04',
      title: isZh ? '美疗与护肤咨询' : 'BEAUTY CARE',
      desc: isZh
        ? '根据旅行者的个人需求，协助安排皮肤管理与专业美学咨询。'
        : "Beauty treatment and consultation coordination based on the traveler's needs.",
      icon: HeartHandshake,
    },
  ];

  const processSteps = [
    {
      step: isZh ? '第 01 步' : 'Step 01',
      title: isZh ? '告诉我们你的心愿' : 'TELL US WHAT YOU WANT',
      desc: isZh
        ? '分享你的出行日期、在地需求、美妆兴趣与个人偏好。'
        : 'Share your dates, travel needs, beauty interests and preferences.',
    },
    {
      step: isZh ? '第 02 步' : 'Step 02',
      title: isZh ? '为你量身定制方案' : 'WE DESIGN YOUR PLAN',
      desc: isZh
        ? 'NORI 细致梳理你的需求，为你打造专属行程方案与透明报价。'
        : 'NORI reviews your request and creates a personalized itinerary and quote.',
    },
    {
      step: isZh ? '第 03 步' : 'Step 03',
      title: isZh ? '确认行程，安心成行' : 'CONFIRM & ENJOY',
      desc: isZh
        ? '当你对方案满意并确认预订后，我们将妥善安排好每一处细节。'
        : "Once you're happy with the plan, confirm your booking and we'll take care of the arrangements.",
    },
  ];

  return (
    <div id="home-page" className="w-full bg-[#1C1917] text-[#F7F2EC]">
      {/* 1. Homepage Hero (LOCKED SLOGAN & LAYOUT PRESERVED) */}
      <section
        id="hero-section"
        className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-24 px-6 sm:px-8 overflow-hidden bg-[#1C1917]"
      >
        {/* Layered Editorial Dark Atmosphere: Deep Charcoal with Asymmetric Blush/Rose Diffused Glows */}
        <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Animated Ambient Breathing Glows */}
          <div className="absolute w-[750px] h-[500px] -top-20 -right-20 rounded-full blur-[100px] pointer-events-none animate-glow-primary bg-[#D9B4B0]/15" />
          <div className="absolute w-[600px] h-[500px] -bottom-20 -left-20 rounded-full blur-[100px] pointer-events-none animate-glow-secondary bg-[#E9D2CD]/10" />

          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 65% 55% at 75% 35%, rgba(217, 180, 176, 0.16) 0%, rgba(120, 103, 97, 0.08) 45%, transparent 100%),
                radial-gradient(ellipse 55% 50% at 20% 75%, rgba(233, 210, 205, 0.12) 0%, rgba(48, 43, 41, 0.4) 60%, transparent 100%),
                linear-gradient(180deg, #1C1917 0%, #1C1917 100%)
              `,
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#2A2523] border border-[#3D3634] shadow-md backdrop-blur-md animate-hero-eyebrow hover:border-[#D9B4B0]/60 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9B4B0] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D9B4B0]" />
            </span>
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#E9D2CD] font-semibold">
              {isZh
                ? '韩国私人定制旅行 · 美妆体验 · 在地探索'
                : 'PRIVATE KOREA TRAVEL · BEAUTY · LOCAL EXPERIENCES'}
            </span>
          </div>

          {/* Main Headline with Slower, Luxurious Staggered Entrance */}
          <div className="space-y-5">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold text-[#F7F2EC] tracking-tight leading-[1.12] [text-wrap:balance]">
              {isZh ? (
                <>
                  <span className="block animate-hero-line-1">寻找属于你的光芒。</span>
                  <span className="inline-block animate-hero-line-2">
                    <span className="text-shimmer-rose inline-block">自在随心地探索。</span>
                  </span>
                </>
              ) : (
                <>
                  <span className="block animate-hero-line-1">Find your glow.</span>
                  <span className="inline-block animate-hero-line-2">
                    <span className="text-shimmer-rose inline-block">Play your way.</span>
                  </span>
                </>
              )}
            </h1>

            {/* Supporting Copy */}
            <div className="max-w-2xl mx-auto space-y-3 pt-1 animate-hero-supporting">
              <p className="text-base sm:text-xl text-[#E8DFD7] font-sans font-medium leading-relaxed [text-wrap:balance]">
                {isZh
                  ? '为你量身打造的韩国旅行与 K-beauty 专属体验。'
                  : 'Personalized Korea travel and K-beauty experiences, designed around you.'}
              </p>
              <p className="text-sm sm:text-base text-[#BFB3AC] font-normal leading-relaxed [text-wrap:balance]">
                {isZh
                  ? '从首尔出行安排到探索真正适合你的美妆体验，告诉我们你的心愿，我们将围绕你规划专属旅程。'
                  : "From getting around Seoul to discovering the beauty experiences that fit you, tell us what you're looking for and we'll help shape the journey."}
              </p>
            </div>
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3 animate-hero-cta">
            <button
              id="hero-plan-trip-cta"
              onClick={() => onNavigate('plan')}
              className="w-full sm:w-auto px-9 py-4 bg-[#D9B4B0] hover:bg-[#E9D2CD] text-[#1C1917] rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-lg hover:shadow-[#D9B4B0]/20 active:scale-[0.98] flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#1C1917] group-hover:scale-110 transition-transform duration-200" />
              <span>{isZh ? '定制我的行程' : 'PLAN MY TRIP'}</span>
            </button>
            <button
              id="hero-arrange-cta"
              onClick={() => onNavigate('arrange')}
              className="w-full sm:w-auto px-8 py-4 bg-[#2A2523] hover:bg-[#342F2D] text-[#F7F2EC] border border-[#3D3634] hover:border-[#D9B4B0] active:scale-[0.98] rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all flex items-center justify-center gap-2 shadow-xs group cursor-pointer"
            >
              <span>{isZh ? '了解我们能安排的服务' : 'WHAT WE CAN ARRANGE'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D9B4B0] group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Smooth Scroll Cue */}
          <div className="pt-6 animate-hero-scroll">
            <button
              type="button"
              onClick={() =>
                document.getElementById('nori-concept-section')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="inline-flex flex-col items-center gap-1.5 text-[10px] uppercase tracking-[0.26em] text-[#BFB3AC] hover:text-[#E9D2CD] transition-colors group cursor-pointer"
            >
              <span>{isZh ? '向下滑动探索' : 'SCROLL TO EXPLORE'}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#D9B4B0] animate-gentle-float" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Introduce the New NORI Concept */}
      <section id="nori-concept-section" className="py-24 px-6 sm:px-8 bg-[#1C1917] border-y border-[#3D3634]">
        <ScrollReveal variant="heading" className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2A2523] border border-[#3D3634] text-[10px] uppercase tracking-[0.24em] text-[#D9B4B0] font-semibold">
            <Compass className="w-3.5 h-3.5 text-[#D9B4B0]" />
            <span>{isZh ? '私人定制理念' : 'Bespoke Planning'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold text-[#F7F2EC] leading-[1.15] [text-wrap:balance]">
            {isZh ? (
              <>
                不是千篇一律的套餐。<br />
                <span className="text-[#E9D2CD]">而是属于你的旅程。</span>
              </>
            ) : (
              <>
                Not a package.<br />
                <span className="text-[#E9D2CD]">Your trip.</span>
              </>
            )}
          </h2>

          <div className="max-w-2xl mx-auto space-y-5 text-sm sm:text-base text-[#BFB3AC] font-normal leading-relaxed">
            <p className="text-base sm:text-lg text-[#E8DFD7] font-medium [text-wrap:balance]">
              {isZh
                ? '没有两段韩国之旅应当是一模一样的。'
                : 'No two trips to Korea should look exactly the same.'}
            </p>
            <p className="[text-wrap:balance]">
              {isZh
                ? '也许你需要贴心的机场接机与私人向导；也许你正在寻找契合品味的酒店、一天的 K-beauty 美妆购物向导、个人色彩测试、韩国美发沙龙预约，或是需要专业人士陪你在首尔安心体验皮肤管理。'
                : "Maybe you need an airport pickup and a private guide. Maybe you're looking for the right hotel, a K-beauty shopping day, personal color analysis, a Korean hair salon, or help navigating beauty treatments in Seoul."}
            </p>
            <p className="text-base sm:text-lg text-[#E9D2CD] font-serif italic pt-1">
              {isZh ? (
                <>
                  告诉我们你真正看重什么。<br />
                  我们将为你把每一处细节串联成完整的旅程。
                </>
              ) : (
                <>
                  Tell us what matters to you.<br />
                  We'll help put the pieces together.
                </>
              )}
            </p>
          </div>

          <div className="pt-2">
            <button
              id="concept-start-planning-cta"
              onClick={() => onNavigate('plan')}
              className="px-8 py-4 bg-[#D9B4B0] hover:bg-[#E9D2CD] text-[#1C1917] rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-md inline-flex items-center gap-2 group cursor-pointer active:scale-[0.98]"
            >
              <span>{isZh ? '开始规划' : 'START PLANNING'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#1C1917] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </ScrollReveal>
      </section>

      {/* 2B. Compact "WHY NORI" Section */}
      <section id="why-nori-section" className="py-20 px-6 sm:px-8 bg-[#1C1917] border-b border-[#3D3634]">
        <div className="max-w-5xl mx-auto space-y-12">
          <ScrollReveal variant="heading" className="max-w-2xl mx-auto text-center space-y-4">
            <span className="text-xs uppercase tracking-[0.26em] text-[#D9B4B0] font-semibold block">
              WHY NORI
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#F7F2EC] leading-tight [text-wrap:balance]">
              Personalized travel, with K-beauty expertise built in.
            </h2>
            <p className="text-sm sm:text-base text-[#BFB3AC] font-normal leading-relaxed pt-1 [text-wrap:balance]">
              NORI combines personalized Korea travel with thoughtful K-beauty guidance, so your trip can feel connected, personal, and genuinely useful.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="card" delay={90}>
            <div className="border border-[#3D3634] bg-[#252120] divide-y md:divide-y-0 md:divide-x divide-[#3D3634] grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden shadow-sm">
              <div className="py-8 px-6 sm:px-8 space-y-3 text-center md:text-left transition-colors duration-200 hover:bg-[#2A2523]">
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#F7F2EC] font-bold">
                  PRIVATE &amp; PERSONALIZED
                </h3>
                <p className="text-xs sm:text-sm text-[#BFB3AC] font-normal leading-relaxed">
                  Your trip is shaped around your interests, pace, and the kind of support you actually want.
                </p>
              </div>

              <div className="py-8 px-6 sm:px-8 space-y-3 text-center md:text-left transition-colors duration-200 hover:bg-[#2A2523]">
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#F7F2EC] font-bold">
                  K-BEAUTY EXPERTISE
                </h3>
                <p className="text-xs sm:text-sm text-[#BFB3AC] font-normal leading-relaxed">
                  We help you understand skincare, products, beauty experiences, and your options in a simple, practical way.
                </p>
              </div>

              <div className="py-8 px-6 sm:px-8 space-y-3 text-center md:text-left transition-colors duration-200 hover:bg-[#2A2523]">
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#F7F2EC] font-bold">
                  HONEST RECOMMENDATIONS
                </h3>
                <p className="text-xs sm:text-sm text-[#BFB3AC] font-normal leading-relaxed">
                  More is not always better. If you don't need something, we'll tell you.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. High-Level Service Preview: What can NORI arrange? */}
      <section id="what-we-can-arrange" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto bg-[#1C1917]">
        <ScrollReveal variant="heading" className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.26em] text-[#D9B4B0] font-semibold block">
            {isZh ? '服务范畴' : 'Tailored Ground Arrangements'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#F7F2EC] tracking-tight [text-wrap:balance]">
            {isZh ? 'NORI 可以为你安排什么？' : 'What can NORI arrange?'}
          </h2>
        </ScrollReveal>

        {/* 4 Broad Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {serviceCategories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <ScrollReveal
                key={cat.num}
                variant="card"
                delay={idx * 80}
                className="h-full"
              >
                <div className="p-8 rounded-3xl bg-[#252120] border border-[#3D3634] hover:border-[#D9B4B0] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#D9B4B0]/5 transition-all duration-200 flex flex-col justify-between space-y-8 group cursor-pointer h-full">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-serif italic text-[#D9B4B0] tracking-[0.2em] font-semibold">
                        {cat.num}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-[#2E2826] flex items-center justify-center text-[#D9B4B0] group-hover:scale-105 group-hover:bg-[#342D2B] transition-all duration-200">
                        <IconComponent className="w-4 h-4 text-[#D9B4B0]" />
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <h3 className="text-base font-sans font-bold tracking-[0.08em] text-[#F7F2EC] uppercase group-hover:text-[#E9D2CD] transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#BFB3AC] font-normal leading-relaxed">
                        {cat.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#3D3634]">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#D9B4B0] font-medium group-hover:text-white transition-colors">
                      {isZh ? '按需私人定制' : 'Tailored to Your Trip'}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Single CTA Below Categories */}
        <ScrollReveal variant="card" delay={320} className="text-center mt-14">
          <button
            id="explore-what-we-arrange-cta"
            onClick={() => onNavigate('arrange')}
            className="px-8 py-4 bg-[#252120] hover:bg-[#2E2826] text-[#F7F2EC] border border-[#3D3634] hover:border-[#D9B4B0] active:scale-[0.98] rounded-full text-xs uppercase tracking-[0.18em] font-semibold transition-all inline-flex items-center gap-2.5 shadow-md group cursor-pointer"
          >
            <span>{isZh ? '探索我们能安排的服务' : 'EXPLORE WHAT WE CAN ARRANGE'}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D9B4B0] group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </ScrollReveal>
      </section>

      {/* 4. Personalized Process: 3-Step Section */}
      <section id="personalized-process" className="py-24 px-6 sm:px-8 bg-[#1C1917] border-y border-[#3D3634]">
        <div className="max-w-6xl mx-auto space-y-16">
          <ScrollReveal variant="heading" className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.26em] text-[#D9B4B0] font-semibold block">
              {isZh ? '定制流程' : 'How It Works'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#F7F2EC] tracking-tight [text-wrap:balance]">
              {isZh ? '你的旅程，由你开启。' : 'Your trip starts with you.'}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((item, idx) => (
              <ScrollReveal
                key={idx}
                variant="card"
                delay={idx * 80}
                className="h-full"
              >
                <div className="p-8 sm:p-9 rounded-3xl bg-[#252120] border border-[#3D3634] hover:border-[#D9B4B0]/70 hover:-translate-y-1 transition-all duration-200 space-y-4 relative flex flex-col justify-between shadow-md hover:shadow-xl h-full">
                  <div className="space-y-4">
                    <span className="inline-block px-3.5 py-1 rounded-full bg-[#1C1917] border border-[#3D3634] text-[10px] uppercase tracking-[0.22em] text-[#D9B4B0] font-bold">
                      {item.step}
                    </span>
                    <h3 className="text-lg font-sans font-bold tracking-[0.06em] text-[#F7F2EC] uppercase">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#BFB3AC] font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NORI Brand / Honesty Section */}
      <section id="honest-guidance-section" className="py-24 px-6 sm:px-8 bg-[#1C1917]">
        <ScrollReveal variant="heading" className="max-w-4xl mx-auto">
          <div className="p-10 sm:p-16 rounded-3xl bg-[#252120] border border-[#3D3634] shadow-xl relative overflow-hidden">
            {/* Subtle glow highlight */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D9B4B0]/10 blur-3xl rounded-full pointer-events-none" />

            <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
              <span className="text-xs uppercase tracking-[0.28em] text-[#D9B4B0] font-semibold block">
                {isZh ? 'NORI 品牌哲学' : 'The NORI Philosophy'}
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#F7F2EC] leading-tight [text-wrap:balance]">
                {isZh ? '零压力的美学探索。' : 'Beauty, without the pressure.'}
              </h2>

              <div className="space-y-3 text-base sm:text-lg text-[#BFB3AC] font-normal leading-relaxed">
                <p className="[text-wrap:balance]">
                  {isZh
                    ? '我们深信，最好的体验绝不是堆砌最多的项目、购买最多的产品或赶往最多的站点。'
                    : "We believe the best experience isn't the one with the most treatments, products or stops."}
                </p>
                <p className="text-[#E8DFD7] font-medium [text-wrap:balance]">
                  {isZh ? '而是真正契合你的那一个。' : "It's the one that actually fits you."}
                </p>
              </div>

              <blockquote className="p-6 sm:p-8 rounded-2xl bg-[#1C1917] border border-[#3D3634] text-center space-y-2 mt-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#BFB3AC] font-medium">
                  {isZh ? '有时最好的建议其实是：' : 'Sometimes the best recommendation is:'}
                </p>
                <p className="text-2xl sm:text-3xl font-serif italic text-[#E9D2CD] leading-snug">
                  {isZh ? '“你并不需要它。”' : '"You don\'t need it."'}
                </p>
              </blockquote>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5B. Real Guest Stories Teaser */}
      <section id="real-guest-stories-teaser" className="py-20 px-6 sm:px-8 bg-[#1C1917] border-t border-[#3D3634]">
        <div className="max-w-5xl mx-auto space-y-12">
          <ScrollReveal variant="heading" className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.26em] text-[#D9B4B0] font-semibold block">
              REAL GUEST STORIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#F7F2EC] leading-tight [text-wrap:balance]">
              What our guests remember most
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="card" delay={90}>
            <div className="border border-[#3D3634] bg-[#252120] divide-y md:divide-y-0 md:divide-x divide-[#3D3634] grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden shadow-sm">
              <blockquote className="py-8 px-6 sm:px-8 flex flex-col justify-between gap-5 text-center md:text-left transition-colors duration-200 hover:bg-[#2A2523]">
                <p className="text-xl sm:text-2xl font-serif italic font-normal text-[#F7F2EC] leading-snug">
                  “We actually ended up shopping less than we expected.”
                </p>
                <footer className="text-xs text-[#BFB3AC] font-normal tracking-wide">
                  Singapore · 40s · 2 Travelers
                </footer>
              </blockquote>

              <blockquote className="py-8 px-6 sm:px-8 flex flex-col justify-between gap-5 text-center md:text-left transition-colors duration-200 hover:bg-[#2A2523]">
                <p className="text-xl sm:text-2xl font-serif italic font-normal text-[#F7F2EC] leading-snug">
                  “She was always checking how we were feeling.”
                </p>
                <footer className="text-xs text-[#BFB3AC] font-normal tracking-wide">
                  Singapore · 50s · 3 Travelers
                </footer>
              </blockquote>

              <blockquote className="py-8 px-6 sm:px-8 flex flex-col justify-between gap-5 text-center md:text-left transition-colors duration-200 hover:bg-[#2A2523]">
                <p className="text-xl sm:text-2xl font-serif italic font-normal text-[#F7F2EC] leading-snug">
                  “She told me she honestly didn't think I needed a skin treatment.”
                </p>
                <footer className="text-xs text-[#BFB3AC] font-normal tracking-wide">
                  Los Angeles, USA · 40s · Couple
                </footer>
              </blockquote>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="card" delay={180} className="text-center pt-1">
            <button
              id="home-read-guest-stories-link"
              type="button"
              onClick={() => onNavigate('reviews')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E9D2CD] hover:text-[#F7F2EC] font-semibold transition-colors border-b border-[#E9D2CD] hover:border-[#F7F2EC] pb-1 cursor-pointer"
            >
              <span>READ GUEST STORIES →</span>
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. NORI's Journal Preview */}
      <section id="journal-preview" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#3D3634] bg-[#1C1917]">
        <ScrollReveal variant="heading" className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-1.5">
            <span className="text-xs uppercase tracking-[0.24em] text-[#D9B4B0] font-semibold block">
              {isZh ? '特撰专栏' : 'Editorial Publication'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#F7F2EC] tracking-tight">
              {isZh ? 'NORI 美学期刊' : "NORI's Journal"}
            </h2>
          </div>
          <button
            onClick={() => onNavigate('journal')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#E9D2CD] hover:text-[#F7F2EC] font-semibold transition-colors border-b border-[#E9D2CD] hover:border-[#F7F2EC] pb-1 self-start md:self-auto cursor-pointer"
          >
            <span>{isZh ? '阅读全部专栏' : 'Read All Stories'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </ScrollReveal>

        {/* Magazine-style articles grid */}
        <div className="max-w-3xl mx-auto space-y-6">
          {previewArticles.map((article, idx) => (
            <ScrollReveal key={article.id} variant="card" delay={idx * 80}>
              <article
                onClick={() => onSelectArticle(article)}
                className="group cursor-pointer bg-[#252120] border border-[#3D3634] rounded-3xl overflow-hidden hover:border-[#D9B4B0] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#D9B4B0]/5 p-8 sm:p-10"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1917] border border-[#3D3634]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9B4B0]" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#D9B4B0] font-semibold">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-sans font-bold text-[#F7F2EC] group-hover:text-[#E9D2CD] transition-colors leading-snug [text-wrap:balance]">
                    {article.title}
                  </h3>
                  {(article.subtitle || article.excerpt) && (
                    <p className="text-base sm:text-lg font-serif italic text-[#BFB3AC] leading-relaxed font-normal">
                      {article.subtitle || article.excerpt}
                    </p>
                  )}
                </div>

                <div className="mt-8 pt-5 flex items-center justify-between border-t border-[#3D3634] text-xs text-[#BFB3AC]">
                  <span className="uppercase tracking-[0.18em] text-[#D9B4B0] font-medium">
                    {isZh ? `作者：${article.author.name}` : article.author.name}
                  </span>
                  <span className="group-hover:text-white font-semibold uppercase tracking-[0.16em] text-[#F7F2EC] flex items-center gap-1.5">
                    {isZh ? '阅读全文' : 'Read Journal'} <ArrowRight className="w-3.5 h-3.5 text-[#D9B4B0] group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 7. Final Homepage CTA */}
      <section id="final-booking-cta" className="py-28 px-6 sm:px-8 bg-[#1C1917] text-[#F7F2EC] relative overflow-hidden border-t border-[#3D3634]">
        {/* Soft Radiance in Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D9B4B0]/15 blur-3xl rounded-full pointer-events-none" />

        <ScrollReveal variant="heading" className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#252120] border border-[#3D3634] text-xs uppercase tracking-[0.2em] text-[#E9D2CD] font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#D9B4B0]" />
            <span>{isZh ? '寻找你的光芒 · 自在随心探索' : 'Find your glow. Play your way.'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold text-[#F7F2EC] leading-tight [text-wrap:balance]">
            {isZh
              ? '你心目中完美的韩国之旅是什么模样？'
              : 'What would your perfect Korea trip look like?'}
          </h2>

          <p className="text-sm sm:text-base text-[#BFB3AC] max-w-2xl mx-auto font-normal leading-relaxed [text-wrap:balance]">
            {isZh
              ? '告诉我们你的需求——无论是韩国在地出行，还是探索适合你的 K-beauty——我们将围绕你打造专属方案。'
              : "Tell us what you need — from getting around Korea to discovering K-beauty — and we'll create a plan around you."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              id="final-plan-trip-cta"
              onClick={() => onNavigate('plan')}
              className="w-full sm:w-auto px-9 py-4 bg-[#D9B4B0] hover:bg-[#E9D2CD] text-[#1C1917] text-xs uppercase tracking-[0.2em] font-bold rounded-full transition-all shadow-xl flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#1C1917]" />
              <span>{isZh ? '定制我的行程' : 'PLAN MY TRIP'}</span>
            </button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
