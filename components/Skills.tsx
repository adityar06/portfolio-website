'use client'

import { motion } from 'framer-motion'
import {
  SiSap,
  SiPostgresql,
  SiPython,
  SiMysql,
  SiMicrostrategy,
  SiClaude,
  SiN8N,
  SiLangchain,
  SiVercel,
  SiSupabase,
  SiGithub,
  SiZapier,
  SiMake,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

// ── Data ──────────────────────────────────────────────────────────────────────

interface SkillItem {
  name: string
  Icon?: IconType | null
  iconColor?: string
  imgSrc?: string   // local SVG in /public/icons/
}

interface SkillCategory {
  category: string
  items: SkillItem[]
}

const SKILLS: SkillCategory[] = [
  {
    category: 'Supply Chain Tools',
    items: [
      { name: 'SAP', Icon: SiSap, iconColor: '#008FD3' },
    ],
  },
  {
    category: 'Data & Analytics',
    items: [
      { name: 'MySQL',         Icon: SiMysql,          iconColor: '#4479A1' },
      { name: 'PostgreSQL',    Icon: SiPostgresql,      iconColor: '#4169E1' },
      { name: 'Python',        Icon: SiPython,          iconColor: '#3776AB' },
      { name: 'Excel',         imgSrc: '/icons/microsoftexcel.svg' },
      { name: 'Power BI',      imgSrc: '/icons/powerbi.svg' },
      { name: 'MicroStrategy', Icon: SiMicrostrategy,  iconColor: '#D10028' },
      { name: 'Tableau',       imgSrc: '/icons/tableau.svg' },
    ],
  },
  {
    category: 'AI & Automation',
    items: [
      { name: 'Claude',    Icon: SiClaude,   iconColor: '#D4A27F' },
      { name: 'n8n',       Icon: SiN8N,      iconColor: '#EA4B71' },
      { name: 'LangChain', Icon: SiLangchain,iconColor: '#1C7C4A' },
      { name: 'Vercel',    Icon: SiVercel,   iconColor: '#E5E5E5' },
      { name: 'Supabase',  Icon: SiSupabase, iconColor: '#3ECF8E' },
      { name: 'GitHub',    Icon: SiGithub,   iconColor: '#E5E5E5' },
      { name: 'Cursor',    imgSrc: '/icons/cursor.svg' },
      { name: 'Zapier',    Icon: SiZapier,   iconColor: '#FF4A00' },
      { name: 'Make',      Icon: SiMake,     iconColor: '#9B59D0' },
    ],
  },
]

// ── Tile ──────────────────────────────────────────────────────────────────────

function SkillTile({ name, Icon, iconColor, imgSrc }: SkillItem) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2 px-2
                 w-[76px] h-[84px] rounded-xl shrink-0 cursor-default
                 transition-all duration-200
                 hover:border-accent/50 hover:shadow-[0_0_18px_rgba(125,122,237,0.22)]"
      style={{
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(28px) saturate(180%)',
        WebkitBackdropFilter: 'blur(28px) saturate(180%)',
        border: '1px solid rgba(255,255,255,0.13)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.10)',
      }}
    >
      {/* Icon */}
      {imgSrc ? (
        <img src={imgSrc} alt={name} width={24} height={24} style={{ objectFit: 'contain' }} />
      ) : Icon ? (
        <Icon size={24} style={{ color: iconColor, flexShrink: 0 }} />
      ) : null}

      {/* Label */}
      <span
        className="text-[10px] font-mono text-text-muted text-center leading-tight w-full px-1"
        style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
      >
        {name}
      </span>
    </div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const rowVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 md:px-12 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-syne text-4xl font-bold mb-8 text-center"
      >
        Tech Stack
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="flex flex-col gap-7"
      >
        {SKILLS.map((group) => (
          <motion.div key={group.category} variants={rowVariants} className="flex flex-col items-center">
            {/* Category label */}
            <h3 className="text-xs uppercase tracking-widest text-accent-glow font-mono mb-3 text-center">
              {group.category}
            </h3>

            {/* Tiles — centered, wrapping */}
            <div className="flex flex-wrap gap-3 justify-center">
              {group.items.map((item) => (
                <SkillTile key={item.name} {...item} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
