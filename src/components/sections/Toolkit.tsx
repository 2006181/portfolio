import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileCode2, 
  Brain, 
  Table2, 
  Binary, 
  PieChart, 
  LineChart, 
  Layers, 
  GitBranch, 
  Database, 
  BookOpen, 
  Cloud,
  Wrench,
  BrainCircuit,
  ScanLine,
  Zap
} from 'lucide-react';
import { toolkitBadges } from '../../data/skills';
import { GithubIcon } from '../common/Icons';
import { soundFx } from '../../utils/audio';

export const Toolkit: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCode2': return <FileCode2 className="w-5 h-5" />;
      case 'Brain': return <Brain className="w-5 h-5" />;
      case 'Table2': return <Table2 className="w-5 h-5" />;
      case 'Binary': return <Binary className="w-5 h-5" />;
      case 'PieChart': return <PieChart className="w-5 h-5" />;
      case 'LineChart': return <LineChart className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5" />;
      case 'Github': return <GithubIcon className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'Cloud': return <Cloud className="w-5 h-5" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5" />;
      case 'ScanLine': return <ScanLine className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      default: return <Wrench className="w-5 h-5" />;
    }
  };

  return (
    <section className="relative py-16 overflow-hidden bg-cyber-void border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-slate-800 pb-4">
          <div>
            <span className="font-mono text-xs text-cyber-pink tracking-widest uppercase">
              // ARSENAL
            </span>
            <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-white mt-1">
              My AI/ML Toolkit
            </h3>
          </div>
          <span className="font-mono text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded border border-slate-800 self-start sm:self-auto">
            {toolkitBadges.length} ESSENTIAL TECHNOLOGIES
          </span>
        </div>

        {/* Toolkit Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
          {toolkitBadges.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              whileHover={{ y: -5, scale: 1.03 }}
              onMouseEnter={() => soundFx.playHover()}
              className="group relative bg-cyber-dark/80 backdrop-blur-md p-4 rounded-xl border border-slate-800/80 hover:border-cyber-cyan/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)] transition-all duration-300 flex flex-col items-center text-center cursor-pointer overflow-hidden"
            >
              {/* Top Accent Line */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: tool.color }}
              />

              {/* Icon Container */}
              <div 
                className="w-11 h-11 rounded-lg bg-slate-900/80 flex items-center justify-center text-slate-300 group-hover:text-cyber-cyan transition-colors mb-2.5 border border-slate-800 group-hover:border-cyber-cyan/40"
              >
                {getIcon(tool.icon)}
              </div>

              {/* Tool Name & Category */}
              <span className="font-orbitron text-xs sm:text-sm font-bold text-white group-hover:text-cyber-cyan transition-colors">
                {tool.name}
              </span>
              <span className="font-mono text-[10px] text-slate-400 mt-0.5">
                {tool.category}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
