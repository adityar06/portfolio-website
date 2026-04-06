'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated mesh blob background */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div
          className="blob-1 absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(99,102,241,0.20) 0%, transparent 70%)',
          }}
        />
        <div
          className="blob-2 absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(99,102,241,0.06) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Available badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <span className="glass rounded-full px-4 py-2 text-sm font-mono text-accent-glow inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent pulse-dot inline-block" />
            Available for work ✦
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-syne text-6xl md:text-8xl font-bold leading-tight"
        >
          <span className="gradient-text-shimmer">Aditya Kumar</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-text-muted text-xl md:text-2xl mt-5 font-geist max-w-2xl mx-auto leading-relaxed"
        >
          Supply Chain × AI — Building Real-World AI Tools for End-to-End Supply Chain
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <a
            href="#projects"
            className="glass glass-hover rounded-full px-8 py-3 font-medium text-sm border border-accent/40 shadow-glow-sm hover:shadow-glow-accent transition-shadow duration-300 text-text-primary"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="text-text-muted hover:text-text-primary transition-colors flex items-center justify-center gap-2 text-sm"
          >
            About me <ArrowDown size={16} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
