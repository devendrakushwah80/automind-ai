'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Clock, Wifi, IndianRupee, ArrowRight, Award, Zap, Shield } from 'lucide-react'

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfiRBg4kz03jKNp32zFZx7BqKRwBHjjc0xXhQH9WBBEMA9VsA/viewform'

const domains = [
  { title: 'Web Development',         stack: 'React · Next.js · Node.js' },
  { title: 'AI & Machine Learning',   stack: 'Python · TensorFlow · LLMs' },
  { title: 'Android App Dev',         stack: 'Kotlin · Flutter · Firebase' },
  { title: 'Data Science',            stack: 'Pandas · NumPy · Visualization' },
  { title: 'Python Programming',      stack: 'Scripting · APIs · Automation' },
  { title: 'UI/UX Design',            stack: 'Figma · Prototyping · Research' },
  { title: 'C++ Programming',         stack: 'DSA · System Programming' },
  { title: 'Java Programming',        stack: 'OOP · Spring Boot · Backend' },
  { title: 'Artificial Intelligence', stack: 'LLMs · Chatbots · Prompt Eng.' },
]

const included = [
  { icon: Award,        text: 'Internship Certificate' },
  { icon: CheckCircle2, text: 'Real Client Projects' },
  { icon: Zap,          text: '1-on-1 Mentorship' },
  { icon: IndianRupee,  text: 'Paid Role up to ₹15,000/month' },
  { icon: Shield,       text: '100% Refund on Completion' },
]

export default function Internship() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="internship" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-[1120px] mx-auto px-6">
        <div ref={ref} className="mb-12 max-w-xl">
          <span className="section-label">Internship Program</span>
          <h2 className="heading-lg mb-3">Get real experience. Get hired.</h2>
          <p className="text-[1.0625rem] text-slate-500 leading-relaxed">
            A structured 4-week program where you work on live projects, get mentored, earn a
            verifiable certificate — and get your fee refunded after completion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
          {/* Left: domains */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              Choose your track — 9 options available
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {domains.map((d, i) => (
                <motion.a
                  key={d.title}
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.04, duration: 0.35 }}
                  className="flex items-center justify-between gap-3 px-4 py-3.5 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50/40 hover:shadow-sm transition-all duration-150 group"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                      {d.title}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">{d.stack}</p>
                  </div>
                  <ArrowRight size={13} className="text-slate-300 group-hover:text-blue-500 flex-shrink-0 transition-colors" />
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-4">
              Click any track to apply. All 9 currently accepting applications.
            </p>
          </div>

          {/* Right: pricing card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.45 }}
            className="sticky top-24"
          >
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden" style={{ boxShadow: 'var(--shadow-xl)' }}>
              {/* Pricing header */}
              <div className="px-6 pt-6 pb-5" style={{ background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)' }}>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-1">
                  One-time fee
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    ₹999
                  </span>
                  <span className="text-blue-300 text-sm line-through">₹2,999</span>
                  <span className="ml-auto text-xs bg-amber-400 text-amber-900 font-bold px-2.5 py-1 rounded-full">
                    SAVE 67%
                  </span>
                </div>
                <p className="text-blue-200 text-sm mt-1">4-week online internship</p>
              </div>

              {/* Details */}
              <div className="px-6 py-4 space-y-3 border-b border-slate-100">
                {[
                  { icon: Clock, label: 'Duration', value: '4 Weeks' },
                  { icon: Wifi,  label: 'Mode',     value: 'Online' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Icon size={14} className="text-slate-400" />
                      {label}
                    </div>
                    <span className="text-sm font-semibold text-slate-800">{value}</span>
                  </div>
                ))}
              </div>

              {/* Included */}
              <div className="px-6 py-4 space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                  What&apos;s included
                </p>
                {included.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon size={12} className="text-blue-600" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{text}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="px-6 pb-6 pt-2 space-y-2">
                <div className="flex items-center gap-2 py-2.5 px-3.5 bg-amber-50 border border-amber-200 rounded-xl mb-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse flex-shrink-0" />
                  <span className="text-xs font-semibold text-amber-700">
                    Limited seats — Batch closing soon
                  </span>
                </div>
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full justify-center py-3 text-sm font-semibold"
                >
                  Apply Now — Only ₹999 <ArrowRight size={14} />
                </a>
                <p className="text-center text-xs text-slate-400 pt-1">
                  Free to apply · Fee paid after selection
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
