import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Users,
  Star,
  MapPin,
  Check,
  X as XIcon,
  Sparkles,
  ShieldCheck,
  Share2,
  ChevronRight,
  Layers,
  FileText,
  HeartHandshake,
  CheckCircle2,
  Calendar,
  BookOpen,
  Info,
  Droplets,
  Palette,
  Compass,
  Camera,
  Edit3,
  RefreshCw,
  Eye
} from 'lucide-react';
import { Tour, TourVisualStoryItem } from '../types';

interface TourDetailPageProps {
  tour: Tour;
  onBack: () => void;
  onBookNow: (tourId: string) => void;
  onSelectTour?: (tour: Tour) => void;
  allTours?: Tour[];
}

export const TourDetailPage: React.FC<TourDetailPageProps> = ({
  tour,
  onBack,
  onBookNow,
  onSelectTour,
  allTours,
}) => {
  // Construct default 5-stage visual story hierarchy if not defined
  const baseStory: TourVisualStoryItem[] = (tour.visualStory && tour.visualStory.length > 0)
    ? tour.visualStory
    : [
        {
          stage: 'hero',
          stageNumber: 1,
          stageName: 'Hero Overview',
          sceneTitle: `${tour.title} • Atelier Atmosphere`,
          sceneDescription: 'Wide atmospheric view capturing the welcoming, refined setting of the experience in Seoul.',
          photoDirection: 'Warm natural light, unhurried pace, authentic beauty moment without commercial clutter.',
          imageUrl: tour.heroImage,
          isPlaceholder: false
        },
        {
          stage: 'activity',
          stageNumber: 2,
          stageName: 'Experience & Activity',
          sceneTitle: 'Hands-On Experience & Consultation',
          sceneDescription: 'Active testing and exploring of tailored treatments or products.',
          photoDirection: 'Close focus on hands and active participation.',
          imageUrl: (tour.gallery && tour.gallery[0]) || tour.heroImage,
          isPlaceholder: false
        },
        {
          stage: 'interaction',
          stageNumber: 3,
          stageName: 'Human Interaction',
          sceneTitle: 'Personalized Guide & Guest Connection',
          sceneDescription: 'Intimate, thoughtful interaction with your licensed bilingual guide or master artist.',
          photoDirection: 'Warm expressions, genuine engagement, zero commercial pressure.',
          imageUrl: (tour.gallery && tour.gallery[1]) || tour.heroImage,
          isPlaceholder: false
        },
        {
          stage: 'detail',
          stageNumber: 4,
          stageName: 'Detail & Texture',
          sceneTitle: 'Curated Textures & Tools',
          sceneDescription: 'Macro perspective on cosmetic formulas, skin diagnostics, or natural botanicals.',
          photoDirection: 'Refined macro focus and tactile textures.',
          imageUrl: (tour.gallery && tour.gallery[2]) || tour.heroImage,
          isPlaceholder: false
        },
        {
          stage: 'takeaway',
          stageNumber: 5,
          stageName: 'Result & Takeaway',
          sceneTitle: 'Personal Deliverable & Radiance',
          sceneDescription: 'Your customized beauty plan, routine guide, and the lasting feeling of confidence.',
          photoDirection: 'Calm, glowing, satisfied traveler feeling empowered in their skin.',
          imageUrl: (tour.gallery && tour.gallery[3]) || tour.heroImage,
          isPlaceholder: false
        }
      ];

  // State to support user-editable image placeholders and live URL previews
  const [customStoryImages, setCustomStoryImages] = useState<Record<number, string>>({});
  const [editingStageIdx, setEditingStageIdx] = useState<number | null>(null);
  const [tempUrlInput, setTempUrlInput] = useState<string>('');
  const [showArtDirectionNotes, setShowArtDirectionNotes] = useState<boolean>(true);

  // Active story items with overrides
  const effectiveVisualStory: TourVisualStoryItem[] = baseStory.map((item, idx) => ({
    ...item,
    imageUrl: customStoryImages[idx] || item.imageUrl,
    isPlaceholder: customStoryImages[idx] ? false : item.isPlaceholder
  }));

  const allImages = effectiveVisualStory.map(item => item.imageUrl);

  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const activeImage = allImages[activeImageIndex] || tour.heroImage;
  const currentStoryItem = effectiveVisualStory[activeImageIndex] || effectiveVisualStory[0];

  const [copiedLink, setCopiedLink] = useState(false);
  const [selectedGuestTier, setSelectedGuestTier] = useState<number>(0);
  const [selectedDayTab, setSelectedDayTab] = useState<number>(0);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleSaveCustomImage = (idx: number) => {
    if (tempUrlInput.trim()) {
      setCustomStoryImages(prev => ({
        ...prev,
        [idx]: tempUrlInput.trim()
      }));
    }
    setEditingStageIdx(null);
    setTempUrlInput('');
  };

  const handleResetImage = (idx: number) => {
    setCustomStoryImages(prev => {
      const next = { ...prev };
      delete next[idx];
      return next;
    });
    setEditingStageIdx(null);
  };

  const currentTier = tour.priceByGuestCount && tour.priceByGuestCount[selectedGuestTier]
    ? tour.priceByGuestCount[selectedGuestTier]
    : null;
  const currentTierUsd = currentTier
    ? (currentTier.usd ?? Math.round(currentTier.krw / 1300))
    : tour.startingPrice;

  return (
    <div id="tour-detail-page" className="w-full pt-28 pb-24 bg-[#F7F2EC]">
      {/* Top Breadcrumb & Actions */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-8">
        <div className="flex items-center justify-between">
          <button
            id="tour-detail-back-btn"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#786761] hover:text-[#302B29] font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Experiences</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              id="tour-share-btn"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#EADBCE] bg-[#FCFAF7] text-xs text-[#302B29] hover:bg-[#F4E8E5] transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Link Copied' : 'Share Experience'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Special Signature Atelier Editorial Banner for NORI Makeup Studio Journey */}
        {tour.id === 'nori-makeup-studio-journey' && (
          <div className="mb-10 p-8 sm:p-12 rounded-3xl bg-[#FCFAF7] border border-[#EADBCE] space-y-6 relative overflow-hidden shadow-xs">
            <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-[#E9D2CD]/25 blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4E8E5] text-[#786761] text-xs uppercase tracking-[0.2em] font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#D9B4B0]" />
              <span>Signature Private Atelier • Cheongdam District</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-editorial font-light text-[#302B29] leading-tight">
                Half by the artist.<br />
                <span className="text-[#D9B4B0] font-normal italic">Half by you.</span>
              </h2>
              <p className="text-xl sm:text-2xl font-editorial italic text-[#786761]">
                Learn your look. Make it your own.
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#786761] font-light max-w-3xl leading-relaxed">
              A professional makeup artist creates one side of your look, then guides you as you recreate the other side yourself. This experience is designed to help you understand the techniques, products, colors, and steps behind a Korean-inspired makeup look — so you can recreate it with confidence even after you return home.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onBookNow(tour.id)}
                className="px-6 py-3.5 bg-[#302B29] hover:bg-[#443E3B] text-[#F7F2EC] rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all shadow-md flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#E9D2CD]" />
                <span>Discover the Makeup Studio Journey</span>
              </button>
              <span className="text-sm font-editorial italic text-[#302B29]">
                “Don’t just wear the look. Learn how to create it.”
              </span>
            </div>
          </div>
        )}

        {/* Title & Metadata Banner */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1.5 bg-[#FCFAF7] text-[#302B29] text-xs uppercase tracking-[0.18em] font-medium rounded-full border border-[#EADBCE]">
              {tour.category}
            </span>
            {tour.depthLabel && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F4E8E5] text-[#786761] text-xs uppercase tracking-[0.16em] font-semibold rounded-full">
                <Layers className="w-3.5 h-3.5 text-[#D9B4B0]" />
                <span>{tour.depthLabel}</span>
              </span>
            )}
            {tour.badge && (
              <span className="px-3 py-1 bg-[#D9B4B0] text-[#302B29] text-xs uppercase tracking-[0.16em] font-semibold rounded-full">
                {tour.badge}
              </span>
            )}
            <div className="flex items-center gap-1 text-xs text-[#786761] ml-auto sm:ml-0">
              <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
              <strong className="text-[#302B29]">{tour.rating.toFixed(2)}</strong>
              <span>({tour.reviewsCount} verified guest reviews)</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-light text-[#302B29] leading-tight">
            {tour.title}
          </h1>

          {tour.headline && (
            <p className="text-lg sm:text-xl font-editorial italic text-[#786761]">
              “{tour.headline}”
            </p>
          )}

          {tour.supportingCopy && (
            <p className="text-sm sm:text-base text-[#786761] font-light max-w-3xl leading-relaxed">
              {tour.supportingCopy}
            </p>
          )}
        </div>

        {/* Hero Gallery Section with 5-Stage Story Progression */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-12">
          {/* Main Large Hero Image */}
          <div className="lg:col-span-9 aspect-16/10 rounded-3xl overflow-hidden bg-[#ECE4D9] shadow-xs border border-[#EADBCE] relative group">
            <img
              src={activeImage}
              alt={currentStoryItem.sceneTitle || tour.title}
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80';
              }}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

            {/* Stage Indicator Pill */}
            <div className="absolute top-5 left-5 flex items-center gap-2">
              <span className="px-3.5 py-1.5 bg-[#F7F2EC]/95 backdrop-blur-md text-[#302B29] text-[10px] uppercase tracking-[0.24em] font-semibold rounded-full shadow-xs">
                Scene 0{currentStoryItem.stageNumber} • {currentStoryItem.stageName}
              </span>
            </div>

            {/* Scene Caption Overlay */}
            <div className="absolute bottom-5 left-5 right-5 text-white/95">
              <h3 className="text-base sm:text-lg font-editorial font-light tracking-wide drop-shadow-xs">
                {currentStoryItem.sceneTitle}
              </h3>
              <p className="text-xs text-white/80 font-light line-clamp-1 max-w-2xl">
                {currentStoryItem.sceneDescription}
              </p>
            </div>
          </div>

          {/* 5-Stage Visual Story Thumbnails */}
          <div className="lg:col-span-3 flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-visible">
            {effectiveVisualStory.map((storyItem, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative aspect-16/10 rounded-2xl overflow-hidden border-2 transition-all shrink-0 w-32 lg:w-full group text-left ${
                  activeImageIndex === idx ? 'border-[#D9B4B0] ring-2 ring-[#D9B4B0]/40' : 'border-transparent opacity-75 hover:opacity-100'
                }`}
              >
                <img
                  src={storyItem.imageUrl}
                  alt={storyItem.stageName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-1.5 left-2.5 right-2 text-white text-[10px] font-medium tracking-wide truncate">
                  0{storyItem.stageNumber} • {storyItem.stageName}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Editorial Details */}
          <div className="lg:col-span-8 space-y-12">
            {/* Quick Spec Pills Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-6 bg-[#FCFAF7] border border-[#EADBCE] rounded-2xl shadow-xs">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#786761] block mb-1">
                  Duration
                </span>
                <div className="flex items-center gap-2 text-sm font-medium text-[#302B29]">
                  <Clock className="w-4 h-4 text-[#D9B4B0]" />
                  <span>{tour.duration}</span>
                </div>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#786761] block mb-1">
                  Group Format
                </span>
                <div className="flex items-center gap-2 text-sm font-medium text-[#302B29]">
                  <Users className="w-4 h-4 text-[#D9B4B0]" />
                  <span>{tour.groupType || tour.groupSize}</span>
                </div>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#786761] block mb-1">
                  Host & Tone
                </span>
                <div className="flex items-center gap-2 text-sm font-medium text-[#302B29]">
                  <Sparkles className="w-4 h-4 text-[#D9B4B0]" />
                  <span>Bilingual & Pressure-Free</span>
                </div>
              </div>
            </div>

            {/* Overview / Full Description */}
            <section className="space-y-4">
              <h2 className="text-2xl font-editorial font-light text-[#302B29] tracking-wide border-b border-[#EADBCE] pb-3">
                Experience Overview
              </h2>
              <p className="text-base text-[#786761] leading-relaxed font-light">
                {tour.fullDescription || tour.overview}
              </p>
            </section>

            {/* Centerpiece 4 Pillars Banner for NORI Complete Glow Journey */}
            {tour.id === 'nori-complete-glow-journey' && (
              <section className="space-y-6">
                <div className="border-b border-[#EADBCE] pb-3">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9B4B0] font-semibold block mb-1">
                    Signature Beauty Architecture
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">
                    Three days. One beauty journey, entirely your own.
                  </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { title: 'Understand your skin.', desc: 'Audit routines, prioritize barrier health, and decode ingredients without pressure.' },
                    { title: 'Discover your colors.', desc: 'Certified draping to uncover the seasonal palette that harmonizes with your features.' },
                    { title: 'Learn your look.', desc: '“Half by the artist. Half by you.” Hands-on practice to build real muscle memory.' },
                    { title: 'Take your glow home.', desc: 'Walk away with your complete NORI Glow Book and personalized shopping basket.' },
                  ].map((p, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-5 rounded-2xl bg-[#FCFAF7] border border-[#EADBCE] space-y-2 hover:border-[#D9B4B0] transition-colors"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#F4E8E5] text-[#D9B4B0] text-xs font-semibold flex items-center justify-center">
                        0{pIdx + 1}
                      </span>
                      <h4 className="text-sm font-editorial font-medium text-[#302B29]">
                        {p.title}
                      </h4>
                      <p className="text-xs text-[#786761] font-light leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-2xl bg-[#302B29] text-[#F7F2EC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.24em] text-[#D9B4B0] font-semibold">
                      Core NORI Philosophy
                    </span>
                    <p className="text-lg font-editorial font-light text-[#F7F2EC]">
                      “You don’t leave with more products. You leave knowing what works for you.”
                    </p>
                  </div>
                  <span className="text-xs text-[#EADBCE] font-light max-w-sm leading-relaxed">
                    Designed for guests seeking lasting beauty confidence, not temporary makeovers or shopping haul clutter.
                  </span>
                </div>
              </section>
            )}

            {/* Centerpiece Mirror-Based Hands-On Studio Experience for NORI Makeup Studio Journey */}
            {tour.id === 'nori-makeup-studio-journey' && (
              <section className="space-y-6">
                <div className="border-b border-[#EADBCE] pb-3">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9B4B0] font-semibold block mb-1">
                    The Signature Atelier Concept
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">
                    “Half by the artist. Half by you.”
                  </h2>
                </div>

                {/* Dual Column Mirror Methodology Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left: Half by the Artist */}
                  <div className="p-6 sm:p-7 bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.2em] text-[#786761] font-semibold">
                        Side 1 • Demonstrated
                      </span>
                      <span className="text-xs font-editorial text-[#786761] italic">Watch it. Understand it.</span>
                    </div>
                    <h3 className="text-xl font-editorial font-medium text-[#302B29]">
                      Half by the Artist
                    </h3>
                    <p className="text-xs text-[#786761] leading-relaxed font-light">
                      A professional Seoul makeup artist works on one side of your face, demonstrating the micro-techniques, product formulation, and delicate brush angles behind modern Korean beauty.
                    </p>
                    <ul className="space-y-2 pt-2 border-t border-[#EADBCE] text-xs text-[#302B29]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#D9B4B0] font-bold">✓</span>
                        <span>Skin prep & personalized base cushion formulation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D9B4B0] font-bold">✓</span>
                        <span>Natural brow geometry tailored to your bone structure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D9B4B0] font-bold">✓</span>
                        <span>Tightline eyeliner angling and lash lifting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D9B4B0] font-bold">✓</span>
                        <span>Delicate gradient lip layering with soft velvet blur</span>
                      </li>
                    </ul>
                  </div>

                  {/* Right: Half by You */}
                  <div className="p-6 sm:p-7 bg-[#FCFAF7] border-2 border-[#D9B4B0] rounded-3xl space-y-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.2em] text-[#D9B4B0] font-semibold">
                        Side 2 • Practiced
                      </span>
                      <span className="text-xs font-editorial text-[#D9B4B0] italic">Try it. Make it yours.</span>
                    </div>
                    <h3 className="text-xl font-editorial font-medium text-[#302B29]">
                      Half by You
                    </h3>
                    <p className="text-xs text-[#786761] leading-relaxed font-light">
                      Under continuous, patient 1-on-1 coaching, you pick up the tools and recreate the other half. You build muscle memory, learn pressure control, and ask questions at every step.
                    </p>
                    <ul className="space-y-2 pt-2 border-t border-[#EADBCE] text-xs text-[#302B29]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#D9B4B0] font-bold">✓</span>
                        <span>Hands-on practice applying base without cakeyness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D9B4B0] font-bold">✓</span>
                        <span>Mastering straight or soft-arch brow strokes yourself</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D9B4B0] font-bold">✓</span>
                        <span>Confidence in blush placement for an everyday natural glow</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D9B4B0] font-bold">✓</span>
                        <span>Real muscle memory to recreate the look back home</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Core Message Callout */}
                <div className="p-6 rounded-2xl bg-[#302B29] text-[#F7F2EC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.24em] text-[#D9B4B0] font-semibold">
                      Core Philosophy
                    </span>
                    <p className="text-lg font-editorial font-light text-[#F7F2EC]">
                      “Don’t just wear the look. Learn how to create it.”
                    </p>
                  </div>
                  <span className="text-xs text-[#EADBCE] font-light max-w-sm leading-relaxed">
                    A hands-on masterclass where you walk away with genuine skill and confidence, not just temporary makeup.
                  </span>
                </div>

                {/* Lesson Topics Grid */}
                {tour.lessonTopics && tour.lessonTopics.length > 0 && (
                  <div className="p-6 bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl space-y-4">
                    <h3 className="text-lg font-editorial font-medium text-[#302B29]">
                      What You Will Learn Hands-On
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {tour.lessonTopics.map((topic, idx) => (
                        <div
                          key={idx}
                          className="p-3 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-xs text-[#302B29] font-light flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D9B4B0] shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* Structured Highlights */}
            <section className="space-y-4">
              <h2 className="text-2xl font-editorial font-light text-[#302B29] tracking-wide border-b border-[#EADBCE] pb-3">
                Curated Highlights
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {tour.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-[#FCFAF7] border border-[#EADBCE] rounded-2xl text-xs sm:text-sm text-[#302B29]"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#F4E8E5] text-[#D9B4B0] flex items-center justify-center shrink-0 text-xs font-semibold mt-0.5">
                      ✓
                    </span>
                    <span className="leading-snug font-light">{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 5-Stage Visual Experience Hierarchy: Hero → Activity → Human Interaction → Detail → Result/Takeaway */}
            <section id="visual-storytelling-hierarchy" className="space-y-8 pt-4 border-t border-[#EADBCE]">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EADBCE] pb-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4E8E5] text-[#786761] text-[10px] uppercase tracking-[0.2em] font-semibold">
                    <Camera className="w-3 h-3 text-[#D9B4B0]" />
                    <span>Visual Experience Hierarchy</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">
                    The Experience in Five Scenes
                  </h2>
                  <p className="text-xs sm:text-sm text-[#786761] font-light">
                    Every NORI journey is documented through five distinct visual moments — from welcoming atmosphere to lasting takeaway.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowArtDirectionNotes(!showArtDirectionNotes)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#EADBCE] text-[11px] font-medium text-[#786761] hover:text-[#302B29] bg-[#FCFAF7] transition-all shrink-0"
                >
                  <Eye className="w-3.5 h-3.5 text-[#D9B4B0]" />
                  <span>{showArtDirectionNotes ? 'Hide Scene Details' : 'Show Scene Details'}</span>
                </button>
              </div>

              {/* 5 Scenes Editorial Flow with Varied Compositions */}
              <div className="space-y-8">
                {effectiveVisualStory.map((storyItem, sIdx) => {
                  const isEditing = editingStageIdx === sIdx;
                  const isTakeaway = storyItem.stage === 'takeaway';
                  const isDetail = storyItem.stage === 'detail';
                  const isInteraction = storyItem.stage === 'interaction';
                  const isActivity = storyItem.stage === 'activity';
                  const isHero = storyItem.stage === 'hero';

                  return (
                    <div
                      key={sIdx}
                      id={`visual-stage-${storyItem.stage}`}
                      className="group bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl overflow-hidden hover:border-[#D9B4B0] transition-all duration-300 shadow-xs flex flex-col md:flex-row"
                    >
                      {/* Image Frame with Varied Aspect Ratios for Varied Editorial Composition */}
                      <div className={`relative ${
                        isHero
                          ? 'md:w-3/5 aspect-16/10'
                          : isInteraction
                          ? 'md:w-1/2 aspect-4/3'
                          : isDetail
                          ? 'md:w-2/5 aspect-square'
                          : isActivity
                          ? 'md:w-1/2 aspect-4/3'
                          : 'md:w-1/2 aspect-4/3'
                      } shrink-0 overflow-hidden bg-[#ECE4D9]`}>
                        <img
                          src={storyItem.imageUrl}
                          alt={storyItem.sceneTitle}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                        {/* Stage Number Badge */}
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <span className="px-3 py-1 bg-[#F7F2EC]/95 backdrop-blur-md rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold text-[#302B29] shadow-2xs">
                            0{storyItem.stageNumber} • {storyItem.stageName}
                          </span>
                        </div>

                        {/* Status Chip */}
                        <div className="absolute bottom-3 right-3">
                          <span className="px-2.5 py-1 bg-black/50 backdrop-blur-md rounded-full text-[9px] uppercase tracking-[0.16em] font-medium text-white/90">
                            {customStoryImages[sIdx]
                              ? 'Custom Photo'
                              : storyItem.isPlaceholder
                              ? 'Scene Placeholder'
                              : 'Curated Editorial'}
                          </span>
                        </div>
                      </div>

                      {/* Content & Art Direction */}
                      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-3">
                          <div className="space-y-1">
                            <span className="text-[10px] uppercase tracking-[0.22em] text-[#D9B4B0] font-semibold block">
                              Intended Scene {sIdx + 1}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-editorial font-light text-[#302B29] leading-snug">
                              {storyItem.sceneTitle}
                            </h3>
                          </div>

                          <p className="text-xs sm:text-sm text-[#786761] leading-relaxed font-light">
                            {storyItem.sceneDescription}
                          </p>

                          {/* Art Direction & Camera Angle Note */}
                          {showArtDirectionNotes && storyItem.photoDirection && (
                            <div className="p-3.5 bg-[#F7F2EC] rounded-2xl border border-[#EADBCE]/90 space-y-1">
                              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-[#302B29] font-medium">
                                <Sparkles className="w-3 h-3 text-[#D9B4B0]" />
                                <span>Art Direction & Lighting</span>
                              </div>
                              <p className="text-xs text-[#786761] font-light italic">
                                “{storyItem.photoDirection}”
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Editable Image Placeholder Controls */}
                        <div className="pt-3 border-t border-[#EADBCE]/80 space-y-3">
                          {!isEditing ? (
                            <div className="flex items-center justify-between gap-2">
                              <button
                                type="button"
                                onClick={() => {
                                  setEditingStageIdx(sIdx);
                                  setTempUrlInput(storyItem.imageUrl);
                                }}
                                className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#786761] hover:text-[#302B29] transition-colors"
                              >
                                <Edit3 className="w-3 h-3 text-[#D9B4B0]" />
                                <span>Edit Scene Photo URL</span>
                              </button>
                              {customStoryImages[sIdx] && (
                                <button
                                  type="button"
                                  onClick={() => handleResetImage(sIdx)}
                                  className="inline-flex items-center gap-1 text-[11px] font-medium text-[#9B8983] hover:text-[#302B29] transition-colors"
                                >
                                  <RefreshCw className="w-3 h-3" />
                                  <span>Reset Default</span>
                                </button>
                              )}
                            </div>
                          ) : (
                            <div className="p-3 bg-[#F7F2EC] rounded-2xl border border-[#EADBCE] space-y-2">
                              <span className="text-[10px] uppercase tracking-wider text-[#786761] font-medium block">
                                Enter photo URL for Scene 0{storyItem.stageNumber}:
                              </span>
                              <div className="flex items-center gap-2">
                                <input
                                  type="url"
                                  value={tempUrlInput}
                                  onChange={(e) => setTempUrlInput(e.target.value)}
                                  placeholder="https://images.unsplash.com/..."
                                  className="flex-1 px-3 py-1.5 text-xs bg-white border border-[#EADBCE] rounded-xl text-[#302B29] focus:outline-none focus:border-[#D9B4B0]"
                                />
                                <button
                                  type="button"
                                  onClick={() => handleSaveCustomImage(sIdx)}
                                  className="px-3 py-1.5 bg-[#302B29] text-white text-xs rounded-xl font-medium"
                                >
                                  Apply
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setEditingStageIdx(null)}
                                  className="px-2.5 py-1.5 text-xs text-[#786761]"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Shopping Framework: Must Have / Nice to Have / Skip for Now (if available) */}
            {tour.shoppingFramework && tour.shoppingFramework.items && tour.shoppingFramework.items.length > 0 && (
              <section className="space-y-4">
                <div className="border-b border-[#EADBCE] pb-3 flex items-center justify-between">
                  <h2 className="text-2xl font-editorial font-light text-[#302B29] tracking-wide">
                    {tour.shoppingFramework.title || 'The Curated Shopping Framework'}
                  </h2>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D9B4B0] font-semibold">
                    Anti-Overwhelm
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#786761] font-light leading-relaxed">
                  We categorize every potential product during your shopping exploration so you leave with clarity, not clutter:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  {tour.shoppingFramework.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-[#FCFAF7] border border-[#EADBCE] rounded-2xl space-y-2 hover:border-[#D9B4B0] transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${
                          item.type === 'must' ? 'bg-[#D9B4B0]' : item.type === 'nice' ? 'bg-[#C2A385]' : 'bg-[#9B8983]'
                        }`} />
                        <h3 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#302B29]">
                          {item.label}
                        </h3>
                      </div>
                      <p className="text-xs text-[#786761] font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 3-Day Signature Journey Day-by-Day Experience OR Standard Timeline */}
            {tour.days && tour.days.length > 0 ? (
              <section className="space-y-6">
                <div className="border-b border-[#EADBCE] pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9B4B0] font-semibold block mb-1">
                      Day-by-Day Experience
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">
                      Your 3-Day Journey Flow
                    </h2>
                  </div>
                  <span className="text-xs text-[#786761] font-light">
                    Unhurried • Fully Private • Tailored Daily
                  </span>
                </div>

                {/* Day Tab Selectors */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setSelectedDayTab(0)}
                    className={`px-4 py-2 rounded-full text-xs transition-all ${
                      selectedDayTab === 0
                        ? 'bg-[#302B29] text-[#F7F2EC] font-medium shadow-2xs'
                        : 'bg-[#FCFAF7] border border-[#EADBCE] text-[#786761] hover:text-[#302B29]'
                    }`}
                  >
                    All 3 Days Overview
                  </button>
                  {tour.days.map((day) => (
                    <button
                      key={day.dayNumber}
                      type="button"
                      onClick={() => setSelectedDayTab(day.dayNumber)}
                      className={`px-4 py-2 rounded-full text-xs transition-all ${
                        selectedDayTab === day.dayNumber
                          ? 'bg-[#302B29] text-[#F7F2EC] font-medium shadow-2xs'
                          : 'bg-[#FCFAF7] border border-[#EADBCE] text-[#786761] hover:text-[#302B29]'
                      }`}
                    >
                      Day {day.dayNumber}: {day.dayTitle.replace(/Day \d+ — /, '')}
                    </button>
                  ))}
                </div>

                {/* Day Cards */}
                <div className="space-y-6">
                  {tour.days
                    .filter((d) => selectedDayTab === 0 || selectedDayTab === d.dayNumber)
                    .map((day) => (
                      <div
                        key={day.dayNumber}
                        className="p-6 sm:p-8 bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl space-y-6 shadow-2xs"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#EADBCE] pb-4">
                          <div className="space-y-1">
                            <span className="text-[11px] uppercase tracking-[0.2em] text-[#D9B4B0] font-semibold">
                              Day {day.dayNumber}
                            </span>
                            <h3 className="text-2xl font-editorial font-light text-[#302B29]">
                              {day.dayTitle}
                            </h3>
                            {day.dayTheme && (
                              <p className="text-xs text-[#786761] font-light">
                                {day.dayTheme}
                              </p>
                            )}
                          </div>
                          {(day.supportingLine || day.tagline) && (
                            <p className="text-xs sm:text-sm text-[#786761] italic font-editorial max-w-sm sm:text-right">
                              “{day.supportingLine || day.tagline}”
                            </p>
                          )}
                        </div>

                        {/* Activities list for this day */}
                        <div className="space-y-4">
                          {day.activities.map((act, aIdx) => (
                            <div
                              key={aIdx}
                              className="p-5 rounded-2xl bg-[#F7F2EC] border border-[#EADBCE]/80 space-y-3"
                            >
                              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5">
                                <div className="space-y-0.5">
                                  <div className="flex items-center gap-2">
                                    <span className="px-2.5 py-0.5 rounded-full bg-[#EADBCE] text-[10px] uppercase tracking-wider font-semibold text-[#302B29]">
                                      {act.timeOfDay}
                                    </span>
                                    <h4 className="text-base font-editorial font-medium text-[#302B29]">
                                      {act.title}
                                    </h4>
                                  </div>
                                  {act.subtitle && (
                                    <p className="text-xs text-[#D9B4B0] font-medium pl-1">
                                      {act.subtitle}
                                    </p>
                                  )}
                                </div>
                                <div className="flex items-center gap-3 text-xs text-[#786761]">
                                  {act.duration && (
                                    <span className="flex items-center gap-1">
                                      <Clock className="w-3.5 h-3.5 text-[#D9B4B0]" />
                                      <span>{act.duration}</span>
                                    </span>
                                  )}
                                  {act.location && (
                                    <span className="flex items-center gap-1">
                                      <MapPin className="w-3.5 h-3.5 text-[#D9B4B0]" />
                                      <span>{act.location}</span>
                                    </span>
                                  )}
                                </div>
                              </div>

                              <p className="text-xs sm:text-sm text-[#786761] font-light leading-relaxed">
                                {act.description}
                              </p>

                              {act.highlights && act.highlights.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                  {act.highlights.map((item, hIdx) => (
                                    <span
                                      key={hIdx}
                                      className="px-2.5 py-1 bg-white border border-[#EADBCE] rounded-lg text-[11px] text-[#302B29] font-light"
                                    >
                                      • {item}
                                    </span>
                                  ))}
                                </div>
                              )}

                              {act.partnerPlaceholder && (
                                <div className="text-[11px] text-[#302B29] pt-1 flex items-center gap-1.5">
                                  <Sparkles className="w-3.5 h-3.5 text-[#D9B4B0]" />
                                  <span className="font-medium">Partner:</span>
                                  <span className="text-[#786761]">{act.partnerPlaceholder}</span>
                                </div>
                              )}

                              {act.deliverables && (
                                <div className="text-[11px] text-[#302B29] pt-1 flex items-center gap-1.5">
                                  <FileText className="w-3.5 h-3.5 text-[#D9B4B0]" />
                                  <span className="font-semibold">Deliverable:</span>
                                  <span className="text-[#786761]">{act.deliverables}</span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* End of Day Takeaway / Deliverable */}
                        {(day.deliverables || day.takeaway) && (
                          <div className="p-4 rounded-xl bg-[#F4E8E5]/70 border border-[#D9B4B0]/50 flex items-start gap-3">
                            <Sparkles className="w-4 h-4 text-[#D9B4B0] shrink-0 mt-0.5" />
                            <div className="text-xs">
                              <span className="font-semibold uppercase tracking-wider text-[#302B29] block mb-0.5">
                                Day {day.dayNumber} Deliverable
                              </span>
                              <p className="text-[#786761] font-light leading-relaxed">
                                {day.deliverables || day.takeaway}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </section>
            ) : (
              /* Timeline / Detailed Itinerary */
              <section className="space-y-6">
                <h2 className="text-2xl font-editorial font-light text-[#302B29] tracking-wide border-b border-[#EADBCE] pb-3">
                  Experience Timeline & Key Topics
                </h2>
                <div className="relative pl-6 border-l-2 border-[#D9B4B0]/40 space-y-8 ml-3">
                  {(tour.timeline || tour.itinerary || []).map((item: any, idx: number) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#F7F2EC] border-2 border-[#D9B4B0]" />
                      <div className="space-y-2">
                        <span className="inline-block text-xs font-semibold tracking-wider text-[#D9B4B0] uppercase">
                          {item.time}
                        </span>
                        <h4 className="text-lg font-editorial font-medium text-[#302B29]">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#786761] leading-relaxed font-light">
                          {item.description}
                        </p>
                        {item.topics && item.topics.length > 0 && (
                          <div className="pt-2 flex flex-wrap gap-2">
                            {item.topics.map((topic: string, tIdx: number) => (
                              <span
                                key={tIdx}
                                className="px-3 py-1 bg-[#F4E8E5] text-[#786761] text-[11px] rounded-full font-light"
                              >
                                • {topic}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* YOUR NORI GLOW BOOK Deliverable Section */}
            {tour.glowBookSections && tour.glowBookSections.length > 0 && (
              <section className="space-y-6">
                <div className="border-b border-[#EADBCE] pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9B4B0] font-semibold block mb-1">
                      Your Signature Takeaway
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">
                      Your NORI Glow Book
                    </h2>
                  </div>
                  <span className="text-xs text-[#786761] italic font-editorial">
                    “A beautifully organized personal beauty guide you can take home.”
                  </span>
                </div>

                <div className="p-6 sm:p-8 bg-[#FCFAF7] border-2 border-[#D9B4B0] rounded-3xl space-y-6 shadow-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[#D9B4B0]" />
                      <h3 className="text-xl font-editorial font-medium text-[#302B29]">
                        Four Pillars of Your Personalized Guide
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#786761] font-light leading-relaxed">
                      At the end of your 3-day journey, you don’t leave with scattered notes or shopping bags full of mystery products. You receive your complete NORI Glow Book—a custom, bound digital and physical keepsake documenting every insight discovered across your skin, personal color, makeup, and shopping walks.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {tour.glowBookSections.map((sec, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-[#F7F2EC] border border-[#EADBCE] space-y-3 hover:border-[#D9B4B0] transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#302B29] text-[#F7F2EC] text-xs font-semibold flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <h4 className="text-sm font-semibold text-[#302B29] tracking-wider uppercase">
                            {sec.title}
                          </h4>
                        </div>
                        <ul className="space-y-1.5 text-xs text-[#786761] font-light pl-2">
                          {sec.items.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2">
                              <span className="text-[#D9B4B0] font-bold">•</span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Brand Philosophy Quote Banner */}
                  <div className="p-5 rounded-2xl bg-[#302B29] text-[#F7F2EC] text-center space-y-1">
                    <p className="text-base sm:text-lg font-editorial font-light italic text-[#F7F2EC]">
                      “You don’t leave with more products. You leave knowing what works for you.”
                    </p>
                    <span className="text-[11px] text-[#EADBCE] tracking-wider uppercase">
                      The NORI Guarantee
                    </span>
                  </div>
                </div>
              </section>
            )}

            {/* Vetted Partner Services Ecosystem */}
            {tour.partnerServices && tour.partnerServices.length > 0 && (
              <section className="space-y-6">
                <div className="border-b border-[#EADBCE] pb-3">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9B4B0] font-semibold block mb-1">
                    Trusted Network
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">
                    Curated Partner Ecosystem
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-[#786761] font-light leading-relaxed">
                  NORI coordinates with accredited, vetted beauty and wellness professionals across Seoul to deliver authentic artistry and licensed expertise.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tour.partnerServices.map((partner, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[#FCFAF7] border border-[#EADBCE] space-y-2"
                    >
                      <span className="text-[10px] uppercase tracking-[0.16em] text-[#D9B4B0] font-semibold block">
                        {partner.role}
                      </span>
                      <h4 className="text-base font-editorial font-medium text-[#302B29]">
                        {partner.type}
                      </h4>
                      <p className="text-xs text-[#786761] font-light leading-relaxed">
                        {partner.notes}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Accommodation & Meeting Clarity */}
            {tour.accommodationNote && (
              <section className="p-6 bg-[#FCFAF7] border border-[#D9B4B0] rounded-3xl space-y-3">
                <div className="flex items-center gap-2 text-[#302B29]">
                  <Info className="w-5 h-5 text-[#D9B4B0]" />
                  <h3 className="text-base font-editorial font-medium">
                    Accommodation & Meeting Locations
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#786761] font-light leading-relaxed">
                  {tour.accommodationNote}
                </p>
                <div className="text-xs text-[#786761] font-light space-y-1 pt-1 border-t border-[#EADBCE]/80">
                  <p>• <strong>Location Flexibility:</strong> You can stay at any hotel, boutique guesthouse, or serviced apartment in Seoul.</p>
                  <p>• <strong>Meeting Points:</strong> Your private NORI curator meets you each morning at scheduled partner ateliers or designated central landmarks.</p>
                </div>
              </section>
            )}

            {/* Optional Curated Add-ons */}
            {tour.optionalAddOns && tour.optionalAddOns.length > 0 && (
              <section className="space-y-6">
                <div className="border-b border-[#EADBCE] pb-3">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9B4B0] font-semibold block mb-1">
                    Bespoke Customization
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">
                    Optional Add-Ons
                  </h2>
                </div>

                <div className="space-y-3">
                  {tour.optionalAddOns.map((addon, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[#FCFAF7] border border-[#EADBCE] flex items-start gap-3"
                    >
                      <Sparkles className="w-4 h-4 text-[#D9B4B0] shrink-0 mt-1" />
                      <div className="space-y-1">
                        <h4 className="text-sm font-editorial font-medium text-[#302B29]">
                          {addon.split('(')[0].trim()}
                        </h4>
                        {addon.includes('(') && (
                          <p className="text-xs text-[#786761] font-light leading-relaxed">
                            {addon.substring(addon.indexOf('(') + 1).replace(/\)$/, '')}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Lesson-Connected Curated Shopping Section for NORI Makeup Studio Journey */}
            {tour.id === 'nori-makeup-studio-journey' && tour.shoppingCategories && tour.shoppingCategories.length > 0 && (
              <section className="space-y-4">
                <div className="border-b border-[#EADBCE] pb-3 flex items-center justify-between">
                  <h2 className="text-2xl font-editorial font-light text-[#302B29] tracking-wide">
                    Lesson-Connected Curated Shopping
                  </h2>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D9B4B0] font-semibold">
                    Zero-Commission
                  </span>
                </div>
                <div className="p-6 bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl space-y-4">
                  <p className="text-xs sm:text-sm text-[#302B29] font-medium leading-relaxed">
                    “You learned this base technique — here are products that can help you recreate it at home.”
                  </p>
                  <p className="text-xs text-[#786761] font-light leading-relaxed">
                    Instead of random souvenir buying or endless hauls, your shopping walk connects directly to the lesson you just completed. We guide you to exact shade matches, reliable formulation equivalents, and formulas that suit your specific skin type.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 pt-2">
                    {tour.shoppingCategories.map((cat, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-[#F7F2EC] border border-[#EADBCE] rounded-xl text-xs text-[#302B29] flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D9B4B0] shrink-0" />
                        <span className="font-light">{cat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Deliverables Takeaways Section */}
            {tour.deliverables && (
              <section className="space-y-4">
                <div className="p-6 sm:p-8 bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl space-y-4">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#D9B4B0]" />
                    <h2 className="text-xl font-editorial font-light text-[#302B29]">
                      Takeaway: {tour.deliverables.title}
                    </h2>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {tour.deliverables.items.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#786761] font-light">
                        <span className="text-[#D9B4B0] font-bold">✓</span>
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* Inclusions & Transparency */}
            <section className="space-y-4">
              <h2 className="text-2xl font-editorial font-light text-[#302B29] tracking-wide border-b border-[#EADBCE] pb-3">
                Inclusions & Transparency
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Included */}
                <div className="p-6 bg-[#FCFAF7] border border-[#EADBCE] rounded-2xl space-y-3">
                  <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#302B29] flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>What's Included</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs text-[#786761] font-light">
                    {(tour.included || []).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Excluded / Not Included */}
                <div className="p-6 bg-[#FCFAF7] border border-[#EADBCE] rounded-2xl space-y-3">
                  <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#786761] flex items-center gap-2">
                    <XIcon className="w-4 h-4 text-[#9B8983]" />
                    <span>What's Excluded</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs text-[#786761] font-light">
                    {(tour.excluded || tour.notIncluded || []).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#9B8983] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Important Notes & Brand Integrity */}
            <section className="space-y-4">
              <h2 className="text-2xl font-editorial font-light text-[#302B29] tracking-wide border-b border-[#EADBCE] pb-3">
                Important Notes & Guest Preparation
              </h2>
              <div className="p-6 bg-[#FCFAF7] border border-[#EADBCE] rounded-2xl space-y-4 text-xs sm:text-sm text-[#786761]">
                <div className="flex items-start gap-3">
                  <HeartHandshake className="w-5 h-5 text-[#D9B4B0] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#302B29] block mb-1">
                      Zero-Commission & Independent Guidance Guarantee
                    </strong>
                    <p className="font-light leading-relaxed">
                      NORI hosts receive zero brand kickbacks or store commissions. Our sole incentive is finding what genuinely benefits your skin and fits your budget.
                    </p>
                  </div>
                </div>

                {tour.importantNotes && tour.importantNotes.length > 0 ? (
                  <div className="pt-3 border-t border-[#EADBCE] space-y-2">
                    <span className="font-medium text-[#302B29] block">
                      Preparation Tips & Disclaimers:
                    </span>
                    <ul className="list-disc pl-5 space-y-1.5 font-light">
                      {tour.importantNotes.map((note, idx) => (
                        <li key={idx}>{note}</li>
                      ))}
                    </ul>
                  </div>
                ) : tour.importantInfo && (
                  <div className="pt-3 border-t border-[#EADBCE] space-y-2">
                    <span className="font-medium text-[#302B29] block">
                      Preparation Advice:
                    </span>
                    <ul className="list-disc pl-5 space-y-1 font-light">
                      {tour.importantInfo.map((info, idx) => (
                        <li key={idx}>{info}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>

            {/* Makeup Experience Comparison Module for Makeup Category Tours */}
            {tour.category === 'Makeup' && (
              <section className="space-y-6 pt-4">
                <div className="border-b border-[#EADBCE] pb-3">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9B4B0] font-semibold block mb-1">
                    Experience Comparison
                  </span>
                  <h2 className="text-2xl font-editorial font-light text-[#302B29]">
                    Comparing NORI’s Makeup Experiences
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* NORI Color & Makeup Play */}
                  <div
                    className={`p-6 rounded-3xl border transition-all space-y-4 ${
                      tour.id === 'personal-color-kbeauty-styling'
                        ? 'bg-[#FCFAF7] border-2 border-[#302B29] shadow-sm'
                        : 'bg-[#FCFAF7]/60 border-[#EADBCE]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#786761]">
                        Boutique Exploration • 3.5 Hours
                      </span>
                      <span className="text-xs font-editorial font-medium text-[#302B29]">From $220 USD</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-editorial font-medium text-[#302B29]">
                        NORI Color & Makeup Play
                      </h3>
                      <p className="text-xs text-[#D9B4B0] font-medium tracking-wide mt-1">
                        Discover your colors. Explore K-beauty. Shop what suits you.
                      </p>
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#786761] font-light">
                      <li>• Certified KS 140+ personal color seasonal fabric drape test</li>
                      <li>• Cosmetics pouch audit: what harmonizes vs. clashes with skin</li>
                      <li>• Guided boutique shopping walk to match cushion and tint codes</li>
                      <li>• Physical seasonal fabric swatch booklet + digital guide</li>
                    </ul>
                    {tour.id !== 'personal-color-kbeauty-styling' && onSelectTour && allTours && (
                      <button
                        type="button"
                        onClick={() => {
                          const target = allTours.find(t => t.id === 'personal-color-kbeauty-styling');
                          if (target) onSelectTour(target);
                        }}
                        className="pt-2 text-xs font-medium text-[#302B29] hover:text-[#D9B4B0] flex items-center gap-1.5 transition-colors"
                      >
                        <span>View Color & Makeup Play</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* NORI Makeup Studio Journey */}
                  <div
                    className={`p-6 rounded-3xl border transition-all space-y-4 ${
                      tour.id === 'nori-makeup-studio-journey'
                        ? 'bg-[#FCFAF7] border-2 border-[#D9B4B0] shadow-sm ring-1 ring-[#D9B4B0]'
                        : 'bg-[#FCFAF7]/60 border-[#EADBCE]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#D9B4B0]">
                        <Sparkles className="w-3 h-3 text-[#D9B4B0]" />
                        <span>Signature Atelier • 5–6 Hours</span>
                      </span>
                      <span className="text-xs font-editorial font-medium text-[#302B29]">Price coming soon</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-editorial font-medium text-[#302B29]">
                        NORI Makeup Studio Journey
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-medium text-[#302B29] bg-[#F4E8E5] px-2.5 py-0.5 rounded-full">
                          Half by the artist. Half by you.
                        </span>
                      </div>
                      <p className="text-xs text-[#D9B4B0] font-medium tracking-wide mt-1.5">
                        Discover your colors. Learn from a professional. Practice the look yourself. Shop to recreate it at home.
                      </p>
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#786761] font-light">
                      <li>• Partner personal color consultation establishing your foundation</li>
                      <li>• Centerpiece lesson: "Half by the artist. Half by you." hands-on practice</li>
                      <li>• Lesson-connected shopping: buy only what you need to recreate the look</li>
                      <li>• Takeaway deliverable: "Your NORI Makeup Guide"</li>
                    </ul>
                    {tour.id !== 'nori-makeup-studio-journey' && onSelectTour && allTours && (
                      <button
                        type="button"
                        onClick={() => {
                          const target = allTours.find(t => t.id === 'nori-makeup-studio-journey');
                          if (target) onSelectTour(target);
                        }}
                        className="pt-2 text-xs font-medium text-[#302B29] hover:text-[#D9B4B0] flex items-center gap-1.5 transition-colors"
                      >
                        <span>View Makeup Studio Journey</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Sticky Booking & Price Breakdown */}
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            <div className="p-6 sm:p-8 bg-[#FCFAF7] border border-[#EADBCE] rounded-3xl shadow-lg space-y-6">
              {/* Pricing breakdown */}
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#786761] block">
                  Experience Rate
                </span>
                {tour.priceDisplay ? (
                  <div className="mt-1 space-y-1">
                    <span className="text-2xl sm:text-3xl font-editorial font-medium text-[#302B29]">
                      {tour.priceDisplay}
                    </span>
                    <p className="text-xs text-[#786761] font-light">
                      {tour.pricingNote || 'Private atelier reservation'}
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex items-baseline gap-1.5 mt-1">
                      <span className="text-3xl sm:text-4xl font-editorial font-medium text-[#302B29]">
                        ${currentTierUsd}
                      </span>
                      <span className="text-xs text-[#786761]">
                        {tour.currency} {currentTier ? `(${currentTier.guests} guest${currentTier.guests > 1 ? 's' : ''})` : '/ starting'}
                      </span>
                    </div>

                    {currentTier && (
                      <p className="text-xs text-[#786761] mt-1 font-light">
                        Approx. KRW {currentTier.krw.toLocaleString()} total
                      </p>
                    )}
                  </>
                )}

                {/* Price by Guest Count Selector (only when not coming soon) */}
                {!tour.priceDisplay && tour.priceByGuestCount && tour.priceByGuestCount.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-[#EADBCE] space-y-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#786761] block font-medium">
                      Select Guest Count:
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      {tour.priceByGuestCount.map((tier, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedGuestTier(idx)}
                          className={`py-2 px-2 rounded-xl text-center border transition-all ${
                            selectedGuestTier === idx
                              ? 'bg-[#302B29] text-[#F7F2EC] border-[#302B29]'
                              : 'bg-[#F7F2EC] text-[#786761] border-[#EADBCE] hover:border-[#D9B4B0]'
                          }`}
                        >
                          <div className="text-xs font-semibold">
                            {tier.guests} {tier.guests === 1 ? 'Guest' : 'Guests'}
                          </div>
                          <div className="text-[10px] opacity-80">
                            ${tier.usd ?? Math.round(tier.krw / 1300)}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {!tour.priceDisplay && (
                  <p className="text-[10px] text-[#9B8983] mt-2 italic">
                    {tour.pricingNote || 'Prices are editable placeholders for itinerary planning.'}
                  </p>
                )}
              </div>

              <div className="border-t border-[#EADBCE] pt-4 space-y-3 text-xs text-[#786761]">
                <div className="flex items-center justify-between">
                  <span>Duration</span>
                  <span className="font-medium text-[#302B29]">{tour.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Group Type</span>
                  <span className="font-medium text-[#302B29]">{tour.groupType || tour.groupSize}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Booking Terms</span>
                  <span className="text-emerald-700 font-medium">Free cancellation up to 48h</span>
                </div>
              </div>

              {/* Book Button */}
              <button
                id="tour-detail-book-now-btn"
                onClick={() => onBookNow(tour.id)}
                className="w-full py-4 bg-[#302B29] hover:bg-[#443E3B] text-[#F7F2EC] rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#E9D2CD] group-hover:rotate-12 transition-transform" />
                <span>
                  {tour.ctaText || (tour.priceDisplay ? 'Discover the Makeup Studio Journey' : 'Reserve This Experience')}
                </span>
              </button>

              <div className="space-y-2 text-center pt-2">
                <p className="text-[11px] text-[#786761]">
                  No upfront payment required today.
                </p>
                <div className="flex items-center justify-center gap-2 text-[11px] text-[#786761]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D9B4B0]" />
                  <span>Licensed Inbound Operator #2024-082</span>
                </div>
              </div>
            </div>

            {/* Honest Concierge Box */}
            <div className="p-5 bg-[#FCFAF7] border border-[#EADBCE] rounded-2xl text-xs space-y-2">
              <p className="font-semibold uppercase tracking-wider text-[#302B29]">
                Questions on skin sensitivities?
              </p>
              <p className="text-[#786761] leading-relaxed font-light">
                Our bilingual curators can advise whether this experience suits your current skin condition and products.
              </p>
              <button
                onClick={() => onBookNow(tour.id)}
                className="text-[#D9B4B0] hover:text-[#786761] font-medium inline-flex items-center gap-1 pt-1"
              >
                <span>Ask Curators Directly</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
