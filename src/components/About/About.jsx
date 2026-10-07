import React from 'react';
import { Sparkles, MapPin, Target, Zap, BookOpen } from 'lucide-react';
import { aboutData, personalInfo } from '../../data/portfolioData';
import './About.css';

export default function About() {
  const getBentoIcon = (tag) => {
    switch (tag.toLowerCase()) {
      case 'profile':
        return <BookOpen size={16} className="text-[#ff78b4]" />;
      case 'strength':
        return <Zap size={16} className="text-[#bf9aff]" />;
      case 'objective':
        return <Target size={16} className="text-[#ff78b4]" />;
      case 'location':
        return <MapPin size={16} className="text-[#bf9aff]" />;
      default:
        return <Sparkles size={16} className="text-[#ff78b4]" />;
    }
  };

  return (
    <section id="about" className="section-wrapper about-section">
      <div className="app-container">
        {/* Section Header */}
        <div className="about-header-block">
          <span className="section-kicker">About Narrative</span>
          <h2 className="editorial-title about-main-heading">
            {aboutData.heading.split('.')[0]}. <br />
            <span className="text-gradient-pink">{aboutData.heading.split('.')[1]}</span>
          </h2>
          <p className="about-intro-text">
            {aboutData.description}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="about-bento-grid">
          {aboutData.bentoCards.map((card, idx) => {
            const isFeatured = idx === 0;
            return (
              <div
                key={card.id}
                className={`bento-card ${isFeatured ? 'bento-card-featured' : ''}`}
              >
                <div>
                  <div className="bento-top-row">
                    <span className="bento-card-tag">
                      {getBentoIcon(card.tag)}
                      <span>{card.tag}</span>
                    </span>
                    <span className="text-xs text-[var(--text-muted)] font-mono">0{idx + 1}</span>
                  </div>

                  <h3 className="bento-card-title">{card.title}</h3>
                  {card.subtitle && (
                    <div className="text-sm text-[var(--pink-light)] font-medium mb-2">
                      {card.subtitle}
                    </div>
                  )}
                  <p className="bento-card-body">{card.content}</p>
                </div>

                <div className="bento-card-footer">
                  <span>✦ {card.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quantitative Performance Metrics */}
        <div className="stats-overview-grid">
          {aboutData.statistics.map((stat) => (
            <div key={stat.label} className="stat-box">
              <div className="stat-number text-gradient-pink">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">{stat.subtext}</div>
            </div>
          ))}
        </div>

        {/* Editorial Quote Banner */}
        <div className="about-quote-panel">
          <p className="about-quote-text">
            “{aboutData.quote}”
          </p>
          <div className="about-quote-author">
            — {personalInfo.name} · {personalInfo.degree}
          </div>
        </div>
      </div>
    </section>
  );
}
