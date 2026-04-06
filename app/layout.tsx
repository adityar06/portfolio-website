import type { Metadata } from 'next'
import { Syne, JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const geist = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist',
  display: 'swap',
  weight: '100 900',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Aditya Kumar — Supply Chain × AI',
  description: 'Portfolio of Aditya Kumar — building AI-native tools for end-to-end supply chain.',
  openGraph: {
    title: 'Aditya Kumar — Supply Chain × AI',
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
        className={`${syne.variable} ${geist.variable} ${jetbrainsMono.variable} bg-background text-text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
