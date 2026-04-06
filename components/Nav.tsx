'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Skills', href: '#skills', external: false },
  { label: 'Projects', href: '#projects', external: false },
  { label: 'Certifications', href: '#certifications', external: false },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/aditya', external: true },
  { label: 'Resume', href: '/resume.pdf', external: true },
]

const sectionIds = ['hero', 'about', 'skills', 'projects', 'certifications']

export default function Nav() {
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.5 }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <nav className="sticky top-6 z-50 flex justify-center px-4">
      {/* Desktop pill */}
      <div className="glass glass-strong rounded-full px-6 py-3 shadow-glass hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            className={`relative text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
              item.external
                ? 'text-text-muted hover:text-text-primary'
                : activeSection === item.href.replace('#', '')
                ? 'text-accent-glow'
                : 'text-text-muted hover:text-text-primary'
            }`}
            style={
              !item.external && activeSection === item.href.replace('#', '')
                ? { textShadow: '0 0 12px rgba(99,102,241,0.6)' }
                : {}
            }
          >
            {!item.external && activeSection === item.href.replace('#', '') && (
              <motion.span
                layoutId="nav-active"
                className="absolute inset-0 bg-accent/10 rounded-full -mx-2 -my-1"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
            {item.external && <ExternalLink size={12} className="relative z-10" />}
          </a>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full max-w-sm">
        <div className="glass glass-strong rounded-full px-5 py-3 shadow-glass flex items-center justify-between">
          <span className="font-syne font-semibold text-sm text-text-primary">Aditya Kumar</span>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="text-text-muted hover:text-text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="glass glass-strong rounded-2xl mt-2 px-4 py-3 shadow-glass flex flex-col gap-1"
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-3 py-2 rounded-xl text-sm text-text-muted hover:text-text-primary hover:bg-white/5 transition-colors"
                >
                  {item.label}
                  {item.external && <ExternalLink size={12} />}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
