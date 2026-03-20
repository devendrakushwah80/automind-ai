'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfiRBg4kz03jKNp32zFZx7BqKRwBHjjc0xXhQH9WBBEMA9VsA/viewform'

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Web Development Intern',
    initials: 'RS',
    bg: 'bg-blue-600',
    stars: 5,
    text: 'AutoMind AI helped me build real projects and improve my skills. I shipped three websites for actual clients. My portfolio went from zero to impressive in just 4 weeks.',
  },
  {
    name: 'Priya Mehta',
    role: 'AI & ML Intern',
    initials: 'PM',
    bg: 'bg-violet-600',
    stars: 5,
    text: 'I finally understood how to build and deploy real ML models. The mentor was incredibly helpful. Got a job offer within a month of completing the program.',
  },
  {
    name: 'Rohan Verma',
    role: 'Android Dev Intern',
    initials: 'RV',
    bg: 'bg-emerald-600',
    stars: 5,
    text: 'Best decision I made for my career. I was a beginner and by week 3 I had a working Android app live. The certificate is genuine and recruiters notice it.',
  },
  {
    name: 'Sneha Patel',
    role: 'Data Science Intern',
    initials: 'SP',
    bg: 'bg-orange-500',
    stars: 5,
    text: 'The program is worth every rupee. I learned more in 4 weeks than in an entire semester. The projects are real and mentorship is personalised.',
  },
  {
    name: 'Aryan Singh',
    role: 'Python Programming Intern',
    initials: 'AS',
    bg: 'bg-rose-500',
    stars: 5,
    text: 'AutoMind is not a course — it is an actual internship. You get tasks, deadlines, and feedback just like a real company. I converted to a paid role at ₹12K/month.',
  },
  {
    name: 'Neha Gupta',
    role: 'UI/UX Design Intern',
    initials: 'NG',
    bg: 'bg-cyan-600',
    stars: 5,
    text: 'I redesigned a real product during my internship and watched it go live. My Figma skills improved massively under proper guidance.',
  },
]

export default function Testimonials() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="testimonials" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-[1120px] mx-auto px-6">
        <div ref={ref} className="mb-12 max-w-xl">
          <span className="section-label">Student Reviews</span>
          <h2 className="heading-lg mb-3">Real results. Real students.</h2>
          <p className="text-[1.0625rem] text-slate-500">
            Over 500 students have completed our programs. Here is what they say.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 hover:-translate-y-1 transition-all duration-200"
              style={{ boxShadow: 'var(--shadow-sm)' }}
            >
              <div className="flex gap-0.5 mb-3.5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-slate-600 leading-[1.75] mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className={`w-9 h-9 rounded-full ${t.bg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary px-7 py-3 text-[0.9375rem]"
          >
            Join 500+ Students — Apply Now <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
