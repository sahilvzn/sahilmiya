"use client"

// import { useState } from "react" removed
import { useEffect } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"
import { FileText, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

export function FooterSection() {
  const [sectionRef, isVisible] = useAnimateOnScroll<HTMLElement>({ threshold: 0.1 })

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "project-scope-call" });
      cal("ui", { "theme": "dark", "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])

  return (
    <footer
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="contact"
      aria-label="Philosophy and contact"
      className="px-6 pt-16 pb-8 lg:px-10 lg:pt-20 lg:pb-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Philosophy block */}
        <AnimatedSection className="mb-16 lg:mb-20" delay="0.05s">
          <div className="rounded-2xl bg-secondary p-6 sm:p-8 lg:p-12">
            <div className="mb-3">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                My Philosophy
              </span>
            </div>
            <h3 className="mb-6 max-w-3xl text-xl font-bold leading-snug text-foreground sm:text-2xl lg:text-3xl text-balance">
              Scaling a brand isn{"'"}t about{" "}
              <mark className="rounded-md bg-highlight px-2 py-0.5 text-highlight-foreground">
                prettier design.
              </mark>
            </h3>
            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              It{"'"}s about{" "}
              <span className="font-semibold text-foreground">
                strong positioning
              </span>
              , conversion logic,{" "}
              <span className="font-semibold text-foreground">
                operational leverage
              </span>
              , and automated growth loops.
              I build brands that are engineered to scale - not patched together.
            </p>
          </div>
        </AnimatedSection>

        {/* Contact & CTA Calendar section */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <AnimatedSection delay="0.15s" className="w-full lg:w-1/3">
            {/* Left side: avatar + heading */}
            <div className="flex flex-col items-start">
              <div className="mb-5 h-16 w-16 overflow-hidden rounded-full ring-2 ring-border sm:h-20 sm:w-20">
                <Image
                  src="/Gemini_Generated_Image_ennhu1ennhu1ennh.png"
                  alt="Sahil Miya - Profile Photo"
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mb-2 text-sm font-medium text-muted-foreground">
                Sahil
              </p>
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
                If this aligns, let{"'"}s build.
              </h3>
              <a
                href="mailto:sahil.vzn@gmail.com"
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                sahil.vzn@gmail.com
              </a>
              <div className="mt-8">
                <Link
                  href="/resume"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-lg active:scale-100"
                >
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  My Resume
                </Link>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay="0.2s" className="w-full lg:w-2/3">
            <div className="min-h-[500px] w-full rounded-2xl bg-card overflow-hidden">
              <Cal namespace="project-scope-call"
                calLink="sahil-miya-hwvvqj/project-scope-call"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ "layout": "month_view", "useSlotsViewOnSmallScreen": "true", "theme": "dark" }}
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom bar */}
        <div
          className={cn(
            "mt-10 border-t border-border pt-4 pb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between opacity-0 lg:mt-14",
            isVisible && "animate-fade-in stagger-5"
          )}
        >
          <p className="text-xs text-muted-foreground">
            Designed & Engineered by Sahil Miya
          </p>
          <p className="text-xs text-muted-foreground">
            AI-Powered Brand Systems
          </p>
        </div>
      </div>
    </footer>
  )
}
