import React, { useState, useEffect, useRef } from 'react';
import { projectsData } from '../../data/portfolioData';
import { ChevronLeft, ChevronRight, Github, ExternalLink, Sparkles, Terminal, Code } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef(null);
  const totalProjects = projectsData.length;

  // Autoplay timer with pause on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalProjects);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, totalProjects]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      goToPrev();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (diff > 50) {
      goToNext();
    } else if (diff < -50) {
      goToPrev();
    }
    touchStartXRef.current = null;
  };

  return (
    <section id="projects" className="section-wrapper projects-section">
      <div className="app-container">
        {/* Section Header */}
        <div className="projects-header-block">
          <div>
            <span className="section-kicker">Featured Work</span>
            <h2 className="editorial-title text-4xl lg:text-5xl mb-3">
              Selected <br />
              <span className="text-gradient-pink">Projects & Experiments</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-base max-w-xl">
              From client-server networking in Python to full-featured interactive desktop utilities and modern responsive web systems.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <span className="font-mono text-xs text-[var(--pink-light)]">
              {String(currentIndex + 1).padStart(2, '0')} / {String(totalProjects).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Slider Viewport */}
        <div
          className="projects-slider-viewport"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Project showcase carousel"
        >
          <div
            className="projects-slider-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projectsData.map((project, idx) => (
              <div key={project.id} className="project-slide-item">
                <div className="project-card-container">
                  {/* Left Info Column */}
                  <div className="project-info-column">
                    <div>
                      <div className="project-meta-header">
                        <span className="project-number-mark">#{project.number}</span>
                        <span className="project-category-badge">{project.category}</span>
                      </div>

                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>

                      {/* Feature Highlights */}
                      <ul className="project-features-list">
                        {project.features.map((feature, fIdx) => (
                          <li key={fIdx} className="project-feature-item">
                            <Sparkles size={13} className="feature-spark-icon" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      {/* Tech Stack */}
                      <div className="project-tech-tags">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* CTA Links */}
                      <div className="project-cta-actions">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                          >
                            <Github size={16} />
                            <span>View Source</span>
                          </a>
                        )}

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                          >
                            <span>Live Demo</span>
                            <ExternalLink size={15} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Media Preview Column */}
                  <div className="project-media-column">
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project-preview-image"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.nextElementSibling;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div className="project-media-scrim" />
                      </>
                    ) : null}

                    {/* Styled Fallback container if image fails or missing */}
                    <div
                      className="project-fallback-visual"
                      style={{ display: project.image ? 'none' : 'flex' }}
                    >
                      <Terminal size={48} className="text-[#ff78b4]" />
                      <div className="font-semibold text-white text-lg">{project.title}</div>
                      <div className="text-xs text-[var(--text-muted)] font-mono">
                        {project.technologies.join(' · ')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Pagination & Arrow Controls */}
        <div className="slider-bottom-controls">
          {/* Dots Indicator */}
          <div className="slider-pagination-dots" role="tablist" aria-label="Project slide navigation">
            {projectsData.map((project, idx) => (
              <button
                key={project.id}
                type="button"
                className={`slider-dot ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to project ${idx + 1}: ${project.title}`}
                aria-selected={currentIndex === idx}
                role="tab"
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="slider-nav-arrows">
            <button
              type="button"
              className="slider-arrow-btn"
              onClick={goToPrev}
              aria-label="Previous project slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="slider-arrow-btn"
              onClick={goToNext}
              aria-label="Next project slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
