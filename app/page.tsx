import Navbar          from '@/components/Navbar'
import Hero            from '@/components/Hero'
import Services        from '@/components/Services'
import Internship      from '@/components/Internship'
import DocumentPreview from '@/components/DocumentPreview'
import RefundPolicy    from '@/components/RefundPolicy'
import WhyUs           from '@/components/WhyUs'
import Testimonials    from '@/components/Testimonials'
import Contact         from '@/components/Contact'
import Footer          from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Internship />
      <DocumentPreview />
      <RefundPolicy />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
