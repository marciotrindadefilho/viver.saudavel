import WebsiteHeader from "./components/website-header"
import HeroSection from "./components/hero-section"
import AboutSection from "./components/about-section"
import EbooksSection from "./components/ebooks-section"
import TestimonialsSection from "./components/testimonials-section"
import WebsiteFooter from "./components/website-footer"

export default function Page() {
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
