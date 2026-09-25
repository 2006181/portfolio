import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Cpu, BarChart3, Code2, Terminal, Layers, Sparkles, Info } from 'lucide-react';
import { skillCategories } from '../../data/skills';
import type { Skill } from '../../types';
import { AICoreOrb3D } from '../3d/AICoreOrb3D';
import { SectionHeader } from '../common/SectionHeader';
import { soundFx } from '../../utils/audio';

export const Skills: React.FC = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  const activeCategory = skillCategories[selectedCategoryIndex];

  const categoryIcons: Record<string, React.ReactNode> = {
    "Machine Learning": <Brain className="w-4 h-4" />,
    "Natural Language Processing": <Sparkles className="w-4 h-4" />,
    "Data Science & Analysis": <BarChart3 className="w-4 h-4" />,
    "ML Engineering & Deployment": <Cpu className="w-4 h-4" />,
    "Programming Languages": <Code2 className="w-4 h-4" />,
    "Tools & Database": <Terminal className="w-4 h-4" />,
    "Core Foundations & DSA": <Layers className="w-4 h-4" />
  };

  const handleCategorySelect = (index: number) => {
    soundFx.playClick();
    setSelectedCategoryIndex(index);
    setHoveredSkill(null);
  };

  const handleSkillHover = (skill: Skill) => {
    soundFx.playHover();
    setHoveredSkill(skill);
  };

  return (
    <section id="skills" className="relative py-20 md:py-28 overflow-hidden bg-cyber-dark/40">
      {/* Glow Backdrops */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyber-pink/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          index="02"
          tag="SYSTEM CAPABILITIES"
          title="Interactive AI Skills & Core Topology"
          subtitle="Explore the neural network of machine learning algorithms, data engineering tools, and core competencies in my development stack."
          accent="cyan"
        />

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {skillCategories.map((cat, idx) => {
            const isSelected = selectedCategoryIndex === idx;
            return (
              <button
                key={cat.title}
                onClick={() => handleCategorySelect(idx)}
                onMouseEnter={() => soundFx.playHover()}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs tracking-wider transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-cyber-cyan/15 text-cyber-cyan border-cyber-cyan shadow-[0_0_20px_rgba(0,240,255,0.3)] font-bold'
                    : 'bg-cyber-dark/80 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                {categoryIcons[cat.title]}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* 3D AI Core + Skill Constellation Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: 3D AI Core Orb Visualization */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center bg-cyber-black/70 border border-slate-800 rounded-2xl p-6 shadow-2xl">
            <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-mono text-cyber-pink">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI CORE // ORBITAL MATRIX</span>
            </div>

            <div className="w-full h-64 md:h-72">
              <AICoreOrb3D activeCategory={activeCategory.title} />
            </div>

            {/* Live Hologram Inspector Panel */}
            <div className="w-full mt-2 bg-cyber-dark/90 border border-cyber-cyan/30 rounded-xl p-4 min-h-[100px] flex flex-col justify-center">
              {hoveredSkill ? (
                <motion.div
                  key={hoveredSkill.name}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-orbitron text-xs font-bold text-cyber-cyan">
                      {hoveredSkill.name}
                    </span>
                    <span className="font-mono text-[10px] text-cyber-pink uppercase">
                      {hoveredSkill.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {hoveredSkill.description}
                  </p>
                </motion.div>
              ) : (
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 justify-center text-center">
                  <Info className="w-4 h-4 text-cyber-cyan/60 animate-pulse" />
                  <span>Hover over any skill node to inspect technical details</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Skill Constellation Grid */}
          <div className="lg:col-span-7 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <h3 className="font-orbitron text-lg font-bold text-white">
                      {activeCategory.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-slate-500">
                    {activeCategory.skills.length} MODULES
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeCategory.skills.map((skill) => {
                    const isHovered = hoveredSkill?.name === skill.name;
                    return (
                      <motion.div
                        key={skill.name}
                        onMouseEnter={() => handleSkillHover(skill)}
                        whileHover={{ scale: 1.02 }}
                        className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                          isHovered
                            ? 'bg-cyber-navy border-cyber-cyan shadow-[0_0_20px_rgba(0,240,255,0.25)]'
                            : 'bg-cyber-dark/80 border-slate-800/90 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className={`font-orbitron text-sm font-semibold ${isHovered ? 'text-cyber-cyan' : 'text-white'}`}>
                            {skill.name}
                          </span>
                          <span className="w-2 h-2 rounded-full bg-cyber-pink shadow-[0_0_6px_#ff007f]" />
                        </div>
                        <p className="text-xs text-slate-400 font-light line-clamp-2 leading-relaxed">
                          {skill.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
