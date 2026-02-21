"use client"

import { useState } from "react"
import { Cog, Cpu, Network, MousePointerClick } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

export function HowIWorkSection() {
  const [sectionRef, isVisible] = useAnimateOnScroll<HTMLElement>({ threshold: 0.08 })
  const [flipped, setFlipped] = useState(false)

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="how-i-build"
      aria-label="How I work"
      className="px-6 py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 lg:mb-20">
          <h2
            className={cn(
              "text-3xl font-bold tracking-tight text-foreground opacity-0 sm:text-4xl md:text-5xl lg:text-6xl",
              isVisible && "animate-fade-in-up"
            )}
          >
            How I Work
          </h2>
        </div>

        {/* Systems First Block */}
        <AnimatedSection className="mb-8 sm:mb-10" delay="0.1s">
          <div className="overflow-hidden rounded-2xl bg-card shadow-sm">
            <div className="p-6 sm:p-8 lg:p-12">
              <div className="mb-6 flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-highlight"
                  aria-hidden="true"
                >
                  <Cog className="h-6 w-6 text-highlight-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Systems First
                </h3>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-foreground sm:text-lg">
                Most people build pages.{" "}
                <span className="font-semibold">
                  I build revenue engines.
                </span>{" "}
                Every project starts with conversion architecture, automation mapping, traffic-to-revenue logic, and backend scalability planning.
              </p>

              {/* Process tags */}
              <div className="mt-8 flex flex-wrap gap-2 sm:gap-3" aria-label="Process steps">
                {["Conversion Architecture", "Automation Mapping", "Revenue Logic", "Scalability"].map(
                  (label) => (
                    <span
                      key={label}
                      className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-accent"
                    >
                      {label}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* AI as Leverage - dark block */}
        <AnimatedSection className="mb-8 sm:mb-10" delay="0.2s">
          <div className="rounded-2xl bg-surface-dark p-6 text-surface-dark-foreground sm:p-8 lg:p-12">
            <h3 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-balance">
              I Use AI as Leverage
            </h3>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left - Philosophy */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <Cpu className="h-5 w-5 text-surface-dark-foreground/70" aria-hidden="true" />
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-surface-dark-foreground/50">
                    Operational Multiplier
                  </span>
                </div>
                <p className="text-base leading-relaxed text-surface-dark-foreground/80 sm:text-lg">
                  AI is not a gimmick. It{"'"}s an{" "}
                  <strong className="text-surface-dark-foreground">operational multiplier</strong>.
                  I use AI to automate workflows, generate growth insights, reduce execution time, and{" "}
                  <strong className="text-surface-dark-foreground">increase output without increasing cost</strong>.
                </p>
              </div>

              {/* Right - flip card */}
              <div>
                <button
                  onClick={() => setFlipped(!flipped)}
                  className="group w-full cursor-pointer rounded-xl bg-surface-dark-foreground/10 p-5 sm:p-6 text-left transition-all duration-300 hover:bg-surface-dark-foreground/15 focus-visible:ring-2 focus-visible:ring-highlight"
                  aria-expanded={flipped}
                  aria-label="Learn about AI refinement process"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <Network className="h-5 w-5 text-highlight" aria-hidden="true" />
                    <span className="text-sm font-medium text-highlight">
                      {flipped ? "Strategic Refinement" : "Click to reveal"}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-surface-dark-foreground/80 sm:text-base">
                    {flipped
                      ? "Then I refine manually for strategic clarity. Every automated output gets a human lens - ensuring it aligns with brand positioning and revenue goals."
                      : "I have a deliberate approach to AI that keeps strategic clarity at the center of every system I build."}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-surface-dark-foreground/40">
                    <MousePointerClick className="h-4 w-4" aria-hidden="true" />
                    <span>{flipped ? "Click to collapse" : "Click to reveal"}</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
