import React from 'react';
import { Mail, ArrowUp, Cpu } from 'lucide-react';
import { profileData } from '../../data/profile';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { soundFx } from '../../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-cyber-void border-t border-slate-900 pt-16 pb-12 overflow-hidden">
      {/* Animated Glowing Laser Separator */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-cyan to-transparent shadow-[0_0_15px_#00f0ff]" />
      <div className="absolute top-0 left-1/4 w-1/2 h-12 bg-cyber-cyan/10 blur-xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full bg-cyber-dark border border-cyber-cyan/60 p-0.5 shadow-[0_0_10px_rgba(0,240,255,0.3)] overflow-hidden">
                <img
                  src="/images/rahul-gupta.png"
                  alt="Rahul Gupta"
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>
              <span className="font-orbitron font-extrabold text-lg text-white tracking-wider">
                RAHUL GUPTA
              </span>
            </div>

            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Aspiring AI Engineer and B.Tech CSE (AI) student at ABESIT, Ghaziabad, focused on Machine Learning, Deep Learning, Computer Vision, and NLP.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
              <span>{profileData.status}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-orbitron text-xs font-semibold text-cyber-cyan uppercase tracking-widest">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              {['About', 'Skills', 'Experience', 'Projects', 'Journey', 'Education'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => soundFx.playClick()}
                    className="hover:text-cyber-pink transition-colors flex items-center gap-1"
                  >
                    <span className="text-slate-600">//</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social & Back to Top */}
          <div className="space-y-4">
            <h4 className="font-orbitron text-xs font-semibold text-cyber-pink uppercase tracking-widest">
              CONNECTIVITY
            </h4>

            <div className="flex items-center gap-3">
              <a
                href={profileData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-lg bg-cyber-dark border border-slate-800 hover:border-cyber-cyan text-slate-300 hover:text-cyber-cyan flex items-center justify-center transition-all duration-200 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={profileData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-lg bg-cyber-dark border border-slate-800 hover:border-cyber-pink text-slate-300 hover:text-cyber-pink flex items-center justify-center transition-all duration-200 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profileData.links.email}`}
                onClick={() => soundFx.playClick()}
                aria-label="Send Email"
                className="w-10 h-10 rounded-lg bg-cyber-dark border border-slate-800 hover:border-cyber-yellow text-slate-300 hover:text-cyber-yellow flex items-center justify-center transition-all duration-200 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="w-full flex items-center justify-between px-3 py-2 rounded bg-slate-900/80 hover:bg-cyber-cyan/10 border border-slate-800 hover:border-cyber-cyan/40 text-slate-300 hover:text-cyber-cyan font-mono text-xs transition-all"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyber-cyan/70" />
            <span>© 2026 Rahul Gupta. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-slate-600 bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800">
              SYSTEM V2.6 // SYNTHWAVE_AI_LAB
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
