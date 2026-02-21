"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = requestAnimationFrame(() => setIsVisible(true))
    return () => cancelAnimationFrame(timer)
  }, [])

  return (
    <section
      id="main-content"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] flex-col justify-center px-6 pt-24 pb-16 lg:px-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-6">
          {/* Greeting pill */}
          <div className={cn("opacity-0", isVisible && "animate-fade-in-up stagger-1")}>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-medium text-foreground">
              Hi, I{"'"}m Sahil
            </span>
          </div>

          {/* Headline block */}
          <h1 className="flex flex-col gap-1 text-foreground">
            <span
              className={cn(
                "font-sans text-3xl font-bold leading-[1.15] tracking-tight opacity-0 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
                isVisible && "animate-fade-in-up stagger-2"
              )}
            >
              I blend
            </span>
            <span
              className={cn(
                "font-serif text-3xl italic leading-[1.15] tracking-tight opacity-0 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
                isVisible && "animate-fade-in-up stagger-3"
              )}
            >
              commerce engineering + AI systems
            </span>
            <span
              className={cn(
                "font-sans text-3xl font-bold leading-[1.4] tracking-tight opacity-0 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
                isVisible && "animate-fade-in-up stagger-4"
              )}
            >
              to build brands that don{"'"}t just look good -{" "}
              <mark className="rounded-lg bg-highlight px-3 py-1 text-highlight-foreground">
                they scale.
              </mark>
            </span>
          </h1>

          {/* Supporting copy and CTA */}
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div
              className={cn(
                "max-w-xl opacity-0",
                isVisible && "animate-fade-in-up stagger-6"
              )}
            >
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                I design digital ecosystems that turn traffic into predictable revenue.
                From <span className="font-semibold text-foreground">Shopify infrastructure</span> to{" "}
                <span className="font-semibold text-foreground">AI automations</span> and social growth systems - I build brands from zero.
              </p>
            </div>

            <div
              className={cn(
                "opacity-0",
                isVisible && "animate-fade-in-up stagger-7"
              )}
            >
              <a
                href="#how-i-build"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-lg active:scale-100"
              >
                {"So... how do I do that?"}
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Decorative vertical rhythm indicator */}
        <div
          aria-hidden="true"
          className={cn(
            "absolute right-6 top-1/2 hidden -translate-y-1/2 opacity-0 lg:right-10 xl:flex",
            isVisible && "animate-fade-in stagger-6"
          )}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="h-16 w-px bg-border" />
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground [writing-mode:vertical-rl]">
              Scroll
            </span>
            <div className="h-16 w-px bg-border" />
          </div>
        </div>
      </div>
    </section>
  )
}
