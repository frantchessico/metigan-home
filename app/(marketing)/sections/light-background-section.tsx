"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface LightBackgroundSectionProps {
  children: React.ReactNode
  className?: string
}

export function LightBackgroundSection({ children, className = "" }: LightBackgroundSectionProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Light gradient background - top-left to bottom-right */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-purple-100/70 -z-10" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#894EEE 0.5px, transparent 0.5px), linear-gradient(to right, #894EEE 0.5px, transparent 0.5px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating elements - more subtle for light theme */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        <motion.div
          className="absolute top-1/4 left-[15%] w-16 h-16 rounded-full bg-gradient-to-r from-purple-200 to-purple-300 opacity-20 blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-[20%] w-24 h-24 rounded-full bg-gradient-to-r from-purple-300 to-blue-200 opacity-20 blur-xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-[30%] w-20 h-20 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 opacity-20 blur-xl"
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.25, 0.2],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Subtle bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full text-purple-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="0.3"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

