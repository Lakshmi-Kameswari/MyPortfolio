import React, { useState } from 'react';
import { ArrowDownRight, Sparkles, Send, GraduationCap } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import './Hero.css';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="app-container">
        <div className="hero-layout-grid">
          {/* Left Column: Typography, Narrative & Actions */}
          <div className="hero-content-column">
            <div className="hero-badge-pill">
              <span className="hero-badge-dot" />
              <span>Available for Internships & Collaborations</span>
            </div>

            <h1 className="hero-heading">
              {personalInfo.firstName} <br />
              <span className="hero-gradient-name">{personalInfo.highlightName}</span>
            </h1>

            <div className="hero-subtitle">
              <Sparkles size={18} className="text-[#ff78b4] shrink-0" />
              <span>{personalInfo.role}</span>
            </div>

            <p className="hero-description">
              {personalInfo.heroDescription}
            </p>

            <div className="hero-actions-group">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="btn-primary"
              >
                <span>{personalInfo.primaryCtaText}</span>
                <ArrowDownRight size={17} />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="btn-secondary"
              >
                <span>{personalInfo.secondaryCtaText}</span>
                <Send size={15} />
              </a>
            </div>

            {/* Quick Information / Metrics */}
            <div className="hero-metrics-bar">
              <div className="metric-item">
                <span className="metric-value">{personalInfo.cgpa}</span>
                <span className="metric-label">CGPA</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">{personalInfo.degree}</span>
                <span className="metric-label">Degree</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">{personalInfo.batch}</span>
                <span className="metric-label">Batch</span>
              </div>
            </div>
          </div>

          {/* Right Column: Futuristic Portrait, Halo & Floating Cards */}
          <div className="hero-visual-column">
            <div className="portrait-scene-wrapper">
              {/* Atmospheric Halo Glow */}
              <div className="portrait-halo-glow animate-pulse-halo" />

              {/* Orbit Rings */}
              <div className="orbit-ring orbit-ring-1 animate-orbit">
                <span className="orbit-satellite" />
              </div>
              <div className="orbit-ring orbit-ring-2 animate-orbit-reverse">
                <span className="orbit-satellite-lavender" />
              </div>

              {/* Portrait Frame */}
              <div className="hero-portrait-frame">
                <div className="portrait-inner-mask">
                  {!imageError ? (
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      className="portrait-photo"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="portrait-fallback" aria-label={personalInfo.name}>
                      {personalInfo.initials}
                    </div>
                  )}
                </div>
              </div>

              {/* Status Badge */}
              <div className="portrait-status-badge">
                <span className="status-live-dot" />
                <span>AI & ML Scholar</span>
              </div>

              {/* Floating Cards around the portrait */}
              {personalInfo.floatingHeroCards.map((card, idx) => (
                <div
                  key={card.id}
                  className={`floating-glass-card fc-pos-${idx + 1} mobile-hide-floating`}
                >
                  <span className="fc-label">{card.title}</span>
                  <span className="fc-value">{card.subtitle}</span>
                </div>
              ))}
            </div>

            {/* Mobile Tag Fallback Flow (Cleanly visible on small mobile below portrait) */}
            <div className="mobile-tag-flow hidden">
              {personalInfo.floatingHeroCards.map((card) => (
                <div key={card.id} className="tech-tag">
                  {card.title}: {card.subtitle}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
