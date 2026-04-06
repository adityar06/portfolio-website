import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0F',
        'text-primary': '#F0F0F5',
        'text-muted': '#8B8B9E',
        glass: {
          DEFAULT: 'rgba(255,255,255,0.06)',
          strong: 'rgba(255,255,255,0.10)',
          border: 'rgba(255,255,255,0.12)',
        },
        accent: {
          DEFAULT: '#6366F1',
          glow: '#818CF8',
          muted: 'rgba(99,102,241,0.2)',
        },
      },
      backdropBlur: {
        glass: '16px',
        'glass-strong': '24px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
        'glow-accent': '0 0 40px rgba(99,102,241,0.25)',
        'glow-sm': '0 0 16px rgba(99,102,241,0.15)',
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        geist: ['var(--font-geist)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
