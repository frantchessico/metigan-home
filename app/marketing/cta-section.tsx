"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  const benefits = ["No credit card required", "14-day free trial", "Cancel anytime", "24/7 support"]

  return (
    <section className="container py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#894EEE] to-[#6E35E0] p-8 md:p-12 lg:p-16">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to transform your email marketing strategy?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8">
            Join thousands of businesses that use our platform to create, automate, and optimize their email campaigns.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-white">
                <Check className="h-5 w-5 text-white" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#894EEE] hover:bg-white/90">
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

