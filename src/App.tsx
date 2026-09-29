import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowLeft, Compass } from 'lucide-react';
import { JournalArticle } from './types';
import { ARTICLES_DATA } from './data/articles';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ArticleModal } from './components/ArticleModal';
import { LegalPoliciesModal, PolicyTabId } from './components/LegalPoliciesModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { WhatWeCanArrangePage } from './pages/WhatWeCanArrangePage';
import { PlanMyTripPage } from './pages/PlanMyTripPage';
import { BeautyJournalPage } from './pages/BeautyJournalPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { AboutPage } from './pages/AboutPage';

const VALID_TABS = ['home', 'arrange', 'plan', 'journal', 'reviews', 'about'];

export default function App() {
  const [activeTab, setActiveTab] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '').replace('/', '');
    if (VALID_TABS.includes(hash)) return hash;
    const path = window.location.pathname.replace(/^\/+/, '').split('/')[0];
    if (VALID_TABS.includes(path)) return path;
    return 'home';
  });
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  // Business operations modals
  const [isPoliciesModalOpen, setIsPoliciesModalOpen] = useState<boolean>(false);
  const [activePolicyTab, setActivePolicyTab] = useState<PolicyTabId>('cancellation');

  // Handle hash-based and popstate navigation for deep links or browser history
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.replace('#', '').replace('/', '');
      if (VALID_TABS.includes(hash)) {
        setActiveTab(hash);
        window.scrollTo(0, 0);
        return;
      }
      const path = window.location.pathname.replace(/^\/+/, '').split('/')[0];
      if (VALID_TABS.includes(path)) {
        setActiveTab(path);
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    handleLocationChange();
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlanMyTrip = () => {
    handleTabChange('plan');
  };

  const handleSelectArticle = (article: JournalArticle) => {
    setSelectedArticle(article);
  };

  const handleOpenPoliciesModal = (tab?: PolicyTabId) => {
    if (tab) setActivePolicyTab(tab);
    setIsPoliciesModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F2EC] text-[#302B29]">
      {/* Top Fixed Editorial Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onPlanMyTrip={handlePlanMyTrip}
      />

      {/* Main Page Routing Views */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            articles={ARTICLES_DATA}
            onSelectArticle={handleSelectArticle}
            onNavigate={handleTabChange}
          />
        )}

        {activeTab === 'arrange' && (
          <WhatWeCanArrangePage onPlanMyTrip={handlePlanMyTrip} />
        )}

        {activeTab === 'plan' && (
          <PlanMyTripPage
            onOpenPoliciesModal={handleOpenPoliciesModal}
            onBackHome={() => handleTabChange('home')}
          />
        )}

        {activeTab === 'journal' && (
          <BeautyJournalPage
            articles={ARTICLES_DATA}
            onSelectArticle={handleSelectArticle}
            onBookExperience={handlePlanMyTrip}
          />
        )}

        {activeTab === 'reviews' && (
          <ReviewsPage />
        )}

        {activeTab === 'about' && (
          <AboutPage
            onBookExperience={handlePlanMyTrip}
          />
        )}
      </main>

      {/* Editorial Footer */}
      <Footer
        setActiveTab={handleTabChange}
        onOpenBooking={handlePlanMyTrip}
        onOpenPoliciesModal={handleOpenPoliciesModal}
      />

      {/* Global Beauty Journal Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onBookExperience={() => {
          setSelectedArticle(null);
          handlePlanMyTrip();
        }}
      />

      {/* Legal & Business Policies Modal */}
      <LegalPoliciesModal
        isOpen={isPoliciesModalOpen}
        onClose={() => setIsPoliciesModalOpen(false)}
        initialTab={activePolicyTab}
      />

      {/* Floating WhatsApp Contact Button */}
      <WhatsAppButton />
    </div>
  );
}
