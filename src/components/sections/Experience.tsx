import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Award, Cpu } from 'lucide-react';
import { experienceData } from '../../data/experience';
import { SectionHeader } from '../common/SectionHeader';
import { CyberBadge } from '../common/CyberBadge';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-20 md:py-28 overflow-hidden bg-cyber-void">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-pink/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          index="03"
          tag="CAREER TIMELINE"
          title="Industry Experience & Internships"
          subtitle="Applied Machine Learning workflows, supervised model evaluation, and structured mentor-guided development experience."
          accent="pink"
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Glowing Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-8 w-[2px] bg-gradient-to-b from-cyber-cyan via-cyber-pink to-transparent shadow-[0_0_12px_#00f0ff]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experienceData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline Pulsing Node */}
                <div className="absolute left-2 sm:left-6 -top-1 w-5 h-5 -translate-x-1/2 rounded-full bg-cyber-dark border-2 border-cyber-cyan shadow-[0_0_15px_#00f0ff] flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-cyber-pink animate-pulse" />
                </div>

                {/* Experience Card */}
                <div className="bg-cyber-dark/85 backdrop-blur-xl border border-cyber-cyan/30 rounded-xl p-6 sm:p-8 shadow-[0_0_30px_rgba(0,240,255,0.1)] space-y-6">
                  
                  {/* Header Strip */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-cyber-pink" />
                        <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white">
                          {item.role}
                        </h3>
                      </div>
                      <div className="font-mono text-sm text-cyber-cyan font-semibold mt-1">
                        {item.organization}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-cyber-pink/10 border border-cyber-pink/30 text-pink-300 font-mono text-xs">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period} ({item.duration})
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                    {item.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5">
                    <h4 className="font-orbitron text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyber-yellow" />
                      Key Responsibilities & Deliverables
                    </h4>
                    <div className="space-y-2">
                      {item.deliverables.map((del, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyber-cyan flex-shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Applied Badges */}
                  <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs text-slate-400 mr-2 flex items-center gap-1">
                      <Cpu className="w-3.5 h-3.5 text-cyber-pink" />
                      Applied:
                    </span>
                    {item.skillsApplied.map((skill, i) => (
                      <CyberBadge key={i} variant="outline" size="sm">
                        {skill}
                      </CyberBadge>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
