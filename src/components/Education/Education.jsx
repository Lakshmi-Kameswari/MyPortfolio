import React from 'react';
import { educationData, careerFocusData } from '../../data/portfolioData';
import { GraduationCap, Award, Compass } from 'lucide-react';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section-wrapper education-section">
      <div className="app-container">
        {/* Section Header */}
        <div className="education-header-block">
          <span className="section-kicker">Academic Background</span>
          <h2 className="editorial-title text-4xl lg:text-5xl mb-3">
            Foundations & <br />
            <span className="text-gradient-pink">Education</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-base">
            Consistently disciplined academic track record bridging core computer science with applied artificial intelligence and machine learning.
          </p>
        </div>

        {/* Education 3-Card Grid */}
        <div className="education-grid">
          {educationData.map((edu, idx) => (
            <div key={idx} className="education-card">
              <div>
                <div className="edu-top-row">
                  <div className="edu-period-badge">
                    {edu.period}
                  </div>
                  <GraduationCap size={18} className="text-[#ff78b4]" />
                </div>

                <h3 className="edu-degree-title">{edu.degree}</h3>
                <div className="edu-institution-name">{edu.institution}</div>
                <p className="edu-details-text">{edu.description}</p>
              </div>

              <div className="edu-score-box">
                <span className="edu-cgpa-number text-gradient-pink">{edu.cgpa}</span>
                <span className="edu-cgpa-label">CGPA</span>
              </div>
            </div>
          ))}
        </div>

        {/* Career Focus Feature Panel */}
        <div className="career-focus-panel">
          <div className="career-focus-text">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--pink-light)] uppercase tracking-wider mb-2">
              <Compass size={14} className="text-[#bf9aff]" />
              <span>Career Trajectory</span>
            </div>
            <h3 className="career-focus-title">{careerFocusData.title}</h3>
            <p className="career-focus-desc">{careerFocusData.description}</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="tech-tag">B.Tech 2023–2027</span>
            <span className="tech-tag">AI & ML Specialization</span>
          </div>
        </div>
      </div>
    </section>
  );
}
