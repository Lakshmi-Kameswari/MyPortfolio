import React, { useState, useEffect, useRef } from 'react';
import { skillsData } from '../../data/portfolioData';
import { Cpu, Sparkles } from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-wrapper skills-section">
      <div className="app-container">
        {/* Section Header */}
        <div className="skills-header-block">
          <span className="section-kicker">Technical Proficiencies</span>
          <h2 className="editorial-title text-4xl lg:text-5xl mb-4">
            Specialized in <br />
            <span className="text-gradient-pink">AI & Modern Web Stacks</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-base leading-relaxed">
            Hands-on capability spanning machine learning fundamentals, algorithm design, Python desktop engineering, and modern responsive frontend frameworks.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillsData.map((skill) => {
            const currentWidth = isVisible ? `${skill.percentage}%` : '0%';

            return (
              <div key={skill.name} className="skill-card">
                <div className="skill-card-top">
                  <div>
                    <div className="skill-category-tag">{skill.category}</div>
                    <h3 className="skill-name">{skill.name}</h3>
                  </div>
                  <div className="skill-percentage-pill">
                    {skill.percentage}%
                  </div>
                </div>

                <p className="skill-description">{skill.description}</p>

                {/* Progress Bar */}
                <div className="skill-track-container" aria-label={`${skill.name} proficiency level: ${skill.percentage}%`}>
                  <div
                    className="skill-track-fill"
                    style={{ width: currentWidth }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiet Footnote about skill metrics */}
        <div className="skills-footer-note">
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-[#ff78b4]" />
            <span>Proficiency percentages reflect relative familiarity & practical project usage.</span>
          </div>
          <span className="font-mono text-xs text-[#d95c9a]">Continuous Learning Active</span>
        </div>
      </div>
    </section>
  );
}
