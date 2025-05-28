import HeaderDynamic from "@/components/header-dynamic"
import HeroSection from "../hero-section"
import AboutSection from "../about-section"
import TestimonialsSection from "../testimonials-section"
import WebsiteFooter from "../website-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderDynamic />
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <WebsiteFooter />
    </div>
  )
}
