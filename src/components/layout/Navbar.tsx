import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { profileData } from '../../data/profile';
import { soundFx } from '../../utils/audio';

const navLinks = [
  { name: 'HOME', href: '#hero' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'JOURNEY', href: '#journey' },
  { name: 'EDUCATION', href: '#education' },
  { name: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(soundFx.isMuted);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = soundFx.toggleMute();
    setIsMuted(newState);
  };

  const handleLinkClick = (href: string) => {
    soundFx.playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-cyber-void/85 backdrop-blur-xl border-b border-cyber-cyan/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Status */}
          <div className="flex items-center gap-4">
            <a
              href="#hero"
              onClick={() => soundFx.playClick()}
              className="flex items-center gap-3 group cursor-pointer"
            >
              {/* Profile Avatar Thumbnail */}
              <div className="relative w-9 h-9 rounded-full bg-cyber-dark border border-cyber-cyan/70 p-0.5 group-hover:border-cyber-pink transition-colors shadow-[0_0_12px_rgba(0,240,255,0.4)] overflow-hidden">
                <img
                  src="/images/rahul-gupta.png"
                  alt="Rahul Gupta"
                  className="w-full h-full object-cover object-top rounded-full group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-orbitron font-extrabold text-sm sm:text-base tracking-wider text-white group-hover:text-cyber-cyan transition-colors">
                  RAHUL GUPTA
                </span>
                <span className="font-mono text-[10px] text-slate-400 tracking-widest uppercase">
                  AI/ML DEVELOPER
                </span>
              </div>
            </a>

            {/* Futuristic Status Pill (Hidden on small mobile) */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-dark/80 border border-emerald-500/30 text-emerald-400 font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
              <span className="truncate max-w-[220px]">{profileData.status}</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`relative px-3 py-1.5 font-mono text-xs tracking-wider transition-all duration-200 uppercase rounded cursor-pointer ${
                    isActive
                      ? 'text-cyber-cyan font-bold bg-cyber-cyan/10 border border-cyber-cyan/30 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-cyber-pink shadow-[0_0_8px_#ff007f]"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Audio Toggle + CTA + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Toggle Button */}
            <button
              onClick={handleSoundToggle}
              title={isMuted ? 'Unmute UI audio effects' : 'Mute UI audio effects'}
              className="p-2 rounded-lg bg-cyber-dark/80 border border-slate-800 hover:border-cyber-cyan/50 text-slate-300 hover:text-cyber-cyan transition-colors"
              aria-label="Toggle Sound Effects"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-slate-500" /> : <Volume2 className="w-4 h-4 text-cyber-cyan animate-pulse" />}
            </button>

            {/* Quick Connect CTA */}
            <a
              href="#contact"
              onClick={() => soundFx.playClick()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-gradient-to-r from-cyber-pink/20 to-purple-600/20 hover:from-cyber-pink/30 hover:to-purple-600/30 border border-cyber-pink/50 text-pink-200 font-mono text-xs font-medium tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(255,0,127,0.2)]"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 rounded-lg bg-cyber-dark/80 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-cyber-dark/95 backdrop-blur-2xl border-b border-cyber-cyan/30 px-6 py-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="flex items-center justify-between py-2.5 px-3 rounded font-orbitron text-sm tracking-wider text-slate-200 hover:text-cyber-cyan hover:bg-cyber-cyan/10 text-left border-l-2 border-transparent hover:border-cyber-cyan transition-all"
                >
                  <span>{link.name}</span>
                  <span className="font-mono text-[10px] text-slate-500">// NAV</span>
                </button>
              ))}

              <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{profileData.status}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
