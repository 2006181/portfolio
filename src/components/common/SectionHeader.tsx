import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  index?: string;
  tag?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  accent?: 'cyan' | 'pink' | 'purple' | 'synth';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  tag,
  title,
  subtitle,
  align = 'left',
  className = '',
  accent = 'cyan'
}) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  const accentGradient = {
    cyan: 'from-cyber-cyan to-blue-500',
    pink: 'from-cyber-pink to-purple-600',
    purple: 'from-cyber-purple to-pink-500',
    synth: 'from-cyber-cyan via-cyber-pink to-cyber-yellow'
  };

  return (
    <div className={`flex flex-col mb-12 md:mb-16 max-w-3xl ${alignClass[align]} ${className}`}>
      {/* Top Tag / Index */}
      <div className="flex items-center gap-2 mb-3">
        {index && (
          <span className="font-mono text-xs md:text-sm font-semibold tracking-widest text-cyber-cyan bg-cyber-cyan/10 px-2 py-0.5 rounded border border-cyber-cyan/30">
            {index}
          </span>
        )}
        {tag && (
          <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-cyber-pink font-medium">
            // {tag}
          </span>
        )}
      </div>

      {/* Main Title */}
      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
      >
        {title.split(' ').map((word, i) => {
          // Highlight key words with gradient
          if (i === title.split(' ').length - 1 || word.toLowerCase().includes('ai') || word.toLowerCase().includes('projects') || word.toLowerCase().includes('journey')) {
            return (
              <span key={i} className={`bg-gradient-to-r ${accentGradient[accent]} bg-clip-text text-transparent`}>
                {' '}{word}
              </span>
            );
          }
          return (i > 0 ? ' ' : '') + word;
        })}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-sm md:text-base text-slate-400 font-normal leading-relaxed max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Laser line separator */}
      <div className="mt-4 flex items-center gap-2 w-36">
        <div className="h-[2px] w-full bg-gradient-to-r from-cyber-cyan via-cyber-pink to-transparent shadow-[0_0_8px_#00f0ff]" />
        <div className="w-1.5 h-1.5 bg-cyber-pink rounded-full shadow-[0_0_6px_#ff007f]" />
      </div>
    </div>
  );
};
