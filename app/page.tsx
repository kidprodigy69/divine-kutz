import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import AboutTeaser from '@/components/home/AboutTeaser'
import ServicesPreview from '@/components/home/ServicesPreview'
import WorkSamples from '@/components/home/WorkSamples'
import InteriorSection from '@/components/home/InteriorSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CTASection from '@/components/home/CTASection'
import LocationSection from '@/components/home/LocationSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AboutTeaser />
      <ServicesPreview />
      <WorkSamples />
      <InteriorSection />
      <TestimonialsSection />
      <CTASection />
      <LocationSection />
    </>
  )
}
