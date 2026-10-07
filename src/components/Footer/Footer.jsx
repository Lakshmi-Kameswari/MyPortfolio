import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="app-container">
        <div className="footer-inner-grid">
          {/* Brand info */}
          <div className="footer-brand-lockup">
            <div className="brand-monogram">
              {personalInfo.initials}
            </div>
            <div>
              <div className="font-semibold text-white text-base">{personalInfo.name}</div>
              <div className="text-xs text-[var(--text-muted)]">{personalInfo.role}</div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="footer-nav-links" aria-label="Footer Navigation">
            <a href="#about" className="footer-nav-link">About</a>
            <a href="#skills" className="footer-nav-link">Skills</a>
            <a href="#experience" className="footer-nav-link">Experience</a>
            <a href="#projects" className="footer-nav-link">Projects</a>
            <a href="#education" className="footer-nav-link">Education</a>
            <a href="#contact" className="footer-nav-link">Contact</a>
          </nav>

          {/* Social Icons */}
          <div className="footer-socials">
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-icon"
              aria-label="Send Email"
            >
              <Mail size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {personalInfo.name}. Designed & Built with passion.</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
