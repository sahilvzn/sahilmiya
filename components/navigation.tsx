"use client"

import { useState, useEffect, useCallback } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/#work", label: "My Work" },
  { href: "/#how-i-build", label: "How I Build" },
  { href: "/#contact", label: "Let's Build" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  const isResumePage = pathname === "/resume"

  return (
    <>

      <nav
        role="navigation"
        aria-label="Main navigation"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || isResumePage
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo / Name */}
          <Link
            href="/"
            className="text-foreground font-sans text-base font-semibold tracking-tight"
          >
            Sahil Miya
            <span className="text-muted-foreground font-normal hidden sm:inline">
              {" "}
              - AI Brand Architect
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1.5 lg:flex" role="menubar">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                role="menuitem"
                className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/resume"
              role="menuitem"
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                isResumePage
                  ? "bg-highlight text-highlight-foreground"
                  : "bg-foreground text-primary-foreground hover:bg-foreground/90"
              )}
            >
              Resume
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile overlay menu */}
        <div
          id="mobile-nav"
          role="menu"
          aria-hidden={!mobileOpen}
          className={cn(
            "fixed inset-0 top-[68px] z-40 flex flex-col bg-background px-6 pt-6 pb-12 transition-all duration-300 lg:hidden",
            mobileOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          )}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                role="menuitem"
                tabIndex={mobileOpen ? 0 : -1}
                onClick={closeMobile}
                className="rounded-2xl bg-secondary px-6 py-4 text-base font-medium text-secondary-foreground transition-colors hover:bg-accent active:bg-accent"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/resume"
              role="menuitem"
              tabIndex={mobileOpen ? 0 : -1}
              onClick={closeMobile}
              className={cn(
                "rounded-2xl px-6 py-4 text-base font-medium text-center transition-colors",
                isResumePage
                  ? "bg-highlight text-highlight-foreground"
                  : "bg-foreground text-primary-foreground hover:bg-foreground/90 active:bg-foreground/80"
              )}
            >
              Resume
            </Link>
          </div>

          {/* Mobile footer info */}
          <div className="mt-auto pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">Sahil Miya</p>
            <p className="text-xs text-muted-foreground mt-1">AI-Powered Brand Systems</p>
          </div>
        </div>
      </nav>
    </>
  )
}
