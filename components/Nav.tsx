'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const navItems = [
  { label: 'Skills', href: '#skills', external: false },
  { label: 'Projects', href: '#projects', external: false },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aditya-ratnaparkhe/', external: true },
  { label: 'Resume', href: '/CV_Aditya Ratnaparkhe.pdf', external: true },
]

const sectionIds = ['hero', 'skills', 'projects']

export default function Nav() {
  const [activeSection, setActiveSection] = useState('hero')

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
      <div className="md:hidden">
        <div className="glass glass-strong rounded-full px-4 py-3 shadow-glass flex items-center gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className={`relative text-xs font-medium transition-colors duration-200 flex items-center gap-0.5 ${
                item.external
                  ? 'text-text-muted hover:text-text-primary'
                  : activeSection === item.href.replace('#', '')
                  ? 'text-accent-glow'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              {item.external && <ExternalLink size={10} className="relative z-10" />}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
