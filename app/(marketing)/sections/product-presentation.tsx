"use client"

import { ArrowRight } from "lucide-react"
import { BorderBeam } from "@/components/magicui/border-beam"
import ShineBorder from "@/components/magicui/shine-border"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion } from "framer-motion"
import { InvertedBackgroundSection } from "./inverted-background-section"
import Image from "next/image"

export function ProductPresentation() {
  return (
    <InvertedBackgroundSection>
      <section className="container py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 px-4 sm:px-6 md:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="space-y-3 sm:space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex justify-center lg:justify-start">
              <ShineBorder
                className="text-center capitalize bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base md:text-lg font-medium rounded-full"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                duration={2.5}
              >
                <span className="inline-flex items-center gap-2">
                  <span>Boost Your Email Marketing</span>
                  <span className="text-lg sm:text-xl">🚀</span>
                </span>
              </ShineBorder>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center lg:text-left">
              Engage your audience with{" "}
              <span className="bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                Metigan's powerful email automation
              </span>
            </h2>
            <p className="text-purple-100 text-base sm:text-lg text-center lg:text-left">
              Automate, personalize, and track your emails effortlessly. With Metigan, you optimize engagement while
              saving time.
            </p>
            <div className="pt-2 sm:pt-4 flex justify-center lg:justify-start">
              <Link
                href="/features"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "group transition-all duration-300 border-white/30 text-white hover:bg-white hover:text-primary hover:border-white",
                )}
              >
                Discover Metigan <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="relative rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl mt-6 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src="https://images.pexels.com/photos/7163409/pexels-photo-7163409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Team strategizing email marketing"
              className="w-full h-auto object-cover rounded-xl shadow-lg"
              width={500}
              height={500}
              priority
            />
            <BorderBeam
              size={150}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300 hidden sm:block"
            />
          </motion.div>
        </div>
      </section>
    </InvertedBackgroundSection>
  )
}

