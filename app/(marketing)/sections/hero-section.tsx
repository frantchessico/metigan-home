"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Mail, CheckCircle, Zap, Clock, BarChart3, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { sendNewsletterEmail } from "@/app/email/metigan"
import { toast } from "sonner"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [isEmailFocused, setIsEmailFocused] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleSubmitNewsletter = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast.error("Please enter your email address")
      return
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    try {
      await sendNewsletterEmail(email)
      toast.success("Thank you for subscribing to our newsletter!")
      setEmail("")
    } catch (error) {
      toast.error("Failed to subscribe. Please try again later.")
      console.error("Newsletter subscription error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#894EEE]/70 -z-10" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#894EEE 1px, transparent 1px), linear-gradient(to right, #894EEE 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        <motion.div
          className="absolute top-1/4 left-[15%] w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 opacity-20 blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-[20%] w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-[30%] w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20 blur-xl"
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container relative z-10 px-4 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center mb-12">
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2"
            >
              <span className="flex h-2 w-2 rounded-full bg-purple-400" />
              <span className="text-sm font-medium text-purple-200">Powerful Email Platform</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight"
            >
              Mass Email Delivery,
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                Simplified for Everyone
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 max-w-[42rem] leading-normal text-purple-100 sm:text-xl sm:leading-8"
            >
              Send thousands of emails with ease. Schedule, track, and personalize your campaigns with our powerful
              platform.
            </motion.p>

            {/* Email signup form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-8 sm:mt-10 w-full max-w-md"
            >
              <form onSubmit={handleSubmitNewsletter}>
                <div
                  className={cn(
                    "relative rounded-xl p-1 transition-all duration-300",
                    isEmailFocused ? "bg-gradient-to-r from-purple-500 to-purple-300" : "bg-white/10",
                  )}
                >
                  <div className="relative flex flex-col sm:flex-row items-center rounded-lg bg-black/80 backdrop-blur-sm">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="h-12 sm:h-14 w-full border-0 bg-transparent pl-4 pr-4 sm:pr-20 text-white placeholder:text-white/60 focus:outline-none focus:ring-0"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setIsEmailFocused(true)}
                      onBlur={() => setIsEmailFocused(false)}
                      disabled={isSubmitting}
                    />
                    <Button
                      type="submit"
                      className="mt-2 sm:mt-0 sm:absolute sm:right-1 sm:top-1/2 sm:-translate-y-1/2 w-full sm:w-auto bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-500 hover:to-purple-300 h-10 sm:h-12"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          <span>Subscribing...</span>
                        </>
                      ) : (
                        <>
                          <span className="mr-2">Subscribe Now</span>
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </form>
              <p className="mt-3 text-center text-sm text-purple-200/70">
                Stay ahead! Subscribe to our newsletter for exclusive updates.
              </p>
            </motion.div>
          </div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-10 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-sm p-4 sm:p-6 transition-all duration-300 hover:border-purple-500/40 hover:bg-black/50"
              >
                <div className="mb-3 sm:mb-4 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg bg-purple-500/20">
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-300" />
                </div>
                <h3 className="mb-1 sm:mb-2 text-base sm:text-lg font-medium text-white">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-purple-100/80">{feature.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-12 sm:mt-16 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-x-8 sm:gap-x-12 gap-y-6 text-center"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-xs sm:text-sm text-purple-200/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full text-[#894EEE]/10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

const features = [
  {
    title: "Intelligent Scheduling",
    description: "Send emails at the perfect time with AI-powered delivery optimization.",
    icon: Clock,
  },
  {
    title: "Advanced Analytics",
    description: "Track opens, clicks, and conversions with detailed visual reports.",
    icon: BarChart3,
  },
  {
    title: "Personalization Engine",
    description: "Create dynamic content that adapts to each recipient automatically.",
    icon: Mail,
  },
  {
    title: "Delivery Guarantee",
    description: "Our infrastructure ensures your emails reach the inbox, not spam.",
    icon: CheckCircle,
  },
  {
    title: "Lightning Fast",
    description: "Send thousands of emails in minutes with our high-performance system.",
    icon: Zap,
  },
  {
    title: "Easy Integration",
    description: "Connect with your favorite tools through our simple API and webhooks.",
    icon: ArrowRight,
  },
]

const stats = [
  { value: "99.9%", label: "Delivery Rate" },
  { value: "10M+", label: "Emails Sent Daily" },
  { value: "5,000+", label: "Happy Customers" },
  { value: "24/7", label: "Expert Support" },
]

