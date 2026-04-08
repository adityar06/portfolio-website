'use client'

import React from 'react'

// ── Types ─────────────────────────────────────────────────────────────────────

interface GlassEffectProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  href?: string
  target?: string
  onClick?: () => void
}

// ── Core Glass Effect Wrapper ─────────────────────────────────────────────────

const GlassEffect: React.FC<GlassEffectProps> = ({
  children,
  className = '',
  style = {},
  href,
  target = '_self',
  onClick,
}) => {
  const content = (
    <div
      className={`relative flex overflow-hidden cursor-pointer transition-all duration-300 ${className}`}
      style={{
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(40px) saturate(180%)',
        WebkitBackdropFilter: 'blur(40px) saturate(180%)',
        border: '1px solid rgba(255,255,255,0.15)',
        boxShadow:
          '0 8px 32px rgba(0,0,0,0.30), 0 1px 2px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.15)',
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  )

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className="block"
      >
        {content}
      </a>
    )
  }
  return content
}

// ── Liquid Glass Button (standalone CTAs) ─────────────────────────────────────

interface LiquidGlassButtonProps {
  children: React.ReactNode
  href?: string
  target?: string
  onClick?: () => void
  className?: string
}

export const LiquidGlassButton: React.FC<LiquidGlassButtonProps> = ({
  children,
  href,
  target = '_self',
  onClick,
  className = '',
}) => (
  <GlassEffect
    href={href}
    target={target}
    onClick={onClick}
    className={`rounded-full px-8 py-3 items-center justify-center hover:brightness-105 ${className}`}
    style={{
      boxShadow:
        '0 8px 32px rgba(0,0,0,0.30), 0 1px 2px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.15)',
    }}
  >
    <span className="text-text-primary text-sm font-semibold whitespace-nowrap flex items-center gap-1.5">
      {children}
    </span>
  </GlassEffect>
)

// ── Liquid Glass Inline CTA (inside already-linked cards) ─────────────────────

export const LiquidGlassInlineCTA: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = '' }) => (
  <GlassEffect
    className={`rounded-full px-4 py-1.5 items-center w-fit ${className}`}
  >
    <span className="text-accent text-sm font-medium flex items-center gap-1">
      {children}
    </span>
  </GlassEffect>
)
