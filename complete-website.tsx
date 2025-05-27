import WebsiteHeader from "./website-header"
import HeroSection from "./hero-section"
import AboutSection from "./about-section"
import EbooksSection from "./ebooks-section"
import TestimonialsSection from "./testimonials-section"
import WebsiteFooter from "./website-footer"

export default function CompleteWebsite() {
  return (
    <div className="min-h-screen">
      <WebsiteHeader />
      <HeroSection />
      <AboutSection />
      <EbooksSection />
      <TestimonialsSection />
      <WebsiteFooter />
    </div>
  )
}
