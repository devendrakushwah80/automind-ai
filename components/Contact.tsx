'use client'

import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Mail, Phone, MessageSquare, ArrowRight, Loader2, CheckCircle2, AlertTriangle } from 'lucide-react'

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfiRBg4kz03jKNp32zFZx7BqKRwBHjjc0xXhQH9WBBEMA9VsA/viewform'
type Status = 'idle' | 'loading' | 'success'

export default function Contact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm]     = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('success')
    setForm({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setStatus('idle'), 7000)
  }

  const contacts = [
    { icon: Mail,         label: 'Email',     value: 'contact@automindai.xyz',  href: 'mailto:contact@automindai.xyz' },
    { icon: Phone,        label: 'WhatsApp',  value: '+91 8889496147',           href: 'https://wa.me/918889496147' },
    { icon: MessageSquare, label: 'Telegram', value: 'Join our channel',         href: 'https://t.me/+Nq16oNV76nAxYTQ1' },
  ]

  return (
    <section id="contact" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-[1120px] mx-auto px-5">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-14 items-start">
          {/* Left */}
          <div>
            <span className="label">Get in Touch</span>
            <h2 className="h2 mb-4">Have questions? We reply fast.</h2>
            <p className="text-[1.0625rem] text-slate-500 leading-relaxed mb-8">
              Not sure if the program is right for you? Message us on WhatsApp or fill the form.
              We usually reply within 2 hours.
            </p>

            {/* Contact methods */}
            <div className="space-y-3 mb-8">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href}
                  target={href.startsWith('http') || href.startsWith('https') ? '_blank' : undefined}
                  rel={href.startsWith('http') || href.startsWith('https') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50/40 hover:shadow-sm transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <Icon size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[0.6875rem] font-bold text-slate-400 uppercase tracking-wider">{label}</p>
                    <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick apply CTA */}
            <div className="bg-blue-600 rounded-2xl p-6 text-white">
              <span className="urgency bg-white/20 border-white/30 text-white mb-3 inline-flex">
                <AlertTriangle size={12} />
                Limited seats remaining
              </span>
              <h3 className="text-lg font-bold mb-2">Ready to apply?</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                Skip the form — apply directly via Google Form in under 2 minutes.
              </p>
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-700 font-semibold text-sm rounded-xl hover:bg-blue-50 transition-colors">
                Apply Now <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === 'success' ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center"
                style={{ boxShadow: 'var(--shadow-lg)' }}>
                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={26} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Message received!</h3>
                <p className="text-slate-500 mb-6">We will reply within 2 hours on working days.</p>
                <a href={FORM_URL} target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary">
                  Apply for Internship Now
                </a>
              </div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-2xl p-8"
                style={{ boxShadow: 'var(--shadow-lg)' }}>
                <h3 className="text-lg font-bold text-slate-900 mb-6">Send us a message</h3>
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">Full Name</label>
                      <input type="text" name="name" value={form.name} onChange={onChange} required
                        placeholder="Rahul Sharma" className="input" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">Email</label>
                      <input type="email" name="email" value={form.email} onChange={onChange} required
                        placeholder="rahul@gmail.com" className="input" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">WhatsApp Number</label>
                    <input type="tel" name="phone" value={form.phone} onChange={onChange}
                      placeholder="+91 98765 43210" className="input" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">Message</label>
                    <textarea name="message" value={form.message} onChange={onChange} required
                      rows={4} placeholder="Which track are you interested in? Any questions?"
                      className="input resize-none" />
                  </div>
                  <button type="submit" disabled={status === 'loading'}
                    className="btn btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60">
                    {status === 'loading'
                      ? <><Loader2 size={16} className="animate-spin" />Sending...</>
                      : <>Send Message <ArrowRight size={16} /></>}
                  </button>
                  <p className="text-center text-xs text-slate-400">
                    Or apply directly via{' '}
                    <a href={FORM_URL} target="_blank" rel="noopener noreferrer"
                      className="text-blue-600 font-semibold hover:underline">
                      Google Form
                    </a>
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
