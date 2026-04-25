'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

type Category = 'ai-automation' | 'sql'

const TABS: { id: Category; label: string }[] = [
  { id: 'ai-automation', label: 'AI Automation' },
  { id: 'sql', label: 'SQL' },
]

const INITIAL_COUNT = 4

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('ai-automation')
  const [showAll, setShowAll] = useState(false)

  const categoryProjects = projects.filter((p) => p.category === activeCategory)
  const visibleProjects =
    activeCategory === 'ai-automation' && !showAll
      ? categoryProjects.slice(0, INITIAL_COUNT)
      : categoryProjects
  const hiddenCount = categoryProjects.length - INITIAL_COUNT

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

      {/* Category tabs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex justify-center mb-10"
      >
        <div
          className="flex gap-1 p-1 rounded-full"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveCategory(tab.id); setShowAll(false) }}
              className="relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200"
              style={{ color: activeCategory === tab.id ? '#F5F5F7' : '#A1A1A6' }}
            >
              {activeCategory === tab.id && (
                <motion.span
                  layoutId="active-tab"
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'rgba(125,122,237,0.25)', border: '1px solid rgba(125,122,237,0.4)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {visibleProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              className="h-full"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {activeCategory === 'ai-automation' && hiddenCount > 0 && (
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
