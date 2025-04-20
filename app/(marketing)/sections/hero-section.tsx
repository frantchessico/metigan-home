"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Mail, CheckCircle, Zap, Clock, BarChart3, Loader2, X, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import Image from "next/image"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [isEmailFocused, setIsEmailFocused] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showBanner, setShowBanner] = useState(false)
  const [bannerClosed, setBannerClosed] = useState(false)
  const [showPulseButton, setShowPulseButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Show banner after 5 seconds or on 50% scroll
    const timer = setTimeout(() => {
      if (!bannerClosed) setShowBanner(true)
    }, 5000)

    const handleScrollForBanner = () => {
      if (window.scrollY > window.innerHeight * 0.5 && !bannerClosed) {
        setShowBanner(true)
      }
    }

    window.addEventListener("scroll", handleScrollForBanner)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScrollForBanner)
    }
  }, [bannerClosed])

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
      // Mock implementation - in a real app, you would call an API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate network request
      toast.success("Thank you for subscribing to our newsletter!")
      setEmail("")
    } catch (error) {
      toast.error("Failed to subscribe. Please try again later.")
      console.error("Newsletter subscription error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeBanner = () => {
    setBannerClosed(true)
    setShowBanner(false)
    // Show the pulse button after a short delay
    setTimeout(() => {
      setShowPulseButton(true)
    }, 500)
  }

  const reopenBanner = () => {
    setShowPulseButton(false)
    setShowBanner(true)
    setBannerClosed(false)
  }

  return (
    <section className="relative w-full overflow-hidden">
      <AnimatePresence>
        {showBanner && !bannerClosed && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-1/3 z-50 w-72 sm:w-80 md:w-96 shadow-xl rounded-l-lg overflow-hidden border border-r-0 border-purple-300/30"
            style={{ maxHeight: "450px" }}
          >
            {/* Ad label */}
            <div className="absolute top-1 right-1 bg-gray-700/70 text-white text-[10px] px-1 rounded">Ad</div>

            {/* Close button - Positioned on the left side */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-1 top-1 bg-black/30 text-white hover:bg-black/50 z-10 h-8 w-8 rounded-full"
              onClick={closeBanner}
              aria-label="Close banner"
            >
              <X className="h-4 w-4" />
            </Button>

            {/* Banner content */}
            <div className="flex flex-col bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
              {/* Banner image */}
              <div className="relative h-40 w-full">
                <Image
                  src="https://images.pexels.com/photos/5711039/pexels-photo-5711039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Email marketing dashboard"
                  width={400}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Banner text with more prominent styling */}
              <div className="p-5 text-white">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">🚀</span>
                  <h3 className="font-bold text-xl">Metigan Email</h3>
                </div>

                {/* Highlighted copy with more visible font */}
                <div className="mb-4 bg-purple-700/50 p-3 rounded-lg border-l-4 border-yellow-400">
                  <p className="font-bold text-base leading-tight">
                    Send up to <span className="text-yellow-300 text-lg">3,000 emails</span> per month.
                  </p>
                  <p className="text-yellow-300 font-extrabold text-xl my-1">Free.</p>
                  <p className="font-medium text-sm">Create your account today and get started in minutes.</p>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold text-base py-6"
                  onClick={() => (window.location.href = "https://app.metigan.com/")}
                >
                  <span>Start now</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                {/* Added a text link to close the banner as an alternative */}
                <p className="text-center mt-3 text-xs text-purple-200/80">
                  <button onClick={closeBanner} className="underline hover:text-white transition-colors">
                    No thanks, maybe later
                  </button>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulsating button that appears when banner is closed */}
      <AnimatePresence>
        {showPulseButton && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 0 0 rgba(137, 78, 238, 0.4)",
                  "0 0 0 10px rgba(137, 78, 238, 0)",
                  "0 0 0 0 rgba(137, 78, 238, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            >
              <Button
                onClick={reopenBanner}
                className="h-14 w-14 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 shadow-lg"
                aria-label="Open special offer"
              >
                <div className="flex flex-col items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-white mb-0.5" />
                  <span className="text-[10px] text-white">Offer</span>
                </div>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
