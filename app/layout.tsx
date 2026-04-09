import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QKCFS2R2W9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QKCFS2R2W9');
          `}
        </Script>
      </body>
    </html>
  )
}
