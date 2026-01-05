import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://ankitchakraborty.vercel.app'),
  title: 'Ankit Chakraborty | Engineering Leader & AI Architect',
  description: 'Portfolio of Ankit Chakraborty - Engineering Leader specializing in billing platforms, AI-driven modernization, and SaaS solutions. 14+ years experience delivering $5M+/month impact projects.',
  keywords: ['Ankit Chakraborty', 'Engineering Leader', 'Billing Platform Architect', 'AI Engineer', 'SaaS Builder', 'Next.js Developer'],
  authors: [{ name: 'Ankit Chakraborty' }],
  openGraph: {
    title: 'Ankit Chakraborty | Engineering Leader & AI Architect',
    description: 'Engineering Leader specializing in billing platforms, AI-driven modernization, and SaaS solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankit Chakraborty | Engineering Leader & AI Architect',
    description: 'Engineering Leader specializing in billing platforms, AI-driven modernization, and SaaS solutions.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-900 text-slate-100`}>
        <Navbar />
        <main className="min-h-screen bg-slate-900">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
