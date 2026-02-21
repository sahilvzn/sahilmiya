import type { Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sahilmiya.in'),
  title: {
    default: 'Sahil Miya | AI Brand & Commerce Systems Architect | Shopify Developer Jaipur',
    template: '%s | Sahil Miya',
  },
  description: 'Sahil Miya — Founder of RevenueLayer. I engineer AI-powered Shopify commerce systems and brand ecosystems for D2C and B2B brands. Based in Jaipur, India.',
  keywords: ['Sahil Miya', 'Shopify developer Jaipur', 'AI commerce systems', 'D2C Shopify architect', 'RevenueLayer', 'Shopify Plus developer India', 'web developer Jaipur', 'brand ecosystem designer'],
  authors: [{ name: 'Sahil Miya' }],
  creator: 'Sahil Miya',
  alternates: {
    canonical: 'https://sahilmiya.in',
  },
  openGraph: {
    type: 'website',
    url: 'https://sahilmiya.in',
    title: 'Sahil Miya | AI Brand & Commerce Systems Architect',
    description: 'Founder of RevenueLayer. Building AI-powered Shopify commerce systems that scale.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sahil Miya - AI Brand & Commerce Systems Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sahil Miya | AI Brand & Commerce Systems Architect',
    description: 'Founder of RevenueLayer. Building AI-powered Shopify commerce systems that scale.',
    images: ['/og-image.png'],
    creator: '@sahilmiya',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sahil Miya',
    url: 'https://sahilmiya.in',
    sameAs: [
      'https://linkedin.com/in/sahilvzn',
      'https://instagram.com/sahil.vzn',
      'https://medium.com/@sahilmiya'
    ],
    jobTitle: 'AI Brand & Commerce Systems Architect',
    worksFor: {
      '@type': 'Organization',
      name: 'RevenueLayer'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jaipur',
      addressCountry: 'IN'
    }
  }

  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans antialiased">
        <noscript>
          <style>{`
            .opacity-0 {
              opacity: 1 !important;
            }
          `}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
