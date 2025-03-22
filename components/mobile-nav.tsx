"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useScrollPosition } from "@/hooks/use-background-contrast"


export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()
  const scrollY = useScrollPosition()

  // Determine if we're at the top section (assuming it has a dark background)
  const isAtTopSection = scrollY < 100

  // In light mode, we adapt based on scroll position
  // In dark mode, we use a consistent style
  const isDarkMode = theme === "dark"

  // Determine icon color based on position and theme
  const iconClass = isDarkMode
    ? "text-foreground/70 hover:text-foreground" // Dark mode - always use theme colors
    : isAtTopSection
      ? "text-white/70 hover:text-white" // Light mode + top section (dark bg)
      : "text-gray-700/90 hover:text-gray-900" // Light mode + scrolled (light bg)

  return (
    <div className="md:hidden">
      <button className={iconClass} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur-sm">
          <nav className="container flex flex-col space-y-6 p-6">
            <Link
              href="/features"
              className="text-xl font-medium text-foreground/70 hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-xl font-medium text-foreground/70 hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/templates"
              className="text-xl font-medium text-foreground/70 hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Templates
            </Link>
            <Link
              href="/resources"
              className="text-xl font-medium text-foreground/70 hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/login"
              className={cn(
                buttonVariants(),
                "bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-500 hover:to-purple-300 w-full",
              )}
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

