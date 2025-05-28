import HeaderDynamic from "@/components/header-dynamic"
import AboutSection from "../../about-section"
import WebsiteFooter from "../../website-footer"

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderDynamic />
      <div className="pt-20">
        <AboutSection />
      </div>
      <WebsiteFooter />
    </div>
  )
}
