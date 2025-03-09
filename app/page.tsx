
import HeroPage from "./(marketing)/hero/page";
import { FaqSection } from "./(marketing)/sections/faq-section";
import { FeaturesWithImages } from "./(marketing)/sections/features-with-images";
import { OnboardingSteps } from "./(marketing)/sections/onboarding-steps";
import { PricingSection } from "./(marketing)/sections/pricing-section";
import { ProductPresentation } from "./(marketing)/sections/product-presentation";
import { SecuritySection } from "./(marketing)/sections/security-section";
import { TestimonialsSection } from "./(marketing)/sections/testimonials-section";
import { CtaSection } from "./(marketing)/sections/cta-section";
import { HeroSection } from "./(marketing)/sections/hero-section";
export default function Home() {
  return (
      <>
      <HeroSection />
      <HeroPage />
      {/* <FeaturesSection/> */}
      <FeaturesWithImages />
      <ProductPresentation />
      <OnboardingSteps />
      <SecuritySection />
      {/* <EmailDashboard/> */}
      {/* <IntegrateSection/> */}
      {/* <TestimonialsSection /> */}
      <PricingSection />
      <FaqSection />
      {/* <HeroSection/> */}
      {/* <CtaSectionWithImage /> */}
      <CtaSection/>
      </>
  );
}
