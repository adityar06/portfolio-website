'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code2 } from 'lucide-react'
import type { Project } from '@/data/projects'
import { LiquidGlassInlineCTA } from '@/components/ui/liquid-glass'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  if (project.category === 'sql') {
    return (
      <motion.div
        whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
        className="glass glass-hover rounded-2xl overflow-hidden flex flex-col h-full shadow-glass hover:shadow-glow-sm transition-shadow duration-300"
      >
        <div className="p-6 flex flex-col flex-1">
          {/* Tech badge */}
          <div className="flex gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-full font-mono"
                style={{
                  background: 'rgba(125,122,237,0.15)',
                  border: '1px solid rgba(125,122,237,0.3)',
                  color: '#7D7AED',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <h3 className="font-syne text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-text-muted text-sm leading-relaxed flex-1">{project.description}</p>

          {/* GitHub CTA */}
          <div className="mt-6">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 w-fit"
              style={{
                background: 'rgba(125,122,237,0.15)',
                border: '1px solid rgba(125,122,237,0.35)',
                color: '#7D7AED',
              }}
            >
              <Code2 size={14} />
              View on GitHub
            </a>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.a
      href={`/projects/${project.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      className="glass glass-hover rounded-2xl overflow-hidden flex flex-col h-full shadow-glass hover:shadow-glow-sm transition-shadow duration-300 block"
    >
      {/* Thumbnail */}
      <div className="relative h-48 bg-gradient-to-br from-accent/20 to-violet-900/20 overflow-hidden">
        {project.thumbnail && !project.thumbnail.includes('placeholder.png') ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-syne text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-text-muted text-sm leading-relaxed flex-1">{project.description}</p>

        {/* CTA */}
        <div className="mt-4">
          <LiquidGlassInlineCTA>
            View Project <ArrowRight size={13} />
          </LiquidGlassInlineCTA>
        </div>
      </div>
    </motion.a>
  )
}
