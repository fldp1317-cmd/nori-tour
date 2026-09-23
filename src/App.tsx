import React, { useState, useEffect } from 'react';
import { Tour, JournalArticle, Review } from './types';
import { TOURS_DATA } from './data/tours';
import { ARTICLES_DATA } from './data/articles';
import { REVIEWS_DATA } from './data/reviews';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ArticleModal } from './components/ArticleModal';
import { BeautyJourneyModal } from './components/BeautyJourneyModal';
import { LegalPoliciesModal, PolicyTabId } from './components/LegalPoliciesModal';
import { BookingStatusModal } from './components/BookingStatusModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { TourDetailPage } from './pages/TourDetailPage';
import { BeautyJournalPage } from './pages/BeautyJournalPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { AboutPage } from './pages/AboutPage';
import { BookingPage } from './pages/BookingPage';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [isJourneyModalOpen, setIsJourneyModalOpen] = useState<boolean>(false);
  const [bookingTourId, setBookingTourId] = useState<string | undefined>(undefined);
  const [reviews, setReviews] = useState<Review[]>(REVIEWS_DATA);

  // Business operations modals
  const [isPoliciesModalOpen, setIsPoliciesModalOpen] = useState<boolean>(false);
  const [activePolicyTab, setActivePolicyTab] = useState<PolicyTabId>('cancellation');
  const [isBookingStatusModalOpen, setIsBookingStatusModalOpen] = useState<boolean>(false);

  // Handle hash-based navigation for deep links or browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('tour/')) {
        const slug = hash.replace('tour/', '');
        const found = TOURS_DATA.find(t => t.slug === slug || t.id === slug);
        if (found) {
          setSelectedTour(found);
          window.scrollTo(0, 0);
          return;
        }
      }
      if (['home', 'experiences', 'journal', 'reviews', 'about', 'booking'].includes(hash)) {
        setActiveTab(hash);
        setSelectedTour(null);
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash) {
      handleHashChange();
    }
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSelectedTour(null);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTour = (tour: Tour) => {
    setSelectedTour(tour);
    window.location.hash = `tour/${tour.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromTour = () => {
    setSelectedTour(null);
    window.location.hash = activeTab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookingModal = (tourId?: string) => {
    setBookingTourId(tourId);
    setIsBookingModalOpen(true);
  };

  const handleOpenJourneyModal = () => {
    setIsJourneyModalOpen(true);
  };

  const handleSelectArticle = (article: JournalArticle) => {
    setSelectedArticle(article);
  };

  const handleAddReview = (newReview: Review) => {
    setReviews(prev => [newReview, ...prev]);
  };

  const handleOpenPoliciesModal = (tab?: PolicyTabId) => {
    if (tab) setActivePolicyTab(tab);
    setIsPoliciesModalOpen(true);
  };

  const handleOpenBookingStatusModal = () => {
    setIsBookingStatusModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F2EC] text-[#302B29]">
      {/* Top Fixed Editorial Navigation */}
      <Navbar
        activeTab={selectedTour ? 'experiences' : activeTab}
        setActiveTab={handleTabChange}
        onOpenBooking={handleOpenBookingModal}
        onStartBeautyJourney={handleOpenJourneyModal}
        onOpenBookingStatus={handleOpenBookingStatusModal}
      />

      {/* Main Page Routing Views */}
      <main className="flex-1">
        {selectedTour ? (
          <TourDetailPage
            tour={selectedTour}
            onBack={handleBackFromTour}
            onBookNow={(tourId) => handleOpenBookingModal(tourId)}
            onSelectTour={handleSelectTour}
            allTours={TOURS_DATA}
          />
        ) : (
          <>
            {activeTab === 'home' && (
              <HomePage
                tours={TOURS_DATA}
                articles={ARTICLES_DATA}
                reviews={reviews}
                onSelectTour={handleSelectTour}
                onBookTour={(tourId) => handleOpenBookingModal(tourId)}
                onStartBeautyJourney={handleOpenJourneyModal}
                onSelectArticle={handleSelectArticle}
                onNavigate={handleTabChange}
              />
            )}

            {activeTab === 'experiences' && (
              <ExperiencesPage
                tours={TOURS_DATA}
                onSelectTour={handleSelectTour}
                onBookTour={(tourId) => handleOpenBookingModal(tourId)}
              />
            )}

            {activeTab === 'journal' && (
              <BeautyJournalPage
                articles={ARTICLES_DATA}
                onSelectArticle={handleSelectArticle}
                onBookExperience={() => handleOpenBookingModal()}
              />
            )}

            {activeTab === 'reviews' && (
              <ReviewsPage
                reviews={reviews}
                tours={TOURS_DATA}
                onAddReview={handleAddReview}
                onBookExperience={() => handleOpenBookingModal()}
              />
            )}

            {activeTab === 'about' && (
              <AboutPage
                onBookExperience={() => handleOpenBookingModal()}
              />
            )}

            {activeTab === 'booking' && (
              <BookingPage
                tours={TOURS_DATA}
                initialTourId={bookingTourId}
                onNavigateToTour={handleSelectTour}
                onOpenPoliciesModal={handleOpenPoliciesModal}
              />
            )}
          </>
        )}
      </main>

      {/* Editorial Footer */}
      <Footer
        setActiveTab={handleTabChange}
        onOpenBooking={() => handleOpenBookingModal()}
        onOpenPoliciesModal={handleOpenPoliciesModal}
        onOpenBookingStatus={handleOpenBookingStatusModal}
      />

      {/* Global Booking / Reservation Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        tours={TOURS_DATA}
        selectedTourId={bookingTourId}
      />

      {/* Global Personalized Beauty Journey Builder Modal */}
      <BeautyJourneyModal
        isOpen={isJourneyModalOpen}
        onClose={() => setIsJourneyModalOpen(false)}
        onNavigate={handleTabChange}
        onSelectTour={(tourId) => {
          setIsJourneyModalOpen(false);
          const found = TOURS_DATA.find(t => t.id === tourId || t.slug === tourId);
          if (found) {
            handleSelectTour(found);
          }
        }}
        onBookTour={(tourId) => {
          setIsJourneyModalOpen(false);
          handleOpenBookingModal(tourId);
        }}
      />

      {/* Global Beauty Journal Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onBookExperience={() => {
          setSelectedArticle(null);
          handleOpenBookingModal();
        }}
      />

      {/* Legal & Business Policies Modal */}
      <LegalPoliciesModal
        isOpen={isPoliciesModalOpen}
        onClose={() => setIsPoliciesModalOpen(false)}
        initialTab={activePolicyTab}
      />

      {/* Booking Status & Lifecycle Lookup Modal */}
      <BookingStatusModal
        isOpen={isBookingStatusModalOpen}
        onClose={() => setIsBookingStatusModalOpen(false)}
        onContactConcierge={() => {
          setIsBookingStatusModalOpen(false);
          handleTabChange('booking');
        }}
      />

      {/* Floating WhatsApp Contact Button */}
      <WhatsAppButton />
    </div>
  );
}
