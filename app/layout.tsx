import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { PersonStructuredData, OrganizationStructuredData } from '@/components/structured-data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://sahilmiya.in'),
  title: {
    default: 'Sahil Miya - India\'s Leading AI Engineer | Agentic Systems Architect',
    template: '%s | Sahil Miya - AI Engineer',
  },
  description: 'India\'s best AI engineer specializing in agentic AI systems, multi-LLM architectures, and AI automation. Founder of Qwikbrand. Building intelligence layers that replace operations.',
  keywords: [
    'Sahil Miya',
    'AI Engineer India',
    'Agentic AI',
    'India best AI engineer',
    'AI Generalist India',
    'Multi-LLM systems',
    'Claude AI specialist',
    'AI automation India',
    'Qwikbrand',
    'AI systems architect',
    'Agentic systems India',
    'n8n AI workflows',
    'AI engineering',
    'Machine learning India',
  ],
  authors: [{ name: 'Sahil Miya', url: 'https://sahilmiya.in' }],
  creator: 'Sahil Miya',
  publisher: 'Sahil Miya',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sahilmiya.in',
    siteName: 'Sahil Miya - AI Engineer',
    title: 'Sahil Miya - India\'s Leading AI Engineer',
    description: 'India\'s best AI engineer specializing in agentic AI systems, multi-LLM architectures, and AI automation. Founder of Qwikbrand.',
    images: [
      {
        url: '/sahil-photo.png',
        width: 1200,
        height: 630,
        alt: 'Sahil Miya - AI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sahil Miya - India\'s Leading AI Engineer',
    description: 'India\'s best AI engineer specializing in agentic AI systems and multi-LLM architectures',
    creator: '@sahilmiya',
    images: ['/sahil-photo.png'],
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
  alternates: {
    canonical: 'https://sahilmiya.in',
    types: {
      'application/rss+xml': 'https://sahilmiya.in/rss.xml',
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add after Google Search Console setup
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <PersonStructuredData />
        <OrganizationStructuredData />
        <link rel="alternate" type="application/rss+xml" title="Sahil Miya Blog RSS" href="/rss.xml" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}