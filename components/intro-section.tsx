"use client"

import Image from "next/image"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { cn } from "@/lib/utils"

export function IntroSection() {
  const [sectionRef, isVisible] = useAnimateOnScroll<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="intro"
      aria-label="Introduction"
      className="relative px-6 py-16 lg:px-10 lg:py-24 bg-background"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          {/* Left Side - Photo Card */}
          <div
            className={cn(
              "relative opacity-0",
              isVisible && "animate-fade-in-up"
            )}
          >
            {/* Decorative Frame */}
            <div className="relative">
              {/* Top Label */}
              <div className="absolute -top-4 left-8 z-10 rotate-2">
                <div className="bg-blue-100 border-2 border-blue-300 rounded-lg px-4 py-2 shadow-md">
                  <p className="text-sm font-handwriting text-blue-700">AI ENGINEER'S INTRO</p>
                </div>
              </div>

              {/* Main Photo Card */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-200 to-amber-200 p-8 shadow-2xl border-4 border-amber-300">
                {/* Photo */}
                <div className="relative z-10 mx-auto w-64 h-80 overflow-hidden rounded-2xl bg-white">
                  <Image
                    src="/image.jpg"
                    alt="Sahil Miya - AI Engineer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Name Badge */}
                <div className="relative z-10 mt-6 bg-amber-800 rounded-2xl px-6 py-4 text-center shadow-md">
                  <h3 className="text-2xl font-bold text-white mb-1">SAHIL MIYA</h3>
                  <p className="text-amber-100 text-sm font-medium">AI Engineer | Systems Architect</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Introduction Text */}
          <div
            className={cn(
              "relative opacity-0",
              isVisible && "animate-fade-in-up stagger-2"
            )}
          >
            {/* Scalloped Card Background */}
            <div className="relative bg-amber-800 rounded-3xl p-8 sm:p-10 shadow-2xl">
              {/* Decorative scalloped edge (simulated) */}
              <div className="absolute inset-0 rounded-3xl border-8 border-white opacity-20 pointer-events-none"></div>

              {/* Greeting */}
              <div className="mb-6">
                <h2 className="text-4xl font-bold text-pink-400 mb-2 font-handwriting">
                  नमस्ते / Hello 👋
                </h2>
              </div>

              {/* Bio Text */}
              <div className="space-y-4 text-amber-50">
                <p className="text-lg leading-relaxed">
                  I architect AI systems, I build multi-LLM pipelines, and I'm usually juggling ten
                  automation workflows at once. Coming from India, a country embracing AI innovation,
                  I guess building intelligence systems was inevitable.
                </p>
                <p className="text-lg leading-relaxed">
                  I love bringing AI capabilities to life - sometimes through agentic workflows,
                  sometimes through autonomous systems{" "}
                  <span className="italic">(honestly, I still can't decide if building them is more fun or watching them execute autonomously)</span>.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-yellow-300">
                  I believe AI systems exist everywhere, you just have to architect them.
                </p>
              </div>

              {/* Hobbies/Skills Sticky Note */}
              <div className="relative mt-8 -rotate-2">
                <div className="bg-yellow-200 rounded-lg p-6 shadow-xl border-t-8 border-pink-400 transform hover:rotate-0 transition-transform">
                  {/* Pins */}
                  <div className="absolute -top-3 left-6 w-4 h-4 bg-pink-500 rounded-full shadow-md"></div>
                  <div className="absolute -top-3 left-16 w-4 h-4 bg-pink-500 rounded-full shadow-md"></div>
                  <div className="absolute -top-3 left-26 w-4 h-4 bg-pink-500 rounded-full shadow-md"></div>

                  <h3 className="text-yellow-600 font-bold mb-3 text-center">Tech Stack</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                    <div className="font-handwriting">- Claude AI</div>
                    <div className="font-handwriting">- Multi-LLM Pipelines</div>
                    <div className="font-handwriting">- n8n Workflows</div>
                    <div className="font-handwriting">- Agentic Systems</div>
                    <div className="font-handwriting">- AI Video (Runway)</div>
                    <div className="font-handwriting">- Python Automation</div>
                  </div>
                </div>
              </div>

              {/* Resume Button (styled like sticky note) */}
              <div className="mt-8 flex justify-end">
                <a
                  href="/resume"
                  className="relative inline-block bg-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-pink-600 hover:scale-105 transition-transform"
                >
                  View Resume →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
    </section>
  )
}
