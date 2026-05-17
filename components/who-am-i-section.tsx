"use client"

import Image from "next/image"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

export function WhoAmISection() {
  const [sectionRef, isVisible] = useAnimateOnScroll<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="who-am-i"
      aria-label="About me"
      className="px-6 py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 lg:mb-16">
          <h2
            className={cn(
              "text-4xl font-bold tracking-tight text-foreground opacity-0 sm:text-5xl md:text-6xl lg:text-7xl",
              isVisible && "animate-fade-in-up"
            )}
          >
            Who am I?
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left: Image */}
          <AnimatedSection delay="0.1s" className="order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none overflow-hidden rounded-3xl ring-2 ring-border">
              <Image
                src="/sahil-photo.png"
                alt="Sahil Miya"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>

          {/* Right: Text */}
          <AnimatedSection delay="0.2s" className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                I'm <span className="font-bold">Sahil Miya</span>, founder of{" "}
                <span className="font-semibold text-highlight">RevenueLayer</span>.
              </p>
              
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                I architect AI-first systems that <span className="font-semibold text-foreground">replace entire operations</span> - 
                not just automate tasks. From multi-LLM content engines to agentic workflows that execute autonomously,
                I build intelligence layers that scale output 10x without scaling headcount.
              </p>

              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Based in India, I specialize in <span className="font-semibold text-foreground">Claude AI</span>,{" "}
                <span className="font-semibold text-foreground">n8n workflow engineering</span>, and building systems that 
                bridge the gap between <span className="font-semibold text-foreground">AI capability and real-world execution</span>.
              </p>

              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                My work focuses on three core areas: orchestrating multiple LLMs (Claude + GPT-4) to create 
                autonomous content systems, engineering AI video production pipelines that cut production time 
                by 85%, and designing agentic AI systems that make decisions and execute complex workflows 
                without human intervention.
              </p>
            </div>

            {/* Quick facts */}
            <div className="pt-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-highlight"></div>
                <p className="text-sm font-medium text-foreground sm:text-base">
                  Founder, RevenueLayer
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-highlight"></div>
                <p className="text-sm font-medium text-foreground sm:text-base">
                  India's Leading AI Engineer
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-highlight"></div>
                <p className="text-sm font-medium text-foreground sm:text-base">
                  Expert: Claude AI • n8n • Runway ML • LangChain
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
