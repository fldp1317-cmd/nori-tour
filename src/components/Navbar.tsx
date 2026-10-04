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
            ? 'bg-[#1C1917]/95 backdrop-blur-md shadow-lg border-b border-[#3D3634] py-3 sm:py-3.5'
            : 'bg-[#1C1917]/85 backdrop-blur-sm border-b border-[#3D3634]/60 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo with Nori Symbol */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="group flex items-center text-left focus:outline-none transition-opacity hover:opacity-90 cursor-pointer"
          >
            <NoriLogo variant="light" size="md" showSubtitle={true} />
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
                  className={`text-xs tracking-[0.16em] uppercase transition-all duration-200 py-1.5 relative cursor-pointer ${
                    isActive
                      ? 'text-[#F7F2EC] font-bold'
                      : 'text-[#E8DFD7]/85 hover:text-[#F7F2EC]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D9B4B0]" />
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
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#D9B4B0] text-[#1C1917] text-xs uppercase tracking-[0.18em] font-semibold rounded-full hover:bg-[#E9D2CD] transition-all shadow-xs group border border-[#D9B4B0] cursor-pointer active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#1C1917] group-hover:scale-110 transition-transform duration-200" />
              <span>PLAN MY TRIP</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2 text-[#F7F2EC] hover:text-[#D9B4B0] transition-colors focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
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
          className="fixed inset-0 z-40 bg-[#1C1917] pt-24 px-8 pb-10 flex flex-col justify-between lg:hidden animate-fade-in"
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-lg tracking-[0.08em] font-sans font-semibold py-3 flex items-center justify-between min-h-[44px] border-b border-[#3D3634]/40 cursor-pointer ${
                  activeTab === item.id
                    ? 'text-[#D9B4B0]'
                    : 'text-[#F7F2EC] hover:text-[#D9B4B0]'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-[#D9B4B0]" />
              </button>
            ))}
          </div>

          <div className="pt-8 border-t border-[#3D3634] space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onPlanMyTrip();
              }}
              className="w-full py-4 bg-[#D9B4B0] text-[#1C1917] text-xs uppercase tracking-[0.2em] font-semibold rounded-full flex items-center justify-center gap-2 shadow-sm min-h-[44px] active:scale-[0.98] cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#1C1917]" />
              <span>PLAN MY TRIP</span>
            </button>
            <div className="text-center text-[11px] text-[#BFB3AC] tracking-wider">
              <span>Seoul, South Korea • Personalized Travel &amp; K-Beauty Planning</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
