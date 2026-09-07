import React from 'react';
import { GraduationCap, BookOpen, MapPin, CheckCircle } from 'lucide-react';
import { educationData } from '../../data/education';
import { SectionHeader } from '../common/SectionHeader';
import { CyberCard } from '../common/CyberCard';
import { CyberBadge } from '../common/CyberBadge';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-20 md:py-28 overflow-hidden bg-cyber-dark/40">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          index="06"
          tag="ACADEMIC BACKGROUND"
          title="Education & Foundations"
          subtitle="Formal academic engineering background in Computer Science & Artificial Intelligence at ABESIT."
          accent="cyan"
        />

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Main University Card (ABESIT) */}
          <div className="md:col-span-8">
            <CyberCard glowColor="cyan" className="h-full space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2 text-cyber-cyan font-mono text-xs uppercase">
                    <GraduationCap className="w-4 h-4" />
                    <span>UNDERGRADUATE DEGREE</span>
                  </div>
                  <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white mt-1">
                    {educationData[0].degree}
                  </h3>
                  <div className="font-mono text-sm text-cyber-pink font-semibold mt-0.5">
                    {educationData[0].specialization}
                  </div>
                </div>

                <div className="text-left sm:text-right font-mono text-xs text-slate-400 space-y-1">
                  <div className="text-white font-bold">{educationData[0].institution}</div>
                  <div className="flex items-center sm:justify-end gap-1 text-slate-400">
                    <MapPin className="w-3 h-3 text-cyber-cyan" />
                    {educationData[0].location}
                  </div>
                  <div className="text-cyber-cyan bg-cyber-cyan/10 px-2 py-0.5 rounded border border-cyber-cyan/30 inline-block">
                    {educationData[0].period}
                  </div>
                </div>
              </div>

              {/* Coursework Modules */}
              {educationData[0].coursework && (
                <div className="space-y-3">
                  <h4 className="font-orbitron text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-cyber-yellow" />
                    Key Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {educationData[0].coursework.map((course, i) => (
                      <CyberBadge key={i} variant="cyan" size="sm">
                        {course}
                      </CyberBadge>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              {educationData[0].highlights && (
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {educationData[0].highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyber-cyan flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              )}
            </CyberCard>
          </div>

          {/* Secondary School Card (Bal Jyoti) */}
          <div className="md:col-span-4">
            <CyberCard glowColor="purple" className="h-full flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-purple-400 font-mono text-xs uppercase">
                  <GraduationCap className="w-4 h-4" />
                  <span>SENIOR SECONDARY</span>
                </div>
                
                <h3 className="font-orbitron text-lg font-bold text-white">
                  {educationData[1].degree}
                </h3>
                
                <div className="font-mono text-xs text-slate-300">
                  {educationData[1].institution}
                </div>

                <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
                  <MapPin className="w-3 h-3 text-purple-400" />
                  <span>{educationData[1].location}</span>
                </div>

                <div className="inline-block font-mono text-xs text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded border border-purple-500/30">
                  {educationData[1].period}
                </div>
              </div>

              {educationData[1].highlights && (
                <div className="pt-4 border-t border-slate-800 space-y-2">
                  {educationData[1].highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-purple-400">›</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              )}
            </CyberCard>
          </div>

        </div>

      </div>
    </section>
  );
};
