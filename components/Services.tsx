'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Code2, BrainCircuit, Smartphone, Globe, Workflow, ArrowRight } from 'lucide-react'

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfiRBg4kz03jKNp32zFZx7BqKRwBHjjc0xXhQH9WBBEMA9VsA/viewform'

const programs = [
  {
    icon: Code2,
    title: 'Web Development',
    tagline: 'React & Next.js — production-ready',
    description: 'Build real websites using React and Next.js. You will work on live client projects — from landing pages to full-stack SaaS apps.',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Node.js'],
    color: 'text-blue-600 bg-blue-50 border-blue-100',
    top: '#2563eb',
  },
  {
    icon: BrainCircuit,
    title: 'AI & Machine Learning',
    tagline: 'Real models, real automation',
    description: 'Work on real AI models, chatbots, and automation systems. Learn LLMs, NLP, and model deployment in a hands-on environment.',
    skills: ['Python', 'TensorFlow', 'LLMs', 'Prompt Engineering'],
    color: 'text-violet-600 bg-violet-50 border-violet-100',
    top: '#7c3aed',
    badge: 'High Demand',
  },
  {
    icon: Smartphone,
    title: 'Android App Development',
    tagline: 'Apps with real-world use cases',
    description: 'Create Android apps from scratch with Kotlin and Flutter. Every project solves an actual problem and is ready for Play Store.',
    skills: ['Kotlin', 'Flutter', 'Firebase', 'REST APIs'],
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    top: '#059669',
  },
  {
    icon: Workflow,
    title: 'Business Automation',
    tagline: 'Automate workflows end-to-end',
    description: 'Eliminate repetitive work with custom automation pipelines. Connect CRM, email, and data tools — all on autopilot.',
    skills: ['n8n', 'Zapier', 'Python Scripts', 'APIs'],
    color: 'text-amber-600 bg-amber-50 border-amber-100',
    top: '#d97706',
  },
  {
    icon: Globe,
    title: 'Full Stack Development',
    tagline: 'Frontend + Backend together',
    description: 'Build complete web applications with databases, authentication, and deployment. Ship products that users actually use.',
    skills: ['Next.js', 'PostgreSQL', 'Prisma', 'Vercel'],
    color: 'text-sky-600 bg-sky-50 border-sky-100',
    top: '#0284c7',
  },
]

export default function Services() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-[1120px] mx-auto px-5">
        <div ref={ref} className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-5">
          <div>
            <span className="label">Our Programs</span>
            <h2 className="h2">What you&apos;ll work on</h2>
          </div>
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer"
            className="btn btn-primary btn-sm self-start sm:self-auto flex-shrink-0">
            Apply for Any Track <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((p) => {
            const Icon = p.icon
            const [tc, bgc, brc] = p.color.split(' ')
            return (
              <div key={p.title}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                style={{ boxShadow: 'var(--shadow-sm)' }}>
                {/* Top accent */}
                <div className="h-1" style={{ background: p.top }} />

                <div className="p-6">
                  {/* Icon row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl ${bgc} ${brc} border flex items-center justify-center`}>
                      <Icon size={20} className={tc} />
                    </div>
                    {p.badge && (
                      <span className="text-[0.6875rem] font-bold px-2.5 py-1 bg-violet-600 text-white rounded-full">
                        {p.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="h3 mb-0.5">{p.title}</h3>
                  <p className="text-xs font-semibold text-blue-600 mb-3">{p.tagline}</p>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{p.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.skills.map((s) => (
                      <span key={s} className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>

                  <a href={FORM_URL} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group">
                    Apply for this track
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            )
          })}

          {/* CTA card */}
          <div className="rounded-2xl p-6 flex flex-col justify-between"
            style={{ background: 'linear-gradient(135deg,#1e40af 0%,#2563eb 60%,#0284c7 100%)', boxShadow: '0 8px 24px rgba(37,99,235,.3)' }}>
            <div>
              <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                <span className="text-white text-2xl font-light">?</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Not sure which track?</h3>
              <p className="text-sm text-blue-100 leading-relaxed mb-6">
                Apply anyway. Our team will guide you to the right program based on your background and goals.
              </p>
            </div>
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-700 font-semibold text-sm rounded-xl hover:bg-blue-50 transition-colors self-start">
              Talk to Us <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
