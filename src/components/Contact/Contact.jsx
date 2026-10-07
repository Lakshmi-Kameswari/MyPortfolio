import React, { useState } from 'react';
import { contactData } from '../../data/portfolioData';
import { Mail, Linkedin, Github, FileText, MapPin, ArrowUpRight, Copy, Check } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="app-container">
        <div className="contact-card-master">
          <div className="contact-layout-grid">
            {/* Left Content */}
            <div>
              <span className="section-kicker">Get In Touch</span>
              <h2 className="editorial-title contact-heading-text">
                Let's create <br />
                <span className="text-gradient-pink">something meaningful.</span>
              </h2>
              <p className="contact-description">
                {contactData.description}
              </p>

              <div className="contact-details-box">
                {/* Email row with quick copy */}
                <div className="contact-detail-row">
                  <div className="contact-icon-bubble">
                    <Mail size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-mono">
                      Direct Email
                    </div>
                    <div className="truncate font-medium">{contactData.email}</div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-full hover:bg-[rgba(255,120,180,0.15)] text-[var(--pink)] transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location row */}
                <div className="contact-detail-row">
                  <div className="contact-icon-bubble">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-mono">
                      Location
                    </div>
                    <div className="font-medium">{contactData.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="contact-action-panel">
              {/* Primary Email CTA */}
              <a
                href={`mailto:${contactData.email}`}
                className="contact-action-btn contact-action-primary"
              >
                <div className="flex items-center gap-3">
                  <Mail size={19} />
                  <span>Send Direct Email</span>
                </div>
                <ArrowUpRight size={18} />
              </a>

              {/* LinkedIn CTA */}
              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action-btn"
              >
                <div className="flex items-center gap-3">
                  <Linkedin size={19} className="text-[#bf9aff]" />
                  <span>Connect on LinkedIn</span>
                </div>
                <ArrowUpRight size={18} className="text-[var(--text-muted)]" />
              </a>

              {/* GitHub CTA */}
              <a
                href={contactData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action-btn"
              >
                <div className="flex items-center gap-3">
                  <Github size={19} className="text-[#ff78b4]" />
                  <span>Explore GitHub Profile</span>
                </div>
                <ArrowUpRight size={18} className="text-[var(--text-muted)]" />
              </a>

              {/* Resume CTA */}
              <a
                href={contactData.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action-btn"
              >
                <div className="flex items-center gap-3">
                  <FileText size={19} className="text-[#ffaed2]" />
                  <span>Download Curriculum Vitae</span>
                </div>
                <ArrowUpRight size={18} className="text-[var(--text-muted)]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
