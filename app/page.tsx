import { EnhancedHeader } from "@/components/enhanced-header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { AccrocheSection } from "@/components/accroche-section"
import { ObjectifsSection } from "@/components/objectifs-section"
import { AlertBanner } from "@/components/alert-banner"
import { CountdownTimer } from "@/components/countdown-timer"
import { ProgramSection } from "@/components/program-section"
import { SpeakersSection } from "@/components/speakers-section"
import { ExhibitorsSection } from "@/components/exhibitors-section"
import { ImpactSection } from "@/components/impact-section"
import { PracticalInfoSection } from "@/components/practical-info-section"
import { PartnersSection } from "@/components/partners-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { EnhancedContactSection } from "@/components/enhanced-contact-section"
import { FAQSection } from "@/components/faq-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <AlertBanner />
      {/* Using enhanced header with active section tracking */}
      <EnhancedHeader />
      <main>
        <HeroSection />
        <AccrocheSection />
        <ObjectifsSection />
        <CountdownTimer />
        <ProgramSection />
        <SpeakersSection />
        <ExhibitorsSection />
        <ImpactSection />
        <PracticalInfoSection />
        <PartnersSection />
        <TestimonialsSection />
        {/* Using enhanced contact section with loading states */}
        <EnhancedContactSection />
        <FAQSection />
        <NewsletterSection />
      </main>
      <Footer />
      {/* Adding scroll to top button */}
      <ScrollToTop />
    </div>
  )
}
