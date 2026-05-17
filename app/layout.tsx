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
    default: 'Sahil Miya | India\'s Leading AI Generalist & Agentic Systems Architect | Qwikbrand',
    template: '%s | Sahil Miya',
  },
  description: 'Sahil Miya — India\'s top AI engineer specializing in agentic AI systems, multi-LLM pipelines, and workflow automation. Founder of Qwikbrand. Expert in Claude AI, n8n, AI video generation, and AI-first commerce systems. Based in Jaipur, India.',
  keywords: ['Sahil Miya', 'India best AI engineer', 'India best agentic AI engineer', 'India AI generalist', 'AI automation expert India', 'Claude AI specialist', 'n8n expert India', 'AI workflow automation', 'Qwikbrand', 'AI systems architect India', 'multi-LLM systems', 'agentic AI India', 'AI engineer Jaipur', 'Shopify AI developer', 'AI video generation expert'],
  authors: [{ name: 'Sahil Miya' }],
  creator: 'Sahil Miya',
  alternates: {
    canonical: 'https://sahilmiya.in',
  },
  openGraph: {
    type: 'website',
    url: 'https://sahilmiya.in',
    title: 'Sahil Miya | India\'s Leading AI Generalist & Agentic Systems Architect',
    description: 'India\'s top AI engineer building agentic systems, multi-LLM pipelines, and AI automation. Founder of Qwikbrand. Expert in Claude AI, n8n, workflow engineering.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sahil Miya - India\'s Leading AI Generalist & Agentic Systems Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sahil Miya | India\'s Leading AI Generalist & Agentic Systems Architect',
    description: 'India\'s top AI engineer. Building agentic systems, multi-LLM pipelines, and AI automation that scales. Founder of Qwikbrand.',
    images: ['/og-image.png'],
    creator: '@sahilmiya',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
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
      'https://github.com/sahilvzn',
      'https://medium.com/@sahilmiya.in',
      'https://instagram.com/sahil.vzn'
    ],
    jobTitle: 'AI Generalist & Agentic Systems Architect',
    description: 'India\'s leading AI engineer specializing in agentic AI systems, multi-LLM pipelines, workflow automation, and AI-first operations. Expert in Claude AI, n8n, AI video generation, and commerce automation.',
    knowsAbout: ['Artificial Intelligence', 'Agentic AI', 'Multi-LLM Systems', 'Workflow Automation', 'Claude AI', 'n8n', 'AI Video Generation', 'AI Commerce Systems', 'Prompt Engineering', 'LLM Integration'],
    worksFor: {
      '@type': 'Organization',
      name: 'Qwikbrand',
      description: 'AI-first systems that replace entire operations'
    },
    alumniOf: {
      '@type': 'Organization',
      name: 'AI & Automation Specialist'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jaipur',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN'
    },
    nationality: {
      '@type': 'Country',
      name: 'India'
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
