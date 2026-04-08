'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { LiquidGlassButton } from '@/components/ui/liquid-glass'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
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
  const [roleIndex, setRoleIndex] = useState(0)
  const roles = useMemo(
    () => ['AI Automation', 'Systems Integration', 'Data-Driven Execution'],
    []
  )

  useEffect(() => {
    const id = setTimeout(() => setRoleIndex((i) => (i + 1) % roles.length), 2000)
    return () => clearTimeout(id)
  }, [roleIndex, roles])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated mesh blob background */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div
          className="blob-1 absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(94,92,230,0.25) 0%, transparent 70%)',
          }}
        />
        <div
          className="blob-2 absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(50,213,172,0.14) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(130,100,255,0.15) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 w-full py-16 flex flex-col items-center gap-6"
      >
        {/* Name — full width, centered */}
        <motion.h1
          variants={itemVariants}
          className="font-syne text-5xl md:text-6xl font-bold leading-tight text-center"
        >
          <span className="gradient-text-shimmer">Aditya Ratnaparkhe</span>
        </motion.h1>

        {/* Photo + text row */}
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 items-center w-full">
        {/* Photo */}
        <motion.div variants={itemVariants} className="flex justify-center md:justify-start">
          <div className="glass glass-strong w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-glass shrink-0">
            <img
              src="/Professional photo- notion.png"
              alt="Aditya Ratnaparkhe"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Text column */}
        <div className="flex flex-col gap-4">
          {/* Animated hook line */}
          <motion.p
            variants={itemVariants}
            className="text-text-muted text-lg md:text-xl font-geist leading-relaxed"
          >
            {'Bridging the gap between supply chain operations and '}
            <span
              className="relative inline-block overflow-hidden"
              style={{ height: '1.4em', width: '270px', verticalAlign: 'bottom' }}
            >
              {roles.map((role, i) => (
                <motion.span
                  key={role}
                  className="absolute inset-x-0 bottom-0 text-accent-glow font-semibold whitespace-nowrap"
                  initial={{ opacity: 0, y: '100%' }}
                  animate={
                    roleIndex === i
                      ? { opacity: 1, y: '0%' }
                      : { opacity: 0, y: roleIndex > i ? '-100%' : '100%' }
                  }
                  transition={{ type: 'spring', stiffness: 50, damping: 14 }}
                >
                  {role}
                </motion.span>
              ))}
            </span>
          </motion.p>

          {/* About paragraphs */}
          <motion.div
            variants={itemVariants}
            className="text-text-muted text-sm leading-relaxed"
          >
            <p>
              3+ years inside supply chain operations at Zalando and manufacturing environments taught me exactly where things break. I now design and deploy AI systems that target those exact bottlenecks, grounded in real operational logic and not demo scenarios. Currently shipping a 12-part AI supply chain portfolio spanning the full ops lifecycle.
            </p>
          </motion.div>

          {/* What I Bring */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h3 className="font-syne font-semibold text-xs uppercase tracking-widest text-accent-glow">
              What I Bring
            </h3>
            {[
              'Delivered measurable ops improvements: 10% better on-time delivery, 75% reduction in reporting time, 17% reduction in idle inventory costs',
              'Hands-on with SAP MM, TMS systems, SQL, and AI automation via Claude API, n8n, and LangChain',
              'Understands supply chain workflows end-to-end, from purchase order creation to last-mile delivery confirmation',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 text-text-muted text-sm">
                <span className="text-accent mt-0.5 shrink-0">✦</span>
                <span>{point}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <LiquidGlassButton href="#projects">
              View Projects
            </LiquidGlassButton>
            <LiquidGlassButton href="#skills">
              Explore Skills
            </LiquidGlassButton>
          </motion.div>
        </div>
        </div>
      </motion.div>
    </section>
  )
}
