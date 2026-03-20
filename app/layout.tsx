import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Automind AI — Internship Program | AI, Web & App Development',
  description:
    'Get real internship experience in AI, Web Development, and App Development. Work on live projects, earn a certificate, and get industry mentorship. Apply now.',
  keywords: 'AI internship India, web development internship, machine learning internship, AutoMind AI, paid internship',
  openGraph: {
    title: 'Automind AI — Internship Program',
    description: 'Work on real projects. Get certified. Get hired.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="antialiased bg-white text-slate-700">{children}</body>
    </html>
  )
}
