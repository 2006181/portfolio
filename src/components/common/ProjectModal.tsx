import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Activity, Cpu, CheckCircle2, BookOpen, Layers } from 'lucide-react';
import type { Project } from '../../types';
import { ProjectVisualizer3D } from '../3d/ProjectVisualizer3D';
import { CyberBadge } from './CyberBadge';
import { GithubIcon } from './Icons';
import { soundFx } from '../../utils/audio';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const handleClose = () => {
    soundFx.playClick();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-cyber-void/90 backdrop-blur-xl"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-cyber-dark/95 border border-cyber-cyan/40 rounded-xl shadow-[0_0_50px_rgba(0,240,255,0.2)] overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
          >
            {/* Top Bar Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-cyber-navy/50">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-cyber-cyan bg-cyber-cyan/10 px-2 py-0.5 rounded border border-cyber-cyan/30">
                  PROJECT {project.number}
                </span>
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider hidden sm:inline-block">
                  // {project.category}
                </span>
              </div>

              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-lg bg-slate-800/60 hover:bg-cyber-pink/20 hover:text-cyber-pink border border-slate-700/60 hover:border-cyber-pink/50 flex items-center justify-center text-slate-400 transition-all duration-200"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              {/* Project Title & Category */}
              <div>
                <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* 3D Visualizer Panel */}
              <div className="relative rounded-lg border border-slate-800 bg-cyber-black/80 overflow-hidden p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-cyber-cyan flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    3D MODEL TOPOLOGY VISUALIZER
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    TYPE: {project.visualType}
                  </span>
                </div>
                <div className="h-48 md:h-56 w-full">
                  <ProjectVisualizer3D type={project.visualType} />
                </div>
              </div>

              {/* Two Column Breakdown: Problem vs Approach */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-lg">
                  <h4 className="font-orbitron text-xs font-semibold text-cyber-pink mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    PROBLEM STATEMENT
                  </h4>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-lg">
                  <h4 className="font-orbitron text-xs font-semibold text-cyber-cyan mb-2 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    ARCHITECTURAL APPROACH
                  </h4>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    {project.approach}
                  </p>
                </div>
              </div>

              {/* ML Algorithm & Evaluation Metrics */}
              <div className="bg-cyber-surface/40 border border-slate-800 p-5 rounded-lg space-y-4">
                <div>
                  <h4 className="font-orbitron text-xs font-semibold text-white mb-2 uppercase tracking-wider">
                    Core Algorithm
                  </h4>
                  <div className="bg-cyber-navy/80 px-3 py-2 rounded border border-cyber-cyan/30 text-cyber-cyan font-mono text-xs md:text-sm">
                    {project.mlAlgorithm}
                  </div>
                </div>

                <div>
                  <h4 className="font-orbitron text-xs font-semibold text-white mb-2 uppercase tracking-wider">
                    Evaluation & Verification Metrics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.evaluationMetrics.map((metric, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-xs font-mono bg-cyber-pink/10 text-pink-300 border border-cyber-pink/30 px-2.5 py-1 rounded"
                      >
                        <CheckCircle2 className="w-3 h-3 text-cyber-pink" />
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-orbitron text-xs font-semibold text-white mb-2 uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-cyber-yellow" />
                    Key Technical Takeaway
                  </h4>
                  <p className="text-xs md:text-sm text-slate-300 italic bg-slate-900/70 p-3 rounded border-l-2 border-cyber-yellow">
                    "{project.keyLearning}"
                  </p>
                </div>
              </div>

              {/* Technologies Applied */}
              <div>
                <h4 className="font-orbitron text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <CyberBadge key={i} variant="outline" size="sm">
                      {tech}
                    </CyberBadge>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions Footer */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800/80 bg-cyber-navy/50">
              <div className="text-xs text-slate-500 font-mono">
                STATUS: VERIFIED_ACADEMIC_MODEL
              </div>

              <div className="flex items-center gap-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playClick()}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-pink/15 hover:bg-cyber-pink/25 border border-cyber-pink/40 hover:border-cyber-pink text-white font-mono text-xs font-medium transition-all shadow-[0_0_15px_rgba(255,0,127,0.2)]"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    View on GitHub
                  </a>
                ) : (
                  <span className="text-xs font-mono text-slate-500 bg-slate-800/50 px-3 py-1.5 rounded border border-slate-700">
                    Repository coming soon
                  </span>
                )}

                {project.liveDemoUrl ? (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playClick()}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-cyan/15 hover:bg-cyber-cyan/25 border border-cyber-cyan/40 hover:border-cyber-cyan text-cyber-cyan font-mono text-xs font-medium transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                ) : (
                  <span className="text-xs font-mono text-slate-500 bg-slate-800/40 px-3 py-1.5 rounded border border-slate-700/50">
                    Live Demo coming soon
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
