import React from 'react';
import { Clock, Users, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { Tour } from '../types';

interface TourCardProps {
  tour: Tour;
  onSelectTour: (tour: Tour) => void;
  onBookTour: (tourId: string) => void;
  language?: 'EN' | '中文';
}

const TOUR_ZH: Record<string, { title: string; shortDescription: string; category?: string; highlightLine?: string }> = {
  'nori-complete-glow-journey': {
    title: 'NORI 全方位焕采赋能之旅 (3日私享)',
    shortDescription: 'NORI 最具代表性的3日私享体验：从肌肤屏障分析、个人色彩测定到专业化妆大师课与首尔高端身心水疗。',
    category: '经典代表作',
    highlightLine: '三天时间，一场专属于你的焕美之旅。'
  },
  'nori-skin-edit': {
    title: 'NORI 皮肤定制选品 (2小时)',
    shortDescription: '告别盲目跟风。双语美妆顾问陪同，在轻松的咖啡馆氛围中梳理日常护肤，并在首尔旗舰店精准选品。',
    category: '护肤管理'
  },
  'nori-skin-discovery': {
    title: '清潭洞皮肤管理与成分探索之旅',
    shortDescription: '探访首尔清潭洞专业皮肤科，深度解析院线级护肤仪器、舒缓配方与屏障修护科学。',
    category: '护肤管理'
  },
  'nori-glow-day': {
    title: '首尔一日焕颜沉浸之旅',
    shortDescription: '充实的一日美学漫步：涵盖晨间韩屋温和头皮护理、下午个人色彩测试与傍晚汉江落日放松。',
    category: '全日沉浸'
  },
  'nori-makeup-studio-journey': {
    title: 'K-Beauty 明星化妆室大师课',
    shortDescription: '“化妆师化半张脸，你亲手化另一半”。在江南知名艺人工作室掌握正统韩系妆容手法与色彩精髓。',
    category: '彩妆工坊',
    highlightLine: '彩妆师示范半脸，你亲手完成半脸'
  },
  'personal-color-kbeauty-styling': {
    title: '专业个人色彩诊断与彩妆配搭',
    shortDescription: '韩国认证色彩分析师利用多色布料精细比对，定制属于你的四季基调与最佳口红、腮红色彩方案。',
    category: '色彩诊断'
  },
};

export const TourCard: React.FC<TourCardProps> = ({
  tour,
  onSelectTour,
  onBookTour,
  language = 'EN',
}) => {
  const isZh = language === '中文';
  const zhData = isZh ? TOUR_ZH[tour.id] : undefined;
  const displayTitle = zhData?.title || tour.title;
  const displayDesc = zhData?.shortDescription || tour.shortDescription;
  const displayCategory = zhData?.category || tour.category;
  const displayHighlight = zhData?.highlightLine || tour.highlightLine;

  const isCompleteGlow = tour.id === 'nori-complete-glow-journey';

  // Feature Card for Signature Experience: NORI Complete Glow Journey
  if (isCompleteGlow) {
    return (
      <div
        id={`tour-card-${tour.id}`}
        className="group col-span-1 md:col-span-2 lg:col-span-3 bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl overflow-hidden hover:border-[#D9B4B0] transition-all duration-300 shadow-xs hover:shadow-md flex flex-col lg:flex-row"
      >
        {/* Large Editorial Photography Container */}
        <div className="relative lg:w-3/5 min-h-[340px] sm:min-h-[420px] overflow-hidden bg-[#ECE4D9]">
          <img
            src={tour.heroImage}
            alt={displayTitle}
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80';
            }}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20" />

          {/* Minimal Clean Overlays */}
          <div className="absolute top-5 left-5 flex items-center gap-2">
            <span className="px-3.5 py-1.5 bg-[#F7F2EC]/95 backdrop-blur-md text-[#302B29] text-[10px] uppercase tracking-[0.24em] font-medium rounded-full shadow-xs">
              {isZh ? '经典代表作' : 'SIGNATURE EXPERIENCE'}
            </span>
          </div>

          <div className="absolute bottom-5 left-5 right-5 text-white/90">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#EADBCE] block">
              {isZh ? '3日私享深度之旅' : '3-Day Guided Signature'}
            </span>
            <p className="text-sm sm:text-base font-editorial italic font-light">
              {isZh
                ? '“三天时间，一场专属于你的焕美之旅。”'
                : '“Three days. One beauty journey, entirely your own.”'}
            </p>
          </div>
        </div>

        {/* Feature Card Body Content */}
        <div className="p-7 sm:p-9 lg:w-2/5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#D9B4B0] font-semibold block">
                {displayCategory} • {isZh ? '3天' : tour.duration}
              </span>
              <h3
                onClick={() => onSelectTour(tour)}
                className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29] group-hover:text-[#786761] transition-colors cursor-pointer leading-tight"
              >
                {displayTitle}
              </h3>
            </div>

            <div className="space-y-2">
              <p className="text-base font-editorial text-[#302B29] font-medium">
                {isZh ? '为期三天。' : 'Three days.'}
              </p>
              <p className="text-sm font-editorial italic text-[#786761]">
                {isZh ? '专属于你的焕美蜕变。' : 'One beauty journey, entirely your own.'}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#786761] leading-relaxed font-light">
              {displayDesc}
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-[#786761]">
              <span className="px-3 py-1 rounded-full bg-[#F7F2EC] border border-[#EADBCE]/80">
                {isZh ? '专业护肤咨询' : 'Skincare Consultation'}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#F7F2EC] border border-[#EADBCE]/80">
                {isZh ? '个人色彩测试' : 'Personal Color Draping'}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#F7F2EC] border border-[#EADBCE]/80">
                {isZh ? '手把手美妆教学' : 'Hands-On Makeup Lesson'}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#F7F2EC] border border-[#EADBCE]/80">
                {isZh ? '身心舒缓水疗' : 'Restorative Wellness'}
              </span>
            </div>
          </div>

          {/* Bottom Actions & Price */}
          <div className="pt-5 border-t border-[#EADBCE] flex items-center justify-between gap-3">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#9B8983] block">
                {isZh ? '形式' : 'Format'}
              </span>
              <span className="text-sm font-editorial font-medium text-[#302B29]">
                {isZh
                  ? (tour.priceDisplay ? '按需定制询价' : '按需定制询价')
                  : (tour.priceDisplay || 'Price on Request')}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                id={`view-experience-${tour.id}`}
                onClick={() => onSelectTour(tour)}
                className="px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-medium text-[#302B29] hover:text-[#786761] border border-[#EADBCE] hover:border-[#D9B4B0] bg-[#F7F2EC] rounded-full transition-all flex items-center gap-2 shadow-2xs"
              >
                <span>{isZh ? '探索经典之旅' : 'Explore Signature Journey'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D9B4B0]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard Experience Card: Optimized with Larger Editorial Photography & Minimal Overlay
  return (
    <div
      id={`tour-card-${tour.id}`}
      className="group bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl overflow-hidden hover:border-[#D9B4B0] transition-all duration-300 flex flex-col justify-between hover:shadow-lg"
    >
      {/* Top Image Container — Larger Editorial Photography Space */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#ECE4D9]">
        <img
          src={tour.heroImage}
          alt={displayTitle}
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80';
          }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Minimal Category & Duration Overlay */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3.5 py-1 bg-[#F7F2EC]/95 backdrop-blur-md text-[#302B29] text-[10px] uppercase tracking-[0.2em] font-medium rounded-full shadow-xs">
            {displayCategory}
          </span>
          {tour.depthLabel && (
            <span className="px-3 py-1 bg-[#F4E8E5]/95 backdrop-blur-md text-[#786761] text-[10px] uppercase tracking-[0.16em] font-medium rounded-full shadow-xs">
              {isZh ? '深度体验' : tour.depthLabel}
            </span>
          )}
        </div>

        {/* Duration Subtle Pill Overlay */}
        <div className="absolute bottom-3 right-4 flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[11px] text-[#F7F2EC]">
          <Clock className="w-3 h-3 text-[#EADBCE]" />
          <span>{tour.duration}</span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          {/* Metadata chips */}
          <div className="flex items-center gap-2 text-xs text-[#786761]">
            <span>{isZh ? (tour.groupSize ? '私密小团' : '私密体验') : (tour.groupSize || tour.groupType)}</span>
            <span className="text-[#EADBCE]">•</span>
            <span>{isZh ? '双语顾问陪同' : 'Bilingual Guide'}</span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onSelectTour(tour)}
            className="text-xl sm:text-2xl font-editorial font-light text-[#302B29] group-hover:text-[#786761] transition-colors cursor-pointer leading-snug"
          >
            {displayTitle}
          </h3>

          {/* Highlight line if present (e.g. Half by the artist. Half by you.) */}
          {displayHighlight && (
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#D9B4B0] uppercase tracking-[0.16em]">
              <Sparkles className="w-3 h-3 text-[#D9B4B0] shrink-0" />
              <span>{displayHighlight}</span>
            </div>
          )}

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#786761] leading-relaxed line-clamp-2 font-light">
            {displayDesc}
          </p>
        </div>

        {/* Bottom Actions & Price */}
        <div className="pt-4 border-t border-[#EADBCE] flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#9B8983] block">
              {tour.priceDisplay ? (isZh ? '价格' : 'Pricing') : (isZh ? '起价' : 'From')}
            </span>
            {tour.priceDisplay ? (
              <span className="text-sm sm:text-base font-editorial font-medium text-[#302B29]">
                {isZh ? '按需定制询价' : tour.priceDisplay}
              </span>
            ) : (
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-editorial font-medium text-[#302B29]">
                  ${tour.startingPrice}
                </span>
                <span className="text-[11px] text-[#786761]">{tour.currency}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              id={`view-experience-${tour.id}`}
              onClick={() => onSelectTour(tour)}
              className="px-4 py-2 text-xs uppercase tracking-[0.14em] font-medium text-[#302B29] hover:text-[#786761] border border-[#EADBCE] hover:border-[#D9B4B0] bg-[#F7F2EC] rounded-full transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <span>{isZh ? '查看详情' : (tour.ctaText || 'View Experience')}</span>
              <ArrowRight className="w-3 h-3 text-[#D9B4B0]" />
            </button>
            <button
              id={`quick-book-${tour.id}`}
              onClick={() => onBookTour(tour.id)}
              className="px-4 py-2 text-xs uppercase tracking-[0.14em] font-medium bg-[#302B29] hover:bg-[#443E3B] text-[#F7F2EC] rounded-full transition-all shadow-2xs"
            >
              {tour.priceDisplay ? (isZh ? '咨询定制' : 'Inquire') : (isZh ? '立即预订' : 'Book')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

