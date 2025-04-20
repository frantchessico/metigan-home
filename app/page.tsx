
import HeroPage from "./(marketing)/hero/page";
import { FaqSection } from "./(marketing)/sections/faq-section";
import { FeaturesWithImages } from "./(marketing)/sections/features-with-images";
import { OnboardingSteps } from "./(marketing)/sections/onboarding-steps";
import { PricingSection } from "./(marketing)/sections/pricing-section";
import { ProductPresentation } from "./(marketing)/sections/product-presentation";
import { MarketingSection } from "./(marketing)/sections/security-section";
import { CtaSection } from "./(marketing)/sections/cta-section";
import { HeroSection } from "./(marketing)/sections/hero-section";
export default function Home() {
  return (
      <>
      <HeroSection />
      <HeroPage />
      
      <FeaturesWithImages />
      <ProductPresentation />
      <OnboardingSteps />
      <MarketingSection />
      
      <PricingSection />
      <FaqSection />
      
      <CtaSection/>
      </>
  );
}
