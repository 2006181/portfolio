import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Terminal, Activity, Database, ShieldCheck, Cpu } from 'lucide-react';
import { profileData } from '../../data/profile';
import { HeroNeuralScene } from '../3d/HeroNeuralScene';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { soundFx } from '../../utils/audio';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* 3D WebGL Neural Background Canvas */}
      <HeroNeuralScene />

      {/* Cyberpunk Radial Lighting & Grid Overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-cyber-cyan/10 via-transparent to-cyber-void pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-pink/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyber-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status & Sub-badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-dark/80 border border-cyber-cyan/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse shadow-[0_0_8px_#00f0ff]" />
              <span className="font-mono text-xs text-cyan-200 tracking-wider">
                {profileData.status}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h2 className="font-mono text-sm md:text-base text-cyber-pink tracking-widest uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                HI, I'M
              </h2>
              <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
                Rahul Gupta
              </h1>
              <div className="font-orbitron text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyber-cyan via-cyber-pink to-purple-400 bg-clip-text text-transparent pt-1">
                {profileData.role}
              </div>
            </motion.div>

            {/* Academic Credential & Professional Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              <div className="font-mono text-xs sm:text-sm text-slate-300 bg-slate-900/60 border-l-2 border-cyber-cyan px-3 py-1.5 rounded-r">
                {profileData.degree} <span className="text-cyber-pink">|</span> {profileData.institution}
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
                {profileData.summary}
              </p>
            </motion.div>

            {/* CTAs & Social Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Explore My Work CTA */}
              <a
                href="#projects"
                onClick={() => soundFx.playClick()}
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyber-pink to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-orbitron text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(255,0,127,0.4)] hover:shadow-[0_0_35px_rgba(255,0,127,0.6)] cursor-pointer"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* GitHub Link */}
              <a
                href={profileData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-cyber-dark/80 hover:bg-slate-800 border border-slate-700 hover:border-cyber-cyan text-slate-200 hover:text-cyber-cyan font-mono text-xs font-medium tracking-wider transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GITHUB</span>
              </a>

              {/* LinkedIn Link */}
              <a
                href={profileData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-cyber-dark/80 hover:bg-slate-800 border border-slate-700 hover:border-cyber-pink text-slate-200 hover:text-cyber-pink font-mono text-xs font-medium tracking-wider transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LINKEDIN</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: 3D Holographic AI Telemetry Terminal with Rahul's Full Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Holographic HUD Container */}
            <div className="relative rounded-2xl bg-cyber-dark/90 backdrop-blur-xl border border-cyber-cyan/40 p-5 sm:p-6 shadow-[0_0_45px_rgba(0,240,255,0.2)] overflow-hidden group">
              
              {/* Corner Sci-Fi Brackets */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-cyber-cyan z-20" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-cyber-pink z-20" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-cyber-pink z-20" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-cyber-cyan z-20" />

              {/* HUD Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-800/90 pb-3 mb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyber-cyan animate-pulse" />
                  <span className="font-mono text-xs font-bold text-white tracking-widest">
                    AI_NODE_01 // ACTIVE
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-cyber-emerald bg-emerald-500/15 px-2.5 py-0.5 rounded border border-emerald-500/40 shadow-[0_0_8px_rgba(16,185,129,0.3)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Holographic Full Portrait Container - Perfectly Scaled & Positioned */}
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-xl bg-cyber-void border border-slate-800/90 overflow-hidden flex items-center justify-center">
                
                {/* Background Rotating Cyber Grid */}
                <div className="absolute inset-0 bg-cyber-grid opacity-25 animate-pulse-slow" />
                
                {/* Ambient Hologram Glow Halos */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-56 h-56 bg-gradient-to-tr from-cyber-cyan/20 to-cyber-pink/20 rounded-full blur-3xl pointer-events-none" />
                
                {/* User Portrait Image with Perfect Headroom & Centered Frame */}
                <img
                  src="/images/rahul-gupta.png"
                  alt="Rahul Gupta — AI/ML Developer"
                  className="relative z-10 w-full h-full object-cover object-[center_12%] transition-transform duration-500 group-hover:scale-105"
                />

                {/* Top Biometric HUD Tag */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyber-dark/85 border border-cyber-cyan/40 text-[10px] font-mono text-cyber-cyan backdrop-blur-md shadow-lg">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyber-cyan" />
                  <span>BIOMETRIC_ID // VERIFIED</span>
                </div>

                {/* Innovation Hub / Location Pill */}
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2.5 py-1 rounded bg-cyber-dark/85 border border-cyber-pink/40 text-[10px] font-mono text-pink-300 backdrop-blur-md shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-pink animate-pulse" />
                  <span>INNOVATION HUB</span>
                </div>

                {/* Scanline overlay */}
                <div className="absolute inset-0 scanline-bg pointer-events-none z-10 opacity-35" />
              </div>

              {/* Profile Bio Strip Cleanly Positioned Below The Photo */}
              <div className="mt-4 p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between relative z-10 shadow-lg">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyber-pink shadow-[0_0_8px_#ff007f]" />
                    <h3 className="font-orbitron text-sm sm:text-base font-bold text-white tracking-wider">
                      RAHUL GUPTA
                    </h3>
                  </div>
                  <p className="font-mono text-[11px] text-cyber-cyan mt-0.5">
                    B.Tech CSE — Artificial Intelligence
                  </p>
                </div>
                
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-300 bg-cyber-dark px-2.5 py-1 rounded border border-slate-700/80">
                  <Cpu className="w-3.5 h-3.5 text-cyber-pink" />
                  <span>ABESIT</span>
                </div>
              </div>

              {/* Live ML Telemetry Badges */}
              <div className="grid grid-cols-2 gap-3 mt-3 relative z-10">
                <div className="bg-slate-900/80 border border-slate-800 p-2.5 sm:p-3 rounded-lg">
                  <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[10px] uppercase">
                    <Activity className="w-3 h-3 text-cyber-pink" />
                    Pipeline State
                  </div>
                  <div className="font-mono text-xs sm:text-sm text-white font-semibold mt-1">
                    Supervised ML
                  </div>
                </div>

                <div className="bg-slate-900/80 border border-slate-800 p-2.5 sm:p-3 rounded-lg">
                  <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[10px] uppercase">
                    <Database className="w-3 h-3 text-cyber-cyan" />
                    Target Role
                  </div>
                  <div className="font-mono text-xs sm:text-sm text-white font-semibold mt-1">
                    AI/ML Engineer
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
