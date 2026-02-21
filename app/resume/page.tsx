import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { ResumeContent } from "@/components/resume-content"

export const metadata: Metadata = {
  title: "Resume - Sahil Miya | AI Brand & Commerce Systems Architect",
  description:
    "Sahil Miya's resume: AI systems, Shopify architecture, automation infrastructure, and growth strategy.",
}

export default function ResumePage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen bg-background pt-24 pb-20">
        <ResumeContent />
      </main>
    </>
  )
}
