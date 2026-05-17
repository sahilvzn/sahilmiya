import { type Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { HowIWorkSection } from "@/components/how-i-work-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FooterSection } from "@/components/footer-section"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://sahilmiya.in",
  },
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <HeroSection />
        <IntroSection />
        <TestimonialsSection />
        <HowIWorkSection />
      </main>
      <FooterSection />
    </>
  )
}
