import React from 'react';

interface SynthwaveGridFloorProps {
  className?: string;
}

export const SynthwaveGridFloor: React.FC<SynthwaveGridFloorProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden pointer-events-none ${className}`}>
      {/* Horizon Glow */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-cyan to-transparent shadow-[0_0_20px_#00f0ff]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-cyber-cyan/15 via-cyber-pink/10 to-transparent blur-2xl" />

      {/* Grid Floor */}
      <div 
        className="w-full h-48 synthwave-grid-perspective opacity-40"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 90%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 90%)'
        }}
      />
    </div>
  );
};
