import React, { useState } from 'react';
import { Building2, Menu, X, Sparkles, Compass, Info, Home, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeTab: 'home' | 'find' | 'explore' | 'about';
  setActiveTab: (tab: 'home' | 'find' | 'explore' | 'about') => void;
  savedCompareCount: number;
  openCompareDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  savedCompareCount,
  openCompareDrawer
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: 'home' | 'find' | 'explore' | 'about') => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <div className="navbar-outer-wrapper">
      {/* Slim Soft Hackathon Demo Banner */}
      <div className="slim-demo-notice">
        <span className="notice-dot" />
        <span><strong>Hackathon Demo:</strong> Illustrative sample listings & realistic pricing models for Kolhapur engineering students. Not live vacancies.</span>
      </div>

      {/* Floating Glass Pill Navbar */}
      <nav className="glass-navbar">
        <div className="nav-brand-group" onClick={() => handleNavClick('home')}>
          <div className="brand-logo-pill">
            <Building2 size={18} />
          </div>
          <span className="brand-title">
            CampusNest
            <span className="brand-sub">Kolhapur</span>
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="nav-center-pills">
          <button
            className={`nav-pill-btn ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Home
          </button>
          <button
            className={`nav-pill-btn ${activeTab === 'find' ? 'active' : ''}`}
            onClick={() => handleNavClick('find')}
          >
            Find My Stay
          </button>
          <button
            className={`nav-pill-btn ${activeTab === 'explore' ? 'active' : ''}`}
            onClick={() => handleNavClick('explore')}
          >
            Explore
          </button>
          <button
            className={`nav-pill-btn ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            About & Data
          </button>
        </div>

        {/* Right CTA / Compare Button */}
        <div className="nav-right-actions">
          {savedCompareCount > 0 && (
            <button
              className="pill-action-secondary"
              onClick={openCompareDrawer}
              title="Compare selected stays"
            >
              Compare ({savedCompareCount})
            </button>
          )}

          <button
            className="pill-action-primary"
            onClick={() => handleNavClick('find')}
          >
            <span>Budget Matcher</span>
            <span className="pill-icon-circle">
              <Sparkles size={13} />
            </span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="mobile-glass-dropdown">
          <button
            className={`mobile-nav-link ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            <Home size={16} />
            <span>Home</span>
          </button>
          <button
            className={`mobile-nav-link ${activeTab === 'find' ? 'active' : ''}`}
            onClick={() => handleNavClick('find')}
          >
            <Sparkles size={16} />
            <span>Find My Stay (Matcher)</span>
          </button>
          <button
            className={`mobile-nav-link ${activeTab === 'explore' ? 'active' : ''}`}
            onClick={() => handleNavClick('explore')}
          >
            <Compass size={16} />
            <span>Explore Accommodations & Messes</span>
          </button>
          <button
            className={`mobile-nav-link ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            <Info size={16} />
            <span>About & Data Transparency</span>
          </button>
          {savedCompareCount > 0 && (
            <button
              className="mobile-nav-link"
              onClick={() => {
                setMobileMenuOpen(false);
                openCompareDrawer();
              }}
              style={{ color: '#d97706' }}
            >
              Compare Stays ({savedCompareCount})
            </button>
          )}
        </div>
      )}
    </div>
  );
};
