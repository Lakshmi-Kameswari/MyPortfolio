import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section scrollspy
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Zone 1: Brand Wordmark */}
        <a href="#hero" className="brand-link" onClick={(e) => handleNavClick(e, '#hero')}>
          <div className="brand-monogram">
            {personalInfo.initials}
          </div>
          <div className="brand-text-block">
            <span className="brand-name">{personalInfo.shortName}</span>
            <span className="brand-subtitle">AI & ML · Web Development</span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="nav-links-desktop" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            const sectionKey = item.href.replace('#', '');
            const isActive = activeSection === sectionKey;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`nav-item-link ${isActive ? 'active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: CTA & Mobile Toggle */}
        <div className="nav-cta-desktop">
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume-btn inline-flex items-center gap-1.5"
          >
            <span>Resume</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        {/* Mobile menu hamburger button */}
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <nav className="mobile-nav-list">
          {NAV_ITEMS.map((item) => {
            const sectionKey = item.href.replace('#', '');
            const isActive = activeSection === sectionKey;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="pt-4 border-t border-[rgba(255,255,255,0.08)] flex flex-col gap-3">
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>View Resume</span>
            <ArrowUpRight size={16} />
          </a>
          <a
            href="#contact"
            className="btn-secondary"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <span>Contact Me</span>
          </a>
        </div>
      </div>
    </header>
  );
}
