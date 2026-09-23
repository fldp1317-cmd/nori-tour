import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowRight, Search, ClipboardList } from 'lucide-react';
import { NoriLogo } from './NoriLogo';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBooking: (tourId?: string) => void;
  onStartBeautyJourney?: () => void;
  onOpenBookingStatus?: () => void;
  currentLang?: 'EN' | '中文';
  onLanguageChange?: (lang: 'EN' | '中文') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenBooking,
  onStartBeautyJourney,
  onOpenBookingStatus,
  currentLang: controlledLang,
  onLanguageChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [internalLang, setInternalLang] = useState<'EN' | '中文'>('EN');

  const currentLang = controlledLang ?? internalLang;
  const handleLanguageSelect = (lang: 'EN' | '中文') => {
    if (onLanguageChange) {
      onLanguageChange(lang);
    } else {
      setInternalLang(lang);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'journal', label: 'Beauty Journal' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'about', label: 'About NORI' },
    { id: 'booking', label: 'Contact & Book' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F2EC]/95 backdrop-blur-md shadow-xs border-b border-[#EADBCE] py-3 sm:py-3.5'
            : 'bg-[#F7F2EC]/85 backdrop-blur-sm border-b border-[#EADBCE]/60 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo with Nori Symbol */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="group flex items-center text-left focus:outline-none transition-opacity hover:opacity-90"
          >
            <NoriLogo variant="dark" size="md" showSubtitle={true} />
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-xs tracking-[0.16em] uppercase transition-all duration-200 py-1.5 relative ${
                    isActive
                      ? 'text-[#302B29] font-semibold'
                      : 'text-[#786761] hover:text-[#D9B4B0]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D9B4B0]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Track Reservation, Start Journey CTA & Language Switcher */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {onOpenBookingStatus && (
              <button
                id="nav-track-booking-btn"
                onClick={onOpenBookingStatus}
                title="Lookup reservation status by Order ID or email"
                className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs uppercase tracking-[0.14em] text-[#786761] hover:text-[#302B29] rounded-full border border-[#EADBCE] hover:border-[#D9B4B0] bg-[#FCFAF7] transition-all"
              >
                <ClipboardList className="w-3.5 h-3.5 text-[#D9B4B0]" />
                <span className="hidden md:inline">My Reservation</span>
              </button>
            )}

            <button
              id="nav-start-journey-btn"
              onClick={() => (onStartBeautyJourney ? onStartBeautyJourney() : onOpenBooking())}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#302B29] text-[#F7F2EC] text-xs uppercase tracking-[0.18em] font-medium rounded-full hover:bg-[#443E3B] transition-all shadow-xs group border border-[#302B29]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E9D2CD] group-hover:rotate-12 transition-transform" />
              <span>Start Journey</span>
            </button>

            {/* Language Switcher UI: EN | 中文 */}
            <div
              className="inline-flex items-center px-2 py-1 rounded-full border border-[#EADBCE] bg-[#FCFAF7] text-[11px] select-none"
              aria-label="Language selector"
            >
              <button
                type="button"
                onClick={() => handleLanguageSelect('EN')}
                className={`transition-colors font-medium px-1.5 ${
                  currentLang === 'EN'
                    ? 'text-[#302B29] font-semibold'
                    : 'text-[#9B8983] hover:text-[#302B29]'
                }`}
                aria-current={currentLang === 'EN' ? 'true' : undefined}
              >
                EN
              </button>
              <span className="text-[#D5C7BC] text-[10px]" aria-hidden="true">|</span>
              <button
                type="button"
                onClick={() => handleLanguageSelect('中文')}
                className={`transition-colors px-1.5 ${
                  currentLang === '中文'
                    ? 'text-[#302B29] font-semibold'
                    : 'text-[#9B8983] hover:text-[#302B29]'
                }`}
                aria-current={currentLang === '中文' ? 'true' : undefined}
              >
                中文
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2 text-[#302B29] hover:text-[#D9B4B0] transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="fixed inset-0 z-40 bg-[#F7F2EC] pt-24 px-8 pb-10 flex flex-col justify-between lg:hidden animate-fade-in"
        >
          <div className="space-y-6">
            <div className="border-b border-[#EADBCE] pb-3">
              <NoriLogo size="sm" showSubtitle={true} />
            </div>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-xl tracking-[0.08em] font-editorial py-2 flex items-center justify-between ${
                    activeTab === item.id
                      ? 'text-[#D9B4B0] font-medium'
                      : 'text-[#302B29] hover:text-[#D9B4B0]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-40 text-[#D9B4B0]" />
                </button>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-[#EADBCE] space-y-3">
            {onOpenBookingStatus && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingStatus();
                }}
                className="w-full py-3 bg-[#FCFAF7] border border-[#EADBCE] text-[#302B29] text-xs uppercase tracking-[0.16em] font-medium rounded-full flex items-center justify-center gap-2"
              >
                <ClipboardList className="w-4 h-4 text-[#D9B4B0]" />
                <span>Track Reservation Status</span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onStartBeautyJourney) {
                  onStartBeautyJourney();
                } else {
                  onOpenBooking();
                }
              }}
              className="w-full py-3.5 bg-[#302B29] text-[#F7F2EC] text-xs uppercase tracking-[0.2em] font-medium rounded-full flex items-center justify-center gap-2 shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-[#D9B4B0]" />
              <span>Start Your Beauty Journey</span>
            </button>
            <div className="text-center text-[11px] text-[#786761] tracking-wider">
              <span>Seoul, South Korea • Registered Inbound K-Beauty Concierge</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
