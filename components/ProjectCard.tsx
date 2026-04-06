'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.a
      href={`/projects/${project.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      className="glass glass-hover rounded-2xl overflow-hidden flex flex-col shadow-glass hover:shadow-glow-sm transition-shadow duration-300 block"
    >
      {/* Thumbnail */}
      <div className="relative h-48 bg-gradient-to-br from-accent/20 to-violet-900/20">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-4 font-mono text-xs text-accent-glow">
          {project.techStack[0]}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-syne text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-text-muted text-sm leading-relaxed flex-1">{project.description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="glass rounded-full px-3 py-1 font-mono text-xs text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-4 text-accent text-sm font-medium flex items-center gap-1">
          View Project <ArrowRight size={14} />
        </div>
      </div>
    </motion.a>
  )
}
