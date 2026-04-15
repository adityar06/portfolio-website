'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

const INITIAL_COUNT = 4

export default function Projects() {
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT)
  const hiddenCount = projects.length - INITIAL_COUNT

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 md:px-12 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-syne text-4xl font-bold mb-8 text-center"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {visibleProjects.map((project, i) => (
          <motion.div
            key={project.slug}
            className="h-full"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.08,
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {hiddenCount > 0 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-text-muted hover:text-text-primary transition-colors duration-200"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {showAll ? 'Show less' : `View ${hiddenCount} more project${hiddenCount > 1 ? 's' : ''}`}
            <motion.span
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              ↓
            </motion.span>
          </button>
        </div>
      )}
    </section>
  )
}
