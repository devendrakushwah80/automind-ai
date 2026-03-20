'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { FolderKanban, Users, BrainCircuit, Rocket, ArrowRight } from 'lucide-react'

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfiRBg4kz03jKNp32zFZx7BqKRwBHjjc0xXhQH9WBBEMA9VsA/viewform'

const reasons = [
  {
    icon: FolderKanban,
    title: 'Real projects, not assignments',
    body: 'Every task you complete ships to a real client product. Build a portfolio that proves you can do the work — not just pass a test.',
    accent: 'bg-blue-50 border-blue-100 text-blue-600',
  },
  {
    icon: Users,
    title: 'Mentors who work in the industry',
    body: 'Your assigned mentor reviews your code, answers your questions, and guides your career decisions — not an AI bot, a real person.',
    accent: 'bg-violet-50 border-violet-100 text-violet-600',
  },
  {
    icon: BrainCircuit,
    title: 'AI-first curriculum',
    body: 'We teach what the market needs now — LLMs, automation, full-stack AI apps. Skills that are directly valued by employers in 2025.',
    accent: 'bg-cyan-50 border-cyan-100 text-cyan-600',
  },
  {
    icon: Rocket,
    title: 'Opportunity to earn ₹15,000/month',
    body: 'Top performers get hired as paid interns by Automind AI and our client network. It is not a promise — it is a proven track record.',
    accent: 'bg-emerald-50 border-emerald-100 text-emerald-600',
  },
]

const compare = [
  { item: 'Real project work',         us: true,  others: false },
  { item: 'Industry mentor assigned',  us: true,  others: false },
  { item: 'Certificate on completion', us: true,  others: true  },
  { item: 'Paid internship chance',    us: true,  others: false },
  { item: 'Lifetime community access', us: true,  others: false },
  { item: 'Portfolio guidance',        us: true,  others: false },
]

export default function WhyUs() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-us" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-[1120px] mx-auto px-5">
        <div ref={ref} className="text-center max-w-xl mx-auto mb-14">
          <span className="label">Why Choose Us</span>
          <h2 className="h2 mb-3">We are not a course. We are a studio.</h2>
          <p className="text-[1.0625rem] text-slate-500 leading-relaxed">
            Most internship programs give you videos and a certificate. We give you real work,
            real feedback, and real outcomes.
          </p>
        </div>

        {/* Reason cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {reasons.map(({ icon: Icon, title, body, accent }) => {
            const [bg, border, tc] = accent.split(' ')
            return (
              <div key={title}
                className="bg-white rounded-2xl border border-slate-200 p-7 hover:border-slate-300 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                <div className={`w-11 h-11 rounded-xl ${bg} ${border} border flex items-center justify-center mb-5`}>
                  <Icon size={20} className={tc} />
                </div>
                <h3 className="h3 mb-2.5">{title}</h3>
                <p className="text-[0.9375rem] text-slate-500 leading-relaxed">{body}</p>
              </div>
            )
          })}
        </div>

        {/* Comparison table */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
          style={{ boxShadow: 'var(--shadow-md)' }}>
          <div className="grid grid-cols-[1fr_120px_120px] border-b border-slate-100">
            <div className="px-6 py-4">
              <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">Feature</p>
            </div>
            <div className="px-4 py-4 text-center bg-blue-600 border-l border-blue-500">
              <p className="text-xs font-bold text-white uppercase tracking-wider">Automind AI</p>
            </div>
            <div className="px-4 py-4 text-center bg-slate-50 border-l border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Others</p>
            </div>
          </div>

          {compare.map(({ item, us, others }, i) => (
            <div key={item}
              className={`grid grid-cols-[1fr_120px_120px] ${i < compare.length - 1 ? 'border-b border-slate-100' : ''}`}>
              <div className="px-6 py-4">
                <p className="text-sm font-medium text-slate-700">{item}</p>
              </div>
              <div className="px-4 py-4 text-center bg-blue-50 border-l border-blue-100">
                {us
                  ? <span className="text-blue-600 font-bold text-base">✓</span>
                  : <span className="text-slate-300 text-base">—</span>}
              </div>
              <div className="px-4 py-4 text-center border-l border-slate-100">
                {others
                  ? <span className="text-slate-500 font-medium text-sm">✓</span>
                  : <span className="text-slate-300 text-base">—</span>}
              </div>
            </div>
          ))}

          <div className="grid grid-cols-[1fr_120px_120px] bg-slate-50 border-t border-slate-100">
            <div className="px-6 py-4" />
            <div className="px-4 py-4 flex justify-center bg-blue-600 border-l border-blue-500">
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer"
                className="text-xs font-bold text-white flex items-center gap-1 hover:underline">
                Apply Now <ArrowRight size={11} />
              </a>
            </div>
            <div className="border-l border-slate-100" />
          </div>
        </div>
      </div>
    </section>
  )
}
