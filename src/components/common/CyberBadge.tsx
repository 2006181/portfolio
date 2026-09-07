import React from 'react';

interface CyberBadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'pink' | 'purple' | 'emerald' | 'yellow' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
}

export const CyberBadge: React.FC<CyberBadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'md',
  className = '',
  icon
}) => {
  const variantStyles = {
    cyan: 'bg-cyber-cyan/10 text-cyber-cyan border-cyber-cyan/30 shadow-[0_0_10px_rgba(0,240,255,0.15)]',
    pink: 'bg-cyber-pink/10 text-cyber-pink border-cyber-pink/30 shadow-[0_0_10px_rgba(255,0,127,0.15)]',
    purple: 'bg-cyber-purple/15 text-purple-300 border-cyber-purple/40 shadow-[0_0_10px_rgba(114,9,183,0.2)]',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.15)]',
    yellow: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/30 shadow-[0_0_10px_rgba(234,179,8,0.15)]',
    outline: 'bg-slate-900/50 text-slate-300 border-slate-700/60'
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 tracking-wider',
    md: 'text-xs px-3 py-1 tracking-wider',
    lg: 'text-sm px-4 py-1.5 tracking-widest'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono uppercase font-medium border rounded-sm cyber-clip-corner-sm backdrop-blur-sm ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="w-3.5 h-3.5 flex items-center justify-center">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
