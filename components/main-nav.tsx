"use client"

import { useRef } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { useScrollPosition } from "@/hooks/use-background-contrast"


export function MainNav() {
  const navRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const scrollY = useScrollPosition()

  // Determine if we're at the top section (assuming it has a dark background)
  // You can adjust this threshold based on your layout
  const isAtTopSection = scrollY < 100

  // In light mode, we adapt based on scroll position
  // In dark mode, we use a consistent style
  const isDarkMode = theme === "dark"

  // Determine text color based on position and theme
  const textClass = isDarkMode
    ? "text-foreground/70 hover:text-foreground" // Dark mode - always use theme colors
    : isAtTopSection
      ? "text-white/70 hover:text-white" // Light mode + top section (dark bg)
      : "text-gray-700/90 hover:text-gray-900" // Light mode + scrolled (light bg)

  return (
    <div ref={navRef}>
      <nav className="flex items-center space-x-6 text-sm">
        <Link href="/features" className={cn(textClass, "transition-colors font-medium")}>
          Features
        </Link>
        <Link href="/pricing" className={cn(textClass, "transition-colors font-medium")}>
          Pricing
        </Link>
        <Link href="/templates" className={cn(textClass, "transition-colors font-medium")}>
          Templates
        </Link>
        <Link href="/forms" className={cn(textClass, "transition-colors font-medium")}>
          Forms
        </Link>
        <Link href="/resources" className={cn(textClass, "transition-colors font-medium")}>
          Resources
        </Link>
      </nav>
    </div>
  )
}

