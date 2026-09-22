import React, { useState } from 'react';
import {
  X,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  Clock,
  Heart,
  Droplets,
  Palette,
  Layers,
  Sparkle,
  ShoppingBag,
  Compass,
  CheckCircle2
} from 'lucide-react';

interface BeautyJourneyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (tab: string) => void;
  onSelectTour?: (tourId: string) => void;
  onBookTour?: (tourId: string) => void;
}

type MainInterest = 'skincare' | 'makeup' | 'both' | null;
type AlsoSkincareOption = 'yes' | 'no' | 'maybe' | null;

export const BeautyJourneyModal: React.FC<BeautyJourneyModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onSelectTour,
  onBookTour,
}) => {
  // Step navigation
  const [step, setStep] = useState<number>(1);
  const [mainInterest, setMainInterest] = useState<MainInterest>(null);

  // Skincare selections
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [selectedSkincareInterests, setSelectedSkincareInterests] = useState<string[]>([]);

  // Makeup selections
  const [selectedMakeupInterests, setSelectedMakeupInterests] = useState<string[]>([]);
  const [alsoSkincare, setAlsoSkincare] = useState<AlsoSkincareOption>(null);

  // Both selections
  const [bothSkincareItems, setBothSkincareItems] = useState<string[]>([]);
  const [bothMakeupItems, setBothMakeupItems] = useState<string[]>([]);

  // Duration
  const [duration, setDuration] = useState<string>('2–3 hours');

  // Contact / Guest details for submission
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestWhatsapp, setGuestWhatsapp] = useState('');
  const [travelDates, setTravelDates] = useState('');
  const [specialNote, setSpecialNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  if (!isOpen) return null;

  // The 7 main skincare concerns
  const SKINCARE_CONCERNS = [
    { id: 'dryness', label: 'Dryness & Dehydration', desc: 'Tightness, flaky areas, lackluster finish' },
    { id: 'acne', label: 'Acne & Breakouts', desc: 'Occasional spots, congestion, calming care' },
    { id: 'sensitivity', label: 'Sensitivity & Redness', desc: 'Reactive skin, compromised barrier' },
    { id: 'uneven-tone', label: 'Uneven Tone & Pigmentation', desc: 'Sun spots, post-blemish marks, tone clarity' },
    { id: 'fine-lines', label: 'Fine Lines & Firmness', desc: 'Elasticity, peptide support, bounce' },
    { id: 'pores', label: 'Pores & Texture', desc: 'Texture refinement, gentle sebum harmony' },
    { id: 'dullness', label: 'Dullness & Glow', desc: 'Fatigued skin looking for natural radiance' },
  ];

  // Skincare interest options
  const SKINCARE_OPTIONS = [
    'Reviewing my current skincare routine',
    'Learning about ingredients',
    'Shopping for skincare products',
    'Visiting Olive Young',
    'Visiting Korean pharmacies',
    'Facial / skincare treatments',
    'Exploring clinics',
    'Not sure — recommend for me',
  ];

  // Makeup interest options
  const MAKEUP_OPTIONS = [
    'Korean everyday makeup',
    'Base makeup',
    'Eye makeup',
    'Lip products',
    'Personal color',
    'Makeup lesson',
    'Makeup shopping',
    'Full makeover',
  ];

  // Both: Skincare breakdown
  const BOTH_SKINCARE_OPTIONS = [
    'Routine review',
    'Ingredients',
    'Product shopping',
    'Treatments',
    'Pharmacy beauty products',
  ];

  // Both: Makeup breakdown
  const BOTH_MAKEUP_OPTIONS = [
    'Personal color',
    'Makeup lesson',
    'Makeup shopping',
    'Korean makeup look',
    'Base / eye / lip products',
  ];

  const DURATION_OPTIONS = [
    {
      id: '2-3-hours',
      label: '2–3 hours',
      tag: 'Most Popular Entry',
      note: 'e.g. 1 hr personalized consultation + 1 hr Olive Young & Pharmacy shopping'
    },
    {
      id: 'half-day',
      label: 'Half day (4–5 hours)',
      tag: 'Deep Discovery',
      note: 'Relaxed consultation, in-depth shopping navigation, and soothing head or facial treatment'
    },
    {
      id: 'full-day',
      label: 'Full day (7–8 hours)',
      tag: 'Complete Day of Glow',
      note: 'Personal color analysis, dermo-facial ritual, and customized atelier beauty shopping'
    },
    {
      id: '2-days',
      label: '2 days',
      tag: 'Weekend Immersion',
      note: 'Day 1 skincare & clinical discovery, Day 2 personal color & K-makeup transformation'
    },
    {
      id: '3-days',
      label: '3 days',
      tag: 'Signature NORI Beauty Journey',
      note: 'The ultimate unhurried Seoul beauty immersion: skin barrier rejuvenation, makeup mastery, and wellness'
    },
  ];

  const handleToggleConcern = (label: string) => {
    setSelectedConcerns((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
  };

  const handleToggleSkincareInterest = (label: string) => {
    setSelectedSkincareInterests((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
  };

  const handleToggleMakeupInterest = (label: string) => {
    setSelectedMakeupInterests((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
  };

  const handleToggleBothSkincare = (label: string) => {
    setBothSkincareItems((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
  };

  const handleToggleBothMakeup = (label: string) => {
    setBothMakeupItems((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = 'NORI-' + Math.floor(10000 + Math.random() * 90000);
    setRefCode(randomCode);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setStep(1);
    setMainInterest(null);
    setSelectedConcerns([]);
    setSelectedSkincareInterests([]);
    setSelectedMakeupInterests([]);
    setAlsoSkincare(null);
    setBothSkincareItems([]);
    setBothMakeupItems([]);
    setDuration('2–3 hours');
    setIsSubmitted(false);
    onClose();
  };

  const getRecommendedExperience = () => {
    // 1. Signature Complete 3-Day Journey: If user selected 3 days and is interested in both (or chooses 3 days)
    if (
      duration === '3 days' &&
      (mainInterest === 'both' ||
        (bothSkincareItems.length > 0 && bothMakeupItems.length > 0) ||
        alsoSkincare === 'yes' ||
        alsoSkincare === 'maybe' ||
        mainInterest === 'skincare' ||
        mainInterest === 'makeup')
    ) {
      return {
        id: 'nori-complete-glow-journey',
        title: 'NORI Complete Glow Journey',
        depthLabel: 'Your Signature NORI Journey',
        duration: '3 Days',
        price: 'Price on Request',
        krw: 'Private Signature Beauty Journey',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        headline: 'Three days. One beauty journey, entirely your own.',
        tagline: 'Understand your skin. Discover your colors. Learn your look. Take your glow home.',
        matchCriteria: 'Complete 3-Day Skincare, Personal Color, Makeup Atelier & Wellness Journey',
        matchReason: 'Matched for your desire for the most comprehensive, unhurried Seoul beauty experience: 3 guided days covering skincare consultation & barrier education, certified personal color analysis, hands-on professional makeup masterclass ("Half by the artist. Half by you."), curated boutique shopping, wellness, and your personal NORI Glow Book.',
        deliverables: 'Your NORI Glow Book (Digital Guide) + Physical Color Swatch Card + Face Chart & Step-by-Step Blueprint',
        ctaText: 'View My Journey'
      };
    }

    // If user chose Skincare (or Both with skincare focus)
    if (mainInterest === 'skincare' || (mainInterest === 'both' && bothSkincareItems.length > 0)) {
      // Full day / spa + facial + shopping combo -> NORI Glow Day
      if (
        duration === 'Full day (7–8 hours)' ||
        duration === '2 days' ||
        duration === '3 days' ||
        selectedSkincareInterests.includes('Facial / skincare treatments') ||
        selectedSkincareInterests.includes('Exploring clinics') ||
        bothSkincareItems.includes('Treatments')
      ) {
        return {
          id: 'nori-glow-day',
          title: 'NORI GLOW DAY',
          depthLabel: 'Level 3 • Full-Day Beauty + Wellness',
          duration: '6–7 Hours',
          price: '$320 USD',
          krw: 'KRW 420,000',
          image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
          matchCriteria: 'Full day / spa + facial + shopping combo',
          matchReason: 'Matched for your desire for an unhurried, complete Seoul day combining in-depth skin consultation, aesthetic facial ritual coordination, curated shopping, and wellness tea pairing.',
          deliverables: 'Your NORI Glow Plan + Aesthetic treatment coordination + Curated flagship shopping guide',
        };
      }

      // Deep dive / ingredients / multi-district shopping -> NORI Skin Discovery
      if (
        duration === 'Half day (4–5 hours)' ||
        selectedSkincareInterests.includes('Learning about ingredients') ||
        selectedSkincareInterests.includes('Visiting Korean pharmacies') ||
        bothSkincareItems.includes('Ingredients') ||
        bothSkincareItems.includes('Pharmacy beauty products')
      ) {
        return {
          id: 'nori-skin-discovery',
          title: 'NORI SKIN DISCOVERY',
          depthLabel: 'Level 2 • Deeper Understanding',
          duration: '3.5 Hours',
          price: '$190 USD',
          krw: 'KRW 250,000',
          image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
          matchCriteria: 'Deep dive / ingredients / multi-district shopping',
          matchReason: 'Matched for your focus on ingredient education, decoding K-beauty product labels, and multi-district curation across Olive Young and specialized flagship ateliers.',
          deliverables: 'Your NORI Beauty Map + Ingredient cheat sheet + Priority shopping framework',
        };
      }

      // Quick / limited time / shopping focus -> NORI Skin Edit
      return {
        id: 'nori-skin-edit',
        title: 'NORI SKIN EDIT',
        depthLabel: 'Level 1 • Quick Personalized Guidance',
        duration: '2 Hours',
        price: '$125 USD',
        krw: 'KRW 170,000',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
        matchCriteria: 'Quick / limited time / shopping focus',
        matchReason: 'Matched for a focused, efficient consultation: a 45-min cafe routine audit followed by targeted zero-pressure shopping navigation to buy only what your skin needs.',
        deliverables: 'Your NORI Skin Edit 1-page summary + Curated shopping basket checklist',
      };
    }

    // If user chose Makeup (or Both with makeup focus when skincare items are empty or equal)
    if (mainInterest === 'makeup' || (mainInterest === 'both' && bothMakeupItems.length > 0 && bothSkincareItems.length === 0)) {
      // Hands-on lesson / professional artist / longer duration -> NORI Makeup Studio Journey
      if (
        selectedMakeupInterests.includes('Makeup lesson') ||
        selectedMakeupInterests.includes('Base makeup') ||
        selectedMakeupInterests.includes('Korean everyday makeup') ||
        bothMakeupItems.includes('Makeup lesson') ||
        bothMakeupItems.includes('Korean makeup look') ||
        duration === 'Half day (4–5 hours)' ||
        duration === 'Full day (7–8 hours)' ||
        duration === '2 days' ||
        duration === '3 days'
      ) {
        return {
          id: 'nori-makeup-studio-journey',
          title: 'NORI MAKEUP STUDIO JOURNEY',
          depthLabel: 'Signature Atelier • Half by the Artist. Half by You.',
          duration: '5–6 Hours',
          price: 'Price coming soon',
          krw: 'Private Studio Session',
          image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
          matchCriteria: 'Professional Hands-on Makeup Lesson & Practice',
          matchReason: 'Matched for your desire to learn professional Korean makeup techniques directly: "Half by the artist. Half by you." Master skin finish, brows, eyeliner, and gradient lips with 1-on-1 coaching and lesson-connected shopping.',
          deliverables: 'Your NORI Makeup Guide + Step-by-step application blueprint + Artist product references',
        };
      }

      // Focused Personal Color & Cosmetics Pouch Play -> NORI Color & Makeup Play
      return {
        id: 'personal-color-kbeauty-styling',
        title: 'NORI COLOR & MAKEUP PLAY',
        depthLabel: 'Boutique Color Play • 3.5 Hours',
        duration: '3.5 Hours',
        price: '$220 USD',
        krw: 'KRW 290,000',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
        matchCriteria: 'Personal Color Analysis & Boutique Shopping Walk',
        matchReason: 'Matched for certified 140+ seasonal fabric draping, personal cosmetics pouch auditing, and shade-matched K-beauty boutique shopping.',
        deliverables: 'Physical seasonal fabric swatch booklet + Digital palette + Cosmetics pouch audit',
      };
    }

    // Skincare focus (or Both with skincare priority) fallback
    if (
      duration === 'Full day (7–8 hours)' ||
      duration === '2 days' ||
      duration === '3 days' ||
      selectedSkincareInterests.includes('Facial / skincare treatments') ||
      selectedSkincareInterests.includes('Exploring clinics') ||
      bothSkincareItems.includes('Treatments')
    ) {
      return {
        id: 'nori-glow-day',
        title: 'NORI GLOW DAY',
        depthLabel: 'Level 3 • Full-Day Beauty + Wellness',
        duration: '6–7 Hours',
        price: '$320 USD',
        krw: 'KRW 420,000',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        matchCriteria: 'Full day / spa + facial + shopping combo',
        matchReason: 'Matched for your desire for an unhurried, complete Seoul day combining in-depth skin consultation, aesthetic facial ritual coordination, curated shopping, and wellness tea pairing.',
        deliverables: 'Your NORI Glow Plan + Aesthetic treatment coordination + Curated flagship shopping guide',
      };
    }

    // Default Makeup fallback if nothing else matched
    return {
      id: 'nori-makeup-studio-journey',
      title: 'NORI MAKEUP STUDIO JOURNEY',
      depthLabel: 'Signature Atelier • Half by the Artist. Half by You.',
      duration: '5–6 Hours',
      price: 'Price coming soon',
      krw: 'Private Studio Session',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
      matchCriteria: 'Professional Hands-on Makeup Lesson & Practice',
      matchReason: 'Matched for your desire to learn professional Korean makeup techniques directly: "Half by the artist. Half by you."',
      deliverables: 'Your NORI Makeup Guide + Step-by-step application blueprint + Artist product references',
    };
  };

  // Determine total steps for progress bar
  const totalSteps = mainInterest === 'makeup' && alsoSkincare === 'yes' ? 5 : 5;

  return (
    <div
      id="beauty-journey-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#302B29]/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
    >
      <div
        id="beauty-journey-modal-card"
        className="relative w-full max-w-2xl bg-[#F7F2EC] rounded-3xl shadow-2xl border border-[#EADBCE] overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-[#EADBCE] bg-[#FCFAF7] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#D9B4B0]" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#786761] font-medium">
                NORI • 놀이 • Build Your Beauty Journey
              </p>
              <h3 className="font-editorial text-lg text-[#302B29] font-light">
                Discover your beauty path
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#F7F2EC] hover:bg-[#EADBCE] text-[#786761] hover:text-[#302B29] flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Subtle Progress Bar */}
        {!isSubmitted && (
          <div className="w-full bg-[#EADBCE]/50 h-1">
            <div
              className="bg-[#D9B4B0] h-1 transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* SUCCESS STATE */}
          {isSubmitted ? (() => {
            const rec = getRecommendedExperience();
            return (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#F4E8E5] border border-[#D9B4B0] text-[#302B29] flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8 text-[#D9B4B0]" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.24em] text-[#D9B4B0] font-semibold">
                  Your Journey Request Received
                </span>
                <h3 className="text-3xl font-editorial font-light text-[#302B29]">
                  Thank you, {guestName || 'Friend'}.
                </h3>
                <p className="text-sm text-[#786761] max-w-md mx-auto font-light leading-relaxed">
                  We've received your personalized beauty journey request. Lucy (Seoha) and our bilingual team are reviewing your travel dates and skin focus.
                </p>
              </div>

              {/* Highlight of Matched Experience */}
              <div className="p-5 rounded-2xl bg-[#FCFAF7] border border-[#D9B4B0] max-w-md mx-auto text-left space-y-3 shadow-xs">
                <div className="flex items-center justify-between text-xs border-b border-[#EADBCE] pb-2">
                  <span className="text-[#786761] uppercase tracking-wider text-[10px] font-semibold">
                    Matched Recommendation:
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#302B29]">{refCode}</span>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src={rec.image}
                    alt={rec.title}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#EADBCE]"
                  />
                  <div className="space-y-1">
                    <h4 className="font-editorial text-base font-medium text-[#302B29]">
                      {rec.title}
                    </h4>
                    <span className="text-[11px] text-[#786761] block">{rec.depthLabel}</span>
                    <span className="text-xs font-semibold text-[#302B29]">{rec.price}</span>
                  </div>
                </div>
                <p className="text-[11px] text-[#786761] font-light leading-snug">
                  {rec.matchReason}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                {onSelectTour && (
                  <button
                    onClick={() => {
                      handleReset();
                      onSelectTour(rec.id);
                    }}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#302B29] text-[#F7F2EC] rounded-full text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#443E3B] transition-all"
                  >
                    View Tour Details
                  </button>
                )}
                {onBookTour && (
                  <button
                    onClick={() => {
                      handleReset();
                      onBookTour(rec.id);
                    }}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#D9B4B0] text-[#302B29] rounded-full text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#cfa5a1] transition-all"
                  >
                    Book Experience Now
                  </button>
                )}
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3.5 border border-[#EADBCE] hover:border-[#302B29] text-[#786761] hover:text-[#302B29] rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all"
                >
                  Close
                </button>
              </div>
            </div>
            );
          })() : (
            <>
              {/* STEP 1: What are you most interested in? (3 Large Visual Cards) */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <span className="text-[11px] uppercase tracking-[0.24em] text-[#D9B4B0] font-semibold">
                      Step 1 of {totalSteps}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">
                      What are you most interested in?
                    </h2>
                    <p className="text-xs sm:text-sm text-[#786761] font-light max-w-md mx-auto">
                      Choose your main focus. Every NORI experience is customized to your personal pace and preferences.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    {/* Skincare Option */}
                    <button
                      type="button"
                      onClick={() => setMainInterest('skincare')}
                      className={`p-6 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between group ${
                        mainInterest === 'skincare'
                          ? 'bg-[#FCFAF7] border-[#D9B4B0] shadow-md ring-1 ring-[#D9B4B0]'
                          : 'bg-[#FCFAF7]/60 border-[#EADBCE] hover:border-[#D9B4B0] hover:bg-[#FCFAF7]'
                      }`}
                    >
                      <div className="space-y-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                            mainInterest === 'skincare'
                              ? 'bg-[#F4E8E5] text-[#302B29]'
                              : 'bg-[#F7F2EC] text-[#786761] group-hover:text-[#302B29]'
                          }`}
                        >
                          <Droplets className="w-6 h-6 text-[#D9B4B0]" />
                        </div>
                        <div>
                          <h4 className="font-editorial text-xl font-normal text-[#302B29] mb-1">
                            Skincare
                          </h4>
                          <p className="text-xs text-[#786761] leading-relaxed font-light">
                            Understand your skin, routine, ingredients, and products.
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-[#EADBCE]/60 flex items-center justify-between text-[11px] text-[#786761]">
                        <span>Skin Barrier & Routine</span>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            mainInterest === 'skincare'
                              ? 'border-[#302B29] bg-[#302B29] text-white'
                              : 'border-[#EADBCE]'
                          }`}
                        >
                          {mainInterest === 'skincare' && <Check className="w-2.5 h-2.5 text-white" />}
                        </div>
                      </div>
                    </button>

                    {/* Makeup Option */}
                    <button
                      type="button"
                      onClick={() => setMainInterest('makeup')}
                      className={`p-6 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between group ${
                        mainInterest === 'makeup'
                          ? 'bg-[#FCFAF7] border-[#D9B4B0] shadow-md ring-1 ring-[#D9B4B0]'
                          : 'bg-[#FCFAF7]/60 border-[#EADBCE] hover:border-[#D9B4B0] hover:bg-[#FCFAF7]'
                      }`}
                    >
                      <div className="space-y-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                            mainInterest === 'makeup'
                              ? 'bg-[#F4E8E5] text-[#302B29]'
                              : 'bg-[#F7F2EC] text-[#786761] group-hover:text-[#302B29]'
                          }`}
                        >
                          <Palette className="w-6 h-6 text-[#D9B4B0]" />
                        </div>
                        <div>
                          <h4 className="font-editorial text-xl font-normal text-[#302B29] mb-1">
                            Makeup
                          </h4>
                          <p className="text-xs text-[#786761] leading-relaxed font-light">
                            Discover Korean makeup, shades, products, and techniques that suit you.
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-[#EADBCE]/60 flex items-center justify-between text-[11px] text-[#786761]">
                        <span>Technique & Colors</span>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            mainInterest === 'makeup'
                              ? 'border-[#302B29] bg-[#302B29] text-white'
                              : 'border-[#EADBCE]'
                          }`}
                        >
                          {mainInterest === 'makeup' && <Check className="w-2.5 h-2.5 text-white" />}
                        </div>
                      </div>
                    </button>

                    {/* Both Option */}
                    <button
                      type="button"
                      onClick={() => setMainInterest('both')}
                      className={`p-6 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between group ${
                        mainInterest === 'both'
                          ? 'bg-[#FCFAF7] border-[#D9B4B0] shadow-md ring-1 ring-[#D9B4B0]'
                          : 'bg-[#FCFAF7]/60 border-[#EADBCE] hover:border-[#D9B4B0] hover:bg-[#FCFAF7]'
                      }`}
                    >
                      <div className="space-y-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                            mainInterest === 'both'
                              ? 'bg-[#F4E8E5] text-[#302B29]'
                              : 'bg-[#F7F2EC] text-[#786761] group-hover:text-[#302B29]'
                          }`}
                        >
                          <Layers className="w-6 h-6 text-[#D9B4B0]" />
                        </div>
                        <div>
                          <h4 className="font-editorial text-xl font-normal text-[#302B29] mb-1">
                            Both
                          </h4>
                          <p className="text-xs text-[#786761] leading-relaxed font-light">
                            Create a complete K-beauty experience combining skincare and makeup.
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-[#EADBCE]/60 flex items-center justify-between text-[11px] text-[#786761]">
                        <span>Holistic K-Beauty</span>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            mainInterest === 'both'
                              ? 'border-[#302B29] bg-[#302B29] text-white'
                              : 'border-[#EADBCE]'
                          }`}
                        >
                          {mainInterest === 'both' && <Check className="w-2.5 h-2.5 text-white" />}
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {/* SKINCARE PATH: Step 2 - What would you like help with? (7 concerns) */}
              {mainInterest === 'skincare' && step === 2 && (
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <span className="text-[11px] uppercase tracking-[0.24em] text-[#D9B4B0] font-semibold">
                      Step 2 of {totalSteps} • Skin Barrier Focus
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">
                      What would you like help with?
                    </h2>
                    <p className="text-xs sm:text-sm text-[#786761] font-light max-w-md mx-auto">
                      Select any areas you would like to focus on. Multiple selections allowed.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {SKINCARE_CONCERNS.map((item) => {
                      const isSelected = selectedConcerns.includes(item.label);
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleToggleConcern(item.label)}
                          className={`p-4 rounded-2xl border text-left transition-all flex items-start justify-between gap-3 ${
                            isSelected
                              ? 'bg-[#FCFAF7] border-[#D9B4B0] shadow-xs ring-1 ring-[#D9B4B0]'
                              : 'bg-[#FCFAF7]/60 border-[#EADBCE] hover:border-[#D9B4B0]'
                          }`}
                        >
                          <div className="space-y-1">
                            <h4 className="text-sm font-medium text-[#302B29]">{item.label}</h4>
                            <p className="text-xs text-[#786761] font-light leading-snug">
                              {item.desc}
                            </p>
                          </div>
                          <div
                            className={`w-5 h-5 rounded-md shrink-0 border mt-0.5 flex items-center justify-center ${
                              isSelected
                                ? 'bg-[#302B29] border-[#302B29] text-white'
                                : 'border-[#EADBCE] bg-white'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* SKINCARE PATH: Step 3 - What are you interested in? */}
              {mainInterest === 'skincare' && step === 3 && (
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <span className="text-[11px] uppercase tracking-[0.24em] text-[#D9B4B0] font-semibold">
                      Step 3 of {totalSteps} • Discovery Preferences
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">
                      What are you interested in?
                    </h2>
                    <p className="text-xs sm:text-sm text-[#786761] font-light max-w-md mx-auto">
                      Choose what sounds intriguing to you. We curate experiences around what feels comfortable and useful.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {SKINCARE_OPTIONS.map((opt) => {
                      const isSelected = selectedSkincareInterests.includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleToggleSkincareInterest(opt)}
                          className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 ${
                            isSelected
                              ? 'bg-[#FCFAF7] border-[#D9B4B0] shadow-xs ring-1 ring-[#D9B4B0]'
                              : 'bg-[#FCFAF7]/60 border-[#EADBCE] hover:border-[#D9B4B0]'
                          }`}
                        >
                          <span className="text-xs sm:text-sm font-medium text-[#302B29]">{opt}</span>
                          <div
                            className={`w-4 h-4 rounded-full border shrink-0 flex items-center justify-center ${
                              isSelected
                                ? 'bg-[#302B29] border-[#302B29] text-white'
                                : 'border-[#EADBCE] bg-white'
                            }`}
                          >
                            {isSelected && <Check className="w-2.5 h-2.5" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* MAKEUP PATH: Step 2 - What are you most interested in? */}
              {mainInterest === 'makeup' && step === 2 && (
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <span className="text-[11px] uppercase tracking-[0.24em] text-[#D9B4B0] font-semibold">
                      Step 2 of {totalSteps} • Makeup Exploration
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">
                      What are you most interested in?
                    </h2>
                    <p className="text-xs sm:text-sm text-[#786761] font-light max-w-md mx-auto">
                      Select any areas of Korean makeup you would like to explore. Multiple selections allowed.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {MAKEUP_OPTIONS.map((opt) => {
                      const isSelected = selectedMakeupInterests.includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleToggleMakeupInterest(opt)}
                          className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 ${
                            isSelected
                              ? 'bg-[#FCFAF7] border-[#D9B4B0] shadow-xs ring-1 ring-[#D9B4B0]'
                              : 'bg-[#FCFAF7]/60 border-[#EADBCE] hover:border-[#D9B4B0]'
                          }`}
                        >
                          <span className="text-xs sm:text-sm font-medium text-[#302B29]">{opt}</span>
                          <div
                            className={`w-4 h-4 rounded-full border shrink-0 flex items-center justify-center ${
                              isSelected
                                ? 'bg-[#302B29] border-[#302B29] text-white'
                                : 'border-[#EADBCE] bg-white'
                            }`}
                          >
                            {isSelected && <Check className="w-2.5 h-2.5" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* MAKEUP PATH: Step 3 - Are you also interested in skincare? */}
              {mainInterest === 'makeup' && step === 3 && (
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <span className="text-[11px] uppercase tracking-[0.24em] text-[#D9B4B0] font-semibold">
                      Step 3 of {totalSteps} • Routine Harmony
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">
                      Are you also interested in skincare?
                    </h2>
                    <p className="text-xs sm:text-sm text-[#786761] font-light max-w-md mx-auto">
                      Flawless makeup always begins with healthy skin preparation. Would you like to incorporate skincare guidance?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() => setAlsoSkincare('yes')}
                      className={`p-6 rounded-2xl border text-center transition-all ${
                        alsoSkincare === 'yes'
                          ? 'bg-[#FCFAF7] border-[#D9B4B0] ring-1 ring-[#D9B4B0] shadow-sm'
                          : 'bg-[#FCFAF7]/60 border-[#EADBCE] hover:border-[#D9B4B0]'
                      }`}
                    >
                      <span className="text-2xl mb-2 block">✨</span>
                      <h4 className="font-editorial text-lg font-medium text-[#302B29] mb-1">Yes</h4>
                      <p className="text-xs text-[#786761] font-light">
                        I'd love to combine skincare and makeup guidance.
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setAlsoSkincare('maybe')}
                      className={`p-6 rounded-2xl border text-center transition-all ${
                        alsoSkincare === 'maybe'
                          ? 'bg-[#FCFAF7] border-[#D9B4B0] ring-1 ring-[#D9B4B0] shadow-sm'
                          : 'bg-[#FCFAF7]/60 border-[#EADBCE] hover:border-[#D9B4B0]'
                      }`}
                    >
                      <span className="text-2xl mb-2 block">🌿</span>
                      <h4 className="font-editorial text-lg font-medium text-[#302B29] mb-1">Maybe</h4>
                      <p className="text-xs text-[#786761] font-light">
                        Open to gentle recommendations if time permits.
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setAlsoSkincare('no')}
                      className={`p-6 rounded-2xl border text-center transition-all ${
                        alsoSkincare === 'no'
                          ? 'bg-[#FCFAF7] border-[#D9B4B0] ring-1 ring-[#D9B4B0] shadow-sm'
                          : 'bg-[#FCFAF7]/60 border-[#EADBCE] hover:border-[#D9B4B0]'
                      }`}
                    >
                      <span className="text-2xl mb-2 block">💄</span>
                      <h4 className="font-editorial text-lg font-medium text-[#302B29] mb-1">No</h4>
                      <p className="text-xs text-[#786761] font-light">
                        Keep it focused purely on Korean makeup & color.
                      </p>
                    </button>
                  </div>

                  {/* Optional Skincare Concerns expansion if user clicked Yes or Maybe */}
                  {(alsoSkincare === 'yes' || alsoSkincare === 'maybe') && (
                    <div className="p-5 rounded-2xl bg-[#FCFAF7] border border-[#EADBCE] space-y-3 pt-4">
                      <p className="text-xs font-medium text-[#302B29]">
                        Select any skin concerns you'd also like our aesthetician to consider:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {SKINCARE_CONCERNS.map((item) => {
                          const isSel = selectedConcerns.includes(item.label);
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => handleToggleConcern(item.label)}
                              className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                                isSel
                                  ? 'bg-[#302B29] text-white font-medium'
                                  : 'bg-[#F7F2EC] border border-[#EADBCE] text-[#786761] hover:text-[#302B29]'
                              }`}
                            >
                              {item.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* BOTH PATH: Step 2 - What would you like to explore? (Skincare & Makeup) */}
              {mainInterest === 'both' && step === 2 && (
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <span className="text-[11px] uppercase tracking-[0.24em] text-[#D9B4B0] font-semibold">
                      Step 2 of {totalSteps} • Complete K-Beauty
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">
                      What would you like to explore?
                    </h2>
                    <p className="text-xs sm:text-sm text-[#786761] font-light max-w-lg mx-auto">
                      NORI can create a complete beauty experience combining customized skincare and makeup techniques.
                    </p>
                  </div>

                  <div className="space-y-5 pt-2">
                    {/* Skincare Options Box */}
                    <div className="p-5 rounded-2xl bg-[#FCFAF7] border border-[#EADBCE] space-y-3">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#302B29]">
                        <Droplets className="w-3.5 h-3.5 text-[#D9B4B0]" />
                        <span>Skincare Focus</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {BOTH_SKINCARE_OPTIONS.map((item) => {
                          const isSelected = bothSkincareItems.includes(item);
                          return (
                            <button
                              key={item}
                              type="button"
                              onClick={() => handleToggleBothSkincare(item)}
                              className={`px-3.5 py-2 rounded-xl text-xs transition-all ${
                                isSelected
                                  ? 'bg-[#302B29] text-white font-medium shadow-2xs'
                                  : 'bg-[#F7F2EC] border border-[#EADBCE] text-[#786761] hover:text-[#302B29]'
                              }`}
                            >
                              {item}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Makeup Options Box */}
                    <div className="p-5 rounded-2xl bg-[#FCFAF7] border border-[#EADBCE] space-y-3">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#302B29]">
                        <Palette className="w-3.5 h-3.5 text-[#D9B4B0]" />
                        <span>Makeup Focus</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {BOTH_MAKEUP_OPTIONS.map((item) => {
                          const isSelected = bothMakeupItems.includes(item);
                          return (
                            <button
                              key={item}
                              type="button"
                              onClick={() => handleToggleBothMakeup(item)}
                              className={`px-3.5 py-2 rounded-xl text-xs transition-all ${
                                isSelected
                                  ? 'bg-[#302B29] text-white font-medium shadow-2xs'
                                  : 'bg-[#F7F2EC] border border-[#EADBCE] text-[#786761] hover:text-[#302B29]'
                              }`}
                            >
                              {item}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* BOTH PATH: Step 3 - Skin concerns */}
              {mainInterest === 'both' && step === 3 && (
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <span className="text-[11px] uppercase tracking-[0.24em] text-[#D9B4B0] font-semibold">
                      Step 3 of {totalSteps} • Skin Barrier Focus
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">
                      What skin concerns would you like to focus on?
                    </h2>
                    <p className="text-xs sm:text-sm text-[#786761] font-light max-w-md mx-auto">
                      Select any areas you would like to address to ensure skin barrier harmony:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {SKINCARE_CONCERNS.map((item) => {
                      const isSelected = selectedConcerns.includes(item.label);
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleToggleConcern(item.label)}
                          className={`p-4 rounded-2xl border text-left transition-all flex items-start justify-between gap-3 ${
                            isSelected
                              ? 'bg-[#FCFAF7] border-[#D9B4B0] shadow-xs ring-1 ring-[#D9B4B0]'
                              : 'bg-[#FCFAF7]/60 border-[#EADBCE] hover:border-[#D9B4B0]'
                          }`}
                        >
                          <div className="space-y-1">
                            <h4 className="text-sm font-medium text-[#302B29]">{item.label}</h4>
                            <p className="text-xs text-[#786761] font-light leading-snug">
                              {item.desc}
                            </p>
                          </div>
                          <div
                            className={`w-5 h-5 rounded-md shrink-0 border mt-0.5 flex items-center justify-center ${
                              isSelected
                                ? 'bg-[#302B29] border-[#302B29] text-white'
                                : 'border-[#EADBCE] bg-white'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 4 (All Paths): How much time do you have in Korea? */}
              {step === 4 && (
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <span className="text-[11px] uppercase tracking-[0.24em] text-[#D9B4B0] font-semibold">
                      Step 4 of {totalSteps} • Time & Pace
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">
                      {mainInterest === 'both'
                        ? 'How much time would you like to spend on your beauty journey?'
                        : 'How much time do you have in Korea for your beauty experience?'}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#786761] font-light max-w-md mx-auto">
                      Select your preferred pace. All journeys are unhurried and relaxed.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    {DURATION_OPTIONS.map((item) => {
                      const isSelected = duration === item.label;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setDuration(item.label)}
                          className={`w-full p-4 sm:p-5 rounded-2xl border text-left transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                            isSelected
                              ? 'bg-[#FCFAF7] border-[#D9B4B0] shadow-xs ring-1 ring-[#D9B4B0]'
                              : 'bg-[#FCFAF7]/60 border-[#EADBCE] hover:border-[#D9B4B0]'
                          }`}
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h4 className="text-base font-editorial font-medium text-[#302B29]">
                                {item.label}
                              </h4>
                              {item.tag && (
                                <span className="px-2.5 py-0.5 rounded-full bg-[#EADBCE]/50 text-[10px] text-[#786761] font-medium">
                                  {item.tag}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-[#786761] font-light leading-relaxed">
                              {item.note}
                            </p>
                          </div>
                          <div
                            className={`w-5 h-5 rounded-full border shrink-0 flex items-center justify-center self-end sm:self-center ${
                              isSelected
                                ? 'bg-[#302B29] border-[#302B29] text-white'
                                : 'border-[#EADBCE] bg-white'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 5: "Your NORI Journey" Custom Overview & Request */}
              {step === 5 && (() => {
                const rec = getRecommendedExperience();
                return (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center space-y-2">
                    <span className="text-[11px] uppercase tracking-[0.24em] text-[#D9B4B0] font-semibold">
                      Your Curated Recommendation
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-editorial font-light text-[#302B29]">
                      Your Matched NORI Experience
                    </h2>
                    <p className="text-xs sm:text-sm text-[#786761] font-light max-w-md mx-auto">
                      Based on your preferences, here is the experience crafted to give you clarity and confidence.
                    </p>
                  </div>

                  {/* Highlighted Recommendation Card */}
                  <div className="p-5 sm:p-6 rounded-3xl bg-[#FCFAF7] border-2 border-[#D9B4B0] shadow-sm space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EADBCE] pb-3">
                      <div>
                        <span className="px-2.5 py-1 rounded-full bg-[#F4E8E5] text-[#786761] text-[10px] uppercase tracking-[0.16em] font-semibold inline-block mb-1">
                          {rec.depthLabel}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-editorial font-medium text-[#302B29]">
                          {rec.title}
                        </h3>
                      </div>
                      <div className="text-right sm:text-right">
                        <span className="text-lg font-editorial font-semibold text-[#302B29]">
                          {rec.price}
                        </span>
                        <span className="block text-[11px] text-[#786761]">
                          Duration: {rec.duration}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                      <div className="sm:col-span-4 aspect-16/10 rounded-2xl overflow-hidden bg-[#ECE4D9] border border-[#EADBCE]">
                        <img
                          src={rec.image}
                          alt={rec.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="sm:col-span-8 space-y-2 text-xs">
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#D9B4B0] uppercase tracking-wider">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Matched For: {rec.matchCriteria}</span>
                        </div>
                        <p className="text-[#786761] font-light leading-relaxed">
                          {rec.matchReason}
                        </p>
                        <div className="p-2.5 rounded-xl bg-[#F7F2EC] border border-[#EADBCE] text-[11px] text-[#302B29]">
                          <strong className="font-semibold text-[#302B29]">Deliverables: </strong>
                          <span className="text-[#786761] font-light">{rec.deliverables}</span>
                        </div>
                      </div>
                    </div>

                    {/* If Signature NORI Complete Glow Journey */}
                    {rec.id === 'nori-complete-glow-journey' && (
                      <div className="p-4 bg-[#F7F2EC] rounded-2xl border border-[#EADBCE] space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D9B4B0]">
                            Your Signature NORI Journey
                          </span>
                          <span className="text-xs italic font-editorial text-[#786761]">3 Days • Private</span>
                        </div>
                        <p className="text-sm font-editorial text-[#302B29] leading-snug">
                          Three days. One beauty journey, entirely your own.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-[#302B29]">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D9B4B0]" />
                            <span>Understand your skin.</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D9B4B0]" />
                            <span>Discover your colors.</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D9B4B0]" />
                            <span>Learn your look.</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D9B4B0]" />
                            <span>Take your glow home.</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Quick Direct Actions */}
                    <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-[#EADBCE]">
                      {onSelectTour && (
                        <button
                          type="button"
                          onClick={() => {
                            handleReset();
                            onSelectTour(rec.id);
                          }}
                          className="flex-1 py-2.5 px-4 rounded-xl border border-[#302B29] bg-[#302B29] text-[#F7F2EC] hover:bg-[#443E3B] text-xs uppercase tracking-wider font-medium transition-all text-center flex items-center justify-center gap-1.5"
                        >
                          <span>{rec.ctaText || 'Explore Full Tour Details'}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#D9B4B0]" />
                        </button>
                      )}
                      {onBookTour && (
                        <button
                          type="button"
                          onClick={() => {
                            handleReset();
                            onBookTour(rec.id);
                          }}
                          className="flex-1 py-2.5 px-4 rounded-xl bg-[#D9B4B0] hover:bg-[#cfa5a1] text-[#302B29] text-xs uppercase tracking-wider font-medium transition-all text-center shadow-2xs"
                        >
                          Book This Experience Now
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Curated Summary Card */}
                  <div className="p-5 rounded-2xl bg-[#FCFAF7] border border-[#EADBCE] space-y-3">
                    <div className="flex items-center justify-between border-b border-[#EADBCE] pb-3 text-xs">
                      <span className="text-[#786761]">Focus Area:</span>
                      <span className="font-medium text-[#302B29] capitalize">
                        {mainInterest} K-Beauty
                      </span>
                    </div>

                    {selectedConcerns.length > 0 && (
                      <div className="flex items-start justify-between border-b border-[#EADBCE] pb-3 text-xs gap-4">
                        <span className="text-[#786761] shrink-0">Skin Concerns:</span>
                        <span className="font-medium text-[#302B29] text-right">
                          {selectedConcerns.join(', ')}
                        </span>
                      </div>
                    )}

                    {(selectedSkincareInterests.length > 0 || bothSkincareItems.length > 0) && (
                      <div className="flex items-start justify-between border-b border-[#EADBCE] pb-3 text-xs gap-4">
                        <span className="text-[#786761] shrink-0">Skincare Goals:</span>
                        <span className="font-medium text-[#302B29] text-right">
                          {[...selectedSkincareInterests, ...bothSkincareItems].join(', ')}
                        </span>
                      </div>
                    )}

                    {(selectedMakeupInterests.length > 0 || bothMakeupItems.length > 0) && (
                      <div className="flex items-start justify-between border-b border-[#EADBCE] pb-3 text-xs gap-4">
                        <span className="text-[#786761] shrink-0">Makeup Focus:</span>
                        <span className="font-medium text-[#302B29] text-right">
                          {[...selectedMakeupInterests, ...bothMakeupItems].join(', ')}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-[#786761]">Pace & Time:</span>
                      <span className="font-medium text-[#302B29]">{duration}</span>
                    </div>

                    <div className="pt-3 border-t border-[#EADBCE] text-[11px] text-[#786761] italic leading-relaxed">
                      “We are here to help you make the right choice for you, not to sell you the most.”
                    </div>
                  </div>

                  {/* Guest Contact Details */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#786761] font-semibold mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={guestName}
                          onChange={(e) => setGuestName(e.target.value)}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#EADBCE] focus:border-[#D9B4B0] text-xs text-[#302B29] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#786761] font-semibold mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={guestEmail}
                          onChange={(e) => setGuestEmail(e.target.value)}
                          placeholder="sarah@example.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#EADBCE] focus:border-[#D9B4B0] text-xs text-[#302B29] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#786761] font-semibold mb-1">
                          WhatsApp / Kakao (Optional)
                        </label>
                        <input
                          type="text"
                          value={guestWhatsapp}
                          onChange={(e) => setGuestWhatsapp(e.target.value)}
                          placeholder="+1 (555) 019-2834"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#EADBCE] focus:border-[#D9B4B0] text-xs text-[#302B29] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#786761] font-semibold mb-1">
                          Estimated Travel Dates / Month
                        </label>
                        <input
                          type="text"
                          value={travelDates}
                          onChange={(e) => setTravelDates(e.target.value)}
                          placeholder="e.g. October 2024 (or exact date)"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#EADBCE] focus:border-[#D9B4B0] text-xs text-[#302B29] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#786761] font-semibold mb-1">
                        Any specific wishes or questions? (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={specialNote}
                        onChange={(e) => setSpecialNote(e.target.value)}
                        placeholder="Tell us about any specific brands, ingredients, or questions you have..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#EADBCE] focus:border-[#D9B4B0] text-xs text-[#302B29] focus:outline-none resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#302B29] hover:bg-[#443E3B] text-[#F7F2EC] rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#E9D2CD]" />
                    <span>Request Your Curated Journey</span>
                  </button>
                </form>
                );
              })()}
            </>
          )}
        </div>

        {/* Footer Navigation Bar (Back & Next controls) */}
        {!isSubmitted && (
          <div className="px-6 py-4 bg-[#FCFAF7] border-t border-[#EADBCE] flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#786761] hover:text-[#302B29] font-medium transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <span className="text-[11px] text-[#786761]">Step 1 of {totalSteps}</span>
            )}

            {step < 5 && (
              <button
                type="button"
                disabled={step === 1 && !mainInterest}
                onClick={handleNext}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all ${
                  step === 1 && !mainInterest
                    ? 'bg-[#EADBCE] text-[#786761] cursor-not-allowed'
                    : 'bg-[#302B29] text-[#F7F2EC] hover:bg-[#443E3B] shadow-xs'
                }`}
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
