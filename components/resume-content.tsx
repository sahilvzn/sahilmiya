"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Download,
  MapPin,
  Mail,
  Globe,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Wrench,
  Award,
} from "lucide-react"
import { cn } from "@/lib/utils"

const experience = [
  {
    role: "Full Stack Developer & Commerce Lead",
    company: "The Wellness Shop",
    period: "Jan 2026 - Present",
    highlights: [
      "Leading commerce optimization and storefront engineering for The Wellness Shop and Imaraya.",
      "Built high-conversion Shopify storefronts with performance-focused architecture and CRO-driven UI patterns.",
      "Redesigned product pages and checkout flows, significantly improving user experience and AOV.",
      "Engineered responsive, brand-aligned design systems and data-driven A/B testing infrastructure.",
    ],
  },
  {
    role: "Brand Systems Engineer (Remote)",
    company: "Growth Escalators",
    period: "Sept 2025 - Dec 2025",
    highlights: [
      "Developed brand-focused Shopify infrastructure for Paraiso Comfortwears.",
      "Built automated inventory and fulfillment workflows to reduce operational overhead.",
      "Created scalable design systems for consistent brand presentation."
    ],
  },
  {
    role: "Freelance Digital Ecosystem Designer",
    company: "Nagesh Singh",
    period: "Feb 2026",
    highlights: [
      "Designed personal brand + authority-based digital ecosystem.",
      "Built revenue-generating funnel system combining content, social proof, and automation.",
    ],
  },
]

const skills = {
  "Commerce & Platforms": [
    "Shopify / Shopify Plus",
    "Liquid",
    "Headless Commerce",
    "WooCommerce",
    "D2C Architecture",
  ],
  "AI & Automation": [
    "AI Workflow Automation",
    "GPT / LLM Integration",
    "Zapier / Make",
    "n8n",
    "Custom AI Pipelines",
  ],
  "Growth & Strategy": [
    "CRO",
    "Conversion Architecture",
    "Funnel Design",
    "Retention Systems",
    "A/B Testing",
  ],
  "Technical": [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "REST APIs",
  ],
}



export function ResumeContent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = requestAnimationFrame(() => setIsVisible(true))
    return () => cancelAnimationFrame(timer)
  }, [])

  return (
    <div className="px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">
        {/* Back navigation */}
        <div
          className={cn(
            "mb-8 opacity-0",
            isVisible && "animate-fade-in-up"
          )}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Go back
          </Link>
        </div>

        {/* Resume paper */}
        <div
          className={cn(
            "overflow-hidden rounded-2xl bg-card shadow-lg ring-1 ring-border opacity-0",
            isVisible && "animate-fade-in-up stagger-1"
          )}
        >
          {/* Header */}
          <div className="border-b border-border bg-card p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-14 w-14 overflow-hidden rounded-full ring-2 ring-border sm:h-16 sm:w-16">
                    <Image
                      src="/Gemini_Generated_Image_ennhu1ennhu1ennh.png"
                      alt="Sahil Miya - Professional Headshot"
                      width={64}
                      height={64}
                      priority={true}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                      Sahil Miya
                    </h1>
                    <p className="text-base font-medium text-highlight-foreground sm:text-lg">
                      <mark className="rounded-md bg-highlight px-2 py-0.5">
                        AI Brand & Commerce Systems Architect
                      </mark>
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    India
                  </span>
                  <a
                    href="mailto:sahil.vzn@gmail.com"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                  >
                    <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                    sahil.vzn@gmail.com
                  </a>
                  <a
                    href="https://sahilmiya.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                  >
                    <Globe className="h-3.5 w-3.5" aria-hidden="true" />
                    sahilmiya.in
                  </a>
                </div>
              </div>
              <a
                href="https://drive.google.com/file/d/1FiQ_F6Co3Wkd6LUi_wDPbnlXSkAkmZeV/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-lg active:scale-100 self-start"
                aria-label="Download resume as PDF"
              >
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Download PDF</span>
                <span className="sm:hidden">PDF</span>
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="border-b border-border px-6 py-6 sm:px-8 sm:py-8 lg:px-10">
            <p className="text-base leading-relaxed text-foreground sm:text-lg">
              I design digital ecosystems that turn traffic into predictable revenue.
              From Shopify infrastructure to AI automations and social growth systems -{" "}
              <span className="font-semibold">I build brands from zero to scale</span>.
              I engineer AI-powered commerce systems that automate growth, increase conversions,
              and remove operational friction.
            </p>
          </div>

          {/* Experience */}
          <div className="border-b border-border px-6 py-8 sm:px-8 lg:px-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary" aria-hidden="true">
                <Briefcase className="h-4 w-4 text-foreground" />
              </div>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                Experience
              </h2>
            </div>

            <div className="flex flex-col gap-8">
              {experience.map((job, i) => (
                <div key={i} className="group relative">
                  {/* Timeline connector */}
                  {i < experience.length - 1 && (
                    <div
                      className="absolute left-[17px] top-10 bottom-[-32px] w-px bg-border hidden sm:block"
                      aria-hidden="true"
                    />
                  )}

                  <div className="flex gap-4 sm:gap-6">
                    {/* Timeline dot */}
                    <div
                      className="mt-1 hidden h-[9px] w-[9px] flex-shrink-0 rounded-full bg-foreground ring-4 ring-card sm:block"
                      style={{ marginLeft: "13px" }}
                      aria-hidden="true"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <div>
                          <h3 className="text-base font-semibold text-foreground">
                            {job.role}
                          </h3>
                          <p className="text-sm font-medium text-muted-foreground">
                            {job.company}
                          </p>
                        </div>
                        <span className="text-xs font-medium text-muted-foreground whitespace-nowrap rounded-full bg-secondary px-3 py-1 self-start">
                          {job.period}
                        </span>
                      </div>
                      <ul className="mt-3 flex flex-col gap-2">
                        {job.highlights.map((hl, j) => (
                          <li
                            key={j}
                            className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-highlight"
                          >
                            {hl}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div className="border-b border-border px-6 py-8 sm:px-8 lg:px-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary" aria-hidden="true">
                <ExternalLink className="h-4 w-4 text-foreground" />
              </div>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                Selected Projects
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { name: "Imaraya", url: "imaraya.com", desc: "High-conversion Shopify build" },
                { name: "The Wellness Shop", url: "thewellnessshop.in", desc: "D2C commerce optimization" },
                { name: "Paraiso Comfortwears", url: "paraisocomfortwears.com", desc: "Brand Shopify infrastructure" },
                { name: "Nagesh Singh", url: "nageshsingh.in", desc: "Personal brand ecosystem" },
              ].map((project) => (
                <a
                  key={project.name}
                  href={`https://${project.url.startsWith("www.") ? "" : "www."}${project.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl bg-secondary/60 p-4 transition-all duration-200 hover:bg-secondary hover:shadow-sm"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">
                      {project.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {project.desc}
                    </p>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="border-b border-border px-6 py-8 sm:px-8 lg:px-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary" aria-hidden="true">
                <Wrench className="h-4 w-4 text-foreground" />
              </div>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                Skills & Tools
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy */}
          <div className="px-6 py-8 sm:px-8 lg:px-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary" aria-hidden="true">
                <Award className="h-4 w-4 text-foreground" />
              </div>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                Philosophy
              </h2>
            </div>
            <div className="rounded-xl bg-surface-dark p-5 sm:p-6">
              <p className="text-base leading-relaxed text-surface-dark-foreground sm:text-lg">
                Scaling a brand isn{"'"}t about prettier design.
                It{"'"}s about{" "}
                <strong className="text-surface-dark-foreground">strong positioning</strong>,{" "}
                <strong className="text-surface-dark-foreground">conversion logic</strong>,{" "}
                <strong className="text-surface-dark-foreground">operational leverage</strong>,{" "}
                and{" "}
                <strong className="text-surface-dark-foreground">automated growth loops</strong>.
              </p>
              <p className="mt-3 text-sm text-highlight font-medium">
                I build brands that are engineered to scale - not patched together.
              </p>
            </div>
          </div>
        </div>

        {/* Footer under resume */}
        <div
          className={cn(
            "mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between opacity-0",
            isVisible && "animate-fade-in stagger-3"
          )}
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-full ring-1 ring-border">
              <Image
                src="/Gemini_Generated_Image_ennhu1ennhu1ennh.png"
                alt="Sahil Miya - Profile Miniature"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-xs text-muted-foreground">
                Designed & Engineered by Sahil Miya
              </p>
              <p className="text-xs text-muted-foreground">
                AI-Powered Brand Systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
