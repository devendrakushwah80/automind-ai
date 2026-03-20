import Image from 'next/image'
import { ArrowRight, Phone, Mail } from 'lucide-react'

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfiRBg4kz03jKNp32zFZx7BqKRwBHjjc0xXhQH9WBBEMA9VsA/viewform'

const links = {
  Programs: [
    { label: 'Web Development',    href: '#services' },
    { label: 'AI & ML',            href: '#services' },
    { label: 'Android Apps',       href: '#services' },
    { label: 'Data Science',       href: '#services' },
    { label: 'UI/UX Design',       href: '#services' },
  ],
  Company: [
    { label: 'Why Us',             href: '#why-us' },
    { label: 'Testimonials',       href: '#testimonials' },
    { label: 'Contact',            href: '#contact' },
    { label: 'Apply Now',          href: FORM_URL },
  ],
  Connect: [
    { label: 'WhatsApp: +91 8889496147', href: 'https://wa.me/918889496147' },
    { label: 'contact@automindai.xyz',   href: 'mailto:contact@automindai.xyz' },
    { label: 'WhatsApp Community',       href: 'https://chat.whatsapp.com/LNB1hSAgaMoFb2dAXPq7Rs' },
    { label: 'Telegram Channel',         href: 'https://t.me/+Nq16oNV76nAxYTQ1' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100">
      {/* CTA strip */}
      <div style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1e3a5f 60%,#1e40af 100%)' }}>
        <div className="max-w-[1120px] mx-auto px-5 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-extrabold text-white mb-1">
              Ready to get real experience?
            </h3>
            <p className="text-blue-200 text-sm">Join 500+ students already building their careers.</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a href="https://wa.me/918889496147" target="_blank" rel="noopener noreferrer"
              className="btn text-sm px-5 py-2.5 bg-white/15 border border-white/25 text-white hover:bg-white/25">
              <Phone size={14} /> Chat on WhatsApp
            </a>
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer"
              className="btn text-sm px-5 py-2.5 bg-white text-blue-700 font-bold hover:bg-blue-50">
              Apply Now — ₹999 <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1120px] mx-auto px-5 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="inline-flex mb-4">
              <Image src="/logo.jpeg" alt="Automind AI" width={130} height={38}
                className="object-contain" style={{ height: '32px', width: 'auto' }} />
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-[190px] mb-4">
              Real AI internships for students who want to build, not just learn.
            </p>
            <div className="flex flex-col gap-1.5">
              <a href="mailto:contact@automindai.xyz"
                className="flex items-center gap-2 text-xs text-slate-500 hover:text-blue-600 transition-colors">
                <Mail size={12} /> contact@automindai.xyz
              </a>
              <a href="https://wa.me/918889496147" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-500 hover:text-blue-600 transition-colors">
                <Phone size={12} /> +91 8889496147
              </a>
            </div>
          </div>

          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">{section}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Automind AI. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            AI Automation &middot; Internship Program &middot; Web &amp; App Development
          </p>
        </div>
      </div>
    </footer>
  )
}
