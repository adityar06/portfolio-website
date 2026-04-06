'use client'

import { motion } from 'framer-motion'

const skillGroups = [
  {
    category: 'Supply Chain Tools',
    skills: ['SAP', 'Oracle SCM', 'Kinaxis', 'NetSuite', 'Placeholder Tool'],
  },
  {
    category: 'Data & Analytics',
    skills: ['Python', 'SQL', 'Tableau', 'Power BI', 'Pandas', 'Excel'],
  },
  {
    category: 'AI & Automation',
    skills: ['Claude API', 'OpenAI API', 'n8n', 'LangChain', 'Prompt Engineering'],
  },
  {
    category: 'Soft Skills',
    skills: [
      'Cross-functional Leadership',
      'Stakeholder Management',
      'Problem Framing',
      'Systems Thinking',
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 md:px-12 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-syne text-4xl font-bold mb-12"
      >
        Skills
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-10">
        {skillGroups.map((group) => (
          <motion.div
            key={group.category}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <h3 className="text-xs uppercase tracking-widest text-accent-glow font-mono mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={itemVariants}
                  className="glass glass-hover rounded-full px-4 py-2 font-mono text-sm text-text-muted hover:text-text-primary transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
