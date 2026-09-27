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
import { AboutPage } from './pages/AboutPage';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  // Business operations modals
  const [isPoliciesModalOpen, setIsPoliciesModalOpen] = useState<boolean>(false);
  const [activePolicyTab, setActivePolicyTab] = useState<PolicyTabId>('cancellation');

  // Language state (default EN, active on homepage)
  const [language, setLanguage] = useState<'EN' | '中文'>(() => {
    try {
      const saved = localStorage.getItem('nori_language');
      return saved === '中文' ? '中文' : 'EN';
    } catch {
      return 'EN';
    }
  });

  const handleLanguageChange = (lang: 'EN' | '中文') => {
    setLanguage(lang);
    try {
      localStorage.setItem('nori_language', lang);
    } catch {
      // ignore
    }
  };

  // Handle hash-based navigation for deep links or browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'arrange', 'plan', 'journal', 'about'].includes(hash)) {
        setActiveTab(hash);
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
        currentLang={language}
        onLanguageChange={handleLanguageChange}
      />

      {/* Main Page Routing Views */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            articles={ARTICLES_DATA}
            onSelectArticle={handleSelectArticle}
            onNavigate={handleTabChange}
            language={language}
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
