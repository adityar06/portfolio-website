import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aditya Ratnaparkhe — Supply Chain × AI',
  description: 'Portfolio of Aditya Ratnaparkhe — building AI-native tools for end-to-end supply chain.',
  openGraph: {
    title: 'Aditya Ratnaparkhe — Supply Chain × AI',
    description: 'Building real-world AI tools for supply chain.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-background text-text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
