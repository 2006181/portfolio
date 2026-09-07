import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certificationsData } from '../../data/certifications';
import { SectionHeader } from '../common/SectionHeader';
import { CyberBadge } from '../common/CyberBadge';
import { soundFx } from '../../utils/audio';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="relative py-20 md:py-28 overflow-hidden bg-cyber-void">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 w-96 h-96 bg-cyber-pink/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          index="07"
          tag="CREDENTIALS & SIMULATIONS"
          title="Verified Certifications & Job Simulations"
          subtitle="Practical industry simulations and technical certifications validating Python, Data Analytics, and AI skills."
          accent="pink"
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onMouseEnter={() => soundFx.playHover()}
              className="group relative bg-cyber-dark/85 backdrop-blur-md p-6 rounded-xl border border-slate-800 hover:border-cyber-pink/60 hover:shadow-[0_0_30px_rgba(255,0,127,0.2)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-cyber-pink/30 to-transparent pointer-events-none" />

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-cyber-pink/10 border border-cyber-pink/30 flex items-center justify-center text-cyber-pink shadow-[0_0_12px_rgba(255,0,127,0.2)]">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {cert.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-orbitron text-base font-bold text-white group-hover:text-cyber-pink transition-colors">
                    {cert.title}
                  </h3>
                  <p className="font-mono text-xs text-cyber-cyan font-semibold mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {cert.skills.map((skill, i) => (
                  <CyberBadge key={i} variant="outline" size="sm">
                    {skill}
                  </CyberBadge>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
