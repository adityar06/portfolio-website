'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

const certifications = [
  {
    name: 'Certification 01',
    issuer: 'Issuer Name',
    date: '2024',
    link: '#',
  },
  {
    name: 'Certification 02',
    issuer: 'Issuer Name',
    date: '2024',
    link: '#',
  },
  {
    name: 'Certification 03',
    issuer: 'Issuer Name',
    date: '2023',
    link: undefined,
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-5xl mx-auto px-6 md:px-12 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-syne text-4xl font-bold mb-12"
      >
        Certifications
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="glass glass-hover rounded-2xl p-6 flex flex-col gap-2 shadow-glass"
          >
            <div className="glass-strong rounded-xl w-10 h-10 flex items-center justify-center shrink-0">
              <Award size={18} className="text-accent" />
            </div>
            <h3 className="font-syne font-semibold mt-2 leading-snug">{cert.name}</h3>
            <p className="text-text-muted text-sm font-mono">{cert.issuer}</p>
            <p className="text-text-muted text-xs">{cert.date}</p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-xs mt-auto pt-2 flex items-center gap-1 hover:text-accent-glow transition-colors"
              >
                View Certificate <ExternalLink size={11} />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
