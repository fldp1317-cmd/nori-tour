import React from 'react';
import { Sparkles, ArrowRight, Compass, Car, Building2, Palette, HeartHandshake } from 'lucide-react';
import { JournalArticle } from '../types';

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
    <div id="home-page" className="w-full bg-[#F7F2EC]">
      {/* 1. Homepage Hero */}
      <section
        id="hero-section"
        className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-24 px-6 sm:px-8 overflow-hidden bg-[#F7F2EC]"
      >
        {/* Editorial Visual with Soft Rose & Warm Ivory Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=2000&q=85"
            alt="Serene Korean Beauty and Editorial Travel Atmosphere"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=2000&q=85';
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
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FCFAF7]/95 border border-[#EADBCE] shadow-xs backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#D9B4B0]" />
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#786761] font-medium">
              {isZh
                ? '韩国私人定制旅行 · 美妆体验 · 在地探索'
                : 'PRIVATE KOREA TRAVEL · BEAUTY · LOCAL EXPERIENCES'}
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-5">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-editorial font-light text-[#302B29] tracking-tight leading-[1.12]">
              {isZh ? (
                <>
                  寻找属于你的光芒。<br />
                  <span className="italic font-normal text-[#786761]">自在随心地探索。</span>
                </>
              ) : (
                <>
                  Find your glow.<br />
                  <span className="italic font-normal text-[#786761]">Play your way.</span>
                </>
              )}
            </h1>

            {/* Supporting Copy */}
            <div className="max-w-2xl mx-auto space-y-3 pt-1">
              <p className="text-base sm:text-xl text-[#302B29] font-editorial font-light leading-relaxed">
                {isZh
                  ? '为你量身打造的韩国旅行与 K-beauty 专属体验。'
                  : 'Personalized Korea travel and K-beauty experiences, designed around you.'}
              </p>
              <p className="text-sm sm:text-base text-[#786761] font-light leading-relaxed">
                {isZh
                  ? '从首尔出行安排到探索真正适合你的美妆体验，告诉我们你的心愿，我们将围绕你规划专属旅程。'
                  : "From getting around Seoul to discovering the beauty experiences that fit you, tell us what you're looking for and we'll help shape the journey."}
              </p>
            </div>
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              id="hero-plan-trip-cta"
              onClick={() => onNavigate('plan')}
              className="w-full sm:w-auto px-9 py-4 bg-[#302B29] hover:bg-[#443E3B] text-[#F7F2EC] rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md flex items-center justify-center gap-2.5 group border border-[#302B29]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E9D2CD] group-hover:rotate-12 transition-transform" />
              <span>{isZh ? '定制我的行程' : 'PLAN MY TRIP'}</span>
            </button>
            <button
              id="hero-arrange-cta"
              onClick={() => onNavigate('arrange')}
              className="w-full sm:w-auto px-8 py-4 bg-[#FCFAF7] hover:bg-[#F4E8E5] text-[#302B29] border border-[#EADBCE] hover:border-[#D9B4B0] rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <span>{isZh ? '了解我们能安排的服务' : 'WHAT WE CAN ARRANGE'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#786761]" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Introduce the New NORI Concept */}
      <section id="nori-concept-section" className="py-24 px-6 sm:px-8 bg-[#FCFAF7] border-y border-[#EADBCE]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7F2EC] border border-[#EADBCE] text-[10px] uppercase tracking-[0.24em] text-[#786761] font-medium">
            <Compass className="w-3.5 h-3.5 text-[#D9B4B0]" />
            <span>{isZh ? '私人定制理念' : 'Bespoke Planning'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-light text-[#302B29] leading-[1.15]">
            {isZh ? (
              <>
                不是千篇一律的套餐。<br />
                <span className="italic font-normal text-[#786761]">而是属于你的旅程。</span>
              </>
            ) : (
              <>
                Not a package.<br />
                <span className="italic font-normal text-[#786761]">Your trip.</span>
              </>
            )}
          </h2>

          <div className="max-w-2xl mx-auto space-y-5 text-sm sm:text-base text-[#786761] font-light leading-relaxed">
            <p className="text-base sm:text-lg text-[#302B29] font-normal">
              {isZh
                ? '没有两段韩国之旅应当是一模一样的。'
                : 'No two trips to Korea should look exactly the same.'}
            </p>
            <p>
              {isZh
                ? '也许你需要贴心的机场接机与私人向导；也许你正在寻找契合品味的酒店、一天的 K-beauty 美妆购物向导、个人色彩测试、韩国美发沙龙预约，或是需要专业人士陪你在首尔安心体验皮肤管理。'
                : "Maybe you need an airport pickup and a private guide. Maybe you're looking for the right hotel, a K-beauty shopping day, personal color analysis, a Korean hair salon, or help navigating beauty treatments in Seoul."}
            </p>
            <p className="text-base sm:text-lg text-[#302B29] font-editorial italic pt-1">
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
              className="px-8 py-4 bg-[#302B29] hover:bg-[#443E3B] text-[#F7F2EC] rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-xs inline-flex items-center gap-2 group"
            >
              <span>{isZh ? '开始规划' : 'START PLANNING'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D9B4B0] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. High-Level Service Preview: What can NORI arrange? */}
      <section id="what-we-can-arrange" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.26em] text-[#D9B4B0] font-medium block">
            {isZh ? '服务范畴' : 'Tailored Ground Arrangements'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#302B29]">
            {isZh ? 'NORI 可以为你安排什么？' : 'What can NORI arrange?'}
          </h2>
        </div>

        {/* 4 Broad Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {serviceCategories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={cat.num}
                className="p-8 rounded-3xl bg-[#FCFAF7] border border-[#EADBCE] hover:border-[#D9B4B0] transition-all duration-300 shadow-xs flex flex-col justify-between space-y-8"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-editorial italic text-[#D9B4B0] tracking-[0.2em] font-medium">
                      {cat.num}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#F4E8E5] flex items-center justify-center text-[#302B29]">
                      <IconComponent className="w-4 h-4 text-[#D9B4B0]" />
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <h3 className="text-lg font-editorial font-medium tracking-[0.08em] text-[#302B29] uppercase">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#786761] font-light leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EADBCE]/70">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#9B8983]">
                    {isZh ? '按需私人定制' : 'Tailored to Your Trip'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Single CTA Below Categories */}
        <div className="text-center mt-14">
          <button
            id="explore-what-we-arrange-cta"
            onClick={() => onNavigate('arrange')}
            className="px-8 py-4 bg-[#FCFAF7] hover:bg-[#F4E8E5] text-[#302B29] border border-[#302B29] rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all inline-flex items-center gap-2.5 shadow-xs group"
          >
            <span>{isZh ? '探索我们能安排的服务' : 'EXPLORE WHAT WE CAN ARRANGE'}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#302B29] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </section>

      {/* 4. Personalized Process: 3-Step Section */}
      <section id="personalized-process" className="py-24 px-6 sm:px-8 bg-[#FCFAF7] border-y border-[#EADBCE]">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.26em] text-[#D9B4B0] font-medium block">
              {isZh ? '定制流程' : 'How It Works'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#302B29]">
              {isZh ? '你的旅程，由你开启。' : 'Your trip starts with you.'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((item, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-9 rounded-3xl bg-[#F7F2EC] border border-[#EADBCE] space-y-4 relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="inline-block px-3.5 py-1 rounded-full bg-[#FCFAF7] border border-[#EADBCE] text-[10px] uppercase tracking-[0.22em] text-[#D9B4B0] font-semibold">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-editorial font-medium tracking-[0.06em] text-[#302B29] uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#786761] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NORI Brand / Honesty Section */}
      <section id="honest-guidance-section" className="py-24 px-6 sm:px-8 bg-[#F7F2EC]">
        <div className="max-w-4xl mx-auto">
          <div className="p-10 sm:p-16 rounded-3xl bg-[#FCFAF7] border border-[#EADBCE] shadow-xs relative overflow-hidden">
            {/* Subtle glow highlight */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#E9D2CD]/30 blur-3xl rounded-full pointer-events-none" />

            <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
              <span className="text-xs uppercase tracking-[0.28em] text-[#D9B4B0] font-medium block">
                {isZh ? 'NORI 品牌哲学' : 'The NORI Philosophy'}
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#302B29] leading-tight">
                {isZh ? '零压力的美学探索。' : 'Beauty, without the pressure.'}
              </h2>

              <div className="space-y-3 text-base sm:text-lg text-[#786761] font-light leading-relaxed">
                <p>
                  {isZh
                    ? '我们深信，最好的体验绝不是堆砌最多的项目、购买最多的产品或赶往最多的站点。'
                    : "We believe the best experience isn't the one with the most treatments, products or stops."}
                </p>
                <p className="text-[#302B29] font-normal">
                  {isZh ? '而是真正契合你的那一个。' : "It's the one that actually fits you."}
                </p>
              </div>

              <blockquote className="p-6 sm:p-8 rounded-2xl bg-[#F7F2EC] border border-[#EADBCE] text-center space-y-2 mt-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#786761] font-light">
                  {isZh ? '有时最好的建议其实是：' : 'Sometimes the best recommendation is:'}
                </p>
                <p className="text-2xl sm:text-3xl font-editorial italic text-[#302B29] leading-snug">
                  {isZh ? '“你并不需要它。”' : '"You don\'t need it."'}
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NORI's Journal Preview */}
      <section id="journal-preview" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#EADBCE]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-1.5">
            <span className="text-xs uppercase tracking-[0.24em] text-[#D9B4B0] font-medium block">
              {isZh ? '特撰专栏' : 'Editorial Publication'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light text-[#302B29]">
              {isZh ? 'NORI 美学期刊' : "NORI's Journal"}
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

      {/* 7. Final Homepage CTA */}
      <section id="final-booking-cta" className="py-28 px-6 sm:px-8 bg-[#302B29] text-[#F7F2EC] relative overflow-hidden">
        {/* Soft Radiance in Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D9B4B0]/15 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs uppercase tracking-[0.2em] text-[#E9D2CD] font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#D9B4B0]" />
            <span>{isZh ? '寻找你的光芒 · 自在随心探索' : 'Find your glow. Play your way.'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-light text-[#F7F2EC] leading-tight">
            {isZh
              ? '你心目中完美的韩国之旅是什么模样？'
              : 'What would your perfect Korea trip look like?'}
          </h2>

          <p className="text-sm sm:text-base text-[#D9B4B0] max-w-2xl mx-auto font-light leading-relaxed">
            {isZh
              ? '告诉我们你的需求——无论是韩国在地出行，还是探索适合你的 K-beauty——我们将围绕你打造专属方案。'
              : "Tell us what you need — from getting around Korea to discovering K-beauty — and we'll create a plan around you."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              id="final-plan-trip-cta"
              onClick={() => onNavigate('plan')}
              className="w-full sm:w-auto px-9 py-4 bg-[#D9B4B0] hover:bg-[#E9D2CD] text-[#302B29] text-xs uppercase tracking-[0.2em] font-semibold rounded-full transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#302B29]" />
              <span>{isZh ? '定制我的行程' : 'PLAN MY TRIP'}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
