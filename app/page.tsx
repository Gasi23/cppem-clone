// app/page.tsx
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Numbers from '../components/Numbers'
import Problems from '../components/Problems'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import FixedCTA from '../components/FixedCTA'
import VideoTestimonial from '../components/VideoTestimonial'
import FadeInSection from '../components/FadeInSection'
import InPersonClasses from '../components/InPersonClasses'
import Careers from '../components/Careers'
import FinalCTA from '../components/FinalCTA'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Home() {
  return (
    <main className="bg-black text-white selection:bg-green-400 selection:text-black">
      <Hero />
      <FadeInSection>
        <Features />
      </FadeInSection>
      <FadeInSection>
        <HowItWorks />
      </FadeInSection>
      <FadeInSection>
        <Careers />
      </FadeInSection>
      <FadeInSection>
        <Numbers />
      </FadeInSection>
      <FadeInSection>
        <Problems />
      </FadeInSection>
      <FadeInSection>
        <Testimonials />
      </FadeInSection>
      <FadeInSection>
        <VideoTestimonial />
      </FadeInSection>
      <FadeInSection>
        <InPersonClasses />
      </FadeInSection>
      <FadeInSection>
        <Pricing />
      </FadeInSection>
      <FadeInSection>
        <FAQ />
      </FadeInSection>
      <Footer />
      <FixedCTA />
      <WhatsAppButton />
    </main>
  )
}
