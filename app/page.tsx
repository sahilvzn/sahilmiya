import { type Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { HowIWorkSection } from "@/components/how-i-work-section"
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
      <main className="min-h-screen bg-background">
        <HeroSection />
        <ProjectsSection />
        <TestimonialsSection />
        <HowIWorkSection />
      </main>
      <FooterSection />
    </>
  )
}
