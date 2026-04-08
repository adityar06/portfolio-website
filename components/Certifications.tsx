'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { LiquidGlassButton } from '@/components/ui/liquid-glass'

const certifications = [
  {
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google / Coursera',
    date: 'May 2025',
    link: 'https://coursera.org/verify/professional-cert/G4RPIH2AF5OT',
    thumbnail: '/icons/cert-google.svg',
  },
  {
    name: 'Certified Associate in Project Management (CAPM)®',
    issuer: 'Project Management Institute',
    date: 'April 2023',
    link: '/CAPM Certificate.pdf',
    thumbnail: '/icons/cert-capm.svg',
  },
  {
    name: 'McKinsey Forward Program',
    issuer: 'McKinsey.org',
    date: 'December 2024',
    link: '/McKinsey Forward Certificate.pdf',
    thumbnail: '/icons/cert-mckinsey.svg',
  },
  {
    name: 'SQL – MySQL for Data Analytics and Business Intelligence',
    issuer: 'Udemy · 365 Careers',
    date: 'February 2025',
    link: 'https://ude.my/UC-108c4ac1-186c-45a8-b668-e24f0b9035ff',
    thumbnail: '/icons/cert-udemy.svg',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-5xl mx-auto px-6 md:px-12 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-syne text-4xl font-bold mb-8 text-center"
      >
        Certifications
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="glass glass-hover rounded-2xl overflow-hidden flex flex-col shadow-glass"
          >
            {/* Thumbnail */}
            <div className="w-full h-40 overflow-hidden shrink-0">
              <img
                src={cert.thumbnail}
                alt={cert.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-2 flex-1">
              <h3 className="font-syne font-semibold leading-snug">{cert.name}</h3>
              <p className="text-text-muted text-sm font-mono">{cert.issuer}</p>
              <p className="text-text-muted text-xs">{cert.date}</p>
              {cert.link && (
                <div className="mt-auto pt-3">
                  <LiquidGlassButton href={cert.link} target="_blank" className="px-5 py-2">
                    View Certificate <ExternalLink size={11} />
                  </LiquidGlassButton>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
