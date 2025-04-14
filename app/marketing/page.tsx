import { MarketingSection } from "./marketing-section"
import { FeaturesSection } from "./features-section"
import { HeroSection } from "./hero-section"
import { CTASection } from "./cta-section"

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <MarketingSection />
      <FeaturesSection />
      <CTASection />
    </main>
  )
}

