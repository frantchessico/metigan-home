"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useScrollPosition } from "@/hooks/use-background-contrast"
import { motion, AnimatePresence } from "framer-motion"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()
  const scrollY = useScrollPosition()

  // Close mobile nav when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isOpen])

  // Prevent scrolling when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Determine if we're at the top section
  const isAtTopSection = scrollY < 100
  const isDarkMode = theme === "dark"

  // Determine icon color based on position and theme
  const iconClass = isDarkMode
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
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  }

  return (
    <div className="md:hidden">
      <button
        className={cn(
          iconClass,
          "flex items-center justify-center h-10 w-10 rounded-full transition-colors hover:bg-white/10",
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur-md"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.nav className="container flex flex-col space-y-6 p-8 pt-12">
              {navItems.map((item, i) => (
                <motion.div key={item.href} variants={itemVariants}>
                  <Link
                    href={item.href}
                    className="flex items-center text-xl font-medium text-foreground/80 hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="relative overflow-hidden group">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="pt-4">
                <Link
                  href="https://home.metigan.com"
                  className={cn(
                    buttonVariants(),
                    "bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-500 hover:to-purple-300 w-full mt-4 py-6 text-lg font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

