'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn, FileText, Award, CheckCircle2, ArrowRight } from 'lucide-react'

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfiRBg4kz03jKNp32zFZx7BqKRwBHjjc0xXhQH9WBBEMA9VsA/viewform'

const docs = [
  {
    id: 'offer' as const,
    src: '/offer-letter.png',
    title: 'Official Offer Letter',
    description:
      'Receive a verified offer letter from Automind AI immediately after selection — before your internship begins.',
    icon: FileText,
    iconBg: 'bg-emerald-50 border-emerald-100',
    iconColor: 'text-emerald-600',
    badge: 'Sent on Selection',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    points: [
      'Official company letterhead',
      'Founder signature + company stamp',
      'Program details & duration',
      'Unique candidate ID',
    ],
  },
  {
    id: 'cert' as const,
    src: '/certificate.png',
    title: 'Internship Certificate',
    description:
      'Get a beautifully designed, verifiable completion certificate after successfully finishing all program requirements.',
    icon: Award,
    iconBg: 'bg-blue-50 border-blue-100',
    iconColor: 'text-blue-600',
    badge: 'On Completion',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
    points: [
      'QR code verification',
      'Certificate ID (shareable)',
      'Program name + duration',
      'Accepted by recruiters',
    ],
  },
]

export default function DocumentPreview() {
  const [lightbox, setLightbox] = useState<'offer' | 'cert' | null>(null)

  const activeSrc =
    lightbox === 'offer' ? '/offer-letter.png' :
    lightbox === 'cert'  ? '/certificate.png'  : null

  const activeTitle =
    lightbox === 'offer' ? 'Official Offer Letter' :
    lightbox === 'cert'  ? 'Internship Certificate' : ''

  return (
    <section id="documents" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-[1120px] mx-auto px-6">

        {/* ── Header ── */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="section-label">What You Will Receive</span>
          <h2 className="heading-lg mb-3">
            Real credentials.<br />Trusted by recruiters.
          </h2>
          <p className="text-[1.0625rem] text-slate-500 leading-relaxed">
            Every Automind AI intern receives official documents — a verified Offer Letter
            before starting and a Certificate of Completion after finishing.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-12">
          {docs.map((doc) => {
            const Icon = doc.icon
            return (
              <div
                key={doc.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden group hover:border-slate-300 hover:shadow-lg transition-all duration-200"
                style={{ boxShadow: 'var(--shadow-sm)' }}
              >
                {/* ── Image preview ── */}
                <div
                  className="relative bg-slate-50 border-b border-slate-100 overflow-hidden cursor-pointer"
                  style={{ aspectRatio: '16/10' }}
                  onClick={() => setLightbox(doc.id)}
                  role="button"
                  aria-label={`Preview ${doc.title}`}
                >
                  <Image
                    src={doc.src}
                    alt={doc.title}
                    fill
                    className="object-contain object-top p-4 group-hover:scale-[1.02] transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-200 flex items-center justify-center">
                    <div className="flex items-center gap-2 bg-white/95 text-slate-800 text-xs font-semibold px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-y-1 group-hover:translate-y-0">
                      <ZoomIn size={13} />
                      Click to enlarge
                    </div>
                  </div>
                </div>

                {/* ── Card body ── */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 ${doc.iconBg}`}>
                        <Icon size={16} className={doc.iconColor} />
                      </div>
                      <h3 className="heading-md">{doc.title}</h3>
                    </div>
                    <span className={`flex-shrink-0 text-[0.625rem] font-bold uppercase tracking-widest border px-2.5 py-1 rounded-full ${doc.badgeBg}`}>
                      {doc.badge}
                    </span>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    {doc.description}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {doc.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <CheckCircle2 size={13} className={doc.iconColor + ' flex-shrink-0'} />
                        <span className="text-xs text-slate-600 font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setLightbox(doc.id)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ZoomIn size={14} />
                    Preview document
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── CTA ── */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="font-semibold text-slate-900 mb-1">
              These documents are yours after applying
            </p>
            <p className="text-sm text-slate-500">
              Offer letter on selection &middot; Certificate on completion &middot; Both verifiable
            </p>
          </div>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex-shrink-0"
          >
            Apply Now — Only ₹999 <ArrowRight size={15} />
          </a>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && activeSrc && (
        <div
          className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100">
              <p className="text-sm font-semibold text-slate-800">{activeTitle}</p>
              <button
                onClick={() => setLightbox(null)}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>
            {/* Image */}
            <div className="relative bg-slate-50" style={{ minHeight: '420px' }}>
              <Image
                src={activeSrc}
                alt={activeTitle}
                width={900}
                height={640}
                className="w-full h-auto"
                style={{ maxHeight: '70vh', objectFit: 'contain' }}
              />
            </div>
            {/* Footer */}
            <div className="px-5 py-3.5 border-t border-slate-100 flex items-center justify-between">
              <p className="text-xs text-slate-400">
                Automind AI &middot; automindai.xyz
              </p>
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-xs px-4 py-2"
              >
                Apply to Receive This <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
