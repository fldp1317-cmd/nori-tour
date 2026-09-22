export type TourCategory = 
  | 'Skincare' 
  | 'Skincare + Wellness' 
  | 'Makeup' 
  | 'Skincare + Makeup + Wellness'
  | 'Beauty' 
  | 'Wellness' 
  | 'Culture' 
  | 'Private Experiences';

export interface DayActivity {
  timeOfDay: string;
  title: string;
  subtitle?: string;
  description: string;
  highlights?: string[];
  duration?: string;
  location?: string;
  keyTopics?: string[];
  partnerRequired?: boolean;
  partnerPlaceholder?: string;
  deliverables?: string;
}

export interface DayPlan {
  dayNumber: number;
  dayTitle: string;
  dayTheme: string;
  headline?: string;
  supportingLine?: string;
  description?: string;
  tagline?: string;
  activities: DayActivity[];
  deliverables?: string;
  takeaway?: string;
}

export interface PartnerService {
  role: string;
  type: string;
  notes: string;
  name?: string;
  category?: string;
}

export interface ItineraryItem {
  time: string;
  title: string;
  description: string;
  topics?: string[];
}

export interface GuestPriceTier {
  guests: number;
  krw: number;
  usd?: number;
  label: string;
}

export interface ShoppingFrameworkItem {
  label: string;
  desc: string;
  type: 'must' | 'nice' | 'skip';
}

export interface DeliverablesData {
  title: string;
  subtitle?: string;
  items: string[];
}

export interface Tour {
  id: string;
  slug: string;
  title: string;
  headline?: string;
  supportingCopy?: string;
  category: TourCategory;
  duration: string;
  format?: string;
  groupType?: string;
  groupSize: string;
  positioning?: string;
  depthLevel?: 'quick' | 'deep' | 'full';
  depthLabel?: string;
  shortDescription: string;
  fullDescription?: string;
  overview: string;
  startingPrice: number;
  currency: string;
  priceByGuestCount?: GuestPriceTier[];
  pricingNote?: string;
  shoppingFramework?: {
    title: string;
    items: ShoppingFrameworkItem[];
  };
  highlights: string[];
  timeline?: ItineraryItem[];
  itinerary: ItineraryItem[];
  included: string[];
  excluded?: string[];
  notIncluded: string[];
  deliverables?: DeliverablesData;
  importantNotes?: string[];
  importantInfo: string[];
  meetingPoint: {
    name: string;
    subwayStation: string;
    address: string;
    directionsNote: string;
  };
  cancellationPolicy: string;
  heroImage: string;
  gallery?: string[];
  galleryImages: string[];
  badge?: string;
  rating: number;
  reviewsCount: number;
  isFeatured?: boolean;
  skincareProductLine?: boolean;
  makeupProductLine?: boolean;
  highlightLine?: string;
  priceDisplay?: string;
  heroHeadline?: string;
  supportingHeadline?: string;
  coreMessage?: string;
  ctaText?: string;
  lessonTopics?: string[];
  shoppingCategories?: string[];
  signatureExperience?: boolean;
  days?: DayPlan[];
  partnerServices?: PartnerService[];
  optionalAddOns?: string[];
  glowBookSections?: { title: string; subtitle: string; items: string[] }[];
  accommodationNote?: string;
  visualStory?: TourVisualStoryItem[];
}

export interface TourVisualStoryItem {
  stage: 'hero' | 'activity' | 'interaction' | 'detail' | 'takeaway';
  stageNumber: number;
  stageName: string;
  sceneTitle: string;
  sceneDescription: string;
  photoDirection: string;
  imageUrl: string;
  isPlaceholder?: boolean;
}

export type JournalCategory = 
  | 'Skincare' 
  | 'Ingredients' 
  | 'K-Beauty Shopping' 
  | 'Beauty Tips' 
  | 'Beauty Treatments'
  | 'Wellness'
  | 'Korea Beauty Guide'
  | 'Beauty Trends'
  | 'Travel Beauty Tips'
  | 'Wellness & Glow';

// 5. CMS-Style Beauty Journal Data Structure
export interface JournalArticle {
  id: string;
  title: string;
  slug: string;
  category: JournalCategory;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishDate: string;
  heroImage: string;
  articleContent: string[];
  relatedExperience?: string;
  seoTitle: string;
  seoDescription: string;
  // Compatibility helpers
  date?: string;
  content?: string[];
  readTime?: string;
  excerpt?: string;
  tags?: string[];
}

// 4. Review Data Structure
export interface Review {
  id: string;
  guestName: string;
  country: string;
  experienceBooked: string;
  reviewText: string;
  rating: number;
  optionalPhoto?: string;
  photoConsent: boolean;
  date: string;
  tourId?: string;
  tourName?: string;
  guestPhoto?: string;
  verified?: boolean;
}

// 1. Booking Status System
export type BookingStatus = 'Pending' | 'Confirmed' | 'Paid' | 'Cancelled' | 'Completed';

// 2. Customer Beauty Profile Data Structure
export type BeautyFocusCategory = 'skincare' | 'makeup' | 'both';

export interface CustomerBeautyProfile {
  focusCategory: BeautyFocusCategory; // skincare / makeup / both
  skinConcerns: string[];
  currentSkincareRoutine: string;
  allergiesOrSensitivity: string; // allergies or sensitivity history
  beautyInterests: string[];
  makeupInterests: string[];
  personalColorInterest: string; // personal color interest
  budget: string;
  preferredExperience: string;
  fullName: string;
  whatsapp: string;
  email: string;
  country: string;
  hotelArea?: string; // Hotel or area in Seoul
  secondaryDate?: string; // Secondary date option
  specialRequests?: string;
}

export interface BookingFormData extends CustomerBeautyProfile {
  tourId: string;
  date: string;
  guests: number;
  // Legacy compatibility mappings
  skincareInterests?: string[];
}

export interface BookingRecord {
  id: string;
  orderId: string;
  tourId: string;
  tourTitle: string;
  date: string;
  guests: number;
  priceUsd: number;
  priceKrw: number;
  status: BookingStatus;
  createdAt: string;
  customerProfile: CustomerBeautyProfile;
  paymentMethod?: string;
  paymentReference?: string;
}
