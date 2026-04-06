'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 md:px-12 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex justify-center"
        >
          <div className="glass glass-strong w-64 h-64 rounded-2xl flex items-center justify-center shadow-glass">
            <span className="font-syne text-5xl font-bold text-accent">AK</span>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="font-syne text-4xl font-bold mb-6">About Me</h2>
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              Placeholder — introduce yourself here. Share your background in supply chain and
              how you got into AI and automation.
            </p>
            <p>
              Placeholder — describe what you&apos;re focused on right now. What problems are you
              solving? What excites you about the intersection of supply chain and AI?
            </p>
            <p>
              Placeholder — share your approach. What makes you different from other supply chain
              professionals? What do you bring to the table that&apos;s uniquely yours?
            </p>
          </div>

          {/* What I bring list */}
          <div className="mt-8 space-y-3">
            <h3 className="font-syne font-semibold text-sm uppercase tracking-widest text-accent-glow">
              What I Bring
            </h3>
            {[
              'Deep supply chain domain knowledge across planning, procurement, and logistics',
              'Hands-on AI tool building — from idea to working product',
              'Ability to bridge the gap between operational problems and technical solutions',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 text-text-muted text-sm">
                <span className="text-accent mt-0.5 shrink-0">✦</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
