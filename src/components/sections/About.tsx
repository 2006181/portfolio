import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, CheckCircle, LineChart, ShieldCheck } from 'lucide-react';
import { profileData } from '../../data/profile';
import { factsStats } from '../../data/achievements';
import { SectionHeader } from '../common/SectionHeader';
import { CyberCard } from '../common/CyberCard';

export const About: React.FC = () => {
  const statGlow = {
    cyan: 'border-cyber-cyan/40 text-cyber-cyan',
    pink: 'border-cyber-pink/40 text-cyber-pink',
    purple: 'border-purple-400/40 text-purple-300',
    emerald: 'border-emerald-400/40 text-emerald-300'
  };

  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden bg-cyber-void">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyber-pink/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          index="01"
          tag="CORE IDENTITY"
          title={profileData.about.heading}
          subtitle="A dedicated developer focused on transforming theoretical mathematical models into practical, deployable AI/ML solutions."
          accent="pink"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Editorial Glassmorphism Card */}
          <div className="lg:col-span-7">
            <CyberCard glowColor="pink" className="h-full flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs text-cyber-pink">
                  <BrainCircuit className="w-4 h-4" />
                  <span>BIOGRAPHY & TECHNICAL BACKGROUND</span>
                </div>

                {profileData.about.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
                    {p}
                  </p>
                ))}
              </div>

              {/* Core Competencies Checklist */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <h4 className="font-orbitron text-xs font-semibold text-white uppercase tracking-wider">
                  Core Competency Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {profileData.about.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-900/60 p-2.5 rounded border border-slate-800"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-cyber-cyan flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CyberCard>
          </div>

          {/* Right Column: Key Metrics & AI Engineering Philosophy */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {factsStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`bg-cyber-dark/80 backdrop-blur-md p-5 rounded-xl border ${statGlow[stat.accent]} flex flex-col justify-between`}
                >
                  <div className="font-orbitron text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-1">
                    {stat.value}
                  </div>
                  <div>
                    <div className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-200">
                      {stat.label}
                    </div>
                    <div className="font-mono text-[11px] text-slate-400 mt-1">
                      {stat.detail}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* AI Lab Values Box */}
            <div className="bg-slate-900/70 border border-slate-800 p-6 rounded-xl space-y-3 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 font-mono text-xs text-cyber-cyan uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Engineering Philosophy</span>
              </div>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light">
                "Believer in clean data pipelines, transparent model evaluation metrics, and end-to-end reproducibility over black-box complexity."
              </p>
              <div className="flex items-center gap-2 pt-2 text-[11px] font-mono text-slate-500">
                <LineChart className="w-3.5 h-3.5 text-cyber-pink" />
                <span>Data-Driven • Scalable • Mentor-Guided</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
