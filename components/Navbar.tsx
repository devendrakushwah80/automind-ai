'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfiRBg4kz03jKNp32zFZx7BqKRwBHjjc0xXhQH9WBBEMA9VsA/viewform'

const NAV = [
  { href: '#services',    label: 'Programs' },
  { href: '#internship',  label: 'Internship' },
  { href: '#why-us',      label: 'Why Us' },
  { href: '#testimonials',label: 'Reviews' },
  { href: '#contact',     label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-white/96 backdrop-blur-sm shadow-sm border-b border-slate-100'
            : 'bg-white border-b border-slate-100'
        }`}
      >
        <div className="max-w-[1120px] mx-auto px-6 h-16 flex items-center justify-between gap-6">
          <a href="#" className="flex-shrink-0">
            <Image
              src="/logo.jpeg"
              alt="Automind AI"
              width={148}
              height={42}
              priority
              className="object-contain"
              style={{ height: '36px', width: 'auto' }}
            />
          </a>

          <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
            {NAV.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="px-3.5 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2.5">
            <a
              href="https://wa.me/918889496147"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary text-[0.8125rem] px-4"
            >
              WhatsApp Us
            </a>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-[0.8125rem] px-4"
            >
              Apply Now <ArrowRight size={13} />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 -mr-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-16 z-40 bg-white border-b border-slate-100 shadow-lg px-6 pb-5 pt-2 md:hidden"
          >
            <nav className="flex flex-col gap-0.5 mb-4">
              {NAV.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-2 pt-3 border-t border-slate-100">
              <a
                href="https://wa.me/918889496147"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn btn-secondary w-full justify-center"
              >
                WhatsApp Us
              </a>
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full justify-center"
              >
                Apply Now <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
