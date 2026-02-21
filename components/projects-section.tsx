"use client"

import { ArrowUpRight } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

const projects = [
  {
    title:
      "I engineered AI-powered commerce systems that automate growth, increase conversions, and remove operational friction.",
    meta: "The Wellness Shop | 2026 | AI Systems, Shopify",
    bgClass: "bg-[#E8F4FD]",
    href: "https://medium.com/@sahilmiya.in/how-i-engineered-an-ai-powered-commerce-system-that-automated-growth-and-killed-operational-6a3843f4e09f",
  },
  {
    title: "I built high-performance D2C storefront systems optimized for conversion and scalability.",
    meta: "Imaraya | 2026 | Shopify Architecture, CRO",
    bgClass: "bg-[#FDE8F0]",
    href: "https://medium.com/@sahilmiya.in/how-i-built-a-high-performance-d2c-storefront-thats-optimized-to-convert-and-built-to-scale-a81fd3080109",
  },
  {
    title:
      "I created automation workflows that reduce manual execution and increase operational speed.",
    meta: "Paraiso Comfortwears | 2026 | Automated Ops",
    bgClass: "bg-[#E8FDE8]",
    href: "https://medium.com/@sahilmiya.in/how-i-built-automation-workflows-that-cut-manual-work-and-doubled-operational-speed-for-paraiso-be1cdcf54410",
  },
  {
    title:
      "I designed brand ecosystems that combine social authority + creative backend.",
    meta: "Nagesh Singh | 2026 | Personal Branding Ecosystem",
    bgClass: "bg-[#FDF4E8]",
    href: "https://medium.com/@sahilmiya.in/how-i-designed-a-brand-ecosystem-that-combines-social-authority-with-a-creative-backend-c7c9d88b109e",
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
    <section id="how-i-build" aria-label="Selected work" className="px-6 py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div ref={headingRef} className="mb-14 lg:mb-20">
          <h2
            className={cn(
              "text-4xl font-bold tracking-tight text-foreground opacity-0 sm:text-5xl md:text-6xl lg:text-7xl",
              headingVisible && "animate-fade-in-up"
            )}
          >
            Here{"'"}s how
          </h2>
        </div>

        {/* Symmetrical projects grid: 2x2 */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* "with more scalable systems in the pipeline" */}
        <AnimatedSection className="mt-10 text-center lg:mt-14">
          <p className="font-serif text-xl italic text-foreground">
            With more scalable systems in the pipeline.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
