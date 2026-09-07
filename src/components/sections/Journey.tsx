import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { journeySteps } from '../../data/journey';
import { SectionHeader } from '../common/SectionHeader';
import { CyberBadge } from '../common/CyberBadge';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="relative py-20 md:py-28 overflow-hidden bg-cyber-void">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyber-purple/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          index="05"
          tag="ROADMAP PROGRESSION"
          title="My AI/ML Learning Journey"
          subtitle="Systematic progression from foundational algorithms to advanced machine learning architectures and real-time deployment."
          accent="purple"
        />

        {/* Journey Grid */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
          {journeySteps.map((step, idx) => {
            const isExploring = step.status === 'exploring';
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                    isExploring
                      ? 'bg-cyber-dark border-cyber-pink shadow-[0_0_12px_#ff007f] animate-ping'
                      : 'bg-cyber-dark border-cyber-cyan shadow-[0_0_10px_#00f0ff]'
                  }`}
                />

                {/* Content Card */}
                <div className={`p-5 rounded-xl border backdrop-blur-md transition-all duration-200 ${
                  isExploring
                    ? 'bg-cyber-pink/5 border-cyber-pink/40 shadow-[0_0_20px_rgba(255,0,127,0.15)]'
                    : 'bg-cyber-dark/80 border-slate-800/80 hover:border-cyber-cyan/40'
                }`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-cyber-cyan bg-cyber-cyan/10 px-2 py-0.5 rounded border border-cyber-cyan/30">
                        {step.stage}
                      </span>
                      <h4 className="font-orbitron text-base sm:text-lg font-bold text-white">
                        {step.topic}
                      </h4>
                    </div>

                    {isExploring ? (
                      <CyberBadge variant="pink" size="sm" icon={<Sparkles className="w-3 h-3 animate-spin" />}>
                        CURRENT EXPLORATION
                      </CyberBadge>
                    ) : (
                      <CyberBadge variant="emerald" size="sm" icon={<CheckCircle2 className="w-3 h-3" />}>
                        COMPLETED
                      </CyberBadge>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                    {step.focus}
                  </p>

                  <p className="text-xs text-slate-400 font-light mt-2 italic bg-slate-900/50 p-2.5 rounded border-l-2 border-cyber-cyan/50">
                    {step.details}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
