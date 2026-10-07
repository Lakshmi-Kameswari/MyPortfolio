import React from 'react';
import { experiencesData } from '../../data/portfolioData';
import { Briefcase, Calendar, Building2, Edit3 } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper experience-section">
      <div className="app-container">
        {/* Section Header */}
        <div className="experience-header-block">
          <span className="section-kicker">Professional Journey</span>
          <h2 className="editorial-title text-4xl lg:text-5xl mb-4">
            Where I've <br />
            <span className="text-gradient-pink">learned by doing.</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-base leading-relaxed">
            Practical exposure to responsive interfaces, frontend implementation, design thinking, and problem-solving.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="timeline-container">
          <div className="timeline-marker-line" />

          <div className="timeline-items-stack">
            {experiencesData.map((exp) => (
              <div key={exp.id} className="timeline-item-wrapper">
                <div className="timeline-node" />

                <div className={`timeline-card ${exp.isEditablePlaceholder ? 'timeline-card-placeholder' : ''}`}>
                  <div className="timeline-top-bar">
                    <div className="timeline-type-pill">
                      <Briefcase size={14} className="text-[#ff78b4]" />
                      <span>{exp.type}</span>
                    </div>
                    <div className="timeline-date-stamp flex items-center gap-1.5">
                      <Calendar size={13} className="text-[#bf9aff]" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <h3 className="timeline-role-title">{exp.role}</h3>

                  <div className="timeline-org-row">
                    <Building2 size={16} />
                    <span>{exp.organization}</span>
                    {exp.location && (
                      <span className="text-[var(--text-muted)] text-xs">· {exp.location}</span>
                    )}
                  </div>

                  <p className="timeline-description">
                    {exp.description}
                  </p>

                  <div className="timeline-tags-flex">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {exp.isEditablePlaceholder && (
                    <div className="editable-hint-banner">
                      <Edit3 size={13} className="shrink-0" />
                      <span>
                        Customizable slot — ready to be updated with your next internship or project in <code>portfolioData.js</code>.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
