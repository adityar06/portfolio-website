'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { Project } from '@/data/projects'
import { LiquidGlassInlineCTA } from '@/components/ui/liquid-glass'

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
