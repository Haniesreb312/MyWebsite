import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group relative rounded-2xl bg-cyber-dark/50 border border-cyber-text/5 hover:border-cyber-text/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full hover:shadow-[0_0_30px_rgba(var(--c-primary),0.1)]">
    {/* Decorative Top Accent */}
    <div className="h-1.5 w-full bg-gradient-to-r from-cyber-primary/20 via-cyber-secondary/20 to-cyber-accent/20"></div>
    
    <div className="p-8 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono text-cyber-primary tracking-[0.2em] uppercase opacity-70">Project Module</span>
            <h3 className="text-2xl font-bold text-cyber-text font-display group-hover:text-cyber-primary transition-colors">
                {project.title}
            </h3>
        </div>
        <div className="flex gap-3">
             {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-cyber-dim hover:text-cyber-text transition-all hover:scale-110" title="View Code">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
            )}
            {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyber-dim hover:text-cyber-text transition-all hover:scale-110" title="Live Demo">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
            )}
        </div>
      </div>
      
      <p className="text-cyber-dim text-base mb-8 leading-relaxed flex-1">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 pt-6 border-t border-cyber-text/5">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[11px] px-3 py-1 rounded-md bg-cyber-primary/5 text-cyber-primary border border-cyber-primary/20 font-mono tracking-wider">
            {tag}
          </span>
        ))}
      </div>
    </div>
    
    {/* Bottom Glow */}
    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-primary/20 to-transparent group-hover:via-cyber-primary transition-all duration-500"></div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative bg-cyber-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-cyber-primary/30 rounded-full"></div>
                <h2 className="text-3xl md:text-5xl font-bold text-cyber-text font-display mb-4">
                    Projects
                </h2>
                <p className="text-cyber-dim max-w-xl text-lg font-light">
                    A curated technical archive of systems, applications, and digital interfaces.
                </p>
            </div>
            <div className="h-px bg-gradient-to-r from-cyber-primary/50 to-transparent flex-grow md:ml-8 mt-4 md:mt-0"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;