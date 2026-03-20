'use client'

import { Shield, CheckCircle2, ArrowRight, AlertCircle } from 'lucide-react'

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfiRBg4kz03jKNp32zFZx7BqKRwBHjjc0xXhQH9WBBEMA9VsA/viewform'

const conditions = [
  'All assigned tasks and projects must be completed',
  'The full internship duration must be completed',
  'No plagiarism or copied work submitted',
  'All submission deadlines must be followed',
  'Minimum performance criteria must be met',
]

export default function RefundPolicy() {
  return (
    <section id="refund" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-12 items-start">

          {/* ── Left: copy ── */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-green-50 border border-green-200 rounded-full mb-6">
              <Shield size={12} className="text-green-600" />
              <span className="text-xs font-semibold text-green-700">
                Zero Risk — Zero Excuses
              </span>
            </div>

            <h2 className="heading-lg mb-4">
              100% Refund{' '}
              <span className="text-green-600">Guarantee</span>
            </h2>

            <p className="text-[1.0625rem] text-slate-500 leading-relaxed mb-5">
              We are so confident in our program that we offer a{' '}
              <strong className="text-slate-800">full refund after successful completion</strong>.
              Complete your internship, meet the criteria, and your ₹999 comes back — while you
              keep the certificate, the skills, and the experience.
            </p>

            {/* Highlight quote */}
            <div className="flex gap-3 bg-green-50 border border-green-200 rounded-xl p-4 mb-7">
              <AlertCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm font-semibold text-green-800 leading-relaxed">
                &ldquo;Refund is applicable only after successful completion and
                evaluation of all required tasks.&rdquo;
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-6 py-3"
              >
                Apply with Confidence <ArrowRight size={15} />
              </a>
              <a href="#internship" className="btn btn-secondary px-6 py-3">
                View Internship Details
              </a>
            </div>
          </div>

          {/* ── Right: conditions card ── */}
          <div
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
            style={{ boxShadow: 'var(--shadow-lg)' }}
          >
            {/* Card header */}
            <div
              className="px-6 py-5 flex items-center gap-3"
              style={{ background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)' }}
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <Shield size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Refund Conditions</p>
                <p className="text-xs text-green-100">Complete all 5 to claim your refund</p>
              </div>
              <div className="ml-auto bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                ₹999 Back
              </div>
            </div>

            {/* Conditions */}
            <div className="px-6 py-5 space-y-4">
              {conditions.map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-50 border border-green-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={13} className="text-green-600" />
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">{c}</p>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="mx-6 mb-5 grid grid-cols-3 gap-2">
              {[
                { step: '01', label: 'Complete program' },
                { step: '02', label: 'Pass evaluation' },
                { step: '03', label: 'Refund in 7 days' },
              ].map(({ step, label }) => (
                <div
                  key={step}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center"
                >
                  <div className="text-xs font-bold text-green-600 mb-1">{step}</div>
                  <div className="text-[0.6875rem] font-medium text-slate-600 leading-tight">{label}</div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mx-6 mb-6 p-3.5 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-xs text-amber-800 text-center leading-relaxed">
                Refund requests to{' '}
                <a
                  href="mailto:contact@automindai.xyz"
                  className="font-semibold underline underline-offset-2"
                >
                  contact@automindai.xyz
                </a>{' '}
                within 14 days of completion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
