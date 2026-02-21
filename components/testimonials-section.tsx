"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

const selectedProjects = [
  {
    name: "Imaraya",
    url: "https://imaraya.com/",
    description: "High-conversion Shopify build with performance-focused architecture.",
    colorBg: "bg-blue-50",
    colorText: "text-blue-700",
    colorAccent: "bg-blue-100",
    logo: "/imaraya-logo_2.webp",
  },
  {
    name: "The Wellness Shop",
    url: "https://www.thewellnessshop.in/",
    description: "Commerce optimization + storefront engineering for a high-volume D2C brand.",
    colorBg: "bg-green-50",
    colorText: "text-green-700",
    colorAccent: "bg-green-100",
    logo: "/1001141017.webp",
  },
  {
    name: "Paraiso Comfortwears",
    url: "https://paraisocomfortwears.com/",
    description: "Brand-focused Shopify infrastructure + clean UX conversion flow.",
    colorBg: "bg-orange-50",
    colorText: "text-orange-700",
    colorAccent: "bg-orange-100",
    logo: "/LOGO-ABOUT_US_PAGE.avif",
  },
  {
    name: "Nagesh Singh",
    url: "https://nageshsingh.in/",
    description: "Personal brand + authority-based digital ecosystem.",
    colorBg: "bg-red-50",
    colorText: "text-red-700",
    colorAccent: "bg-red-100",
    logo: "/avatar.png",
  },
]

export function TestimonialsSection() {
  const [sectionRef, isVisible] = useAnimateOnScroll<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      id="work"
      ref={sectionRef as React.RefObject<HTMLElement>}
      aria-label="Selected projects"
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
            Selected{" "}
            <span className="font-serif font-normal italic">Projects</span>
          </h2>
        </div>

        {/* Projects grid - balanced 2x2 */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {selectedProjects.map((project, i) => (
            <AnimatedSection key={project.name} delay={`${0.1 + i * 0.08}s`}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name} website`}
                className="group flex h-full flex-col gap-4 rounded-2xl bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 sm:p-8"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl text-base font-bold",
                        project.logo ? "bg-white p-1 shadow-sm ring-1 ring-black/5" : cn(project.colorBg, project.colorText)
                      )}
                      aria-hidden="true"
                    >
                      {project.logo ? (
                        <Image
                          src={project.logo}
                          alt={`Sahil Miya - ${project.name} Logo`}
                          width={48}
                          height={48}
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        project.name.charAt(0)
                      )}
                    </div>
                    <div>
                      <p className="text-base font-semibold text-foreground sm:text-lg">
                        {project.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate max-w-[200px] sm:max-w-none">
                        {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex-shrink-0 rounded-full bg-secondary p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent"
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="h-4 w-4 text-foreground" />
                  </div>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {project.description}
                </p>
                <div className={cn("h-1 w-12 rounded-full transition-all duration-300 group-hover:w-20", project.colorAccent)} />
              </a>
            </AnimatedSection>
          ))}
        </div>

        {/* Transition line */}
        <AnimatedSection className="mt-14 lg:mt-20" delay="0.4s">
          <div className="rounded-2xl bg-secondary p-6 sm:p-8 lg:p-12">
            <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
              But the real story
            </h3>
            <p className="text-lg text-muted-foreground sm:text-xl">
              comes from the{" "}
              <mark className="rounded-md bg-highlight px-2 py-0.5 text-highlight-foreground font-semibold">
                systems behind the surface
              </mark>
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Brands scale when infrastructure supports ambition.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
