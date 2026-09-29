import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { NoriLogo } from './NoriLogo';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onPlanMyTrip: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onPlanMyTrip,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'arrange', label: 'WHAT WE CAN ARRANGE' },
    { id: 'plan', label: 'PLAN YOUR TRIP' },
    { id: 'journal', label: "NORI'S JOURNAL" },
    { id: 'reviews', label: 'REVIEWS' },
    { id: 'about', label: 'ABOUT' },
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
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-6 xl:gap-8">
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

          {/* Right Actions: PLAN MY TRIP CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              id="nav-plan-trip-btn"
              onClick={onPlanMyTrip}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#302B29] text-[#F7F2EC] text-xs uppercase tracking-[0.18em] font-medium rounded-full hover:bg-[#443E3B] transition-all shadow-xs group border border-[#302B29]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E9D2CD] group-hover:rotate-12 transition-transform" />
              <span>PLAN MY TRIP</span>
            </button>

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

          <div className="pt-8 border-t border-[#EADBCE] space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onPlanMyTrip();
              }}
              className="w-full py-3.5 bg-[#302B29] text-[#F7F2EC] text-xs uppercase tracking-[0.2em] font-medium rounded-full flex items-center justify-center gap-2 shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-[#D9B4B0]" />
              <span>PLAN MY TRIP</span>
            </button>
            <div className="text-center text-[11px] text-[#786761] tracking-wider">
              <span>Seoul, South Korea • Personalized Travel & K-Beauty Planning</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
