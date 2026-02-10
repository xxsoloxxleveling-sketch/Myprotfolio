import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 ${className}`}
    >
      {/* Background Image/Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-end p-6 md:p-8">
        <div className="mb-auto">
          <span className="inline-block px-3 py-1 text-xs font-mono font-medium text-cyan-400 border border-cyan-900/50 bg-cyan-950/30 rounded-full mb-4 backdrop-blur-md">
            {project.tag}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-50 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm md:text-base mb-6 line-clamp-3 md:line-clamp-none max-w-prose">
          {project.description}
        </p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold bg-white/10 hover:bg-white/20 border border-white/10 px-5 py-3 rounded-xl backdrop-blur-md transition-all group-hover:border-cyan-500/30 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] w-fit"
          >
            Visit Site <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/20 rounded-3xl transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;