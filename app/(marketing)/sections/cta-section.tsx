"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { BorderBeam } from "@/components/magicui/border-beam"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react"
import { sendNewsletterEmail } from "@/app/email/metigan"

export function CtaSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [error, setError] = useState("")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Please enter your email address")
      return
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    // Simulate API call

    try {
      const result = await sendNewsletterEmail(email)
      if ('success' in result && result.success === true) {
        setIsSubmitting(false)
        setIsSubscribed(true)
      } else {
        setIsSubmitting(false)
        setIsSubscribed(false)
        const errorMessage = 'message' in result ? result.message : 'Failed to subscribe. Please try again.'
        setError(errorMessage)
      }
    } catch (error) {
      setIsSubmitting(false)
      setIsSubscribed(false)
      setError("An error occurred. Please try again.")
    }
   

    
  }

  return (
    <section className="container py-12 md:py-24 lg:py-32">
      <div className="relative overflow-hidden rounded-lg px-6 py-16 sm:px-12 sm:py-24 md:py-32 text-center">
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

        <div className="relative z-10 mx-auto max-w-3xl">
          <motion.h2
            className="font-heading text-3xl leading-tight text-white sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Ready to transform your email experience?
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-white md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Join thousands of satisfied users who have revolutionized their email workflow. Start your free trial today.
          </motion.p>

          {/* Newsletter subscription form */}
          <motion.div
            className="mt-10 mx-auto max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-white text-lg font-medium flex items-center justify-center gap-2 mb-4">
                <Mail className="h-5 w-5" /> Subscribe to our newsletter
              </h3>

              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <div className="relative">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className={cn(
                          "bg-white/20 border-white/30 text-white placeholder:text-white/60 h-12 pr-12",
                          error ? "border-red-400" : "",
                        )}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSubmitting}
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60">
                        <Mail className="h-5 w-5" />
                      </div>
                    </div>
                    {error && <p className="text-red-200 text-sm">{error}</p>}
                  </div>

                  <button
                    type="submit"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "w-full bg-white text-primary hover:bg-white/90 transition-all duration-300 h-12",
                      isSubmitting ? "opacity-70 cursor-not-allowed" : "",
                    )}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Subscribing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Subscribe <ArrowRight className="h-4 w-4" />
                      </span>
                    )}
                  </button>

                  <p className="text-xs text-white/70">We respect your privacy. Unsubscribe at any time.</p>
                </form>
              ) : (
                <div className="py-4 text-center">
                  <div className="flex justify-center mb-3">
                    <div className="rounded-full bg-white/20 p-2">
                      <CheckCircle2 className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-white text-lg font-medium">Thank you for subscribing!</h4>
                  <p className="text-white/80 mt-2">
                    We've sent a confirmation email to <span className="font-medium">{email}</span>
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link
              href="https://app.metigan.com"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white text-primary hover:bg-white/90 hover:shadow-md transition-all duration-300 hover:scale-105",
              )}
            >
              Start For Free
            </Link>
           
          </motion.div>
        </div>
        <BorderBeam size={400} className="opacity-40 hover:opacity-60 transition-opacity duration-700" />
      </div>
    </section>
  )
}

