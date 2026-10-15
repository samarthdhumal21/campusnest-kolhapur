import React, { useState } from 'react';
import { ArrowRight, Database, Check } from 'lucide-react';
import { collegesData } from '../data/colleges';
import { accommodationsData } from '../data/accommodations';
import { messesData } from '../data/messes';

interface HeroProps {
  selectedCollegeId?: string;
  onFindStayClick: (collegeId?: string) => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ selectedCollegeId, onFindStayClick, onExploreClick }) => {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="hero-container-outer">
      <section className="ecoriz-hero">
        <div className="hero-content-wrapper">
          {/* Top Outlined Pill Tag */}
          <div className="hero-tag-pill">
            <span className="hero-tag-dot" />
            <span>Kolhapur Engineering Student Living Cost & Stay Finder</span>
          </div>

          {/* Huge White Bold Heading */}
          <h1 className="hero-main-heading">
            Know Your Real Living Cost <br className="hero-br" />
            Before Moving to Kolhapur.
          </h1>

          {/* Subtext */}
          <p className="hero-subtext">
            Discover verified room and PG options, pair them with authentic local student messes, 
            and calculate your accurate total monthly budget—rent, utilities, food, and commute—before you arrive.
          </p>

          {/* Hero CTAs */}
          <div className="hero-button-group">
            <button className="pill-btn-white-cta" onClick={() => onFindStayClick()}>
              <span>Find My Stay</span>
              <span className="pill-icon-dark-circle">
                <ArrowRight size={15} />
              </span>
            </button>

            <button className="pill-btn-glass-cta" onClick={onExploreClick}>
              <span>Browse All Listings</span>
            </button>
          </div>

          {/* Floating Glass Stat Card in bottom area */}
          <div className="hero-floating-stat-card">
            <div className="stat-card-badge">
              <Database size={13} color="#A9C8E8" />
              <span>Illustrative demo data</span>
            </div>
            <div className="stat-card-metrics">
              <span>{accommodationsData.length}+ sample stays</span>
              <span className="stat-divider">·</span>
              <span>{messesData.length} sample messes</span>
              <span className="stat-divider">·</span>
              <span>{collegesData.length} colleges</span>
            </div>
          </div>
        </div>
      </section>

      {/* College Logo Strip under Hero - Infinite Right-to-Left Sliding Marquee */}
      <div className="college-strip-wrapper">
        <div className="college-strip-inner">
          <div className="college-strip-header">
            <span className="college-strip-label">ENGINEERING COLLEGES</span>
            <span className="college-strip-hint">
              <span className="pulse-dot" /> Click any campus to calculate living costs
            </span>
          </div>

          <div
            className={`college-carousel-container ${isPaused ? 'is-paused' : ''}`}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            role="region"
            aria-label="Engineering Colleges Carousel"
          >
            <div className="carousel-track">
              {/* Primary Group - Interactive & Screen-reader Accessible */}
              <div className="carousel-group" role="group" aria-label="Kolhapur Engineering Colleges">
                {collegesData.map(c => {
                  const isSelected = selectedCollegeId === c.id;
                  const hasError = !!imgErrors[c.id];
                  const isDypTalsande = c.id === 'dyp-talsande';

                  return (
                    <button
                      key={c.id}
                      type="button"
                      className={`college-logo-card ${isSelected ? 'selected' : ''} ${isDypTalsande ? 'card-dyp-talsande' : ''}`}
                      onClick={() => onFindStayClick(c.id)}
                      aria-label={`Select ${c.shortName}`}
                      aria-pressed={isSelected}
                      title={`${c.name} • ${c.locality}, Kolhapur`}
                    >
                      {isSelected && (
                        <span className="college-card-check-badge" aria-hidden="true" title="Selected campus">
                          <Check size={11} strokeWidth={3} />
                        </span>
                      )}
                      
                      {!hasError ? (
                        <img
                          src={c.logo}
                          alt={`${c.name} logo`}
                          loading="lazy"
                          width={120}
                          height={56}
                          className="college-logo-img"
                          onError={() => {
                            console.warn(`Failed to load logo for ${c.id}: ${c.logo}`);
                            setImgErrors(prev => ({ ...prev, [c.id]: true }));
                          }}
                        />
                      ) : (
                        <div className="college-logo-fallback-box">
                          <span>{c.shortName}</span>
                        </div>
                      )}

                      <span className="college-card-shortname">{c.shortName}</span>
                    </button>
                  );
                })}
              </div>

              {/* Duplicated Group for Infinite Seamless Loop (hidden from screen-readers) */}
              <div className="carousel-group" aria-hidden="true">
                {collegesData.map(c => {
                  const isSelected = selectedCollegeId === c.id;
                  const hasError = !!imgErrors[c.id];
                  const isDypTalsande = c.id === 'dyp-talsande';

                  return (
                    <button
                      key={`dup-${c.id}`}
                      type="button"
                      tabIndex={-1}
                      className={`college-logo-card ${isSelected ? 'selected' : ''} ${isDypTalsande ? 'card-dyp-talsande' : ''}`}
                      onClick={() => onFindStayClick(c.id)}
                      aria-label={`Select ${c.shortName}`}
                      title={`${c.name} • ${c.locality}, Kolhapur`}
                    >
                      {isSelected && (
                        <span className="college-card-check-badge" aria-hidden="true">
                          <Check size={11} strokeWidth={3} />
                        </span>
                      )}
                      
                      {!hasError ? (
                        <img
                          src={c.logo}
                          alt=""
                          loading="lazy"
                          width={120}
                          height={56}
                          className="college-logo-img"
                          onError={() => {
                            setImgErrors(prev => ({ ...prev, [c.id]: true }));
                          }}
                        />
                      ) : (
                        <div className="college-logo-fallback-box">
                          <span>{c.shortName}</span>
                        </div>
                      )}

                      <span className="college-card-shortname">{c.shortName}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
