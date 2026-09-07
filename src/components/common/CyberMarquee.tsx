import React from 'react';
import { motion } from 'framer-motion';

interface CyberMarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
  variant?: 'pink' | 'cyan' | 'synth';
}

export const CyberMarquee: React.FC<CyberMarqueeProps> = ({
  items,
  direction = 'left',
  speed = 25,
  className = '',
  variant = 'pink'
}) => {
  const borderStyles = {
    pink: 'border-y border-cyber-pink/30 bg-cyber-pink/5',
    cyan: 'border-y border-cyber-cyan/30 bg-cyber-cyan/5',
    synth: 'border-y border-cyber-cyan/30 bg-gradient-to-r from-cyber-pink/10 via-cyber-dark to-cyber-cyan/10'
  };

  const textColors = {
    pink: 'text-pink-300 group-hover:text-white',
    cyan: 'text-cyan-300 group-hover:text-white',
    synth: 'text-slate-200 group-hover:text-cyber-cyan'
  };

  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`relative w-full overflow-hidden py-3 select-none backdrop-blur-md ${borderStyles[variant]} ${className}`}>
      {/* Side Vignette Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-cyber-void to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-cyber-void to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap gap-6 md:gap-10 items-center font-orbitron font-bold text-xs md:text-sm tracking-[0.25em]"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed
        }}
      >
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex items-center gap-6 md:gap-10 group">
            <span className={`transition-colors duration-300 ${textColors[variant]}`}>
              {item}
            </span>
            <span className="text-cyber-cyan/60 font-mono text-xs">◆</span>
            <span className="text-cyber-pink/60 font-mono text-xs">///</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
