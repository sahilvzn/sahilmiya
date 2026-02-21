"use client"

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: string
  as?: "div" | "section"
  threshold?: number
  id?: string
}

export function AnimatedSection({
  children,
  className = "",
  delay = "0s",
  as: Tag = "div",
  threshold = 0.15,
  id,
}: AnimatedSectionProps) {
  const [ref, isVisible] = useAnimateOnScroll<HTMLDivElement>({ threshold })

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      id={id}
      className={cn(
        "opacity-0 transition-opacity",
        isVisible && "animate-fade-in-up",
        className
      )}
      style={{ animationDelay: delay }}
    >
      {children}
    </Tag>
  )
}
