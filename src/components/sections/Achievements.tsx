import React from 'react';
import { motion } from 'framer-motion';
import { Users, Flame, Trophy, Calendar, Sparkles } from 'lucide-react';
import { achievementsData } from '../../data/achievements';
import { SectionHeader } from '../common/SectionHeader';
import { CyberCard } from '../common/CyberCard';
import { CyberBadge } from '../common/CyberBadge';

export const Achievements: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Leadership': return <Trophy className="w-5 h-5 text-cyber-yellow" />;
      case 'Community': return <Users className="w-5 h-5 text-cyber-cyan" />;
      case 'Hackathon': return <Flame className="w-5 h-5 text-cyber-pink" />;
      default: return <Sparkles className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="achievements" className="relative py-20 md:py-28 overflow-hidden bg-cyber-dark/40">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          index="08"
          tag="COMMUNITY & LEADERSHIP"
          title="Beyond Code: Leadership & Hackathons"
          subtitle="Active campus community engagement, technical event leadership, and hackathon sprint participation."
          accent="synth"
        />

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="h-full"
            >
              <CyberCard glowColor={idx === 0 ? 'pink' : idx === 1 ? 'cyan' : 'purple'} className="h-full flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                      {getIcon(item.type)}
                    </div>
                    <CyberBadge variant={idx === 0 ? 'pink' : idx === 1 ? 'cyan' : 'purple'} size="sm">
                      {item.badge}
                    </CyberBadge>
                  </div>

                  <div>
                    <h3 className="font-orbitron text-lg font-bold text-white">
                      {item.role}
                    </h3>
                    <div className="font-mono text-xs text-cyber-cyan font-semibold mt-1">
                      {item.organization}
                    </div>
                    {item.duration && (
                      <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 mt-1">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        <span>{item.duration}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 font-mono text-[11px] text-slate-500 uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan" />
                  <span>Verified Campus Contribution</span>
                </div>
              </CyberCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
