import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import SpaceBackground from './components/Background/SpaceBackground';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-[#ff78b4]/30 selection:text-white">
      {/* Interactive Cursor Ambient Glow */}
      <div
        className="custom-cursor-glow"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
        aria-hidden="true"
      />

      {/* Futuristic Space & Ambient Stars Background */}
      <SpaceBackground />

      {/* Fixed Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
