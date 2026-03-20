'use client'

import { ArrowRight, CheckCircle2, Shield, Star, Users } from 'lucide-react'

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfiRBg4kz03jKNp32zFZx7BqKRwBHjjc0xXhQH9WBBEMA9VsA/viewform'

const trust = [
  { icon: Users,        text: 'Trusted by 500+ Students' },
  { icon: Star,         text: 'Real Projects' },
  { icon: Shield,       text: 'Mentorship + Certificate' },
]

const stats = [
  { value: '500+', label: 'Students Trained' },
  { value: '100+', label: 'Projects Completed' },
  { value: '95%',  label: 'Satisfaction Rate' },
  { value: '₹15K', label: 'Paid Internship/mo' },
]

const deliverables = [
  'Internship Certificate',
  'Real Client Projects',
  '1-on-1 Mentorship',
  'Paid Role (up to ₹15K/month)',
  '100% Refund on Completion',
]

export default function Hero() {
  return (
    <section className="bg-white pt-20 overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-[600px] pointer-events-none"
        style={{
          background:
            'linear-gradient(175deg, #eff6ff 0%, rgba(239,246,255,0.45) 55%, transparent 100%)',
        }}
      />

      <div className="relative max-w-[1120px] mx-auto px-6 pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_390px] gap-14 items-start">

          {/* ─── Left copy ─── */}
          <div>
            {/* Urgency */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 border border-amber-200 rounded-full mb-7">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse flex-shrink-0" />
              <span className="text-xs font-semibold text-amber-700">
                Limited Seats Available — Batch Closing Soon
              </span>
            </div>

            <h1 className="heading-xl mb-5" style={{ lineHeight: '1.1' }}>
              Build AI-Powered Skills{' '}
              <span className="grad-text">That Actually</span>{' '}
              Get You Hired
            </h1>

            <p className="text-[1.125rem] text-slate-500 leading-[1.8] max-w-[520px] mb-9">
              Work on real-world projects in AI, Web, and App Development. Get internship
              experience, certification, and industry exposure — all in 4 weeks online.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-7 py-3 text-[0.9375rem] font-semibold"
              >
                Apply Now — Only ₹999 <ArrowRight size={16} />
              </a>
              <a href="#internship" className="btn btn-secondary px-7 py-3 text-[0.9375rem]">
                View Programs
              </a>
            </div>

            {/* Trust */}
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {trust.map(({ icon: Icon, text }) => (
                <span key={text} className="flex items-center gap-1.5 text-sm text-slate-500">
                  <Icon size={13} className="text-blue-500 flex-shrink-0" />
                  {text}
                </span>
              ))}
            </div>
          </div>

          {/* ─── Right: offer card ─── */}
          <div className="hidden lg:block">
            <div
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
              style={{ boxShadow: '0 24px 60px rgba(15,23,42,0.10), 0 4px 16px rgba(15,23,42,0.06)' }}
            >
              <div
                className="px-6 py-5"
                style={{ background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)' }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-1">
                  Internship Program
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    ₹999
                  </span>
                  <span className="text-blue-300 text-sm line-through">₹2,999</span>
                  <span className="ml-auto text-xs bg-amber-400 text-amber-900 font-bold px-2.5 py-1 rounded-full">
                    67% OFF
                  </span>
                </div>
                <p className="text-blue-200 text-sm mt-1">4-week online internship program</p>
              </div>

              <div className="p-5">
                {[
                  { label: 'Duration',     value: '4 Weeks' },
                  { label: 'Mode',         value: 'Online' },
                  { label: 'Format',       value: 'Project-Based' },
                  { label: 'Certificate',  value: 'Yes — Verifiable' },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0"
                  >
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{label}</span>
                    <span className="text-sm font-semibold text-slate-800">{value}</span>
                  </div>
                ))}

                <div className="pt-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                    What you get
                  </p>
                  <div className="space-y-2 mb-5">
                    {deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-blue-600 flex-shrink-0" />
                        <span className="text-sm text-slate-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full justify-center py-3 text-sm"
                  >
                    Apply Now <ArrowRight size={14} />
                  </a>
                  <p className="text-center text-xs text-slate-400 mt-2.5">
                    Free to apply · Confirmation within 48 hrs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Stats bar ─── */}
        <div className="mt-14 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 divide-x divide-slate-100">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="px-6 py-5 hover:bg-slate-50 transition-colors text-center sm:text-left"
            >
              <div className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'var(--font-display)' }}>
                {value}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
