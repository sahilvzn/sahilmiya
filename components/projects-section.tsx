"use client"

import { ArrowUpRight } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

const projects = [
  {
    title:
      "I architect multi-LLM content engines that generate, optimize, and distribute content across platforms autonomously.",
    meta: "Qwikbrand | 2026 | Claude AI, n8n, Multi-Model Pipelines",
    bgClass: "bg-[#E8F4FD]",
    href: "/blog/multi-llm-content-engine",
  },
  {
    title: "I build AI video generation pipelines that produce professional videos in 30 minutes, not 15 hours.",
    meta: "Qwikbrand | 2026 | Runway ML, ElevenLabs, AI Workflows",
    bgClass: "bg-[#FDE8F0]",
    href: "/blog/ai-video-generation-pipeline",
  },
  {
    title:
      "I engineer agentic AI systems that autonomously execute complex workflows and decision chains.",
    meta: "Qwikbrand | 2026 | Agentic AI, LangChain, Autonomous Systems",
    bgClass: "bg-[#E8FDE8]",
    href: "/blog",
  },
  {
    title:
      "I design AI-powered commerce automation that scales customer experience without scaling headcount.",
    meta: "The Wellness Shop | 2026 | Shopify AI, Personalization, CRO",
    bgClass: "bg-[#FDF4E8]",
    href: "/blog",
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const [ref, isVisible] = useAnimateOnScroll<HTMLAnchorElement>({ threshold: 0.1 })

  return (
    <a
      ref={ref}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Read article: ${project.title}`}
      className={cn(
        "group overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md opacity-0 block",
        project.bgClass,
        isVisible && "animate-fade-in-up"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
      role="article"
    >
      <div className="flex h-full flex-col gap-6 p-6 sm:p-8 lg:p-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-4">
            <h3 className="max-w-lg text-lg font-semibold leading-snug text-foreground sm:text-xl lg:text-2xl text-balance">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-muted-foreground">
              {project.meta}
            </p>
          </div>
          <div
            className="flex-shrink-0 rounded-full bg-foreground/10 p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-foreground/15"
            aria-hidden="true"
          >
            <ArrowUpRight className="h-5 w-5 text-foreground" />
          </div>
        </div>
      </div>
    </a>
  )
}


export function ProjectsSection() {
  const [headingRef, headingVisible] = useAnimateOnScroll<HTMLDivElement>({
    threshold: 0.3,
  })

  return (
    <section id="work" aria-label="Selected work" className="px-6 py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div ref={headingRef} className="mb-14 lg:mb-20">
          <h2
            className={cn(
              "text-4xl font-bold tracking-tight text-foreground opacity-0 sm:text-5xl md:text-6xl lg:text-7xl",
              headingVisible && "animate-fade-in-up"
            )}
          >
            Here{"'"}s what I build
          </h2>
        </div>

        {/* Symmetrical projects grid: 2x2 */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Bottom tagline */}
        <AnimatedSection className="mt-10 text-center lg:mt-14">
          <p className="font-serif text-xl italic text-foreground">
            With more autonomous systems in the pipeline.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
