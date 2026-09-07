import React from 'react';
import { motion } from 'framer-motion';

interface CyberCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'pink' | 'purple' | 'emerald';
  interactive?: boolean;
  cornerStyle?: boolean;
  onClick?: () => void;
}

export const CyberCard: React.FC<CyberCardProps> = ({
  children,
  className = '',
  glowColor = 'cyan',
  interactive = true,
  cornerStyle = true,
  onClick
}) => {
  const glowBorder = {
    cyan: 'hover:border-cyber-cyan/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)]',
    pink: 'hover:border-cyber-pink/60 hover:shadow-[0_0_25px_rgba(255,0,127,0.2)]',
    purple: 'hover:border-cyber-purple/60 hover:shadow-[0_0_25px_rgba(114,9,183,0.25)]',
    emerald: 'hover:border-emerald-500/60 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]'
  };

  const cornerColor = {
    cyan: 'border-cyber-cyan/50',
    pink: 'border-cyber-pink/50',
    purple: 'border-cyber-purple/50',
    emerald: 'border-emerald-500/50'
  };

  return (
    <motion.div
      whileHover={interactive ? { y: -4, transition: { duration: 0.2 } } : undefined}
      onClick={onClick}
      className={`relative group bg-cyber-dark/80 backdrop-blur-xl border border-slate-800/80 rounded-lg p-6 transition-all duration-300 ${
        interactive ? `${glowBorder[glowColor]} cursor-pointer` : ''
      } ${className}`}
    >
      {/* Decorative Corner Brackets */}
      {cornerStyle && (
        <>
          <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${cornerColor[glowColor]} opacity-70 group-hover:opacity-100 transition-opacity`} />
          <div className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${cornerColor[glowColor]} opacity-70 group-hover:opacity-100 transition-opacity`} />
          <div className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${cornerColor[glowColor]} opacity-70 group-hover:opacity-100 transition-opacity`} />
          <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${cornerColor[glowColor]} opacity-70 group-hover:opacity-100 transition-opacity`} />
        </>
      )}

      {/* Cyber Grid Subtle Watermark */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 rounded-lg pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
