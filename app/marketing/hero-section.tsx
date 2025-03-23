"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-20 lg:pt-28 pb-16 md:pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90 -z-10" />

      {/* Animated particles */}
      <div className="absolute inset-0 -z-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#894EEE]/20 blur-xl"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15, 0],
              opacity: [0.1, Math.random() * 0.3 + 0.1, 0.1],
              scale: [1, Math.random() * 0.3 + 1, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Elevate Your <span className="text-[#894EEE]">Email Marketing</span> to New Heights
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Powerful tools for creating, automating, and optimizing email campaigns that drive engagement and boost
              conversions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Button className="h-12 bg-[#894EEE] hover:bg-[#894EEE]/90 text-white">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-4 text-white/60 text-sm"
          >
            Free 14-day trial. No credit card required.
          </motion.div>
        </div>
      </div>
    </section>
  )
}

