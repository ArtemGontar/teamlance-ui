import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import FeaturesSection from '@/components/FeaturesSection'
import PricingSection from '@/components/PricingSection'
import TrustSection from '@/components/TrustSection'
import Footer from '@/components/Footer'
import { 
  organizationSchema, 
  serviceSchema, 
  softwareSchema, 
  faqSchema 
} from '@/lib/structured-data'

export default function HomePage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            organizationSchema,
            serviceSchema,
            softwareSchema,
            faqSchema
          ])
        }}
      />
      
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <PricingSection />
        <TrustSection />
        <Footer />
      </main>
    </>
  )
}
