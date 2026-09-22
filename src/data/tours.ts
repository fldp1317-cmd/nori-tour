import { Tour } from '../types';

export const TOURS_DATA: Tour[] = [
  {
    id: 'nori-skin-edit',
    slug: 'nori-skin-edit',
    title: 'NORI Skin Edit',
    headline: 'Not sure what to buy in Korea? Start here.',
    supportingCopy: 'Learn what your skin actually needs, understand the ingredients, and shop K-beauty with confidence.',
    category: 'Skincare',
    duration: '2 Hours',
    format: 'Private Experience',
    groupType: 'Private (1–3 guests)',
    groupSize: 'Private (1–3 guests)',
    positioning: 'Entry-level personalized K-beauty consultation and shopping experience.',
    depthLevel: 'quick',
    depthLabel: 'Quick Personalized Guidance',
    shortDescription: 'Learn what your skin actually needs, understand the ingredients, and shop K-beauty with confidence.',
    fullDescription: 'The essential entry point for travelers navigating K-beauty. In the first 60 minutes, sit down for an intimate, pressure-free skincare consultation over artisan Korean tea. Review your current AM/PM routine, clarify active ingredients and sensitivities, and receive a clear Shopping Priority Framework (Must Have, Worth Trying, Skip for Now). In the second 60 minutes, step into Olive Young, specialized Korean pharmacies, and curated beauty stores together to compare formulations and choose items that genuinely support your skin barrier.',
    overview: 'Designed for international travelers who want to cut through the overwhelming noise of viral trends and marketing claims. In your first hour, your dedicated bilingual beauty guide reviews your current regimen, helps you understand key Korean ingredients (such as Centella, Ceramides, Heartleaf, PDRN, and Artemisia), and identifies your primary skin goals. In the second hour, walk through Olive Young, local dermatological pharmacies, and curated beauty boutiques. We decode packaging labels side-by-side, eliminate unnecessary duplicate purchases, and focus strictly on what works in harmony with your daily life.',
    startingPrice: 125,
    currency: 'USD',
    priceByGuestCount: [
      { guests: 1, krw: 170000, label: '1 Guest: KRW 170,000 (~$125 USD)' },
      { guests: 2, krw: 230000, label: '2 Guests: KRW 230,000 (~$170 USD)' },
      { guests: 3, krw: 290000, label: '3 Guests: KRW 290,000 (~$215 USD)' },
    ],
    pricingNote: 'Prices are editable placeholders. Includes private guide, consultation, ingredient education, and shopping navigation.',
    shoppingFramework: {
      title: 'Shopping Priority Framework',
      items: [
        { label: 'Must Have', desc: 'Core barrier-support essentials that directly address your primary skincare priorities.', type: 'must' },
        { label: 'Worth Trying', desc: 'Targeted hydration boosters, ampoules, or calming treatments if budget and routine space allow.', type: 'nice' },
        { label: 'Skip for Now', desc: 'Hyped viral products that overlap with your current regimen or risk irritating your skin.', type: 'skip' }
      ]
    },
    badge: 'Essential Entry • 2 Hours',
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 46,
    skincareProductLine: true,
    highlights: [
      '60-minute one-on-one personal skincare consultation in a serene private lounge',
      'Detailed review of your current AM & PM routine and product textures',
      'Personalized K-beauty ingredient education (Centella, Ceramides, PDRN, Niacinamide)',
      'Establish your Shopping Priority Framework: Must Have, Worth Trying, Skip for Now',
      '60-minute guided shopping across Olive Young, Korean pharmacies, and local stores',
      'Receive your post-experience guide: "Your NORI Skin Edit"'
    ],
    timeline: [
      {
        time: 'Hour 1 (0:00 – 1:00)',
        title: 'Personal Skincare Consultation & Ingredient Education',
        description: 'Meet over warm artisan tea. Review your skincare goals, current AM/PM routine, primary skin concerns, active ingredients currently in use, products that have worked or caused irritation, preferred textures, and your beauty budget. Receive personalized ingredient education and map out your Shopping Priority Framework.',
        topics: [
          'Current AM / PM routine audit',
          'Skin concerns & barrier harmony',
          'Active ingredients and texture preferences',
          'Ingredient education (Centella, Ceramides, PDRN, etc.)',
          'Shopping Priority Framework (Must Have / Worth Trying / Skip for Now)'
        ]
      },
      {
        time: 'Hour 2 (1:00 – 2:00)',
        title: 'Curated K-Beauty Shopping Navigation',
        description: 'Walk together to Olive Young, specialized Korean pharmacies, and nearby curated beauty stores. Compare formulations, verify ingredient lists, eliminate unnecessary duplicate purchases, and choose products that fit your routine rather than marketing hype.',
        topics: [
          'Olive Young curated selection',
          'Korean pharmacy skincare formulations',
          'Ingredient label verification',
          'Avoiding duplicate actives',
          'Immediate on-site tax refund assistance'
        ]
      }
    ],
    itinerary: [
      {
        time: 'Hour 1 (0:00 – 1:00)',
        title: 'Personal Skincare Consultation & Ingredient Education',
        description: 'Meet over warm artisan tea. Review your skincare goals, current AM/PM routine, primary skin concerns, active ingredients currently in use, products that have worked or caused irritation, preferred textures, and your beauty budget. Receive personalized ingredient education and map out your Shopping Priority Framework.',
        topics: [
          'Current AM / PM routine audit',
          'Skin concerns & barrier harmony',
          'Active ingredients and texture preferences',
          'Ingredient education (Centella, Ceramides, PDRN, etc.)',
          'Shopping Priority Framework (Must Have / Worth Trying / Skip for Now)'
        ]
      },
      {
        time: 'Hour 2 (1:00 – 2:00)',
        title: 'Curated K-Beauty Shopping Navigation',
        description: 'Walk together to Olive Young, specialized Korean pharmacies, and nearby curated beauty stores. Compare formulations, verify ingredient lists, eliminate unnecessary duplicate purchases, and choose products that fit your routine rather than marketing hype.',
        topics: [
          'Olive Young curated selection',
          'Korean pharmacy skincare formulations',
          'Ingredient label verification',
          'Avoiding duplicate actives',
          'Immediate on-site tax refund assistance'
        ]
      }
    ],
    included: [
      'Private English-speaking beauty guide throughout',
      '1-hour personalized skincare consultation',
      'Basic ingredient education session',
      '1-hour guided K-beauty shopping (Olive Young, Korean pharmacy & local stores)',
      'Personalized shopping shortlist (Must Have, Worth Trying, Skip for Now)',
      'Post-tour skincare routine summary ("Your NORI Skin Edit")',
      'Artisan tea and seasonal refreshments during consultation',
      'Immediate on-site tax refund assistance'
    ],
    excluded: [
      'Cost of retail products purchased during shopping',
      'Food and drinks outside of the tea lounge',
      'Transportation if needed between districts',
      'Medical consultation or medical clinic procedures'
    ],
    notIncluded: [
      'Cost of retail products purchased during shopping',
      'Food and drinks outside of the tea lounge',
      'Transportation if needed between districts',
      'Medical consultation or medical clinic procedures'
    ],
    deliverables: {
      title: 'Your NORI Skin Edit',
      subtitle: 'Delivered digitally following your experience',
      items: [
        'Personalized AM skincare routine',
        'Personalized PM skincare routine',
        'Summary of purchased products and their exact functional roles',
        'Recommended usage order and application tips',
        'Products to finish in your current collection before adding newly purchased items',
        'Simple ingredient cautions and active layering guidance'
      ]
    },
    importantNotes: [
      'Please bring photos or notes of the daily skincare products and active serums you currently use.',
      'We recommend arriving with light or minimal makeup so you can comfortably test product textures.',
      'NORI maintains a strict zero-commission policy: our guidance is 100% independent and honest.',
      'Cancellation is free up to 48 hours in advance.'
    ],
    importantInfo: [
      'Please bring photos or notes of the daily skincare products and active serums you currently use.',
      'We recommend arriving with light or minimal makeup so you can comfortably test product textures.',
      'NORI maintains a strict zero-commission policy: our guidance is 100% independent and honest.',
      'Cancellation is free up to 48 hours in advance.'
    ],
    meetingPoint: {
      name: 'Dosan Park / Sinsa Tea Lounge',
      subwayStation: 'Apgujeong Rodeo Station (Exit 5) or Sinsa Station (Exit 8)',
      address: 'Dosan-daero & Garosu-gil area, Gangnam-gu, Seoul',
      directionsNote: 'Your bilingual host will welcome you at our reserved quiet lounge. Exact lounge address and walking directions are sent upon booking confirmation.'
    },
    cancellationPolicy: 'Free cancellation up to 48 hours prior to scheduled start. 50% refund within 24 hours.',
    heroImage: 'https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1608248597359-21b8c06d860e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1608248597359-21b8c06d860e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80'
    ],
    visualStory: [
      {
        stage: 'hero',
        stageNumber: 1,
        stageName: 'Hero Overview',
        sceneTitle: 'Personal Consultation over Korean Tea',
        sceneDescription: 'International female traveler sitting across from a warm, stylish Korean beauty guide at a clean café / consultation table, reviewing a small selection of skincare products together.',
        photoDirection: 'Atmosphere is personal, friendly, educational, calm, and premium. Focus on genuine human connection and barrier guidance.',
        imageUrl: 'https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=1600&q=80',
        isPlaceholder: false
      },
      {
        stage: 'activity',
        stageNumber: 2,
        stageName: 'Experience & Activity',
        sceneTitle: 'Curated K-Beauty Shopping Navigation',
        sceneDescription: 'Guided shopping in a modern Korean beauty store, focused on a small curated group of products rather than excessive shopping bags.',
        photoDirection: 'Clean aesthetic shelves, calm decision-making, zero rush or sales pressure.',
        imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
        isPlaceholder: false
      },
      {
        stage: 'interaction',
        stageNumber: 3,
        stageName: 'Human Interaction',
        sceneTitle: 'Comparing Formulations & Label Ingredients',
        sceneDescription: 'Hands comparing skincare products and looking at active ingredient labels together.',
        photoDirection: 'Real hands holding bottles, reading percentages, demystifying K-beauty claims.',
        imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
        isPlaceholder: false
      },
      {
        stage: 'detail',
        stageNumber: 4,
        stageName: 'Detail & Texture',
        sceneTitle: 'AM / PM Routine Audit & Texture Evaluation',
        sceneDescription: 'Reviewing a simple AM / PM skincare routine and minimalist formulation bottles up close.',
        photoDirection: 'Refined Korean aesthetic with gentle natural lighting and minimal clutter.',
        imageUrl: 'https://images.unsplash.com/photo-1608248597359-21b8c06d860e?auto=format&fit=crop&w=1200&q=80',
        isPlaceholder: false
      },
      {
        stage: 'takeaway',
        stageNumber: 5,
        stageName: 'Result & Takeaway',
        sceneTitle: '“Your NORI Skin Edit” Takeaway Routine',
        sceneDescription: 'A small curated group of products tailored to real skin needs, paired with the digital summary guide.',
        photoDirection: 'Reinforces the core message: “Someone is helping me understand what I actually need.”',
        imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80',
        isPlaceholder: false
      }
    ]
  },
  {
    id: 'nori-skin-discovery',
    slug: 'nori-skin-discovery',
    title: 'NORI Skin Discovery',
    headline: 'Go beyond the shelves. Understand what actually works for you.',
    supportingCopy: 'Learn your skin. Understand the ingredients. Shop with confidence.',
    category: 'Skincare',
    duration: 'Approximately 4 Hours',
    format: 'Private Half-Day Experience',
    groupType: 'Private (1–3 guests)',
    groupSize: 'Private (1–3 guests)',
    positioning: 'For guests who want to understand K-beauty more deeply and build a routine that truly fits them.',
    depthLevel: 'deep',
    depthLabel: 'Deeper Understanding',
    shortDescription: 'Learn your skin, decode active ingredients with a customized mini-class, navigate Olive Young and Korean pharmacies, and build your complete routine over café tea.',
    fullDescription: 'An unhurried half-day immersion into personalized Korean skincare literacy. Spanning approximately 4 hours, this experience delves into unnecessary steps, ingredient clashes, and seasonal routine adjustments. It features an educational Ingredient & Routine Mini-Class, multi-store shopping navigation across Olive Young, specialized Korean pharmacies, and niche brand showrooms, and concludes in a peaceful café to synthesize your purchases into "Your NORI Beauty Map."',
    overview: 'Go beyond the shelves to understand the formulation science that makes K-beauty so celebrated worldwide. Your bilingual beauty educator begins with an in-depth routine review to identify redundant steps and conflicting actives. You will then participate in a customized mini-class exploring hydration vs. moisturization, barrier resilience, and ingredient selection—grounded in our core principle: "Popular ingredients are not automatically the right ingredients for everyone." Following an extensive shopping journey comparing real function against marketing claims, settle into a comfortable café to finalize your AM/PM routine and safe product introduction schedule.',
    startingPrice: 200,
    currency: 'USD',
    priceByGuestCount: [
      { guests: 1, krw: 260000, label: '1 guest: KRW 260,000 (~$200 USD)' },
      { guests: 2, krw: 320000, label: '2 guests: KRW 320,000 (~$245 USD)' },
      { guests: 3, krw: 380000, label: '3 guests: KRW 380,000 (~$290 USD)' },
    ],
    pricingNote: 'Prices are editable placeholders for now. Includes private guide, comprehensive consultation, mini-class, extended shopping curation, café beverages, and routine map.',
    shoppingFramework: {
      title: 'Curated Shopping Framework',
      items: [
        { label: 'Must Buy', desc: 'Core essentials matching your top 3 skin priorities and seasonal environmental factors.', type: 'must' },
        { label: 'Optional', desc: 'Targeted weekly boosters, soothing sheet masks, or concentrated ampoules.', type: 'nice' },
        { label: 'Skip', desc: 'Formulations with redundant actives, exaggerated marketing claims, or mismatched textures.', type: 'skip' }
      ]
    },
    badge: 'Deep Discovery • Half-Day',
    isFeatured: true,
    rating: 4.98,
    reviewsCount: 52,
    skincareProductLine: true,
    highlights: [
      'Comprehensive beauty goals and routine review (unnecessary steps, missing links, ingredient conflicts)',
      'Customized Ingredient & Routine Mini-Class (hydration vs moisturization, barrier repair, active pairing)',
      'Core philosophy: "Popular ingredients are not automatically the right ingredients for everyone"',
      '100-minute multi-stop shopping journey (Olive Young, Korean pharmacy, selected beauty brand store)',
      'In-depth comparison: price, volume, key active percentages, texture absorption, and real function',
      'Relaxed wrap-up café session: finalize AM/PM regimen, product introduction timeline, and "Your NORI Beauty Map"'
    ],
    timeline: [
      {
        time: '0:00 – 0:20',
        title: 'Beauty Goals & Routine Review',
        description: 'Welcome and introduction over artisan tea. Assess your current daily skincare regimen, primary skin concerns, past product experiences and sensitivity history, budget parameters, preferred textures, and familiarity with Korean beauty.',
        topics: ['Current routine analysis', 'Skin concerns & sensitivity history', 'Budget & texture preferences', 'K-beauty experience level']
      },
      {
        time: '0:20 – 1:10',
        title: 'Personalized Skincare Consultation',
        description: 'Dive deeper into your skincare habits. Identify unnecessary or excessive routine steps, missing care elements, overlapping active ingredients that risk barrier stress, seasonal routine adjustments, AM vs PM routine balance, and concrete skincare priorities.',
        topics: ['Unnecessary/excessive steps audit', 'Missing steps identification', 'Overlapping active ingredients', 'Seasonal routine adjustment', 'AM vs PM routine balance', 'Defining top skin priorities']
      },
      {
        time: '1:10 – 1:40',
        title: 'Ingredient & Routine Mini-Class',
        description: 'A customized, practical educational session based on your specific concerns. Learn the distinction between hydration and moisturization, understand skin barrier maintenance, and evaluate key actives (niacinamide, vitamin C derivatives, gentle retinoids, exfoliating acids, soothing extracts, and sunscreen filters). Core reminder: Popular ingredients are not automatically the right ingredients for everyone.',
        topics: ['Hydration vs moisturization', 'Skin barrier health', 'Active ingredients (Niacinamide, Vitamin C, Retinoids, BHA/AHA)', 'Soothing ingredients (Centella, Artemisia, Heartleaf)', 'Sunscreen selection & UV protection']
      },
      {
        time: '1:40 – 3:20',
        title: 'Curated Shopping Journey',
        description: 'Explore Olive Young, a trusted Korean pharmacy, and a selected Korean beauty brand boutique. Compare items by price, volume, key ingredients, texture, fit with your existing routine, real function vs marketing claims, and whether each product is genuinely necessary.',
        topics: ['Multi-store navigation (Olive Young, Pharmacy, Boutique)', 'Price-to-volume ratio comparison', 'Texture testing and formulation feel', 'Real function vs marketing claims', 'Immediate on-site tax refund assistance']
      },
      {
        time: '3:20 – 4:00',
        title: 'Build Your Routine (Café Session)',
        description: 'Settle into a calm café over fresh beverages. Finalize your step-by-step AM and PM routine, plan weekly care, map the order to introduce new items, clarify what not to combine, and determine what to finish before opening new products.',
        topics: ['Finalizing AM / PM routine', 'Weekly care planning', 'Order of product introduction', 'Active combination safety', 'Delivering "Your NORI Beauty Map"']
      }
    ],
    itinerary: [
      {
        time: '0:00 – 0:20',
        title: 'Beauty Goals & Routine Review',
        description: 'Welcome and introduction over artisan tea. Assess your current daily skincare regimen, primary skin concerns, past product experiences and sensitivity history, budget parameters, preferred textures, and familiarity with Korean beauty.',
        topics: ['Current routine analysis', 'Skin concerns & sensitivity history', 'Budget & texture preferences', 'K-beauty experience level']
      },
      {
        time: '0:20 – 1:10',
        title: 'Personalized Skincare Consultation',
        description: 'Dive deeper into your skincare habits. Identify unnecessary or excessive routine steps, missing care elements, overlapping active ingredients that risk barrier stress, seasonal routine adjustments, AM vs PM routine balance, and concrete skincare priorities.',
        topics: ['Unnecessary/excessive steps audit', 'Missing steps identification', 'Overlapping active ingredients', 'Seasonal routine adjustment', 'AM vs PM routine balance', 'Defining top skin priorities']
      },
      {
        time: '1:10 – 1:40',
        title: 'Ingredient & Routine Mini-Class',
        description: 'A customized, practical educational session based on your specific concerns. Learn the distinction between hydration and moisturization, understand skin barrier maintenance, and evaluate key actives (niacinamide, vitamin C derivatives, gentle retinoids, exfoliating acids, soothing extracts, and sunscreen filters). Core reminder: Popular ingredients are not automatically the right ingredients for everyone.',
        topics: ['Hydration vs moisturization', 'Skin barrier health', 'Active ingredients (Niacinamide, Vitamin C, Retinoids, BHA/AHA)', 'Soothing ingredients (Centella, Artemisia, Heartleaf)', 'Sunscreen selection & UV protection']
      },
      {
        time: '1:40 – 3:20',
        title: 'Curated Shopping Journey',
        description: 'Explore Olive Young, a trusted Korean pharmacy, and a selected Korean beauty brand boutique. Compare items by price, volume, key ingredients, texture, fit with your existing routine, real function vs marketing claims, and whether each product is genuinely necessary.',
        topics: ['Multi-store navigation (Olive Young, Pharmacy, Boutique)', 'Price-to-volume ratio comparison', 'Texture testing and formulation feel', 'Real function vs marketing claims', 'Immediate on-site tax refund assistance']
      },
      {
        time: '3:20 – 4:00',
        title: 'Build Your Routine (Café Session)',
        description: 'Settle into a calm café over fresh beverages. Finalize your step-by-step AM and PM routine, plan weekly care, map the order to introduce new items, clarify what not to combine, and determine what to finish before opening new products.',
        topics: ['Finalizing AM / PM routine', 'Weekly care planning', 'Order of product introduction', 'Active combination safety', 'Delivering "Your NORI Beauty Map"']
      }
    ],
    included: [
      'Private bilingual K-beauty guide throughout (4 hours)',
      'Personalized skincare consultation and routine audit',
      'Customized Ingredient & Routine Mini-Class',
      'Extended guided shopping navigation (Olive Young, Pharmacy, Flagship Boutique)',
      'Café beverages and refreshments during the wrap-up session',
      'Your NORI Beauty Map (Skin priorities, ingredient guide, AM/PM plan, usage order)',
      'Immediate on-site tax refund assistance'
    ],
    excluded: [
      'Retail skincare purchases',
      'Transportation between shopping districts (walking & short taxi if needed)',
      'Medical clinic procedures or clinical treatments'
    ],
    notIncluded: [
      'Retail skincare purchases',
      'Transportation between shopping districts (walking & short taxi if needed)',
      'Medical clinic procedures or clinical treatments'
    ],
    deliverables: {
      title: 'Your NORI Beauty Map',
      subtitle: 'Comprehensive personalized routine guide delivered after your journey',
      items: [
        'Top 3 Defined Skin Priorities (e.g. 1. Barrier Support, 2. Deep Hydration, 3. Gentle Tone Clarity)',
        'Personalized Ingredient Focus (key beneficial ingredients vs ingredients to avoid)',
        'Curated Shopping Priorities (Must Buy, Optional, Skip)',
        'Final Step-by-Step AM & PM Regimen',
        'Product Introduction Schedule (how to introduce new products safely without barrier shock)',
        'Cabinet Audit (which current products to finish before adding newly purchased ones)'
      ]
    },
    importantNotes: [
      'Feel free to bring product bottles or photos of ingredient labels from your current bathroom cabinet.',
      'Wear comfortable walking shoes for our multi-boutique neighborhood walk.',
      'We do not partner with brands for product kickbacks; our curation is 100% objective and skin-first.',
      'Cancellation is free up to 48 hours in advance.'
    ],
    importantInfo: [
      'Feel free to bring product bottles or photos of ingredient labels from your current bathroom cabinet.',
      'Wear comfortable walking shoes for our multi-boutique neighborhood walk.',
      'We do not partner with brands for product kickbacks; our curation is 100% objective and skin-first.',
      'Cancellation is free up to 48 hours in advance.'
    ],
    meetingPoint: {
      name: 'Apgujeong Rodeo / Seongsu Atelier Lounge',
      subwayStation: 'Apgujeong Rodeo Station (Suin-Bundang Line, Exit 5) or Seongsu Station (Line 2, Exit 3)',
      address: 'Gangnam-gu / Seongdong-gu, Seoul',
      directionsNote: 'Detailed neighborhood lounge address, host phone number, and directions provided upon reservation confirmation.'
    },
    cancellationPolicy: 'Free cancellation up to 48 hours prior to scheduled start. 50% refund within 24 hours.',
    heroImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80'
    ],
    visualStory: [
      {
        stage: 'hero',
        stageNumber: 1,
        stageName: 'Hero Overview',
        sceneTitle: 'Guided Exploration in Seoul Beauty Atelier',
        sceneDescription: 'Traveler and beauty guide exploring Korean skincare together in a beautifully designed beauty store, shelves of elegant skincare products with focus on interaction between people.',
        photoDirection: 'Atmosphere of curiosity, thoughtful discussion, warm natural lighting, and curated discovery.',
        imageUrl: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1600&q=80',
        isPlaceholder: false
      },
      {
        stage: 'activity',
        stageNumber: 2,
        stageName: 'Experience & Activity',
        sceneTitle: 'Korean Pharmacy & Derma-Cosmetics Exploration',
        sceneDescription: 'Exploring active ingredient shelves and clinical-grade formulations in an authentic Korean pharmacy setting.',
        photoDirection: 'Focus on centella, panthenol, and peptide formulations without sterile medical cliches.',
        imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80',
        isPlaceholder: false
      },
      {
        stage: 'interaction',
        stageNumber: 3,
        stageName: 'Human Interaction',
        sceneTitle: 'Decoding Complex Ingredient Formulations',
        sceneDescription: 'Close-up of ingredient discussion & pointing at product labels together with your bilingual guide.',
        photoDirection: 'Engaged, warm dialogue, comparing percentages and understanding skin barrier compatibility.',
        imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
        isPlaceholder: false
      },
      {
        stage: 'detail',
        stageNumber: 4,
        stageName: 'Detail & Texture',
        sceneTitle: 'Testing Viscosities & Ampoule Textures',
        sceneDescription: 'Testing skincare textures on the back of the hand, comparing ampoule viscosities and absorption rates.',
        photoDirection: 'Focus on droplet consistency, fast dewy absorption, and skin finish.',
        imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
        isPlaceholder: false
      },
      {
        stage: 'takeaway',
        stageNumber: 5,
        stageName: 'Result & Takeaway',
        sceneTitle: '“Your NORI Beauty Map” Over Tea',
        sceneDescription: 'Writing and reviewing a personalized skincare map and neighborhood shopping guide over artisan tea.',
        photoDirection: 'Handwritten routine steps, notebook or digital tablet, warm ceramic teacup.',
        imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
        isPlaceholder: false
      }
    ]
  },
  {
    id: 'nori-glow-day',
    slug: 'nori-glow-day',
    title: 'NORI Glow Day',
    headline: 'A full day dedicated to your skin, your routine, and your glow.',
    supportingCopy: 'Learn what works for you, shop with confidence, enjoy a curated beauty experience, and leave with a routine you can actually use at home.',
    category: 'Skincare + Wellness',
    duration: 'Approximately 6–7 Hours',
    format: 'Private Full-Day Experience',
    groupType: 'Private (1–3 guests)',
    groupSize: 'Private (1–3 guests)',
    positioning: 'A full-day K-beauty and wellness experience for guests who want to understand their skin, shop with confidence, enjoy a curated beauty experience, and leave with a complete routine.',
    depthLevel: 'full',
    depthLabel: 'Full-Day Beauty + Wellness Experience',
    shortDescription: 'A complete day dedicated to your skin: in-depth consultation, ingredient class, curated shopping, a restorative beauty & wellness treatment, and your finalized NORI Glow Plan.',
    fullDescription: 'The ultimate immersion into Korean beauty, skin health, and relaxed well-being. Spanning 6 to 7 hours, this comprehensive day brings together an in-depth skincare consultation, an ingredient session tailored to your needs, guided shopping across Olive Young, pharmacies, and niche beauty boutiques, an aesthetic lunch break, a curated non-invasive beauty or wellness ritual (facial hydration care, barrier soothing, or scalp spa), and the finalization of "Your NORI Glow Plan."',
    overview: 'Dedicate a full day in Seoul to feeling rejuvenated, confident, and deeply informed. With your private bilingual beauty concierge, begin with a thorough skincare consultation in an elegant private lounge where you define Today’s Skin Priorities. Gain practical ingredient clarity, then navigate the city’s best skincare destinations with calm discernment. After an unhurried culinary lunch break, unwind in a peaceful aesthetic sanctuary for a curated non-invasive wellness ritual—leaving your barrier restored and glowing without any medical downtime. Finally, synthesize your day over Korean herbal tea into a personalized home care system.',
    startingPrice: 320,
    currency: 'USD',
    priceByGuestCount: [
      { guests: 1, krw: 420000, label: '1 guest: KRW 420,000 (~$320 USD)' },
      { guests: 2, krw: 520000, label: '2 guests: KRW 520,000 (~$400 USD)' },
      { guests: 3, krw: 620000, label: '3 guests: KRW 620,000 (~$475 USD)' },
    ],
    pricingNote: 'Base price includes private guide, comprehensive consultation, ingredient education, shopping guidance, and personalized routine planning. Beauty and wellness treatment fees are charged separately depending on the chosen treatment (facial hydration care, soothing barrier treatment, or scalp therapy).',
    shoppingFramework: {
      title: 'Complete Day Shopping Framework',
      items: [
        { label: 'Core Must-Haves', desc: 'Essential foundation items tailored to your specific skin barrier and climate.', type: 'must' },
        { label: 'Targeted Enhancers', desc: 'Complementary serums, calming masks, and active boosters to rotate into your weekly routine.', type: 'nice' },
        { label: 'Filter & Skip', desc: 'Overly aggressive treatments, redundant actives, and products that do not serve your skin goals.', type: 'skip' }
      ]
    },
    badge: 'Signature Immersion • Full-Day',
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 34,
    skincareProductLine: true,
    highlights: [
      'Private full-day bilingual beauty & wellness concierge throughout (6–7 hours)',
      '60-minute in-depth consultation defining Today’s Skin Priorities (Barrier, Hydration, Tone)',
      '40-minute practical ingredient session tailored to shopping and treatment needs',
      '100-minute curated shopping across Olive Young, pharmacies, and niche Seoul ateliers',
      'Unhurried lunch / beauty break in an aesthetic culinary destination',
      '90-minute restorative Glow Experience (non-invasive facial care, barrier soothing, or scalp spa)',
      'Wrap-up session establishing "Your NORI Glow Plan" with complete home care schedules'
    ],
    timeline: [
      {
        time: '0:00 – 1:00',
        title: 'Personal Skincare Consultation',
        description: 'Begin your morning in a private aesthetic lounge. Review your AM/PM routine, skin history, active ingredients, budget, and desired outcomes. Collaboratively define Today\'s Skin Priorities (e.g. 1. Barrier Fortification, 2. Deep Dermal Hydration, 3. Gentle Tone Clarity).',
        topics: ['AM / PM routine review', 'Skin history & sensitivity review', 'Past product outcomes', 'Budget & desired results', 'Defining Today’s Skin Priorities']
      },
      {
        time: '1:00 – 1:40',
        title: 'Ingredient & Routine Session',
        description: 'Deepen your understanding with a practical, personalized ingredient session. Learn which formulations harmoniously prepare your skin for both daily life and today\'s afternoon wellness experience.',
        topics: ['Active ingredients & hydration science', 'Ingredient pairing safety', 'Tailored product categories', 'Preparation for afternoon treatment']
      },
      {
        time: '1:40 – 3:20',
        title: 'Curated K-Beauty Shopping',
        description: 'Explore Olive Young, Korean pharmacies, and selected skincare ateliers. Your guide explains why each product is or isn\'t necessary, evaluates product overlap, compares value against price, and determines what can wait versus what is a true priority.',
        topics: ['Olive Young shopping navigation', 'Korean pharmacy beauty formulations', 'Boutique brand atelier visit', 'Evaluating overlap vs true priority', 'Immediate on-site tax refund assistance']
      },
      {
        time: '3:20 – 4:00',
        title: 'Lunch / Beauty Break',
        description: 'Enjoy an unhurried break in an aesthetic café or seasonal restaurant. Review your morning discoveries, refresh, and prepare for your afternoon glow ritual.',
        topics: ['Aesthetic lunch experience', 'Morning haul recap', 'Relaxed downtime']
      },
      {
        time: '4:00 – 5:30',
        title: 'The Glow Experience (Curated Beauty & Wellness Ritual)',
        description: 'Relax into a curated non-invasive beauty or wellness session: custom facial hydration care, barrier soothing treatment, scalp wellness ritual, or peaceful herbal spa. Designed for profound relaxation and natural skin radiance without medical downtime.',
        topics: ['Custom non-invasive facial or scalp ritual', 'Skin barrier calming & deep hydration', 'Zero clinical downtime', 'Relaxing tea service']
      },
      {
        time: '5:30 – 6:30 or 7:00',
        title: 'Your NORI Glow Plan Finalization',
        description: 'Gather for a serene closing debrief over Korean herbal tea. Finalize your AM/PM routine, weekly masking schedule, product introduction sequence, and take-home guide so you can maintain your glow with complete confidence.',
        topics: ['Finalizing AM / PM routine', 'Weekly care & masking cadence', 'Stepwise product introduction', 'Delivering "Your NORI Glow Plan"']
      }
    ],
    itinerary: [
      {
        time: '0:00 – 1:00',
        title: 'Personal Skincare Consultation',
        description: 'Begin your morning in a private aesthetic lounge. Review your AM/PM routine, skin history, active ingredients, budget, and desired outcomes. Collaboratively define Today\'s Skin Priorities (e.g. 1. Barrier Fortification, 2. Deep Dermal Hydration, 3. Gentle Tone Clarity).',
        topics: ['AM / PM routine review', 'Skin history & sensitivity review', 'Past product outcomes', 'Budget & desired results', 'Defining Today’s Skin Priorities']
      },
      {
        time: '1:00 – 1:40',
        title: 'Ingredient & Routine Session',
        description: 'Deepen your understanding with a practical, personalized ingredient session. Learn which formulations harmoniously prepare your skin for both daily life and today\'s afternoon wellness experience.',
        topics: ['Active ingredients & hydration science', 'Ingredient pairing safety', 'Tailored product categories', 'Preparation for afternoon treatment']
      },
      {
        time: '1:40 – 3:20',
        title: 'Curated K-Beauty Shopping',
        description: 'Explore Olive Young, Korean pharmacies, and selected skincare ateliers. Your guide explains why each product is or isn\'t necessary, evaluates product overlap, compares value against price, and determines what can wait versus what is a true priority.',
        topics: ['Olive Young shopping navigation', 'Korean pharmacy beauty formulations', 'Boutique brand atelier visit', 'Evaluating overlap vs true priority', 'Immediate on-site tax refund assistance']
      },
      {
        time: '3:20 – 4:00',
        title: 'Lunch / Beauty Break',
        description: 'Enjoy an unhurried break in an aesthetic café or seasonal restaurant. Review your morning discoveries, refresh, and prepare for your afternoon glow ritual.',
        topics: ['Aesthetic lunch experience', 'Morning haul recap', 'Relaxed downtime']
      },
      {
        time: '4:00 – 5:30',
        title: 'The Glow Experience (Curated Beauty & Wellness Ritual)',
        description: 'Relax into a curated non-invasive beauty or wellness session: custom facial hydration care, barrier soothing treatment, scalp wellness ritual, or peaceful herbal spa. Designed for profound relaxation and natural skin radiance without medical downtime.',
        topics: ['Custom non-invasive facial or scalp ritual', 'Skin barrier calming & deep hydration', 'Zero clinical downtime', 'Relaxing tea service']
      },
      {
        time: '5:30 – 6:30 or 7:00',
        title: 'Your NORI Glow Plan Finalization',
        description: 'Gather for a serene closing debrief over Korean herbal tea. Finalize your AM/PM routine, weekly masking schedule, product introduction sequence, and take-home guide so you can maintain your glow with complete confidence.',
        topics: ['Finalizing AM / PM routine', 'Weekly care & masking cadence', 'Stepwise product introduction', 'Delivering "Your NORI Glow Plan"']
      }
    ],
    included: [
      'Dedicated licensed bilingual beauty guide throughout the entire day (6–7 hours)',
      'Comprehensive 60-minute personal skincare consultation',
      'Customized 40-minute ingredient & routine education session',
      '100-minute curated shopping guidance (Olive Young, pharmacy, and boutique brand ateliers)',
      'Artisan teas, refreshments, and café beverages',
      'Personalized "Your NORI Glow Plan" digital and keepsake guide',
      'Immediate tax refund assistance and shopping coordination'
    ],
    excluded: [
      'Cost of retail skincare purchases',
      'Lunch meal costs (arranged according to your dietary preferences)',
      'Selected wellness/facial treatment fee (billed transparently at venue depending on treatment chosen)',
      'Invasive medical clinic procedures or injectables (NORI is strictly focused on non-medical wellness & skincare)'
    ],
    notIncluded: [
      'Cost of retail skincare purchases',
      'Lunch meal costs (arranged according to your dietary preferences)',
      'Selected wellness/facial treatment fee (billed transparently at venue depending on treatment chosen)',
      'Invasive medical clinic procedures or injectables (NORI is strictly focused on non-medical wellness & skincare)'
    ],
    deliverables: {
      title: 'Your NORI Glow Plan',
      subtitle: 'Complete personal guide to lasting skin health and ritual care',
      items: [
        'Defined Skin Priorities & Barrier Health Assessment',
        'Curated Shopping Shortlist & Purchase Rationale',
        'Comprehensive AM / PM Step-by-Step Regimen',
        'Weekly Glow Schedule (exfoliation cadence, sheet masking, soothing treatments)',
        'Stepwise Introduction Timeline for New Products',
        'Cabinet Audit: What to finish before introducing newly purchased products',
        'Simple Ingredient Synergies & Combinations to Avoid'
      ]
    },
    importantNotes: [
      'The Glow Experience consists of non-invasive beauty, facial hydration, or scalp wellness treatments. We strictly avoid clinical downtime procedures.',
      'Treatment choice can be customized in advance to match your comfort: facial hydration, barrier recovery, or restorative scalp therapy.',
      'Base fee covers the complete private guidance, consultation, classes, and planning. Treatment fees are settled directly on-site.',
      'Free cancellation up to 72 hours prior to scheduled date.'
    ],
    importantInfo: [
      'The Glow Experience consists of non-invasive beauty, facial hydration, or scalp wellness treatments. We strictly avoid clinical downtime procedures.',
      'Treatment choice can be customized in advance to match your comfort: facial hydration, barrier recovery, or restorative scalp therapy.',
      'Base fee covers the complete private guidance, consultation, classes, and planning. Treatment fees are settled directly on-site.',
      'Free cancellation up to 72 hours prior to scheduled date.'
    ],
    meetingPoint: {
      name: 'Cheongdam-dong / Apgujeong Private Lounge',
      subwayStation: 'Apgujeong Rodeo Station (Suin-Bundang Line, Exit 3) or Cheongdam Station (Line 7, Exit 8)',
      address: 'Cheongdam-dong, Gangnam-gu, Seoul',
      directionsNote: 'Private lounge location, host contact number, and concierge notes are provided upon booking confirmation.'
    },
    cancellationPolicy: 'Free cancellation up to 72 hours prior to scheduled start. 50% refund within 48 hours.',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80'
    ],
    visualStory: [
      {
        stage: 'hero',
        stageNumber: 1,
        stageName: 'Hero Overview',
        sceneTitle: 'Restorative Korean Beauty Sanctuary Experience',
        sceneDescription: 'Sophisticated Korean beauty and wellness setting where the traveler looks relaxed, deeply cared for, and radiant. Non-medical, non-invasive, serene atmosphere.',
        photoDirection: 'Warm ambient lighting, calm posture, authentic sense of gentle personal rejuvenation.',
        imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80',
        isPlaceholder: false
      },
      {
        stage: 'activity',
        stageNumber: 2,
        stageName: 'Experience & Activity',
        sceneTitle: 'Calming Facial Hydration & Scalp Wellness Care',
        sceneDescription: 'Restorative non-clinical facial hydration or calming scalp care ritual with soft aesthetic towels and gentle botanical mists.',
        photoDirection: 'Serene, sensory, slow beauty pace. Focus on relaxation and skin nourishment.',
        imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        isPlaceholder: false
      },
      {
        stage: 'interaction',
        stageNumber: 3,
        stageName: 'Human Interaction',
        sceneTitle: 'Attentive Guidance & Mindful Consultation',
        sceneDescription: 'Attentive aesthetician and private host tailoring the care program directly to current barrier fatigue.',
        photoDirection: 'Gentle, respectful, highly personalized care and thoughtful listening.',
        imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
        isPlaceholder: false
      },
      {
        stage: 'detail',
        stageNumber: 4,
        stageName: 'Detail & Texture',
        sceneTitle: 'Organic Linens, Herbal Infusion & Gentle Essences',
        sceneDescription: 'Soft waffle-weave linens, hand-brewed botanical tea, hydrating ampoule droplets, and soothing mist.',
        photoDirection: 'Tactile luxury, warm muted earth tones, delicate water droplets and glass texture.',
        imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
        isPlaceholder: false
      },
      {
        stage: 'takeaway',
        stageNumber: 5,
        stageName: 'Result & Takeaway',
        sceneTitle: '“Your NORI Glow Plan” Cafe Debrief',
        sceneDescription: 'Relaxed afternoon beauty break in a quiet Seoul cafe, reviewing the finalized comprehensive NORI Glow Plan.',
        photoDirection: 'Reflects “A full day dedicated to me and my glow.” Feeling unhurried, glowing, and confident.',
        imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
        isPlaceholder: false
      }
    ]
  },
  {
    id: 'cheongdam-glass-skin',
    slug: 'cheongdam-glass-skin-ritual',
    title: 'Cheongdam Glass Skin & Clinical Facial Ritual',
    category: 'Beauty',
    duration: '4.5 Hours',
    startingPrice: 280,
    currency: 'USD',
    groupSize: 'Max 4 guests (Boutique)',
    badge: 'Signature Experience',
    isFeatured: true,
    rating: 4.98,
    reviewsCount: 142,
    shortDescription: 'An exclusive dermatological immersion in Seoul\'s premier aesthetic district, featuring 3D digital skin diagnostics and custom peptide infusion.',
    overview: 'Step beyond the velvet curtains of Cheongdam-dong, the epicenter of Korean celebrity beauty. Under the guidance of our certified English-speaking aesthetician host, you will undergo an advanced 3D skin analysis followed by a customized non-invasive glass skin facial using medical-grade sonophoresis, salmon PDRN, and cryo-calming therapy. Conclude with a private shopping edit of clinical-exclusive skincare unavailable in standard stores.',
    highlights: [
      'High-precision multi-spectral skin barrier and collagen density mapping',
      '90-minute bespoke facial treatment by licensed Cheongdam dermo-practitioners',
      'Sterile needle-free PDRN (salmon DNA) and triple hyaluronic acid mist infusion',
      'Personalized post-treatment routine review with custom formulation recommendations',
      'Private car transfer between Cheongdam aesthetic atelier and tea salon'
    ],
    itinerary: [
      {
        time: '13:00 - 13:30',
        title: 'Welcome & Holistic Consultation at Private Lounge',
        description: 'Meet your bilingual beauty curator over warm fermented omija tea. Review personal skin sensitivities, current routine, and wellness goals.'
      },
      {
        time: '13:30 - 14:15',
        title: 'Digital 3D Facial Skin Imaging & Analysis',
        description: 'Undergo precision skin topography scanning to analyze deep hydration, pore elasticity, sebum balance, and biological barrier resilience.'
      },
      {
        time: '14:15 - 15:45',
        title: 'The Signature Glass Skin Dermo-Treatment',
        description: 'Relax in a private VIP treatment suite. Experience double botanical cleansing, ultrasound exfoliation, deep PDRN ampoule infusion, LED red-light synthesis, and a cold modeling mask.'
      },
      {
        time: '15:45 - 16:30',
        title: 'Post-Care Debrief & VIP Atelier Skincare Curation',
        description: 'Receive a personalized bilingual skin report. Explore specialist-formulated serums, barrier balms, and mineral sun blocks with our guide.'
      },
      {
        time: '16:30 - 17:30',
        title: 'Aesthetic Tea Pairing in Dosan Park',
        description: 'Conclude with organic collagen jelly bites and ceremonial lotus tea in a tranquil aesthetic cafe overlooking Dosan Park.'
      }
    ],
    included: [
      'Dedicated licensed English-speaking beauty curator throughout',
      'Full 3D computerized skin assessment report',
      '90-minute medical-grade facial treatment at an accredited clinic',
      'Complimentary full-size customized soothing recovery ampoule ($65 value)',
      'VIP lounge access, artisan teas, and seasonal refreshments',
      'Immediate 10% tax refund assistance on clinic purchases'
    ],
    notIncluded: [
      'Invasive medical procedures (e.g. injectables, laser resurfacing)',
      'Optional take-home clinic retail products',
      'Gratuities for spa therapists (discretionary)'
    ],
    meetingPoint: {
      name: 'Apgujeong Rodeo Station (Suin-Bundang Line)',
      subwayStation: 'Exit 3 (Ground Level plaza beside Galleria Luxury Hall)',
      address: '407 Apgujeong-ro, Gangnam-gu, Seoul',
      directionsNote: 'Your NORI host will be waiting holding a discrete NORI linen travel pouch. Detailed WhatsApp directions sent 24h prior.'
    },
    importantInfo: [
      'Please arrive with minimal or no makeup if possible; full cleansing is provided on-site.',
      'Notify your guide of any active skin allergies, recent retinol use, or pregnancy.',
      'No recovery downtime is required for this treatment; you will leave glowing and camera-ready.'
    ],
    cancellationPolicy: 'Full refund up to 72 hours prior to scheduled departure. 50% refund up to 24 hours prior.',
    heroImage: 'https://images.unsplash.com/photo-1629732047847-50219e9c5aef?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1629732047847-50219e9c5aef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'personal-color-kbeauty-styling',
    slug: 'personal-color-kbeauty-styling',
    title: 'NORI Color & Makeup Play',
    headline: 'Discover your colors. Explore K-beauty. Shop what suits you.',
    supportingCopy: 'Discover your colors, explore K-beauty, and shop what suits you with certified personal color draping, cosmetics bag audit, and shade-matched boutique shopping.',
    category: 'Makeup',
    duration: '3.5 Hours',
    startingPrice: 220,
    currency: 'USD',
    groupType: 'Private (1–3 guests)',
    groupSize: 'Max 3 guests',
    badge: 'Boutique Color Play',
    isFeatured: true,
    rating: 4.96,
    reviewsCount: 118,
    positioning: 'Discover your colors. Explore K-beauty. Shop what suits you.',
    shortDescription: 'Discover your colors, explore K-beauty, and shop what suits you with certified personal color draping, cosmetics bag audit, and shade-matched boutique shopping.',
    overview: 'Experience the viral phenomenon that transformed Korean beauty culture. Guided by certified KS-standard color consultants, you will be draped with over 140 calibrated fabric swatches under clinical lighting to uncover your exact season, undertone, and contrast type (Spring Warm, Summer Cool, Autumn Muted, Winter Deep). Following your diagnosis, your stylist audits your personal cosmetics bag, guides a personalized K-beauty look, and escorts you to select your perfect lip tint and foundation shades.',
    highlights: [
      'Comprehensive 140+ swatch personal color draping under 5000K neutral light',
      'Detailed face tone, hair, iris, and lip saturation harmonic analysis',
      'Cosmetics pouch audit: identifying what harmonizes vs. clashes in your current bag',
      'Curated swatch-matching session at a nearby curated K-beauty boutique',
      'Physical seasonal color swatch card & digital color swatch guide to keep'
    ],
    priceByGuestCount: [
      { guests: 1, krw: 290000, usd: 220, label: '1 Guest (Solo Private)' },
      { guests: 2, krw: 480000, usd: 370, label: '2 Guests (Duo Session)' },
      { guests: 3, krw: 630000, usd: 485, label: '3 Guests (Trio Session)' }
    ],
    deliverables: {
      title: 'Your Personal Color Swatch Portfolio',
      subtitle: 'Physical fabric card + digital color palette to keep',
      items: [
        'Physical seasonal fabric swatch card booklet',
        'Digital palette for hair, jewelry, and wardrobe matching',
        'Cosmetics pouch audit assessment checklist',
        'Curated lip tint, blush & cushion shade code recommendations'
      ]
    },
    itinerary: [
      {
        time: '10:00 - 10:30',
        title: 'Color Science Introduction & Skin Tone Measurement',
        description: 'Understand the Korean 12-season sub-system over fresh yuzu tea. Test baseline pigment and skin undertones.'
      },
      {
        time: '10:30 - 12:00',
        title: 'Precision Fabric Draping Diagnostic',
        description: 'Discover your best and worst tones across hue, brightness, and chroma. Learn how specific shades instantly lift shadows and brighten your complexion.'
      },
      {
        time: '12:00 - 12:45',
        title: 'Pouch Audit & Color-Matched Makeup Formulation',
        description: 'Examine your current cosmetics under expert eyes. Test Korean cushions, eyeshadow palettes, and lip velvets custom to your season.'
      },
      {
        time: '12:45 - 13:30',
        title: 'Guided Flagship Shopping Walk',
        description: 'Walk with your guide to test exact shade numbers at nearby beauty flagships with zero guesswork.'
      }
    ],
    included: [
      'Certified Korean Personal Color Consultant session (1-on-1 focus)',
      'Bilingual English interpretation throughout the session',
      'Physical fabric swatch card booklet to keep',
      'Digital swatch guide with jewelry metal and hair color recommendations',
      'Sample gift kit with seasonal lip tint recommendation'
    ],
    notIncluded: [
      'Purchased cosmetic products during shopping walk',
      'Transportation to and from studio'
    ],
    meetingPoint: {
      name: 'Gangnam Station (Line 2 & Shinbundang)',
      subwayStation: 'Exit 11',
      address: '396 Gangnam-daero, Gangnam-gu, Seoul',
      directionsNote: 'Meet right outside the entrance of Exit 11 near the glass canopy. Your guide will carry a NORI emblem.'
    },
    importantInfo: [
      'Please wear no colored contact lenses (clear lenses only).',
      'Wear neutral, comfortable clothing; avoid bright turtlenecks if possible.',
      'Bring your daily makeup bag and foundation bottles for direct auditing.'
    ],
    cancellationPolicy: 'Free cancellation up to 48 hours in advance. No refund within 24 hours due to studio booking reservations.',
    heroImage: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=1200&q=80'
    ],
    visualStory: [
      {
        stage: 'hero',
        stageNumber: 1,
        stageName: 'Hero Overview',
        sceneTitle: 'Professional Personal Color Draping Studio',
        sceneDescription: 'Professional personal color experience with beautiful seasonal color drapes and calibrated neutral studio light around an international traveler.',
        photoDirection: 'Atmosphere is sophisticated, illuminating, and fun. Clear optical differences when drapes are placed against the neckline.',
        imageUrl: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1600&q=80',
        isPlaceholder: false
      },
      {
        stage: 'activity',
        stageNumber: 2,
        stageName: 'Experience & Activity',
        sceneTitle: 'Lipstick & Blush Tone Evaluation Under Daylight',
        sceneDescription: 'Testing warm vs. cool lip velvets and comparing undertones against the guest’s seasonal palette.',
        photoDirection: 'Active swatch comparisons on paper and arm, testing tonal harmonization.',
        imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80',
        isPlaceholder: false
      },
      {
        stage: 'interaction',
        stageNumber: 3,
        stageName: 'Human Interaction',
        sceneTitle: 'Mirror Reflections & Facial Contrast Analysis',
        sceneDescription: 'Stylist analyzing facial contrast, undertone reactions, and natural eye iris pigment in a studio mirror.',
        photoDirection: 'Direct mirror eye contact, focused guidance, warm reassuring expressions.',
        imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
        isPlaceholder: false
      },
      {
        stage: 'detail',
        stageNumber: 4,
        stageName: 'Detail & Texture',
        sceneTitle: 'Seasonal Color Swatch Cards & Palette Formulations',
        sceneDescription: 'Close-up of calibrated seasonal fabric swatch fans, color spectrum cards, and Korean blush textures.',
        photoDirection: 'Vibrant yet refined color display, rich textures, and clear tonal groupings.',
        imageUrl: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1200&q=80',
        isPlaceholder: false
      },
      {
        stage: 'takeaway',
        stageNumber: 5,
        stageName: 'Result & Takeaway',
        sceneTitle: '“Your Seasonal Color Kit” & Pouch Audit',
        sceneDescription: 'Cosmetics pouch audit results and guided shopping walk for certified season-matched cushion and lip tint.',
        photoDirection: 'Reinforces the core message: “Discover your colors. Play with K-beauty.”',
        imageUrl: 'https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=1200&q=80',
        isPlaceholder: false
      }
    ]
  },
  {
    id: 'nori-makeup-studio-journey',
    slug: 'nori-makeup-studio-journey',
    title: 'NORI Makeup Studio Journey',
    highlightLine: 'Half by the artist. Half by you.',
    heroHeadline: 'Half by the artist. Half by you.',
    supportingHeadline: 'Learn your look. Make it your own.',
    supportingCopy: 'A professional makeup artist creates one side of your look, then guides you as you recreate the other side yourself. This experience is designed to help you understand the techniques, products, colors, and steps behind a Korean-inspired makeup look — so you can recreate it with confidence even after you return home.',
    coreMessage: 'Don’t just wear the look. Learn how to create it.',
    category: 'Makeup',
    duration: '5–6 Hours',
    format: 'Premium private curated makeup experience',
    groupType: 'Private 1-on-1 or Duo',
    groupSize: '1–2 guests',
    positioning: 'A premium K-beauty makeup journey where guests first discover what suits them, then learn directly from a professional makeup artist, practice the look themselves, and finally shop for products they can use at home.',
    shortDescription: 'Discover your colors, learn a Korean-inspired makeup look from a professional artist, practice it yourself, and shop the products to recreate it at home.',
    overview: 'The NORI Makeup Studio Journey is a signature educational beauty experience centered on hands-on creation: "Half by the artist. Half by you." Rather than a passive makeover where you leave with a look you cannot duplicate tomorrow, our professional makeup artist guides you through discovery, demonstration, and hands-on practice. The artist creates one half of your face, explaining the nuances of Korean base preparation, brow symmetry, and natural gradient lips. Then you take the brush and complete the other side with step-by-step coaching. Following the lesson, your bilingual NORI curator helps you shop for the exact tools and shades needed to recreate your look at home, guided by our transparent, zero-pressure shopping philosophy.',
    fullDescription: 'Designed for international travelers who want more than a temporary transformation, the NORI Makeup Studio Journey bridges the gap between expert Seoul technique and your everyday routine. Through our signature 4-step framework—Personal Color Experience, Professional Makeup Lesson ("Half by the artist. Half by you."), Curated Makeup Shopping, and Final Makeup Review—you uncover what suits your face, build real muscle memory, and take home "Your NORI Makeup Guide."',
    badge: 'Hands-on Learning Atelier • 5–6 Hours',
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 38,
    startingPrice: 0,
    currency: 'USD',
    priceDisplay: 'Price coming soon',
    pricingNote: 'Private atelier reservation. Pricing and seasonal booking calendar announced periodically.',
    ctaText: 'View Experience',
    makeupProductLine: true,
    shoppingFramework: {
      title: 'Lesson-Connected Shopping Framework',
      items: [
        { label: 'Look Recreators (Must-Have)', desc: 'The exact base cushion, brush angle, or lip shade essential to recreate your half-and-half look at home.', type: 'must' },
        { label: 'Technique Enhancers (Nice-to-Have)', desc: 'Palette shades or texture tools that make morning application faster or more versatile.', type: 'nice' },
        { label: 'Skip for Now (Zero Clutter)', desc: 'Overlapping products you already own or gimmicky steps you do not need in your daily routine.', type: 'skip' }
      ]
    },
    lessonTopics: [
      'Korean base makeup & glass skin finish',
      'Micro-layering & skin texture prep',
      'Natural straight or soft arched brow styling',
      'Eye makeup & tightline eyeliner blending',
      'Mascara application & lash curl geometry',
      'Blush placement & subtle cheek glow',
      'Gradient & velvet lip application',
      'Proper makeup order & brush angles'
    ],
    shoppingCategories: [
      'Cushion / foundation shade matching',
      'Targeted concealer & color corrector',
      'Brow pencils & brow fixers',
      'Eye shadow palettes & liners',
      'Waterproof & tubing mascaras',
      'Blush & natural highlighters',
      'Korean lip tints & velvets'
    ],
    deliverables: {
      title: 'Your NORI Makeup Guide',
      subtitle: 'Comprehensive personalized post-experience reference',
      items: [
        'Your personal color direction and harmonic seasonal palette',
        'Your custom Korean-inspired makeup look blueprint',
        'Step-by-step application routine and technique order',
        'Complete list of professional products used by the artist',
        'Summary of purchased products, shade codes & finishes',
        'Recommended shade matches and suggested alternatives',
        'Simple Korean makeup tips to recreate the look effortlessly at home'
      ]
    },
    highlights: [
      'Personal Color Experience: Professional partner consultation identifying warm/cool undertones, lip shades, and base direction',
      'Professional Makeup Lesson (Centerpiece): "Half by the artist. Half by you." — artist creates one half, you recreate the other with real-time coaching',
      'Hands-On Learning: "Watch it. Try it. Make it yours." — master Korean skin finish, straight brows, eyeliner, and gradient lips',
      'Curated Makeup Shopping: Escorted shopping connecting every recommendation directly back to your makeup lesson',
      'Honest Shopping Philosophy: No store commissions or forced sales — buy only what you will genuinely use at home',
      'Post-Experience Deliverable: Receive "Your NORI Makeup Guide" with personalized steps, products, and shade references'
    ],
    itinerary: [
      {
        time: 'Hour 1.0 - 1.5',
        title: '1. Personal Color Experience',
        description: 'Begin with a professional personal color consultation conducted by our certified partner atelier. NORI coordinates the diagnostic session to identify your warm/cool direction, most flattering lip shades, blush colors, eye makeup colors, base makeup direction, and overall palette. Use the result as the creative foundation for the entire studio session.'
      },
      {
        time: 'Hour 1.5 - 3.5',
        title: '2. Professional Makeup Lesson: "Half by the artist. Half by you."',
        description: 'The centerpiece of your journey. A professional makeup artist creates one side of your face while demonstrating Korean techniques. Then, under patient 1-on-1 coaching, you complete the other side yourself. Learn Korean base prep, brows, tightline eyeliner, blush placement, and gradient lip layering. Watch it. Try it. Make it yours.',
        topics: [
          'Korean base makeup & glass finish',
          'Micro-layering & skin texture prep',
          'Natural brow geometry',
          'Eye makeup & eyeliner blending',
          'Mascara & lash lifting',
          'Blush placement & subtle glow',
          'Gradient & velvet lip application',
          'Proper makeup order & brush angles'
        ]
      },
      {
        time: 'Hour 3.5 - 4.5',
        title: '3. Curated Makeup Shopping',
        description: 'Step into Seoul’s finest beauty flagships with your bilingual NORI curator. Every shopping recommendation connects directly back to your makeup lesson: "You learned this base technique — here are products that can help you recreate it at home." Completely honest, anti-overwhelm guidance with zero store commissions.',
        topics: [
          'Cushion / foundation matching',
          'Targeted concealer & corrector',
          'Brow pencils & brow fixers',
          'Eye shadow palettes & liners',
          'Waterproof & tubing mascaras',
          'Blush & natural highlighters',
          'Korean lip tints & velvets'
        ]
      },
      {
        time: 'Hour 4.5 - 5.5',
        title: '4. Final Makeup Review & Tea',
        description: 'Unwind at a quiet aesthetic tea lounge to review your personal color direction, makeup style, steps learned, products used by the artist, and products purchased. Finalize your customized post-experience deliverable: "Your NORI Makeup Guide".'
      }
    ],
    included: [
      'Certified partner Personal Color Consultation & draping analysis',
      'Private 1-on-1 / Duo Professional Makeup Lesson with seasoned K-beauty artist',
      'All in-studio professional cosmetics, tools, and skin prep during lesson',
      'Bilingual NORI beauty curator interpretation and hands-on assistance',
      'Curated shopping escort with lesson-connected product recommendations',
      'Traditional Korean tea and seasonal refreshments at concluding review lounge',
      'Personalized digital takeaway: "Your NORI Makeup Guide"'
    ],
    notIncluded: [
      'Purchased cosmetic products during shopping (you choose what to buy)',
      'Transportation between your hotel and studio atelier'
    ],
    meetingPoint: {
      name: 'Cheongdam Beauty Atelier District',
      subwayStation: 'Apgujeong Rodeo Station (Suin-Bundang Line)',
      address: '82-3 Cheongdam-dong, Gangnam-gu, Seoul',
      directionsNote: 'Exit 3. Your NORI bilingual curator greets you in the private salon lounge with seasonal yuzu refreshments.'
    },
    importantNotes: [
      'Please arrive bare-faced (moisturizer only). Professional skin prep will be conducted in studio.',
      'Avoid wearing colored contact lenses so your natural iris pigment can be accurately evaluated.',
      'Wear a comfortable, open-collar top (or neutral clothing) for optimal color drape reading.',
      'Bring your current cosmetic bag if you wish to cross-reference with newly learned techniques.'
    ],
    importantInfo: [
      'Please arrive bare-faced (moisturizer only). Professional skin prep will be conducted in studio.',
      'Avoid wearing colored contact lenses so your natural iris pigment can be accurately evaluated.',
      'Wear a comfortable, open-collar top (or neutral clothing) for optimal color drape reading.',
      'Bring your current cosmetic bag if you wish to cross-reference with newly learned techniques.'
    ],
    cancellationPolicy: 'Free cancellation up to 72 hours before your scheduled session. 50% refund up to 48 hours prior.',
    heroImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80'
    ],
    visualStory: [
      {
        stage: 'hero',
        stageNumber: 1,
        stageName: 'Hero Overview',
        sceneTitle: 'Private Korean Makeup Studio Masterclass',
        sceneDescription: 'International female traveler seated in an elegant Korean makeup atelier with a professional makeup artist. The artist applies makeup to one side of the face while the guest looks closely into the mirror.',
        photoDirection: 'Atmosphere is professional, encouraging, warm, and focused on technique rather than a passive makeover.',
        imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1600&q=80',
        isPlaceholder: false
      },
      {
        stage: 'activity',
        stageNumber: 2,
        stageName: 'Experience & Activity',
        sceneTitle: '“Half by the Artist. Half by You.” Practice',
        sceneDescription: 'Centerpiece signature moment: Guest holding a vanity mirror and practicing the look herself under the artist’s direct, encouraging guidance.',
        photoDirection: 'Guest holding the brush, genuine focus, slight smile of accomplishment, hands-on learning.',
        imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
        isPlaceholder: false
      },
      {
        stage: 'interaction',
        stageNumber: 3,
        stageName: 'Human Interaction',
        sceneTitle: 'Guiding Brush Angles & Cushion Placement',
        sceneDescription: 'Artist gently guiding the guest’s hand, demonstrating micro-tap pressure, blend angles, and straight Korean brow geometry.',
        photoDirection: 'Close-up of gentle hands guiding brush movement, mutual focus, professional warmth.',
        imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
        isPlaceholder: false
      },
      {
        stage: 'detail',
        stageNumber: 4,
        stageName: 'Detail & Texture',
        sceneTitle: 'Atelier Tools, Cushion Micro-Layers & Lip Velvet',
        sceneDescription: 'Close-up of Korean cushion puffs, fine synthetic detail brushes, soft muted blush, and gradient lip tint in natural use.',
        photoDirection: 'Macro focus on cosmetic textures, clean metallic ferrule, and delicate skin finish.',
        imageUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80',
        isPlaceholder: false
      },
      {
        stage: 'takeaway',
        stageNumber: 5,
        stageName: 'Result & Takeaway',
        sceneTitle: 'Curated Shade Matching & “Your NORI Makeup Guide”',
        sceneDescription: 'Guided shopping for the exact products and tools learned during the lesson, followed by reviewing the illustrated NORI Makeup Guide over tea.',
        photoDirection: 'Reinforces the core message: “Don’t just wear the look. Learn how to create it.”',
        imageUrl: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80',
        isPlaceholder: false
      }
    ]
  },
  {
    id: 'nori-complete-glow-journey',
    slug: 'nori-complete-glow-journey',
    title: 'NORI Complete Glow Journey',
    headline: 'Three days. One beauty journey, entirely your own.',
    heroHeadline: 'Three days. One beauty journey, entirely your own.',
    supportingCopy: 'Understand your skin. Discover your colors. Learn your look. Take your glow home.',
    supportingHeadline: 'A three-day K-beauty journey designed around you — from skincare and personal color to hands-on makeup, curated shopping, and your own complete beauty routine.',
    coreMessage: 'You don’t leave with more products. You leave knowing what works for you.',
    highlightLine: 'Understand your skin. Discover your colors. Learn your look. Take your glow home.',
    ctaText: 'Discover the Complete Glow Journey',
    category: 'Skincare + Makeup + Wellness',
    duration: '3 Days',
    format: 'Private Signature Beauty Journey',
    groupType: 'Private (1–3 guests)',
    groupSize: 'Private (1–3 guests)',
    positioning: 'NORI TOUR’s most complete beauty experience, designed for guests seeking comprehensive skincare understanding, personal color diagnosis, hands-on professional makeup mastery, curated shopping, wellness, and their own complete takeaway routine.',
    signatureExperience: true,
    isFeatured: true,
    badge: 'Signature Experience • 3 Days',
    depthLabel: 'Flagship Signature • 3 Days',
    depthLevel: 'full',
    startingPrice: 0,
    currency: 'USD',
    priceDisplay: 'Price on Request',
    pricingNote: 'Private 3-day guided beauty journey. Custom quote based on guest count, partner studio curation, and wellness selections. Accommodation is not included by default (guests stay at their own hotel and meet NORI daily).',
    accommodationNote: 'Accommodation is NOT included by default. This is a 3-day guided beauty experience where guests stay at their own hotel and meet NORI for scheduled experiences each day. This unhurried rhythm allows you to select the hotel, district, and atmosphere that best fits your personal travel style.',
    rating: 5.0,
    reviewsCount: 38,
    shortDescription: 'A complete three-day K-beauty journey combining personalized skincare guidance, professional personal color, hands-on makeup learning, curated shopping, wellness, and your own final NORI Glow Book.',
    fullDescription: 'The pinnacle NORI experience designed for travelers who want more than a brief beauty tour. Over three unhurried days, immerse yourself in Seoul’s beauty philosophy. Day 1 focuses on intimate skincare auditing, barrier education, and honest shopping. Day 2 unlocks your personal colors with an accredited partner studio and features our signature hands-on makeup atelier ("Half by the artist. Half by you."). Day 3 brings non-medical restorative wellness, playful K-beauty lifestyle exploration, and your concluding salon session to craft "Your NORI Glow Book." You don’t leave with more products. You leave knowing what works for you.',
    overview: 'A bespoke three-day immersion connecting every dimension of Seoul beauty. Designed around your skin type, facial features, budget, and daily life back home. Each day balances focused private education with relaxed boutique discovery, zero-commission shopping navigation, and mindful pauses. Guests stay at their chosen hotel in Seoul and meet their dedicated bilingual NORI curator for scheduled morning, midday, and afternoon sessions.',
    highlights: [
      '3-Day comprehensive private journey combining skincare, personal color, makeup atelier & wellness',
      'Day 1: In-depth skincare consultation, barrier education & curated shopping (Olive Young, pharmacies, flagships)',
      'Day 2: Professional personal color consultation with accredited partner studio & pouch audit',
      'Day 2: Signature 1-on-1 makeup lesson: "Half by the artist. Half by you." hands-on masterclass',
      'Day 2: Lesson-connected cosmetic shopping matching your newly mastered look',
      'Day 3: Restorative non-medical aesthetic facial care or scalp wellness treatment',
      'Day 3: K-beauty lifestyle & sensory play (놀이) across iconic design flagships',
      'Day 3 Deliverable: Presentation of "Your NORI Glow Book" (complete digital beauty roadmap)',
      'Zero-commission, honest shopping navigation: only what serves your real daily routine'
    ],
    days: [
      {
        dayNumber: 1,
        dayTitle: 'Know Your Skin',
        dayTheme: 'Skincare Understanding & Curated Product Selection',
        headline: 'Day 1 — Know Your Skin.',
        supportingLine: 'Understand what your skin actually needs before you start shopping.',
        description: 'Begin your journey with an intimate consultation decoding your skin history, active ingredients, and true priorities, followed by guided, honest skincare shopping across Seoul.',
        activities: [
          {
            timeOfDay: 'Morning',
            title: 'Personal Skincare Consultation & Ingredient Education',
            subtitle: 'Define Your 2–3 Core Priorities (Hydration, Barrier Support, Pigmentation, Texture, Sensitivity, or Glow)',
            description: 'Sit down over warm Korean tea to examine your current AM & PM routine, skincare concerns, past product successes and irritations, preferred textures, and beauty budget. Learn the vital difference between hydration and moisturization, when active ingredients overlap, and how to categorize products into Must Have, Worth Trying, and Skip for Now.',
            highlights: [
              'Audit of current AM & PM routine and active ingredients in use',
              'Review of past irritations, texture preferences, and realistic goals',
              'Define 2–3 primary skincare priorities (e.g., Barrier Support & Hydration)',
              'Ingredient education: Centella, Ceramides, PDRN, Niacinamide, AHA/BHA balance',
              'Establish your day-one Shopping Priority: Must Have, Worth Trying, Skip for Now'
            ]
          },
          {
            timeOfDay: 'Afternoon',
            title: 'Curated Skincare Shopping Walk',
            subtitle: 'Olive Young Flagship, Korean Pharmacies & Selected Brand Boutiques',
            description: 'Step into Seoul’s best beauty destinations with your NORI bilingual guide. Compare formulations on the shelf, understand ingredient percentages, and avoid duplicate purchases. Shop with total freedom—never guided by sales commissions or social media hype.',
            highlights: [
              'Side-by-side formulation comparison at major flagships and quiet neighborhood apothecaries',
              'Dermatological Korean pharmacy visit for soothing barrier creams and targeted treatments',
              'Zero-commission guidance focused strictly on your routine rather than viral hype',
              'Formulate your temporary Day 1 skincare plan to test tonight'
            ]
          }
        ],
        deliverables: 'Temporary Day 1 Skincare Plan (to be finalized on Day 3)'
      },
      {
        dayNumber: 2,
        dayTitle: 'Find Your Colors. Learn Your Look.',
        dayTheme: 'Personal Color Analysis & Hands-on Professional Makeup Lesson',
        headline: 'Day 2 — Find Your Colors. Learn Your Look.',
        supportingLine: 'Don’t just wear the look. Learn how to create it.',
        description: 'Discover your authentic seasonal palette with our accredited partner studio, followed by our signature mirror-based makeup atelier and lesson-connected cosmetic shopping.',
        activities: [
          {
            timeOfDay: 'Morning',
            title: 'Professional Personal Color Consultation',
            subtitle: 'Conducted by Our Certified Partner Color Studio',
            description: 'Begin with an accredited personal color diagnostic using seasonal fabric draping. Discover your most flattering undertones, base foundation shade match, eye shadow spectrums, blush hues, and lip directions. Framed purely as an inspiring beauty and style experience.',
            highlights: [
              'Certified partner seasonal fabric draping diagnostic (Spring, Summer, Autumn, Winter)',
              'Exact foundation shade matching and undertone clarity (cool, warm, neutral, muted, vivid)',
              'Flattering blush, eye palette, and lip color direction tailored to your natural contrast',
              'Pouch audit: evaluate your current makeup products against your new color results'
            ],
            partnerRequired: true,
            partnerPlaceholder: 'Accredited Partner Personal Color Studio (Cheongdam / Hannam)'
          },
          {
            timeOfDay: 'Midday',
            title: 'Professional Makeup Lesson: "Half by the Artist. Half by You."',
            subtitle: 'Private Studio Atelier Session with a Seoul Makeup Artist',
            description: 'Experience NORI’s signature hands-on makeup masterclass. The artist creates one half of your face, demonstrating modern Korean base finish, tailored brow geometry, lash lifting, and gradient lip layering. Then, under 1-on-1 coaching, you recreate the other half yourself to build authentic muscle memory.',
            highlights: [
              'Half by the artist: watch professional brush technique, pressure control, and layering',
              'Half by you: pick up the brushes and recreate the other half with real-time feedback',
              'Focus areas: Korean dewy/semi-matte base, soft brow shaping, eyeliner angling, gradient lips',
              'Watch it. Try it. Make it yours.'
            ],
            partnerRequired: true,
            partnerPlaceholder: 'Professional Seoul Makeup Artist & Private Studio Atelier'
          },
          {
            timeOfDay: 'Afternoon',
            title: 'Lesson-Connected Curated Makeup Shopping',
            subtitle: 'Boutique Cosmetics & Flagships',
            description: 'Walk through curated makeup flagships with your NORI guide to source the exact shades, cushions, liners, and blushes needed to recreate your Day 2 look at home. Honest, budget-conscious, and directly tied to your morning color diagnosis and afternoon lesson.',
            highlights: [
              'Precise foundation/cushion shade matching tested in natural lighting',
              'Selecting eye palettes, gel liners, and brow tools tailored to your eye shape',
              'Lip tint matching based on your personal color palette and preferred finish',
              'Budget-conscious shopping: only purchasing products that serve a clear daily purpose'
            ]
          }
        ],
        deliverables: 'Your Personal Color Swatch Guide + Lesson Technique Notes'
      },
      {
        dayNumber: 3,
        dayTitle: 'Glow Your Way',
        dayTheme: 'Restorative Wellness, K-Beauty Lifestyle Play & Your NORI Glow Book',
        headline: 'Day 3 — Glow Your Way.',
        supportingLine: 'Take your glow home.',
        description: 'Synthesize your entire beauty transformation with restorative non-medical wellness, playful K-beauty lifestyle exploration, and the presentation of Your NORI Glow Book.',
        activities: [
          {
            timeOfDay: 'Morning',
            title: 'Curated Beauty & Wellness Experience',
            subtitle: 'Restorative Non-Medical Facial Care, Scalp Therapy, or Luxury Spa',
            description: 'Rejuvenate with a carefully curated non-medical aesthetic treatment—such as gentle hydration facial care, soothing barrier relief, or an aromatic Korean scalp spa. If medical clinic visits are requested, Korean Skin Clinic Coordination can be arranged as a separate add-on, but gentler and simpler options are always prioritized.',
            highlights: [
              'Curated non-medical Korean aesthetic facial treatment, deep hydration, or scalp therapy',
              'Relaxing sensory ritual in a tranquil, private boutique atmosphere',
              'Optional Add-On: Korean Skin Clinic Coordination (gentle, transparent coordination if desired)',
              'Honest philosophy: simpler, gentler treatments are always recommended first'
            ],
            partnerRequired: true,
            partnerPlaceholder: 'Curated Non-Medical Aesthetic Spa / Facial Lounge'
          },
          {
            timeOfDay: 'Midday',
            title: 'K-Beauty Lifestyle & Play (놀이)',
            subtitle: 'Interactive Flagships, Lifestyle Fragrance & Sensory Discovery',
            description: 'Celebrate the true spirit of NORI (놀이 = play). Explore innovative interactive beauty flagships, sensory fragrance houses, and creative beauty spaces. Test textures, discover indie formulations, and enjoy Seoul’s beauty culture with curiosity and joy—without any educational pressure.',
            highlights: [
              'Visits to iconic Seoul beauty lifestyle spaces and architectural flagships (e.g. Seongsu / Hannam)',
              'Sensory perfume and body care testing from Korea’s leading niche fragrance creators',
              'Playful texture bars and interactive cosmetic formulation stations',
              '“Beauty should feel like discovery, not pressure.”'
            ]
          },
          {
            timeOfDay: 'Late Afternoon',
            title: 'Final Session: Your Complete NORI Beauty Plan',
            subtitle: 'Calm Lounge Review & Presentation of “Your NORI Glow Book”',
            description: 'Gather in a peaceful café or private lounge over seasonal tea. Review everything experienced across all three days: your skin responses, newly discovered colors, makeup techniques, and purchased products. Receive your comprehensive digital takeaway—Your NORI Glow Book.',
            highlights: [
              'Reflective review of all 3 days with your dedicated bilingual curator',
              'Detailed product integration schedule: which products to introduce first and when',
              'Final question-and-answer session on techniques, ingredient layering, and daily routines',
              'Official delivery of Your NORI Glow Book'
            ]
          }
        ],
        deliverables: 'Official Delivery: YOUR NORI GLOW BOOK (Complete Digital Guide)'
      }
    ],
    timeline: [
      {
        time: 'Day 1 (Morning & Afternoon)',
        title: 'Day 1 — Know Your Skin',
        description: 'Personal Skincare Consultation (AM/PM routine audit, barrier education, 2–3 core priorities, ingredient decoding) followed by Curated Skincare Shopping across Olive Young flagships and Korean pharmacies. Formulate temporary Day 1 skincare plan.'
      },
      {
        time: 'Day 2 (Full Day)',
        title: 'Day 2 — Find Your Colors. Learn Your Look.',
        description: 'Accredited Partner Personal Color Consultation (seasonal fabric draping, cosmetic pouch audit) + Signature Hands-on Makeup Masterclass ("Half by the artist. Half by you.") + Lesson-connected curated cosmetic shopping.'
      },
      {
        time: 'Day 3 (Full Day)',
        title: 'Day 3 — Glow Your Way',
        description: 'Curated Restorative Beauty & Wellness Experience (non-medical facial ritual or scalp care) + K-Beauty Lifestyle & Play (놀이) flagship exploration + Final Lounge Session & presentation of "Your NORI Glow Book."'
      }
    ],
    itinerary: [
      {
        time: 'Day 1 (10:00 – 16:00)',
        title: 'Day 1 — Know Your Skin',
        description: 'Understand what your skin actually needs before you start shopping. Deep consultation, ingredient education (hydration vs moisturization, barrier support), and honest shopping without hype.'
      },
      {
        time: 'Day 2 (10:00 – 17:00)',
        title: 'Day 2 — Find Your Colors. Learn Your Look.',
        description: 'Professional personal color consultation with partner studio. Centerpiece 1-on-1 makeup lesson: "Half by the artist. Half by you." Concludes with lesson-connected cosmetic shopping.'
      },
      {
        time: 'Day 3 (10:30 – 16:30)',
        title: 'Day 3 — Glow Your Way',
        description: 'Morning restorative non-medical facial or scalp therapy. Midday playful lifestyle discovery (놀이). Concludes with a quiet lounge review and the presentation of Your NORI Glow Book.'
      }
    ],
    glowBookSections: [
      {
        title: 'YOUR SKIN',
        subtitle: 'Personalized Skincare Blueprint',
        items: [
          'Main skincare priorities (defined on Day 1: Barrier Support, Hydration, etc.)',
          'Step-by-step AM routine with texture and application notes',
          'Step-by-step PM barrier recovery routine',
          'Weekly care & exfoliation guidelines',
          'Product introduction order (spacing out newly purchased items)',
          'Ingredient notes & items to finish first before opening new bottles'
        ]
      },
      {
        title: 'YOUR MAKEUP',
        subtitle: 'Flattering Palette & Technique Roadmap',
        items: [
          'Accredited personal color direction & tonal palette summary',
          'Everyday Korean makeup style blueprint tailored to your facial geometry',
          'Base makeup application steps (cushion selection, sponge dampness, finish)',
          'Eye shape angling, brow geometry, and tightlining guidance',
          'Blush placement & gradient lip layering technique',
          'Artist tips and muscle-memory notes learned during hands-on coaching'
        ]
      },
      {
        title: 'YOUR PRODUCTS',
        subtitle: 'Curated Cosmetic Inventory',
        items: [
          'Complete catalog of products purchased across the 3 days',
          'Recommended future products tailored to your skin and tone',
          'Optional items to explore once current favorites are finished',
          'Products to prioritize finishing first to prevent product buildup',
          'Accessible international and online alternatives for easy replenishment'
        ]
      },
      {
        title: 'YOUR BEAUTY NOTES',
        subtitle: 'Education, Cautions & Professional Wisdom',
        items: [
          'Key active ingredients explained (Centella, PDRN, Ceramides, Peptides)',
          'Correct layering order & what not to mix together',
          'Skin cautions, weather transitions, and barrier distress protocols',
          'Muscle memory reminders for your makeup application at home',
          'Curated Seoul partner contacts and vetted aesthetic references'
        ]
      }
    ],
    partnerServices: [
      {
        role: 'Personal Color Studio',
        type: 'Accredited Partner Diagnostic Studio',
        notes: 'Certified 140+ seasonal fabric draping, foundation undertone match, and shade swatches.'
      },
      {
        role: 'Professional Makeup Artist',
        type: 'Cheongdam / Hannam Atelier Partner',
        notes: '1-on-1 private lesson with the signature "Half by the artist. Half by you." methodology.'
      },
      {
        role: 'Aesthetic Wellness Sanctuary',
        type: 'Curated Non-Medical Spa & Lounge',
        notes: 'Gentle barrier hydration facial ritual or therapeutic scalp therapy in a serene private suite.'
      },
      {
        role: 'Bilingual NORI Curator',
        type: 'Private Beauty Guide & Translator',
        notes: 'Dedicated companion providing continuous consultation, honest shopping navigation, and Glow Book compilation.'
      }
    ],
    optionalAddOns: [
      'Korean Skin Clinic Coordination (Gentle, transparent coordination for medical aesthetics upon request; never pushed by default)',
      'Bespoke Private Van Chauffeur between daily destinations',
      'Extended 1-on-1 Post-Trip Digital Skincare Consultation Check-in (30 Days After Return)'
    ],
    deliverables: {
      title: 'Your Takeaway Deliverables',
      subtitle: 'Knowledge, confidence, and a routine you can actually use at home',
      items: [
        'Official Digital Edition: "Your NORI Glow Book" (Complete Skincare & Makeup Blueprint)',
        'Physical Seasonal Personal Color Swatch Card & Tone Reference',
        'Step-by-Step Makeup Application Guide with your customized face chart',
        'Personalized Product Inventory with usage order and introduction schedule',
        '30-Day WhatsApp Direct Support with your NORI curator for routine adjustments'
      ]
    },
    included: [
      '3 full days of private bilingual NORI beauty curation, consultation, and translation',
      'Day 1: Comprehensive private skincare consultation, barrier audit & ingredient education',
      'Day 1: Curated skincare shopping navigation across Olive Young, pharmacies, and brand flagships',
      'Day 1: Temporary Day 1 Skincare Plan formulation',
      'Day 2: Professional personal color consultation with accredited partner studio',
      'Day 2: Private hands-on makeup masterclass ("Half by the artist. Half by you.") with Seoul artist',
      'Day 2: Lesson-connected curated cosmetics shopping navigation',
      'Day 3: Curated restorative non-medical facial care or scalp wellness treatment',
      'Day 3: K-beauty lifestyle & sensory play (놀이) exploration across architectural flagships',
      'Day 3: Concluding tea lounge review session & official presentation of "Your NORI Glow Book"',
      'All partner studio booking fees, diagnostic fees, and lesson fees',
      'Warm artisan Korean tea and refreshments during daily consultations'
    ],
    notIncluded: [
      'Hotel accommodation (guests stay at their chosen hotel in Seoul and meet NORI daily)',
      'Personal cosmetic and skincare purchases made during shopping walks',
      'Personal meals and transport outside scheduled journey sessions',
      'Medical aesthetic clinic procedures (available as an optional coordination add-on)'
    ],
    meetingPoint: {
      name: 'Bespoke Hotel Lobby Pickup or Central Lounge',
      subwayStation: 'Flexible based on your Seoul hotel location',
      address: 'Arranged individually upon reservation confirmation',
      directionsNote: 'Your dedicated NORI curator meets you each morning at your hotel lobby or a convenient central beauty salon lounge.'
    },
    importantNotes: [
      'Accommodation is NOT included by default. Guests stay at their own hotel in Seoul and meet their NORI curator at scheduled meeting points each day.',
      'This is a private signature experience customized for you and your travel companions (1–3 guests).',
      'Pricing is provided on request based on group size, partner studio reservations, and selected wellness preferences.',
      'Please bring your current skincare and makeup pouches on Day 1 and Day 2 for personalized evaluation.',
      'Medical clinic visits are strictly optional add-ons; we champion non-invasive, gentler wellness treatments by default.'
    ],
    importantInfo: [
      'Accommodation is NOT included by default. Guests stay at their own hotel in Seoul and meet their NORI curator at scheduled meeting points each day.',
      'This is a private signature experience customized for you and your travel companions (1–3 guests).',
      'Pricing is provided on request based on group size, partner studio reservations, and selected wellness preferences.',
      'Please bring your current skincare and makeup pouches on Day 1 and Day 2 for personalized evaluation.',
      'Medical clinic visits are strictly optional add-ons; we champion non-invasive, gentler wellness treatments by default.'
    ],
    cancellationPolicy: 'Custom bespoke cancellation schedule provided upon quote issuance. Typically full refund up to 14 days prior.',
    heroImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1800&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80'
    ],
    visualStory: [
      {
        stage: 'hero',
        stageNumber: 1,
        stageName: 'Hero Overview',
        sceneTitle: 'Radiance, Discovery & Personal Confidence in Seoul',
        sceneDescription: 'Premium Korean beauty editorial portrait of an international traveler looking relaxed, radiant, and naturally confident. Evokes beauty, discovery, and quiet luxury in Korea without commercial tourist tropes.',
        photoDirection: 'Luminous natural skin glow, authentic warmth, understated elegance, beautiful soft Seoul daylight.',
        imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1800&q=85',
        isPlaceholder: false
      },
      {
        stage: 'activity',
        stageNumber: 2,
        stageName: 'Experience & Activity',
        sceneTitle: 'Day 1: Know Your Skin & Understand Your Barrier',
        sceneDescription: 'Intimate skincare consultation over warm tea, reviewing current routines, active ingredient literacy, and purposeful curated shopping without sales pressure.',
        photoDirection: 'Focused table discussion, checking skincare bottles, relaxed and educational exchange.',
        imageUrl: 'https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=1200&q=80',
        isPlaceholder: false
      },
      {
        stage: 'interaction',
        stageNumber: 3,
        stageName: 'Human Interaction',
        sceneTitle: 'Day 2: Personal Color & “Half by the Artist. Half by You.”',
        sceneDescription: 'Certified personal color draping diagnostic followed by a private makeup studio masterclass where the artist demonstrates one side and the guest recreates the other.',
        photoDirection: 'Artist gently guiding guest’s hand, mirror practice, vibrant seasonal swatches, and confidence building.',
        imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
        isPlaceholder: false
      },
      {
        stage: 'detail',
        stageNumber: 4,
        stageName: 'Detail & Texture',
        sceneTitle: 'Day 3: Glow Your Way in Restorative Wellness',
        sceneDescription: 'Restorative non-invasive facial hydration, scalp wellness, and exploration of Seoul’s quiet indie beauty lifestyle flagships.',
        photoDirection: 'Serene atmosphere, botanical aromas, soft organic textures, and peaceful tea lounge moments.',
        imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        isPlaceholder: false
      },
      {
        stage: 'takeaway',
        stageNumber: 5,
        stageName: 'Result & Takeaway',
        sceneTitle: '“Your Personal NORI Glow Book” Final Deliverable',
        sceneDescription: 'Presenting your custom digital beauty roadmap containing your complete skincare blueprint, personal color analysis, makeup step diagrams, and lifelong Seoul recommendations.',
        photoDirection: 'Elegantly presented on tablet or phone over ceramic tea in a stylish café, celebrating knowledge over product excess.',
        imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
        isPlaceholder: false
      }
    ]
  },
  {
    id: 'bukchon-hanok-head-spa-tea',
    slug: 'bukchon-hanok-herbal-head-spa',
    title: 'Bukchon Hanok Herbal Head Spa & Mindful Tea Ceremony',
    category: 'Wellness',
    duration: '4.0 Hours',
    startingPrice: 240,
    currency: 'USD',
    groupSize: 'Max 4 guests',
    badge: 'Editor\'s Choice',
    isFeatured: true,
    rating: 4.99,
    reviewsCount: 164,
    shortDescription: 'Immerse in historic Bukchon Village for a 15-step Korean herbal scalp detox, aquatic waterfall therapy, and a secluded Hanok tea pairing.',
    overview: 'Escape the hum of central Seoul into a private 90-year-old restored Hanok courtyard. Experience Korea’s viral luxury scalp therapy—a therapeutic ritual incorporating traditional medicinal herbs (ginseng, mugwort, and black sesame), high-pressure scalp scaling, hydro-circulating waterfall rings, and tension-releasing neck and shoulder gua sha. Afterwards, sit cross-legged on polished wooden ondol floors for an introspective tea meditation led by a certified Hanok tea master.',
    highlights: [
      'Microscopic scalp camera analysis before and after treatment',
      '60-minute therapeutic herbal scalp scaling with warm waterfall hydro-therapy ring',
      'Aromatic warm mugwort (ssuk) compress and jade stone acupressure massage',
      'Private access to an exclusive historic Hanok courtyard closed to general tourists',
      'Mindful tea ceremony with seasonal Korean wagashi confections and wild herbal teas'
    ],
    itinerary: [
      {
        time: '14:00 - 14:20',
        title: 'Arrival in Bukchon Hanok & Scalp Consultation',
        description: 'Stroll scenic alleyways to our tucked-away wellness sanctuary. View 200x magnified scalp pores to detect buildup and micro-inflammation.'
      },
      {
        time: '14:20 - 15:40',
        title: '15-Step Korean Herbal Scalp & Waterfall Ritual',
        description: 'Recline under soft sound therapy. Treatment includes deep pore exfoliation, steam capsule therapy, aromatic hair bath, waterfall ring rinse, and jade gua sha.'
      },
      {
        time: '15:40 - 16:15',
        title: 'Boutique Blow-Dry & Botanical Tonic Infusion',
        description: 'Professional botanical blow-out using ionic Korean styling tools and nutrient scalp essence mists.'
      },
      {
        time: '16:15 - 17:30',
        title: 'Hanok Courtyard Tea Ceremony & Confections',
        description: 'Gather around a raw cedar table overlooking pine bonsai trees. Brew organic Hadong green tea and wild persimmon leaf tea paired with handmade yakgwa.'
      }
    ],
    included: [
      'All scalp diagnostics, treatment products, and professional styling',
      'Full 15-step luxury Korean head spa session',
      'Traditional tea ceremony with authentic Korean tea master',
      'Handcrafted Korean traditional sweets (hangwa & yakgwa)',
      'Herbal scalp tonic travel bottle for post-trip care'
    ],
    notIncluded: [
      'Personal transportation to Bukchon Hanok Village',
      'Full body massage services'
    ],
    meetingPoint: {
      name: 'Anguk Station (Line 3)',
      subwayStation: 'Exit 2 (North toward Bukchon Hanok Village)',
      address: 'Anguk-dong, Jongno-gu, Seoul',
      directionsNote: 'Look for the stone lantern sculpture outside Exit 2. Guide will greet you with hot welcome tea in colder months.'
    },
    importantInfo: [
      'Suitable for all hair textures, including color-treated or curly hair.',
      'Please wear comfortable attire that allows easy loosening at the collar for neck and shoulder acupressure.',
      'Shoes are removed upon entering the Hanok courtyard; clean socks provided if needed.'
    ],
    cancellationPolicy: 'Full refund if cancelled at least 72 hours before tour time. 50% refund up to 48 hours.',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'seongsu-bespoke-scent-cosmetics',
    slug: 'seongsu-bespoke-scent-and-cosmetics',
    title: 'Seongsu Bespoke Scent & Artisan Cosmetic Blending',
    category: 'Beauty',
    duration: '3.5 Hours',
    startingPrice: 195,
    currency: 'USD',
    groupSize: 'Max 6 guests',
    badge: 'Creative Workshop',
    isFeatured: false,
    rating: 4.94,
    reviewsCount: 89,
    shortDescription: 'Formulate your own custom Korean foundation shade or signature eau de parfum in Seoul’s hyper-creative design neighborhood.',
    overview: 'Discover Seongsu-dong, often celebrated as Seoul\'s Brooklyn or Milan for indie beauty brands and concept ateliers. In this intimate hands-on experience, you will step inside a contemporary formulation laboratory where cosmetic chemists and master perfumers guide you in compounding your personalized beauty keepsake. Choose between formulating your custom-pigmented vegan lip glaze or crafting a 50ml eau de parfum inspired by Korean botanicals like Jeju cedarwood, green tea flower, and white pine.',
    highlights: [
      'Explore Seoul\'s hottest neighborhood for indie beauty and architectural flagships',
      '1-on-1 color or fragrance matching with trained Korean formulation chemists',
      'Bottle and custom-engrave your finished 50ml product with your name or mantra',
      'Exclusive insider pass to curated Seongsu secret beauty showrooms'
    ],
    itinerary: [
      {
        time: '14:30 - 15:00',
        title: 'Seongsu Creative District Orientation',
        description: 'Meet at a renowned brutalist cafe. Discuss current Korean indie aesthetic trends and sensory scent profiles.'
      },
      {
        time: '15:00 - 16:30',
        title: 'Laboratory Formulation Session',
        description: 'Work at a stainless-steel perfumer organ or cosmetic mixing station with calibrated pipettes and raw plant pigments.'
      },
      {
        time: '16:30 - 17:15',
        title: 'Bottling, Labeling & Custom Calligraphy Box',
        description: 'Crimp, label, and personalize your bespoke product packaging in premium glass bottles.'
      },
      {
        time: '17:15 - 18:00',
        title: 'Curated Seongsu Concept Store Walk',
        description: 'Explore hand-selected architectural beauty boutiques with VIP sample bags.'
      }
    ],
    included: [
      'All lab formulation ingredients and professional equipment',
      'Custom 50ml eau de parfum or 2 bespoke lip formulations with personalized engraving',
      'Specialist English-speaking guide and formulation chemist guidance',
      'Artisan iced drip coffee or seasonal organic beverage'
    ],
    notIncluded: [
      'Additional retail items purchased outside the workshop'
    ],
    meetingPoint: {
      name: 'Seongsu Station (Line 2)',
      subwayStation: 'Exit 3 (Ground Level)',
      address: 'Seongsu-dong, Seongdong-gu, Seoul',
      directionsNote: 'Meet directly outside Exit 3 near the red brick cafe terrace.'
    },
    importantInfo: [
      'Please avoid wearing strong synthetic perfume prior to the scent workshop.',
      'All cosmetic ingredients are certified cruelty-free, vegan-grade, and skin-tested.'
    ],
    cancellationPolicy: 'Free cancellation up to 48 hours before the experience.',
    heroImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'insadong-hanbang-apothecary',
    slug: 'insadong-hanbang-apothecary-wellness',
    title: 'Insadong Traditional Hanbang Apothecary & Foot Bath Retreat',
    category: 'Wellness',
    duration: '3.0 Hours',
    startingPrice: 175,
    currency: 'USD',
    groupSize: 'Max 6 guests',
    badge: 'Mindful Living',
    isFeatured: false,
    rating: 4.92,
    reviewsCount: 76,
    shortDescription: 'Delve into centuries-old Korean herbal medicine (Hanbang), blend your custom tisane, and relax in thermal herb-steeped cypress foot pools.',
    overview: 'Korean herbal medicine—known as Hanbang—forms the root of modern K-beauty’s most restorative secrets. In this restorative morning retreat, stroll through Insadong’s tranquil cultural quarters to a storied medicinal apothecary house. Learn how red ginseng, licorice root, astragalus, and fermented rice purify the bloodstream and illuminate skin tone. Blend your personalized wellness tea blend, followed by an aromatic Hinoki wood herbal foot bath with acupressure reflexology.',
    highlights: [
      'Hands-on Hanbang herb identification with a certified herbal medicine practitioner',
      'Bespoke herbal tea blending based on your body constitution (Sasang typology)',
      '45-minute warm Hinoki cypress soak infused with seasonal dried herbs and mineral salts',
      'Hand and shoulder herbal compress therapy with soothing Korean bellflower honey tea'
    ],
    itinerary: [
      {
        time: '10:00 - 10:30',
        title: 'Insadong Hidden Courtyard Walk & History',
        description: 'Explore quiet stone alleyways and uncover how traditional Korean medicine integrated food, nature, and skincare.'
      },
      {
        time: '10:30 - 11:30',
        title: 'Herbal Apothecary Workshop & Sasang Constitution Quiz',
        description: 'Smell, touch, and learn about 20 classic Korean medicinal herbs. Blend 3 customized loose-leaf tisanes to take home.'
      },
      {
        time: '11:30 - 12:30',
        title: 'Thermal Hinoki Herbal Foot Bath & Acupressure',
        description: 'Sink into warm cedar baths overlooking a bamboo courtyard. Enjoy neck gua sha and acupressure points for stress relief.'
      },
      {
        time: '12:30 - 13:00',
        title: 'Nourishing Porridge & Tonic Tasting',
        description: 'Taste warming pumpkin or black sesame juk (porridge) with sweet fermented Sikhye.'
      }
    ],
    included: [
      'Full herbal foot bath experience with organic salt scrub and massage oils',
      'Custom blended herbal tisane kit (100g) in traditional ramie pouch',
      'Traditional nutritious snack and artisanal tea service',
      'English-speaking wellness guide throughout'
    ],
    notIncluded: [
      'Prescription medicines or acupuncture treatments',
      'Gratuities'
    ],
    meetingPoint: {
      name: 'Jongno 3-ga Station (Line 1, 3, 5)',
      subwayStation: 'Exit 5',
      address: 'Insadong-gil, Jongno-gu, Seoul',
      directionsNote: 'Guide will meet beside the tourist information pavilion.'
    },
    importantInfo: [
      'Easy slip-on shoes and pants that can be rolled above the knee are recommended.',
      'Pregnant guests are welcome; gentle, non-stimulating herbs will be substituted.'
    ],
    cancellationPolicy: 'Free cancellation up to 48 hours prior to start.',
    heroImage: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'joseon-royal-palace-modern-hanbok',
    slug: 'joseon-royal-palace-modern-hanbok-aesthetic',
    title: 'Joseon Royal Palace Aesthetics & Modern Silk Hanbok Editorial Tour',
    category: 'Culture',
    duration: '4.5 Hours',
    startingPrice: 260,
    currency: 'USD',
    groupSize: 'Max 4 guests',
    badge: 'Cultural Elegance',
    isFeatured: true,
    rating: 4.97,
    reviewsCount: 131,
    shortDescription: 'Wear high-end pastel silk modern Hanbok styled by an editorial designer, followed by an architectural immersion through Changdeokgung Secret Garden.',
    overview: 'Forget neon rental costumes—this is an authentic, high-fashion celebration of Korean textile artistry. Partnered with Seoul’s premier contemporary Hanbok maison, you will be fitted in hand-dyed silk organza and linen garments that drape with ethereal poise. Receive traditional norigae jewelry and delicate hair ornamentation, followed by a quiet, private-paced guided exploration through the UNESCO-listed Changdeokgung Palace and its secluded Secret Garden (Huwon).',
    highlights: [
      'Private fitting at an acclaimed contemporary couture Hanbok designer studio',
      'Authentic hand-dyed Korean silks in muted sage, blush, and bone tones',
      'Traditional Korean braided hairstyle (Daenggi) with mother-of-pearl hairpins',
      'VIP guided tour through the imperial pavilions and lotus ponds of Changdeokgung',
      'Complimentary professional editorial digital portraits taken by your guide'
    ],
    itinerary: [
      {
        time: '09:30 - 10:45',
        title: 'Couture Hanbok Fitting & Styling in Samcheong-dong',
        description: 'Browse artisan collections. Enjoy personalized silhouette styling and hair pinning with vintage Korean trinkets.'
      },
      {
        time: '10:45 - 11:15',
        title: 'Scenic Walk along the Palace Stone Walls',
        description: 'Stroll the picturesque stone wall paths with photographic pointers on graceful movement in traditional silk.'
      },
      {
        time: '11:15 - 13:00',
        title: 'Changdeokgung Palace & Secret Garden Exploration',
        description: 'Immerse in royal Joseon aesthetics, nature-harmonizing pavilions, and reflection pools once reserved for royalty.'
      },
      {
        time: '13:00 - 14:00',
        title: 'Royal Tea & Traditional Confection Tasting',
        description: 'Unwind in an ancient pavilion tea room with warm ginger-cinnamon Sujeonggwa and honeyed rice cakes.'
      }
    ],
    included: [
      'Premium couture silk Hanbok rental, undergarments, and shoes',
      'Professional hairstyling with authentic accessories',
      'Changdeokgung Palace & Secret Garden priority admission fees',
      'English cultural historian and beauty stylist host',
      '15 high-resolution color-graded photos per guest'
    ],
    notIncluded: [
      'Commercial photoshoot equipment (tripods prohibited by palace regulations)',
      'Meals not mentioned'
    ],
    meetingPoint: {
      name: 'Anguk Station (Line 3)',
      subwayStation: 'Exit 1',
      address: 'Yulgok-ro, Jongno-gu, Seoul',
      directionsNote: 'Meet at the traditional stone wall plaza beside Exit 1.'
    },
    importantInfo: [
      'Sizes accommodate US 00 to US 16 comfortably with custom tie adjustments.',
      'Comfortable walking shoes are recommended for garden pathways; traditional flats provided for photos.'
    ],
    cancellationPolicy: 'Free cancellation up to 72 hours before start. Palace garden tickets are non-refundable within 48h.',
    heroImage: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1548115184-bc6544d06a58?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'private-vip-cheongdam-dermatology-concierge',
    slug: 'private-cheongdam-dermatology-concierge',
    title: 'Private VIP Cheongdam Dermatology & Luxury Shopping Concierge',
    category: 'Private Experiences',
    duration: '6.0 Hours',
    startingPrice: 580,
    currency: 'USD',
    groupSize: 'Private (1 - 2 guests only)',
    badge: 'Ultra-Luxury',
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 53,
    shortDescription: 'A fully bespoke, discreet private day in Gangnam with bilingual medical translation, board-certified dermatologist access, and private vehicle escort.',
    overview: 'Designed for international travelers who demand the highest tier of medical discretion, clinical excellence, and seamless luxury. You are accompanied by a licensed medical aesthetic translator and private chauffeur in a Genesis G90. Visit Seoul’s most prestigious dermatological institution in Cheongdam for private consultations regarding non-invasive lifting (Ultherapy, Oligio, Shurink), targeted laser tone brightening, or skin boosters. We handle all clinic reservations, pre-consultations, recovery planning, and immediate VIP tax refunds.',
    highlights: [
      '100% private door-to-door luxury Mercedes / Genesis vehicle transfer within Seoul',
      'Accompanying certified medical beauty interpreter to translate every nuance',
      'Direct consultation with board-certified chief dermatologists (no junior sales pressure)',
      'VIP recovery room reservation with post-laser thermal cooling masks and lymphatic tea',
      'Curated private room shopping appointment at Apgujeong Galleria Luxury Hall'
    ],
    itinerary: [
      {
        time: '11:00',
        title: 'Private Chauffeur Pickup at Hotel',
        description: 'Begin your day with curbside pickup in an executive luxury vehicle with iced Fiji water and chilled face mists.'
      },
      {
        time: '11:30 - 14:00',
        title: 'Cheongdam Medical Aesthetic Clinic Appointment',
        description: 'Private consultation with leading medical doctor. Tailored treatment session (anti-aging, skin boosters, laser rejuvenation) with continuous side-by-side translation.'
      },
      {
        time: '14:00 - 15:15',
        title: 'Michelin-Starred Korean Fine Dining Lunch',
        description: 'Enjoy a multi-course restorative lunch celebrating royal wellness cuisine (included in private package).'
      },
      {
        time: '15:15 - 17:00',
        title: 'Bespoke Galleria VIP Suite & Luxury Beauty Concierge',
        description: 'Experience private shopping with personalized tax-free processing and exclusive Korean niche cosmetics.'
      }
    ],
    included: [
      '6 hours dedicated private luxury vehicle and professional chauffeur',
      'Licensed English-Korean medical beauty interpreter and private host',
      'Pre-trip medical questionnaire review and clinic appointment coordination',
      'Michelin Guide Korean fine dining lunch course for each guest',
      'Priority VIP tax-refund processing assistance',
      'Comprehensive post-procedure care kit and 7-day remote WhatsApp doctor support'
    ],
    notIncluded: [
      'Direct clinic medical procedure costs (billed transparently by clinic with no markups)',
      'Personal retail purchases'
    ],
    meetingPoint: {
      name: 'Private Pickup at Guest Hotel (Seoul Metropolitan Area)',
      subwayStation: 'Hotel Lobby Curbside',
      address: 'Your accommodation in Seoul',
      directionsNote: 'Chauffeur and bilingual guide will greet you in your hotel lobby at 11:00 AM.'
    },
    importantInfo: [
      'Valid passport is required for clinic registration and immediate on-site tax refunds.',
      'We never take kickbacks or clinic commissions, ensuring completely unbiased medical guidance.',
      'Custom departure times can be accommodated upon request.'
    ],
    cancellationPolicy: 'Full refund up to 7 days prior. 70% refund up to 72 hours prior.',
    heroImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512290900672-1f5be57d23d8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 'jeju-camellia-volcanic-wellness',
    slug: 'jeju-camellia-botanical-wellness-retreat',
    title: 'Jeju Camellia Botanical & Volcanic Stone Sound Bath',
    category: 'Private Experiences',
    duration: 'Full Day (8.5 Hours)',
    startingPrice: 620,
    currency: 'USD',
    groupSize: 'Private (1 - 4 guests)',
    badge: 'Island Sanctuary',
    isFeatured: false,
    rating: 5.0,
    reviewsCount: 38,
    shortDescription: 'Fly to UNESCO Jeju Island for an ethereal day of wild camellia seed oil pressing, volcanic hot stone therapy, and forest singing bowl meditation.',
    overview: 'Known as the birthplace of Korea\'s purest botanical extracts (green tea, volcanic clay, and camellia), Jeju Island offers an unforgettable sanctuary for rejuvenation. Fly from Seoul Gimpo in the morning to be met by our private Jeju naturalist host. Journey into a secluded southern camellia grove to cold-press your own golden face oil, recline in an open-air ocean spa using warm basalt volcanic stones, and ground yourself in a sound meditation bath under ancient Gotjawal subtropical forests.',
    highlights: [
      'Private day tour on Jeju Island with dedicated private luxury van and local expert',
      'Artisanal camellia seed cold-pressing workshop with Jeju heritage farmers',
      '90-minute volcanic basalt stone massage with oceanfront panoramic views',
      'Forest sound bath meditation inside protected UNESCO Gotjawal lava forest',
      'Organic farm-to-table lunch of Jeju black pork or seasonal vegetarian temple cuisine'
    ],
    itinerary: [
      {
        time: '09:00',
        title: 'Jeju International Airport Welcome',
        description: 'Meet your guide upon arrival in Jeju. Board your private vehicle equipped with chilled Jeju citrus teas.'
      },
      {
        time: '09:45 - 11:30',
        title: 'Seogwipo Camellia Grove & Oil Pressing',
        description: 'Walk amongst blooming red camellia trees. Use traditional granite press to extract 100% pure antioxidant-rich face oil.'
      },
      {
        time: '12:00 - 13:30',
        title: 'Jeju Oceanfront Wellness Lunch',
        description: 'Savor seasonal Jeju delicacies prepared with wild seaweed, abalone, and volcanic mineral vegetables.'
      },
      {
        time: '14:00 - 16:00',
        title: 'Basalt Hot Stone Body Ritual & Open Spa',
        description: 'Experience deep muscular release with smoothed volcanic stones warmed in mineral seawater.'
      },
      {
        time: '16:30 - 17:45',
        title: 'Gotjawal Forest Singing Bowl Meditation',
        description: 'Immerse in nature’s phytoncides while acoustic singing bowls vibrate through the forest canopy.'
      }
    ],
    included: [
      'Full-day private luxury vehicle and driver-guide across Jeju Island',
      'All workshop materials, camellia oil bottles (100ml) to bring home',
      '90-minute volcanic basalt hot stone therapy session at luxury ocean spa',
      'All gourmet meals, artisan refreshments, and farm entry admissions'
    ],
    notIncluded: [
      'Domestic flights between Seoul (Gimpo) and Jeju (we provide easy booking guidance)',
      'Overnight hotel accommodations'
    ],
    meetingPoint: {
      name: 'Jeju International Airport (CJU) - Arrival Gate 2',
      subwayStation: 'Domestic Arrivals Lobby',
      address: 'Gonghang-ro 2, Jeju-si, Jeju-do',
      directionsNote: 'Guide will greet you right at Arrival Gate 2 holding your personalized NORI greeting board.'
    },
    importantInfo: [
      'Recommended morning flight from Seoul Gimpo: Depart between 07:00 and 08:00 AM.',
      'Return flights to Seoul should be booked after 19:30 PM.',
      'Weather-adaptive itineraries ensure seamless comfort rain or shine.'
    ],
    cancellationPolicy: 'Full refund up to 5 days before scheduled date. 50% refund up to 48 hours.',
    heroImage: 'https://images.unsplash.com/photo-1548115184-bc6544d06a58?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80'
    ]
  }
];
