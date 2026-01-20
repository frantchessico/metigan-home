"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { useScrollPosition } from "@/hooks/use-background-contrast"
import { motion } from "framer-motion"

export function MainNav() {
  const navRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const scrollY = useScrollPosition()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Determine if we're at the top section
  const isAtTopSection = scrollY < 100
  const isDarkMode = theme === "dark"

  // Determine text color based on position and theme
  const textClass = isDarkMode
    ? "text-foreground/80 hover:text-foreground"
    : isAtTopSection
      ? "text-white/80 hover:text-white"
      : "text-gray-700/90 hover:text-gray-900"

  const navItems = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/templates", label: "Templates" },
    { href: "/forms", label: "Forms" },
    { href: "/resources", label: "Resources" },
    { href: "https://developers.metigan.com", label: "Developers", external: true },
  ]

  return (
    <div ref={navRef}>
      <nav className="flex items-center space-x-8 text-sm">
        {navItems.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <span className={cn(textClass, "transition-colors font-medium relative z-10")}>{item.label}</span>
            {hoveredIndex === index && (
              <motion.span
                className="absolute bottom-0 left-0 h-[2px] bg-purple-400 w-full"
                layoutId="navIndicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </Link>
        ))}
      </nav>
    </div>
  )
}

