import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Activity, Sparkles, ExternalLink } from 'lucide-react';
import { projectsData } from '../../data/projects';
import type { Project } from '../../types';
import { ProjectVisualizer3D } from '../3d/ProjectVisualizer3D';
import { ProjectModal } from '../common/ProjectModal';
import { SectionHeader } from '../common/SectionHeader';
import { CyberBadge } from '../common/CyberBadge';
import { GithubIcon } from '../common/Icons';
import { soundFx } from '../../utils/audio';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    soundFx.playClick();
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="relative py-20 md:py-28 overflow-hidden bg-cyber-dark/30">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyber-pink/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          index="04"
          tag="PORTFOLIO LAB"
          title="Selected AI/ML Projects"
          subtitle="End-to-end Machine Learning web applications, predictive classification pipelines, and exploratory data analysis dashboards."
          accent="synth"
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative bg-cyber-dark/85 backdrop-blur-xl border border-slate-800 hover:border-cyber-cyan/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(0,240,255,0.2)]"
            >
              {/* Corner Sci-Fi Ticks */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-cyber-cyan/30 to-transparent pointer-events-none" />
              
              <div>
                {/* 3D Model Topology Preview Header */}
                <div className="relative w-full h-48 bg-cyber-void border-b border-slate-800/80 overflow-hidden flex items-center justify-center">
                  <ProjectVisualizer3D type={project.visualType} />

                  {/* Project Number Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-cyber-dark/90 border border-cyber-cyan/40 font-mono text-xs font-bold text-cyber-cyan">
                    PROJECT {project.number}
                  </div>

                  {/* Live Deployed Indicator */}
                  {project.liveDemoUrl && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 font-mono text-[10px] text-emerald-400 bg-emerald-500/15 border border-emerald-500/40 px-2 py-0.5 rounded shadow-[0_0_8px_rgba(16,185,129,0.3)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      DEPLOYED
                    </div>
                  )}

                  {!project.liveDemoUrl && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 font-mono text-[10px] text-cyber-pink bg-cyber-pink/10 border border-cyber-pink/30 px-2 py-0.5 rounded">
                      <Activity className="w-3 h-3 animate-pulse" />
                      3D TOPOLOGY
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="font-mono text-xs text-cyber-pink uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="font-orbitron text-xl font-bold text-white mt-1 group-hover:text-cyber-cyan transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3 font-light">
                    {project.description}
                  </p>

                  {/* Highlights Bullets */}
                  <div className="space-y-1.5 pt-2">
                    {project.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-400">
                        <span className="text-cyber-cyan">›</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <CyberBadge key={i} variant="outline" size="sm">
                        {tech}
                      </CyberBadge>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[11px] font-mono text-slate-500 self-center">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 border-t border-slate-800/80 bg-cyber-navy/30 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleOpenModal(project)}
                  onMouseEnter={() => soundFx.playHover()}
                  className="inline-flex items-center gap-1 text-xs font-mono text-slate-300 hover:text-white font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyber-pink" />
                  <span>DETAILS</span>
                </button>

                <div className="flex items-center gap-2">
                  {/* Direct Live Demo Link */}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFx.playClick()}
                      title="Launch Live Application"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-cyan/15 hover:bg-cyber-cyan/25 border border-cyber-cyan/40 hover:border-cyber-cyan text-cyber-cyan font-mono text-xs font-bold transition-all shadow-[0_0_12px_rgba(0,240,255,0.2)]"
                    >
                      <span>LIVE DEMO</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {/* GitHub Repo Link */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFx.playClick()}
                      title="View GitHub Repository"
                      className="w-8 h-8 rounded bg-slate-900 border border-slate-700 hover:border-cyber-pink text-slate-300 hover:text-cyber-pink flex items-center justify-center transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}

                  <button
                    onClick={() => handleOpenModal(project)}
                    className="w-8 h-8 rounded bg-slate-800/60 hover:bg-cyber-cyan/20 border border-slate-700 hover:border-cyber-cyan/40 text-slate-400 hover:text-cyber-cyan flex items-center justify-center transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={handleCloseModal}
      />
    </section>
  );
};
