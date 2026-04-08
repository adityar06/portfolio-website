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
        background: '#0D0F1C',
        'text-primary': '#F5F5F7',
        'text-muted': '#A1A1A6',
        glass: {
          DEFAULT: 'rgba(255,255,255,0.06)',
          strong: 'rgba(255,255,255,0.10)',
          border: 'rgba(255,255,255,0.12)',
        },
        accent: {
          DEFAULT: '#7D7AED',
          glow: '#9D9BF4',
          muted: 'rgba(125,122,237,0.15)',
        },
      },
      backdropBlur: {
        glass: '16px',
        'glass-strong': '24px',
      },
      boxShadow: {
        glass: '0 4px 24px rgba(0,0,0,0.25), 0 1px 4px rgba(0,0,0,0.15)',
        'glow-accent': '0 0 40px rgba(125,122,237,0.25)',
        'glow-sm': '0 0 16px rgba(125,122,237,0.15)',
      },
      fontFamily: {
        syne: ['var(--font-inter)', 'sans-serif'],
        geist: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
